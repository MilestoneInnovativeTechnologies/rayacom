import{b as m}from"./index.8d7e61fd.js";import{u as n}from"./master.58f94054.js";import{u}from"./order.2c304010.js";import{u as f}from"./leave.a3019c47.js";import{u as p}from"./review.1bd115f5.js";import"./lodash.1b69ab06.js";var y=m(async d=>{typeof AssetWorker=="undefined"||(AssetWorker.onmessage=function(o){const{store:t,action:e,payload:r}=o.data,s=n(),a=u(),c=f(),i=p();switch(t){case"master":s[e](r);break;case"order":a[e](r);break;case"leave":c[e](r);break;case"review":i[e](r);break}})});export{y as default};
