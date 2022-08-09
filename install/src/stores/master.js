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
    properties(state){ return _.flatMap(state.props) },
  },
  actions: {
    data(Data){ _.forEach(Data,(data,key) => this[key] = data) },
    property(Data){ _.forEach(Data,(data,key) => this.props[key] = data) },
    master(Data){ _.forEach(Data,(data,key) => this.masters[key] = data) },
    property_set(Data){ _.forEach(Data,(data,key) => this.prop_set[key] = data) },
    recursive(Data){
      _.forEach(Data,(records,master) => _.forEach(records,(value,id) => {
        if(!_.has(this[master],id)){
          let master_id = _.get(_.find(this.masters,(Ary) => Ary[1] === master),0), prop_set = _.get(this.prop_set,master_id,null);
          this[master][id] = Object.assign({ id,name:value.name },_.cloneDeep(prop_set))
        }
        _.forEach(value,(val,prop) => {
          if(_.isObject(val)) {
            let master_current_val = this[master][id][prop];
            if(_.isArray(master_current_val)){
              let _removes = val['_remove'], n_master_current_val = _.filter(master_current_val,({ data }) => !_.includes(_removes,_.toNumber(data)))
              let master_id = this.masters[master]['id'], value_master = _.get(_.find(this.props[master_id],['name',prop]),'value_master'),
                value_master_name = _.findKey(this.masters,mstr => mstr.id == value_master);
              if(value_master) {
                n_master_current_val.push(..._.map(val['_add'],dt => ({ master:value_master,data:dt,value:_.get(this,[value_master_name,dt,'name'],'') })))
              } else {
                n_master_current_val.push(..._.map(val['_add'],dt => ({ master:null,data:null,value:dt })))
              }
              this[master][id][prop].splice(0,this[master][id][prop].length);
              this[master][id][prop].push(...n_master_current_val)
            } else {
              if(_.isBoolean(master_current_val)){

              } else {
                _.forEach(val['_remove'],dt => {
                  this[master][id][prop]['value'] = null;
                  if(master_current_val.master)
                    this[master][id][prop]['data'] = null;
                })
                _.forEach(val['_add'],dt => {
                  if(master_current_val.master) {
                    let prop_master_name = _.findKey(this.masters,({ id }) => id == master_current_val.master)
                    let vl = _.get(this[prop_master_name],[dt,'name']);
                    this[master][id][prop]['data'] = dt; this[master][id][prop]['value'] = vl;
                  } else {
                    this[master][id][prop]['value'] = dt;
                  }
                })
              }
            }
          } else {
            if(this[master][id][prop] !== val) this[master][id][prop] = val;
          }
        })
      }))
    }
  }
})
