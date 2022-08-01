<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered padding class="rounded-borders" style="max-width: 350px"
            v-if="totalcount">
<!--      <q-item-label header>{{ i.date }}</q-item-label>-->
      <q-item-label header>Order History</q-item-label>
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
      active-color="deep-orange-10"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useOrderStore} from 'stores/order'
const orderStore = useOrderStore()
const ORDERS = orderStore.all.reverse()
import { date } from 'quasar'
const { formatDate } = date

export default {
  setup() {
    let num1
    let num2
    let MYORDERS = ref(ORDERS)
    let totalcount = Object.values(MYORDERS.value).length

    const getOrders =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS = MYORDERS.value.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return { id: e.id, date: date.formatDate(e.date, 'MMMM d, YYYY '), narration:e.narration, status:e.status }
      })
      console.log(newArr);
      return newArr
    })
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
    }

  }
}

</script>
