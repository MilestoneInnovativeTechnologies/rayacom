<template>
  <q-page padding class="flex q-gutter-x-sm justify-center">
    <div class="flex column q-gutter-y-sm">
      <div class="text-center">{{ size(items) }}</div>
      <q-input v-model="item.name" outlined label="Name" type="text" />
      <q-btn @click="save" color="primary" label="Save Item" />
    </div>
    <div class="flex column q-gutter-y-sm">
      <q-input v-model.number="ID" outlined label="ID" type="number" />
      <q-input v-model="ITEM.name" outlined label="Name" type="text" />
      <q-btn @click="update" color="secondary" label="Update Item" />
    </div>
  </q-page>
</template>

<script setup>
import { post } from 'boot/axios'
import { useMasterStore } from "stores/master";
import {computed, reactive, ref, watchEffect} from "vue";
import { size,get } from 'lodash'
const masterStore = useMasterStore()
const items = masterStore.ITEM
const ID = ref(1000001)
const item = reactive({ name:'' })
const ITEM = computed(() => masterStore.ITEM[ID.value])
function save(){
  post('item','store',{ name:item.name,item:'ITEM' })
}
function update(){
  post('master','update',ITEM.value)
}
</script>
