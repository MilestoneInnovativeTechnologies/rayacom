<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="primary" icon-right="sick" label="LEAVES"
             @click="gotoLeave()" v-if="leavecount">
        <q-badge color="positive" floating transparent>
          {{ leavecount }}
        </q-badge>
      </q-btn>
      <q-btn color="white" text-color="primary" icon-right="comment_bank" label="REVIEWS"
             @click="gotoReview()" v-if="reviewcount">
        <q-badge color="accent" floating transparent>
          {{ reviewcount }}
        </q-badge>
      </q-btn>
    </div>
    <div class="q-pa-md" >
      <q-toolbar class="bg-brand text-white shadow-2">
        <q-toolbar-title>ORDERS</q-toolbar-title>
      </q-toolbar>
      <q-list bordered padding class="rounded-borders" style="width:80vw; max-width: 350px"
              v-if="totalcount">
        <!--      <q-item-label header>Dashboard</q-item-label>-->
        <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id"
                @click="showitems(i.customer, i.id, i.date, i.status, i.items)">
          <q-item-section avatar top>
            <q-avatar icon="fact_check" color="brand" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">{{ i.customer }}</q-item-label>
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
            active-color="brand"
          />
        </div>
      </q-list>
    </div>


    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="card">
        <q-card class="my-card" style="width: 400px">
          <q-list bordered class="rounded-borders" style="min-width: 350px">
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="fact_check" color="brand" text-color="white" />
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label lines="1">{{ specificCustomer }}</q-item-label>
                <q-item-label lines="2">{{ specificDate }}</q-item-label>
                <q-item-label caption lines="3">
                  <span class="text-weight-bold">{{ specificId }}</span>
                </q-item-label>
              </q-item-section>
              <q-item-section side >
                <q-badge color="blue" v-if="model === 'New'" >{{ model }}</q-badge>
                <q-badge color="secondary" v-else-if ="model === 'Viewed'" >{{ model }}</q-badge>
                <q-badge color="accent" v-else-if="model === 'Accepted'" >{{ model }}</q-badge>
                <q-badge color="info" v-else-if="model === 'Packed'" >{{ model }}</q-badge>
                <q-badge color="blue-grey" v-else-if="model === 'Dispatched'" >{{ model }}</q-badge>
                <q-badge color="positive" v-else-if="model === 'Delivered'" >{{ model }}</q-badge>
                <q-badge color="negative" v-else-if="model === 'Cancelled'" >{{ model }}</q-badge>
                <q-badge color="primary" v-else>Unknown</q-badge>
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
                <q-item-label class="q-mt-sm">{{ j['item']['name'] }}</q-item-label>
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
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderStore} from 'stores/order'
import { useLeaveStore } from 'stores/leave'
import { useReviewStore } from 'stores/review'
const orderStore = useOrderStore()
const leaveStore = useLeaveStore()
const reviewStore = useReviewStore()
import { date } from 'quasar'
import { post } from "boot/axios";
const { formatDate } = date

export default {
  setup() {
    const router = useRouter()
    const $q = useQuasar()
    let checkstatus
    let num1
    let num2

    const ORDERS =  computed(() => {
      return orderStore.all
    })

    const MYORDERS =  computed(() => {
      let newArray = []
      for( let n in ORDERS.value){
        checkstatus = ORDERS.value[n]['status']
        if((checkstatus == 'New') || (checkstatus == 'Viewed')){
          newArray.push(ORDERS.value[n])
        }
      }
      return newArray.reverse();
    })

    const totalcount =  computed(() => {
      return Object.keys(MYORDERS.value).length
    })

    const gotoLeave = function (){
      router.push({
        name: 'LEAVES'
      })
    }

    const reviewData = computed(()=>{
      return Object.values(reviewStore.reviews).filter(word => word.status  == 'New');
    })
    const leaveData = computed(()=>{
      return Object.values(leaveStore.leaves).filter(word => word.status  == 'New');
    })
    const reviewcount =  computed(() => {
      return reviewData.value.length
    })
    const leavecount =  computed(() => {
      return leaveData.value.length
    })
console.log(reviewcount.value +'-'+leavecount.value )


    const gotoReview = function (){
      router.push({
        name: 'REVIEWS'
      })
    }

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
        return { id: e.id, date: date.formatDate(e.date, 'MMMM d, YYYY '), narration: e.narration,
          customer: e.customer.name, status: e.status, items: e.items }
      })
      return newArr
    })

    const updateStatus = function (){
      post('order','status',{ order:specificId.value, status:model.value })
        .then(console.log)
      positivemsg('Order status updated Successfully')
    }

    let card = ref(false)
    let specificItems = ref('')
    let specificCustomer = ref('')
    let specificId = ref('')
    let specificDate = ref('')
    let specificStatus = ref('')

    const showitems = function (customer, id, adate, status, items){
      console.log(items)
      specificCustomer.value = customer
      specificId.value = id
      specificItems.value = items
      specificDate.value = adate
      if(status == 'New'){
        specificStatus.value = model.value = 'VIEWED'
        updateStatus()
      }else{
        specificStatus.value = model.value = status
      }
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
    const totalPages= ref(5)
    const maxVal =  computed(() => {
      return Math.ceil(totalcount.value/totalPages.value)
    })

    return {
      MYORDERS,
      totalcount,
      page,
      currentPage,
      totalPages,
      maxVal,
      getOrders,
      showitems,
      specificItems, specificId, specificCustomer, specificDate, specificStatus,
      card,
      model,
      options: [
        'Accepted','Packed','Dispatched','Delivered','Cancelled'
      ],
      updateStatus,
      positivemsg,
      gotoLeave,
      gotoReview,
      leavecount,
      reviewcount,
    }
  }
}

</script>
