<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">

    <div class="q-pa-md full-width" style="max-width: 500px" >
      <div class="q-gutter-md">
        <div>

        </div>

        <q-input
          v-model="search"
          debounce="500"
          filled
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

      </div>
    </div>
    <div class="row side">
      <q-btn color="positive" no-caps @click="gotoSales(0)">
        <q-icon left size="2em" name="open_in_new" />
        ADD NEW SALES EXECUTIVE
      </q-btn>
    </div>

    <div class="q-pa-md row items-start q-gutter-md" v-if="myitemsLength">
      <q-card flat bordered class="my-card" v-for="(i, index) in getData" :key="i.id">
        <q-list>
          <q-item class="bg-brand text-white text-bold">
            <q-item-section>
              <q-item-label>{{ i.name }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-btn flat round color="primary" icon="mode_edit" @click="gotoSales(i.id)" />
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

<script setup>
import { computed, ref  } from 'vue'
import { useMasterStore } from 'stores/master'
import { useRouter } from 'vue-router'
const master = useMasterStore()

    const router = useRouter()
    let num1
    let num2

    const MYSALES =  computed(() => {
      return  master.SALES_EXECUTIVE
    })

    const search = ref('')

    const searchResult = computed(()=>{
      if(search.value === ''){
        return Object.values(MYSALES.value)
      }else{
        let keyword = search.value.toLowerCase();
        return Object.values(MYSALES.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
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

    const gotoSales = function (id) {
      router.push({
        name: 'SALESEXECUTIVEADD', params: { id : id }
      })
    }


    let page = ref(1)
    let currentPage= ref(1)
    const totalPages= ref(10)

    const maxVal =  computed(() => {
      return Math.ceil(myitemsLength.value / totalPages.value)


      return {
        MYSALES,
        search,
        searchResult,
        myitemsLength,
        page,
        currentPage,
        totalPages,
        maxVal,
        getData,
        gotoSales
      }
    })
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

</style>


