import{r as z,a1 as _,y as R,j as T,z as N,A as P,n as D,C as h,J as C,a2 as E,t as f,x as S,a3 as U,F as k,I as B,E as K,a4 as A,a5 as J,a6 as G,a7 as X,a8 as Y,a9 as V,aa as q,ab as Z,ac as ee}from"./index.101a966c.js";function te(){const e=z(!_.value);return e.value===!1&&R(()=>{e.value=!0}),e}const I=typeof ResizeObserver!="undefined",W=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:y}){let i=null,t,o={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?c():i===null&&(i=setTimeout(c,e.debounce))}function c(){if(clearTimeout(i),i=null,t){const{offsetWidth:r,offsetHeight:a}=t;(r!==o.width||a!==o.height)&&(o={width:r,height:a},y("resize",o))}}const v=C();if(Object.assign(v.proxy,{trigger:s}),I===!0){let r;return R(()=>{N(()=>{t=v.proxy.$el.parentNode,t&&(r=new ResizeObserver(s),r.observe(t),c())})}),P(()=>{clearTimeout(i),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),D}else{let p=function(){clearTimeout(i),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",s,E.passive),a=void 0)},g=function(){p(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",s,E.passive),c())};const r=te();let a;return R(()=>{N(()=>{t=v.proxy.$el,t&&g()})}),P(p),()=>{if(r.value===!0)return h("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:g})}}}}),le=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:y,emit:i}){const{proxy:{$q:t}}=C(),o=k(B,()=>{console.error("QHeader needs to be child of QLayout")}),s=z(parseInt(e.heightHint,10)),c=z(!0),v=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return c.value===!0?s.value:0;const n=s.value-o.scroll.value.position;return n>0?n:0}),a=f(()=>e.modelValue!==!0||v.value===!0&&c.value!==!0),p=f(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),g=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const n=o.rows.value.top,m={};return n[0]==="l"&&o.left.space===!0&&(m[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(m[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),m});function u(n,m){o.update("header",n,m)}function b(n,m){n.value!==m&&(n.value=m)}function H({height:n}){b(s,n),u("size",n)}function O(n){p.value===!0&&b(c,!0),i("focusin",n)}S(()=>e.modelValue,n=>{u("space",n),b(c,!0),o.animate()}),S(r,n=>{u("offset",n)}),S(()=>e.reveal,n=>{n===!1&&b(c,e.modelValue)}),S(c,n=>{o.animate(),i("reveal",n)}),S(o.scroll,n=>{e.reveal===!0&&b(c,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&u("size",s.value),u("space",e.modelValue),u("offset",r.value),P(()=>{o.instances.header===L&&(o.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const n=U(y.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(F,{debounce:0,onResize:H})),h("header",{class:g.value,style:w.value,onFocusin:O},n)}}}),ae=T({name:"QPageContainer",setup(e,{slots:y}){const{proxy:{$q:i}}=C(),t=k(B,()=>{console.error("QPageContainer needs to be child of QLayout")});A(J,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:o.value},K(y.default))}});const{passive:M}=E,ne=["both","horizontal","vertical"];var oe=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ne.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:y}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;S(()=>e.scrollTarget,()=>{r(),v()});function c(){t!==null&&t();const g=Math.max(0,X(o)),w=Y(o),u={top:g-i.position.top,left:w-i.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const b=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";i.position={top:g,left:w},i.directionChanged=i.direction!==b,i.delta=u,i.directionChanged===!0&&(i.direction=b,i.inflectionPoint=i.position),y("scroll",{...i})}function v(){o=G(s,e.scrollTarget),o.addEventListener("scroll",a,M),a(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",a,M),o=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[w,u]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{u(w),t=null}}}const p=C();return R(()=>{s=p.proxy.$el.parentNode,v()}),P(()=>{t!==null&&t(),r()}),Object.assign(p.proxy,{trigger:a,getPosition:()=>i}),D}}),re=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:y,emit:i}){const{proxy:{$q:t}}=C(),o=z(null),s=z(t.screen.height),c=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),a=z(_.value===!0?0:V()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),u=f(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};v.value=d,e.onScroll!==void 0&&i("scroll",d)}}function H(l){const{height:d,width:x}=l;let $=!1;s.value!==d&&($=!0,s.value=d,e.onScrollHeight!==void 0&&i("scroll-height",d),L()),c.value!==x&&($=!0,c.value=x),$===!0&&e.onResize!==void 0&&i("resize",l)}function O({height:l}){r.value!==l&&(r.value=l,L())}function L(){if(e.container===!0){const l=s.value>r.value?V():0;a.value!==l&&(a.value=l)}}let n;const m={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:r,scrollbarWidth:a,totalWidth:f(()=>c.value+a.value),rows:f(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:q({size:0,offset:0,space:!1}),right:q({size:300,offset:0,space:!1}),footer:q({size:0,offset:0,space:!1}),left:q({size:300,offset:0,space:!1}),scroll:v,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(l,d,x){m[l][d]=x}};if(A(B,m),V()>0){let x=function(){l=null,d.classList.remove("hide-scrollbar")},$=function(){if(l===null){if(d.scrollHeight>t.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(x,300)},Q=function(j){l!==null&&j==="remove"&&(clearTimeout(l),x()),window[`${j}EventListener`]("resize",$)},l=null;const d=document.body;S(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),Z(()=>{Q("remove")})}return()=>{const l=ee(y.default,[h(oe,{onScroll:b}),h(F,{onResize:H})]),d=h("div",{class:p.value,style:g.value,ref:e.container===!0?void 0:o,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(F,{onResize:O}),h("div",{class:"absolute-full",style:w.value},[h("div",{class:"scroll",style:u.value},[d])])]):d}}});export{re as Q,le as a,ae as b};
