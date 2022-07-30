<template>
  <q-page padding class="flex flex-center column">
    Firose Hussain
    <q-btn @click="doPost" label="Do POST" />
    <q-btn @click="doChangeSTatus" label="DStatus" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import { useOrderStore} from 'stores/order'
const masterStore = useMasterStore()
const orderStore = useOrderStore()
function doPost(){
  console.log(masterStore.AREA)
  post('order','store',{ customer:10001,date:'2022-07-28 14:52:00',items:[{ item: 1000006, quantity: 5 },{ item: 1000016, quantity: 3 }] })
    .then(console.log)
}
function doChangeSTatus(){
  post('order','status',{ order:1,status:'Viewed' })
    .then(console.log)
}
</script>
