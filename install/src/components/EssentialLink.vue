<template>
  <q-item clickable tag="a" target="_blank" @click="navigate">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['title','caption','route','icon'])
const emits = defineEmits(['navigate'])
const router = useRouter();
function navigate(){
  emits('navigate')
  router.push({ name:props.route })
}
</script>
