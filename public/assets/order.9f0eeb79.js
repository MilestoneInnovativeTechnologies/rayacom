import{d as u}from"./index.101a966c.js";import{u as n}from"./master.027e8a10.js";const f=u("order",{state:()=>({data:{}}),getters:{all(s){const t=n(),e=t.ITEM,o=t.CUSTOMER;return _(s.data).map(function(a){let i=_(a.items).map(function(r){return Object.assign({},r,{item:e[r.item]})}).value(),m=o[a.customer];return Object.assign({},a,{items:i,customer:m})}).value()}},actions:{store(s){_.forEach(s,t=>{let e=t.id;_.has(this.data,e)||(this.data[e]={}),this.data[e]=t})}}});export{f as u};
