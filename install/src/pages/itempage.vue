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
            @click="selectedProducts(i.id, i.name)">
<!--            @click="showofferItem( i.id, i.name)">-->
<!--           -->
<!--            -->


<!--      <section-->
<!--        v-if="MYOFFERS.includes(i.id)">-->
<!--      </section>-->
      <q-card-section class="bg-brand text-white">






<!--        <div class="Subtitle 2 text-weight-bolder">{{ i.name }}</div>-->
        <div class="Subtitle 2 text-weight-bolder">{{ i.name }}

          <q-icon name="star" color="yellow" label="offer" size="1rem" style="border-right: #F2C037"
                  v-if="MYOFFERS.includes(i.id)">
          <q-tooltip>Offered Item</q-tooltip>
          </q-icon>
          <q-item-label class="text-subtitle2" v-if="MYOFFERS.includes(i.id)">
            Buy: {{newobj[i.id].min_qty}} &nbsp; Get: {{newobj[i.id].offer_qty }}</q-item-label>
<!--          <q-item-label class="text-subtitle2" v-if="MYOFFERS.includes(i.id)">-->
<!--            Get: {{newobj[i.id].offer_qty }}</q-item-label>-->
        </div>
<!--        <q-item-label class="text-subtitle2">Buy: {{newobj.minimum_quantity}} </q-item-label>-->
<!--        <q-item-label class="text-subtitle2">Get: {{newobj.offer_qty }}</q-item-label>-->

<!--        <div class="Subtitle 2 text-weight-bolder">Quantity :{{ i.minimum_quantity }}</div>-->
<!--        <div class="Subtitle 2 text-weight-bolder">Offer :{{ i.offer_quantity  }}</div>-->
      </q-card-section>
    </q-card>
  </div>
<!--  <section-->
<!--    v-if="section('name')">-->
<!--    <h1>name</h1>-->
<!--  </section>-->

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
import { useQuasar } from 'quasar'
import { useOfferStore } from 'stores/offers'
import { useRouter } from 'vue-router'
const offerStore = useOfferStore()
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
const ID = ref(AUTH_DATA)
export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const myproducts = ref([] )
    let num1
    let num2

    const search = ref('')
    const MYITEMS = computed(()=> {
      // console.log(MYITEMS[id.value])
      return master.ITEM
    })



    const MYOFFERS = computed(()=>{
      // console.log(MYITEMS[id.value])
      // return master.ITEM
      return Object.values(offerStore.offers).map((e)=> {
        return e.item.id
        })
    })
    // console.log(MYOFFERS.value)
    // console.log(offerStore.offers)




    let oi={}
    const newobj=computed(()=>{
      for (let i in offerStore.offers){
        oi[offerStore.offers[i].item.id]= {  min_qty: offerStore.offers[i].minimum_quantity, offer_qty: offerStore.offers[i].offer_quantity}
      }
      return oi;
    })
    // console.log(newobj.value)
    // console.log(newobj.value['1000004'])


    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(MYITEMS.value)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(MYITEMS.value).filter(word => word.item.name.toLowerCase().indexOf(keyword) > -1);
      }
    })

    // const MYOFFERS = computed(()=> {
    //   return offerStore.offer
    // })
    // console.log(MYOFFERS)

    // const showofferItem = computed(()=> {
    //
    //   // if (id == 'star') {
    //   //   return Object.values(MYOFFERS.value)
    //   // } else {
    //   //   return Object.values(MYITEMS.value)
    //   // }
    // })



    // const MYOFFERS = computed(() => offerStore.offer[id.value])

    // const showofferItem = function(id) {
    //   console.log(id)
    //
    // }

    // let model = ref(null)
    // let card = ref(false)
    // let specificId = ref('')
    // let specificItems = ref('')


    // const showofferItem = function (id) {
    //   console.log(id)
    //
    // }
    //   specificId.value = id
    //   if(id == 'star'){
    //     specificId.value = model.value
    //     updateOffer()
    //   }else{
    //     specificId.value = model.value = id
    //   }
    //   // console.log(specificItems)
    //   card.value = true
    // }


    //


    // const searchOffers = computed(()=>{
    //   if(search.value === ''){
    //     return Object.values(offerStore.offers)
    //   }else{
    //     let keyword = search.value.toLowerCase();
    //     return Object.values(offerStore.offers).filter(word => word.i.name.toLowerCase().indexOf(keyword) > -1);
    //   }
    // })


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


    const selectedProducts = function(item, itemname){
      var msg =''
      var offer_qty = 0;
      var min_qty =0;
      var foc =0;

      if(newobj.value[item]){
        min_qty = newobj.value[item].min_qty;
        offer_qty = newobj.value[item].offer_qty;
      }

      var exists = myproducts.value.some(function(field) {
        return field.item === item;
      });
      if (!exists) {
        foc =parseInt((1/min_qty)*offer_qty);
        myproducts.value.push({ item, itemname, min_qty, offer_qty, foc, quantity: 1 });
        msg = 'New item added'
      }else{
        myproducts.value.find(x => x.item === item).quantity+=1;
        var qty=  myproducts.value.find(x => x.item === item).quantity;
        foc=parseInt((qty/min_qty)*offer_qty);
        myproducts.value.find(x => x.item === item).foc =foc;
        msg = 'Item quantity updated'
      }
      positivemsg(msg)
    }
    // console.log(myproducts)

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
      MYOFFERS,
      MYITEMS,
      search,
      searchResult,
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
      newobj,





    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


