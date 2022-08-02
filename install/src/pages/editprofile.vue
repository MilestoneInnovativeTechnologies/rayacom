<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
export default {
  setup () {
      let name = ref('')
      let password = ref('')
      let email = ref('')
      let phone = ref('')
      const newArr = ref([])
      const $q = useQuasar()

      const myProfile = function(name ,password ,email ,phone) {
        console.log(name, password, email, phone)
        newArr.value.push(name, password, email, phone)
      }
     const onSubmit = function(message)
    {
      $q.notify({
      color: 'green',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
        position:'top-right',
    })
  }










    return {
        onSubmit,
        myProfile,
        name,
        password,
        email,
        phone


      }



    }
}


</script>

<template>
  <form @submit.prevent="onSubmit" class="q-pa-md items-start">

    <div class="row justify-xl-center full-width">
    <q-input outlined
             v-model="name"
             type="text"
             hint="Full Name"
             :rules="[ val => val && val.length > 0 || 'field is required']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
      <q-space></q-space>
      <q-input outlined
             v-model="password"
             hint="Password"
             type="password"
             :rules="[ val => val && val.length > 0 || 'field is required']" >

      <template v-slot:append>
        <q-icon name="password"/>
      </template>
    </q-input>
      <q-space></q-space>
      <q-input outlined
             v-model="email"
             hint="E-Mail"
             type="text"
             :rules="[ val => val && val.length > 0 || 'field is required']">
      <template v-slot:append>
        <q-icon name="mail" />
      </template>

    </q-input>


      <q-space></q-space>
      <div class="row justify-md-center">
    <q-input outlined
             v-model="phone"
             hint="Contact Number"
             type="text"
             :rules="[ val => val && val.length > 0 || 'field is required']">
      <template v-slot:append>

        <q-icon name="phone" />
      </template>
    </q-input>

    </div>

      <div class="row justify-center full-width">
        <q-btn
          type="submit"
          :loading="submitting"
          label="SUBMIT"
          class="q-mt-md full-width"
          color="purple"
          @click="myProfile(name ,password ,email ,phone)">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>

        </q-btn>
      </div>
    </div>
  </form>
</template>
