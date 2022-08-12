<template>
  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Area" v-model="item.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Area']" >
    </q-input>
    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
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

    const item = computed(() => {
      if(ID.value == 0){
        return ({ id: '', name: '' })
      }else{
        return masterStore.AREA[ID.value]
      }
      })

    let msg
    const save = function() {
      if( item.value.name != ''){
        console.warn(item.value);
        if(ID.value == 0){
          post('area', 'store', item.value)
          msg = 'Your have added a new item successfully'
        }else{
          post('area', 'update', item.value)
          msg = 'Your Item have updated successfully'
        }
        positivemsg(msg)
        router.push({
          name: 'ADMINAREA'
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
      save,
      positivemsg
    }
  }
}
</script>

