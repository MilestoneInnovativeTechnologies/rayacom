import{d as f}from"./index.f6b9fb0c.js";import{_ as r}from"./lodash.e6c87188.js";const m=f("master",{state:()=>{const t=r(MASTERS).mapKeys().mapValues(()=>({})).value();return{masters:{},props:{},prop_set:{},...t}},getters:{properties(t){return r.flatMap(t.props)}},actions:{data(t){r.forEach(t,(e,s)=>this[s]=e)},property(t){r.forEach(t,(e,s)=>this.props[s]=e)},master(t){r.forEach(t,(e,s)=>this.masters[s]=e)},property_set(t){r.forEach(t,(e,s)=>this.prop_set[s]=e)},recursive(t){r.forEach(t,(e,s)=>r.forEach(e,(p,o)=>{let a=r.get(r.find(this.masters,i=>i[1]===s),0),h=r.get(this.prop_set,a,null);r.has(this[s],o)||(this[s][o]=Object.assign({id:o,name:p},r.cloneDeep(h))),this[s][o].name!==p&&(this[s][o].name=p)}))}}});export{m as u};