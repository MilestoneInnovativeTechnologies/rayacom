<template>
  <q-page padding class="flex flex-center column q-gutter-y-lg">

    <q-list bordered separator>
      <q-item clickable class="text-subtitle2 bg-deep-orange-10 text-white">
        <q-item-section class="text-white" side left>#</q-item-section>
        <q-item-section class="col-6 gt-sm">Item</q-item-section>
        <q-item-section class="col-2 gt-sm">Quantity</q-item-section>
        <q-item-section class="text-white" side>Remove</q-item-section>
      </q-item>
      <q-item clickable v-for="(i, index) in myproducts" :key="i.id">
        <q-item-section side left>{{index+1}}</q-item-section>
         <q-item-section class="col-6 gt-sm">{{ i.itemname }}</q-item-section>
        <q-item-section class="col-2 gt-sm">
          <q-input
            outlined
            maxlength="4"
            v-model.number="myproducts[index].quantity"
            mask="#"
            fill-mask="0"
            reverse-fill-mask
            :rules="[
                    val => (val !== null && val !== '' && parseInt(val)!=NaN)|| 'Please type a number',
                    val => val > 0  || 'Please type a real number'
                    ]"
          />
        </q-item-section>

        <q-item-section side><q-icon name="cancel" @click="confirmBox(index)"  class="cursor-pointer" />
        </q-item-section>
      </q-item>
      <q-item clickable class="text-subtitle2">
        <q-item-section>Total Items:</q-item-section>
        <q-item-section>{{ myproducts.length }}</q-item-section>
      </q-item>
      <q-item clickable class="text-subtitle2">
        <q-item-section>Notes</q-item-section>
        <q-item-section><q-input outlined v-model="notes" type="text" maxlength="500" autogrow /></q-item-section>
      </q-item>
    </q-list>
<!--  </div>-->

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete" color="primary" text-color="white" />
        <span class="q-ml-sm">Are you sure you want to delete?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Delete" color="primary" v-close-popup   @click="removeItem()"/>
      </q-card-actions>
    </q-card>
  </q-dialog>

<!--    <div class="q-mt-sm">-->
<!--      {{myproducts}}-->
<!--    </div>-->


    <q-btn color="positive" label="Submit" type="submit" icon="camera_enhance"
            @click="confirmOrder()" v-if="myproducts.length">
    </q-btn>

  </q-page>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import {date, useQuasar} from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore} from 'stores/order'
import {post} from "boot/axios";
const orderStore = useOrderStore()

export default {
  setup (props) {
    const $q = useQuasar()
    const $route = useRoute()
    const router = useRouter()
    const myproducts = ref(JSON.parse($route.params.myproducts))
    const customer = 10001
    const notes = ref('')

    const removeItem = function(){
      var index = myindex.value;
      myproducts.value.splice(index, 1)
      confirm.value = false
    }

    const confirm = ref(false)
    const myindex = ref(null)

    const confirmBox = function(index){
      confirm.value = true
      myindex.value = index
    }

    let timeStamp
    let formattedString

    const confirmOrder = function (){
      timeStamp = Date.now()
      formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
      var check = myproducts.value.some(function(field) {
        return field.quantity === 0;
      });
      if (!check) {
        post('order','store',{ customer:customer, date:formattedString, narration:notes.value, items:myproducts.value })
          // .then(console.log)
        myproducts.length = 0
        positivemsg('Order saved Successfully')
        router.push({
          name: 'DASHBOARD'
        })
      }
    }

    const positivemsg = function (msg){
      $q.notify({
        type: 'positive',
        message: msg,
        icon: 'cloud_done',
        position:'top-right',
        timeout:1000
      })
    }

    return{
      myproducts,
      removeItem,
      confirm,
      confirmBox,
      confirmOrder,
      notes,
      positivemsg
    }
  }

}
</script>




<!--https://www.cloudhadoop.com/vuejs-remove-object-array-example/-->
<!--https://www.smashingmagazine.com/2021/10/introduction-quasar-framework-cross-platform-applications/-->


