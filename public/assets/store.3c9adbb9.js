import{d as m,b as u}from"./index.37d362ba.js";import{u as c}from"./master.140a0c7a.js";import"./lodash.e6c87188.js";const d=m("order",{state:()=>({data:{}}),getters:{all(a){const t=c(),e=t.ITEM,r=t.CUSTOMER;return _(a.data).map(function(s){let o=_(s.items).map(function(n){return Object.assign({},n,{item:e[n.item]})}).value(),i=r[s.customer];return Object.assign({},s,{items:o,customer:i})}).value()}},actions:{store(a){_.forEach(a,t=>{let e=t.id;_.has(this.data,e)||(this.data[e]={}),this.data[e]=t})}}});var S=u(async a=>{AssetWorker.onmessage=function(t){const{store:e,action:r,payload:s}=t.data,o=c(),i=d();switch(e){case"master":o[r](s);break;case"order":i[r](s);break}}});export{S as default};
