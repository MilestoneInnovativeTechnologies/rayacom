import{ai as Q,J as E,r,t as p,L as i,Y as h,O as d,P as y,ak as I,U as q,_ as N,N as x,X as O,K as n,R as Y,M as B,T as R,ag as D,ah as T}from"./index.8ca15aea.js";import{Q as K}from"./QPagination.5d576056.js";import{u as U}from"./use-quasar.c67c6e3f.js";import{u as j}from"./master.e3dfadde.js";import"./format.c860d4da.js";import"./lodash.1e9e3f94.js";const A=j(),J=A.ITEM,F={setup(){const k=U(),s=E(),o=r([]);let e,g;const c=r(""),t=p(()=>J),u=p(()=>{if(c.value==="")return Object.values(t.value);{let a=c.value.toLowerCase();return Object.values(t.value).filter(v=>v.name.toLowerCase().indexOf(a)>-1)}}),w=p(()=>u.value.length),P=p(()=>(e=(_.value-1)*m.value,g=(_.value-1)*m.value+m.value,u.value.slice(e,g).map(l=>l))),S=function(a,v){var l="",L=o.value.some(function(f){return f.item===a});L?(o.value.find(f=>f.item===a).quantity+=1,l="Item quantity updated"):(o.value.push({item:a,itemname:v,quantity:1}),l="New item added"),b(l)},b=function(a){k.notify({type:"positive",icon:"cloud_done",message:a,position:"top-right",timeout:800})},C=function(){var a=JSON.stringify(o.value);s.push({name:"ORDER",state:{products:a}})};let _=r(1),M=r(1),V=r(null);const m=r(10);return{MYITEMS:t,search:c,searchResult:u,myitemsLength:w,page:_,currentPage:M,nextPage:V,totalPages:m,getData:P,positivemsg:b,myproducts:o,selectedProducts:S,order:C}}},X={class:"q-pa-md fullwidth"},z={class:"q-gutter-md"},G={key:0,class:"q-pa-md row items-start q-gutter-md"},H={class:"Subtitle 2 text-weight-bolder"},W={key:1,class:"q-pa-lg flex flex-center"},Z={key:2,class:"q-pa-md q-gutter-sm"};function $(k,s,o,e,g,c){return n(),i(q,null,[h("div",X,[h("div",z,[d(I,{modelValue:e.search,"onUpdate:modelValue":s[0]||(s[0]=t=>e.search=t),debounce:"500",filled:"",placeholder:"Search"},{append:y(()=>[d(Y,{name:"search"})]),_:1},8,["modelValue"])])]),e.myitemsLength?(n(),i("div",G,[(n(!0),i(q,null,N(e.getData,(t,u)=>(n(),B(T,{flat:"",bordered:"",class:"my-card",key:t.id,onClick:w=>e.selectedProducts(t.id,t.name)},{default:y(()=>[d(D,{class:"bg-brand text-white"},{default:y(()=>[h("div",H,R(t.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])):x("",!0),e.myitemsLength?(n(),i("div",W,[d(K,{modelValue:e.page,"onUpdate:modelValue":s[1]||(s[1]=t=>e.page=t),min:e.currentPage,max:Math.ceil(e.myitemsLength/e.totalPages),"max-pages":7,"direction-links":"","boundary-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward","active-color":"brand"},null,8,["modelValue","min","max"])])):x("",!0),e.myproducts.length?(n(),i("div",Z,[d(O,{unelevated:"",rounded:"",color:"positive",label:"Proceed","icon-right":"send",class:"full-width",onClick:s[2]||(s[2]=t=>e.order())})])):x("",!0)],64)}var ne=Q(F,[["render",$],["__scopeId","data-v-21b58a78"]]);export{ne as default};