<template>
  <q-page padding>

    <q-btn-dropdown class="q-pa-md full-width" color="primary" label="Select Item Here" size="lg">
      <q-list>
        <q-input v-model="search"
                 placeholder="Search Here"
                 debounce="600"
                 filled
                 class="col" >
          <template v-slot:append>

            <q-btn

              color="primary"
              size="lg"
              icon="search"
            />
          </template>


        </q-input>
        <q-item flat bordered

                v-for="(i, index) in searchResult" :key="i.id"   >

          <q-item-section class="bg-purple-10 text-white" @click="notificationResult(i.id,i.name)" >
            <div >{{ i.name }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-page>
  <q-item-section class="text-bold" @click="notificationResult(i.id,i.name)" >
    <div>{{myArr}}</div>
  </q-item-section>


</template>

<style>

</style>

<script>
import { computed, ref  } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useMasterStore } from 'stores/master'
const master = useMasterStore()
const ITEMS = master.ITEM
export default {
  setup() {
    const $q = useQuasar()
    const router = useRouter()
    let MYITEMS = ref(ITEMS)
    const search = ref('')
    const myArr= []

    const searchResult = computed(() => {
      if (search.value === '') {
        return Object.values(MYITEMS.value)
      } else {
        let keyword = search.value.toLowerCase();
        return Object.values(MYITEMS.value).filter(word => word.name.toLowerCase().indexOf(keyword) > -1);
      }
    })


    const notificationResult= function (id, item) {
      console.log(id, item)
      myArr.push(id, item)

    }





    return {
      notificationResult,
      MYITEMS,
      search,
      searchResult,
      myArr,
    }
  },

}
</script>
