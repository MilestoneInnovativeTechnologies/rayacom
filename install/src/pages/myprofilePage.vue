<template>
  <div class="q-pa-lg column full-width">



    <div class="q-gutter-lg row items-start">

      <q-input outlined v-model="customer.name" type="text"
               hint="Name and Surname"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Name']" >
        <template v-slot:append>
          <q-icon name="account_box" />
        </template>
      </q-input>

      <q-input outlined v-model="customer.password" type="password" hint="Password"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
        <template v-slot:append>
          <q-icon name="visibility_off" />
        </template>
      </q-input>

      <q-input outlined v-model="customer.email" type="email" hint="Email"
               lazy-rules
               :rules="[val => !!val || 'Please type Email', isValidEmail ]">
        <template v-slot:append>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input outlined v-model="customer.phone" type="tel" hint="Contact number"
               mask="(###) ### - ######"
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Contact number']" >
        <template v-slot:append>
          <q-icon name="settings_phone" />
        </template>
      </q-input>

      <q-input outlined v-model="customer.address" type="text" hint="Address" autogrow
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Please type Address']" >
        <template v-slot:append>
          <q-icon name="home" />
        </template>
      </q-input>

      <div class="q-pa-md q-gutter-sm full-width">
        <q-btn unelevated rounded color="positive" label="Submit"  class="full-width"
               type="submit" icon="camera_enhance" @click="updateMyself">
        </q-btn>
      </div>

    </div>



  </div>
</template>

<script>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref} from "vue";
import {useQuasar} from "quasar";
const masterStore = useMasterStore()


export default {
  setup () {
    const $q = useQuasar()
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

    const ID = ref(10001)    //must change with login id
    const customer = computed(() => masterStore.CUSTOMER[ID.value])

    const isValidEmail = function (){
      return emailPattern.test(customer.value.email) || 'Invalid email';
    }

    const updateMyself = function() {
      if(isValidEmail){
        console.warn(customer.value);
        let cus = _.omit(customer.value, ['area'])
        post('master', 'update', cus)
        positivemsg('Your profile have updated succesfully')
        router.push({
          name: 'PROFILE'
        })
      }
    }

    const positivemsg = function (msg){
      $q.notify({
        type: 'positive',
        message: msg,
        icon: 'cloud_done',
        position:'top-right',
        timeout:2000
      })
    }

    return {
      customer,
      isValidEmail,
      updateMyself,
      positivemsg
    }
  }
}
</script>

