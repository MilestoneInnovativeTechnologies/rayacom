<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <q-input v-model="executive.name" label="Name" outlined/>
    <q-input v-model="executive.phone"  mask="## ##########" label="Phone" outlined/>
    <q-input v-model="executive.email" label="Email" outlined/>
    <q-input v-model="executive.password" label="Password" outlined/>
    <q-select v-model="executive.areas" label="Areas" multiple use-chips stack-label outlined :options="area_options" emit-value map-options />
    <q-btn label="Submit" @click="save" color="positive" icon="camera_enhance" />
  </q-page>
</template>

<script setup>
import {post} from 'boot/axios'
import {useMasterStore} from "stores/master";
import {computed, reactive, ref, watch, watchEffect} from "vue";
import {get, map, uniq} from 'lodash'
import {useQuasar} from "quasar";
import {useRouter} from "vue-router/dist/vue-router";

// const props = defineProps(['id'])
const ID = ref(history.state.id)

const $q = useQuasar()
const router = useRouter()
const masterStore = useMasterStore()

const area_options = computed(() => map(masterStore['AREA'],({ id,name }) => ({ label:name,value:id }) ))

const executives = masterStore['SALES_EXECUTIVE']
// const executive = reactive(Object.assign({},get(executives,props.id),{ areas:uniq(map(get(executives,[props.id,'areas']),({ data }) => String(data))) }))
const executive = reactive(Object.assign({},get(executives,ID.value),{ areas:uniq(map(get(executives,[ID.value,'areas']),({ data }) => String(data))) }))

function save(){
  // if(ID.id && props.id > 0){
  if(ID.value && ID.value > 0){
    post('master', 'update',executive).then(() => {
      positivemsg('You have updated a salesexecutive successfully');
      router.push({ name: 'ADMINSALESXECUTIVEPAGE' })
    })
  } else {
    post('executive', 'store',executive).then(() => {
      positivemsg('You have added a new SalesExecutive successfully');
      router.push({ name: 'ADMINSALESXECUTIVEPAGE' })
    })
  }
}
function positivemsg(msg) {
  $q.notify({
    type: 'positive',
    message: msg,
    icon: 'cloud_done',
    position: 'top-right',
    timeout: 2000
  })
}
</script>
