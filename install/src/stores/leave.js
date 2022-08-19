import { defineStore } from 'pinia'

export const useLeaveStore = defineStore('leave', {
  state: () => ({
      data: {},
  }),
  getters: {
    leaves(state){ return state.data }
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
