import{aj as L,K as M,t as n,r as u,N as Q,R as o,L as l,Z as m,P as a,S as k,al as P,Y as V,M as f,V as R,$ as D,ai as E,T as v,U as O,O as w}from"./index.04c464b8.js";import{Q as Y}from"./QItemLabel.9f7bf82c.js";import{a as q,Q as C}from"./QItem.3f5f7acb.js";import{Q as I}from"./QTooltip.4b1a4666.js";import{Q as T}from"./QList.82924bce.js";import{Q as U}from"./QPagination.1234704c.js";import{Q as B}from"./QPage.b0d4ff95.js";import{u as N}from"./master.f1b7f5d6.js";import"./position-engine.d0298df9.js";import"./selection.fd593506.js";import"./lodash.1e9e3f94.js";const j=N(),K={setup(){const g=M();let r,_;const e=n(()=>j.CUSTOMER),i=u(""),c=n(()=>{if(i.value==="")return Object.values(e.value);{let d=i.value.toLowerCase();return Object.values(e.value).filter(y=>y.name.toLowerCase().indexOf(d)>-1)}}),t=n(()=>c.value.length),x=n(()=>(r=(p.value-1)*s.value,_=(p.value-1)*s.value+s.value,c.value.slice(r,_).map(A=>A))),h=function(d){g.push({name:"CUSTOMERADD",params:{id:d}})};let p=u(1),S=u(1);const s=u(10),b=n(()=>Math.ceil(t.value/s.value));return{MYARRAY:e,search:i,searchResult:c,myarrayLength:t,page:p,currentPage:S,totalPages:s,maxVal:b,getData:x,gotoAction:h}}},z={class:"q-pa-sm"},F={class:"row q-pa-md"},Z={class:"col-8"},G={class:"col-4 text-center"},H=v(" ADD CUSTOMER "),J={key:0,class:"q-pa-sm row items-start q-gutter-md"},W=v(" Edit "),X={key:1,class:"q-pa-lg flex flex-center"};function $(g,r,_,e,i,c){return l(),Q(B,{padding:"",class:"flex column q-col-gutter-y-lg"},{default:o(()=>[m("div",z,[m("div",F,[m("div",Z,[a(P,{modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=t=>e.search=t),debounce:"500",filled:"",placeholder:"Search"},{append:o(()=>[a(k,{name:"search"})]),_:1},8,["modelValue"])]),m("div",G,[a(V,{color:"positive","no-caps":"",onClick:r[1]||(r[1]=t=>e.gotoAction(0))},{default:o(()=>[a(k,{left:"",size:"xl",name:"open_in_new"}),H]),_:1})])])]),e.myarrayLength?(l(),f("div",J,[(l(!0),f(R,null,D(e.getData,(t,x)=>(l(),Q(E,{flat:"",bordered:"",class:"my-card",key:t.id},{default:o(()=>[a(T,null,{default:o(()=>[a(q,{class:"bg-brand text-white text-bold"},{default:o(()=>[a(C,null,{default:o(()=>[a(Y,null,{default:o(()=>[v(O(t.name),1)]),_:2},1024)]),_:2},1024),a(C,{avatar:""},{default:o(()=>[a(V,{flat:"",round:"",color:"primary",icon:"mode_edit",onClick:h=>e.gotoAction(t.id)},{default:o(()=>[a(I,null,{default:o(()=>[W]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])):w("",!0),e.myarrayLength?(l(),f("div",X,[a(U,{modelValue:e.page,"onUpdate:modelValue":r[2]||(r[2]=t=>e.page=t),min:e.currentPage,max:e.maxVal,"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"deep-orange-10"},null,8,["modelValue","min","max"])])):w("",!0)]),_:1})}var ue=L(K,[["render",$],["__scopeId","data-v-5e77256c"]]);export{ue as default};