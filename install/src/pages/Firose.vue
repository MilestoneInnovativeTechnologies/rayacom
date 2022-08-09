<template>
  <q-page padding class="flex q-gutter-x-sm justify-center">
    <div class="flex column q-gutter-y-sm">
      <q-input v-model.number="CID" outlined label="ID" type="number" />
      <q-input v-model="customer.name" outlined label="Name" type="text" />
      <q-input v-model.number="customer.phone" outlined label="Number" type="number" />
      <q-input v-model="customer.address" outlined label="Address" type="textarea" />
      <q-input v-model="customer.email" outlined label="Email" type="text" />
      <q-input v-model="customer.password" outlined label="Password" type="text" />
      <q-list separator class="q-mt-md">
        <q-item-label class="text-bold text-subtitle2">Area</q-item-label>
        <q-item clickable tag="label" v-for="mArea in masterAreas" :key="'area-' + mArea.id" @click="area = mArea.id">
          <q-item-section>{{ mArea.name }}</q-item-section>
          <q-item-section side v-show="mArea.id == area"><q-icon name="done" color="positive" /></q-item-section>
        </q-item>
      </q-list>
      <q-btn label="Update" @click="update" />
    </div>
    <div class="flex column q-gutter-y-sm">
      <q-input v-model.number="SID" outlined label="ID" type="number" />
      <q-input v-model="executive.name" outlined label="Name" type="text" />
      <q-input v-model.number="executive.phone" outlined label="Number" type="number" />
      <q-input v-model="executive.email" outlined label="Email" type="text" />
      <q-input v-model="executive.password" outlined label="Password" type="text" />
      <q-list separator class="q-mt-md">
        <q-item-label class="text-bold text-subtitle2">Areas</q-item-label>
        <q-item clickable tag="label" v-for="mArea in masterAreas" :key="'areas-' + mArea.id" @click="alter_areas(mArea)">
          <q-item-section>{{ mArea.name }}</q-item-section>
          <q-item-section side v-show="inAreas(mArea)"><q-icon name="done" color="positive" /></q-item-section>
        </q-item>
      </q-list>
      <q-btn label="Update" @click="e_update" />
    </div>
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref, watchEffect} from "vue";
const masterStore = useMasterStore(), area = ref(''), areas = ref([]), masterAreas = masterStore.AREA;
const CID = ref(10001), customer = computed(() => masterStore.CUSTOMER[CID.value])
const SID = ref(100001), executive = computed(() => masterStore.SALES_EXECUTIVE[SID.value])
watchEffect(() => {
  if(!customer.value || !customer.value.area) return;
  area.value = _.get(customer.value,['area','data']);
})
watchEffect(() => {
  if(!executive.value || !executive.value.areas) return;
  areas.value = _.map(executive.value.areas,({ data }) => _.toNumber(data));
})
function inAreas({ id }){ return _.includes(areas.value,_.toNumber(id)) }
function alter_areas(area){
  if(inAreas(area)) areas.value.splice(_.indexOf(areas.value,_.toNumber(area.id)),1)
  else areas.value.push(parseInt(area.id))
}
function update(){
  let upd_data = Object.assign({},customer.value,{ area:area.value })
  post('master','update',upd_data)
}
function e_update(){
  let upd_data = Object.assign({},executive.value,{ areas:areas.value })
  post('master','update',upd_data)
}
</script>
