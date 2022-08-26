<script setup>
import { useQuasar } from 'quasar'
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, ref} from "vue"
import {useRouter} from "vue-router/dist/vue-router";
const $q = useQuasar()
const router = useRouter()
const masterStore = useMasterStore()
const ID = ref(AUTH_DATA)
const salesexecutive = computed(() => masterStore.SALES_EXECUTIVE[ID.value])
const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
const isValidEmail = function () {
  return emailPattern.test(salesexecutive.value.email)|| 'Invalid email';
}



 const myProfile = function () {
   if( (salesexecutive.value.name != '') && (salesexecutive.value.password != '')  && (salesexecutive.value.phone != '')
     && (emailPattern.test(salesexecutive.value.email))){

   console.warn(salesexecutive.value);
   let cus = _.omit(salesexecutive.value, ['areas'])
   post('master', 'update', cus)

   }



 }
// const myProfile = function(name ,password ,email ,phone) {
//   console.log(name, password, email, phone)
//   newArr.value.push(name, password, email, phone)
// }
const onSubmit = function(message)
{
  $q.notify({
    color: 'green',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Your Profile Successfully Updated',
    position:'top-right',

  })
 return{

   onSubmit,
   isValidEmail,
   myProfile,
   salesexecutive,




 }
}









</script>

<template>
  <q-form
    @submit.prevent="onSubmit" class="">
    <q-page padding class="flex column q-gutter-y-sm">

<!--    <div class="row justify-xl-center full-width">-->
    <q-input outlined
             v-model="salesexecutive.name"
             type="text"
             label="Full Name"
             :rules="[ val => val && val.length > 0 || 'Please type your name']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
<!--      <q-space></q-space>-->
      <q-input outlined
             v-model="salesexecutive.password"
               label="Password"
             type="password"
             :rules="[ val => val && val.length > 0  || 'must  fill this field',
             val => val.length > 5 || 'Minimum length is 6']" >

      <template v-slot:append>
        <q-icon name="visibility_off"/>
      </template>
    </q-input>
<!--      <q-space></q-space>-->
      <q-input  outlined
             v-model="salesexecutive.email"
             label="E-Mail"
             type="text"
             :rules="[ val => !!val ||  'Email is missing', isValidEmail ]">
      <template v-slot:append>
        <q-icon name="mail" />
      </template>

    </q-input>


<!--      <q-space></q-space>-->
<!--      <div class="row justify-md-center">-->
    <q-input outlined
             v-model="salesexecutive.phone"
             label="Contact Number"
             type="text"
             :rules="[ val => val && val.length > 0 || 'please enter your PH no']">
      <template v-slot:append>

        <q-icon name="phone" />
      </template>
    </q-input>

<!--    </div>-->

<!--      <div class="row justify-center full-width">-->
        <q-btn type="submit"
               label="Submit"
               color="green"
               icon="camera_enhance"
               @click="myProfile"/>
<!--      </div>-->
<!--    </div>-->
    </q-page>
  </q-form>
</template>
