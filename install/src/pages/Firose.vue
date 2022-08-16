<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <q-input v-model="customer.name" label="Name" outlined />
    <q-input v-model="customer.phone" label="Phone" outlined />
    <q-input v-model="customer.email" label="Email" outlined />
    <q-input v-model="customer.password" label="Password" outlined />
    <q-select v-model="customer.area" label="Area" outlined :options="areas" option-label="name" option-value="id" emit-value map-options />
    <q-btn label="Update" @click="update" color="primary" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from "stores/master";
import {reactive, ref} from "vue";
import { get } from 'lodash'
const masterStore = useMasterStore()
const customers = masterStore.CUSTOMER
const ID = ref(10001)
const customer = reactive(Object.assign({},get(customers,ID.value),{ area:get(customers,[ID.value,'area','data'])+"" }))
const areas = ref(Object.values(masterStore.AREA))
function update(){
  post('master','update',customer)
}
</script>
