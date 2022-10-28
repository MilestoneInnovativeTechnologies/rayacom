import { defineStore } from 'pinia'
import {useMasterStore} from "app/milestone/rayacom/install/src/stores/master";

export const useOfferStore = defineStore('offer', {
  state: () => ({
      data: {},
  }),
  getters: {
    offers(state){
      const masterStore = useMasterStore(), items = masterStore['ITEM'];
      return _.mapValues(state.data,offer => Object.assign({},offer,{ item:_.get(items,offer.item) }))
    }
  },
  actions: {
    store(dArray){
      _.forEach(dArray,(data) => {
        let id = data.id;
        if(!_.has(this.data,id)) this.data[id] = {}
        let ds = String(data.customers).trim();
        if(!ds) data.customers = []
        else data.customers = ds.slice(1,ds.length-1).split(',')
        this.data[id] = data;
      })
    }
  }
})
