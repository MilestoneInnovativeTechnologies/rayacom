<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >

    <q-select outlined v-model="obj.item" :options="product_options" label="Product"
              lazy-rules
              :rules="[val => val !== null && val !== '' || 'Please select a Product',]" />
    <q-input outlined label="Quantity" v-model="obj.minimum_quantity" type="text"
             lazy-rules
             mask="##########"
             :rules="[ val => val && val.length > 0 || 'Please type Offer']" >
    </q-input>
    <q-input outlined label="Offer Quantity" v-model="obj.offer_quantity" type="text"
             lazy-rules
             mask="##########"
             :rules="[ val => val && val.length > 0 || 'Please type Offer']" >
    </q-input>
    <div class="q-pa-sm flex flex-left">
      <q-radio name="radio" v-model="obj.type" val="Public" label="Public" color="secondary" />
      <q-radio name="radio" v-model="obj.type" val="Private" label="Private " color="secondary" />
    </div>
    <q-select v-model="item.customers" label="Customers" multiple use-chips stack-label outlined
              :options="customer_options" emit-value map-options v-if="obj.type === 'Private'"/>
<!--    <q-select outlined v-model="model" :options="option" label="Status" />-->
<!--    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />-->
      <q-btn label="Submit" type="submit" color="positive"  icon="camera_enhance"/>
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
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

const obj = reactive({
  id: '', item: '', minimum_quantity:'', offer_quantity:'', type:'',customers:'', status:''
})

watchEffect(()=>{
  if(ID.value == 0){
    obj.id = obj.item = obj.minimum_quantity = obj.offer_quantity =  obj.customers  =  ''
    obj.type = 'Public'
    obj.status = 'Approved'
  }else{
    let aOFFER = masterStore.AREA[ID.value]
    obj.id = ID.value
    obj.item = aOFFER.item
    obj.minimum_quantity = aOFFER.minimum_quantity
    obj.offer_quantity = aOFFER.offer_quantity
    obj.type = aOFFER.type
    obj.status = aOFFER.status
  }
})

// const option =  ['New','Approved','Published','Inactive']
function onSubmit () {
  let newObj = _.omit(obj, ['item'])
  newObj.item = obj.item.value
  if(ID.value == 0){
    fun = 'store'
    msg = 'Your have added a new item successfully'
  }else{
    fun = 'update'
    msg = 'Your Item have updated successfully'
  }
  post('offer', fun, newObj)
  positivemsg(msg)
  router.push({
    name: 'ADMINOFFER'
  })
}
function  onReset () {
  item.id = item.item = item.minimum_quantity = item.offer_quantity = item.customers  = item.status = null
  item.type = 'Public'
}

let msg
let fun

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
<!--https://quasar.dev/vue-components/form-->
<!--https://codepen.io/ravi-codepen/pen/drWVNZ-->


