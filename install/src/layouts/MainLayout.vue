<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>Rayaheen</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
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
  {title: 'Firose', caption: 'A test page created by Firose Hussain', icon: 'beach_access', route: 'firose'},
  {title: 'DASHBOARD', caption: 'Dashboard', icon: 'home', route: 'DASHBOARD'},
  {title: 'Item', caption: 'Products', icon: 'shopping_basket', route: 'ITEM'},
  {title: 'PROFILE', caption: 'Profile', icon: 'account_circle', route: 'PROFILE'},
  {title: 'sales excutive profile', caption: 'sales executive profile', icon: 'edit', route: 'editprofile'},
  {title: 'ORDER HISTORY', caption: 'ORDER HISTORY', icon: 'history', route: 'ORDERHISTORY'},
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
