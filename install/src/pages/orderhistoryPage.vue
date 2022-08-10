<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <div class="q-pa-md" >
    <q-toolbar class="bg-brand text-white shadow-2">
      <q-toolbar-title>Order History</q-toolbar-title>
    </q-toolbar>

    <q-list bordered padding class="rounded-borders" style="max-width: 350px"
            v-if="totalcount">
<!--      <q-item-label header></q-item-label>-->
      <q-item clickable v-ripple  v-for="(i, index) in getOrders" :key="i.id"
              @click="showitems(i.id, i.date, i.status, i.items)">
        <q-item-section avatar top>
          <q-avatar icon="fact_check" color="brand" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">{{ i.id }}</q-item-label>
          <q-item-label caption>{{ i.date }}</q-item-label>
          <q-item-label caption>{{ i.narration }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
          <q-badge color="secondary" v-else-if ="i.status === 'Viewed'" >{{ i.status }}</q-badge>
          <q-badge color="accent" v-else-if="i.status === 'Accepted'" >{{ i.status }}</q-badge>
          <q-badge color="info" v-else-if="i.status === 'Packed'" >{{ i.status }}</q-badge>
          <q-badge color="blue-grey" v-else-if="i.status === 'Dispatched'" >{{ i.status }}</q-badge>
          <q-badge color="positive" v-else-if="i.status === 'Delivered'" >{{ i.status }}</q-badge>
          <q-badge color="negative" v-else-if="i.status === 'Cancelled'" >{{ i.status }}</q-badge>
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
      active-color="brand"
    />
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
        </q-list>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
import { useOrderStore} from 'stores/order'
import { date } from 'quasar'
const orderStore = useOrderStore()
const { formatDate } = date

export default {
  setup() {
    let num1
    let num2

    const ORDERS =  computed(() => {
      return orderStore.all.reverse()
    })

    let MYORDERS = ref(ORDERS.value)
    let totalcount = Object.values(MYORDERS.value).length

    const getOrders =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS = MYORDERS.value.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return { id: e.id, date: date.formatDate(e.date, 'MMMM d, YYYY '),
          narration:e.narration, status:e.status, items:e.items }
      })
      console.log(newArr);
      return newArr
    })

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
      // console.log(specificItems)
      card.value = true
    }

    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(5)

    return {
      MYORDERS,
      totalcount,
      page,
      currentPage,
      totalPages,
      getOrders,
      showitems,
      specificItems,
      specificId,
      specificDate,
      specificStatus,
      card,
    }

  }
}

</script>
