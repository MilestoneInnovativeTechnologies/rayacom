<template>
  <q-page padding class="flex column q-col-gutter-y-lg">

    <div class="q-pa-md text-center">
      <q-btn color="positive" no-caps @click="gotoAction()">
        <q-icon left size="xl" name="open_in_new" />
        NEW LEAVE
      </q-btn>
    </div>

  <div class="q-pa-md row items-start q-gutter-md" v-if="totalcount">
    <q-card flat bordered class="my-card" v-for="(i, index) in getData" :key="i.id">
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
  </q-page>
</template>

<script>
import { computed, ref  } from 'vue'
import { useLeaveStore } from 'stores/leave'
import { useRouter } from 'vue-router'
const leaveStore = useLeaveStore()
export default {
  setup () {
    const router = useRouter()
    let num1
    let num2

    const LEAVES =  computed(() => {
      return leaveStore.leaves
    })
    const MYLEAVES = ref(LEAVES.value)
    let totalcount = Object.values(MYLEAVES.value).length

    const getData =  computed(() => {
      num1 = (page.value-1)*totalPages.value
      num2 = (page.value-1)*totalPages.value+totalPages.value
      let MYKEYS =Object.values(MYLEAVES.value).slice(num1,num2)
      let newArr = MYKEYS.map((e) => {
        return e
      })
      return newArr
    })

    const gotoAction = function (){
      router.push({
        name: 'LEAVEADD'
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(totalcount.value/totalPages.value)
    })

    return {
      MYLEAVES,
      totalcount,
      page,
      currentPage,
      totalPages,
      maxVal,
      getData,
      gotoAction,
      specificStatus : ref('New')
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


