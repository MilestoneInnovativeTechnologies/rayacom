<template>

  <div class="q-pa-md q-gutter-md full-width">

    <q-list bordered separator>
      <q-item clickable class="text-subtitle2 bg-deep-orange-10 text-white">
        <q-item-section>#</q-item-section>
        <q-item-section>Item</q-item-section>
        <q-item-section>Quantity</q-item-section>
        <q-item-section>Remove</q-item-section>
      </q-item>


      <q-item clickable v-for="(i, index) in myproducts" :key="i.id">
        <q-item-section>{{index + 1}}</q-item-section>
         <q-item-section>{{ i.item }}</q-item-section>
        <q-item-section>
          <q-input
            outlined
            style="max-width: 120px"
            v-model.number="myproducts[index].qty"
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
        <q-item-section> <q-input
          v-model="text"
          type="textarea"
        /></q-item-section>
      </q-item>
    </q-list>
  </div>

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

    <div class="q-mt-sm">
      {{myproducts}}
    </div>

  <div class="q-pa-md q-gutter-sm" v-if="myproducts.length">
    <q-btn unelevated rounded color="positive" label="Submit"  class="full-width"
           type="submit" icon="camera_enhance" @click="confirmOrder()">
    </q-btn>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup (props) {
    const $route = useRoute()
    const myproducts= ref(JSON.parse($route.params.myproducts))

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
    const confirmOrder = function (){
      router.push({
        name: 'SUMMARY', params: { myproducts : JSON.stringify( myproducts.value) }
      })
    }

    return{
      myproducts,
      removeItem,
      confirm,
      confirmBox,
      confirmOrder
    }
  }

}
</script>




<!--https://www.cloudhadoop.com/vuejs-remove-object-array-example/-->
<!--https://www.smashingmagazine.com/2021/10/introduction-quasar-framework-cross-platform-applications/-->


