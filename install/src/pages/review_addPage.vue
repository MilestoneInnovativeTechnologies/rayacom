<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <div class="q-pa-md">
    <q-radio name="shape" v-model="obj.type" val="1" label="PRODUCTS" />
    <q-radio name="shape" v-model="obj.type" val="2" label="SALES EXECUTIVE" />
    <q-radio name="shape" v-model="obj.type" val="3" label="ORDER" />
    </div>

    <q-select outlined v-model="obj.typeid" :options="options1" label="Products" v-if="obj.type ==1">
    </q-select>
    <q-select outlined v-model="obj.typeid" :options="options2" label="Sales Executive" v-if="obj.type == 2">
    </q-select>
    <q-select outlined v-model="obj.typeid" :options="options3" label="Orders" v-if="obj.type == 3">
    </q-select>

    <q-input outlined label="Comment" v-model="obj.comment" type="text"
             maxlength="500" autogrow counter
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Comment']" >
      <template v-slot:append>
        <q-icon name="comment" />
      </template>
    </q-input>
    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
  </q-page>

</template>


<script setup>
import { post } from 'boot/axios'
import { reactive, ref } from "vue";
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useMasterStore } from 'stores/master'
import { useOrderStore} from 'stores/order'

const $q = useQuasar()
const router = useRouter()
const masterStore = useMasterStore()
const orderStore = useOrderStore()
const ITEMS = ref(masterStore.ITEM)
const SALES_EXECUTIVE = ref(masterStore.SALES_EXECUTIVE)
const ORDERS = ref(orderStore.all)
const options1 = []
const options2 = []
const options3 = []
for( let n in ITEMS.value){
  options1.push( { label: ITEMS.value[n].name, value: ITEMS.value[n].id })
}
for( let n in SALES_EXECUTIVE.value){
  options2.push( { label: SALES_EXECUTIVE.value[n].name, value: SALES_EXECUTIVE.value[n].id })
}
let orderid
for( let n in ORDERS.value){
  orderid = ORDERS.value[n].id
  options3.push( { label:orderid +' - '+ ORDERS.value[n].date, value: orderid })
}
const obj = reactive({
  id: '', type: '1', typeid: '',  comment: '',
})
function save(){
  if((obj.typeid != '') &&  (obj.description != '')){
    let newObj = _.omit(obj, ['area'])
    newObj.typeid = obj.typeid.value
    post('review','store', newObj)
    positivemsg('Your review have saved successfully')
    router.push({
      name: 'REVIEWS'
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
