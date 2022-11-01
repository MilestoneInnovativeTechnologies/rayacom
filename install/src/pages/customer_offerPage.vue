<template>

  <div class="q-pa-md fullwidth">
    <div class="q-gutter-md">
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
      >        <template v-slot:append><q-icon name="search" /></template>
      </q-input>
    </div>
  </div>

  <div class="q-pa-md row items-start q-gutter-md" v-if="myitemsLength">
    <q-card flat bordered
            class="my-card"
            v-for="(i, index) in getData" :key="i.id"
            @click="selectedProducts(i.id, i.item.name)">

      <q-card-section class="bg-brand text-white">
        <q-item-label>{{ i.item.name }}</q-item-label>
        <q-item-label>quantity :{{ i.minimum_quantity }}</q-item-label>
        <q-item-label>offer  :{{ i.offer_quantity }}</q-item-label>
<!--        <div class="Subtitle 2 text-weight-bolder">{{ i.name }}</div>-->
<!--        <div class="Subtitle 2 text-weight-bolder">{{ i.quantity }}</div>-->
<!--        <div class="Subtitle 2 text-weight-bolder">{{ i.offer_quantity }}</div>-->
      </q-card-section>
    </q-card>
  </div>

<!--    <div class="q-mt-sm">-->
<!--      {{myproducts}}-->
<!--    </div>-->

  <div class="q-pa-lg flex flex-center" v-if="myitemsLength">
    <q-pagination
      v-model="page"
      :min="currentPage"
      :max="Math.ceil(myitemsLength/totalPages)"
      :max-pages="7"
      direction-links
      boundary-links
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
      active-color="brand"
    />
  </div>

  <div class="q-pa-md q-gutter-sm" v-if="myproducts.length">
    <q-btn unelevated rounded color="positive" label="Proceed"  icon-right="send" class="full-width"
           @click="order()">
    </q-btn>
  </div>

</template>

<script>
import { computed, ref  } from 'vue'
import { useOfferStore } from 'stores/offers'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
const offerStore = useOfferStore()
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const myproducts = ref([] )
    let num1
    let num2

    const search = ref('')

    // const MYOFFER = computed(()=>{
    //   return master.OFFERS
    // })

    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(offerStore.offers)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(offerStore.offers).filter(word => word.item.name.toLowerCase().indexOf(keyword) > -1);
      }
    })

    const myitemsLength = computed(()=>{
      return searchResult.value.length
    })

    const getData =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS = searchResult.value.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return e
      })
      return newArr
    })

    const selectedProducts = function(item, itemname ){
      var msg =''
      var exists = myproducts.value.some(function(field) {
        return field.item === item;
      });
      if (!exists) {
        myproducts.value.push({ item, itemname, quantity: 1 });
        msg = 'New item added'
      }else{
        myproducts.value.find(x => x.item === item).quantity+=1;
        msg = 'Item quantity updated'
      }
      positivemsg(msg)
    }

    const positivemsg = function (msg){
      $q.notify({
        type: 'positive',
        icon: 'cloud_done',
        message: msg,
        position:'top-right',
        timeout:800
      })
    }

    const order = function (){
      var products = JSON.stringify(myproducts.value)
      router.push({
        // name: 'ORDER', params: { myproducts : JSON.stringify( myproducts.value) }
        name: 'ORDER', state: { products }
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    let nextPage= ref(null)
    const totalPages= ref(10)

    return {

      search,
      searchResult,
      // searchOffer,
      myitemsLength,
      page,
      currentPage,
      nextPage,
      totalPages,
      getData,
      positivemsg,
      myproducts,
      selectedProducts,
      order,
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


