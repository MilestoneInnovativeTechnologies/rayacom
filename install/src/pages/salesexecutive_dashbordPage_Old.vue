<template>
  <div class="q-pa-md q-gutter-md left">
    <q-list bordered padding class="rounded-borders" style="max-width: 350px"
            v-if="totalcount">
<!--      <q-item-label header>{{ i.date }}</q-item-label>-->
      <q-item-label header>Dashboard</q-item-label>
      <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id"
              @click="showitems(i.id, i.date, i.status, i.items)">
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
      <q-card class="my-card" style="width: 400px">
        <q-list bordered class="rounded-borders" style="min-width: 350px">
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="fact_check" color="deep-orange-10" text-color="white" />
          </q-item-section>
          <q-item-section top class="col-7 gt-sm">
            <q-item-label lines="1">{{ specificDate }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ specificId }}</span>
            </q-item-label>
            <q-item-label caption lines="1">
              <q-badge color="blue" v-if="model === 'New'" >{{ model }}</q-badge>
              <q-badge color="secondary" v-else-if ="model === 'Viewed'" >{{ model }}</q-badge>
              <q-badge color="accent" v-else-if="model === 'Accepted'" >{{ model }}</q-badge>
              <q-badge color="info" v-else-if="model === 'Packed'" >{{ model }}</q-badge>
              <q-badge color="blue-grey" v-else-if="model === 'Dispatched'" >{{ model }}</q-badge>
              <q-badge color="positive" v-else-if="model === 'Delivered'" >{{ model }}</q-badge>
              <q-badge color="negative" v-else-if="model === 'Cancelled'" >{{ model }}</q-badge>
              <q-badge color="primary" v-else>Unknown</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section top class="col-1 gt-sm">
            <q-item-label class="q-mt-sm text-weight-medium">#</q-item-label>
          </q-item-section>
          <q-item-section top class="col-7 gt-sm">
            <q-item-label class="q-mt-sm text-weight-medium">Item</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium text-center">Quantity</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item v-for="(j, ind) in specificItems">
          <q-item-section top class="col-1 gt-sm">
            <q-item-label class="q-mt-sm">{{ ind + 1 }}</q-item-label>
          </q-item-section>
          <q-item-section top class="col-7 gt-sm">
            <q-item-label class="q-mt-sm">{{ j.name }}</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm flex-center text-center">{{ j.quantity }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-item>
          <q-item-section top class="col-1 gt-sm">
            <q-item-label class="q-mt-sm text-weight-medium"></q-item-label>
          </q-item-section>
          <q-item-section top class="col-7 gt-sm">
            <q-item-label class="q-mt-sm text-weight-medium">Total Items</q-item-label>
          </q-item-section>
          <q-item-section top>
            <q-item-label class="q-mt-sm text-weight-medium text-center">{{ specificItems.length }}</q-item-label>
          </q-item-section>
        </q-item>

          <q-item>
            <q-item-section top class="col-2 gt-sm">
              <q-item-label class="q-mt-sm text-weight-medium"></q-item-label>
            </q-item-section>
            <q-item-section top class="col-7 gt-sm">
              <q-item-label class="q-mt-sm text-weight-medium">
                <q-select filled  v-model="model" :options="options" label="Status"
                          @update:model-value="updateStatus()"  />
              </q-item-label>
            </q-item-section>
            <q-item-section top>
              <q-item-label class="q-mt-sm">
              </q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
                <q-card-actions align="right">
                  <q-btn flat label="Close" color="negative"  v-close-popup  />
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
import { date } from 'quasar'
import { post } from "boot/axios";
const { formatDate } = date

export default {
  setup() {
    const router = useRouter()
    const $q = useQuasar()
    let EXTRACTEDORDERS= {}
    let checkstatus
    let itemarray
    let itemObj
    let num1
    let num2


    const MYORDERS =  computed(() => {
      let ORDERS = orderStore.all.reverse()
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
      return EXTRACTEDORDERS
    })

    console.log(MYORDERS.value)
    const totalcount =  computed(() => {
      return Object.keys(MYORDERS.value).length
    })
    console.log(totalcount)
    let MYKEYS
    let newArr
    let status
    let model = ref(null)

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

    const updateStatus = function (){
      post('order','status',{ order:specificId.value, status:model.value })
      .then(console.log)
      positivemsg('Order status updated Successfully')
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
      specificStatus.value = model.value = status

      // console.log(specificItems)
      card.value = true
    }
    const positivemsg = function (msg){
      $q.notify({
        type: 'positive',
        message: msg,
        icon: 'cloud_done',
        position:'top-right',
        timeout:2000
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    let nextPage= ref(null)
    const totalPages= ref(5)

    return {
      MYORDERS,
      totalcount: totalcount.value,
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
      specificStatus,
      card,
      model,
      options: [
        'New','Viewed','Accepted','Packed','Dispatched','Delivered','Cancelled'
      ],
      updateStatus,
      positivemsg,
    }

  }
}

</script>
