import{b as i}from"./index.519e6511.js";import{u as n}from"./master.8d9550d1.js";import{u}from"./order.3b2eb02b.js";import{u as p}from"./leave.11dc3b66.js";import{u as S}from"./review.04954850.js";import{u as d}from"./offers.70c3b81f.js";import"./lodash.1b69ab06.js";var O=i(async b=>{typeof AssetWorker=="undefined"||(AssetWorker.onmessage=function(o){const{store:t,action:e,payload:r}=o.data,s=n(),a=u(),f=p(),c=S(),m=d();switch(t){case"master":s[e](r);break;case"order":a[e](r);break;case"leave":f[e](r);break;case"review":c[e](r);break;case"offer":m[e](r);break}})});export{O as default};
