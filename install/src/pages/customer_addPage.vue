<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <div style="max-width: 300px">
    <q-input outlined label="Name and Surname" v-model="obj.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Name']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.password" type="password" label="Password"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
      <template v-slot:append>
        <q-icon name="visibility_off" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.email" type="email" label="Email"
             lazy-rules
             :rules="[val => !!val || 'Please type Email', isValidEmail ]">
      <template v-slot:append>
        <q-icon name="email" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.phone" type="tel" label="Contact number"
             mask="(###) ### - ######"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Contact number']" >
      <template v-slot:append>
        <q-icon name="settings_phone" />
      </template>
    </q-input>
    <q-select outlined v-model="obj.area" :options="options" label="Area">
    </q-select>
<br>
    <q-input outlined v-model="obj.address" type="text" label="Address" autogrow
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Address']" >
      <template v-slot:append>
        <q-icon name="home" />
      </template>
    </q-input>
      <div class="row justify-center">
        <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
      </div>
    </div>
  </q-page>
</template>



<script>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import { reactive, ref, watchEffect} from "vue";
import {useQuasar} from "quasar";
import { useRouter } from 'vue-router'
const masterStore = useMasterStore()

export default {
  props: ['id'],
  setup (props) {
    const $q = useQuasar()
    const router = useRouter()


    const ID = ref(props.id)
    const AREA = ref(masterStore.AREA)
    const options = []
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

    for( let n in AREA.value){
      options.push( { label: AREA.value[n].name, value: AREA.value[n].id })
    }

    const obj = reactive({
      id: '', name: '', password: '', email: '', phone: '', area: '', address: ''
    })

    watchEffect(()=>{
      if(ID.value == 0){
        obj.id = obj.name = obj.password = obj.email = obj.phone = obj.area = obj.address = ''
      }else{
        let aCustomer = masterStore.CUSTOMER[ID.value]
        obj.id = ID.value
        obj.name = aCustomer.name
        obj.password = aCustomer.password
        obj.email = aCustomer.email
        obj.phone = aCustomer.phone
        obj.area = aCustomer.area.value
        obj.address = aCustomer.address
      }
    })

    const isValidEmail = function (){
      return emailPattern.test(obj.email) || 'Invalid email';
    }

    let msg
    let fun
    const save = function() {
      if( (obj.name != '') && (obj.password != '')  && (obj.phone != '') && (emailPattern.test(obj.email))
        && (obj.area.value != '') && (obj.address != '')){
        console.warn(obj);
        let newObj = _.omit(obj, ['area'])
        if(ID.value > 0){
          fun = 'update'
          msg = 'Your Item have updated successfully'
        }else{
          fun = 'store'
          msg = 'Your have added a new item successfully'
        }
        newObj.area = obj.area.value
        post('customer', fun, newObj)
        positivemsg(msg)
        router.push({
          name: 'ADMINCUSTOMERS'
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
      obj,
      save,
      positivemsg,
      isValidEmail,
      options,
    }
  }
}
</script>

