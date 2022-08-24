<template>
  <q-page padding class="flex column q-col-gutter-y-lg">

<!--    <div class="q-pa-md text-center">-->
<!--      <q-btn color="positive" no-caps @click="gotoAction()">-->
<!--        <q-icon left size="2em" name="open_in_new" />-->
<!--        NEW REVIEW-->
<!--      </q-btn>-->
<!--    </div>-->

  <div class="q-pa-md row items-start q-gutter-md" v-if="myitemsLength">
      <q-card flat bordered
              class="my-card"
              v-for="(i, index) in getData" :key="i.id"
              @click="openwindow(i.id)">
      <q-list>
        <q-item class="bg-brand text-white text-bold">
          <q-item-section>
            <q-item-label>Date</q-item-label>
            <q-item-label caption>
              <q-badge color="blue" v-if="specificStatus === 'New'" >{{ specificStatus }}</q-badge>
              <q-badge color="secondary" v-else-if ="specificStatus === 'Progress'" >{{ specificStatus }}</q-badge>
              <q-badge color="accent" v-else-if="specificStatus === 'Accepted'" >{{ specificStatus }}</q-badge>
              <q-badge color="negative" v-else-if="specificStatus === 'Rejected'" >{{ specificStatus }}</q-badge>
              <q-badge color="primary" v-else>Unknown</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>

  <div class="q-pa-lg flex flex-center" v-if="myitemsLength">
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
          <q-list bordered class="rounded-borders" style="min-width: 350px">
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="fact_check" color="brand" text-color="white" />
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label lines="1">{{ specificDate }}</q-item-label>
                <q-item-label>{{ specificCustomer }}</q-item-label>
                <q-item-label caption>
                  <span class="text-weight-bold">{{ specificId }}</span>
                </q-item-label>
              </q-item-section>
              <q-item-section side >
                <q-badge color="blue" v-if="specificStatus === 'New'" >{{ specificStatus }}</q-badge>
                <q-badge color="secondary" v-else-if ="specificStatus === 'Viewed'" >{{ specificStatus }}</q-badge>
                <q-badge color="accent" v-else-if="specificStatus === 'Accepted'" >{{ specificStatus }}</q-badge>
                <q-badge color="info" v-else-if="specificStatus === 'Packed'" >{{ specificStatus }}</q-badge>
                <q-badge color="blue-grey" v-else-if="model === 'Dispatched'" >{{ specificStatus }}</q-badge>
                <q-badge color="positive" v-else-if="specificStatus === 'Delivered'" >{{ specificStatus }}</q-badge>
                <q-badge color="negative" v-else-if="specificStatus === 'Cancelled'" >{{ specificStatus }}</q-badge>
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
            <q-item>
              <q-item-section top class="col-1 gt-sm">
                <q-item-label class="q-mt-sm"></q-item-label>
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label class="q-mt-sm"></q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm flex-center text-center"></q-item-label>
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
import { computed, ref  } from 'vue'
import { useMasterStore } from 'stores/master'
import { useRouter } from 'vue-router'
const master = useMasterStore()
export default {
  setup () {
    const router = useRouter()
    let num1
    let num2

    const MYITEMS =  computed(() => {
      return  master.ITEM
    })

    const search = ref('')

    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(MYITEMS.value)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(MYITEMS.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
      }
    })

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

    const gotoAction = function (){
      router.push({
        name: 'REVIEWADD'
      })
    }
    let card = ref(false)
    let specificItems = ref('')
    let specificId = ref('')
    let specificDate = ref('')
    let specificStatus = ref('')
    let specificCustomer = ref('')

    const openwindow = function (id){
      // specificId.value = id
      // specificItems.value = items
      // specificDate.value = adate
      // specificStatus.value = status
      // specificCustomer.value = customer
      // console.log(specificItems)
      card.value = true
    }

    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(myitemsLength.value/totalPages.value)
    })

    return {
      MYITEMS,
      search,
      searchResult,
      myitemsLength,
      page,
      currentPage,
      totalPages,
      maxVal,
      getData,
      gotoAction,
      openwindow,
      specificItems,
      specificId,
      specificDate,
      specificStatus: ref('New'),
      specificCustomer,
      card
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


