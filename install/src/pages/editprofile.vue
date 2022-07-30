<script>
export default {
  setup(){
    return{
      Submit:'',
      simulateSubmit:'',
      loading:'',


    }
  }
}


</script>

<template>
  <form @submit.prevent="simulateSubmit" class="q-pa-md">
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
             :rules="[ val => val && val.length > 0 || 'field is required']"
    >
      <template v-slot:append>
        <q-icon name="mail" />
      </template>

    </q-input>
      <q-space></q-space>
      <q-input outlined
             v-model="address"
             hint="Address"
             type="text"
             :rules="[ val => val && val.length > 0 || 'field is required']"
    >
      <template v-slot:append>
        <q-icon name="home" />
      </template>
    </q-input>
      <q-space></q-space>
      <div class="row justify-md-center">
    <q-input outlined
             v-model="phone"
             hint="Contact Number"
             type="text"
             :rules="[ val => val && val.length > 0 || 'field is required']"
    >
      <template v-slot:append>

        <q-icon name="phone" />
      </template>
    </q-input>

    </div>

      <div class="row justify-center full-width">
        <q-btn
          type="submit"
          :loading="submitting"
          label="Submit"
          class="q-mt-md full-width"
          color="teal">
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>

        </q-btn>
      </div>
    </div>
  </form>
</template>
