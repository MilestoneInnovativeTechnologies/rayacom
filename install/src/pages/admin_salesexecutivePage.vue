<template>
  <q-page padding class="flex column q-gutter-y-sm">

    <div class="q-gutter-md" top>
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
    <div class="row justify-end side">
      <q-btn color="positive" no-caps @click="gotoAction(0)">
        <q-icon left size="2em" name="open_in_new" />
        ADD CUSTOMER
      </q-btn>
    </div>

    <div class="q-pa-md row items-start q-gutter-md" v-if="myarrayLength">
      <q-card flat bordered class="my-card" v-for="(i, index) in getData" :key="i.id">
        <q-list>
          <q-item class="bg-brand text-white text-bold">
            <q-item-section>
              <q-item-label>{{ i.name }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-btn flat round color="primary" icon="mode_edit" @click="gotoAction(i.id)">
                <q-tooltip> Edit </q-tooltip>   </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <!--  <div class="q-mt-sm">-->
    <!--    {{myproducts}}-->
    <!--  </div>-->

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
import { useMasterStore } from 'stores/master'
import { useRouter } from 'vue-router'
const master = useMasterStore()
export default {
  setup () {
    const router = useRouter()
    let num1
    let num2

    const MYARRAY =  computed(() => {
      return  master.SALES_EXECUTIVE
    })

    const search = ref('')

    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(MYARRAY.value)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(MYARRAY.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
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
        name: 'SALESEXECUTIVEADD', params: { id : id }
      })
    }

    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(myarrayLength.value/totalPages.value)
    })

    return {
      MYARRAY,
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


