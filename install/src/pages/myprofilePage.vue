<template>
  <div class="q-pa-lg column full-width">

    <q-form @submit="onSubmit" class="q-gutter-lg">

    <div class="q-gutter-lg row items-start">

      <q-input outlined v-model="name" type="text"
               hint="Name and Surname"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Name']" >
        <template v-slot:append>
          <q-icon name="account_box" />
        </template>
      </q-input>

      <q-input outlined v-model="password" type="password" hint="Password"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
        <template v-slot:append>
          <q-icon name="visibility_off" />
        </template>
      </q-input>

      <q-input outlined v-model="email" type="email" hint="Email"
               lazy-rules
               :rules="[val => !!val || 'Please type Email', isValidEmail]">
        <template v-slot:append>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input outlined v-model="tel" type="tel" hint="Contact number"
               mask="(###) ### - ######"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Contact number']" >
        <template v-slot:append>
          <q-icon name="settings_phone" />
        </template>
      </q-input>

      <q-input outlined v-model="address" type="text" hint="Address" autogrow
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Address']" >
        <template v-slot:append>
          <q-icon name="home" />
        </template>
      </q-input>

      <div class="q-pa-md q-gutter-sm full-width">
        <q-btn unelevated rounded color="positive" label="Submit"  class="full-width"
               type="submit" icon="camera_enhance" @click="myDetails(name, password, email, tel, address)">
        </q-btn>
      </div>

    </div>

    </q-form>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    let name = ref('')
    let password = ref('')
    let email= ref('')
    let address = ref('')
    let tel = ref('')
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    const myArray = ref([] )

    const isValidEmail = function (){
      return emailPattern.test(email.value) || 'Invalid email';
    }

    const myDetails = function(name, password, email, tel, address){
      myArray.value.push({ name, password, email, tel, address });
      console.log(myArray.value)
      }

    return {
      name,
      password,
      email,
      address,
      tel,
      isValidEmail,
      myDetails
    }
  }
}
</script>

