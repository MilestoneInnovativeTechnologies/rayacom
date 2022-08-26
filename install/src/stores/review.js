import { defineStore } from 'pinia'
import {useMasterStore} from "stores/master";
import {useOrderStore} from "stores/order";

export const useReviewStore = defineStore('review', {
  state: () => ({
      data: {},
  }),
  getters: {
    reviews(state){
      const masterStore = useMasterStore(), customers = masterStore['CUSTOMER'], items = masterStore['ITEM'], executives = masterStore['SALES_EXECUTIVE'];
      const orderStore = useOrderStore(), orders = _(orderStore['all']).mapKeys('id').mapValues(order => ({ id:order.id,name:order.id + ' - ' + order.date })).value()
      const rItemMItem = { Product:items,Order:orders,SalesExecutive:executives }
      return _.mapValues(state.data,review => Object.assign({},review,{ customer:_.get(customers,review.customer),item:_.get(rItemMItem[review['type']],review.typeid) }))
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
