<template>
    <q-page padding class="flex column q-col-gutter-y-lg">

        <q-list>
          <q-input v-model="search"
                   placeholder="Search Here"
                   debounce="600"
                   filled
                   class="col">
          </q-input>
          <q-item flat bordered
                  v-for="(i, index) in searchResult" :key="i.id"  v-if="searchcard" >
            <q-item-section class="bg-secondary text-white" @click="notificationResult(i.id,i.name)" >
              <div >{{ i.name }}</div>
            </q-item-section>
          </q-item>
        </q-list>



  <div class="q-pa-md row items-start q-gutter-md" v-if="totalcount">
      <q-card flat bordered
              class="my-card"
              v-for="(i, index) in getData" :key="i.id"
              @click="openwindow(i.id, i.executive, i.start_date, i.end_date, i.description, i.status)">
      <q-list>
        <q-item class="bg-brand text-white text-bold">
          <q-item-section>
            <q-item-label class="text-overline">{{ i.executive }}</q-item-label>
            <q-item-label class="text-subtitle2">{{ i.start_date }}</q-item-label>
             <q-item-label>
              <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
              <q-badge color="secondary" v-else-if ="i.status === 'Progress'" >{{ i.status }}</q-badge>
              <q-badge color="positive" v-else-if="i.status === 'Accepted'" >{{ i.status }}</q-badge>
              <q-badge color="accent" v-else-if="i.status === 'Rejected'" >{{ i.status }}</q-badge>
              <q-badge color="dark" v-else>Unknown</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
                <q-item-section top class="col-7 gt-sm">
                  <q-item-label lines="1">{{ specificExecutive }}</q-item-label>
                  <q-item-label lines="2"></q-item-label>
                  <q-item-label caption lines="3">{{ specificId }}</q-item-label>
                </q-item-section>
                <q-item-section side >
                  <q-badge color="blue" v-if="model === 'New'" >{{ model }}</q-badge>
                  <q-badge color="secondary" v-else-if ="model === 'Progress'" >{{ model }}</q-badge>
                  <q-badge color="positive" v-else-if="model === 'Accepted'" >{{ model }}</q-badge>
                  <q-badge color="negative" v-else-if="model === 'Rejected'" >{{ model }}</q-badge>
                  <q-badge color="primary" v-else>Unknown</q-badge>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item>
                <q-item-section top class="col-1 gt-sm">
                  <q-item-label avatar><q-icon color="primary" name="lens" /></q-item-label>
                </q-item-section>
                <q-item-section top class="col-3 gt-sm">
                  <q-item-label class="q-mt-sm">Start Date</q-item-label>
                </q-item-section>
                <q-item-section top>
                  <q-item-label class="q-mt-sm flex-center text-center">{{ specificstartDate }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-1 gt-sm">
                  <q-item-label avatar><q-icon color="primary" name="lens" /></q-item-label>
                </q-item-section>
                <q-item-section top class="col-3 gt-sm">
                  <q-item-label class="q-mt-sm">End Date</q-item-label>
                </q-item-section>
                <q-item-section top>
                  <q-item-label class="q-mt-sm flex-center text-center">{{ specificendDate}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-1 gt-sm">
                  <q-item-label avatar><q-icon color="primary" name="lens" /></q-item-label>
                </q-item-section>
                <q-item-section top class="col-3 gt-sm">
                  <q-item-label class="q-mt-sm">Description</q-item-label>
                </q-item-section>
                <q-item-section top>
                  <q-item-label class="q-mt-sm flex-center text-left">{{ specificeDescription }}</q-item-label>
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLeaveStore } from 'stores/leave'
import { post } from "boot/axios";
import { date, useQuasar } from "quasar";
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
const SALES = master.SALES_EXECUTIVE
const leaveStore = useLeaveStore()


export default {
  setup () {
    // const $q = useQuasar()
    // const router = useRouter()
    let MYITEMS = ref(SALES)
    const search = ref('')
    let searchflag = ref('true')

    const searchcard =  computed(() => {
      if ((search.value === '')  || (searchflag.value == false) ){
        return false
      }else{
        return true
      }
    })



    const searchResult = computed(() => {
      if (search.value === '') {
        return Object.values(MYITEMS.value)
      } else {
        let keyword = search.value.toLowerCase();
        return Object.values(MYITEMS.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
      }
    })


    const notificationResult= function (id, item) {
      search.value = item
      searchflag.value = false
    }

    const router = useRouter()
    const $q = useQuasar()
    let num1
    let num2
    let model = ref(null)

    const MYLEAVES =  computed(() => {
      return Object.values(leaveStore.leaves).reverse()
    })
    let totalcount = Object.values(MYLEAVES.value).length

    const getData =  computed(() => {
      num1 = (page.value-1)*totalPages.value;
      num2 = (page.value-1)*totalPages.value+totalPages.value;
      let MYKEYS =  MYLEAVES.value.slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return { id: e.id, executive: e.executive.name,
          start_date: date.formatDate(e.start_date, 'MMMM D, YYYY '),
          end_date: date.formatDate(e.end_date, 'MMMM D, YYYY '),
          description: e.description, status: e.status
        }
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
    let specificstartDate = ref('')
    let specificendDate = ref('')
    let specificeDescription = ref('')
    let specificStatus = ref('')
    let specificExecutive = ref('')
    const openwindow = function (id, executive, start_date, end_date, description, status) {
        specificId.value = id
        specificExecutive.value = executive
        specificstartDate.value = date.formatDate(start_date, 'DD-MM-YYYY')
        specificendDate.value = date.formatDate(end_date, 'DD-MM-YYYY')
        specificeDescription.value = description
        if(status == 'New'){
          specificStatus.value = model.value = 'Progress'
          updateStatus()
        }else{
          specificStatus.value = model.value = status
        }
        card.value = true
    }

    const updateStatus = function (){
      post('leave','status',{ id :specificId.value, status:model.value })
        .then(console.log)
      positivemsg('Leave status updated Successfully')
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
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(totalcount/totalPages.value)
    })

    return {
      MYLEAVES,
      totalcount,
      page,
      currentPage,
      totalPages,
      maxVal,
      getData,
      openwindow,
      specificId,
      specificExecutive,
      specificstartDate,
      specificendDate,
      specificeDescription,
      specificStatus,
      card,
      options: [
        'Accepted','Rejected'
      ],
      model,
      updateStatus,
      positivemsg,
      notificationResult,
      MYITEMS,
      search,
      searchResult,
      searchcard,
      searchflag
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


