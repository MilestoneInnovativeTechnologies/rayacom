<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input v-model.number="ID" outlined label="ID" type="number" />
    <q-input v-model="customer.name" outlined label="Name" type="text" />
    <q-input v-model.number="customer.phone" outlined label="Number" type="number" />
    <q-input v-model="customer.address" outlined label="Address" type="textarea" />
    <q-input v-model="customer.email" outlined label="Email" type="text" />
    <q-input v-model="customer.password" outlined label="Password" type="text" />
    <q-btn label="Update" @click="update" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref} from "vue";
const masterStore = useMasterStore(), ID = ref(10001)
const customer = computed(() => masterStore.CUSTOMER[ID.value])
function update(){
  console.warn(customer.value);
  let cus = _.omit(customer.value,['area'])
  post('master','update',cus)
}
</script>
