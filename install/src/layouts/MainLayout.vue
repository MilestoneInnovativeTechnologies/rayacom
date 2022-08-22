<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>Rayaheen  <span class="text-subtitle2">{{ $route.meta.title }} </span></q-toolbar-title>
        <q-btn flat round dense @click="logout"><q-icon name="power" /></q-btn>
        <q-btn flat round dense @click="router.push({ name:'home' })"><q-icon name="home" /></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <EssentialLink v-for="link in links" :key="link.title" v-bind="link" @navigate="leftDrawerOpen = false"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<!--
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import Routes from './../router/routes'
const linksList = [
  {title: 'Home', caption: 'Back to main, Home Page', icon: 'home', route: 'home'},
  {title: 'Firose', caption: 'A test page created by Firose Hussain', icon: 'beach_access', route: 'firose'},
  {title: 'DASHBOARD', caption: 'Dashboard', icon: 'home', route: 'DASHBOARD'},
  {title: 'ORDER HISTORY', caption: 'ORDER HISTORY', icon: 'history', route: 'ORDERHISTORY'},
  {title: 'REVIEWS', caption: 'REVIEWS', icon: 'comment', route: 'REVIEWS'},
  {title: 'PROFILE', caption: 'Profile', icon: 'account_circle', route: 'PROFILE'},

  {title: 'SE DASHBOARD', caption: 'Sales Executive Dashboard', icon: 'home', route: 'SALESEXECUTIVEDASHBOARD'},
  {title: 'SE ORDER HISTORY', caption: 'Sales Executive Order History', icon: 'history', route: 'SALESEXECUTIVEORDEHISTORY'},
  {title: 'SE PROFILE', caption: 'Sales Executive profile', icon: 'account_circle', route: 'SALESEXECUTIVEPROFILE'},
  {title: 'SE LEAVES', caption: 'Leave', icon: 'account_circle', route: 'SALESEXECUTIVELEAVES'},
  {title: 'SE TEST', caption: 'Sales', icon: 'account_circle', route: 'ADMINSALESXECUTIVEPAGE'},

  {title: 'AD LEAVES', caption: 'Leaves', icon: 'sick', route: 'ADMINDASHBOARD'},
  {title: 'AD REVIEWS', caption: 'Reviews', icon: 'comment_bank', route: ''},
  {title: 'AD ORDER HISTORY', caption: 'Order History', icon: 'history', route: 'ADMINORDERHISTORY'},
  {title: 'AD CUSTOMERS', caption: 'Customers', icon: 'people', route: 'ADMINCUSTOMERS'},
  {title: 'AD SALES EXECUTIVES', caption: 'Sales Executives', icon: 'person', route: ''},
  {title: 'AD AREA', caption: 'Area', icon: 'area_chart', route: 'ADMINAREA'},
  {title: 'AD ITEMS', caption: 'Items', icon: 'add_shopping_cart', route: 'ADMINITEMS'},
  {title: 'AD PROFILE', caption: 'Profile', icon: 'manage_accounts', route: 'ADMINPROFILE'},
  {title: 'AD DASHBOARD', caption: 'Dashboard', icon: 'home', route: 'ADMINDASHBOARD'},
]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  setup () {
    console.log(_.flatMap(Routes,'children'))
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
-->
<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router'
import Routes from "src/router/routes";
import EssentialLink from 'components/EssentialLink.vue'
const router = useRouter()
const links = _(Routes).flatMap('children').filter(route => route && route.menu).map(route => Object.assign({},route.menu,{ route:route.name })).value()
const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function logout(){ location.href = [location.protocol+'/',location.host,'logout'].join("/") }
</script>
