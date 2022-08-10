<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>Rayaheen  <span class="text-subtitle2">{{ $route.meta.title }} </span></q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="bg-grey-1">
        <q-item-label header class="bg-grey-2 text-black text-bold">Menu</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" @navigate="leftDrawerOpen = false"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {title: 'Home', caption: 'Back to main, Home Page', icon: 'home', route: 'home'},
  // {title: 'Firose', caption: 'A test page created by Firose Hussain', icon: 'beach_access', route: 'firose'},

  {title: 'DASHBOARD', caption: 'Dashboard', icon: 'home', route: 'DASHBOARD', separate: true },
  {title: 'ORDER HISTORY', caption: 'ORDER HISTORY', icon: 'history', route: 'ORDERHISTORY'},
  {title: 'PROFILE', caption: 'Profile', icon: 'account_circle', route: 'PROFILE'},

  {title: 'SE DASHBOARD', caption: 'Sales Executive Dashboard', icon: 'home', route: 'SALESEXECUTIVEDASHBOARD', separate: true},
  {title: 'SE ORDER HISTORY', caption: 'Sales Executive Order History', icon: 'history', route: 'SALESEXECUTIVEORDEHISTORY'},
  {title: 'SE PROFILE', caption: 'Sales Executive Profile', icon: 'account_circle', route: 'editprofile'},
/*

  {title: 'AD DASHBOARD', caption: 'Dashboard', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD LEAVES', caption: 'Leaves', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD REVIEWS', caption: 'Reviews', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD ORDERS', caption: 'Orders', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD ORDER HISTORY', caption: 'Order History', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD CUSTOMERS', caption: 'Customers', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD SALES EXECUTIVES', caption: 'Sales Executives', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD AREA', caption: 'Area', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD ITEMS', caption: 'items', icon: 'account_circle', route: 'editprofile'},
  {title: 'AD PROFILE', caption: 'Profile', icon: 'account_circle', route: 'editprofile'},
*/

]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
