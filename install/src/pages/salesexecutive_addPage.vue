<template>

  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Full Name" v-model="salesexecutive.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type  user Name']" >
      <template v-slot:append>
        <q-icon name="invert_colors" color="brand"  />
      </template>

    </q-input>

        <q-input outlined
                 v-model="salesexecutive.password"
                 hint="Password"
                 type="password"
                 :rules="[ val => val && val.length > 0  || 'must  fill this field',
             val => val.length > 5 || 'Minimum length is 6']" >

          <template v-slot:append>
            <q-icon name="visibility_off"/>
          </template>
        </q-input>
      <q-input outlined
               v-model="salesexecutive.email"
               hint="email id"
               type="text"
               :rules="[ val => val && val.length > 0  || 'must  fill this field',
             val => val.length > 5 || 'Minimum length is 6']" >

        <template v-slot:append>
          <q-icon name="visibility_off"/>
        </template>
      </q-input>
    <q-input outlined
             v-model="salesexecutive.phone"
             hint="phone number"
             type="text"
             :rules="[ val => val && val.length > 0  || 'must  fill this field',
             val => val.length > 5 || 'Minimum length is 6']" >

      <template v-slot:append>
        <q-icon name="visibility_off"/>
      </template>
    </q-input>

    <q-btn color="positive" label="Submit" @click="saveSalesexecutive" icon="camera_enhance" />

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
  props: ['id'],
  setup (props) {
    const $q = useQuasar()
    const router = useRouter()

    const ID = ref(props.id)
    console.log(ID.value)

    const salesexecutive = computed(() => {
      if(ID.value == 0){
        return ({id:'' , name: '' })
      }else{
        return masterStore.SALES_EXECUTIVE[ID.value]
      }
    })

    let msg
    const saveSalesexecutive = function() {
      if( salesexecutive.value.name != ''){
        console.warn(salesexecutive.value);
        // let cus = _.omit(customer.value, ['area'])
        post('add', 'update', salesexecutive.value)
        if(ID.value == 0){
          msg = ' new user added successfully'
        }else{
          msg = 'user have updated successfully'
        }
        positivemsg(msg)
        router.push({
          name: 'ADMINSALESXECUTIVEPAGE'
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
      salesexecutive,
      saveSalesexecutive,
      positivemsg
    }
  }
}
</script>

