<template>
  <q-page padding class="flex column q-gutter-y-sm">

    <q-select outlined v-model="model1" :options="product_options" label="Product" />
    <q-input outlined label="Minimum Quantity" v-model="item.name" type="text"
             lazy-rules
             mask="##########"
             :rules="[ val => val && val.length > 0 || 'Please type Offer']" >
    </q-input>
    <q-input outlined label="Offer Quantity" v-model="item.name" type="text"
             lazy-rules
             mask="##########"
             :rules="[ val => val && val.length > 0 || 'Please type Offer']" >
    </q-input>
    <div class="q-pa-sm flex flex-left">
      <q-radio name="radio" v-model="model3" val="Public" label="Public" color="secondary" />
      <q-radio name="radio" v-model="model3" val="Private" label="Private " color="secondary" />
    </div>
    <q-select v-model="model2" label="Customers" multiple use-chips stack-label outlined
              :options="customer_options" emit-value map-options v-if="model3 === 'Private'"/>
<!--    <q-select outlined v-model="model" :options="option" label="Status" />-->
    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, reactive, ref, watchEffect} from "vue";
import {get, map, uniq} from 'lodash'
import { useQuasar } from "quasar";
import { useRouter } from 'vue-router'
const masterStore = useMasterStore()
const customer_options = computed(() => map(masterStore['CUSTOMER'],({ id,name }) => ({ label:name,value:id }) ))
const product_options = computed(() => map(masterStore['ITEM'],({ id,name }) => ({ label:name,value:id }) ))
const ITEMS = ref(masterStore.ITEM)

const $q = useQuasar()
const router = useRouter()
const ID = ref(history.state.id)

const item = reactive({
  id: '', name: ''
})

watchEffect(()=>{
  if(ID.value == 0){
    item.id = item.name = ''
  }else{
    let aITEM = masterStore.AREA[ID.value]
    item.id = ID.value
    item.name = aITEM.name
  }
})
let model = ref(null)
let model1 = ref(null)
let model2 = ref(null)
let model3 = ref(null)
// const option =  ['New','Approved','Published','Inactive']

let msg
let fun
function save(){
  if( item.name != '') {
    if(ID.value == 0){
      fun = 'store'
      msg = 'Your have added a new item successfully'
    }else{
            fun = 'update'
            msg = 'Your Item have updated successfully'
    }
    post('area', fun, item)
    positivemsg(msg)
    router.push({
            name: 'ADMINAREA'
   })
  }
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
</script>

