import { defineStore } from 'pinia'
import _ from 'lodash'

export const useMasterStore = defineStore('master', {
  state: () => {
    const masters = _(MASTERS).mapKeys().mapValues(() => ({})).value()
    return {
      masters: {},
      props: {},
      prop_set: {},
      ...masters
    }
  },
  getters: {
    properties(state){ return _.flatMap(state.props) }
  },
  actions: {
    data(Data){ _.forEach(Data,(data,key) => this[key] = data) },
    property(Data){ _.forEach(Data,(data,key) => this.props[key] = data) },
    master(Data){ _.forEach(Data,(data,key) => this.masters[key] = data) },
    property_set(Data){ _.forEach(Data,(data,key) => this.prop_set[key] = data) },
    recursive(Data){
      _.forEach(Data,(records,master) => _.forEach(records,(name,id) => {
        let master_id = _.get(_.find(this.masters,(Ary) => Ary[1] === master),0), prop_set = _.get(this.prop_set,master_id,null);
        if(!_.has(this[master],id)) this[master][id] = Object.assign({ id,name },_.cloneDeep(prop_set))
        if(this[master][id].name !== name) this[master][id].name = name;
      }))
    }
  }
})
