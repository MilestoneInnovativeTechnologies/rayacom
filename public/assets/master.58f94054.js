import{d as p}from"./index.8d7e61fd.js";import{_ as e}from"./lodash.1b69ab06.js";const v=p("master",{state:()=>{const r=e(MASTERS).mapKeys().mapValues(()=>({})).value();return{masters:{},props:{},prop_set:{},...r}},getters:{properties(r){return e.flatMap(r.props)}},actions:{data(r){e.forEach(r,(h,s)=>this[s]=h)},property(r){e.forEach(r,(h,s)=>this.props[s]=h)},master(r){e.forEach(r,(h,s)=>this.masters[s]=h)},property_set(r){e.forEach(r,(h,s)=>this.prop_set[s]=h)},recursive(r){e.forEach(r,(h,s)=>e.forEach(h,(_,t)=>{if(!e.has(this[s],t)){let i=e.get(this.masters,[s,"id"]),a=e.get(this.prop_set,i,null);this[s][t]=Object.assign({id:t,name:_.name},e.cloneDeep(a))}e.forEach(_,(i,a)=>{if(e.isObject(i)){let n=this[s][t][a];if(e.isArray(n)){let m=i._remove,o=e.filter(n,({data:l})=>!e.includes(m,e.toNumber(l))),f=this.masters[s].id,u=e.get(e.find(this.props[f],["name",a]),"value_master"),c=e.findKey(this.masters,l=>l.id==u);u?o.push(...e.map(i._add,l=>({master:u,data:l,value:e.get(this,[c,l,"name"],"")}))):o.push(...e.map(i._add,l=>({master:null,data:null,value:l}))),this[s][t][a].splice(0,this[s][t][a].length),this[s][t][a].push(...o)}else e.isBoolean(n)||(e.forEach(i._remove,m=>{this[s][t][a].value=null,n.master&&(this[s][t][a].data=null)}),e.forEach(i._add,m=>{if(n.master){let o=e.findKey(this.masters,({id:u})=>u==n.master),f=e.get(this[o],[m,"name"]);this[s][t][a].data=m,this[s][t][a].value=f}else this[s][t][a].value=m}))}else this[s][t][a]!==i&&(this[s][t][a]=i)})}))}}});export{v as u};
