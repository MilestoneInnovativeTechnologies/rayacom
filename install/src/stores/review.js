import { defineStore } from 'pinia'
import {useMasterStore} from "stores/master";

export const useReviewStore = defineStore('review', {
  state: () => ({
      data: {},
  }),
  getters: {
    reviews(state){
      const masterStore = useMasterStore(), customers = masterStore['CUSTOMER'];
      return _.mapValues(state.data,review => Object.assign({},review,{ customer:_.get(customers,review.customer) }))
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
