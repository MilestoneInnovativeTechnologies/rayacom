import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    nK: {

    }
  }),
  getters: {
    doubleCount(state){ return state.counter * 2 },
    quadCount(state){ return this.doubleCount * 2 },
    nks(state){ return state.nK }
  },
  actions: {
    increment() { this.counter++ },
    decrement() { this.counter-- },
    NayaKey(){
      const nk = "NK" + new Date().getTime()
      this.nK[nk] = new Date().getTime()
    },
    nkVC(){
      const time = new Date().getTime()
      Object.keys(this.nK).forEach(k => this.nK[k] = time + parseInt(Math.random() * 10000))
    },
  },
});
