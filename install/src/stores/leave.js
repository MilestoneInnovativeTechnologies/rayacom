import { defineStore } from 'pinia'
import {useMasterStore} from "app/milestone/rayacom/install/src/stores/master";

export const useLeaveStore = defineStore('leave', {
  state: () => ({
      data: {},
  }),
  getters: {
    leaves(state){
      const masterStore = useMasterStore(), executives = masterStore['SALES_EXECUTIVE'];
      return _.mapValues(state.data,leave => Object.assign({},leave,{ executive:_.get(executives,leave.executive) }))
    }
  },
  actions: {
    store(dArray){
      _.forEach(dArray,(data) => {
        let id = data.id;
        if(!_.has(this.data,id)) this.data[id] = {}
        this.data[id] = data;
      })
    }
  }
})
