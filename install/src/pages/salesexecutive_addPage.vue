<template>


  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Full Name" v-model="salesexecutive.name"
             type="text"
             hint="Name"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type  user Name']" >
      <template v-slot:append>
        <q-icon name="invert_colors" color="brand"  />
      </template>

    </q-input>
    <q-select class=""  style="width: 220px" outlined v-model="model" :options="options" label="Area"
              hint="area"></q-select>



        <q-input outlined label="Password"
                 v-model="salesexecutive.password"
                 hint="Password"
                 type="password"
                 :rules="[ val => val && val.length > 0  || 'must  fill this field',
             val => val.length > 5 || 'Minimum length is 6']" >

          <template v-slot:append>
            <q-icon name="visibility_off" color="brand"/>
          </template>
        </q-input>
      <q-input outlined label="email id"
               v-model="salesexecutive.email"
               hint="email id"
               type="text" clearable
               :rules="[ val => val && val.length > 0  || 'please type email',
             val => val.length > 5 || 'Minimum length is 6']"  >

        <template v-slot:append>
          <q-icon name="email" color="brand"/>
        </template>
      </q-input>
    <q-input outlined label="phone number"
             v-model="salesexecutive.phone"
             hint="phone number"
             type="text"
             :rules="[ val => val && val.length > 0  || 'please type phone number',
             val => val.length > 5 || 'Minimum length is 6']" >

      <template v-slot:append>
        <q-icon name="phone" color="brand"/>
      </template>
    </q-input>


    <q-btn color="positive" label="Submit" @click="saveSalesexecutive" icon="camera_enhance" />

  </q-page>

</template>

<script>
import { post } from 'boot/axios'
import { useMasterStore } from 'stores/master'
import {computed, reactive, ref, watchEffect} from "vue";
import {useQuasar} from "quasar";
import { useRouter } from 'vue-router'
const masterStore = useMasterStore()


export default {
  props: ['id'],
  setup (props) {
    const $q = useQuasar()
    const router = useRouter()

    const ID = ref(props.id)
    // console.log(ID.value)
    const AREA = ref(masterStore.AREA)
    const options = []
    for( let n in AREA.value){
      options.push( { label: AREA.value[n].name, value: AREA.value[n].id })
    }

    const obj = reactive({
      id: '', name: '', password: '', email: '', phone: '', area: ''
    })



    watchEffect(()=>{
      if(ID.value == 0){
        obj.id = obj.name = obj.password = obj.email = obj.phone = obj.area =  ''
      }else{
        let Sales = masterStore.SALES_EXECUTIVE[ID.value]
        obj.id = ID.value
        obj.name = Sales.name
        obj.password = Sales.password
        obj.email = Sales.email
        obj.phone = Sales.phone
        obj.area = Sales.area

      }
    })

    let msg
    const save = function() { alert(obj.name)
      if(ID.value >0){
        // console.warn(obj);
        let newObj = _.omit(obj, ['areas'])
        if(ID.value == 0){
          post('customer', 'store', newObj)
          msg = 'Your have added a new item successfully'
        }else{
          post('customer', 'update', newObj)
          msg = 'Your Item have updated successfully'
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
      obj,
      save,
      positivemsg,
      options,


    }
  }
}
</script>

