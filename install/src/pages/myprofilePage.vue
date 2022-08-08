<template>

  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Name and Surname" v-model="customer.name" type="text"

             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Name']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
    <q-input outlined v-model="customer.password" type="password" label="Password"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
      <template v-slot:append>
        <q-icon name="visibility_off" />
      </template>
    </q-input>
    <q-input outlined v-model="customer.email" type="email" label="Email"
             lazy-rules
             :rules="[val => !!val || 'Please type Email', isValidEmail ]">
      <template v-slot:append>
        <q-icon name="email" />
      </template>
    </q-input>

    <q-input outlined v-model="customer.phone" type="tel" label="Contact number"
             mask="(###) ### - ######"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Contact number']" >
      <template v-slot:append>
        <q-icon name="settings_phone" />
      </template>
    </q-input>

    <q-input outlined v-model="customer.address" type="text" label="Address" autogrow
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Address']" >
      <template v-slot:append>
        <q-icon name="home" />
      </template>
    </q-input>
    <q-btn color="positive" label="Submit" @click="updateMyself" icon="camera_enhance" />
  </q-page>

</template>

<script>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref} from "vue";
import {useQuasar} from "quasar";
import { useRouter } from 'vue-router'
const masterStore = useMasterStore()


export default {
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    const myForm = ref(null)
    const ID = ref(10001)    //must change with login id
    const customer = computed(() => masterStore.CUSTOMER[ID.value])

    const isValidEmail = function (){
      return emailPattern.test(customer.value.email) || 'Invalid email';
    }

    const updateMyself = function() {
      if( (customer.value.name != '') && (customer.value.password != '')  && (customer.value.phone != '')
        && (emailPattern.test(customer.value.email)) && (customer.value.address != '')){
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

