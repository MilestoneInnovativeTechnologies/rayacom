import { defineStore } from 'pinia'
import { useMasterStore } from "stores/master";

export const useOrderStore = defineStore('order', {
  state: () => ({
      data: {},
  }),
  getters: {
    all(state){
      const masterStore = useMasterStore(), masterItems = masterStore['ITEM'], masterCustomers = masterStore['CUSTOMER']
      return _(state.data).map(function(order){
        let items = _(order.items).map(function(item){
          return Object.assign({},item,{ item:masterItems[item.item] })
        }).value(), customer = masterCustomers[order.customer]
        return Object.assign({},order,{
          items,customer
        })
      }).value()
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
