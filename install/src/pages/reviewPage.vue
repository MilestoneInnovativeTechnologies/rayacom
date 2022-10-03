<template>
  <q-page padding class="flex column q-col-gutter-y-lg">

    <div class="q-pa-md text-center">
      <q-btn color="positive" no-caps @click="gotoAction()">
        <q-icon left size="xl" name="open_in_new" />
        NEW REVIEW
      </q-btn>
    </div>
      <div class="q-pa-xs row items-start q-gutter-md" v-if="totalcount">
      <q-card flat bordered
              class="my-card"
              v-for="(i, index) in getData" :key="i.id"
              @click="openwindow(i.id, i.customer.name, i.type, i.created_at, i.comment, i.status)">
        <q-card-section class="bg-brand text-white">
          <q-item-label class="Subtitle 2 text-weight-bolder"> {{ i.created_at }}</q-item-label>
          <q-item-label> {{ i.type }}</q-item-label>
          <q-item-label>
            <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
            <q-badge color="secondary" v-else-if ="i.status === 'Viewed'" >{{ i.status }}</q-badge>
            <q-badge color="primary" v-else>Unknown</q-badge>
          </q-item-label>
        </q-card-section>
    </q-card>
  </div>

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
        <q-card class="my-card" style="max-width: 400px">
          <q-list bordered class="rounded-borders" style="min-width: 350px">
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="fact_check" color="brand" text-color="white" />
              </q-item-section>
              <q-item-section top>
                <q-item-label lines="1">{{ specificCustomer }}</q-item-label>
                <q-item-label lines="2"></q-item-label>
                <q-item-label caption lines="3">{{ specificcreateDate }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item>
              <q-item-section avatar>
                <q-item-label avatar><q-icon color="primary" name="lens" /></q-item-label>
              </q-item-section>
              <q-item-section top >
                <q-item-label class="q-mt-sm">Type</q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm flex-center text-left">{{ specificType }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-item-label avatar><q-icon color="primary" name="lens" /></q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm">Comment</q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm flex-center text-left">{{ specificComment }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-item-label class="q-mt-sm text-weight-medium">&nbsp;</q-item-label>
              </q-item-section>
              <q-item-section class="col-3 q-pa-md q-gutter-xl">
                <q-badge color="blue" v-if="specificStatus === 'New'" >{{ specificStatus }}</q-badge>
                <q-badge color="secondary" v-else-if ="specificStatus === 'Viewed'" >{{ specificStatus }}</q-badge>
                <q-badge color="primary" v-else>Unknown</q-badge>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm">&nbsp;</q-item-label>
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
import { computed, ref  } from 'vue'
import { useReviewStore } from 'stores/review'
import { useRouter } from 'vue-router'
import { date } from "quasar";
const reviewStore = useReviewStore()
export default {
  setup () {
    const router = useRouter()
    let num1
    let num2

    const MYREVIEWS =  computed(() => {
      return Object.values(reviewStore.reviews).reverse()
    })

    const totalcount =  computed(() => {
      return Object.values(MYREVIEWS.value).length
    })

    const getData =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS = MYREVIEWS.value.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return { id: e.id, customer: e.customer, type: e.type,
          created_at: date.formatDate(e.created_at, 'MMMM D, YYYY '), comment: e.comment,
          status: e.status, items: e.items }
      })
      return newArr
    })

    const gotoAction = function (){
      router.push({
        name: 'REVIEWADD'
      })
    }

    let card = ref(false)
    let specificId = ref('')
    let specificCustomer = ref('')
    let specificType = ref('')
    let specificcreateDate = ref('')
    let specificComment = ref('')
    let specificStatus = ref('')

    const openwindow = function (id, customer, type, created_at, comment, status){
      specificId.value = id
      specificCustomer.value = customer
      specificType.value = type
      specificcreateDate.value = date.formatDate(created_at, 'DD-MM-YYYY')
      specificComment.value = comment
      specificStatus.value = status
      card.value = true
    }
    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(totalcount.value/totalPages.value)
    })

    return {
      MYREVIEWS,
      totalcount,
      page,
      currentPage,
      totalPages,
      maxVal,
      getData,
      gotoAction,
      openwindow,
      specificId,
      specificCustomer,
      specificType,
      specificcreateDate,
      specificComment,
      specificStatus,
      card,
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


