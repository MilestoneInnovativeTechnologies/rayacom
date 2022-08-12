<template>

  <q-page padding class="flex flex-center column q-gutter-y-sm">
    <q-input outlined label="Item Name" v-model="item.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Item Name']" >
      <template v-slot:append>
        <q-icon name="invert_colors" color="brand"  />
      </template>
    </q-input>

    <q-btn color="positive" label="Submit" @click="saveItem" icon="camera_enhance" />
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
        return masterStore.ITEM[ID.value]
      }
      })

    let msg
    const saveItem = function() {
      if( item.value.name != ''){
        console.warn(item.value);
        // let cus = _.omit(customer.value, ['area'])
        post('item', 'update', item.value)
        if(ID.value == 0){
          msg = 'Your have a new item added successfully'
        }else{
          msg = 'Your Item have updated successfully'
        }
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

