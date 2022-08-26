<template>
  <q-page padding className="flex column q-gutter-y-sm">
<!--    <q-input v-model.number="ID" label="Sales Executive ID" outlined />-->
    <q-input v-model="executive.name" label="Name" outlined/>
    <q-input v-model="executive.phone" label="Phone" outlined/>
    <q-input v-model="executive.email" label="Email" outlined/>
    <q-input v-model="executive.password" label="Password" outlined/>
    <q-select v-model="executive.areas" label="Areas" multiple use-chips stack-label outlined :options="areas"
              option-label="name" option-value="id" emit-value map-options/>
    <q-btn label="Update" @click="save" color="primary"/>
  </q-page>
</template>

<script >
import {post} from 'boot/axios'
import {useMasterStore} from "stores/master";
import {reactive, ref, watch, watchEffect} from "vue";
import {get, map} from 'lodash'
import {useQuasar} from "quasar";
import {useRouter} from "vue-router/dist/vue-router";

const masterStore = useMasterStore()
const executives = masterStore['SALES_EXECUTIVE']

// const ID = ref(100001)
export default {
  props: ['id'],
  setup(props) {
    const $q = useQuasar()
    const router = useRouter()


    const ID = ref(props.id)
    const AREA = ref(masterStore.AREA)
    const options = []
    // const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    const executive = reactive({
      id: '', name: '', password: '', email: '', phone: '', areas:[]
    })
    for( let n in AREA.value){
      options.push( { label: AREA.value[n].name, value: AREA.value[n].id })
    }
    watchEffect(()=>{
      // executive.value = Object.assign({}, get(executives, id), {areas: map(get(executives, [id, 'areas'], []), ({data}) => String(data))})
      if(ID.value == 0){
        // executive.id = executive.name = executive.password = executive.email = executive.phone = executive.areas =  ''
        executive.value = Object.assign({}, get(executives, id), {areas: map(get(executives, [id, 'areas'], []), ({data}) => String(data))})
      }else {


        // const executive = ref({}) //reactive(Object.assign({},get(executives,ID.value),{ areas:map(get(executives,[ID.value,'areas'],[]),({ data }) => String(data)) }))
        // watch(ID, (id) => {
        // executive.id = executive.name = executive.password = executive.email = executive.phone = executive.areas =  ''
        // executive.value = Object.assign({}, get(executives, id), {areas: map(get(executives, [id, 'areas'], []), ({data}) => String(data))})
        let aCustomer = masterStore.SALES_EXECUTIVE[ID.value]
        console.log(aCustomer)
        executive.id = ID.value
        executive.name = aCustomer.name
        executive.password = aCustomer.password
        executive.email = aCustomer.email
        executive.phone = aCustomer.phone
        executive.areas = _.map(aCustomer.areas,area=>String(area.data))
      }
      // executive.value = Object.assign({}, get(executives, id), {areas: map(get(executives, [id, 'areas'], []), ({data}) => String(data))})

    })
    const areas = ref(Object.values(masterStore['AREA']))
    // const isValidEmail = function (){
    //   return emailPattern.test(obj.email) || 'Invalid email';
    // }
    let msg
    let fun
    const save = function () {
      // if ((executive.name != '') && (executive.password != '') && (executive.phone != '') && (emailPattern.test(executive.email))
      // ) {
        if (ID.value > 0) {
          post('master', 'update',{id: ID.value, ... executive.value})
          msg = 'updated successfully'
        } else {
          post('add', 'store',{id: ID.value, ... executive.value})
          msg = 'Added a new SE successfully'
        }
        positivemsg(msg)
        router.push({
          name: 'ADMINSALESXECUTIVEPAGE'
        })



      }

      const positivemsg = function (msg) {
        $q.notify({
          type: 'positive',
          message: msg,
          icon: 'cloud_done',
          position: 'top-right',
          timeout: 2000
        })
      }



    return {
      save,
      executive,
      areas,
      options,
      AREA,


      positivemsg

    }


  }


}

// function update() {
//   post('master', 'update', {id: ID.value, ...executive.value})
// }
</script>
