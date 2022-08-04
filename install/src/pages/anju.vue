<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input v-model.number="ID" outlined label="ID" type="number" />
    <q-input v-model="salesexecutive.name" outlined label="Name" type="text" />
    <q-input v-model.number="salesexecutive.phone" outlined label="Number" type="number" />
    <q-input v-model="salesexecutive.address" outlined label="Address" type="textarea" />
    <q-input v-model="salesexecutive.email" outlined label="Email" type="text" />
    <q-input v-model="salesexecutive.password" outlined label="Password" type="text" />
    <q-btn label="Update" @click="update" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref} from "vue";
const masterStore = useMasterStore(), ID = ref(100001)
const salesexecutive = computed(() => masterStore.SALES_EXECUTIVE[ID.value])
function update(){
  console.warn(salesexecutive.value);
  let cus = _.omit(salesexecutive.value,['areas'])
  post('master','update',cus)
}
</script>
