<template>

  <div class="q-pa-md" style="">
    <div class="q-gutter-md">
      <div>
        <!--        <q-badge color="teal">Model: "{{ search }}"</q-badge>-->
      </div>

      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

    </div>
  </div>

  <div class="q-pa-md row items-start q-gutter-md" v-if="myitemsLength">
    <q-card flat bordered
            class="my-card"
            v-for="(i, index) in getData" :key="i.id"
            @click="selectedProducts(i.id, i.name)">
      <q-card-section class="bg-deep-orange-10 text-white">
        <div class="Subtitle 2 text-weight-bolder">{{ i.name }}</div>
      </q-card-section>
    </q-card>
  </div>

  <!--  <div class="q-mt-sm">-->
  <!--    {{myproducts}}-->
  <!--  </div>-->

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
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
const ITEMS = master.ITEM
export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const myproducts = ref([] )
    let num1
    let num2
    let MYITEMS = ref(ITEMS)
    const search = ref('')

    let myitemsLength = computed(()=>{
      if(search.value === '')
        return Object.keys(MYITEMS.value).length
      else
        return searchResult.length
    })

    const selection =  computed(() => {
      return  myproducts;
    })

    const selectedProducts = function(id, item ){
      var msg =''
      var exists = myproducts.value.some(function(field) {
        return field.id === id;
      });
      if (!exists) {
        myproducts.value.push({ id, item, qty: 1 });
        msg = 'New item added'
      }else{
        myproducts.value.find(x => x.id === id).qty+=1;
        msg = 'Item quantity updated'
      }
      positivemsg(msg)
    }

    const positivemsg = function (msg){
      $q.notify({
        type: 'positive',
        message: msg,
        position:'top-right',
        timeout:800
      })
    }
    let keyword
    let searchResult =  []

    const getData =  computed(() => {
      if (search.value === ""){
        searchResult = Object.values(MYITEMS.value)
      }else{
        keyword = search.value.toLowerCase();
        searchResult = Object.values(MYITEMS.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
      }
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS = searchResult.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return e
      })
      return newArr
    })

    const order = function (){
      router.push({
        name: 'ORDER', params: { myproducts : JSON.stringify( myproducts.value) }
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    let nextPage= ref(null)
    const totalPages= ref(10)

    return {
      MYITEMS,
      search,
      myitemsLength,
      positivemsg,
      myproducts,
      selection,
      selectedProducts,
      page,
      currentPage,
      nextPage,
      totalPages,
      getData,
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


