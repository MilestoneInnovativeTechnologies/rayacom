<template>
  <q-page padding class="flex column q-gutter-y-sm">
    <q-input outlined label="Name and Surname" v-model="obj.name" type="text"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Name']" >
      <template v-slot:append>
        <q-icon name="account_box" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.password" type="password" label="Password"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Password',
                        val => val.length > 5 || 'Minimum length is 6']" >
      <template v-slot:append>
        <q-icon name="visibility_off" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.email" type="email" label="Email"
             lazy-rules
             :rules="[val => !!val || 'Please type Email', isValidEmail ]">
      <template v-slot:append>
        <q-icon name="email" />
      </template>
    </q-input>
    <q-input outlined v-model="obj.phone" type="tel" label="Contact number"
             mask="(###) ### - ######"
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Contact number']" >
      <template v-slot:append>
        <q-icon name="settings_phone" />
      </template>
    </q-input>
<!--    <q-select outlined v-model="obj.areas" :options="options" label="Area">-->
<!--          </q-select>-->
<!--    <br>-->
<!--    <div class="q-pa-md " style="max-width: 300px">-->
<!--    <div class="q-gutter-md ">-->
<!--      <q-badge color="secondary" multi-line>-->
<!--        Model: "{{ model }}"-->
<!--      </q-badge>-->

<!--      <q-select class="full-width"-->
<!--        filled-->
<!--        v-model="model"-->
<!--        :options="options"-->
<!--        label="Area"-->
<!--        multiple-->
<!--        emit-value-->
<!--        map-options-->
<!--      >-->
<!--        <template v-slot:option="{ itemProps, opt, selected, toggleOption }">-->
<!--          <q-item v-bind="itemProps">-->
<!--            <q-item-section>-->
<!--              <q-item-label v-html="opt.label" />-->
<!--            </q-item-section>-->
<!--            <q-item-section side>-->
<!--              <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </template>-->
<!--      </q-select>-->
<!--    </div>-->
<!--  </div>-->
    <q-select v-model="obj.areas" label="Areas" multiple use-chips stack-label outlined :options="options" option-label="name" option-value="id" emit-value map-options />

    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
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
    const AREA = ref(masterStore.AREA)
    // const options = []
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

    // for (let n in AREA.value) {
    //   options.push({label: AREA.value[n].name.value, value: AREA.value[n].id.value})
    // }
    const options = ref(Object.values(masterStore['AREA']))
    const obj = reactive({
      id: '', name: '', password: '', email: '', phone: '', areas: ''
    })

    watchEffect(() => {
      if (ID.value == 0) {
        obj.id = obj.name = obj.password = obj.email = obj.phone = obj.areas = ''
      }
      else
        {
          let aCustomer = masterStore.SALES_EXECUTIVE[ID.value]
          obj.id = ID.value
          obj.name = aCustomer.name
          obj.password = aCustomer.password
          obj.email = aCustomer.email
          obj.phone = aCustomer.phone
          obj.areas = aCustomer.areas.value
        }
      })
      console.log(obj)
      const isValidEmail = function () {
        return emailPattern.test(obj.email) || 'Invalid email';
      }

      let msg
      let fun
      const save = function () {
        if ((obj.name != '') && (obj.password != '') && (obj.phone != '') && (emailPattern.test(obj.email))
          && (obj.areas.value != '')) {
          console.warn(obj);
          let newObj = _.omit(obj, ['areas'])
          newObj.areas = obj.areas.value
          newObj.areas = [1, 2, 3, 4]
          console.log(obj.areas.value)
          // console.log('-------------------------------')
          if (ID.value > 0) {
            post('master', 'update', ...newObj.areas )
            msg = 'Your Item have updated successfully'
          } else {
            post('add', 'store', ...newObj.areas )
            msg = 'Your have added a new item successfully'
          }
          // function update(){
          //   post('master','update',{id:ID.value,...obj.areas.value})
          // }
          positivemsg(msg)
          router.push({
            name: 'ADMINSALESXECUTIVEPAGE'
          })
        }
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
        obj,
        save,
        positivemsg,
        isValidEmail,
        options,


      }
    }




}
</script>

