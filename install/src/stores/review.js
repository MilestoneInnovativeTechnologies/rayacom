import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', {
  state: () => ({
      data: {},
  }),
  getters: {
    reviews(state){ return state.data }
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
