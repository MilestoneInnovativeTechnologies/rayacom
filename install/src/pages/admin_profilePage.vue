<template>

  <q-page padding class="flex column q-gutter-y-sm">
    <q-input outlined label="Name and Surname" v-model="customer.name" type="text"

             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Name']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
    <q-input outlined v-model="customer.password" type="password" label="Password"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
      <template v-slot:append>
        <q-icon name="visibility_off" />
      </template>
    </q-input>
    <q-input outlined v-model="customer.email" type="email" label="Email"
             lazy-rules
             :rules="[val => !!val || 'Please type Email', isValidEmail ]">
      <template v-slot:append>
        <q-icon name="email" />
      </template>
    </q-input>

    <q-btn color="positive" label="Submit" @click="updateMyself" icon="camera_enhance" />


    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="card">
        <q-card class="my-card" style="width: 400px">
          <q-list bordered class="rounded-borders" style="min-width: 350px">
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="fact_check" color="brand" text-color="white" />
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label lines="1">{{ specificDate }}</q-item-label>
                <q-item-label>{{ specificCustomer }}</q-item-label>
                <q-item-label caption>
                  <span class="text-weight-bold">{{ specificId }}</span>
                </q-item-label>
              </q-item-section>
              <q-item-section side >
                <q-badge color="blue" v-if="specificStatus === 'New'" >{{ specificStatus }}</q-badge>
                <q-badge color="secondary" v-else-if ="specificStatus === 'Viewed'" >{{ specificStatus }}</q-badge>
                <q-badge color="accent" v-else-if="specificStatus === 'Accepted'" >{{ specificStatus }}</q-badge>
                <q-badge color="info" v-else-if="specificStatus === 'Packed'" >{{ specificStatus }}</q-badge>
                <q-badge color="blue-grey" v-else-if="model === 'Dispatched'" >{{ specificStatus }}</q-badge>
                <q-badge color="positive" v-else-if="specificStatus === 'Delivered'" >{{ specificStatus }}</q-badge>
                <q-badge color="negative" v-else-if="specificStatus === 'Cancelled'" >{{ specificStatus }}</q-badge>
                <q-badge color="primary" v-else>Unknown</q-badge>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section top class="col-1 gt-sm">
                <q-item-label class="q-mt-sm text-weight-medium">#</q-item-label>
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label class="q-mt-sm text-weight-medium">Item</q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm text-weight-medium text-center">Quantity</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item v-for="(j, ind) in specificItems">
              <q-item-section top class="col-1 gt-sm">
                <q-item-label class="q-mt-sm">{{ ind + 1 }}</q-item-label>
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label class="q-mt-sm">{{ j['item']['name'] }}</q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm flex-center text-center">{{ j.quantity }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item>
              <q-item-section top class="col-1 gt-sm">
                <q-item-label class="q-mt-sm text-weight-medium"></q-item-label>
              </q-item-section>
              <q-item-section top class="col-7 gt-sm">
                <q-item-label class="q-mt-sm text-weight-medium">Total Items</q-item-label>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="q-mt-sm text-weight-medium text-center">{{ specificItems.length }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="negative" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
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
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    const ID = ref(AUTH_DATA)
    const customer = computed(() => masterStore.ADMIN[ID.value])

    const isValidEmail = function (){
      return emailPattern.test(customer.value.email) || 'Invalid email';
    }

    const updateMyself = function() {
      if( (customer.value.name != '') && (customer.value.password != '')
        && (emailPattern.test(customer.value.email)) ){
        console.warn(customer.value);
        let cus = _.omit(customer.value, ['area'])
        post('master', 'update', cus)
        positivemsg('Your profile have updated succesfully')
        router.push({
          name: 'ADMINPROFILE'
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
      customer,
      isValidEmail,
      updateMyself,
      positivemsg
    }
  }
}
</script>

