<!--<template>-->
<!--  <q-layout view="lHh Lpr lFf">-->
<!--    <q-header elevated>-->
<!--      <q-toolbar>-->
<!--        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>-->
<!--        <q-toolbar-title>Rayaheen  <span class="text-subtitle2">{{ $route.meta.title }} </span></q-toolbar-title>-->
<!--      </q-toolbar>-->
<!--    </q-header>-->

<!--    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>-->
<!--      <div class="col-3 blue_background" style="height:500px;">-->
<!--      <q-list>-->
<!--        <q-item-label header>Menu</q-item-label>-->

<!--        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" @navigate="leftDrawerOpen = false"/>-->


<!--      </q-list>-->
<!--      </div>-->
<!--    </q-drawer>-->
<!--    <q-page-container>-->
<!--      <router-view />-->
<!--    </q-page-container>-->
<!--  </q-layout>-->
<!--</template>-->

<!--<script>-->
<!--import { defineComponent, ref } from 'vue'-->
<!--import EssentialLink from 'components/EssentialLink.vue'-->

<!--const linksList = [-->
<!--  {title: 'DASHBOARD', caption: 'Back to main, Home Page', icon: 'home'},-->
<!--  {title: 'ORDER HISTORY', caption: 'A test page created by Firose Hussain', icon: 'history'},-->
<!--  {title: 'PENDING ORDERS', caption: 'sales executive profile', icon: 'pending'},-->
<!--  {title: 'DELIVERED STATUS', caption: 'Completed', icon: 'done'},-->
<!--  {title: 'NEW ORDER', caption: 'take new order', icon: 'add'},-->
<!--  {title: 'MY PROFILE', caption: 'Profile', icon: 'account_circle', route: 'PROFILE'},-->




<!--]-->

<!--export default defineComponent({-->
<!--  name: 'MainLayout',-->
<!--  components: {-->
<!--    EssentialLink-->
<!--  },-->

<!--  setup () {-->
<!--    const leftDrawerOpen = ref(false)-->

<!--    return {-->
<!--      essentialLinks: linksList,-->
<!--      leftDrawerOpen,-->
<!--      toggleLeftDrawer () {-->
<!--        leftDrawerOpen.value = !leftDrawerOpen.value-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->
<template>
  <q-container>

    <div class="row justify-end mdi-vector-arrange">
      <q-btn color="orange" no-caps @click="gotoItempage()">
        <q-icon left size="3em" name="open_in_new" />
        NEW ORDER
      </q-btn>
    </div>
    <div class="row q-pa-md q-gutter-md top left">
      <div class="col-3 blue_background" style="height:500px;">
        <q-list class="text-white rounded-borders q-ml-md q-mt-lg">
          <q-item>
            <q-item-section class="text-h5">Dashboard</q-item-section>
          </q-item>
          <q-separator color="white" insert />
          <q-item>
            <q-item-section>Order History</q-item-section>
          </q-item>
          <q-separator color="white" insert />
          <q-item>
            <q-item-section>Pending Orders</q-item-section>
          </q-item>
          <q-separator color="white" insert />
          <q-item>
            <q-item-section>Dispatched Items</q-item-section>
          </q-item>
          <q-separator color="white" insert />
          <q-item>
            <q-item-section>Delivered Items</q-item-section>
          </q-item>
          <q-separator color="white" insert />
          <q-item>

          </q-item>
        </q-list>
      </div>
    </div>
  </q-container>
    <div class="row justify-end mdi-vector-arrange">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-tabs
          v-model="tab"
          inline-label
          class="bg-purple text-white shadow-2"
        >
          <q-tab name="mail" icon="mail" label="Todays Sale" />
        </q-tabs>
        <q-tabs
          v-model="tab"
          inline-label
          class="bg-blue text-white shadow-2 "
        >
          <q-tab name="mail" icon="history" label="Total Orders left" />
        </q-tabs>
        <q-tabs
          v-model="tab"
          inline-label
          class="bg-teal text-white shadow-2 "
        >
          <q-tab name="mail" icon="history" label="Total amount" />
        </q-tabs>




      </div>
    </div>

</template>

<script >



</script>
<style scoped>
.blue_background{
  background-color: #00b0ff;
}
.my-card:hover{
  background-color: #00b0ff;
  color: white;

}

</style>
