<template>

  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Item Name" v-model="item.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Item Name']" >
    </q-input>
    <q-btn color="positive" label="Submit" @click="saveItem" icon="camera_enhance" />
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

    const item = reactive({
      id: '', name: ''
    })

    watchEffect(()=>{
      if(ID.value == 0){
        item.id = item.name = ''
      }else{
        let aITEM = masterStore.ITEM[ID.value]
        item.id = ID.value
        item.name = aITEM.name
      }
    })

    let msg
    let fun
    const saveItem = function() {
      if( item.name != ''){
        // console.warn(item);
        if(ID.value == 0){
          fun = 'store'
          msg = 'Your have added a new item successfully'
        }else{
          fun = 'update'
          msg = 'Your Item have updated successfully'
        }
        post('item', fun, item)
        positivemsg(msg)
        router.push({
          name: 'ADMINITEMS'
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
      item,
      saveItem,
      positivemsg
    }
  }
}
</script>

