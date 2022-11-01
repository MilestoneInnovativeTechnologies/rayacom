<template>
  <q-page padding class="flex column q-col-gutter-y-lg">
    <div class="q-pa-sm">
      <div class="row q-pa-md">
        <div class="col-8">
          <q-input
            v-model="search"
            debounce="500"
            filled
            placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-4 text-center">
          <q-btn color="positive" no-caps @click="gotoAction(0)">
            <q-icon left size="xl" name="open_in_new" />
            ADD OFFER
          </q-btn>
        </div>
      </div>
    </div>

  <div class="q-pa-sm row items-start q-gutter-md" v-if="myarrayLength">
    <q-card flat bordered class="my-card" v-for="(i, index) in getData" :key="i.id">
      <q-list>
        <q-item class="bg-brand text-white text-bold">
          <q-item-section>
            <q-item-label>{{ i.item.name }}</q-item-label>
            <q-item-label class="text-subtitle2">Qty: {{ i.minimum_quantity }}</q-item-label>
            <q-item-label>
              <q-badge color="blue" v-if="i.status === 'New'" >{{ i.status }}</q-badge>
              <q-badge color="secondary" v-else-if ="i.status === 'Approved'" >{{ i.status }}</q-badge>
              <q-badge color="positive" v-else-if="i.status === 'Published'" >{{ i.status }}</q-badge>
              <q-badge color="accent" v-else-if="i.status === 'Inactive'" >{{ i.status }}</q-badge>
              <q-badge color="dark" v-else>Unknown</q-badge>
            </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-btn flat round color="primary" icon="mode_edit" @click="gotoAction(i.id)">
            <q-tooltip> Edit </q-tooltip>   </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>

  <div class="q-pa-lg flex flex-center" v-if="myarrayLength">
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
import { useOfferStore } from 'stores/offers'
import { useRouter } from 'vue-router'
const offerStore = useOfferStore()
export default {
  setup () {
    const router = useRouter()
    let num1
    let num2

    const search = ref('')
    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(offerStore.offers)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(offerStore.offers).filter(word => word.item.name.toLowerCase().indexOf(keyword) > -1);
      }
    })
    const myarrayLength = computed(()=>{
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

    const gotoAction = function (id){
      router.push({
        name: 'OFFERADD', state: { id },
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(myarrayLength.value/totalPages.value)
    })

    return {
      search,
      searchResult,
      myarrayLength,
      page,
      currentPage,
      totalPages,
      maxVal,
      getData,
      gotoAction
    }
  },
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


