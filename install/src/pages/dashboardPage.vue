<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">

<!--    <div class="q-pa-md q-gutter-sm">-->
<!--      <q-banner inline-actions rounded class="bg-orange text-white " >-->
<!--        Today offer-->

<!--        <template v-slot:action>-->
<!--          <q-btn flat label="Go to shop" />-->
<!--          <q-btn flat label="Dismiss" />-->
<!--        </template>-->
<!--      </q-banner>-->
<!--    </div>-->

    <div class="row justify-end side">
      <q-btn color="positive" no-caps @click="gotoOfferpage()">
        <q-icon left size="xl" name="shop" />
          TODAY OFFER
      </q-btn>
    </div>

    <div class="row justify-end side">
      <q-btn color="positive" no-caps @click="gotoItempage()">
        <q-icon left size="xl" name="open_in_new" />
        NEW ORDER
      </q-btn>
    </div>

    <q-list bordered padding class="rounded-borders" style="width:80vw; max-width: 350px">
<!--      <q-item-label header>{{ i.date }}</q-item-label>-->
      <q-item-label header v-if="totalcount === 0">The best products is waiting to be order. So start shopping now.</q-item-label>
      <q-item-label header v-else>Dashboard</q-item-label>
      <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id"
              @click="showitems(i.id, i.date, i.status, i.items)">
        <q-item-section avatar top>
          <q-avatar icon="fact_check" color="deep-orange-10" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">{{ i.id }}</q-item-label>
          <q-item-label caption>{{ i.date }}</q-item-label>
          <q-item-label caption>{{ i.narration }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
          <q-badge color="secondary" v-else-if ="i.status === 'Viewed'" >{{ i.status }}</q-badge>
          <q-badge color="accent" v-else-if="i.status === 'Accepted'" >{{ i.status }}</q-badge>
          <q-badge color="info" v-else-if="i.status === 'Packed'" >{{ i.status }}</q-badge>
          <q-badge color="blue-grey" v-else-if="i.status === 'Dispatched'" >{{ i.status }}</q-badge>
          <q-badge color="primary" v-else>Unknown</q-badge>
        </q-item-section>
      </q-item>
    </q-list>

  <div class="q-pa-lg flex flex-center" v-if="totalcount">
    <q-pagination
      v-model="page"
      :min="currentPage"
      :max="maxVal"
      :max-pages="7"
      direction-links
      boundary-links
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
      active-color="deep-orange-10"
    />
  </div>



  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="card">
      <q-card class="my-card" style="width: 400px">
        <q-list bordered class="rounded-borders">
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fact_check" color="deep-orange-10" text-color="white" />
          </q-item-section>
          <q-item-section top>
            <q-item-label lines="1">{{ specificDate }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ specificId }}</span>
            </q-item-label>
            <q-item-label caption lines="1">
              <q-badge color="blue" v-if="specificStatus === 'New'" >{{ specificStatus }}</q-badge>
              <q-badge color="secondary" v-else-if ="specificStatus === 'Viewed'" >{{ specificStatus }}</q-badge>
              <q-badge color="accent" v-else-if="specificStatus === 'Accepted'" >{{ specificStatus }}</q-badge>
              <q-badge color="info" v-else-if="specificStatus === 'Packed'" >{{ specificStatus }}</q-badge>
              <q-badge color="blue-grey" v-else-if="model === 'Dispatched'" >{{ specificStatus }}</q-badge>
              <q-badge color="positive" v-else-if="specificStatus === 'Delivered'" >{{ specificStatus }}</q-badge>
              <q-badge color="negative" v-else-if="specificStatus === 'Cancelled'" >{{ specificStatus }}</q-badge>
              <q-badge color="primary" v-else>Unknown</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="q-mt-sm text-weight-medium">#</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium">Item</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium text-center">Quantity</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium text-center" v-if="offerqty>0">FOC</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item v-for="(j, ind) in specificItems">
          <q-item-section avatar>
            <q-item-label class="q-mt-sm">{{ ind + 1 }}</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm">{{ j['item']['name'] }}</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm flex-center text-center">{{ j.quantity }}</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm flex-center text-center" v-if="j.foc>0">{{j.foc}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="q-mt-sm text-weight-medium">&nbsp;</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium">Total Items</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium text-center">{{ specificItems.length }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
                <q-card-actions align="right">
                  <q-btn flat label="Close" color="negative" v-close-popup />
                </q-card-actions>
      </q-card>
    </q-dialog>
<!--    <div class="q-mt-sm">-->
<!--      {{specificItems}}-->
<!--    </div>-->

  </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderStore} from 'stores/order'
const orderStore = useOrderStore()
import { date } from 'quasar'
const { formatDate } = date


export default {
  setup() {
    const router = useRouter()
    const $q = useQuasar()
    let checkstatus
    let num1
    let num2

    const ORDERS =  computed(() => {
      return orderStore.all.reverse()
    })

    const MYORDERS =  computed(() => {
      let newArray = []
      for( let n in ORDERS.value){
        checkstatus = ORDERS.value[n]['status']
        if((checkstatus != 'Delivered') && (checkstatus != 'Cancelled')){
          newArray.push(ORDERS.value[n])
        }
      }
      return newArray;
    })

    const totalcount =  computed(() => {
      return Object.keys(MYORDERS.value).length
    })

    let MYKEYS
    let newArr
    let status

    const getOrders =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = num1+totalPages.value;
      MYKEYS = Object.values(MYORDERS.value).slice(num1,num2)
      newArr = MYKEYS.map((e) => {
        status = e.status
        return { id: e.id, date: date.formatDate(e.date, 'MMMM D, YYYY '), narration: e.narration,
          status: e.status, items: e.items }
      })
      return newArr
    })

    const gotoOfferpage = function(){
      router.push({
        name: 'OFFER'
      })
    }

    const gotoItempage = function (){
        router.push({
          name: 'ITEM'
        })
    }
    let card = ref(false)
    let specificItems = ref('')
    let specificId = ref('')
    let specificDate = ref('')
    let specificStatus = ref('')
    const showitems = function (id, adate, status, items){
      specificId.value = id
      specificItems.value = items
      specificDate.value = adate
      specificStatus.value = status
      // console.log(items)
      card.value = true

      // var TotalFoc = specificItems.value;
      // console.log(TotalFoc)
    }

    const offerqty = computed(()=>{
      let sum = 0
      specificItems.value.map(item => sum+= item['foc'])
      return sum
        })
    console.log(offerqty)


    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(5)

    const maxVal =  computed(() => {
      return Math.ceil(totalcount.value/totalPages.value)
    })

    return {
      ORDERS,
      MYORDERS,
      totalcount,
      page,
      currentPage,
      totalPages,
      maxVal,
      getOrders,
      gotoItempage,
      gotoOfferpage,
      showitems,
      specificItems,
      specificId,
      specificDate,
      specificStatus,
      card,
      offerqty
    }

  }
}
</script>
