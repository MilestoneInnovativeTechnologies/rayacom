<template>
  <q-page padding class="flex column q-gutter-y-sm">

    <q-input outlined v-model="obj.start_date" mask="date" :rules="['date']" label="Start Date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="obj.start_date" :options="optionsFn">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input outlined v-model="obj.end_date" mask="date" :rules="['date']" label="End Date">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="obj.end_date" :options="optionsFn">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input outlined label="Description" v-model="obj.description" type="text"
             maxlength="500" autogrow counter
             lazy-rules
             :rules="[ val => val && val.length > 0 || 'Please type Description']" >
      <template v-slot:append>
        <q-icon name="description" />
      </template>
    </q-input>
    <q-btn color="positive" label="Submit" @click="save" icon="camera_enhance" />
  </q-page>

</template>


<script setup>
import { post } from 'boot/axios'
import { reactive, ref } from "vue";
import { date, useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
let timestamp = Date.now()
let today = date.formatDate(timestamp, 'YYYY/MM/DD')

function optionsFn(date){
  return date >= today
}

const obj = reactive({
  id: '', start_date: today, end_date: today, description: '',
})
function save(){
  if((obj.start_date != '') && (obj.end_date != '') && (obj.description != '')){
    post('leave','store', obj)
    positivemsg('Your have added a leave successfully')
    router.push({
      name: 'SALESEXECUTIVELEAVES'
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
</script>
