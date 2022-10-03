import{ai as C,J as E,t as s,r as m,M as k,P as o,K as n,Y as u,O as t,R as y,ak as P,S as f,X as I,L as v,U as S,_ as D,ah as T,T as q,N as w}from"./index.d755ac14.js";import{Q as Y}from"./QItemLabel.780cbcc6.js";import{a as B,Q as V}from"./QItem.66a42e1c.js";import{Q as N}from"./QTooltip.443c9858.js";import{Q as A}from"./QList.1c77fae5.js";import{Q as O}from"./QPagination.e76403d2.js";import{Q as K}from"./QPage.0b6c8760.js";import{u as R}from"./master.05480c04.js";import"./position-engine.185136e8.js";import"./selection.d9f7dc9e.js";import"./format.c860d4da.js";import"./lodash.1e9e3f94.js";const U=R(),j={setup(){const g=E();let r,_;const e=s(()=>U.ITEM),i=m(""),d=s(()=>{if(i.value==="")return Object.values(e.value);{let c=i.value.toLowerCase();return Object.values(e.value).filter(Q=>Q.name.toLowerCase().indexOf(c)>-1)}}),a=s(()=>d.value.length),x=s(()=>(r=(p.value-1)*l.value,_=(p.value-1)*l.value+l.value,d.value.slice(r,_).map(L=>L))),h=function(c){g.push({name:"ITEMADD",state:{id:c}})};let p=m(1),M=m(1);const l=m(10),b=s(()=>Math.ceil(a.value/l.value));return{MYITEMS:e,search:i,searchResult:d,myitemsLength:a,page:p,currentPage:M,totalPages:l,maxVal:b,getData:x,gotoItem:h}}},z={class:"q-pa-sm"},F={class:"row q-pa-md"},J={class:"col-8"},X={class:"col-4 text-center"},G={key:0,class:"q-pa-md row items-start q-gutter-md"},H={key:1,class:"q-pa-lg flex flex-center"};function W(g,r,_,e,i,d){return n(),k(K,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:o(()=>[u("div",z,[u("div",F,[u("div",J,[t(P,{modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=a=>e.search=a),debounce:"500",filled:"",placeholder:"Search"},{append:o(()=>[t(y,{name:"search"})]),_:1},8,["modelValue"])]),u("div",X,[t(I,{color:"positive","no-caps":"",onClick:r[1]||(r[1]=a=>e.gotoItem(0))},{default:o(()=>[t(y,{left:"",size:"xl",name:"open_in_new"}),f(" ADD ITEM ")]),_:1})])])]),e.myitemsLength?(n(),v("div",G,[(n(!0),v(S,null,D(e.getData,(a,x)=>(n(),k(T,{flat:"",bordered:"",class:"my-card",key:a.id},{default:o(()=>[t(A,null,{default:o(()=>[t(B,{class:"bg-brand text-white text-bold"},{default:o(()=>[t(V,null,{default:o(()=>[t(Y,null,{default:o(()=>[f(q(a.name),1)]),_:2},1024)]),_:2},1024),t(V,{avatar:""},{default:o(()=>[t(I,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:h=>e.gotoItem(a.id)},{default:o(()=>[t(N,null,{default:o(()=>[f(" Edit ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):w("",!0),e.myitemsLength?(n(),v("div",H,[t(O,{modelValue:e.page,"onUpdate:modelValue":r[2]||(r[2]=a=>e.page=a),min:e.currentPage,max:e.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):w("",!0)]),_:1})}var ce=C(j,[["render",W],["__scopeId","data-v-c2c123fe"]]);export{ce as default};
