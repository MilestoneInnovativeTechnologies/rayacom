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
          <q-btn color="positive" no-caps @click="gotoItem(0)">
            <q-icon left size="xl" name="open_in_new" />
            ADD ITEM
          </q-btn>
        </div>
      </div>
    </div>

  <div class="q-pa-md row items-start q-gutter-md" v-if="myitemsLength">
    <q-card flat bordered class="my-card" v-for="(i, index) in getData" :key="i.id">
      <q-list>
        <q-item class="bg-brand text-white text-bold">
          <q-item-section>
            <q-item-label>{{ i.name }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-btn flat round color="primary" icon="mode_edit" @click="gotoItem(i.id)">
            <q-tooltip> Edit </q-tooltip>   </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>

<!--  <div class="q-mt-sm">-->
<!--    {{myproducts}}-->
<!--  </div>-->

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

    const gotoItem = function (id){
      router.push({
        // name: 'ITEMADD', params: { id : id }
        name: 'ITEMADD', state: { id }
      })
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
      gotoItem
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>


