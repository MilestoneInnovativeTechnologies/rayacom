<template>
  <div class="q-pa-md q-gutter-md left">


    <div class="row justify-end">
      <q-btn color="secondary" no-caps @click="gotoItempage()">
        <q-icon left size="3em" name="open_in_new" />
        NEW<br>ORDER
      </q-btn>
    </div>


    <q-list bordered padding class="rounded-borders" style="max-width: 350px"
            v-if="totalcount">
<!--      <q-item-label header>{{ i.date }}</q-item-label>-->
      <q-item-label header>Dashboard</q-item-label>
      <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id"
              @click="showitems(i.id, i.date, i.items)">
        <q-item-section avatar top>
          <q-avatar icon="fact_check" color="deep-orange-10" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">{{ i.id }}</q-item-label>
          <q-item-label caption>{{ i.date }}</q-item-label>
        </q-item-section>
        <q-item-section>
<!--          <q-item-label lines="1"></q-item-label>-->
          <q-item-label caption>{{ i.narration }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
          <q-badge color="secondary" v-else-if ="i.status === 'Viewed'" >{{ i.status }}</q-badge>
          <q-badge color="accent" v-else-if="i.status === 'Accepted'" >{{ i.status }}</q-badge>
          <q-badge color="info" v-else-if="i.status === 'Packed'" >{{ i.status }}</q-badge>
          <q-badge color="blue-grey" v-else-if="i.status === 'Dispatched'" >{{ i.status }}</q-badge>
          <q-badge color="primary" v-else>Unknown</q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-lg flex flex-center" v-if="totalcount">
    <q-pagination
      v-model="page"
      :min="currentPage"
      :max="Math.ceil(totalcount/totalPages)"
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
      <q-card class="my-card" style="width: 500px">
        <q-item>
          <q-item-section avatar top>
            <q-avatar icon="fact_check" color="deep-orange-10" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ specificDate }}</q-item-label>
            <q-item-label caption>
              {{ specificId }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-card-section class="row q-ma-sm">
          <div class="text-caption header" style="min-width: 50px">#</div>
          <div class="text-caption header" style="width: 300px">Item</div>
          <div class="text-caption header" style="min-width: 50px">Quantity</div>
        </q-card-section>
        <q-separator />

        <q-card-section horizontal  class="row q-ma-sm" v-for="(j, ind) in specificItems">
          <div class="text-caption text-grey" style="min-width: 50px">{{ ind +1 }}</div>
          <div class="text-caption text-grey" style="width: 300px">{{ j.name }}</div>
          <div class="text-caption text-grey" style="min-width: 50px; padding-left: 10px;">
            {{ j.quantity }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section horizontal class="row q-ma-sm">
          <div class="text-caption header" style="min-width: 50px"></div>
          <div class="text-caption header" style="width: 300px">Total Items:</div>
          <div class="text-caption header" style="min-width: 50px; padding-left: 10px;">{{ specificItems.length }}</div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

</template>

<script>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import { useOrderStore} from 'stores/order'
const orderStore = useOrderStore()
const ORDERS = orderStore.all.reverse()
import { date } from 'quasar'
const { formatDate } = date
const EXTRACTEDORDERS= {}
let checkstatus
let customer
let itemarray
let itemObj

for( let n in ORDERS){
  checkstatus = ORDERS[n]['status']
  if((checkstatus != 'Delivered') && (checkstatus != 'Cancelled')){
    itemarray = ORDERS[n]['items']
    let newArray = []
    for( let i in itemarray) {
      itemObj = { id:itemarray[i]['item']['id'], name:itemarray[i]['item']['name'],
        quantity:itemarray[i]['quantity'] }
      newArray.push(itemObj)
    }
    EXTRACTEDORDERS[n] = { id: ORDERS[n]['id'],  date: ORDERS[n]['date'], status: ORDERS[n]['status'],
      narration: ORDERS[n]['narration'], items: newArray }
  }
}

export default {
  setup() {
    const router = useRouter()
    const $q = useQuasar()
    let num1
    let num2
    let MYORDERS = ref(EXTRACTEDORDERS)
    // console.log(MYORDERS.value)
    let totalcount = Object.keys(MYORDERS.value).length
    let MYKEYS
    let newArr
    let status

    const getOrders =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = num1+totalPages.value;
      MYKEYS = Object.values(MYORDERS.value).slice(num1,num2)
      newArr = MYKEYS.map((e) => {
        status = e.status
        return { id: e.id, date: date.formatDate(e.date, 'MMMM d, YYYY '), narration:e.narration,
          status:e.status, items:e.items }
      })
      return newArr
    })

    const gotoItempage = function (){
        router.push({
          name: 'ITEM'
        })
    }


    let card = ref(false)
    let specificItems = ref('')
    let specificId = ref('')
    let specificDate = ref('')
    const showitems = function (id, adate, items){
      specificId.value = id
      specificItems.value = items
      specificDate.value = adate
      // console.log(specificItems)
      card.value = true
    }

    let page = ref(1)
    let currentPage= ref(1)
    let nextPage= ref(null)
    const totalPages= ref(5)

    return {
      MYORDERS,
      totalcount,
      page,
      currentPage,
      nextPage,
      totalPages,
      getOrders,
      gotoItempage,
      showitems,
      specificItems,
      specificId,
      specificDate,
      card,
    }

  }
}

</script>
