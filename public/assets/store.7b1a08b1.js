import{b as c}from"./index.01a4d7f9.js";import{u as m}from"./master.02c82b39.js";import{u as n}from"./order.2728bd89.js";import"./lodash.e6c87188.js";var b=c(async i=>{AssetWorker.onmessage=function(t){const{store:e,action:r,payload:o}=t.data,s=m(),a=n();switch(e){case"master":s[r](o);break;case"order":a[r](o);break}}});export{b as default};
