<template>
  <q-page class="flex flex-center column">
    <img alt="Elements Logo" src="~assets/favicon-128x128.png" style="width: 100px; height: 100px">
    <q-card>
      <q-card-section class="bg-secondary text-white text-bold" style="width: 300px">Imported Data Counts</q-card-section>
      <q-list dense separator>
        <q-item v-for="ITEM in master_master" :key="ITEM">
          <q-item-section>{{ ITEM }}</q-item-section>
          <q-item-section side class="text-secondary text-bold">{{ size(master[ITEM]) }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>ORDERS</q-item-section>
          <q-item-section side class="text-secondary text-bold">{{ size(orderStore.data) }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>REVIEWS</q-item-section>
          <q-item-section side class="text-secondary text-bold">{{ size(reviewStore.reviews) }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>LEAVES</q-item-section>
          <q-item-section side class="text-secondary text-bold">{{ size(leaveStore.leaves) }}</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>OFFERS</q-item-section>
          <q-item-section side class="text-secondary text-bold">{{ size(offerStore.offers) }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup>
import { useMasterStore } from 'stores/master'
import { useOrderStore } from 'stores/order'
import { useReviewStore } from 'stores/review'
import { useLeaveStore } from 'stores/leave'
import { useOfferStore } from 'stores/offers'
const master = useMasterStore()
const orderStore = useOrderStore()
const leaveStore = useLeaveStore()
const reviewStore = useReviewStore()
const offerStore = useOfferStore()
const master_master = _.map(MASTERS);
const size = _.size
</script>
