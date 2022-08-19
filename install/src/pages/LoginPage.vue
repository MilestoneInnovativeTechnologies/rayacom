<template>
  <q-page class="flex flex-center column">
    <div v-if="error" class="q-mb-sm text-red text-bold">Login credential entered are not matching!!</div>
    <q-form method="post" :action="action" @submit.prevent="doLogin">
      <q-card style="width: 330px;">
        <q-card-section class="bg-primary q-py-md text-white text-bold text-uppercase">Credentials</q-card-section>
        <q-card-section class="q-gutter-y-sm">
          <q-input name="email" v-model="credentials.email" outlined label="Email" />
          <q-input name="password" v-model="credentials.password" outlined label="Password" type="password" />
        </q-card-section>
        <q-card-actions class="bg-grey-3" align="right">
          <q-btn label="Login" color="primary" padding="sm xl" type="submit" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup>
import {reactive} from "vue";
const credentials = reactive({ email:'',password:'' })
const action = [location.protocol,location.host].join("//");
const error = location.search.includes('success')
function doLogin(evt){
  if(credentials.email !== '' && credentials.password !== '') evt.target.submit();
}
</script>
