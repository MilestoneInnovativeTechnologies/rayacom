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
      <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id" >
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
    <q-btn label="Show HTML Dialog" color="primary" @click="showDialog" />
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

for( let n in ORDERS){
  checkstatus = ORDERS[n]['status']
  if((checkstatus != 'Delivered') && (checkstatus != 'Cancelled')){
    EXTRACTEDORDERS[n] = { id: ORDERS[n]['id'],  date: ORDERS[n]['date'], status: ORDERS[n]['status'],  narration: ORDERS[n]['narration'] }
  }
}

export default {
  setup() {
    const router = useRouter()
    const $q = useQuasar()
    let num1
    let num2
    let MYORDERS = ref(EXTRACTEDORDERS)
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
        return { id: e.id, date: date.formatDate(e.date, 'MMMM d, YYYY '), narration:e.narration, status:e.status }
      })
      return newArr
    })

    const gotoItempage = function (){
        router.push({
          name: 'ITEM'
        })
    }
    const showDialog = function () {
      $q.dialog({
        title: 'Alert<em>!</em>',
        message: '<em>I can</em> <span class="text-red">use</span> <strong>HTML</strong>',
        html: true
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
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
      showDialog
    }

  }
}

</script>
