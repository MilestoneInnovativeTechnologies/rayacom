import{r as E,i as He,o as N,c as A,n as J,a as Y,e as we,h as O,g as F,l as me,f as v,w as b,j as nt,k as Ce,m as te,p as ot,q as W,s as it,t as j,u as se,v as qe,x as ce,y as ge,z as de,A as rt,B as lt,C as Le,D as Qe,E as Me,F as ut,G as K,H as st,I as ct,J as dt,K as V,L as Ve,M as Z,N as ze,O as L,P as z,Q as ft,R as ee,S as ye,T as Ae,_ as vt,U as ht,V as Te,W as mt,X as gt,Y as yt,Z as pt}from"./index.d6457b73.js";import{Q as bt,a as wt}from"./QToolbar.eb504f84.js";import{Q as pe}from"./QItemLabel.13f0d541.js";import{Q as De,a as Ct,b as St}from"./QList.897f5f28.js";import{u as xt,a as Ot,b as Et,c as kt,d as qt,e as Lt,g as zt,f as Tt,h as Dt,i as fe,Q as $t}from"./use-prevent-scroll.89f8fa80.js";import{u as Bt,a as Rt}from"./use-dark.ad354b4e.js";import{c as _t}from"./selection.35504d8c.js";import{b as G}from"./format.c860d4da.js";function Pt(){const e=E(!He.value);return e.value===!1&&N(()=>{e.value=!0}),e}const Fe=typeof ResizeObserver!="undefined",$e=Fe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let r=null,l,t={width:-1,height:-1};function n(s){s===!0||e.debounce===0||e.debounce==="0"?u():r===null&&(r=setTimeout(u,e.debounce))}function u(){if(clearTimeout(r),r=null,l){const{offsetWidth:s,offsetHeight:a}=l;(s!==t.width||a!==t.height)&&(t={width:s,height:a},i("resize",t))}}const f=F();if(Object.assign(f.proxy,{trigger:n}),Fe===!0){let s;return N(()=>{J(()=>{l=f.proxy.$el.parentNode,l&&(s=new ResizeObserver(n),s.observe(l),u())})}),Y(()=>{clearTimeout(r),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),we}else{let S=function(){clearTimeout(r),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",n,me.passive),a=void 0)},y=function(){S(),l&&l.contentDocument&&(a=l.contentDocument.defaultView,a.addEventListener("resize",n,me.passive),u())};const s=Pt();let a;return N(()=>{J(()=>{l=f.proxy.$el,l&&y()})}),Y(S),()=>{if(s.value===!0)return O("object",{style:$e.style,tabindex:-1,type:"text/html",data:$e.url,"aria-hidden":"true",onLoad:y})}}}}),Ht=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:r}){const{proxy:{$q:l}}=F(),t=Ce(te,()=>{console.error("QHeader needs to be child of QLayout")}),n=E(parseInt(e.heightHint,10)),u=E(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),s=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?n.value:0;const d=n.value-t.scroll.value.position;return d>0?d:0}),a=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),S=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),y=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=v(()=>{const d=t.rows.value.top,k={};return d[0]==="l"&&t.left.space===!0&&(k[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(k[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function c(d,k){t.update("header",d,k)}function w(d,k){d.value!==k&&(d.value=k)}function x({height:d}){w(n,d),c("size",d)}function g(d){S.value===!0&&w(u,!0),r("focusin",d)}b(()=>e.modelValue,d=>{c("space",d),w(u,!0),t.animate()}),b(s,d=>{c("offset",d)}),b(()=>e.reveal,d=>{d===!1&&w(u,e.modelValue)}),b(u,d=>{t.animate(),r("reveal",d)}),b(t.scroll,d=>{e.reveal===!0&&w(u,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const B={};return t.instances.header=B,e.modelValue===!0&&c("size",n.value),c("space",e.modelValue),c("offset",s.value),Y(()=>{t.instances.header===B&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const d=nt(i.default,[]);return e.elevated===!0&&d.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(O(be,{debounce:0,onResize:x})),O("header",{class:y.value,style:p.value,onFocusin:g},d)}}});const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Qt=Object.keys(Se);Se.all=!0;function Be(e){const i={};for(const r of Qt)e[r]===!0&&(i[r]=!0);return Object.keys(i).length===0?Se:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Re(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function ve(e,i,r){const l=ge(e);let t,n=l.left-i.event.x,u=l.top-i.event.y,f=Math.abs(n),s=Math.abs(u);const a=i.direction;a.horizontal===!0&&a.vertical!==!0?t=n<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=u<0?"up":"down":a.up===!0&&u<0?(t="up",f>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.down===!0&&u>0?(t="down",f>s&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.left===!0&&n<0?(t="left",f<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down"))):a.right===!0&&n>0&&(t="right",f<s&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down")));let S=!1;if(t===void 0&&r===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,S=!0,t==="left"||t==="right"?(l.left-=n,f=0,n=0):(l.top-=u,s=0,u=0)}return{synthetic:S,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:l,direction:t,isFirst:i.event.isFirst,isFinal:r===!0,duration:Date.now()-i.event.time,distance:{x:f,y:s},offset:{x:n,y:u},delta:{x:l.left-i.event.lastX,y:l.top-i.event.lastY}}}}let Mt=0;var he=ot({name:"touch-pan",beforeMount(e,{value:i,modifiers:r}){if(r.mouse!==!0&&W.has.touch!==!0)return;function l(n,u){r.mouse===!0&&u===!0?rt(n):(r.stop===!0&&ce(n),r.prevent===!0&&qe(n))}const t={uid:"qvtp_"+Mt++,handler:i,modifiers:r,direction:Be(r),noop:we,mouseStart(n){Re(n,t)&&it(n)&&(j(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Re(n,t)){const u=n.target;j(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(W.is.firefox===!0&&se(e,!0),t.lastEvt=n,u===!0||r.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const a=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&qe(a),n.cancelBubble===!0&&ce(a),Object.assign(a,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:a}}ce(n)}const{left:f,top:s}=ge(n);t.event={x:f,y:s,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:s}},move(n){if(t.event===void 0)return;const u=ge(n),f=u.left-t.event.x,s=u.top-t.event.y;if(f===0&&s===0)return;t.lastEvt=n;const a=t.event.mouse===!0,S=()=>{l(n,a),r.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_t(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,r.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{w(),c()},50):w()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(n,t.event.mouse);const{payload:c,synthetic:w}=ve(n,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&S(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=w===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){S(),t.event.detected=!0,t.move(n);return}const y=Math.abs(f),p=Math.abs(s);y!==p&&(t.direction.horizontal===!0&&y>p||t.direction.vertical===!0&&y<p||t.direction.up===!0&&y<p&&s<0||t.direction.down===!0&&y<p&&s>0||t.direction.left===!0&&y>p&&f<0||t.direction.right===!0&&y>p&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(de(t,"temp"),W.is.firefox===!0&&se(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ve(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=ve(n===void 0?t.lastEvt:n,t,!0),s=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,r.mouse===!0&&j(t,"main",[[e,"mousedown","mouseStart",`passive${r.mouseCapture===!0?"Capture":""}`]]),W.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const r=e.__qtouchpan;r!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&r.end(),r.handler=i.value),r.direction=Be(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),de(i,"main"),de(i,"temp"),W.is.firefox===!0&&se(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const _e=150;var Vt=A({name:"QDrawer",inheritAttrs:!1,props:{...xt,...Bt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ot,"on-layout","mini-state"],setup(e,{slots:i,emit:r,attrs:l}){const t=F(),{proxy:{$q:n}}=t,u=Rt(e,n),{preventBodyScroll:f}=Lt(),{registerTimeout:s}=Et(),a=Ce(te,()=>{console.error("QDrawer needs to be child of QLayout")});let S,y,p;const c=E(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),w=v(()=>e.mini===!0&&c.value!==!0),x=v(()=>w.value===!0?e.miniWidth:e.width),g=E(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),B=v(()=>e.persistent!==!0&&(c.value===!0||Ie.value===!0));function d(o,m){if($(),o!==!1&&a.animate(),D(0),c.value===!0){const q=a.instances[U.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),_(1),a.isContainer.value!==!0&&f(!0)}else _(0),o!==!1&&re(!1);s(()=>{o!==!1&&re(!0),m!==!0&&r("show",o)},_e)}function k(o,m){H(),o!==!1&&a.animate(),_(0),D(Q.value*x.value),le(),m!==!0&&s(()=>{r("hide",o)},_e)}const{show:h,hide:C}=kt({showing:g,hideOnRouteChange:B,handleShow:d,handleHide:k}),{addToHistory:$,removeFromHistory:H}=qt(g,C,B),R={belowBreakpoint:c,hide:C},T=v(()=>e.side==="right"),Q=v(()=>(n.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),xe=E(0),M=E(!1),ae=E(!1),Oe=E(x.value*Q.value),U=v(()=>T.value===!0?"left":"right"),ne=v(()=>g.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),oe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(T.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),I=v(()=>e.overlay===!1&&g.value===!0&&c.value===!1),Ie=v(()=>e.overlay===!0&&g.value===!0&&c.value===!1),We=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&M.value===!1?" hidden":"")),Ne=v(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),Ee=v(()=>T.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ye=v(()=>T.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ue=v(()=>{const o={};return a.header.space===!0&&Ee.value===!1&&(oe.value===!0?o.top=`${a.header.offset}px`:a.header.space===!0&&(o.top=`${a.header.size}px`)),a.footer.space===!0&&Ye.value===!1&&(oe.value===!0?o.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(o.bottom=`${a.footer.size}px`)),o}),Xe=v(()=>{const o={width:`${x.value}px`,transform:`translateX(${Oe.value}px)`};return c.value===!0?o:Object.assign(o,Ue.value)}),je=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=v(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${w.value===!0?"mini":"standard"}`+(oe.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ee.value===!0?" q-drawer--top-padding":""))),Ge=v(()=>{const o=n.lang.rtl===!0?e.side:U.value;return[[he,tt,void 0,{[o]:!0,mouse:!0}]]}),Je=v(()=>{const o=n.lang.rtl===!0?U.value:e.side;return[[he,ke,void 0,{[o]:!0,mouse:!0}]]}),Ze=v(()=>{const o=n.lang.rtl===!0?U.value:e.side;return[[he,ke,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){at(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(c,o=>{o===!0?(S=g.value,g.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(g.value===!0?(D(0),_(0),le()):h(!1))}),b(()=>e.side,(o,m)=>{a.instances[m]===R&&(a.instances[m]=void 0,a[m].space=!1,a[m].offset=0),a.instances[o]=R,a[o].size=x.value,a[o].space=I.value,a[o].offset=ne.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),b(()=>e.behavior+e.breakpoint,ie),b(a.isContainer,o=>{g.value===!0&&f(o!==!0),o===!0&&ie()}),b(a.scrollbarWidth,()=>{D(g.value===!0?0:void 0)}),b(ne,o=>{P("offset",o)}),b(I,o=>{r("on-layout",o),P("space",o)}),b(T,()=>{D()}),b(x,o=>{D(),ue(e.miniToOverlay,o)}),b(()=>e.miniToOverlay,o=>{ue(o,x.value)}),b(()=>n.lang.rtl,()=>{D()}),b(()=>e.mini,()=>{e.modelValue===!0&&(et(),a.animate())}),b(w,o=>{r("mini-state",o)});function D(o){o===void 0?J(()=>{o=g.value===!0?0:x.value,D(Q.value*o)}):(a.isContainer.value===!0&&T.value===!0&&(c.value===!0||Math.abs(o)===x.value)&&(o+=Q.value*a.scrollbarWidth.value),Oe.value=o)}function _(o){xe.value=o}function re(o){const m=o===!0?"remove":a.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function et(){clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,y=setTimeout(()=>{ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(o){if(g.value!==!1)return;const m=x.value,q=G(o.distance.x,0,m);if(o.isFinal===!0){q>=Math.min(75,m)===!0?h():(a.animate(),_(0),D(Q.value*m)),M.value=!1;return}D((n.lang.rtl===!0?T.value!==!0:T.value)?Math.max(m-q,0):Math.min(0,q-m)),_(G(q/m,0,1)),o.isFirst===!0&&(M.value=!0)}function ke(o){if(g.value!==!0)return;const m=x.value,q=o.direction===e.side,X=(n.lang.rtl===!0?q!==!0:q)?G(o.distance.x,0,m):0;if(o.isFinal===!0){Math.abs(X)<Math.min(75,m)===!0?(a.animate(),_(1),D(0)):C(),M.value=!1;return}D(Q.value*X),_(G(1-X/m,0,1)),o.isFirst===!0&&(M.value=!0)}function le(){f(!1),re(!0)}function P(o,m){a.update(e.side,o,m)}function at(o,m){o.value!==m&&(o.value=m)}function ue(o,m){P("size",o===!0?e.miniWidth:m)}return a.instances[e.side]=R,ue(e.miniToOverlay,x.value),P("space",I.value),P("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),N(()=>{r("on-layout",I.value),r("mini-state",w.value),S=e.showIfAbove===!0;const o=()=>{(g.value===!0?d:k)(!1,!0)};if(a.totalWidth.value!==0){J(o);return}p=b(a.totalWidth,()=>{p(),p=void 0,g.value===!1&&e.showIfAbove===!0&&c.value===!1?h(!1):o()})}),Y(()=>{p!==void 0&&p(),clearTimeout(y),g.value===!0&&le(),a.instances[e.side]===R&&(a.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const o=[];c.value===!0&&(e.noSwipeOpen===!1&&o.push(lt(O("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ge.value)),o.push(Le("div",{ref:"backdrop",class:We.value,style:Ne.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Ze.value)));const m=w.value===!0&&i.mini!==void 0,q=[O("div",{...l,key:""+m,class:[je.value,l.class]},m===!0?i.mini():Qe(i.default))];return e.elevated===!0&&g.value===!0&&q.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Le("aside",{ref:"content",class:Ke.value,style:Xe.value},q,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>Je.value)),O("div",{class:"q-drawer-container"},o)}}}),At=A({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:r}}=F(),l=Ce(te,()=>{console.error("QPageContainer needs to be child of QLayout")});Me(ut,!0);const t=v(()=>{const n={};return l.header.space===!0&&(n.paddingTop=`${l.header.size}px`),l.right.space===!0&&(n[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(n.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(n[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),n});return()=>O("div",{class:"q-page-container",style:t.value},Qe(i.default))}});const{passive:Pe}=me,Ft=["both","horizontal","vertical"];var It=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,n;b(()=>e.scrollTarget,()=>{s(),f()});function u(){l!==null&&l();const y=Math.max(0,Tt(t)),p=Dt(t),c={top:y-r.position.top,left:p-r.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const w=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";r.position={top:y,left:p},r.directionChanged=r.direction!==w,r.delta=c,r.directionChanged===!0&&(r.direction=w,r.inflectionPoint=r.position),i("scroll",{...r})}function f(){t=zt(n,e.scrollTarget),t.addEventListener("scroll",a,Pe),a(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",a,Pe),t=void 0)}function a(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[p,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{c(p),l=null}}}const S=F();return N(()=>{n=S.proxy.$el.parentNode,f()}),Y(()=>{l!==null&&l(),s()}),Object.assign(S.proxy,{trigger:a,getPosition:()=>r}),we}}),Wt=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:r}){const{proxy:{$q:l}}=F(),t=E(null),n=E(l.screen.height),u=E(e.container===!0?0:l.screen.width),f=E({position:0,direction:"down",inflectionPoint:0}),s=E(0),a=E(He.value===!0?0:fe()),S=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),p=v(()=>a.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=v(()=>a.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function w(h){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:h.position.top,direction:h.direction,directionChanged:h.directionChanged,inflectionPoint:h.inflectionPoint.top,delta:h.delta.top};f.value=C,e.onScroll!==void 0&&r("scroll",C)}}function x(h){const{height:C,width:$}=h;let H=!1;n.value!==C&&(H=!0,n.value=C,e.onScrollHeight!==void 0&&r("scroll-height",C),B()),u.value!==$&&(H=!0,u.value=$),H===!0&&e.onResize!==void 0&&r("resize",h)}function g({height:h}){s.value!==h&&(s.value=h,B())}function B(){if(e.container===!0){const h=n.value>s.value?fe():0;a.value!==h&&(a.value=h)}}let d;const k={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:s,scrollbarWidth:a,totalWidth:v(()=>u.value+a.value),rows:v(()=>{const h=e.view.toLowerCase().split(" ");return{top:h[0].split(""),middle:h[1].split(""),bottom:h[2].split("")}}),header:K({size:0,offset:0,space:!1}),right:K({size:300,offset:0,space:!1}),footer:K({size:0,offset:0,space:!1}),left:K({size:300,offset:0,space:!1}),scroll:f,animate(){d!==void 0?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),d=void 0},155)},update(h,C,$){k[h][C]=$}};if(Me(te,k),fe()>0){let $=function(){h=null,C.classList.remove("hide-scrollbar")},H=function(){if(h===null){if(C.scrollHeight>l.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout($,300)},R=function(T){h!==null&&T==="remove"&&(clearTimeout(h),$()),window[`${T}EventListener`]("resize",H)},h=null;const C=document.body;b(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),st(()=>{R("remove")})}return()=>{const h=ct(i.default,[O(It,{onScroll:w}),O(be,{onResize:x})]),C=O("div",{class:S.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},h);return e.container===!0?O("div",{class:"q-layout-container overflow-hidden",ref:t},[O(be,{onResize:g}),O("div",{class:"absolute-full",style:p.value},[O("div",{class:"scroll",style:c.value},[C])])]):C}}});const Nt={__name:"EssentialLink",props:["title","caption","route","icon","separate"],emits:["navigate"],setup(e,{emit:i}){const r=e,l=dt();function t(){i("navigate"),l.push({name:r.route})}return(n,u)=>(V(),Ve(Ae,null,[e.separate&&e.separate===!0?(V(),Z($t,{key:0,spaced:""})):ze("",!0),L(Ct,{clickable:"",tag:"a",target:"_blank",onClick:t},{default:z(()=>[e.icon?(V(),Z(De,{key:0,avatar:""},{default:z(()=>[L(ft,{name:e.icon},null,8,["name"])]),_:1})):ze("",!0),L(De,null,{default:z(()=>[L(pe,null,{default:z(()=>[ee(ye(e.title),1)]),_:1}),L(pe,{caption:""},{default:z(()=>[ee(ye(e.caption),1)]),_:1})]),_:1})]),_:1})],64))}},Yt=[{title:"Home",caption:"Back to main, Home Page",icon:"home",route:"home"},{title:"DASHBOARD",caption:"Dashboard",icon:"home",route:"DASHBOARD",separate:!0},{title:"ORDER HISTORY",caption:"ORDER HISTORY",icon:"history",route:"ORDERHISTORY"},{title:"PROFILE",caption:"Profile",icon:"account_circle",route:"PROFILE"},{title:"SE DASHBOARD",caption:"Sales Executive Dashboard",icon:"home",route:"SALESEXECUTIVEDASHBOARD",separate:!0},{title:"SE ORDER HISTORY",caption:"Sales Executive Order History",icon:"history",route:"SALESEXECUTIVEORDEHISTORY"},{title:"SE PROFILE",caption:"Sales Executive Profile",icon:"account_circle",route:"editprofile"}],Ut=ht({name:"MainLayout",components:{EssentialLink:Nt},setup(){const e=E(!1);return{essentialLinks:Yt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Xt=ee("Rayaheen "),jt={class:"text-subtitle2"},Kt=ee("Menu");function Gt(e,i,r,l,t,n){const u=Te("EssentialLink"),f=Te("router-view");return V(),Z(Wt,{view:"lHh Lpr lFf"},{default:z(()=>[L(Ht,{elevated:""},{default:z(()=>[L(bt,null,{default:z(()=>[L(mt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),L(wt,null,{default:z(()=>[Xt,gt("span",jt,ye(e.$route.meta.title),1)]),_:1})]),_:1})]),_:1}),L(Vt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[1]||(i[1]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:""},{default:z(()=>[L(St,{class:"bg-grey-1"},{default:z(()=>[L(pe,{header:"",class:"bg-grey-2 text-black text-bold"},{default:z(()=>[Kt]),_:1}),(V(!0),Ve(Ae,null,yt(e.essentialLinks,s=>(V(),Z(u,pt({key:s.title},s,{onNavigate:i[0]||(i[0]=a=>e.leftDrawerOpen=!1)}),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),L(At,null,{default:z(()=>[L(f)]),_:1})]),_:1})}var la=vt(Ut,[["render",Gt]]);export{la as default};
