<template>
  <q-page padding class="flex flex-center column q-gutter-y-xl">

    <q-list bordered>
      <q-item clickable class="text-subtitle2 bg-deep-orange-10 text-white">
        <q-item-section class="text-white" avatar><q-item-label lines="1">#</q-item-label></q-item-section>
        <q-item-section><q-item-label lines="1">Item</q-item-label></q-item-section>
<!--        <q-item-section class="col-3 gt-sm">-->
        <q-item-section>
          <q-item-label lines="1">Quantity</q-item-label>
        </q-item-section>
        <q-item-section class="text-white" side></q-item-section>
      </q-item>
      <q-item clickable v-for="(i, index) in myproducts" :key="i.id">
        <q-item-section class="text-black" avatar>
          <q-item-label>{{index+1}}</q-item-label>
        </q-item-section>
         <q-item-section>
           <q-item-label lines="1">{{ i.itemname }}</q-item-label>
           Buy:{{i.min_qty}} , Get:{{i.offer_qty}}

           </q-item-section>
        <q-item-section side top>
          <q-input
            outlined
            dense
            maxlength="4"
            style="max-width: 60px"
            v-model.number="myproducts[index].quantity"
            text-align: right
            mask="#"
            fill-mask="0"
            reverse-fill-mask
            :rules="[
                    val => (val !== null && val !== '' && parseInt(val)!=NaN)|| 'Please type a number',
                    val => val > 0  || 'Please type a real number'
                    ]"
          />
          <div>
            <q-badge color="black">FOC: {{((myproducts[index].quantity/i.min_qty)*i.offer_qty).toFixed(0)}}</q-badge>
          </div>
        </q-item-section>




        <q-item-section avatar side top>
          <q-icon name="cancel" @click="confirmBox(index)"  class="cursor-pointer"  />
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable class="text-subtitle2">
        <q-item-section avatar>&nbsp;</q-item-section>
        <q-item-section>Free Quantity:</q-item-section>
        <q-item-section>
          <q-item-label>{{offerqty}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable class="text-subtitle2">
        <q-item-section avatar>&nbsp;</q-item-section>
        <q-item-section>Total Items :</q-item-section>
        <q-item-section>
          <q-item-label>{{ myproducts.length }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable class="text-subtitle2">
        <q-item-section>Notes</q-item-section>
        <q-item-section><q-input outlined v-model="notes" type="text" maxlength="500" autogrow counter /></q-item-section>
      </q-item>
    </q-list>

    <q-btn color="positive" label="Save" type="submit" icon="camera_enhance"
           @click="confirmOrder()" v-if="myproducts.length">
    </q-btn>


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


  </q-page>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import { date, useQuasar} from 'quasar'
import { useOfferStore } from 'stores/offers'
const offerStore = useOfferStore()
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore} from 'stores/order'
import { post } from "boot/axios";
const orderStore = useOrderStore()

export default {
  // setup (props) {
  setup () {
    const $q = useQuasar()
    const $route = useRoute()
    const router = useRouter()

    console.log(history.state.products)
    // const myproducts = ref(JSON.parse($route.params.myproducts))
    const myproducts = ref(JSON.parse(history.state.products))
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
    const onchnage = computed(()=>{

    })

    let timeStamp
    let formattedString
    console.log(myproducts.value)

    const confirmOrder = function (){
      timeStamp = Date.now()
      formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
      var check = myproducts.value.some(function(field) {
        return field.quantity === 0;
      });
      if (!check) {
        post('order','store',{ date:formattedString, narration:notes.value, items:myproducts.value})
          // .then(console.log)
        myproducts.length = 0
        positivemsg('Your Order have saved successfully')
        router.push({
          name: 'DASHBOARD'
        })
      }
    }

    const offerqty = computed(()=>{
      let sum = 0
      myproducts.value.map(item => sum+= item['offer_qty'])

      return sum
      })


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
      // myoffer,
      removeItem,
      confirm,
      confirmBox,
      confirmOrder,
      // totaloffer,
      notes,
      positivemsg,
      offerqty
      // MYOFFERS,

    }
  }

}
</script>




<!--https://www.cloudhadoop.com/vuejs-remove-object-array-example/-->
<!--https://www.smashingmagazine.com/2021/10/introduction-quasar-framework-cross-platform-applications/-->


