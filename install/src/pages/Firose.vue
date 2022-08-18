<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <q-input v-model="executive.name" label="Name" outlined />
    <q-input v-model="executive.phone" label="Phone" outlined />
    <q-input v-model="executive.email" label="Email" outlined />
    <q-input v-model="executive.password" label="Password" outlined />
    <q-select v-model="executive.areas" label="Areas" multiple use-chips stack-label outlined :options="areas" option-label="name" option-value="id" emit-value map-options />
    <q-btn label="Update" @click="update" color="primary" />
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from "stores/master";
import {reactive, ref} from "vue";
import { get,map } from 'lodash'
const masterStore = useMasterStore()
const executives = masterStore['SALES_EXECUTIVE']
const ID = ref(100001)
const executive = reactive(Object.assign({},get(executives,ID.value),{ areas:map(get(executives,[ID.value,'areas'],[]),({ data }) => String(data)) }))
const areas = ref(Object.values(masterStore['AREA']))
function update(){
  post('master','update',executive)
}
</script>
