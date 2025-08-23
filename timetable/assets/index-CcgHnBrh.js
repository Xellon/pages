var Wa=A=>{throw TypeError(A)};var Pi=(A,t,e)=>t.has(A)||Wa("Cannot "+e);var pA=(A,t,e)=>(Pi(A,t,"read from private field"),e?e.call(A):t.get(A)),ct=(A,t,e)=>t.has(A)?Wa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),Kt=(A,t,e,r)=>(Pi(A,t,"write to private field"),r?r.call(A,e):t.set(A,e),e),fe=(A,t,e)=>(Pi(A,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zs=globalThis,Ca=Zs.ShadowRoot&&(Zs.ShadyCSS===void 0||Zs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qa=Symbol(),Ya=new WeakMap;let $l=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Qa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ca&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Ya.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ya.set(e,t))}return t}toString(){return this.cssText}};const rh=A=>new $l(typeof A=="string"?A:A+"",void 0,Qa),K=(A,...t)=>{const e=A.length===1?A[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+A[i+1],A[0]);return new $l(e,A,Qa)},sh=(A,t)=>{if(Ca)A.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=Zs.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,A.appendChild(r)}},Ja=Ca?A=>A:A=>A instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return rh(e)})(A):A;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ih,defineProperty:oh,getOwnPropertyDescriptor:ah,getOwnPropertyNames:nh,getOwnPropertySymbols:lh,getPrototypeOf:ch}=Object,ee=globalThis,Za=ee.trustedTypes,dh=Za?Za.emptyScript:"",Ni=ee.reactiveElementPolyfillSupport,Kr=(A,t)=>A,rr={toAttribute(A,t){switch(t){case Boolean:A=A?dh:null;break;case Object:case Array:A=A==null?A:JSON.stringify(A)}return A},fromAttribute(A,t){let e=A;switch(t){case Boolean:e=A!==null;break;case Number:e=A===null?null:Number(A);break;case Object:case Array:try{e=JSON.parse(A)}catch{e=null}}return e}},Ua=(A,t)=>!ih(A,t),qa={attribute:!0,type:String,converter:rr,reflect:!1,useDefault:!1,hasChanged:Ua};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ee.litPropertyMetadata??(ee.litPropertyMetadata=new WeakMap);let Ge=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qa){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&oh(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=ah(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const n=s==null?void 0:s.call(this);i==null||i.call(this,o),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qa}static _$Ei(){if(this.hasOwnProperty(Kr("elementProperties")))return;const t=ch(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Kr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Kr("properties"))){const e=this.properties,r=[...nh(e),...lh(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Ja(s))}else t!==void 0&&e.push(Ja(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:rr).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var i,o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:rr;this._$Em=s,this[s]=a.fromAttribute(e,n.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(t,e,r){var s;if(t!==void 0){const i=this.constructor,o=this[t];if(r??(r=i.getPropertyOptions(t)),!((r.hasChanged??Ua)(o,e)||r.useDefault&&r.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,a=this[i];n!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},Ge[Kr("elementProperties")]=new Map,Ge[Kr("finalized")]=new Map,Ni==null||Ni({ReactiveElement:Ge}),(ee.reactiveElementVersions??(ee.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,ai=Or.trustedTypes,ja=ai?ai.createPolicy("lit-html",{createHTML:A=>A}):void 0,Ml="$lit$",Yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Rl="?"+Yt,hh=`<${Rl}>`,Ee=document,Jr=()=>Ee.createComment(""),Zr=A=>A===null||typeof A!="object"&&typeof A!="function",Fa=Array.isArray,uh=A=>Fa(A)||typeof(A==null?void 0:A[Symbol.iterator])=="function",Gi=`[ 	
\f\r]`,mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,An=/-->/g,tn=/>/g,ge=RegExp(`>|${Gi}(?:([^\\s"'>=/]+)(${Gi}*=${Gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,rn=/"/g,Vl=/^(?:script|style|textarea|title)$/i,ph=A=>(t,...e)=>({_$litType$:A,strings:t,values:e}),w=ph(1),WA=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),sn=new WeakMap,we=Ee.createTreeWalker(Ee,129);function zl(A,t){if(!Fa(A)||!A.hasOwnProperty("raw"))throw Error("invalid template strings array");return ja!==void 0?ja.createHTML(t):t}const fh=(A,t)=>{const e=A.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",o=mr;for(let n=0;n<e;n++){const a=A[n];let c,h,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,h=o.exec(a),h!==null);)p=o.lastIndex,o===mr?h[1]==="!--"?o=An:h[1]!==void 0?o=tn:h[2]!==void 0?(Vl.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=ge):h[3]!==void 0&&(o=ge):o===ge?h[0]===">"?(o=s??mr,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?ge:h[3]==='"'?rn:en):o===rn||o===en?o=ge:o===An||o===tn?o=mr:(o=ge,s=void 0);const g=o===ge&&A[n+1].startsWith("/>")?" ":"";i+=o===mr?a+hh:d>=0?(r.push(c),a.slice(0,d)+Ml+a.slice(d)+Yt+g):a+Yt+(d===-2?n:g)}return[zl(A,i+(A[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class qr{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[c,h]=fh(t,e);if(this.el=qr.createElement(c,r),we.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=we.nextNode())!==null&&a.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Ml)){const p=h[o++],g=s.getAttribute(d).split(Yt),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:f[2],strings:g,ctor:f[1]==="."?mh:f[1]==="?"?Bh:f[1]==="@"?bh:Ui}),s.removeAttribute(d)}else d.startsWith(Yt)&&(a.push({type:6,index:i}),s.removeAttribute(d));if(Vl.test(s.tagName)){const d=s.textContent.split(Yt),p=d.length-1;if(p>0){s.textContent=ai?ai.emptyScript:"";for(let g=0;g<p;g++)s.append(d[g],Jr()),we.nextNode(),a.push({type:2,index:++i});s.append(d[p],Jr())}}}else if(s.nodeType===8)if(s.data===Rl)a.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(Yt,d+1))!==-1;)a.push({type:7,index:i}),d+=Yt.length-1}i++}}static createElement(t,e){const r=Ee.createElement("template");return r.innerHTML=t,r}}function sr(A,t,e=A,r){var o,n;if(t===WA)return t;let s=r!==void 0?(o=e._$Co)==null?void 0:o[r]:e._$Cl;const i=Zr(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),i===void 0?s=void 0:(s=new i(A),s._$AT(A,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=sr(A,s._$AS(A,t.values),s,r)),t}class gh{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??Ee).importNode(e,!0);we.currentNode=s;let i=we.nextNode(),o=0,n=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new is(i,i.nextSibling,this,t):a.type===1?c=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(c=new vh(i,this,t)),this._$AV.push(c),a=r[++n]}o!==(a==null?void 0:a.index)&&(i=we.nextNode(),o++)}return we.currentNode=Ee,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class is{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=sr(this,t,e),Zr(t)?t===q||t==null||t===""?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==WA&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):uh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&Zr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ee.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=qr.createElement(zl(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const o=new gh(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=sn.get(t.strings);return e===void 0&&sn.set(t.strings,e=new qr(t)),e}k(t){Fa(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new is(this.O(Jr()),this.O(Jr()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ui{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,s){const i=this.strings;let o=!1;if(i===void 0)t=sr(this,t,e,0),o=!Zr(t)||t!==this._$AH&&t!==WA,o&&(this._$AH=t);else{const n=t;let a,c;for(t=i[0],a=0;a<i.length-1;a++)c=sr(this,n[r+a],e,a),c===WA&&(c=this._$AH[a]),o||(o=!Zr(c)||c!==this._$AH[a]),c===q?t=q:t!==q&&(t+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let mh=class extends Ui{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}};class Bh extends Ui{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}let bh=class extends Ui{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=sr(this,t,e,0)??q)===WA)return;const r=this._$AH,s=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==q&&(r===q||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},vh=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){sr(this,t)}};const Xi=Or.litHtmlPolyfillSupport;Xi==null||Xi(qr,is),(Or.litHtmlVersions??(Or.litHtmlVersions=[])).push("3.3.0");const wh=(A,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new is(t.insertBefore(Jr(),i),i,void 0,e??{})}return s._$AI(A),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis;let Ut=class extends Ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wh(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return WA}};var Ol;Ut._$litElement$=!0,Ut.finalized=!0,(Ol=Fe.litElementHydrateSupport)==null||Ol.call(Fe,{LitElement:Ut});const Wi=Fe.litElementPolyfillSupport;Wi==null||Wi({LitElement:Ut});(Fe.litElementVersions??(Fe.litElementVersions=[])).push("4.2.0");var yh=K`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const ko=new Set,Je=new Map;let be,xa="ltr",_a="en";const Pl=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Pl){const A=new MutationObserver(Gl);xa=document.documentElement.dir||"ltr",_a=document.documentElement.lang||navigator.language,A.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Nl(...A){A.map(t=>{const e=t.$code.toLowerCase();Je.has(e)?Je.set(e,Object.assign(Object.assign({},Je.get(e)),t)):Je.set(e,t),be||(be=t)}),Gl()}function Gl(){Pl&&(xa=document.documentElement.dir||"ltr",_a=document.documentElement.lang||navigator.language),[...ko.keys()].map(A=>{typeof A.requestUpdate=="function"&&A.requestUpdate()})}let Ch=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ko.add(this.host)}hostDisconnected(){ko.delete(this.host)}dir(){return`${this.host.dir||xa}`.toLowerCase()}lang(){return`${this.host.lang||_a}`.toLowerCase()}getTranslationData(t){var e,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s==null?void 0:s.language.toLowerCase(),o=(r=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",n=Je.get(`${i}-${o}`),a=Je.get(i);return{locale:s,language:i,region:o,primary:n,secondary:a}}exists(t,e){var r;const{primary:s,secondary:i}=this.getTranslationData((r=e.lang)!==null&&r!==void 0?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&be&&be[t])}term(t,...e){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(be&&be[t])i=be[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}};var Xl={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(A,t)=>`Go to slide ${A} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:A=>A===0?"No options selected":A===1?"1 option selected":`${A} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:A=>`Slide ${A}`,toggleColorFormat:"Toggle color format"};Nl(Xl);var Qh=Xl,W=class extends Ch{};Nl(Qh);var $=K`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Wl=Object.defineProperty,Uh=Object.defineProperties,Fh=Object.getOwnPropertyDescriptor,xh=Object.getOwnPropertyDescriptors,on=Object.getOwnPropertySymbols,_h=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Yi=(A,t)=>(t=Symbol[A])?t:Symbol.for("Symbol."+A),Ea=A=>{throw TypeError(A)},an=(A,t,e)=>t in A?Wl(A,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):A[t]=e,zt=(A,t)=>{for(var e in t||(t={}))_h.call(t,e)&&an(A,e,t[e]);if(on)for(var e of on(t))Eh.call(t,e)&&an(A,e,t[e]);return A},os=(A,t)=>Uh(A,xh(t)),l=(A,t,e,r)=>{for(var s=r>1?void 0:r?Fh(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Wl(t,e,s),s},Yl=(A,t,e)=>t.has(A)||Ea("Cannot "+e),Hh=(A,t,e)=>(Yl(A,t,"read from private field"),t.get(A)),Ih=(A,t,e)=>t.has(A)?Ea("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),kh=(A,t,e,r)=>(Yl(A,t,"write to private field"),t.set(A,e),e),Sh=function(A,t){this[0]=A,this[1]=t},Lh=A=>{var t=A[Yi("asyncIterator")],e=!1,r,s={};return t==null?(t=A[Yi("iterator")](),r=i=>s[i]=o=>t[i](o)):(t=t.call(A),r=i=>s[i]=o=>{if(e){if(e=!1,i==="throw")throw o;return o}return e=!0,{done:!1,value:new Sh(new Promise(n=>{var a=t[i](o);a instanceof Object||Ea("Object expected"),n(a)}),1)}}),s[Yi("iterator")]=()=>s,r("next"),"throw"in t?r("throw"):s.throw=i=>{throw i},"return"in t&&r("return"),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=A=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(A,t)}):customElements.define(A,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th={attribute:!0,type:String,converter:rr,reflect:!1,hasChanged:Ua},Dh=(A=Th,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((A=Object.create(A)).wrapped=!0),i.set(e.name,A),r==="accessor"){const{name:o}=e;return{set(n){const a=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,a,A)},init(n){return n!==void 0&&this.C(o,void 0,A,n),n}}}if(r==="setter"){const{name:o}=e;return function(n){const a=this[o];t.call(this,n),this.requestUpdate(o,a,A)}}throw Error("Unsupported decorator location: "+r)};function u(A){return(t,e)=>typeof e=="object"?Dh(A,t,e):((r,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(A,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(A){return u({...A,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ns(A){return(t,e)=>{const r=typeof t=="function"?t:t[e];Object.assign(r,A)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jl=(A,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(A,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(A,t){return(e,r,s)=>{const i=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(A))??null};return Jl(e,r,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kh(A){return(t,e)=>Jl(t,e,{async get(){var r;return await this.updateComplete,((r=this.renderRoot)==null?void 0:r.querySelector(A))??null}})}var qs,D=class extends Ut{constructor(){super(),Ih(this,qs,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([A,t])=>{this.constructor.define(A,t)})}emit(A,t){const e=new CustomEvent(A,zt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(A,t=this,e={}){const r=customElements.get(A);if(!r){try{customElements.define(A,t,e)}catch{customElements.define(A,class extends t{},e)}return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in r&&r.version&&(i=" v"+r.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${A}>${s}, but <${A}>${i} has already been registered.`)}attributeChangedCallback(A,t,e){Hh(this,qs)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),kh(this,qs,!0)),super.attributeChangedCallback(A,t,e)}willUpdate(A){super.willUpdate(A),this.initialReflectedProperties.forEach((t,e)=>{A.has(e)&&this[e]==null&&(this[e]=t)})}};qs=new WeakMap;D.version="2.20.1";D.dependencies={};l([u()],D.prototype,"dir",2);l([u()],D.prototype,"lang",2);var ls=class extends D{constructor(){super(...arguments),this.localize=new W(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ls.styles=[$,yh];var Br=new WeakMap,br=new WeakMap,vr=new WeakMap,Ji=new WeakSet,vs=new WeakMap,Pt=class{constructor(A,t){this.handleFormData=e=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!o&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(s,n.toString())}):e.formData.append(s,i.toString()))},this.handleFormSubmit=e=>{var r;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Br.get(this.form))==null||r.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),vs.set(this.host,[])},this.handleInteraction=e=>{const r=vs.get(this.host);r.includes(e.type)||r.push(e.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const r of e)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const r of e)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=A).addController(this),this.options=zt({form:e=>{const r=e.form;if(r){const i=e.getRootNode().querySelector(`#${r}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var r;return(r=e.disabled)!=null?r:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,r)=>e.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const A=this.options.form(this.host);A&&this.attachForm(A),vs.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),vs.delete(this.host),this.options.assumeInteractionOn.forEach(A=>{this.host.removeEventListener(A,this.handleInteraction)})}hostUpdated(){const A=this.options.form(this.host);A||this.detachForm(),A&&this.form!==A&&(this.detachForm(),this.attachForm(A)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(A){A?(this.form=A,Br.has(this.form)?Br.get(this.form).add(this.host):Br.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),br.has(this.form)||(br.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),vr.has(this.form)||(vr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const A=Br.get(this.form);A&&(A.delete(this.host),A.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),br.has(this.form)&&(this.form.reportValidity=br.get(this.form),br.delete(this.form)),vr.has(this.form)&&(this.form.checkValidity=vr.get(this.form),vr.delete(this.form)),this.form=void 0))}setUserInteracted(A,t){t?Ji.add(A):Ji.delete(A),A.requestUpdate()}doAction(A,t){if(this.form){const e=document.createElement("button");e.type=A,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&e.setAttribute(r,t.getAttribute(r))})),this.form.append(e),e.click(),e.remove()}}getForm(){var A;return(A=this.form)!=null?A:null}reset(A){this.doAction("reset",A)}submit(A){this.doAction("submit",A)}setValidity(A){const t=this.host,e=!!Ji.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!A),t.toggleAttribute("data-valid",A),t.toggleAttribute("data-user-invalid",!A&&e),t.toggleAttribute("data-user-valid",A&&e)}updateValidity(){const A=this.host;this.setValidity(A.validity.valid)}emitInvalidEvent(A){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});A||t.preventDefault(),this.host.dispatchEvent(t)||A==null||A.preventDefault()}},Fi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Oh=Object.freeze(os(zt({},Fi),{valid:!1,valueMissing:!0})),$h=Object.freeze(os(zt({},Fi),{valid:!1,customError:!0})),Zl=K`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,VA=class{constructor(A,...t){this.slotNames=[],this.handleSlotChange=e=>{const r=e.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=A).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(A=>{if(A.nodeType===A.TEXT_NODE&&A.textContent.trim()!=="")return!0;if(A.nodeType===A.ELEMENT_NODE){const t=A;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(A){return this.host.querySelector(`:scope > [slot="${A}"]`)!==null}test(A){return A==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(A)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Mh(A){if(!A)return"";const t=A.assignedNodes({flatten:!0});let e="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e}var So="";function Lo(A){So=A}function Rh(A=""){if(!So){const t=[...document.getElementsByTagName("script")],e=t.find(r=>r.hasAttribute("data-shoelace"));if(e)Lo(e.getAttribute("data-shoelace"));else{const r=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";r&&(s=r.getAttribute("src")),Lo(s.split("/").slice(0,-1).join("/"))}}return So.replace(/\/$/,"")+(A?`/${A.replace(/^\//,"")}`:"")}var Vh={name:"default",resolver:A=>Rh(`assets/icons/${A}.svg`)},zh=Vh,nn={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ph={name:"system",resolver:A=>A in nn?`data:image/svg+xml,${encodeURIComponent(nn[A])}`:""},Nh=Ph,Gh=[zh,Nh],To=[];function Xh(A){To.push(A)}function Wh(A){To=To.filter(t=>t!==A)}function ln(A){return Gh.find(t=>t.name===A)}var Yh=K`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function x(A,t){const e=zt({waitUntilFirstUpdate:!1},t);return(r,s)=>{const{update:i}=r,o=Array.isArray(A)?A:[A];r.update=function(n){o.forEach(a=>{const c=a;if(n.has(c)){const h=n.get(c),d=this[c];h!==d&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](h,d)}}),i.call(this,n)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jh=(A,t)=>(A==null?void 0:A._$litType$)!==void 0,ql=A=>A.strings===void 0,Zh={},qh=(A,t=Zh)=>A._$AH=t;var wr=Symbol(),ws=Symbol(),Zi,qi=new Map,eA=class extends D{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(A,t){var e;let r;if(t!=null&&t.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${A}"></use>
      </svg>`,this.svg;try{if(r=await fetch(A,{mode:"cors"}),!r.ok)return r.status===410?wr:ws}catch{return ws}try{const s=document.createElement("div");s.innerHTML=await r.text();const i=s.firstElementChild;if(((e=i==null?void 0:i.tagName)==null?void 0:e.toLowerCase())!=="svg")return wr;Zi||(Zi=new DOMParser);const n=Zi.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):wr}catch{return wr}}connectedCallback(){super.connectedCallback(),Xh(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Wh(this)}getIconSource(){const A=ln(this.library);return this.name&&A?{url:A.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var A;const{url:t,fromLibrary:e}=this.getIconSource(),r=e?ln(this.library):void 0;if(!t){this.svg=null;return}let s=qi.get(t);if(s||(s=this.resolveIcon(t,r),qi.set(t,s)),!this.initialRender)return;const i=await s;if(i===ws&&qi.delete(t),t===this.getIconSource().url){if(Jh(i)){if(this.svg=i,r){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&o&&r.mutator(o)}return}switch(i){case ws:case wr:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(A=r==null?void 0:r.mutator)==null||A.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};eA.styles=[$,Yh];l([L()],eA.prototype,"svg",2);l([u({reflect:!0})],eA.prototype,"name",2);l([u()],eA.prototype,"src",2);l([u()],eA.prototype,"label",2);l([u({reflect:!0})],eA.prototype,"library",2);l([x("label")],eA.prototype,"handleLabelChange",1);l([x(["name","src","library"])],eA.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},cs=A=>(...t)=>({_$litDirective$:A,values:t});let ds=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=cs(class extends ds{constructor(A){var t;if(super(A),A.type!==Qt.ATTRIBUTE||A.name!=="class"||((t=A.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(A){return" "+Object.keys(A).filter(t=>A[t]).join(" ")+" "}update(A,[t]){var r,s;if(this.st===void 0){this.st=new Set,A.strings!==void 0&&(this.nt=new Set(A.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const e=A.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const o=!!t[i];o===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return WA}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=Symbol.for(""),jh=A=>{if((A==null?void 0:A.r)===jl)return A==null?void 0:A._$litStatic$},ni=(A,...t)=>({_$litStatic$:t.reduce((e,r,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+A[s+1],A[0]),r:jl}),cn=new Map,Au=A=>(t,...e)=>{const r=e.length;let s,i;const o=[],n=[];let a,c=0,h=!1;for(;c<r;){for(a=t[c];c<r&&(i=e[c],(s=jh(i))!==void 0);)a+=s+t[++c],h=!0;c!==r&&n.push(i),o.push(a),c++}if(c===r&&o.push(t[r]),h){const d=o.join("$$lit$$");(t=cn.get(d))===void 0&&(o.raw=o,cn.set(d,t=o)),e=n}return A(t,...e)},$r=Au(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=A=>A??q;var J=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new VA(this,"[default]","prefix","suffix"),this.localize=new W(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Fi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(A){this.button.focus(A)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(A){this.isButton()&&(this.button.setCustomValidity(A),this.formControlController.updateValidity())}render(){const A=this.isLink(),t=A?ni`a`:ni`button`;return $r`
      <${t}
        part="base"
        class=${O({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${T(A?void 0:this.disabled)}
        type=${T(A?void 0:this.type)}
        title=${this.title}
        name=${T(A?void 0:this.name)}
        value=${T(A?void 0:this.value)}
        href=${T(A&&!this.disabled?this.href:void 0)}
        target=${T(A?this.target:void 0)}
        download=${T(A?this.download:void 0)}
        rel=${T(A?this.rel:void 0)}
        role=${T(A?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?$r` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?$r`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};J.styles=[$,Zl];J.dependencies={"sl-icon":eA,"sl-spinner":ls};l([H(".button")],J.prototype,"button",2);l([L()],J.prototype,"hasFocus",2);l([L()],J.prototype,"invalid",2);l([u()],J.prototype,"title",2);l([u({reflect:!0})],J.prototype,"variant",2);l([u({reflect:!0})],J.prototype,"size",2);l([u({type:Boolean,reflect:!0})],J.prototype,"caret",2);l([u({type:Boolean,reflect:!0})],J.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],J.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],J.prototype,"outline",2);l([u({type:Boolean,reflect:!0})],J.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],J.prototype,"circle",2);l([u()],J.prototype,"type",2);l([u()],J.prototype,"name",2);l([u()],J.prototype,"value",2);l([u()],J.prototype,"href",2);l([u()],J.prototype,"target",2);l([u()],J.prototype,"rel",2);l([u()],J.prototype,"download",2);l([u()],J.prototype,"form",2);l([u({attribute:"formaction"})],J.prototype,"formAction",2);l([u({attribute:"formenctype"})],J.prototype,"formEnctype",2);l([u({attribute:"formmethod"})],J.prototype,"formMethod",2);l([u({attribute:"formnovalidate",type:Boolean})],J.prototype,"formNoValidate",2);l([u({attribute:"formtarget"})],J.prototype,"formTarget",2);l([x("disabled",{waitUntilFirstUpdate:!0})],J.prototype,"handleDisabledChange",1);var tu=J;J.define("sl-button");function*Ha(A=document.activeElement){A!=null&&(yield A,"shadowRoot"in A&&A.shadowRoot&&A.shadowRoot.mode!=="closed"&&(yield*Lh(Ha(A.shadowRoot.activeElement))))}function Ac(){return[...Ha()].pop()}var dn=new WeakMap;function tc(A){let t=dn.get(A);return t||(t=window.getComputedStyle(A,null),dn.set(A,t)),t}function eu(A){if(typeof A.checkVisibility=="function")return A.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=tc(A);return t.visibility!=="hidden"&&t.display!=="none"}function ru(A){const t=tc(A),{overflowY:e,overflowX:r}=t;return e==="scroll"||r==="scroll"?!0:e!=="auto"||r!=="auto"?!1:A.scrollHeight>A.clientHeight&&e==="auto"||A.scrollWidth>A.clientWidth&&r==="auto"}function su(A){const t=A.tagName.toLowerCase(),e=Number(A.getAttribute("tabindex"));if(A.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||A.hasAttribute("disabled")||A.closest("[inert]"))return!1;if(t==="input"&&A.getAttribute("type")==="radio"){const i=A.getRootNode(),o=`input[type='radio'][name="${A.getAttribute("name")}"]`,n=i.querySelector(`${o}:checked`);return n?n===A:i.querySelector(o)===A}return eu(A)?(t==="audio"||t==="video")&&A.hasAttribute("controls")||A.hasAttribute("tabindex")||A.hasAttribute("contenteditable")&&A.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:ru(A):!1}function iu(A){var t,e;const r=Do(A),s=(t=r[0])!=null?t:null,i=(e=r[r.length-1])!=null?e:null;return{start:s,end:i}}function ou(A,t){var e;return((e=A.getRootNode({composed:!0}))==null?void 0:e.host)!==t}function Do(A){const t=new WeakMap,e=[];function r(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||t.has(s))return;t.set(s,!0),!e.includes(s)&&su(s)&&e.push(s),s instanceof HTMLSlotElement&&ou(s,A)&&s.assignedElements({flatten:!0}).forEach(i=>{r(i)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&r(s.shadowRoot)}for(const i of s.children)r(i)}return r(A),e.sort((s,i)=>{const o=Number(s.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-o})}var yr=[],ec=class{constructor(A){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Ac();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Do(this.element);let i=s.findIndex(n=>n===r);this.previousFocus=this.currentFocus;const o=this.tabDirection==="forward"?1:-1;for(;;){i+o>=s.length?i=0:i+o<0?i=s.length-1:i+=o,this.previousFocus=this.currentFocus;const n=s[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;t.preventDefault(),this.currentFocus=n,(e=this.currentFocus)==null||e.focus({preventScroll:!1});const a=[...Ha()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=A,this.elementsWithTabbableControls=["iframe"]}activate(){yr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){yr=yr.filter(A=>A!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return yr[yr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const A=Do(this.element);if(!this.element.matches(":focus-within")){const t=A[0],e=A[A.length-1],r=this.tabDirection==="forward"?t:e;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(A){return this.elementsWithTabbableControls.includes(A.tagName.toLowerCase())||A.hasAttribute("controls")}};function au(A,t){return{top:Math.round(A.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(A.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Ko=new Set;function nu(){const A=document.documentElement.clientWidth;return Math.abs(window.innerWidth-A)}function lu(){const A=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(A)||!A?0:A}function Mr(A){if(Ko.add(A),!document.documentElement.classList.contains("sl-scroll-lock")){const t=nu()+lu();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Rr(A){Ko.delete(A),Ko.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Oo(A,t,e="vertical",r="smooth"){const s=au(A,t),i=s.top+t.scrollTop,o=s.left+t.scrollLeft,n=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(o<n?t.scrollTo({left:o,behavior:r}):o+A.clientWidth>a&&t.scrollTo({left:o-t.offsetWidth+A.clientWidth,behavior:r})),(e==="vertical"||e==="both")&&(i<c?t.scrollTo({top:i,behavior:r}):i+A.clientHeight>h&&t.scrollTo({top:i-t.offsetHeight+A.clientHeight,behavior:r}))}var cu=K`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ia=A=>{var t;const{activeElement:e}=document;e&&A.contains(e)&&((t=document.activeElement)==null||t.blur())},du=K`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,CA=class extends D{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(A){this.disabled&&(A.preventDefault(),A.stopPropagation())}click(){this.button.click()}focus(A){this.button.focus(A)}blur(){this.button.blur()}render(){const A=!!this.href,t=A?ni`a`:ni`button`;return $r`
      <${t}
        part="base"
        class=${O({"icon-button":!0,"icon-button--disabled":!A&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${T(A?void 0:this.disabled)}
        type=${T(A?void 0:"button")}
        href=${T(A?this.href:void 0)}
        target=${T(A?this.target:void 0)}
        download=${T(A?this.download:void 0)}
        rel=${T(A&&this.target?"noreferrer noopener":void 0)}
        role=${T(A?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${T(this.name)}
          library=${T(this.library)}
          src=${T(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};CA.styles=[$,du];CA.dependencies={"sl-icon":eA};l([H(".icon-button")],CA.prototype,"button",2);l([L()],CA.prototype,"hasFocus",2);l([u()],CA.prototype,"name",2);l([u()],CA.prototype,"library",2);l([u()],CA.prototype,"src",2);l([u()],CA.prototype,"href",2);l([u()],CA.prototype,"target",2);l([u()],CA.prototype,"download",2);l([u()],CA.prototype,"label",2);l([u({type:Boolean,reflect:!0})],CA.prototype,"disabled",2);var rc=new Map,hu=new WeakMap;function uu(A){return A??{keyframes:[],options:{duration:0}}}function hn(A,t){return t.toLowerCase()==="rtl"?{keyframes:A.rtlKeyframes||A.keyframes,options:A.options}:A}function j(A,t){rc.set(A,uu(t))}function aA(A,t,e){const r=hu.get(A);if(r!=null&&r[t])return hn(r[t],e.dir);const s=rc.get(t);return s?hn(s,e.dir):{keyframes:[],options:{duration:0}}}function RA(A,t){return new Promise(e=>{function r(s){s.target===A&&(A.removeEventListener(t,r),e())}A.addEventListener(t,r)})}function cA(A,t,e){return new Promise(r=>{if((e==null?void 0:e.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=A.animate(t,os(zt({},e),{duration:$o()?0:e.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})})}function un(A){return A=A.toString().toLowerCase(),A.indexOf("ms")>-1?parseFloat(A):A.indexOf("s")>-1?parseFloat(A)*1e3:parseFloat(A)}function $o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bA(A){return Promise.all(A.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function li(A,t){return A.map(e=>os(zt({},e),{height:e.height==="auto"?`${t}px`:e.height}))}var _t=class extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"footer"),this.localize=new W(this),this.modal=new ec(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=A=>{A.key==="Escape"&&this.modal.isActive()&&this.open&&(A.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Mr(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Rr(this),this.removeOpenListeners()}requestClose(A){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:A}}).defaultPrevented){const e=aA(this,"dialog.denyClose",{dir:this.localize.dir()});cA(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var A;"CloseWatcher"in window?((A=this.closeWatcher)==null||A.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var A;(A=this.closeWatcher)==null||A.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Mr(this);const A=this.querySelector("[autofocus]");A&&A.removeAttribute("autofocus"),await Promise.all([bA(this.dialog),bA(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(A?A.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),A&&A.setAttribute("autofocus","")});const t=aA(this,"dialog.show",{dir:this.localize.dir()}),e=aA(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([cA(this.panel,t.keyframes,t.options),cA(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{Ia(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([bA(this.dialog),bA(this.overlay)]);const A=aA(this,"dialog.hide",{dir:this.localize.dir()}),t=aA(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([cA(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),cA(this.panel,A.keyframes,A.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Rr(this);const e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,RA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,RA(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${O({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${T(this.noHeader?this.label:void 0)}
          aria-labelledby=${T(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":w`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};_t.styles=[$,cu];_t.dependencies={"sl-icon-button":CA};l([H(".dialog")],_t.prototype,"dialog",2);l([H(".dialog__panel")],_t.prototype,"panel",2);l([H(".dialog__overlay")],_t.prototype,"overlay",2);l([u({type:Boolean,reflect:!0})],_t.prototype,"open",2);l([u({reflect:!0})],_t.prototype,"label",2);l([u({attribute:"no-header",type:Boolean,reflect:!0})],_t.prototype,"noHeader",2);l([x("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);j("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});j("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});j("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});j("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});j("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});_t.define("sl-dialog");var pu=K`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Et=class extends D{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return w`
      <span
        part="base"
        class=${O({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?w` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Et.styles=[$,pu];Et.dependencies={"sl-icon":eA};l([L()],Et.prototype,"checked",2);l([L()],Et.prototype,"hasFocus",2);l([u()],Et.prototype,"value",2);l([u({reflect:!0})],Et.prototype,"size",2);l([u({type:Boolean,reflect:!0})],Et.prototype,"disabled",2);l([x("checked")],Et.prototype,"handleCheckedChange",1);l([x("disabled",{waitUntilFirstUpdate:!0})],Et.prototype,"handleDisabledChange",1);Et.define("sl-radio");var fu=K`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ar=(A="value")=>(t,e)=>{const r=t.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(i,o,n){var a;const c=r.getPropertyOptions(A),h=typeof c.attribute=="string"?c.attribute:A;if(i===h){const d=c.converter||rr,g=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:rr.fromAttribute)(n,c.type);this[A]!==g&&(this[e]=g)}s.call(this,i,o,n)}},Le=K`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=cs(class extends ds{constructor(A){if(super(A),A.type!==Qt.PROPERTY&&A.type!==Qt.ATTRIBUTE&&A.type!==Qt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ql(A))throw Error("`live` bindings can only contain a single expression")}render(A){return A}update(A,[t]){if(t===WA||t===q)return t;const e=A.element,r=A.name;if(A.type===Qt.PROPERTY){if(t===e[r])return WA}else if(A.type===Qt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return WA}else if(A.type===Qt.ATTRIBUTE&&e.getAttribute(r)===t+"")return WA;return qh(A),t}});var R=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new VA(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var A;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((A=this.input)==null?void 0:A.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(A){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=A,this.value=this.__dateInput.value}get valueAsNumber(){var A;return this.__numberInput.value=this.value,((A=this.input)==null?void 0:A.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(A){this.__numberInput.valueAsNumber=A,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(A){A.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}handleKeyDown(A){const t=A.metaKey||A.ctrlKey||A.shiftKey||A.altKey;A.key==="Enter"&&!t&&setTimeout(()=>{!A.defaultPrevented&&!A.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(A){this.input.focus(A)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(A,t,e="none"){this.input.setSelectionRange(A,t,e)}setRangeText(A,t,e,r="preserve"){const s=t??this.input.selectionStart,i=e??this.input.selectionEnd;this.input.setRangeText(A,s,i,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!A,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return w`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${T(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${T(this.placeholder)}
              minlength=${T(this.minlength)}
              maxlength=${T(this.maxlength)}
              min=${T(this.min)}
              max=${T(this.max)}
              step=${T(this.step)}
              .value=${He(this.value)}
              autocapitalize=${T(this.autocapitalize)}
              autocomplete=${T(this.autocomplete)}
              autocorrect=${T(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${T(this.pattern)}
              enterkeyhint=${T(this.enterkeyhint)}
              inputmode=${T(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?w`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?w`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?w`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:w`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};R.styles=[$,Le,fu];R.dependencies={"sl-icon":eA};l([H(".input__control")],R.prototype,"input",2);l([L()],R.prototype,"hasFocus",2);l([u()],R.prototype,"title",2);l([u({reflect:!0})],R.prototype,"type",2);l([u()],R.prototype,"name",2);l([u()],R.prototype,"value",2);l([ar()],R.prototype,"defaultValue",2);l([u({reflect:!0})],R.prototype,"size",2);l([u({type:Boolean,reflect:!0})],R.prototype,"filled",2);l([u({type:Boolean,reflect:!0})],R.prototype,"pill",2);l([u()],R.prototype,"label",2);l([u({attribute:"help-text"})],R.prototype,"helpText",2);l([u({type:Boolean})],R.prototype,"clearable",2);l([u({type:Boolean,reflect:!0})],R.prototype,"disabled",2);l([u()],R.prototype,"placeholder",2);l([u({type:Boolean,reflect:!0})],R.prototype,"readonly",2);l([u({attribute:"password-toggle",type:Boolean})],R.prototype,"passwordToggle",2);l([u({attribute:"password-visible",type:Boolean})],R.prototype,"passwordVisible",2);l([u({attribute:"no-spin-buttons",type:Boolean})],R.prototype,"noSpinButtons",2);l([u({reflect:!0})],R.prototype,"form",2);l([u({type:Boolean,reflect:!0})],R.prototype,"required",2);l([u()],R.prototype,"pattern",2);l([u({type:Number})],R.prototype,"minlength",2);l([u({type:Number})],R.prototype,"maxlength",2);l([u()],R.prototype,"min",2);l([u()],R.prototype,"max",2);l([u()],R.prototype,"step",2);l([u()],R.prototype,"autocapitalize",2);l([u()],R.prototype,"autocorrect",2);l([u()],R.prototype,"autocomplete",2);l([u({type:Boolean})],R.prototype,"autofocus",2);l([u()],R.prototype,"enterkeyhint",2);l([u({type:Boolean,converter:{fromAttribute:A=>!(!A||A==="false"),toAttribute:A=>A?"true":"false"}})],R.prototype,"spellcheck",2);l([u()],R.prototype,"inputmode",2);l([x("disabled",{waitUntilFirstUpdate:!0})],R.prototype,"handleDisabledChange",1);l([x("step",{waitUntilFirstUpdate:!0})],R.prototype,"handleStepChange",1);l([x("value",{waitUntilFirstUpdate:!0})],R.prototype,"handleValueChange",1);var pn=R;R.define("sl-input");var gu=K`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,QA=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{value:A=>A.checked?A.value||"on":void 0,defaultValue:A=>A.defaultChecked,setValue:(A,t)=>A.checked=t}),this.hasSlotController=new VA(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(A){this.input.focus(A)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!A;return w`
      <div
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${O({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${T(this.value)}
            .indeterminate=${He(this.indeterminate)}
            .checked=${He(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?w`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?w`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};QA.styles=[$,Le,gu];QA.dependencies={"sl-icon":eA};l([H('input[type="checkbox"]')],QA.prototype,"input",2);l([L()],QA.prototype,"hasFocus",2);l([u()],QA.prototype,"title",2);l([u()],QA.prototype,"name",2);l([u()],QA.prototype,"value",2);l([u({reflect:!0})],QA.prototype,"size",2);l([u({type:Boolean,reflect:!0})],QA.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],QA.prototype,"checked",2);l([u({type:Boolean,reflect:!0})],QA.prototype,"indeterminate",2);l([ar("checked")],QA.prototype,"defaultChecked",2);l([u({reflect:!0})],QA.prototype,"form",2);l([u({type:Boolean,reflect:!0})],QA.prototype,"required",2);l([u({attribute:"help-text"})],QA.prototype,"helpText",2);l([x("disabled",{waitUntilFirstUpdate:!0})],QA.prototype,"handleDisabledChange",1);l([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],QA.prototype,"handleStateChange",1);QA.define("sl-checkbox");ls.define("sl-spinner");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=(A,t)=>{var r;const e=A._$AN;if(e===void 0)return!1;for(const s of e)(r=s._$AO)==null||r.call(s,t,!1),Vr(s,t);return!0},ci=A=>{let t,e;do{if((t=A._$AM)===void 0)break;e=t._$AN,e.delete(A),A=t}while((e==null?void 0:e.size)===0)},sc=A=>{for(let t;t=A._$AM;A=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(A))break;e.add(A),bu(t)}};function mu(A){this._$AN!==void 0?(ci(this),this._$AM=A,sc(this)):this._$AM=A}function Bu(A,t=!1,e=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)Vr(r[i],!1),ci(r[i]);else r!=null&&(Vr(r,!1),ci(r));else Vr(this,A)}const bu=A=>{A.type==Qt.CHILD&&(A._$AP??(A._$AP=Bu),A._$AQ??(A._$AQ=mu))};let vu=class extends ds{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),sc(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),e&&(Vr(this,t),ci(this))}setValue(t){if(ql(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ic=()=>new wu;class wu{}const ji=new WeakMap,oc=cs(class extends vu{render(A){return q}update(A,[t]){var r;const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(r=A.options)==null?void 0:r.host,this.rt(this.ct=A.element)),q}rt(A){if(this.isConnected||(A=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=ji.get(t);e===void 0&&(e=new WeakMap,ji.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,A),A!==void 0&&this.G.call(this.ht,A)}else this.G.value=A}get lt(){var A,t;return typeof this.G=="function"?(A=ji.get(this.ht??globalThis))==null?void 0:A.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function yu(A){const t=Cu(A);return w`<sl-button @click=${t}>Spausdinti</sl-button>`}function Cu(A){return()=>{const t=document.querySelector("link"),e=window.open("","","");if(!e)return;const r=e.document;r.writeln(A.outerHTML),t&&r.writeln(t.outerHTML),r.close(),e.onload=()=>{e.print(),e.close()}}}function*ac(A,t){for(let e=A;e<t;e++)yield e}const ka=1e3*60*60*24,nc=0;function di(A,t){const e=(t.getTime()-A.getTime())/ka;return Math.round(e)}function lc(A,t){const e=new Date(t===11?A+1:A,t===11?0:t+1,1,0,0,0,0),r=new Date(A,t,1,0,0,0,0);return di(r,e)}function fn(A){return!isNaN(A)&&A instanceof Date}function Mo(A){return new Date(A.year,A.month-1,A.day,0,0,0,0)}function gn(A){return{day:A.getDate(),month:A.getMonth()+1,year:A.getFullYear()}}function Qu(A){return A.month===1&&A.day===1||A.month===2&&A.day===16||A.month===3&&A.day===11||A.month===5&&A.day===1||Fu(A)||Uu(A)||A.month===6&&A.day===24||A.month===7&&A.day===6||A.month===8&&A.day===15||A.month===11&&A.day===1||A.month===11&&A.day===2||A.month===12&&A.day===24||A.month===12&&A.day===25||A.month===12&&A.day===26||xu(A)}function Uu(A){return A.month===5&&A.day===cc(A)}function Fu(A){return A.month===6&&A.day===cc(A)}function xu(A){const t=A.year,e=t%19,r=t>>2,s=Math.floor(r/25)+1;let i=s*3>>2,o=(e*19-Math.floor((s*8+5)/25)+i+15)%30;o+=29578-e-o*32>>10,o-=(t%7+r-i+o+2)%7,i=o>>5;const n=o-i*31,a=i+3,c=new Date(A.year,a-1,n),h=new Date(c.getTime()+ka);return A.month===c.getMonth()+1&&A.day===c.getDate()||A.month===h.getMonth()+1&&A.day===h.getDate()}function cc(A){const t=lc(A.year,A.month-1),e=ac(1,t+1).find(r=>new Date(A.year,A.month-1,r).getDay()===nc);return e||t}function*_u(A){const t=new Date(A,0,1,12,0,0,0).getTime();for(let e=0;e<366;e++){const r=new Date(t+ka*e),s={year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate()};if(s.year!==A)break;yield s}}function dc(A){return A instanceof Date?di(new Date(A.getFullYear(),0,1),A):di(new Date(A.year,0,1),Mo(A))}function mn(A){return A.year+"-"+A.month.toString().padStart(2,"0")+"-"+A.day.toString().padStart(2,"0")}function Bn(A){if(!A)return;const t=new Date(A);return Eu(t)}function Eu(A){return{year:A.getFullYear(),month:A.getMonth()+1,day:A.getDate()}}var rs,Qe,Ar;class Hu{constructor(t,e,r){ct(this,rs);ct(this,Qe);ct(this,Ar);Kt(this,rs,t),Kt(this,Qe,e),Kt(this,Ar,r)}get month(){return pA(this,Qe)}get days(){return pA(this,Ar)}get name(){switch(pA(this,Qe)+1){case 1:return"Sausis";case 2:return"Vasaris";case 3:return"Kovas";case 4:return"Balandis";case 5:return"Gegužė";case 6:return"Birželis";case 7:return"Liepa";case 8:return"Rugpjūtis";case 9:return"Rugsėjis";case 10:return"Spalis";case 11:return"Lapkritis";case 12:return"Gruodis";default:return""}}*toMatrix(){let t=[null,null,null,null,null,null,null];for(const e of pA(this,Ar)){const s=new Date(pA(this,rs),pA(this,Qe),e.day).getDay(),i=(s+6)%7;t[i]=e,s===nc&&(yield t,t=[])}t.some(e=>e)&&(yield t)}}rs=new WeakMap,Qe=new WeakMap,Ar=new WeakMap;var Jt,Zt,Se,Ro,hc;class Iu{constructor(t){ct(this,Se);ct(this,Jt);ct(this,Zt);Kt(this,Jt,t),Kt(this,Zt,new Map)}get year(){return pA(this,Jt)}setDayType(t,e){const r=fe(this,Se,Ro).call(this,t);r&&(r.dayType=e)}setHoliday(t,e){const r=fe(this,Se,Ro).call(this,t);r&&(r.isHoliday=e)}*months(){for(let t=0;t<12;t++){const e=lc(pA(this,Jt),t),r=[...ac(1,e+1).map(s=>fe(this,Se,hc).call(this,s,t))];yield new Hu(pA(this,Jt),t,r)}}}Jt=new WeakMap,Zt=new WeakMap,Se=new WeakSet,Ro=function(t){return pA(this,Zt).has(t)||pA(this,Zt).set(t,{dayType:null,isHoliday:!1}),pA(this,Zt).get(t)},hc=function(t,e){const r=dc(new Date(pA(this,Jt),e,t)),s=pA(this,Zt).get(r);return s?{day:t,metadata:s}:{day:t,metadata:{dayType:null,isHoliday:!1}}};function*ku(A,t){for(const e of t.years)yield Su(A,e)}function Su(A,t){const e={year:t,month:1,day:1},r=new Iu(t);let s=bn(e,A.morning_start_date,12),i=bn(e,A.evening_start_date,12);for(const o of _u(t)){const n=dc(o);s<4&&r.setDayType(n,"morning"),i<4&&r.setDayType(n,"evening"),Qu(o)&&r.setHoliday(n,!0),s=(s+1)%12,i=(i+1)%12}return r}function bn(A,t,e){return(di(Mo(t),Mo(A))%e+e)%e}const Lu=["P","A","T","K","P","Š","S"],Tu=Lu.map(A=>w`<th>${A}</th>`);function Du(A){let t=A.dayType??"";return A.isHoliday&&(t+=" holiday"),t.trimStart()}function Ku(A){return w`<span class=${Du(A.metadata)}>${A.day}</span>`}function Ou(A){const t=A.map(e=>w`<td>${e?Ku(e):""}</td>`);return w`<tr>${t}</tr>`}function $u(A){const t=A.toMatrix().map(Ou);return w`
        <table>
            <thead><tr>${Tu}</tr></thead>
            <tbody>${t}</tbody>
        </table>`}function Mu(A){return w`
        <div class="month">
            <h2>${A.name}</h2>
            ${$u(A)}
        </div>`}function Ru(A,t){return w`
        <div class="header">
            <h1>${A}</h1>
            <span>${t??""}</span>
        </div>`}function Vu(A,t){const e=A.months().map(Mu);return w`
        <div>
            ${Ru(A.year,t)}
            ${e}
        </div>`}function zu(A,t){return A?ku(A,{years:t}).map(e=>Vu(e,A.name)):q}const Ao="tt-users";var tr,Ue,ss,er,js;class Pu{constructor(t){ct(this,er);ct(this,tr);ct(this,Ue,[]);ct(this,ss);Kt(this,tr,t),t.addController(this)}get users(){return pA(this,Ue)}get selectedUser(){return pA(this,ss)}set selectedUser(t){Kt(this,ss,t),pA(this,tr).requestUpdate()}hostConnected(){const t=localStorage.getItem(Ao);if(t){const e=JSON.parse(t);fe(this,er,js).call(this,e),e.length&&(this.selectedUser=e[0])}}addUser(t){const e=pA(this,Ue),r=e.findIndex(s=>s.name==t.name);r>=0?e[r]=t:e.push(t),localStorage.setItem(Ao,JSON.stringify(e)),fe(this,er,js).call(this,e),this.selectedUser=t}removeUser(t){var s;let e=pA(this,Ue);const r=e.findIndex(i=>i.name==t);r>=0&&(e=e.filter((i,o)=>o!==r)),localStorage.setItem(Ao,JSON.stringify(e)),fe(this,er,js).call(this,e),((s=this.selectedUser)==null?void 0:s.name)===t&&(this.selectedUser=void 0)}}tr=new WeakMap,Ue=new WeakMap,ss=new WeakMap,er=new WeakSet,js=function(t){Kt(this,Ue,t),pA(this,tr).requestUpdate()};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uc="important",Nu=" !"+uc,DA=cs(class extends ds{constructor(A){var t;if(super(A),A.type!==Qt.ATTRIBUTE||A.name!=="style"||((t=A.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(A){return Object.keys(A).reduce((t,e)=>{const r=A[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(A,[t]){const{style:e}=A.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ft.add(r);const i=typeof s=="string"&&s.endsWith(Nu);r.includes("-")||i?e.setProperty(r,i?s.slice(0,-11):s,i?uc:""):e[r]=s}}return WA}}),rt={userName:"u",morningDate:"m",eveneningDate:"e",years:"y"};function Gu(A){const t=new URL(window.location.href);if(!A){history.pushState(void 0,"",t);return}A.user?(t.searchParams.set(rt.userName,A.user.name),t.searchParams.set(rt.morningDate,mn(A.user.morning_start_date)),t.searchParams.set(rt.eveneningDate,mn(A.user.evening_start_date))):(t.searchParams.delete(rt.userName),t.searchParams.delete(rt.morningDate),t.searchParams.delete(rt.eveneningDate)),A.years&&A.years.length?t.searchParams.set(rt.years,A.years.join(",")):t.searchParams.delete(rt.years),history.pushState(void 0,"",t)}function Xu(){var i;const A=new URLSearchParams(window.location.search),t={},e=A.get(rt.userName),r=Bn(A.get(rt.morningDate)),s=Bn(A.get(rt.eveneningDate));return e&&r&&s&&(t.user={name:e,evening_start_date:s,morning_start_date:r}),t.years=(i=A.get(rt.years))==null?void 0:i.split(",").map(o=>parseInt(o)).filter(o=>!isNaN(o)),t}var Wu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,pc=A=>{throw TypeError(A)},fc=(A,t,e,r)=>{for(var s=r>1?void 0:r?Yu(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Wu(t,e,s),s},gc=(A,t,e)=>t.has(A)||pc("Cannot "+e),st=(A,t,e)=>(gc(A,t,"read from private field"),e?e.call(A):t.get(A)),to=(A,t,e)=>t.has(A)?pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),ys=(A,t,e)=>(gc(A,t,"access private method"),e),it,Ai,Xe,mc,Bc,bc,vc;let Vo=class extends Ut{constructor(){super(...arguments),to(this,Xe),this.years=[],to(this,it,new Pu(this)),to(this,Ai,ic())}createRenderRoot(){return this}connectedCallback(){super.connectedCallback();const A=Xu();if(A){const t=A.user;if(t){const r=st(this,it).users.find(s=>s.name===t.name);r?st(this,it).selectedUser=r:st(this,it).addUser(t)}const e=A.years;e!=null&&e.length&&(this.years=e)}}willUpdate(){Gu({user:st(this,it).selectedUser,years:this.years})}firstUpdated(){st(this,Ai).value&&this.update(new Map)}render(){const A=st(this,it).users,t=st(this,it).selectedUser,e=this.years,r=st(this,Ai),s=DA({display:"flex","flex-direction":"column",gap:"1rem"});return w`
            <div style=${s}>
                <user-selector
                    id="user-selector"
                    .users=${A}
                    selectedUser=${t==null?void 0:t.name}
                    @user-add=${ys(this,Xe,mc)}
                    @user-delete=${ys(this,Xe,Bc)}
                    @user-select=${ys(this,Xe,bc)}>
                </user-selector>

                ${t?w`<year-selector years=${e.join(",")} id="year-selector" @change=${ys(this,Xe,vc)}></year-selector>`:q}
                
                ${t&&e.length&&r.value?w`<div>
                        ${yu(r.value)}
                        <tt-screenshot-action .content=${r.value}></tt-screenshot-action>
                    </div>`:q}
            </div>
            <section id="timetables" ${oc(r)}>
                ${t?zu(t,e):q}
            </section>
            `}};it=new WeakMap;Ai=new WeakMap;Xe=new WeakSet;mc=function(A){st(this,it).addUser(A.detail)};Bc=function(A){st(this,it).removeUser(A.detail.name),st(this,it).selectedUser||(this.years=[])};bc=function(A){st(this,it).selectedUser=A.detail};vc=function(A){this.years=[...A.detail]};fc([L()],Vo.prototype,"years",2);Vo=fc([as("timetable-app")],Vo);/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zo=function(A,t){return zo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])},zo(A,t)};function pt(A,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zo(A,t);function e(){this.constructor=A}A.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Po=function(){return Po=Object.assign||function(t){for(var e,r=1,s=arguments.length;r<s;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Po.apply(this,arguments)};function MA(A,t,e,r){function s(i){return i instanceof e?i:new e(function(o){o(i)})}return new(e||(e=Promise))(function(i,o){function n(h){try{c(r.next(h))}catch(d){o(d)}}function a(h){try{c(r.throw(h))}catch(d){o(d)}}function c(h){h.done?i(h.value):s(h.value).then(n,a)}c((r=r.apply(A,[])).next())})}function TA(A,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:n(0),throw:n(1),return:n(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function n(c){return function(h){return a([c,h])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,s&&(i=c[0]&2?s.return:c[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,c[1])).done)return i;switch(s=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,s=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(A,e)}catch(h){c=[6,h],s=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Cs(A,t,e){if(arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return A.concat(i||t)}var Vt=function(){function A(t,e,r,s){this.left=t,this.top=e,this.width=r,this.height=s}return A.prototype.add=function(t,e,r,s){return new A(this.left+t,this.top+e,this.width+r,this.height+s)},A.fromClientRect=function(t,e){return new A(e.left+t.windowBounds.left,e.top+t.windowBounds.top,e.width,e.height)},A.fromDOMRectList=function(t,e){var r=Array.from(e).find(function(s){return s.width!==0});return r?new A(r.left+t.windowBounds.left,r.top+t.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),xi=function(A,t){return Vt.fromClientRect(A,t.getBoundingClientRect())},Ju=function(A){var t=A.body,e=A.documentElement;if(!t||!e)throw new Error("Unable to get document size");var r=Math.max(Math.max(t.scrollWidth,e.scrollWidth),Math.max(t.offsetWidth,e.offsetWidth),Math.max(t.clientWidth,e.clientWidth)),s=Math.max(Math.max(t.scrollHeight,e.scrollHeight),Math.max(t.offsetHeight,e.offsetHeight),Math.max(t.clientHeight,e.clientHeight));return new Vt(0,0,r,s)},_i=function(A){for(var t=[],e=0,r=A.length;e<r;){var s=A.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=A.charCodeAt(e++);(i&64512)===56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),e--)}else t.push(s)}return t},gA=function(){for(var A=[],t=0;t<arguments.length;t++)A[t]=arguments[t];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var e=A.length;if(!e)return"";for(var r=[],s=-1,i="";++s<e;){var o=A[s];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(s+1===e||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},vn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zu=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Qs=0;Qs<vn.length;Qs++)Zu[vn.charCodeAt(Qs)]=Qs;var wn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_r=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Us=0;Us<wn.length;Us++)_r[wn.charCodeAt(Us)]=Us;var qu=function(A){var t=A.length*.75,e=A.length,r,s=0,i,o,n,a;A[A.length-1]==="="&&(t--,A[A.length-2]==="="&&t--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(t):new Array(t),h=Array.isArray(c)?c:new Uint8Array(c);for(r=0;r<e;r+=4)i=_r[A.charCodeAt(r)],o=_r[A.charCodeAt(r+1)],n=_r[A.charCodeAt(r+2)],a=_r[A.charCodeAt(r+3)],h[s++]=i<<2|o>>4,h[s++]=(o&15)<<4|n>>2,h[s++]=(n&3)<<6|a&63;return c},ju=function(A){for(var t=A.length,e=[],r=0;r<t;r+=2)e.push(A[r+1]<<8|A[r]);return e},Ap=function(A){for(var t=A.length,e=[],r=0;r<t;r+=4)e.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return e},xe=5,Sa=11,eo=2,tp=Sa-xe,wc=65536>>xe,ep=1<<xe,ro=ep-1,rp=1024>>xe,sp=wc+rp,ip=sp,op=32,ap=ip+op,np=65536>>Sa,lp=1<<tp,cp=lp-1,yn=function(A,t,e){return A.slice?A.slice(t,e):new Uint16Array(Array.prototype.slice.call(A,t,e))},dp=function(A,t,e){return A.slice?A.slice(t,e):new Uint32Array(Array.prototype.slice.call(A,t,e))},hp=function(A,t){var e=qu(A),r=Array.isArray(e)?Ap(e):new Uint32Array(e),s=Array.isArray(e)?ju(e):new Uint16Array(e),i=24,o=yn(s,i/2,r[4]/2),n=r[5]===2?yn(s,(i+r[4])/2):dp(r,Math.ceil((i+r[4])/4));return new up(r[0],r[1],r[2],r[3],o,n)},up=function(){function A(t,e,r,s,i,o){this.initialValue=t,this.errorValue=e,this.highStart=r,this.highValueIndex=s,this.index=i,this.data=o}return A.prototype.get=function(t){var e;if(t>=0){if(t<55296||t>56319&&t<=65535)return e=this.index[t>>xe],e=(e<<eo)+(t&ro),this.data[e];if(t<=65535)return e=this.index[wc+(t-55296>>xe)],e=(e<<eo)+(t&ro),this.data[e];if(t<this.highStart)return e=ap-np+(t>>Sa),e=this.index[e],e+=t>>xe&cp,e=this.index[e],e=(e<<eo)+(t&ro),this.data[e];if(t<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),Cn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pp=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Fs=0;Fs<Cn.length;Fs++)pp[Cn.charCodeAt(Fs)]=Fs;var fp="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Qn=50,gp=1,yc=2,Cc=3,mp=4,Bp=5,Un=7,Qc=8,Fn=9,qt=10,No=11,xn=12,Go=13,bp=14,Er=15,Xo=16,xs=17,Cr=18,vp=19,_n=20,Wo=21,Qr=22,so=23,Me=24,NA=25,Hr=26,Ir=27,Re=28,wp=29,ve=30,yp=31,_s=32,Es=33,Yo=34,Jo=35,Zo=36,jr=37,qo=38,ti=39,ei=40,io=41,Uc=42,Cp=43,Qp=[9001,65288],Fc="!",z="×",Hs="÷",jo=hp(fp),Ot=[ve,Zo],Aa=[gp,yc,Cc,Bp],xc=[qt,Qc],En=[Ir,Hr],Up=Aa.concat(xc),Hn=[qo,ti,ei,Yo,Jo],Fp=[Er,Go],xp=function(A,t){t===void 0&&(t="strict");var e=[],r=[],s=[];return A.forEach(function(i,o){var n=jo.get(i);if(n>Qn?(s.push(!0),n-=Qn):s.push(!1),["normal","auto","loose"].indexOf(t)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return r.push(o),e.push(Xo);if(n===mp||n===No){if(o===0)return r.push(o),e.push(ve);var a=e[o-1];return Up.indexOf(a)===-1?(r.push(r[o-1]),e.push(a)):(r.push(o),e.push(ve))}if(r.push(o),n===yp)return e.push(t==="strict"?Wo:jr);if(n===Uc||n===wp)return e.push(ve);if(n===Cp)return i>=131072&&i<=196605||i>=196608&&i<=262141?e.push(jr):e.push(ve);e.push(n)}),[r,e,s]},oo=function(A,t,e,r){var s=r[e];if(Array.isArray(A)?A.indexOf(s)!==-1:A===s)for(var i=e;i<=r.length;){i++;var o=r[i];if(o===t)return!0;if(o!==qt)break}if(s===qt)for(var i=e;i>0;){i--;var n=r[i];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var a=e;a<=r.length;){a++;var o=r[a];if(o===t)return!0;if(o!==qt)break}if(n!==qt)break}return!1},In=function(A,t){for(var e=A;e>=0;){var r=t[e];if(r===qt)e--;else return r}return 0},_p=function(A,t,e,r,s){if(e[r]===0)return z;var i=r-1;if(Array.isArray(s)&&s[i]===!0)return z;var o=i-1,n=i+1,a=t[i],c=o>=0?t[o]:0,h=t[n];if(a===yc&&h===Cc)return z;if(Aa.indexOf(a)!==-1)return Fc;if(Aa.indexOf(h)!==-1||xc.indexOf(h)!==-1)return z;if(In(i,t)===Qc)return Hs;if(jo.get(A[i])===No||(a===_s||a===Es)&&jo.get(A[n])===No||a===Un||h===Un||a===Fn||[qt,Go,Er].indexOf(a)===-1&&h===Fn||[xs,Cr,vp,Me,Re].indexOf(h)!==-1||In(i,t)===Qr||oo(so,Qr,i,t)||oo([xs,Cr],Wo,i,t)||oo(xn,xn,i,t))return z;if(a===qt)return Hs;if(a===so||h===so)return z;if(h===Xo||a===Xo)return Hs;if([Go,Er,Wo].indexOf(h)!==-1||a===bp||c===Zo&&Fp.indexOf(a)!==-1||a===Re&&h===Zo||h===_n||Ot.indexOf(h)!==-1&&a===NA||Ot.indexOf(a)!==-1&&h===NA||a===Ir&&[jr,_s,Es].indexOf(h)!==-1||[jr,_s,Es].indexOf(a)!==-1&&h===Hr||Ot.indexOf(a)!==-1&&En.indexOf(h)!==-1||En.indexOf(a)!==-1&&Ot.indexOf(h)!==-1||[Ir,Hr].indexOf(a)!==-1&&(h===NA||[Qr,Er].indexOf(h)!==-1&&t[n+1]===NA)||[Qr,Er].indexOf(a)!==-1&&h===NA||a===NA&&[NA,Re,Me].indexOf(h)!==-1)return z;if([NA,Re,Me,xs,Cr].indexOf(h)!==-1)for(var d=i;d>=0;){var p=t[d];if(p===NA)return z;if([Re,Me].indexOf(p)!==-1)d--;else break}if([Ir,Hr].indexOf(h)!==-1)for(var d=[xs,Cr].indexOf(a)!==-1?o:i;d>=0;){var p=t[d];if(p===NA)return z;if([Re,Me].indexOf(p)!==-1)d--;else break}if(qo===a&&[qo,ti,Yo,Jo].indexOf(h)!==-1||[ti,Yo].indexOf(a)!==-1&&[ti,ei].indexOf(h)!==-1||[ei,Jo].indexOf(a)!==-1&&h===ei||Hn.indexOf(a)!==-1&&[_n,Hr].indexOf(h)!==-1||Hn.indexOf(h)!==-1&&a===Ir||Ot.indexOf(a)!==-1&&Ot.indexOf(h)!==-1||a===Me&&Ot.indexOf(h)!==-1||Ot.concat(NA).indexOf(a)!==-1&&h===Qr&&Qp.indexOf(A[n])===-1||Ot.concat(NA).indexOf(h)!==-1&&a===Cr)return z;if(a===io&&h===io){for(var g=e[i],f=1;g>0&&(g--,t[g]===io);)f++;if(f%2!==0)return z}return a===_s&&h===Es?z:Hs},Ep=function(A,t){t||(t={lineBreak:"normal",wordBreak:"normal"});var e=xp(A,t.lineBreak),r=e[0],s=e[1],i=e[2];(t.wordBreak==="break-all"||t.wordBreak==="break-word")&&(s=s.map(function(n){return[NA,ve,Uc].indexOf(n)!==-1?jr:n}));var o=t.wordBreak==="keep-all"?i.map(function(n,a){return n&&A[a]>=19968&&A[a]<=40959}):void 0;return[r,s,o]},Hp=function(){function A(t,e,r,s){this.codePoints=t,this.required=e===Fc,this.start=r,this.end=s}return A.prototype.slice=function(){return gA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),Ip=function(A,t){var e=_i(A),r=Ep(e,t),s=r[0],i=r[1],o=r[2],n=e.length,a=0,c=0;return{next:function(){if(c>=n)return{done:!0,value:null};for(var h=z;c<n&&(h=_p(e,i,s,++c,o))===z;);if(h!==z||c===n){var d=new Hp(e,h,a,c);return a=c,{value:d,done:!1}}return{done:!0,value:null}}}},kp=1,Sp=2,hs=4,kn=8,hi=10,Sn=47,zr=92,Lp=9,Tp=32,Is=34,Ur=61,Dp=35,Kp=36,Op=37,ks=39,Ss=40,Fr=41,$p=95,zA=45,Mp=33,Rp=60,Vp=62,zp=64,Pp=91,Np=93,Gp=61,Xp=123,Ls=63,Wp=125,Ln=124,Yp=126,Jp=128,Tn=65533,ao=42,ye=43,Zp=44,qp=58,jp=59,As=46,Af=0,tf=8,ef=11,rf=14,sf=31,of=127,yt=-1,_c=48,Ec=97,Hc=101,af=102,nf=117,lf=122,Ic=65,kc=69,Sc=70,cf=85,df=90,KA=function(A){return A>=_c&&A<=57},hf=function(A){return A>=55296&&A<=57343},Ve=function(A){return KA(A)||A>=Ic&&A<=Sc||A>=Ec&&A<=af},uf=function(A){return A>=Ec&&A<=lf},pf=function(A){return A>=Ic&&A<=df},ff=function(A){return uf(A)||pf(A)},gf=function(A){return A>=Jp},Ts=function(A){return A===hi||A===Lp||A===Tp},ui=function(A){return ff(A)||gf(A)||A===$p},Dn=function(A){return ui(A)||KA(A)||A===zA},mf=function(A){return A>=Af&&A<=tf||A===ef||A>=rf&&A<=sf||A===of},Wt=function(A,t){return A!==zr?!1:t!==hi},Ds=function(A,t,e){return A===zA?ui(t)||Wt(t,e):ui(A)?!0:!!(A===zr&&Wt(A,t))},no=function(A,t,e){return A===ye||A===zA?KA(t)?!0:t===As&&KA(e):KA(A===As?t:A)},Bf=function(A){var t=0,e=1;(A[t]===ye||A[t]===zA)&&(A[t]===zA&&(e=-1),t++);for(var r=[];KA(A[t]);)r.push(A[t++]);var s=r.length?parseInt(gA.apply(void 0,r),10):0;A[t]===As&&t++;for(var i=[];KA(A[t]);)i.push(A[t++]);var o=i.length,n=o?parseInt(gA.apply(void 0,i),10):0;(A[t]===kc||A[t]===Hc)&&t++;var a=1;(A[t]===ye||A[t]===zA)&&(A[t]===zA&&(a=-1),t++);for(var c=[];KA(A[t]);)c.push(A[t++]);var h=c.length?parseInt(gA.apply(void 0,c),10):0;return e*(s+n*Math.pow(10,-o))*Math.pow(10,a*h)},bf={type:2},vf={type:3},wf={type:4},yf={type:13},Cf={type:8},Qf={type:21},Uf={type:9},Ff={type:10},xf={type:11},_f={type:12},Ef={type:14},Ks={type:23},Hf={type:1},If={type:25},kf={type:24},Sf={type:26},Lf={type:27},Tf={type:28},Df={type:29},Kf={type:31},ta={type:32},Lc=function(){function A(){this._value=[]}return A.prototype.write=function(t){this._value=this._value.concat(_i(t))},A.prototype.read=function(){for(var t=[],e=this.consumeToken();e!==ta;)t.push(e),e=this.consumeToken();return t},A.prototype.consumeToken=function(){var t=this.consumeCodePoint();switch(t){case Is:return this.consumeStringToken(Is);case Dp:var e=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(Dn(e)||Wt(r,s)){var i=Ds(e,r,s)?Sp:kp,o=this.consumeName();return{type:5,value:o,flags:i}}break;case Kp:if(this.peekCodePoint(0)===Ur)return this.consumeCodePoint(),yf;break;case ks:return this.consumeStringToken(ks);case Ss:return bf;case Fr:return vf;case ao:if(this.peekCodePoint(0)===Ur)return this.consumeCodePoint(),Ef;break;case ye:if(no(t,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(t),this.consumeNumericToken();break;case Zp:return wf;case zA:var n=t,a=this.peekCodePoint(0),c=this.peekCodePoint(1);if(no(n,a,c))return this.reconsumeCodePoint(t),this.consumeNumericToken();if(Ds(n,a,c))return this.reconsumeCodePoint(t),this.consumeIdentLikeToken();if(a===zA&&c===Vp)return this.consumeCodePoint(),this.consumeCodePoint(),kf;break;case As:if(no(t,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(t),this.consumeNumericToken();break;case Sn:if(this.peekCodePoint(0)===ao)for(this.consumeCodePoint();;){var h=this.consumeCodePoint();if(h===ao&&(h=this.consumeCodePoint(),h===Sn))return this.consumeToken();if(h===yt)return this.consumeToken()}break;case qp:return Sf;case jp:return Lf;case Rp:if(this.peekCodePoint(0)===Mp&&this.peekCodePoint(1)===zA&&this.peekCodePoint(2)===zA)return this.consumeCodePoint(),this.consumeCodePoint(),If;break;case zp:var d=this.peekCodePoint(0),p=this.peekCodePoint(1),g=this.peekCodePoint(2);if(Ds(d,p,g)){var o=this.consumeName();return{type:7,value:o}}break;case Pp:return Tf;case zr:if(Wt(t,this.peekCodePoint(0)))return this.reconsumeCodePoint(t),this.consumeIdentLikeToken();break;case Np:return Df;case Gp:if(this.peekCodePoint(0)===Ur)return this.consumeCodePoint(),Cf;break;case Xp:return xf;case Wp:return _f;case nf:case cf:var f=this.peekCodePoint(0),m=this.peekCodePoint(1);return f===ye&&(Ve(m)||m===Ls)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(t),this.consumeIdentLikeToken();case Ln:if(this.peekCodePoint(0)===Ur)return this.consumeCodePoint(),Uf;if(this.peekCodePoint(0)===Ln)return this.consumeCodePoint(),Qf;break;case Yp:if(this.peekCodePoint(0)===Ur)return this.consumeCodePoint(),Ff;break;case yt:return ta}return Ts(t)?(this.consumeWhiteSpace(),Kf):KA(t)?(this.reconsumeCodePoint(t),this.consumeNumericToken()):ui(t)?(this.reconsumeCodePoint(t),this.consumeIdentLikeToken()):{type:6,value:gA(t)}},A.prototype.consumeCodePoint=function(){var t=this._value.shift();return typeof t>"u"?-1:t},A.prototype.reconsumeCodePoint=function(t){this._value.unshift(t)},A.prototype.peekCodePoint=function(t){return t>=this._value.length?-1:this._value[t]},A.prototype.consumeUnicodeRangeToken=function(){for(var t=[],e=this.consumeCodePoint();Ve(e)&&t.length<6;)t.push(e),e=this.consumeCodePoint();for(var r=!1;e===Ls&&t.length<6;)t.push(e),e=this.consumeCodePoint(),r=!0;if(r){var s=parseInt(gA.apply(void 0,t.map(function(a){return a===Ls?_c:a})),16),i=parseInt(gA.apply(void 0,t.map(function(a){return a===Ls?Sc:a})),16);return{type:30,start:s,end:i}}var o=parseInt(gA.apply(void 0,t),16);if(this.peekCodePoint(0)===zA&&Ve(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var n=[];Ve(e)&&n.length<6;)n.push(e),e=this.consumeCodePoint();var i=parseInt(gA.apply(void 0,n),16);return{type:30,start:o,end:i}}else return{type:30,start:o,end:o}},A.prototype.consumeIdentLikeToken=function(){var t=this.consumeName();return t.toLowerCase()==="url"&&this.peekCodePoint(0)===Ss?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Ss?(this.consumeCodePoint(),{type:19,value:t}):{type:20,value:t}},A.prototype.consumeUrlToken=function(){var t=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===yt)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===ks||e===Is){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===yt||this.peekCodePoint(0)===Fr)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Ks)}for(;;){var s=this.consumeCodePoint();if(s===yt||s===Fr)return{type:22,value:gA.apply(void 0,t)};if(Ts(s))return this.consumeWhiteSpace(),this.peekCodePoint(0)===yt||this.peekCodePoint(0)===Fr?(this.consumeCodePoint(),{type:22,value:gA.apply(void 0,t)}):(this.consumeBadUrlRemnants(),Ks);if(s===Is||s===ks||s===Ss||mf(s))return this.consumeBadUrlRemnants(),Ks;if(s===zr)if(Wt(s,this.peekCodePoint(0)))t.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Ks;else t.push(s)}},A.prototype.consumeWhiteSpace=function(){for(;Ts(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var t=this.consumeCodePoint();if(t===Fr||t===yt)return;Wt(t,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(t){for(var e=5e4,r="";t>0;){var s=Math.min(e,t);r+=gA.apply(void 0,this._value.splice(0,s)),t-=s}return this._value.shift(),r},A.prototype.consumeStringToken=function(t){var e="",r=0;do{var s=this._value[r];if(s===yt||s===void 0||s===t)return e+=this.consumeStringSlice(r),{type:0,value:e};if(s===hi)return this._value.splice(0,r),Hf;if(s===zr){var i=this._value[r+1];i!==yt&&i!==void 0&&(i===hi?(e+=this.consumeStringSlice(r),r=-1,this._value.shift()):Wt(s,i)&&(e+=this.consumeStringSlice(r),e+=gA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var t=[],e=hs,r=this.peekCodePoint(0);for((r===ye||r===zA)&&t.push(this.consumeCodePoint());KA(this.peekCodePoint(0));)t.push(this.consumeCodePoint());r=this.peekCodePoint(0);var s=this.peekCodePoint(1);if(r===As&&KA(s))for(t.push(this.consumeCodePoint(),this.consumeCodePoint()),e=kn;KA(this.peekCodePoint(0));)t.push(this.consumeCodePoint());r=this.peekCodePoint(0),s=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((r===kc||r===Hc)&&((s===ye||s===zA)&&KA(i)||KA(s)))for(t.push(this.consumeCodePoint(),this.consumeCodePoint()),e=kn;KA(this.peekCodePoint(0));)t.push(this.consumeCodePoint());return[Bf(t),e]},A.prototype.consumeNumericToken=function(){var t=this.consumeNumber(),e=t[0],r=t[1],s=this.peekCodePoint(0),i=this.peekCodePoint(1),o=this.peekCodePoint(2);if(Ds(s,i,o)){var n=this.consumeName();return{type:15,number:e,flags:r,unit:n}}return s===Op?(this.consumeCodePoint(),{type:16,number:e,flags:r}):{type:17,number:e,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var t=this.consumeCodePoint();if(Ve(t)){for(var e=gA(t);Ve(this.peekCodePoint(0))&&e.length<6;)e+=gA(this.consumeCodePoint());Ts(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(e,16);return r===0||hf(r)||r>1114111?Tn:r}return t===yt?Tn:t},A.prototype.consumeName=function(){for(var t="";;){var e=this.consumeCodePoint();if(Dn(e))t+=gA(e);else if(Wt(e,this.peekCodePoint(0)))t+=gA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),t}},A}(),Tc=function(){function A(t){this._tokens=t}return A.create=function(t){var e=new Lc;return e.write(t),new A(e.read())},A.parseValue=function(t){return A.create(t).parseComponentValue()},A.parseValues=function(t){return A.create(t).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var t=this.consumeToken();t.type===31;)t=this.consumeToken();if(t.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(t);var e=this.consumeComponentValue();do t=this.consumeToken();while(t.type===31);if(t.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var t=[];;){var e=this.consumeComponentValue();if(e.type===32)return t;t.push(e),t.push()}},A.prototype.consumeComponentValue=function(){var t=this.consumeToken();switch(t.type){case 11:case 28:case 2:return this.consumeSimpleBlock(t.type);case 19:return this.consumeFunction(t)}return t},A.prototype.consumeSimpleBlock=function(t){for(var e={type:t,values:[]},r=this.consumeToken();;){if(r.type===32||$f(r,t))return e;this.reconsumeToken(r),e.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(t){for(var e={name:t.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return e;this.reconsumeToken(r),e.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var t=this._tokens.shift();return typeof t>"u"?ta:t},A.prototype.reconsumeToken=function(t){this._tokens.unshift(t)},A}(),us=function(A){return A.type===15},nr=function(A){return A.type===17},tA=function(A){return A.type===20},Of=function(A){return A.type===0},ea=function(A,t){return tA(A)&&A.value===t},Dc=function(A){return A.type!==31},ir=function(A){return A.type!==31&&A.type!==4},Ht=function(A){var t=[],e=[];return A.forEach(function(r){if(r.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");t.push(e),e=[];return}r.type!==31&&e.push(r)}),e.length&&t.push(e),t},$f=function(A,t){return t===11&&A.type===12||t===28&&A.type===29?!0:t===2&&A.type===3},ie=function(A){return A.type===17||A.type===15},BA=function(A){return A.type===16||ie(A)},Kc=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},IA={type:17,number:0,flags:hs},La={type:16,number:50,flags:hs},jt={type:16,number:100,flags:hs},kr=function(A,t,e){var r=A[0],s=A[1];return[sA(r,t),sA(typeof s<"u"?s:r,e)]},sA=function(A,t){if(A.type===16)return A.number/100*t;if(us(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},Oc="deg",$c="grad",Mc="rad",Rc="turn",Ei={name:"angle",parse:function(A,t){if(t.type===15)switch(t.unit){case Oc:return Math.PI*t.number/180;case $c:return Math.PI/200*t.number;case Mc:return t.number;case Rc:return Math.PI*2*t.number}throw new Error("Unsupported angle type")}},Vc=function(A){return A.type===15&&(A.unit===Oc||A.unit===$c||A.unit===Mc||A.unit===Rc)},zc=function(A){var t=A.filter(tA).map(function(e){return e.value}).join(" ");switch(t){case"to bottom right":case"to right bottom":case"left top":case"top left":return[IA,IA];case"to top":case"bottom":return at(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[IA,jt];case"to right":case"left":return at(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[jt,jt];case"to bottom":case"top":return at(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[jt,IA];case"to left":case"right":return at(270)}return 0},at=function(A){return Math.PI*A/180},re={name:"color",parse:function(A,t){if(t.type===18){var e=Mf[t.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+t.name+'"');return e(A,t.values)}if(t.type===5){if(t.value.length===3){var r=t.value.substring(0,1),s=t.value.substring(1,2),i=t.value.substring(2,3);return Ae(parseInt(r+r,16),parseInt(s+s,16),parseInt(i+i,16),1)}if(t.value.length===4){var r=t.value.substring(0,1),s=t.value.substring(1,2),i=t.value.substring(2,3),o=t.value.substring(3,4);return Ae(parseInt(r+r,16),parseInt(s+s,16),parseInt(i+i,16),parseInt(o+o,16)/255)}if(t.value.length===6){var r=t.value.substring(0,2),s=t.value.substring(2,4),i=t.value.substring(4,6);return Ae(parseInt(r,16),parseInt(s,16),parseInt(i,16),1)}if(t.value.length===8){var r=t.value.substring(0,2),s=t.value.substring(2,4),i=t.value.substring(4,6),o=t.value.substring(6,8);return Ae(parseInt(r,16),parseInt(s,16),parseInt(i,16),parseInt(o,16)/255)}}if(t.type===20){var n=Rt[t.value.toUpperCase()];if(typeof n<"u")return n}return Rt.TRANSPARENT}},se=function(A){return(255&A)===0},UA=function(A){var t=255&A,e=255&A>>8,r=255&A>>16,s=255&A>>24;return t<255?"rgba("+s+","+r+","+e+","+t/255+")":"rgb("+s+","+r+","+e+")"},Ae=function(A,t,e,r){return(A<<24|t<<16|e<<8|Math.round(r*255)<<0)>>>0},Kn=function(A,t){if(A.type===17)return A.number;if(A.type===16){var e=t===3?1:255;return t===3?A.number/100*e:Math.round(A.number/100*e)}return 0},On=function(A,t){var e=t.filter(ir);if(e.length===3){var r=e.map(Kn),s=r[0],i=r[1],o=r[2];return Ae(s,i,o,1)}if(e.length===4){var n=e.map(Kn),s=n[0],i=n[1],o=n[2],a=n[3];return Ae(s,i,o,a)}return 0};function lo(A,t,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(t-A)*e*6+A:e<1/2?t:e<2/3?(t-A)*6*(2/3-e)+A:A}var $n=function(A,t){var e=t.filter(ir),r=e[0],s=e[1],i=e[2],o=e[3],n=(r.type===17?at(r.number):Ei.parse(A,r))/(Math.PI*2),a=BA(s)?s.number/100:0,c=BA(i)?i.number/100:0,h=typeof o<"u"&&BA(o)?sA(o,1):1;if(a===0)return Ae(c*255,c*255,c*255,1);var d=c<=.5?c*(a+1):c+a-c*a,p=c*2-d,g=lo(p,d,n+1/3),f=lo(p,d,n),m=lo(p,d,n-1/3);return Ae(g*255,f*255,m*255,h)},Mf={hsl:$n,hsla:$n,rgb:On,rgba:On},Pr=function(A,t){return re.parse(A,Tc.create(t).parseComponentValue())},Rt={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Rf={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,t){return t.map(function(e){if(tA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Vf={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Hi=function(A,t){var e=re.parse(A,t[0]),r=t[1];return r&&BA(r)?{color:e,stop:r}:{color:e,stop:null}},Mn=function(A,t){var e=A[0],r=A[A.length-1];e.stop===null&&(e.stop=IA),r.stop===null&&(r.stop=jt);for(var s=[],i=0,o=0;o<A.length;o++){var n=A[o].stop;if(n!==null){var a=sA(n,t);a>i?s.push(a):s.push(i),i=a}else s.push(null)}for(var c=null,o=0;o<s.length;o++){var h=s[o];if(h===null)c===null&&(c=o);else if(c!==null){for(var d=o-c,p=s[c-1],g=(h-p)/(d+1),f=1;f<=d;f++)s[c+f-1]=g*f;c=null}}return A.map(function(m,Q){var C=m.color;return{color:C,stop:Math.max(Math.min(1,s[Q]/t),0)}})},zf=function(A,t,e){var r=t/2,s=e/2,i=sA(A[0],t)-r,o=s-sA(A[1],e);return(Math.atan2(o,i)+Math.PI*2)%(Math.PI*2)},Pf=function(A,t,e){var r=typeof A=="number"?A:zf(A,t,e),s=Math.abs(t*Math.sin(r))+Math.abs(e*Math.cos(r)),i=t/2,o=e/2,n=s/2,a=Math.sin(r-Math.PI/2)*n,c=Math.cos(r-Math.PI/2)*n;return[s,i-c,i+c,o-a,o+a]},dt=function(A,t){return Math.sqrt(A*A+t*t)},Rn=function(A,t,e,r,s){var i=[[0,0],[0,t],[A,0],[A,t]];return i.reduce(function(o,n){var a=n[0],c=n[1],h=dt(e-a,r-c);return(s?h<o.optimumDistance:h>o.optimumDistance)?{optimumCorner:n,optimumDistance:h}:o},{optimumDistance:s?1/0:-1/0,optimumCorner:null}).optimumCorner},Nf=function(A,t,e,r,s){var i=0,o=0;switch(A.size){case 0:A.shape===0?i=o=Math.min(Math.abs(t),Math.abs(t-r),Math.abs(e),Math.abs(e-s)):A.shape===1&&(i=Math.min(Math.abs(t),Math.abs(t-r)),o=Math.min(Math.abs(e),Math.abs(e-s)));break;case 2:if(A.shape===0)i=o=Math.min(dt(t,e),dt(t,e-s),dt(t-r,e),dt(t-r,e-s));else if(A.shape===1){var n=Math.min(Math.abs(e),Math.abs(e-s))/Math.min(Math.abs(t),Math.abs(t-r)),a=Rn(r,s,t,e,!0),c=a[0],h=a[1];i=dt(c-t,(h-e)/n),o=n*i}break;case 1:A.shape===0?i=o=Math.max(Math.abs(t),Math.abs(t-r),Math.abs(e),Math.abs(e-s)):A.shape===1&&(i=Math.max(Math.abs(t),Math.abs(t-r)),o=Math.max(Math.abs(e),Math.abs(e-s)));break;case 3:if(A.shape===0)i=o=Math.max(dt(t,e),dt(t,e-s),dt(t-r,e),dt(t-r,e-s));else if(A.shape===1){var n=Math.max(Math.abs(e),Math.abs(e-s))/Math.max(Math.abs(t),Math.abs(t-r)),d=Rn(r,s,t,e,!1),c=d[0],h=d[1];i=dt(c-t,(h-e)/n),o=n*i}break}return Array.isArray(A.size)&&(i=sA(A.size[0],r),o=A.size.length===2?sA(A.size[1],s):i),[i,o]},Gf=function(A,t){var e=at(180),r=[];return Ht(t).forEach(function(s,i){if(i===0){var o=s[0];if(o.type===20&&o.value==="to"){e=zc(s);return}else if(Vc(o)){e=Ei.parse(A,o);return}}var n=Hi(A,s);r.push(n)}),{angle:e,stops:r,type:1}},Os=function(A,t){var e=at(180),r=[];return Ht(t).forEach(function(s,i){if(i===0){var o=s[0];if(o.type===20&&["top","left","right","bottom"].indexOf(o.value)!==-1){e=zc(s);return}else if(Vc(o)){e=(Ei.parse(A,o)+at(270))%at(360);return}}var n=Hi(A,s);r.push(n)}),{angle:e,stops:r,type:1}},Xf=function(A,t){var e=at(180),r=[],s=1,i=0,o=3,n=[];return Ht(t).forEach(function(a,c){var h=a[0];if(c===0){if(tA(h)&&h.value==="linear"){s=1;return}else if(tA(h)&&h.value==="radial"){s=2;return}}if(h.type===18){if(h.name==="from"){var d=re.parse(A,h.values[0]);r.push({stop:IA,color:d})}else if(h.name==="to"){var d=re.parse(A,h.values[0]);r.push({stop:jt,color:d})}else if(h.name==="color-stop"){var p=h.values.filter(ir);if(p.length===2){var d=re.parse(A,p[1]),g=p[0];nr(g)&&r.push({stop:{type:16,number:g.number*100,flags:g.flags},color:d})}}}}),s===1?{angle:(e+at(180))%at(360),stops:r,type:s}:{size:o,shape:i,stops:r,position:n,type:s}},Pc="closest-side",Nc="farthest-side",Gc="closest-corner",Xc="farthest-corner",Wc="circle",Yc="ellipse",Jc="cover",Zc="contain",Wf=function(A,t){var e=0,r=3,s=[],i=[];return Ht(t).forEach(function(o,n){var a=!0;if(n===0){var c=!1;a=o.reduce(function(d,p){if(c)if(tA(p))switch(p.value){case"center":return i.push(La),d;case"top":case"left":return i.push(IA),d;case"right":case"bottom":return i.push(jt),d}else(BA(p)||ie(p))&&i.push(p);else if(tA(p))switch(p.value){case Wc:return e=0,!1;case Yc:return e=1,!1;case"at":return c=!0,!1;case Pc:return r=0,!1;case Jc:case Nc:return r=1,!1;case Zc:case Gc:return r=2,!1;case Xc:return r=3,!1}else if(ie(p)||BA(p))return Array.isArray(r)||(r=[]),r.push(p),!1;return d},a)}if(a){var h=Hi(A,o);s.push(h)}}),{size:r,shape:e,stops:s,position:i,type:2}},$s=function(A,t){var e=0,r=3,s=[],i=[];return Ht(t).forEach(function(o,n){var a=!0;if(n===0?a=o.reduce(function(h,d){if(tA(d))switch(d.value){case"center":return i.push(La),!1;case"top":case"left":return i.push(IA),!1;case"right":case"bottom":return i.push(jt),!1}else if(BA(d)||ie(d))return i.push(d),!1;return h},a):n===1&&(a=o.reduce(function(h,d){if(tA(d))switch(d.value){case Wc:return e=0,!1;case Yc:return e=1,!1;case Zc:case Pc:return r=0,!1;case Nc:return r=1,!1;case Gc:return r=2,!1;case Jc:case Xc:return r=3,!1}else if(ie(d)||BA(d))return Array.isArray(r)||(r=[]),r.push(d),!1;return h},a)),a){var c=Hi(A,o);s.push(c)}}),{size:r,shape:e,stops:s,position:i,type:2}},Yf=function(A){return A.type===1},Jf=function(A){return A.type===2},Ta={name:"image",parse:function(A,t){if(t.type===22){var e={url:t.value,type:0};return A.cache.addImage(t.value),e}if(t.type===18){var r=qc[t.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+t.name+'"');return r(A,t.values)}throw new Error("Unsupported image type "+t.type)}};function Zf(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!qc[A.name])}var qc={"linear-gradient":Gf,"-moz-linear-gradient":Os,"-ms-linear-gradient":Os,"-o-linear-gradient":Os,"-webkit-linear-gradient":Os,"radial-gradient":Wf,"-moz-radial-gradient":$s,"-ms-radial-gradient":$s,"-o-radial-gradient":$s,"-webkit-radial-gradient":$s,"-webkit-gradient":Xf},qf={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,t){if(t.length===0)return[];var e=t[0];return e.type===20&&e.value==="none"?[]:t.filter(function(r){return ir(r)&&Zf(r)}).map(function(r){return Ta.parse(A,r)})}},jf={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,t){return t.map(function(e){if(tA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Ag={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,t){return Ht(t).map(function(e){return e.filter(BA)}).map(Kc)}},tg={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,t){return Ht(t).map(function(e){return e.filter(tA).map(function(r){return r.value}).join(" ")}).map(eg)}},eg=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},qe;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(qe||(qe={}));var rg={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,t){return Ht(t).map(function(e){return e.filter(sg)})}},sg=function(A){return tA(A)||BA(A)},Ii=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},ig=Ii("top"),og=Ii("right"),ag=Ii("bottom"),ng=Ii("left"),ki=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(t,e){return Kc(e.filter(BA))}}},lg=ki("top-left"),cg=ki("top-right"),dg=ki("bottom-right"),hg=ki("bottom-left"),Si=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(t,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},ug=Si("top"),pg=Si("right"),fg=Si("bottom"),gg=Si("left"),Li=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(t,e){return us(e)?e.number:0}}},mg=Li("top"),Bg=Li("right"),bg=Li("bottom"),vg=Li("left"),wg={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},yg={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,t){switch(t){case"rtl":return 1;case"ltr":default:return 0}}},Cg={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,t){return t.filter(tA).reduce(function(e,r){return e|Qg(r.value)},0)}},Qg=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Ug={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,t){switch(t){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Fg={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,t){return t.type===20&&t.value==="normal"?0:t.type===17||t.type===15?t.number:0}},pi;(function(A){A.NORMAL="normal",A.STRICT="strict"})(pi||(pi={}));var xg={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,t){switch(t){case"strict":return pi.STRICT;case"normal":default:return pi.NORMAL}}},_g={name:"line-height",initialValue:"normal",prefix:!1,type:4},Vn=function(A,t){return tA(A)&&A.value==="normal"?1.2*t:A.type===17?t*A.number:BA(A)?sA(A,t):t},Eg={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,t){return t.type===20&&t.value==="none"?null:Ta.parse(A,t)}},Hg={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,t){switch(t){case"inside":return 0;case"outside":default:return 1}}},ra={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,t){switch(t){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Ti=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},Ig=Ti("top"),kg=Ti("right"),Sg=Ti("bottom"),Lg=Ti("left"),Tg={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,t){return t.filter(tA).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Dg={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,t){switch(t){case"break-word":return"break-word";case"normal":default:return"normal"}}},Di=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Kg=Di("top"),Og=Di("right"),$g=Di("bottom"),Mg=Di("left"),Rg={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,t){switch(t){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Vg={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,t){switch(t){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},zg={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,t){return t.length===1&&ea(t[0],"none")?[]:Ht(t).map(function(e){for(var r={color:Rt.TRANSPARENT,offsetX:IA,offsetY:IA,blur:IA},s=0,i=0;i<e.length;i++){var o=e[i];ie(o)?(s===0?r.offsetX=o:s===1?r.offsetY=o:r.blur=o,s++):r.color=re.parse(A,o)}return r})}},Pg={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,t){switch(t){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Ng={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,t){if(t.type===20&&t.value==="none")return null;if(t.type===18){var e=Wg[t.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+t.name+'"');return e(t.values)}return null}},Gg=function(A){var t=A.filter(function(e){return e.type===17}).map(function(e){return e.number});return t.length===6?t:null},Xg=function(A){var t=A.filter(function(a){return a.type===17}).map(function(a){return a.number}),e=t[0],r=t[1];t[2],t[3];var s=t[4],i=t[5];t[6],t[7],t[8],t[9],t[10],t[11];var o=t[12],n=t[13];return t[14],t[15],t.length===16?[e,r,s,i,o,n]:null},Wg={matrix:Gg,matrix3d:Xg},zn={type:16,number:50,flags:hs},Yg=[zn,zn],Jg={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,t){var e=t.filter(BA);return e.length!==2?Yg:[e[0],e[1]]}},Zg={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,t){switch(t){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Nr;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Nr||(Nr={}));var qg={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,t){switch(t){case"break-all":return Nr.BREAK_ALL;case"keep-all":return Nr.KEEP_ALL;case"normal":default:return Nr.NORMAL}}},jg={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,t){if(t.type===20)return{auto:!0,order:0};if(nr(t))return{auto:!1,order:t.number};throw new Error("Invalid z-index number parsed")}},jc={name:"time",parse:function(A,t){if(t.type===15)switch(t.unit.toLowerCase()){case"s":return 1e3*t.number;case"ms":return t.number}throw new Error("Unsupported time type")}},A0={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,t){return nr(t)?t.number:1}},t0={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},e0={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,t){return t.filter(tA).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},r0={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,t){var e=[],r=[];return t.forEach(function(s){switch(s.type){case 20:case 0:e.push(s.value);break;case 17:e.push(s.number.toString());break;case 4:r.push(e.join(" ")),e.length=0;break}}),e.length&&r.push(e.join(" ")),r.map(function(s){return s.indexOf(" ")===-1?s:"'"+s+"'"})}},s0={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},i0={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,t){if(nr(t))return t.number;if(tA(t))switch(t.value){case"bold":return 700;case"normal":default:return 400}return 400}},o0={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,t){return t.filter(tA).map(function(e){return e.value})}},a0={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,t){switch(t){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},yA=function(A,t){return(A&t)!==0},n0={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,t){if(t.length===0)return[];var e=t[0];return e.type===20&&e.value==="none"?[]:t}},l0={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,t){if(t.length===0)return null;var e=t[0];if(e.type===20&&e.value==="none")return null;for(var r=[],s=t.filter(Dc),i=0;i<s.length;i++){var o=s[i],n=s[i+1];if(o.type===20){var a=n&&nr(n)?n.number:1;r.push({counter:o.value,increment:a})}}return r}},c0={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,t){if(t.length===0)return[];for(var e=[],r=t.filter(Dc),s=0;s<r.length;s++){var i=r[s],o=r[s+1];if(tA(i)&&i.value!=="none"){var n=o&&nr(o)?o.number:0;e.push({counter:i.value,reset:n})}}return e}},d0={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,t){return t.filter(us).map(function(e){return jc.parse(A,e)})}},h0={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,t){if(t.length===0)return null;var e=t[0];if(e.type===20&&e.value==="none")return null;var r=[],s=t.filter(Of);if(s.length%2!==0)return null;for(var i=0;i<s.length;i+=2){var o=s[i].value,n=s[i+1].value;r.push({open:o,close:n})}return r}},Pn=function(A,t,e){if(!A)return"";var r=A[Math.min(t,A.length-1)];return r?e?r.open:r.close:""},u0={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,t){return t.length===1&&ea(t[0],"none")?[]:Ht(t).map(function(e){for(var r={color:255,offsetX:IA,offsetY:IA,blur:IA,spread:IA,inset:!1},s=0,i=0;i<e.length;i++){var o=e[i];ea(o,"inset")?r.inset=!0:ie(o)?(s===0?r.offsetX=o:s===1?r.offsetY=o:s===2?r.blur=o:r.spread=o,s++):r.color=re.parse(A,o)}return r})}},p0={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,t){var e=[0,1,2],r=[];return t.filter(tA).forEach(function(s){switch(s.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),e.forEach(function(s){r.indexOf(s)===-1&&r.push(s)}),r}},f0={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},g0={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,t){return us(t)?t.number:0}},m0=function(){function A(t,e){var r,s;this.animationDuration=S(t,d0,e.animationDuration),this.backgroundClip=S(t,Rf,e.backgroundClip),this.backgroundColor=S(t,Vf,e.backgroundColor),this.backgroundImage=S(t,qf,e.backgroundImage),this.backgroundOrigin=S(t,jf,e.backgroundOrigin),this.backgroundPosition=S(t,Ag,e.backgroundPosition),this.backgroundRepeat=S(t,tg,e.backgroundRepeat),this.backgroundSize=S(t,rg,e.backgroundSize),this.borderTopColor=S(t,ig,e.borderTopColor),this.borderRightColor=S(t,og,e.borderRightColor),this.borderBottomColor=S(t,ag,e.borderBottomColor),this.borderLeftColor=S(t,ng,e.borderLeftColor),this.borderTopLeftRadius=S(t,lg,e.borderTopLeftRadius),this.borderTopRightRadius=S(t,cg,e.borderTopRightRadius),this.borderBottomRightRadius=S(t,dg,e.borderBottomRightRadius),this.borderBottomLeftRadius=S(t,hg,e.borderBottomLeftRadius),this.borderTopStyle=S(t,ug,e.borderTopStyle),this.borderRightStyle=S(t,pg,e.borderRightStyle),this.borderBottomStyle=S(t,fg,e.borderBottomStyle),this.borderLeftStyle=S(t,gg,e.borderLeftStyle),this.borderTopWidth=S(t,mg,e.borderTopWidth),this.borderRightWidth=S(t,Bg,e.borderRightWidth),this.borderBottomWidth=S(t,bg,e.borderBottomWidth),this.borderLeftWidth=S(t,vg,e.borderLeftWidth),this.boxShadow=S(t,u0,e.boxShadow),this.color=S(t,wg,e.color),this.direction=S(t,yg,e.direction),this.display=S(t,Cg,e.display),this.float=S(t,Ug,e.cssFloat),this.fontFamily=S(t,r0,e.fontFamily),this.fontSize=S(t,s0,e.fontSize),this.fontStyle=S(t,a0,e.fontStyle),this.fontVariant=S(t,o0,e.fontVariant),this.fontWeight=S(t,i0,e.fontWeight),this.letterSpacing=S(t,Fg,e.letterSpacing),this.lineBreak=S(t,xg,e.lineBreak),this.lineHeight=S(t,_g,e.lineHeight),this.listStyleImage=S(t,Eg,e.listStyleImage),this.listStylePosition=S(t,Hg,e.listStylePosition),this.listStyleType=S(t,ra,e.listStyleType),this.marginTop=S(t,Ig,e.marginTop),this.marginRight=S(t,kg,e.marginRight),this.marginBottom=S(t,Sg,e.marginBottom),this.marginLeft=S(t,Lg,e.marginLeft),this.opacity=S(t,A0,e.opacity);var i=S(t,Tg,e.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=S(t,Dg,e.overflowWrap),this.paddingTop=S(t,Kg,e.paddingTop),this.paddingRight=S(t,Og,e.paddingRight),this.paddingBottom=S(t,$g,e.paddingBottom),this.paddingLeft=S(t,Mg,e.paddingLeft),this.paintOrder=S(t,p0,e.paintOrder),this.position=S(t,Vg,e.position),this.textAlign=S(t,Rg,e.textAlign),this.textDecorationColor=S(t,t0,(r=e.textDecorationColor)!==null&&r!==void 0?r:e.color),this.textDecorationLine=S(t,e0,(s=e.textDecorationLine)!==null&&s!==void 0?s:e.textDecoration),this.textShadow=S(t,zg,e.textShadow),this.textTransform=S(t,Pg,e.textTransform),this.transform=S(t,Ng,e.transform),this.transformOrigin=S(t,Jg,e.transformOrigin),this.visibility=S(t,Zg,e.visibility),this.webkitTextStrokeColor=S(t,f0,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=S(t,g0,e.webkitTextStrokeWidth),this.wordBreak=S(t,qg,e.wordBreak),this.zIndex=S(t,jg,e.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return se(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return yA(this.display,4)||yA(this.display,33554432)||yA(this.display,268435456)||yA(this.display,536870912)||yA(this.display,67108864)||yA(this.display,134217728)},A}(),B0=function(){function A(t,e){this.content=S(t,n0,e.content),this.quotes=S(t,h0,e.quotes)}return A}(),Nn=function(){function A(t,e){this.counterIncrement=S(t,l0,e.counterIncrement),this.counterReset=S(t,c0,e.counterReset)}return A}(),S=function(A,t,e){var r=new Lc,s=e!==null&&typeof e<"u"?e.toString():t.initialValue;r.write(s);var i=new Tc(r.read());switch(t.type){case 2:var o=i.parseComponentValue();return t.parse(A,tA(o)?o.value:t.initialValue);case 0:return t.parse(A,i.parseComponentValue());case 1:return t.parse(A,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(t.format){case"angle":return Ei.parse(A,i.parseComponentValue());case"color":return re.parse(A,i.parseComponentValue());case"image":return Ta.parse(A,i.parseComponentValue());case"length":var n=i.parseComponentValue();return ie(n)?n:IA;case"length-percentage":var a=i.parseComponentValue();return BA(a)?a:IA;case"time":return jc.parse(A,i.parseComponentValue())}break}},b0="data-html2canvas-debug",v0=function(A){var t=A.getAttribute(b0);switch(t){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},sa=function(A,t){var e=v0(A);return e===1||t===e},It=function(){function A(t,e){if(this.context=t,this.textNodes=[],this.elements=[],this.flags=0,sa(e,3))debugger;this.styles=new m0(t,window.getComputedStyle(e,null)),aa(e)&&(this.styles.animationDuration.some(function(r){return r>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=xi(this.context,e),sa(e,4)&&(this.flags|=16)}return A}(),w0="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Gn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Sr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ms=0;Ms<Gn.length;Ms++)Sr[Gn.charCodeAt(Ms)]=Ms;var y0=function(A){var t=A.length*.75,e=A.length,r,s=0,i,o,n,a;A[A.length-1]==="="&&(t--,A[A.length-2]==="="&&t--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(t):new Array(t),h=Array.isArray(c)?c:new Uint8Array(c);for(r=0;r<e;r+=4)i=Sr[A.charCodeAt(r)],o=Sr[A.charCodeAt(r+1)],n=Sr[A.charCodeAt(r+2)],a=Sr[A.charCodeAt(r+3)],h[s++]=i<<2|o>>4,h[s++]=(o&15)<<4|n>>2,h[s++]=(n&3)<<6|a&63;return c},C0=function(A){for(var t=A.length,e=[],r=0;r<t;r+=2)e.push(A[r+1]<<8|A[r]);return e},Q0=function(A){for(var t=A.length,e=[],r=0;r<t;r+=4)e.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return e},_e=5,Da=11,co=2,U0=Da-_e,Ad=65536>>_e,F0=1<<_e,ho=F0-1,x0=1024>>_e,_0=Ad+x0,E0=_0,H0=32,I0=E0+H0,k0=65536>>Da,S0=1<<U0,L0=S0-1,Xn=function(A,t,e){return A.slice?A.slice(t,e):new Uint16Array(Array.prototype.slice.call(A,t,e))},T0=function(A,t,e){return A.slice?A.slice(t,e):new Uint32Array(Array.prototype.slice.call(A,t,e))},D0=function(A,t){var e=y0(A),r=Array.isArray(e)?Q0(e):new Uint32Array(e),s=Array.isArray(e)?C0(e):new Uint16Array(e),i=24,o=Xn(s,i/2,r[4]/2),n=r[5]===2?Xn(s,(i+r[4])/2):T0(r,Math.ceil((i+r[4])/4));return new K0(r[0],r[1],r[2],r[3],o,n)},K0=function(){function A(t,e,r,s,i,o){this.initialValue=t,this.errorValue=e,this.highStart=r,this.highValueIndex=s,this.index=i,this.data=o}return A.prototype.get=function(t){var e;if(t>=0){if(t<55296||t>56319&&t<=65535)return e=this.index[t>>_e],e=(e<<co)+(t&ho),this.data[e];if(t<=65535)return e=this.index[Ad+(t-55296>>_e)],e=(e<<co)+(t&ho),this.data[e];if(t<this.highStart)return e=I0-k0+(t>>Da),e=this.index[e],e+=t>>_e&L0,e=this.index[e],e=(e<<co)+(t&ho),this.data[e];if(t<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),Wn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O0=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Rs=0;Rs<Wn.length;Rs++)O0[Wn.charCodeAt(Rs)]=Rs;var $0=1,uo=2,po=3,Yn=4,Jn=5,M0=7,Zn=8,fo=9,go=10,qn=11,jn=12,Al=13,tl=14,mo=15,R0=function(A){for(var t=[],e=0,r=A.length;e<r;){var s=A.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=A.charCodeAt(e++);(i&64512)===56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),e--)}else t.push(s)}return t},V0=function(){for(var A=[],t=0;t<arguments.length;t++)A[t]=arguments[t];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var e=A.length;if(!e)return"";for(var r=[],s=-1,i="";++s<e;){var o=A[s];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(s+1===e||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},z0=D0(w0),et="×",Bo="÷",P0=function(A){return z0.get(A)},N0=function(A,t,e){var r=e-2,s=t[r],i=t[e-1],o=t[e];if(i===uo&&o===po)return et;if(i===uo||i===po||i===Yn||o===uo||o===po||o===Yn)return Bo;if(i===Zn&&[Zn,fo,qn,jn].indexOf(o)!==-1||(i===qn||i===fo)&&(o===fo||o===go)||(i===jn||i===go)&&o===go||o===Al||o===Jn||o===M0||i===$0)return et;if(i===Al&&o===tl){for(;s===Jn;)s=t[--r];if(s===tl)return et}if(i===mo&&o===mo){for(var n=0;s===mo;)n++,s=t[--r];if(n%2===0)return et}return Bo},G0=function(A){var t=R0(A),e=t.length,r=0,s=0,i=t.map(P0);return{next:function(){if(r>=e)return{done:!0,value:null};for(var o=et;r<e&&(o=N0(t,i,++r))===et;);if(o!==et||r===e){var n=V0.apply(null,t.slice(s,r));return s=r,{value:n,done:!1}}return{done:!0,value:null}}}},X0=function(A){for(var t=G0(A),e=[],r;!(r=t.next()).done;)r.value&&e.push(r.value.slice());return e},W0=function(A){var t=123;if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=t+"px",r.style.display="block",A.body.appendChild(r),e.selectNode(r);var s=e.getBoundingClientRect(),i=Math.round(s.height);if(A.body.removeChild(r),i===t)return!0}}return!1},Y0=function(A){var t=A.createElement("boundtest");t.style.width="50px",t.style.display="block",t.style.fontSize="12px",t.style.letterSpacing="0px",t.style.wordSpacing="0px",A.body.appendChild(t);var e=A.createRange();t.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=t.firstChild,s=_i(r.data).map(function(a){return gA(a)}),i=0,o={},n=s.every(function(a,c){e.setStart(r,i),e.setEnd(r,i+a.length);var h=e.getBoundingClientRect();i+=a.length;var d=h.x>o.x||h.y>o.y;return o=h,c===0?!0:d});return A.body.removeChild(t),n},J0=function(){return typeof new Image().crossOrigin<"u"},Z0=function(){return typeof new XMLHttpRequest().responseType=="string"},q0=function(A){var t=new Image,e=A.createElement("canvas"),r=e.getContext("2d");if(!r)return!1;t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(t,0,0),e.toDataURL()}catch{return!1}return!0},el=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},j0=function(A){var t=A.createElement("canvas"),e=100;t.width=e,t.height=e;var r=t.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,e,e);var s=new Image,i=t.toDataURL();s.src=i;var o=ia(e,e,0,0,s);return r.fillStyle="red",r.fillRect(0,0,e,e),rl(o).then(function(n){r.drawImage(n,0,0);var a=r.getImageData(0,0,e,e).data;r.fillStyle="red",r.fillRect(0,0,e,e);var c=A.createElement("div");return c.style.backgroundImage="url("+i+")",c.style.height=e+"px",el(a)?rl(ia(e,e,0,0,c)):Promise.reject(!1)}).then(function(n){return r.drawImage(n,0,0),el(r.getImageData(0,0,e,e).data)}).catch(function(){return!1})},ia=function(A,t,e,r,s){var i="http://www.w3.org/2000/svg",o=document.createElementNS(i,"svg"),n=document.createElementNS(i,"foreignObject");return o.setAttributeNS(null,"width",A.toString()),o.setAttributeNS(null,"height",t.toString()),n.setAttributeNS(null,"width","100%"),n.setAttributeNS(null,"height","100%"),n.setAttributeNS(null,"x",e.toString()),n.setAttributeNS(null,"y",r.toString()),n.setAttributeNS(null,"externalResourcesRequired","true"),o.appendChild(n),n.appendChild(s),o},rl=function(A){return new Promise(function(t,e){var r=new Image;r.onload=function(){return t(r)},r.onerror=e,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},HA={get SUPPORT_RANGE_BOUNDS(){var A=W0(document);return Object.defineProperty(HA,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=HA.SUPPORT_RANGE_BOUNDS&&Y0(document);return Object.defineProperty(HA,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=q0(document);return Object.defineProperty(HA,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?j0(document):Promise.resolve(!1);return Object.defineProperty(HA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=J0();return Object.defineProperty(HA,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=Z0();return Object.defineProperty(HA,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(HA,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(HA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Gr=function(){function A(t,e){this.text=t,this.bounds=e}return A}(),Am=function(A,t,e,r){var s=rm(t,e),i=[],o=0;return s.forEach(function(n){if(e.textDecorationLine.length||n.trim().length>0)if(HA.SUPPORT_RANGE_BOUNDS){var a=sl(r,o,n.length).getClientRects();if(a.length>1){var c=Ka(n),h=0;c.forEach(function(p){i.push(new Gr(p,Vt.fromDOMRectList(A,sl(r,h+o,p.length).getClientRects()))),h+=p.length})}else i.push(new Gr(n,Vt.fromDOMRectList(A,a)))}else{var d=r.splitText(n.length);i.push(new Gr(n,tm(A,r))),r=d}else HA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(n.length));o+=n.length}),i},tm=function(A,t){var e=t.ownerDocument;if(e){var r=e.createElement("html2canvaswrapper");r.appendChild(t.cloneNode(!0));var s=t.parentNode;if(s){s.replaceChild(r,t);var i=xi(A,r);return r.firstChild&&s.replaceChild(r.firstChild,r),i}}return Vt.EMPTY},sl=function(A,t,e){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var s=r.createRange();return s.setStart(A,t),s.setEnd(A,t+e),s},Ka=function(A){if(HA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(t.segment(A)).map(function(e){return e.segment})}return X0(A)},em=function(A,t){if(HA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(A)).map(function(r){return r.segment})}return im(A,t)},rm=function(A,t){return t.letterSpacing!==0?Ka(A):em(A,t)},sm=[32,160,4961,65792,65793,4153,4241],im=function(A,t){for(var e=Ip(A,{lineBreak:t.lineBreak,wordBreak:t.overflowWrap==="break-word"?"break-word":t.wordBreak}),r=[],s,i=function(){if(s.value){var o=s.value.slice(),n=_i(o),a="";n.forEach(function(c){sm.indexOf(c)===-1?a+=gA(c):(a.length&&r.push(a),r.push(gA(c)),a="")}),a.length&&r.push(a)}};!(s=e.next()).done;)i();return r},om=function(){function A(t,e,r){this.text=am(e.data,r.textTransform),this.textBounds=Am(t,this.text,r,e)}return A}(),am=function(A,t){switch(t){case 1:return A.toLowerCase();case 3:return A.replace(nm,lm);case 2:return A.toUpperCase();default:return A}},nm=/(^|\s|:|-|\(|\))([a-z])/g,lm=function(A,t,e){return A.length>0?t+e.toUpperCase():A},td=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.src=r.currentSrc||r.src,s.intrinsicWidth=r.naturalWidth,s.intrinsicHeight=r.naturalHeight,s.context.cache.addImage(s.src),s}return t}(It),ed=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.canvas=r,s.intrinsicWidth=r.width,s.intrinsicHeight=r.height,s}return t}(It),rd=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this,i=new XMLSerializer,o=xi(e,r);return r.setAttribute("width",o.width+"px"),r.setAttribute("height",o.height+"px"),s.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(r)),s.intrinsicWidth=r.width.baseVal.value,s.intrinsicHeight=r.height.baseVal.value,s.context.cache.addImage(s.svg),s}return t}(It),sd=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.value=r.value,s}return t}(It),oa=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.start=r.start,s.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,s}return t}(It),cm=[{type:15,flags:0,unit:"px",number:3}],dm=[{type:16,flags:0,number:50}],hm=function(A){return A.width>A.height?new Vt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Vt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},um=function(A){var t=A.type===pm?new Array(A.value.length+1).join("•"):A.value;return t.length===0?A.placeholder||"":t},fi="checkbox",gi="radio",pm="password",il=707406591,Oa=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;switch(s.type=r.type.toLowerCase(),s.checked=r.checked,s.value=um(r),(s.type===fi||s.type===gi)&&(s.styles.backgroundColor=3739148031,s.styles.borderTopColor=s.styles.borderRightColor=s.styles.borderBottomColor=s.styles.borderLeftColor=2779096575,s.styles.borderTopWidth=s.styles.borderRightWidth=s.styles.borderBottomWidth=s.styles.borderLeftWidth=1,s.styles.borderTopStyle=s.styles.borderRightStyle=s.styles.borderBottomStyle=s.styles.borderLeftStyle=1,s.styles.backgroundClip=[0],s.styles.backgroundOrigin=[0],s.bounds=hm(s.bounds)),s.type){case fi:s.styles.borderTopRightRadius=s.styles.borderTopLeftRadius=s.styles.borderBottomRightRadius=s.styles.borderBottomLeftRadius=cm;break;case gi:s.styles.borderTopRightRadius=s.styles.borderTopLeftRadius=s.styles.borderBottomRightRadius=s.styles.borderBottomLeftRadius=dm;break}return s}return t}(It),id=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this,i=r.options[r.selectedIndex||0];return s.value=i&&i.text||"",s}return t}(It),od=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.value=r.value,s}return t}(It),ad=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;s.src=r.src,s.width=parseInt(r.width,10)||0,s.height=parseInt(r.height,10)||0,s.backgroundColor=s.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){s.tree=ld(e,r.contentWindow.document.documentElement);var i=r.contentWindow.document.documentElement?Pr(e,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):Rt.TRANSPARENT,o=r.contentWindow.document.body?Pr(e,getComputedStyle(r.contentWindow.document.body).backgroundColor):Rt.TRANSPARENT;s.backgroundColor=se(i)?se(o)?s.styles.backgroundColor:o:i}}catch{}return s}return t}(It),fm=["OL","UL","MENU"],ri=function(A,t,e,r){for(var s=t.firstChild,i=void 0;s;s=i)if(i=s.nextSibling,cd(s)&&s.data.trim().length>0)e.textNodes.push(new om(A,s,e.styles));else if(Ze(s))if(pd(s)&&s.assignedNodes)s.assignedNodes().forEach(function(n){return ri(A,n,e,r)});else{var o=nd(A,s);o.styles.isVisible()&&(gm(s,o,r)?o.flags|=4:mm(o.styles)&&(o.flags|=2),fm.indexOf(s.tagName)!==-1&&(o.flags|=8),e.elements.push(o),s.slot,s.shadowRoot?ri(A,s.shadowRoot,o,r):!mi(s)&&!dd(s)&&!Bi(s)&&ri(A,s,o,r))}},nd=function(A,t){return na(t)?new td(A,t):hd(t)?new ed(A,t):dd(t)?new rd(A,t):Bm(t)?new sd(A,t):bm(t)?new oa(A,t):vm(t)?new Oa(A,t):Bi(t)?new id(A,t):mi(t)?new od(A,t):ud(t)?new ad(A,t):new It(A,t)},ld=function(A,t){var e=nd(A,t);return e.flags|=4,ri(A,t,e,e),e},gm=function(A,t,e){return t.styles.isPositionedWithZIndex()||t.styles.opacity<1||t.styles.isTransformed()||$a(A)&&e.styles.isTransparent()},mm=function(A){return A.isPositioned()||A.isFloating()},cd=function(A){return A.nodeType===Node.TEXT_NODE},Ze=function(A){return A.nodeType===Node.ELEMENT_NODE},aa=function(A){return Ze(A)&&typeof A.style<"u"&&!si(A)},si=function(A){return typeof A.className=="object"},Bm=function(A){return A.tagName==="LI"},bm=function(A){return A.tagName==="OL"},vm=function(A){return A.tagName==="INPUT"},wm=function(A){return A.tagName==="HTML"},dd=function(A){return A.tagName==="svg"},$a=function(A){return A.tagName==="BODY"},hd=function(A){return A.tagName==="CANVAS"},ol=function(A){return A.tagName==="VIDEO"},na=function(A){return A.tagName==="IMG"},ud=function(A){return A.tagName==="IFRAME"},al=function(A){return A.tagName==="STYLE"},ym=function(A){return A.tagName==="SCRIPT"},mi=function(A){return A.tagName==="TEXTAREA"},Bi=function(A){return A.tagName==="SELECT"},pd=function(A){return A.tagName==="SLOT"},nl=function(A){return A.tagName.indexOf("-")>0},Cm=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(t){var e=this.counters[t];return e&&e.length?e[e.length-1]:1},A.prototype.getCounterValues=function(t){var e=this.counters[t];return e||[]},A.prototype.pop=function(t){var e=this;t.forEach(function(r){return e.counters[r].pop()})},A.prototype.parse=function(t){var e=this,r=t.counterIncrement,s=t.counterReset,i=!0;r!==null&&r.forEach(function(n){var a=e.counters[n.counter];a&&n.increment!==0&&(i=!1,a.length||a.push(1),a[Math.max(0,a.length-1)]+=n.increment)});var o=[];return i&&s.forEach(function(n){var a=e.counters[n.counter];o.push(n.counter),a||(a=e.counters[n.counter]=[]),a.push(n.reset)}),o},A}(),ll={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},cl={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},Qm={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Um={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},ze=function(A,t,e,r,s,i){return A<t||A>e?ts(A,s,i.length>0):r.integers.reduce(function(o,n,a){for(;A>=n;)A-=n,o+=r.values[a];return o},"")+i},fd=function(A,t,e,r){var s="";do e||A--,s=r(A)+s,A/=t;while(A*t>=t);return s},fA=function(A,t,e,r,s){var i=e-t+1;return(A<0?"-":"")+(fd(Math.abs(A),i,r,function(o){return gA(Math.floor(o%i)+t)})+s)},me=function(A,t,e){e===void 0&&(e=". ");var r=t.length;return fd(Math.abs(A),r,!1,function(s){return t[Math.floor(s%r)]})+e},We=1,Gt=2,Xt=4,Lr=8,$t=function(A,t,e,r,s,i){if(A<-9999||A>9999)return ts(A,4,s.length>0);var o=Math.abs(A),n=s;if(o===0)return t[0]+n;for(var a=0;o>0&&a<=4;a++){var c=o%10;c===0&&yA(i,We)&&n!==""?n=t[c]+n:c>1||c===1&&a===0||c===1&&a===1&&yA(i,Gt)||c===1&&a===1&&yA(i,Xt)&&A>100||c===1&&a>1&&yA(i,Lr)?n=t[c]+(a>0?e[a-1]:"")+n:c===1&&a>0&&(n=e[a-1]+n),o=Math.floor(o/10)}return(A<0?r:"")+n},dl="十百千萬",hl="拾佰仟萬",ul="マイナス",bo="마이너스",ts=function(A,t,e){var r=e?". ":"",s=e?"、":"",i=e?", ":"",o=e?" ":"";switch(t){case 0:return"•"+o;case 1:return"◦"+o;case 2:return"◾"+o;case 5:var n=fA(A,48,57,!0,r);return n.length<4?"0"+n:n;case 4:return me(A,"〇一二三四五六七八九",s);case 6:return ze(A,1,3999,ll,3,r).toLowerCase();case 7:return ze(A,1,3999,ll,3,r);case 8:return fA(A,945,969,!1,r);case 9:return fA(A,97,122,!1,r);case 10:return fA(A,65,90,!1,r);case 11:return fA(A,1632,1641,!0,r);case 12:case 49:return ze(A,1,9999,cl,3,r);case 35:return ze(A,1,9999,cl,3,r).toLowerCase();case 13:return fA(A,2534,2543,!0,r);case 14:case 30:return fA(A,6112,6121,!0,r);case 15:return me(A,"子丑寅卯辰巳午未申酉戌亥",s);case 16:return me(A,"甲乙丙丁戊己庚辛壬癸",s);case 17:case 48:return $t(A,"零一二三四五六七八九",dl,"負",s,Gt|Xt|Lr);case 47:return $t(A,"零壹貳參肆伍陸柒捌玖",hl,"負",s,We|Gt|Xt|Lr);case 42:return $t(A,"零一二三四五六七八九",dl,"负",s,Gt|Xt|Lr);case 41:return $t(A,"零壹贰叁肆伍陆柒捌玖",hl,"负",s,We|Gt|Xt|Lr);case 26:return $t(A,"〇一二三四五六七八九","十百千万",ul,s,0);case 25:return $t(A,"零壱弐参四伍六七八九","拾百千万",ul,s,We|Gt|Xt);case 31:return $t(A,"영일이삼사오육칠팔구","십백천만",bo,i,We|Gt|Xt);case 33:return $t(A,"零一二三四五六七八九","十百千萬",bo,i,0);case 32:return $t(A,"零壹貳參四五六七八九","拾百千",bo,i,We|Gt|Xt);case 18:return fA(A,2406,2415,!0,r);case 20:return ze(A,1,19999,Um,3,r);case 21:return fA(A,2790,2799,!0,r);case 22:return fA(A,2662,2671,!0,r);case 22:return ze(A,1,10999,Qm,3,r);case 23:return me(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return me(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return fA(A,3302,3311,!0,r);case 28:return me(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",s);case 29:return me(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",s);case 34:return fA(A,3792,3801,!0,r);case 37:return fA(A,6160,6169,!0,r);case 38:return fA(A,4160,4169,!0,r);case 39:return fA(A,2918,2927,!0,r);case 40:return fA(A,1776,1785,!0,r);case 43:return fA(A,3046,3055,!0,r);case 44:return fA(A,3174,3183,!0,r);case 45:return fA(A,3664,3673,!0,r);case 46:return fA(A,3872,3881,!0,r);case 3:default:return fA(A,48,57,!0,r)}},gd="data-html2canvas-ignore",pl=function(){function A(t,e,r){if(this.context=t,this.options=r,this.scrolledElements=[],this.referenceElement=e,this.counters=new Cm,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(t,e){var r=this,s=Fm(t,e);if(!s.contentWindow)return Promise.reject("Unable to find iframe window");var i=t.defaultView.pageXOffset,o=t.defaultView.pageYOffset,n=s.contentWindow,a=n.document,c=Em(s).then(function(){return MA(r,void 0,void 0,function(){var h,d;return TA(this,function(p){switch(p.label){case 0:return this.scrolledElements.forEach(Sm),n&&(n.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(n.scrollY!==e.top||n.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(n.scrollX-e.left,n.scrollY-e.top,0,0))),h=this.options.onclone,d=this.clonedReferenceElement,typeof d>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:a.fonts&&a.fonts.ready?[4,a.fonts.ready]:[3,2];case 1:p.sent(),p.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,_m(a)]:[3,4];case 3:p.sent(),p.label=4;case 4:return typeof h=="function"?[2,Promise.resolve().then(function(){return h(a,d)}).then(function(){return s})]:[2,s]}})})});return a.open(),a.write(Im(document.doctype)+"<html></html>"),km(this.referenceElement.ownerDocument,i,o),a.replaceChild(a.adoptNode(this.documentElement),a.documentElement),a.close(),c},A.prototype.createElementClone=function(t){if(sa(t,2))debugger;if(hd(t))return this.createCanvasClone(t);if(ol(t))return this.createVideoClone(t);if(al(t))return this.createStyleClone(t);var e=t.cloneNode(!1);return na(e)&&(na(t)&&t.currentSrc&&t.currentSrc!==t.src&&(e.src=t.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),nl(e)?this.createCustomElementClone(e):e},A.prototype.createCustomElementClone=function(t){var e=document.createElement("html2canvascustomelement");return vo(t.style,e),e},A.prototype.createStyleClone=function(t){try{var e=t.sheet;if(e&&e.cssRules){var r=[].slice.call(e.cssRules,0).reduce(function(i,o){return o&&typeof o.cssText=="string"?i+o.cssText:i},""),s=t.cloneNode(!1);return s.textContent=r,s}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return t.cloneNode(!1)},A.prototype.createCanvasClone=function(t){var e;if(this.options.inlineImages&&t.ownerDocument){var r=t.ownerDocument.createElement("img");try{return r.src=t.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",t)}}var s=t.cloneNode(!1);try{s.width=t.width,s.height=t.height;var i=t.getContext("2d"),o=s.getContext("2d");if(o)if(!this.options.allowTaint&&i)o.putImageData(i.getImageData(0,0,t.width,t.height),0,0);else{var n=(e=t.getContext("webgl2"))!==null&&e!==void 0?e:t.getContext("webgl");if(n){var a=n.getContextAttributes();(a==null?void 0:a.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",t)}o.drawImage(t,0,0)}return s}catch{this.context.logger.info("Unable to clone canvas as it is tainted",t)}return s},A.prototype.createVideoClone=function(t){var e=t.ownerDocument.createElement("canvas");e.width=t.offsetWidth,e.height=t.offsetHeight;var r=e.getContext("2d");try{return r&&(r.drawImage(t,0,0,e.width,e.height),this.options.allowTaint||r.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",t)}var s=t.ownerDocument.createElement("canvas");return s.width=t.offsetWidth,s.height=t.offsetHeight,s},A.prototype.appendChildNode=function(t,e,r){(!Ze(e)||!ym(e)&&!e.hasAttribute(gd)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!Ze(e)||!al(e))&&t.appendChild(this.cloneNode(e,r))},A.prototype.cloneChildNodes=function(t,e,r){for(var s=this,i=t.shadowRoot?t.shadowRoot.firstChild:t.firstChild;i;i=i.nextSibling)if(Ze(i)&&pd(i)&&typeof i.assignedNodes=="function"){var o=i.assignedNodes();o.length&&o.forEach(function(n){return s.appendChildNode(e,n,r)})}else this.appendChildNode(e,i,r)},A.prototype.cloneNode=function(t,e){if(cd(t))return document.createTextNode(t.data);if(!t.ownerDocument)return t.cloneNode(!1);var r=t.ownerDocument.defaultView;if(r&&Ze(t)&&(aa(t)||si(t))){var s=this.createElementClone(t);s.style.transitionProperty="none";var i=r.getComputedStyle(t),o=r.getComputedStyle(t,":before"),n=r.getComputedStyle(t,":after");this.referenceElement===t&&aa(s)&&(this.clonedReferenceElement=s),$a(s)&&Dm(s);var a=this.counters.parse(new Nn(this.context,i)),c=this.resolvePseudoContent(t,s,o,Xr.BEFORE);nl(t)&&(e=!0),ol(t)||this.cloneChildNodes(t,s,e),c&&s.insertBefore(c,s.firstChild);var h=this.resolvePseudoContent(t,s,n,Xr.AFTER);return h&&s.appendChild(h),this.counters.pop(a),(i&&(this.options.copyStyles||si(t))&&!ud(t)||e)&&vo(i,s),(t.scrollTop!==0||t.scrollLeft!==0)&&this.scrolledElements.push([s,t.scrollLeft,t.scrollTop]),(mi(t)||Bi(t))&&(mi(s)||Bi(s))&&(s.value=t.value),s}return t.cloneNode(!1)},A.prototype.resolvePseudoContent=function(t,e,r,s){var i=this;if(r){var o=r.content,n=e.ownerDocument;if(!(!n||!o||o==="none"||o==="-moz-alt-content"||r.display==="none")){this.counters.parse(new Nn(this.context,r));var a=new B0(this.context,r),c=n.createElement("html2canvaspseudoelement");vo(r,c),a.content.forEach(function(d){if(d.type===0)c.appendChild(n.createTextNode(d.value));else if(d.type===22){var p=n.createElement("img");p.src=d.value,p.style.opacity="1",c.appendChild(p)}else if(d.type===18){if(d.name==="attr"){var g=d.values.filter(tA);g.length&&c.appendChild(n.createTextNode(t.getAttribute(g[0].value)||""))}else if(d.name==="counter"){var f=d.values.filter(ir),m=f[0],Q=f[1];if(m&&tA(m)){var C=i.counters.getCounterValue(m.value),B=Q&&tA(Q)?ra.parse(i.context,Q.value):3;c.appendChild(n.createTextNode(ts(C,B,!1)))}}else if(d.name==="counters"){var U=d.values.filter(ir),m=U[0],b=U[1],Q=U[2];if(m&&tA(m)){var v=i.counters.getCounterValues(m.value),y=Q&&tA(Q)?ra.parse(i.context,Q.value):3,E=b&&b.type===0?b.value:"",k=v.map(function(G){return ts(G,y,!1)}).join(E);c.appendChild(n.createTextNode(k))}}}else if(d.type===20)switch(d.value){case"open-quote":c.appendChild(n.createTextNode(Pn(a.quotes,i.quoteDepth++,!0)));break;case"close-quote":c.appendChild(n.createTextNode(Pn(a.quotes,--i.quoteDepth,!1)));break;default:c.appendChild(n.createTextNode(d.value))}}),c.className=la+" "+ca;var h=s===Xr.BEFORE?" "+la:" "+ca;return si(e)?e.className.baseValue+=h:e.className+=h,c}}},A.destroy=function(t){return t.parentNode?(t.parentNode.removeChild(t),!0):!1},A}(),Xr;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Xr||(Xr={}));var Fm=function(A,t){var e=A.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=t.width.toString(),e.height=t.height.toString(),e.scrolling="no",e.setAttribute(gd,"true"),A.body.appendChild(e),e},xm=function(A){return new Promise(function(t){if(A.complete){t();return}if(!A.src){t();return}A.onload=t,A.onerror=t})},_m=function(A){return Promise.all([].slice.call(A.images,0).map(xm))},Em=function(A){return new Promise(function(t,e){var r=A.contentWindow;if(!r)return e("No window assigned for iframe");var s=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var i=setInterval(function(){s.body.childNodes.length>0&&s.readyState==="complete"&&(clearInterval(i),t(A))},50)}})},Hm=["all","d","content"],vo=function(A,t){for(var e=A.length-1;e>=0;e--){var r=A.item(e);Hm.indexOf(r)===-1&&t.style.setProperty(r,A.getPropertyValue(r))}return t},Im=function(A){var t="";return A&&(t+="<!DOCTYPE ",A.name&&(t+=A.name),A.internalSubset&&(t+=A.internalSubset),A.publicId&&(t+='"'+A.publicId+'"'),A.systemId&&(t+='"'+A.systemId+'"'),t+=">"),t},km=function(A,t,e){A&&A.defaultView&&(t!==A.defaultView.pageXOffset||e!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(t,e)},Sm=function(A){var t=A[0],e=A[1],r=A[2];t.scrollLeft=e,t.scrollTop=r},Lm=":before",Tm=":after",la="___html2canvas___pseudoelement_before",ca="___html2canvas___pseudoelement_after",fl=`{
    content: "" !important;
    display: none !important;
}`,Dm=function(A){Km(A,"."+la+Lm+fl+`
         .`+ca+Tm+fl)},Km=function(A,t){var e=A.ownerDocument;if(e){var r=e.createElement("style");r.textContent=t,A.appendChild(r)}},md=function(){function A(){}return A.getOrigin=function(t){var e=A._link;return e?(e.href=t,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},A.isSameOrigin=function(t){return A.getOrigin(t)===A._origin},A.setContext=function(t){A._link=t.document.createElement("a"),A._origin=A.getOrigin(t.location.href)},A._origin="about:blank",A}(),Om=function(){function A(t,e){this.context=t,this._options=e,this._cache={}}return A.prototype.addImage=function(t){var e=Promise.resolve();return this.has(t)||(yo(t)||Vm(t))&&(this._cache[t]=this.loadImage(t)).catch(function(){}),e},A.prototype.match=function(t){return this._cache[t]},A.prototype.loadImage=function(t){return MA(this,void 0,void 0,function(){var e,r,s,i,o=this;return TA(this,function(n){switch(n.label){case 0:return e=md.isSameOrigin(t),r=!wo(t)&&this._options.useCORS===!0&&HA.SUPPORT_CORS_IMAGES&&!e,s=!wo(t)&&!e&&!yo(t)&&typeof this._options.proxy=="string"&&HA.SUPPORT_CORS_XHR&&!r,!e&&this._options.allowTaint===!1&&!wo(t)&&!yo(t)&&!s&&!r?[2]:(i=t,s?[4,this.proxy(i)]:[3,2]);case 1:i=n.sent(),n.label=2;case 2:return this.context.logger.debug("Added image "+t.substring(0,256)),[4,new Promise(function(a,c){var h=new Image;h.onload=function(){return a(h)},h.onerror=c,(zm(i)||r)&&(h.crossOrigin="anonymous"),h.src=i,h.complete===!0&&setTimeout(function(){return a(h)},500),o._options.imageTimeout>0&&setTimeout(function(){return c("Timed out ("+o._options.imageTimeout+"ms) loading image")},o._options.imageTimeout)})];case 3:return[2,n.sent()]}})})},A.prototype.has=function(t){return typeof this._cache[t]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(t){var e=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var s=t.substring(0,256);return new Promise(function(i,o){var n=HA.SUPPORT_RESPONSE_TYPE?"blob":"text",a=new XMLHttpRequest;a.onload=function(){if(a.status===200)if(n==="text")i(a.response);else{var d=new FileReader;d.addEventListener("load",function(){return i(d.result)},!1),d.addEventListener("error",function(p){return o(p)},!1),d.readAsDataURL(a.response)}else o("Failed to proxy resource "+s+" with status code "+a.status)},a.onerror=o;var c=r.indexOf("?")>-1?"&":"?";if(a.open("GET",""+r+c+"url="+encodeURIComponent(t)+"&responseType="+n),n!=="text"&&a instanceof XMLHttpRequest&&(a.responseType=n),e._options.imageTimeout){var h=e._options.imageTimeout;a.timeout=h,a.ontimeout=function(){return o("Timed out ("+h+"ms) proxying "+s)}}a.send()})},A}(),$m=/^data:image\/svg\+xml/i,Mm=/^data:image\/.*;base64,/i,Rm=/^data:image\/.*/i,Vm=function(A){return HA.SUPPORT_SVG_DRAWING||!Pm(A)},wo=function(A){return Rm.test(A)},zm=function(A){return Mm.test(A)},yo=function(A){return A.substr(0,4)==="blob"},Pm=function(A){return A.substr(-3).toLowerCase()==="svg"||$m.test(A)},I=function(){function A(t,e){this.type=0,this.x=t,this.y=e}return A.prototype.add=function(t,e){return new A(this.x+t,this.y+e)},A}(),Pe=function(A,t,e){return new I(A.x+(t.x-A.x)*e,A.y+(t.y-A.y)*e)},Vs=function(){function A(t,e,r,s){this.type=1,this.start=t,this.startControl=e,this.endControl=r,this.end=s}return A.prototype.subdivide=function(t,e){var r=Pe(this.start,this.startControl,t),s=Pe(this.startControl,this.endControl,t),i=Pe(this.endControl,this.end,t),o=Pe(r,s,t),n=Pe(s,i,t),a=Pe(o,n,t);return e?new A(this.start,r,o,a):new A(a,n,i,this.end)},A.prototype.add=function(t,e){return new A(this.start.add(t,e),this.startControl.add(t,e),this.endControl.add(t,e),this.end.add(t,e))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),ot=function(A){return A.type===1},Nm=function(){function A(t){var e=t.styles,r=t.bounds,s=kr(e.borderTopLeftRadius,r.width,r.height),i=s[0],o=s[1],n=kr(e.borderTopRightRadius,r.width,r.height),a=n[0],c=n[1],h=kr(e.borderBottomRightRadius,r.width,r.height),d=h[0],p=h[1],g=kr(e.borderBottomLeftRadius,r.width,r.height),f=g[0],m=g[1],Q=[];Q.push((i+a)/r.width),Q.push((f+d)/r.width),Q.push((o+m)/r.height),Q.push((c+p)/r.height);var C=Math.max.apply(Math,Q);C>1&&(i/=C,o/=C,a/=C,c/=C,d/=C,p/=C,f/=C,m/=C);var B=r.width-a,U=r.height-p,b=r.width-d,v=r.height-m,y=e.borderTopWidth,E=e.borderRightWidth,k=e.borderBottomWidth,F=e.borderLeftWidth,_=sA(e.paddingTop,t.bounds.width),G=sA(e.paddingRight,t.bounds.width),X=sA(e.paddingBottom,t.bounds.width),M=sA(e.paddingLeft,t.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||o>0?oA(r.left+F/3,r.top+y/3,i-F/3,o-y/3,Z.TOP_LEFT):new I(r.left+F/3,r.top+y/3),this.topRightBorderDoubleOuterBox=i>0||o>0?oA(r.left+B,r.top+y/3,a-E/3,c-y/3,Z.TOP_RIGHT):new I(r.left+r.width-E/3,r.top+y/3),this.bottomRightBorderDoubleOuterBox=d>0||p>0?oA(r.left+b,r.top+U,d-E/3,p-k/3,Z.BOTTOM_RIGHT):new I(r.left+r.width-E/3,r.top+r.height-k/3),this.bottomLeftBorderDoubleOuterBox=f>0||m>0?oA(r.left+F/3,r.top+v,f-F/3,m-k/3,Z.BOTTOM_LEFT):new I(r.left+F/3,r.top+r.height-k/3),this.topLeftBorderDoubleInnerBox=i>0||o>0?oA(r.left+F*2/3,r.top+y*2/3,i-F*2/3,o-y*2/3,Z.TOP_LEFT):new I(r.left+F*2/3,r.top+y*2/3),this.topRightBorderDoubleInnerBox=i>0||o>0?oA(r.left+B,r.top+y*2/3,a-E*2/3,c-y*2/3,Z.TOP_RIGHT):new I(r.left+r.width-E*2/3,r.top+y*2/3),this.bottomRightBorderDoubleInnerBox=d>0||p>0?oA(r.left+b,r.top+U,d-E*2/3,p-k*2/3,Z.BOTTOM_RIGHT):new I(r.left+r.width-E*2/3,r.top+r.height-k*2/3),this.bottomLeftBorderDoubleInnerBox=f>0||m>0?oA(r.left+F*2/3,r.top+v,f-F*2/3,m-k*2/3,Z.BOTTOM_LEFT):new I(r.left+F*2/3,r.top+r.height-k*2/3),this.topLeftBorderStroke=i>0||o>0?oA(r.left+F/2,r.top+y/2,i-F/2,o-y/2,Z.TOP_LEFT):new I(r.left+F/2,r.top+y/2),this.topRightBorderStroke=i>0||o>0?oA(r.left+B,r.top+y/2,a-E/2,c-y/2,Z.TOP_RIGHT):new I(r.left+r.width-E/2,r.top+y/2),this.bottomRightBorderStroke=d>0||p>0?oA(r.left+b,r.top+U,d-E/2,p-k/2,Z.BOTTOM_RIGHT):new I(r.left+r.width-E/2,r.top+r.height-k/2),this.bottomLeftBorderStroke=f>0||m>0?oA(r.left+F/2,r.top+v,f-F/2,m-k/2,Z.BOTTOM_LEFT):new I(r.left+F/2,r.top+r.height-k/2),this.topLeftBorderBox=i>0||o>0?oA(r.left,r.top,i,o,Z.TOP_LEFT):new I(r.left,r.top),this.topRightBorderBox=a>0||c>0?oA(r.left+B,r.top,a,c,Z.TOP_RIGHT):new I(r.left+r.width,r.top),this.bottomRightBorderBox=d>0||p>0?oA(r.left+b,r.top+U,d,p,Z.BOTTOM_RIGHT):new I(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=f>0||m>0?oA(r.left,r.top+v,f,m,Z.BOTTOM_LEFT):new I(r.left,r.top+r.height),this.topLeftPaddingBox=i>0||o>0?oA(r.left+F,r.top+y,Math.max(0,i-F),Math.max(0,o-y),Z.TOP_LEFT):new I(r.left+F,r.top+y),this.topRightPaddingBox=a>0||c>0?oA(r.left+Math.min(B,r.width-E),r.top+y,B>r.width+E?0:Math.max(0,a-E),Math.max(0,c-y),Z.TOP_RIGHT):new I(r.left+r.width-E,r.top+y),this.bottomRightPaddingBox=d>0||p>0?oA(r.left+Math.min(b,r.width-F),r.top+Math.min(U,r.height-k),Math.max(0,d-E),Math.max(0,p-k),Z.BOTTOM_RIGHT):new I(r.left+r.width-E,r.top+r.height-k),this.bottomLeftPaddingBox=f>0||m>0?oA(r.left+F,r.top+Math.min(v,r.height-k),Math.max(0,f-F),Math.max(0,m-k),Z.BOTTOM_LEFT):new I(r.left+F,r.top+r.height-k),this.topLeftContentBox=i>0||o>0?oA(r.left+F+M,r.top+y+_,Math.max(0,i-(F+M)),Math.max(0,o-(y+_)),Z.TOP_LEFT):new I(r.left+F+M,r.top+y+_),this.topRightContentBox=a>0||c>0?oA(r.left+Math.min(B,r.width+F+M),r.top+y+_,B>r.width+F+M?0:a-F+M,c-(y+_),Z.TOP_RIGHT):new I(r.left+r.width-(E+G),r.top+y+_),this.bottomRightContentBox=d>0||p>0?oA(r.left+Math.min(b,r.width-(F+M)),r.top+Math.min(U,r.height+y+_),Math.max(0,d-(E+G)),p-(k+X),Z.BOTTOM_RIGHT):new I(r.left+r.width-(E+G),r.top+r.height-(k+X)),this.bottomLeftContentBox=f>0||m>0?oA(r.left+F+M,r.top+v,Math.max(0,f-(F+M)),m-(k+X),Z.BOTTOM_LEFT):new I(r.left+F+M,r.top+r.height-(k+X))}return A}(),Z;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(Z||(Z={}));var oA=function(A,t,e,r,s){var i=4*((Math.sqrt(2)-1)/3),o=e*i,n=r*i,a=A+e,c=t+r;switch(s){case Z.TOP_LEFT:return new Vs(new I(A,c),new I(A,c-n),new I(a-o,t),new I(a,t));case Z.TOP_RIGHT:return new Vs(new I(A,t),new I(A+o,t),new I(a,c-n),new I(a,c));case Z.BOTTOM_RIGHT:return new Vs(new I(a,t),new I(a,t+n),new I(A+o,c),new I(A,c));case Z.BOTTOM_LEFT:default:return new Vs(new I(a,c),new I(a-o,c),new I(A,t+n),new I(A,t))}},bi=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},Gm=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},vi=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},Xm=function(){function A(t,e,r){this.offsetX=t,this.offsetY=e,this.matrix=r,this.type=0,this.target=6}return A}(),zs=function(){function A(t,e){this.path=t,this.target=e,this.type=1}return A}(),Wm=function(){function A(t){this.opacity=t,this.type=2,this.target=6}return A}(),Ym=function(A){return A.type===0},Bd=function(A){return A.type===1},Jm=function(A){return A.type===2},gl=function(A,t){return A.length===t.length?A.some(function(e,r){return e===t[r]}):!1},Zm=function(A,t,e,r,s){return A.map(function(i,o){switch(o){case 0:return i.add(t,e);case 1:return i.add(t+r,e);case 2:return i.add(t+r,e+s);case 3:return i.add(t,e+s)}return i})},bd=function(){function A(t){this.element=t,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),vd=function(){function A(t,e){if(this.container=t,this.parent=e,this.effects=[],this.curves=new Nm(this.container),this.container.styles.opacity<1&&this.effects.push(new Wm(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,s=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new Xm(r,s,i))}if(this.container.styles.overflowX!==0){var o=bi(this.curves),n=vi(this.curves);gl(o,n)?this.effects.push(new zs(o,6)):(this.effects.push(new zs(o,2)),this.effects.push(new zs(n,4)))}}return A.prototype.getEffects=function(t){for(var e=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,s=this.effects.slice(0);r;){var i=r.effects.filter(function(a){return!Bd(a)});if(e||r.container.styles.position!==0||!r.parent){if(s.unshift.apply(s,i),e=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var o=bi(r.curves),n=vi(r.curves);gl(o,n)||s.unshift(new zs(n,6))}}else s.unshift.apply(s,i);r=r.parent}return s.filter(function(a){return yA(a.target,t)})},A}(),da=function(A,t,e,r){A.container.elements.forEach(function(s){var i=yA(s.flags,4),o=yA(s.flags,2),n=new vd(s,A);yA(s.styles.display,2048)&&r.push(n);var a=yA(s.flags,8)?[]:r;if(i||o){var c=i||s.styles.isPositioned()?e:t,h=new bd(n);if(s.styles.isPositioned()||s.styles.opacity<1||s.styles.isTransformed()){var d=s.styles.zIndex.order;if(d<0){var p=0;c.negativeZIndex.some(function(f,m){return d>f.element.container.styles.zIndex.order?(p=m,!1):p>0}),c.negativeZIndex.splice(p,0,h)}else if(d>0){var g=0;c.positiveZIndex.some(function(f,m){return d>=f.element.container.styles.zIndex.order?(g=m+1,!1):g>0}),c.positiveZIndex.splice(g,0,h)}else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(h)}else s.styles.isFloating()?c.nonPositionedFloats.push(h):c.nonPositionedInlineLevel.push(h);da(n,h,i?h:e,a)}else s.styles.isInlineLevel()?t.inlineLevel.push(n):t.nonInlineLevel.push(n),da(n,t,e,a);yA(s.flags,8)&&wd(s,a)})},wd=function(A,t){for(var e=A instanceof oa?A.start:1,r=A instanceof oa?A.reversed:!1,s=0;s<t.length;s++){var i=t[s];i.container instanceof sd&&typeof i.container.value=="number"&&i.container.value!==0&&(e=i.container.value),i.listValue=ts(e,i.container.styles.listStyleType,!0),e+=r?-1:1}},qm=function(A){var t=new vd(A,null),e=new bd(t),r=[];return da(t,e,e,r),wd(t.container,r),e},ml=function(A,t){switch(t){case 0:return nt(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return nt(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return nt(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return nt(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},jm=function(A,t){switch(t){case 0:return nt(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return nt(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return nt(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return nt(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},AB=function(A,t){switch(t){case 0:return nt(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return nt(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return nt(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return nt(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},tB=function(A,t){switch(t){case 0:return Ps(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return Ps(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return Ps(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return Ps(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},Ps=function(A,t){var e=[];return ot(A)?e.push(A.subdivide(.5,!1)):e.push(A),ot(t)?e.push(t.subdivide(.5,!0)):e.push(t),e},nt=function(A,t,e,r){var s=[];return ot(A)?s.push(A.subdivide(.5,!1)):s.push(A),ot(e)?s.push(e.subdivide(.5,!0)):s.push(e),ot(r)?s.push(r.subdivide(.5,!0).reverse()):s.push(r),ot(t)?s.push(t.subdivide(.5,!1).reverse()):s.push(t),s},yd=function(A){var t=A.bounds,e=A.styles;return t.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},wi=function(A){var t=A.styles,e=A.bounds,r=sA(t.paddingLeft,e.width),s=sA(t.paddingRight,e.width),i=sA(t.paddingTop,e.width),o=sA(t.paddingBottom,e.width);return e.add(r+t.borderLeftWidth,i+t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth+r+s),-(t.borderTopWidth+t.borderBottomWidth+i+o))},eB=function(A,t){return A===0?t.bounds:A===2?wi(t):yd(t)},rB=function(A,t){return A===0?t.bounds:A===2?wi(t):yd(t)},Co=function(A,t,e){var r=eB(Ye(A.styles.backgroundOrigin,t),A),s=rB(Ye(A.styles.backgroundClip,t),A),i=sB(Ye(A.styles.backgroundSize,t),e,r),o=i[0],n=i[1],a=kr(Ye(A.styles.backgroundPosition,t),r.width-o,r.height-n),c=iB(Ye(A.styles.backgroundRepeat,t),a,i,r,s),h=Math.round(r.left+a[0]),d=Math.round(r.top+a[1]);return[c,h,d,o,n]},Ne=function(A){return tA(A)&&A.value===qe.AUTO},Ns=function(A){return typeof A=="number"},sB=function(A,t,e){var r=t[0],s=t[1],i=t[2],o=A[0],n=A[1];if(!o)return[0,0];if(BA(o)&&n&&BA(n))return[sA(o,e.width),sA(n,e.height)];var a=Ns(i);if(tA(o)&&(o.value===qe.CONTAIN||o.value===qe.COVER)){if(Ns(i)){var c=e.width/e.height;return c<i!=(o.value===qe.COVER)?[e.width,e.width/i]:[e.height*i,e.height]}return[e.width,e.height]}var h=Ns(r),d=Ns(s),p=h||d;if(Ne(o)&&(!n||Ne(n))){if(h&&d)return[r,s];if(!a&&!p)return[e.width,e.height];if(p&&a){var g=h?r:s*i,f=d?s:r/i;return[g,f]}var m=h?r:e.width,Q=d?s:e.height;return[m,Q]}if(a){var C=0,B=0;return BA(o)?C=sA(o,e.width):BA(n)&&(B=sA(n,e.height)),Ne(o)?C=B*i:(!n||Ne(n))&&(B=C/i),[C,B]}var U=null,b=null;if(BA(o)?U=sA(o,e.width):n&&BA(n)&&(b=sA(n,e.height)),U!==null&&(!n||Ne(n))&&(b=h&&d?U/r*s:e.height),b!==null&&Ne(o)&&(U=h&&d?b/s*r:e.width),U!==null&&b!==null)return[U,b];throw new Error("Unable to calculate background-size for element")},Ye=function(A,t){var e=A[t];return typeof e>"u"?A[0]:e},iB=function(A,t,e,r,s){var i=t[0],o=t[1],n=e[0],a=e[1];switch(A){case 2:return[new I(Math.round(r.left),Math.round(r.top+o)),new I(Math.round(r.left+r.width),Math.round(r.top+o)),new I(Math.round(r.left+r.width),Math.round(a+r.top+o)),new I(Math.round(r.left),Math.round(a+r.top+o))];case 3:return[new I(Math.round(r.left+i),Math.round(r.top)),new I(Math.round(r.left+i+n),Math.round(r.top)),new I(Math.round(r.left+i+n),Math.round(r.height+r.top)),new I(Math.round(r.left+i),Math.round(r.height+r.top))];case 1:return[new I(Math.round(r.left+i),Math.round(r.top+o)),new I(Math.round(r.left+i+n),Math.round(r.top+o)),new I(Math.round(r.left+i+n),Math.round(r.top+o+a)),new I(Math.round(r.left+i),Math.round(r.top+o+a))];default:return[new I(Math.round(s.left),Math.round(s.top)),new I(Math.round(s.left+s.width),Math.round(s.top)),new I(Math.round(s.left+s.width),Math.round(s.height+s.top)),new I(Math.round(s.left),Math.round(s.height+s.top))]}},oB="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Bl="Hidden Text",aB=function(){function A(t){this._data={},this._document=t}return A.prototype.parseMetrics=function(t,e){var r=this._document.createElement("div"),s=this._document.createElement("img"),i=this._document.createElement("span"),o=this._document.body;r.style.visibility="hidden",r.style.fontFamily=t,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",o.appendChild(r),s.src=oB,s.width=1,s.height=1,s.style.margin="0",s.style.padding="0",s.style.verticalAlign="baseline",i.style.fontFamily=t,i.style.fontSize=e,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(Bl)),r.appendChild(i),r.appendChild(s);var n=s.offsetTop-i.offsetTop+2;r.removeChild(i),r.appendChild(this._document.createTextNode(Bl)),r.style.lineHeight="normal",s.style.verticalAlign="super";var a=s.offsetTop-r.offsetTop+2;return o.removeChild(r),{baseline:n,middle:a}},A.prototype.getMetrics=function(t,e){var r=t+" "+e;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(t,e)),this._data[r]},A}(),Cd=function(){function A(t,e){this.context=t,this.options=e}return A}(),nB=1e4,lB=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s._activeEffects=[],s.canvas=r.canvas?r.canvas:document.createElement("canvas"),s.ctx=s.canvas.getContext("2d"),r.canvas||(s.canvas.width=Math.floor(r.width*r.scale),s.canvas.height=Math.floor(r.height*r.scale),s.canvas.style.width=r.width+"px",s.canvas.style.height=r.height+"px"),s.fontMetrics=new aB(document),s.ctx.scale(s.options.scale,s.options.scale),s.ctx.translate(-r.x,-r.y),s.ctx.textBaseline="bottom",s._activeEffects=[],s.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),s}return t.prototype.applyEffects=function(e){for(var r=this;this._activeEffects.length;)this.popEffect();e.forEach(function(s){return r.applyEffect(s)})},t.prototype.applyEffect=function(e){this.ctx.save(),Jm(e)&&(this.ctx.globalAlpha=e.opacity),Ym(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),Bd(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},t.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},t.prototype.renderStack=function(e){return MA(this,void 0,void 0,function(){var r;return TA(this,function(s){switch(s.label){case 0:return r=e.element.container.styles,r.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}})})},t.prototype.renderNode=function(e){return MA(this,void 0,void 0,function(){return TA(this,function(r){switch(r.label){case 0:if(yA(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(e)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},t.prototype.renderTextWithLetterSpacing=function(e,r,s){var i=this;if(r===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+s);else{var o=Ka(e.text);o.reduce(function(n,a){return i.ctx.fillText(a,n,e.bounds.top+s),n+i.ctx.measureText(a).width},e.bounds.left)}},t.prototype.createFontStyle=function(e){var r=e.fontVariant.filter(function(o){return o==="normal"||o==="small-caps"}).join(""),s=pB(e.fontFamily).join(", "),i=us(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,r,e.fontWeight,i,s].join(" "),s,i]},t.prototype.renderTextNode=function(e,r){return MA(this,void 0,void 0,function(){var s,i,o,n,a,c,h,d,p=this;return TA(this,function(g){return s=this.createFontStyle(r),i=s[0],o=s[1],n=s[2],this.ctx.font=i,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",a=this.fontMetrics.getMetrics(o,n),c=a.baseline,h=a.middle,d=r.paintOrder,e.textBounds.forEach(function(f){d.forEach(function(m){switch(m){case 0:p.ctx.fillStyle=UA(r.color),p.renderTextWithLetterSpacing(f,r.letterSpacing,c);var Q=r.textShadow;Q.length&&f.text.trim().length&&(Q.slice(0).reverse().forEach(function(C){p.ctx.shadowColor=UA(C.color),p.ctx.shadowOffsetX=C.offsetX.number*p.options.scale,p.ctx.shadowOffsetY=C.offsetY.number*p.options.scale,p.ctx.shadowBlur=C.blur.number,p.renderTextWithLetterSpacing(f,r.letterSpacing,c)}),p.ctx.shadowColor="",p.ctx.shadowOffsetX=0,p.ctx.shadowOffsetY=0,p.ctx.shadowBlur=0),r.textDecorationLine.length&&(p.ctx.fillStyle=UA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(C){switch(C){case 1:p.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top+c),f.bounds.width,1);break;case 2:p.ctx.fillRect(f.bounds.left,Math.round(f.bounds.top),f.bounds.width,1);break;case 3:p.ctx.fillRect(f.bounds.left,Math.ceil(f.bounds.top+h),f.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&f.text.trim().length&&(p.ctx.strokeStyle=UA(r.webkitTextStrokeColor),p.ctx.lineWidth=r.webkitTextStrokeWidth,p.ctx.lineJoin=window.chrome?"miter":"round",p.ctx.strokeText(f.text,f.bounds.left,f.bounds.top+c)),p.ctx.strokeStyle="",p.ctx.lineWidth=0,p.ctx.lineJoin="miter";break}})}),[2]})})},t.prototype.renderReplacedElement=function(e,r,s){if(s&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var i=wi(e),o=vi(r);this.path(o),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(s,0,0,e.intrinsicWidth,e.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},t.prototype.renderNodeContent=function(e){return MA(this,void 0,void 0,function(){var r,s,i,o,n,a,B,B,c,h,d,p,b,g,f,v,m,Q,C,B,U,b,v;return TA(this,function(y){switch(y.label){case 0:this.applyEffects(e.getEffects(4)),r=e.container,s=e.curves,i=r.styles,o=0,n=r.textNodes,y.label=1;case 1:return o<n.length?(a=n[o],[4,this.renderTextNode(a,i)]):[3,4];case 2:y.sent(),y.label=3;case 3:return o++,[3,1];case 4:if(!(r instanceof td))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return B=y.sent(),this.renderReplacedElement(r,s,B),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof ed&&this.renderReplacedElement(r,s,r.canvas),!(r instanceof rd))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return B=y.sent(),this.renderReplacedElement(r,s,B),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof ad&&r.tree?(c=new t(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,c.render(r.tree)]):[3,14];case 13:h=y.sent(),r.width&&r.height&&this.ctx.drawImage(h,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),y.label=14;case 14:if(r instanceof Oa&&(d=Math.min(r.bounds.width,r.bounds.height),r.type===fi?r.checked&&(this.ctx.save(),this.path([new I(r.bounds.left+d*.39363,r.bounds.top+d*.79),new I(r.bounds.left+d*.16,r.bounds.top+d*.5549),new I(r.bounds.left+d*.27347,r.bounds.top+d*.44071),new I(r.bounds.left+d*.39694,r.bounds.top+d*.5649),new I(r.bounds.left+d*.72983,r.bounds.top+d*.23),new I(r.bounds.left+d*.84,r.bounds.top+d*.34085),new I(r.bounds.left+d*.39363,r.bounds.top+d*.79)]),this.ctx.fillStyle=UA(il),this.ctx.fill(),this.ctx.restore()):r.type===gi&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+d/2,r.bounds.top+d/2,d/4,0,Math.PI*2,!0),this.ctx.fillStyle=UA(il),this.ctx.fill(),this.ctx.restore())),cB(r)&&r.value.length){switch(p=this.createFontStyle(i),b=p[0],g=p[1],f=this.fontMetrics.getMetrics(b,g).baseline,this.ctx.font=b,this.ctx.fillStyle=UA(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=hB(r.styles.textAlign),v=wi(r),m=0,r.styles.textAlign){case 1:m+=v.width/2;break;case 2:m+=v.width;break}Q=v.add(m,0,0,-v.height/2+1),this.ctx.save(),this.path([new I(v.left,v.top),new I(v.left+v.width,v.top),new I(v.left+v.width,v.top+v.height),new I(v.left,v.top+v.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Gr(r.value,Q),i.letterSpacing,f),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!yA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(C=r.styles.listStyleImage,C.type!==0)return[3,18];B=void 0,U=C.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(U)];case 16:return B=y.sent(),this.ctx.drawImage(B,r.bounds.left-(B.width+10),r.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+U),[3,18];case 18:return[3,20];case 19:e.listValue&&r.styles.listStyleType!==-1&&(b=this.createFontStyle(i)[0],this.ctx.font=b,this.ctx.fillStyle=UA(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",v=new Vt(r.bounds.left,r.bounds.top+sA(r.styles.paddingTop,r.bounds.width),r.bounds.width,Vn(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Gr(e.listValue,v),i.letterSpacing,Vn(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},t.prototype.renderStackContent=function(e){return MA(this,void 0,void 0,function(){var r,s,C,i,o,C,n,a,C,c,h,C,d,p,C,g,f,C,m,Q,C;return TA(this,function(B){switch(B.label){case 0:if(yA(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:B.sent(),r=0,s=e.negativeZIndex,B.label=2;case 2:return r<s.length?(C=s[r],[4,this.renderStack(C)]):[3,5];case 3:B.sent(),B.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:B.sent(),i=0,o=e.nonInlineLevel,B.label=7;case 7:return i<o.length?(C=o[i],[4,this.renderNode(C)]):[3,10];case 8:B.sent(),B.label=9;case 9:return i++,[3,7];case 10:n=0,a=e.nonPositionedFloats,B.label=11;case 11:return n<a.length?(C=a[n],[4,this.renderStack(C)]):[3,14];case 12:B.sent(),B.label=13;case 13:return n++,[3,11];case 14:c=0,h=e.nonPositionedInlineLevel,B.label=15;case 15:return c<h.length?(C=h[c],[4,this.renderStack(C)]):[3,18];case 16:B.sent(),B.label=17;case 17:return c++,[3,15];case 18:d=0,p=e.inlineLevel,B.label=19;case 19:return d<p.length?(C=p[d],[4,this.renderNode(C)]):[3,22];case 20:B.sent(),B.label=21;case 21:return d++,[3,19];case 22:g=0,f=e.zeroOrAutoZIndexOrTransformedOrOpacity,B.label=23;case 23:return g<f.length?(C=f[g],[4,this.renderStack(C)]):[3,26];case 24:B.sent(),B.label=25;case 25:return g++,[3,23];case 26:m=0,Q=e.positiveZIndex,B.label=27;case 27:return m<Q.length?(C=Q[m],[4,this.renderStack(C)]):[3,30];case 28:B.sent(),B.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},t.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},t.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},t.prototype.formatPath=function(e){var r=this;e.forEach(function(s,i){var o=ot(s)?s.start:s;i===0?r.ctx.moveTo(o.x,o.y):r.ctx.lineTo(o.x,o.y),ot(s)&&r.ctx.bezierCurveTo(s.startControl.x,s.startControl.y,s.endControl.x,s.endControl.y,s.end.x,s.end.y)})},t.prototype.renderRepeat=function(e,r,s,i){this.path(e),this.ctx.fillStyle=r,this.ctx.translate(s,i),this.ctx.fill(),this.ctx.translate(-s,-i)},t.prototype.resizeImage=function(e,r,s){var i;if(e.width===r&&e.height===s)return e;var o=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,n=o.createElement("canvas");n.width=Math.max(1,r),n.height=Math.max(1,s);var a=n.getContext("2d");return a.drawImage(e,0,0,e.width,e.height,0,0,r,s),n},t.prototype.renderBackgroundImage=function(e){return MA(this,void 0,void 0,function(){var r,s,i,o,n,a;return TA(this,function(c){switch(c.label){case 0:r=e.styles.backgroundImage.length-1,s=function(h){var d,p,g,_,iA,rA,M,V,k,f,_,iA,rA,M,V,m,Q,C,B,U,b,v,y,E,k,F,_,G,X,M,V,uA,iA,rA,vA,wA,wt,he,ue,Tt,pe,Dt;return TA(this,function($e){switch($e.label){case 0:if(h.type!==0)return[3,5];d=void 0,p=h.url,$e.label=1;case 1:return $e.trys.push([1,3,,4]),[4,i.context.cache.match(p)];case 2:return d=$e.sent(),[3,4];case 3:return $e.sent(),i.context.logger.error("Error loading background-image "+p),[3,4];case 4:return d&&(g=Co(e,r,[d.width,d.height,d.width/d.height]),_=g[0],iA=g[1],rA=g[2],M=g[3],V=g[4],k=i.ctx.createPattern(i.resizeImage(d,M,V),"repeat"),i.renderRepeat(_,k,iA,rA)),[3,6];case 5:Yf(h)?(f=Co(e,r,[null,null,null]),_=f[0],iA=f[1],rA=f[2],M=f[3],V=f[4],m=Pf(h.angle,M,V),Q=m[0],C=m[1],B=m[2],U=m[3],b=m[4],v=document.createElement("canvas"),v.width=M,v.height=V,y=v.getContext("2d"),E=y.createLinearGradient(C,U,B,b),Mn(h.stops,Q).forEach(function(gr){return E.addColorStop(gr.stop,UA(gr.color))}),y.fillStyle=E,y.fillRect(0,0,M,V),M>0&&V>0&&(k=i.ctx.createPattern(v,"repeat"),i.renderRepeat(_,k,iA,rA))):Jf(h)&&(F=Co(e,r,[null,null,null]),_=F[0],G=F[1],X=F[2],M=F[3],V=F[4],uA=h.position.length===0?[La]:h.position,iA=sA(uA[0],M),rA=sA(uA[uA.length-1],V),vA=Nf(h,iA,rA,M,V),wA=vA[0],wt=vA[1],wA>0&&wt>0&&(he=i.ctx.createRadialGradient(G+iA,X+rA,0,G+iA,X+rA,wA),Mn(h.stops,wA*2).forEach(function(gr){return he.addColorStop(gr.stop,UA(gr.color))}),i.path(_),i.ctx.fillStyle=he,wA!==wt?(ue=e.bounds.left+.5*e.bounds.width,Tt=e.bounds.top+.5*e.bounds.height,pe=wt/wA,Dt=1/pe,i.ctx.save(),i.ctx.translate(ue,Tt),i.ctx.transform(1,0,0,pe,0,0),i.ctx.translate(-ue,-Tt),i.ctx.fillRect(G,Dt*(X-Tt)+Tt,M,V*Dt),i.ctx.restore()):i.ctx.fill())),$e.label=6;case 6:return r--,[2]}})},i=this,o=0,n=e.styles.backgroundImage.slice(0).reverse(),c.label=1;case 1:return o<n.length?(a=n[o],[5,s(a)]):[3,4];case 2:c.sent(),c.label=3;case 3:return o++,[3,1];case 4:return[2]}})})},t.prototype.renderSolidBorder=function(e,r,s){return MA(this,void 0,void 0,function(){return TA(this,function(i){return this.path(ml(s,r)),this.ctx.fillStyle=UA(e),this.ctx.fill(),[2]})})},t.prototype.renderDoubleBorder=function(e,r,s,i){return MA(this,void 0,void 0,function(){var o,n;return TA(this,function(a){switch(a.label){case 0:return r<3?[4,this.renderSolidBorder(e,s,i)]:[3,2];case 1:return a.sent(),[2];case 2:return o=jm(i,s),this.path(o),this.ctx.fillStyle=UA(e),this.ctx.fill(),n=AB(i,s),this.path(n),this.ctx.fill(),[2]}})})},t.prototype.renderNodeBackgroundAndBorders=function(e){return MA(this,void 0,void 0,function(){var r,s,i,o,n,a,c,h,d=this;return TA(this,function(p){switch(p.label){case 0:return this.applyEffects(e.getEffects(2)),r=e.container.styles,s=!se(r.backgroundColor)||r.backgroundImage.length,i=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],o=dB(Ye(r.backgroundClip,0),e.curves),s||r.boxShadow.length?(this.ctx.save(),this.path(o),this.ctx.clip(),se(r.backgroundColor)||(this.ctx.fillStyle=UA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:p.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(g){d.ctx.save();var f=bi(e.curves),m=g.inset?0:nB,Q=Zm(f,-m+(g.inset?1:-1)*g.spread.number,(g.inset?1:-1)*g.spread.number,g.spread.number*(g.inset?-2:2),g.spread.number*(g.inset?-2:2));g.inset?(d.path(f),d.ctx.clip(),d.mask(Q)):(d.mask(f),d.ctx.clip(),d.path(Q)),d.ctx.shadowOffsetX=g.offsetX.number+m,d.ctx.shadowOffsetY=g.offsetY.number,d.ctx.shadowColor=UA(g.color),d.ctx.shadowBlur=g.blur.number,d.ctx.fillStyle=g.inset?UA(g.color):"rgba(0,0,0,1)",d.ctx.fill(),d.ctx.restore()}),p.label=2;case 2:n=0,a=0,c=i,p.label=3;case 3:return a<c.length?(h=c[a],h.style!==0&&!se(h.color)&&h.width>0?h.style!==2?[3,5]:[4,this.renderDashedDottedBorder(h.color,h.width,n,e.curves,2)]:[3,11]):[3,13];case 4:return p.sent(),[3,11];case 5:return h.style!==3?[3,7]:[4,this.renderDashedDottedBorder(h.color,h.width,n,e.curves,3)];case 6:return p.sent(),[3,11];case 7:return h.style!==4?[3,9]:[4,this.renderDoubleBorder(h.color,h.width,n,e.curves)];case 8:return p.sent(),[3,11];case 9:return[4,this.renderSolidBorder(h.color,n,e.curves)];case 10:p.sent(),p.label=11;case 11:n++,p.label=12;case 12:return a++,[3,3];case 13:return[2]}})})},t.prototype.renderDashedDottedBorder=function(e,r,s,i,o){return MA(this,void 0,void 0,function(){var n,a,c,h,d,p,g,f,m,Q,C,B,U,b,v,y,v,y;return TA(this,function(E){return this.ctx.save(),n=tB(i,s),a=ml(i,s),o===2&&(this.path(a),this.ctx.clip()),ot(a[0])?(c=a[0].start.x,h=a[0].start.y):(c=a[0].x,h=a[0].y),ot(a[1])?(d=a[1].end.x,p=a[1].end.y):(d=a[1].x,p=a[1].y),s===0||s===2?g=Math.abs(c-d):g=Math.abs(h-p),this.ctx.beginPath(),o===3?this.formatPath(n):this.formatPath(a.slice(0,2)),f=r<3?r*3:r*2,m=r<3?r*2:r,o===3&&(f=r,m=r),Q=!0,g<=f*2?Q=!1:g<=f*2+m?(C=g/(2*f+m),f*=C,m*=C):(B=Math.floor((g+m)/(f+m)),U=(g-B*f)/(B-1),b=(g-(B+1)*f)/B,m=b<=0||Math.abs(m-U)<Math.abs(m-b)?U:b),Q&&(o===3?this.ctx.setLineDash([0,f+m]):this.ctx.setLineDash([f,m])),o===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=UA(e),this.ctx.stroke(),this.ctx.setLineDash([]),o===2&&(ot(a[0])&&(v=a[3],y=a[0],this.ctx.beginPath(),this.formatPath([new I(v.end.x,v.end.y),new I(y.start.x,y.start.y)]),this.ctx.stroke()),ot(a[1])&&(v=a[1],y=a[2],this.ctx.beginPath(),this.formatPath([new I(v.end.x,v.end.y),new I(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},t.prototype.render=function(e){return MA(this,void 0,void 0,function(){var r;return TA(this,function(s){switch(s.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=UA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=qm(e),[4,this.renderStack(r)];case 1:return s.sent(),this.applyEffects([]),[2,this.canvas]}})})},t}(Cd),cB=function(A){return A instanceof od||A instanceof id?!0:A instanceof Oa&&A.type!==gi&&A.type!==fi},dB=function(A,t){switch(A){case 0:return bi(t);case 2:return Gm(t);case 1:default:return vi(t)}},hB=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},uB=["-apple-system","system-ui"],pB=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(t){return uB.indexOf(t)===-1}):A},fB=function(A){pt(t,A);function t(e,r){var s=A.call(this,e,r)||this;return s.canvas=r.canvas?r.canvas:document.createElement("canvas"),s.ctx=s.canvas.getContext("2d"),s.options=r,s.canvas.width=Math.floor(r.width*r.scale),s.canvas.height=Math.floor(r.height*r.scale),s.canvas.style.width=r.width+"px",s.canvas.style.height=r.height+"px",s.ctx.scale(s.options.scale,s.options.scale),s.ctx.translate(-r.x,-r.y),s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),s}return t.prototype.render=function(e){return MA(this,void 0,void 0,function(){var r,s;return TA(this,function(i){switch(i.label){case 0:return r=ia(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,gB(r)];case 1:return s=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=UA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(s,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},t}(Cd),gB=function(A){return new Promise(function(t,e){var r=new Image;r.onload=function(){t(r)},r.onerror=e,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},mB=function(){function A(t){var e=t.id,r=t.enabled;this.id=e,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Cs([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Cs([this.id,this.getTime()+"ms"],t))},A.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Cs([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},A.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Cs([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},A.instances={},A}(),BB=function(){function A(t,e){var r;this.windowBounds=e,this.instanceName="#"+A.instanceCount++,this.logger=new mB({id:this.instanceName,enabled:t.logging}),this.cache=(r=t.cache)!==null&&r!==void 0?r:new Om(this,t)}return A.instanceCount=1,A}(),bB=function(A,t){return t===void 0&&(t={}),vB(A,t)};typeof window<"u"&&md.setContext(window);var vB=function(A,t){return MA(void 0,void 0,void 0,function(){var e,r,s,i,o,n,a,c,h,d,p,g,f,m,Q,C,B,U,b,v,E,y,E,k,F,_,G,X,M,V,uA,iA,rA,vA,wA,wt,he,ue,Tt,pe;return TA(this,function(Dt){switch(Dt.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=A.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(r=e.defaultView,!r)throw new Error("Document is not attached to a Window");return s={allowTaint:(k=t.allowTaint)!==null&&k!==void 0?k:!1,imageTimeout:(F=t.imageTimeout)!==null&&F!==void 0?F:15e3,proxy:t.proxy,useCORS:(_=t.useCORS)!==null&&_!==void 0?_:!1},i=Po({logging:(G=t.logging)!==null&&G!==void 0?G:!0,cache:t.cache},s),o={windowWidth:(X=t.windowWidth)!==null&&X!==void 0?X:r.innerWidth,windowHeight:(M=t.windowHeight)!==null&&M!==void 0?M:r.innerHeight,scrollX:(V=t.scrollX)!==null&&V!==void 0?V:r.pageXOffset,scrollY:(uA=t.scrollY)!==null&&uA!==void 0?uA:r.pageYOffset},n=new Vt(o.scrollX,o.scrollY,o.windowWidth,o.windowHeight),a=new BB(i,n),c=(iA=t.foreignObjectRendering)!==null&&iA!==void 0?iA:!1,h={allowTaint:(rA=t.allowTaint)!==null&&rA!==void 0?rA:!1,onclone:t.onclone,ignoreElements:t.ignoreElements,inlineImages:c,copyStyles:c},a.logger.debug("Starting document clone with size "+n.width+"x"+n.height+" scrolled to "+-n.left+","+-n.top),d=new pl(a,A,h),p=d.clonedReferenceElement,p?[4,d.toIFrame(e,n)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return g=Dt.sent(),f=$a(p)||wm(p)?Ju(p.ownerDocument):xi(a,p),m=f.width,Q=f.height,C=f.left,B=f.top,U=wB(a,p,t.backgroundColor),b={canvas:t.canvas,backgroundColor:U,scale:(wA=(vA=t.scale)!==null&&vA!==void 0?vA:r.devicePixelRatio)!==null&&wA!==void 0?wA:1,x:((wt=t.x)!==null&&wt!==void 0?wt:0)+C,y:((he=t.y)!==null&&he!==void 0?he:0)+B,width:(ue=t.width)!==null&&ue!==void 0?ue:Math.ceil(m),height:(Tt=t.height)!==null&&Tt!==void 0?Tt:Math.ceil(Q)},c?(a.logger.debug("Document cloned, using foreign object rendering"),E=new fB(a,b),[4,E.render(p)]):[3,3];case 2:return v=Dt.sent(),[3,5];case 3:return a.logger.debug("Document cloned, element located at "+C+","+B+" with size "+m+"x"+Q+" using computed rendering"),a.logger.debug("Starting DOM parsing"),y=ld(a,p),U===y.styles.backgroundColor&&(y.styles.backgroundColor=Rt.TRANSPARENT),a.logger.debug("Starting renderer for element at "+b.x+","+b.y+" with size "+b.width+"x"+b.height),E=new lB(a,b),[4,E.render(y)];case 4:v=Dt.sent(),Dt.label=5;case 5:return(!((pe=t.removeContainer)!==null&&pe!==void 0)||pe)&&(pl.destroy(g)||a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),a.logger.debug("Finished rendering"),[2,v]}})})},wB=function(A,t,e){var r=t.ownerDocument,s=r.documentElement?Pr(A,getComputedStyle(r.documentElement).backgroundColor):Rt.TRANSPARENT,i=r.body?Pr(A,getComputedStyle(r.body).backgroundColor):Rt.TRANSPARENT,o=typeof e=="string"?Pr(A,e):e===null?Rt.TRANSPARENT:4294967295;return t===r.documentElement?se(s)?se(i)?o:i:s:o};async function yB(A){if(!(A instanceof HTMLElement))return;const t=document.createElement("div");if(t.id="screenshot-container",t.innerHTML=A.outerHTML,document.body.appendChild(t),t.firstChild instanceof HTMLElement)return await bB(t.firstChild).then(e=>new Promise(r=>e.toBlob(r))).finally(()=>{t.remove()})}function CB(A){const t=document.createElement("a");t.href=A;const e=A.split("/").pop();e&&(t.download=e),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function QB(){return"share"in navigator?w` <sl-button @click=${UB}>
                    Bendrinti
                    <sl-icon slot="suffix" name="share"></sl-icon>
                </sl-button>`:q}function UB(){return navigator.share?navigator.share({url:window.location.href}):Promise.resolve()}var FB=Object.defineProperty,xB=Object.getOwnPropertyDescriptor,Qd=A=>{throw TypeError(A)},lr=(A,t,e,r)=>{for(var s=r>1?void 0:r?xB(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&FB(t,e,s),s},_B=(A,t,e)=>t.has(A)||Qd("Cannot "+e),EB=(A,t,e)=>t.has(A)?Qd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),Qo=(A,t,e)=>(_B(A,t,"access private method"),e),Tr,Ud,Fd,xd;let oe=class extends Ut{constructor(){super(...arguments),EB(this,Tr),this.content=void 0,this.openDialog=!1,this.imageLoading=!1,this.blob=void 0,this.imgSrc=void 0}render(){return w`
            <sl-button @click=${Qo(this,Tr,Ud)}>Išsaugoti kaip nuotrauką</sl-button>
            ${QB()}
            <sl-dialog ?open=${this.openDialog} @sl-hide=${Qo(this,Tr,Fd)} style="--width: calc(min(80vw, 1000px));" >
                ${this.imageLoading?w` <sl-spinner style="font-size: 3rem;"></sl-spinner>
                        Nuotrauka ruošiama`:w`
                        <img src=${this.imgSrc}/>
                        <sl-button slot="footer" @click=${Qo(this,Tr,xd)}>
                            Atsisiųsti
                            <sl-icon slot="suffix" name="download"></sl-icon>
                        </sl-button>`}
            </sl-dialog>`}};Tr=new WeakSet;Ud=function(){const A=this.content;if(A){if(this.blob&&this.imgSrc&&A.outerHTML===this.usedContent){this.openDialog=!0;return}this.usedContent=A.outerHTML,this.openDialog=!0,this.imageLoading=!0,HB(1).then(()=>yB(A)).then(t=>{t&&(this.blob=t,this.imgSrc=URL.createObjectURL(t))}).finally(()=>{this.imageLoading=!1})}};Fd=function(){this.openDialog=!1};xd=function(){this.imgSrc&&CB(this.imgSrc)};oe.styles=K`
        sl-dialog::part(body) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        img {
            border: 1px solid black;
            max-width: calc(100% - 2px);
        }`;lr([u({attribute:!1})],oe.prototype,"content",2);lr([L()],oe.prototype,"openDialog",2);lr([L()],oe.prototype,"imageLoading",2);lr([L()],oe.prototype,"blob",2);lr([L()],oe.prototype,"imgSrc",2);oe=lr([as("tt-screenshot-action")],oe);function HB(A){return new Promise(t=>{setTimeout(()=>t(),A)})}var IB=K`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bl(A,t,e){return A?t(A):e==null?void 0:e(A)}var dA=class ha extends D{constructor(){super(...arguments),this.localize=new W(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await bA(this.childrenContainer);const{keyframes:t,options:e}=aA(this,"tree-item.collapse",{dir:this.localize.dir()});await cA(this.childrenContainer,li(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&ha.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await bA(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=aA(this,"tree-item.expand",{dir:this.localize.dir()});await cA(this.childrenContainer,li(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>ha.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return w`
      <div
        part="base"
        class="${O({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${O({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${bl(this.loading,()=>w` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${bl(this.selectable,()=>w`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${He(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};dA.styles=[$,IB];dA.dependencies={"sl-checkbox":QA,"sl-icon":eA,"sl-spinner":ls};l([L()],dA.prototype,"indeterminate",2);l([L()],dA.prototype,"isLeaf",2);l([L()],dA.prototype,"loading",2);l([L()],dA.prototype,"selectable",2);l([u({type:Boolean,reflect:!0})],dA.prototype,"expanded",2);l([u({type:Boolean,reflect:!0})],dA.prototype,"selected",2);l([u({type:Boolean,reflect:!0})],dA.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],dA.prototype,"lazy",2);l([H("slot:not([name])")],dA.prototype,"defaultSlot",2);l([H("slot[name=children]")],dA.prototype,"childrenSlot",2);l([H(".tree-item__item")],dA.prototype,"itemElement",2);l([H(".tree-item__children")],dA.prototype,"childrenContainer",2);l([H(".tree-item__expand-button slot")],dA.prototype,"expandButtonSlot",2);l([x("loading",{waitUntilFirstUpdate:!0})],dA.prototype,"handleLoadingChange",1);l([x("disabled")],dA.prototype,"handleDisabledChange",1);l([x("selected")],dA.prototype,"handleSelectedChange",1);l([x("expanded",{waitUntilFirstUpdate:!0})],dA.prototype,"handleExpandedChange",1);l([x("expanded",{waitUntilFirstUpdate:!0})],dA.prototype,"handleExpandAnimation",1);l([x("lazy",{waitUntilFirstUpdate:!0})],dA.prototype,"handleLazyChange",1);var Wr=dA;j("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});j("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Wr.define("sl-tree-item");var kB=K`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,SB=K`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ae=Math.min,XA=Math.max,yi=Math.round,Gs=Math.floor,Ft=A=>({x:A,y:A}),LB={left:"right",right:"left",bottom:"top",top:"bottom"},TB={start:"end",end:"start"};function ua(A,t,e){return XA(A,ae(t,e))}function cr(A,t){return typeof A=="function"?A(t):A}function ne(A){return A.split("-")[0]}function dr(A){return A.split("-")[1]}function _d(A){return A==="x"?"y":"x"}function Ma(A){return A==="y"?"height":"width"}const DB=new Set(["top","bottom"]);function Mt(A){return DB.has(ne(A))?"y":"x"}function Ra(A){return _d(Mt(A))}function KB(A,t,e){e===void 0&&(e=!1);const r=dr(A),s=Ra(A),i=Ma(s);let o=s==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(o=Ci(o)),[o,Ci(o)]}function OB(A){const t=Ci(A);return[pa(A),t,pa(t)]}function pa(A){return A.replace(/start|end/g,t=>TB[t])}const vl=["left","right"],wl=["right","left"],$B=["top","bottom"],MB=["bottom","top"];function RB(A,t,e){switch(A){case"top":case"bottom":return e?t?wl:vl:t?vl:wl;case"left":case"right":return t?$B:MB;default:return[]}}function VB(A,t,e,r){const s=dr(A);let i=RB(ne(A),e==="start",r);return s&&(i=i.map(o=>o+"-"+s),t&&(i=i.concat(i.map(pa)))),i}function Ci(A){return A.replace(/left|right|bottom|top/g,t=>LB[t])}function zB(A){return{top:0,right:0,bottom:0,left:0,...A}}function Ed(A){return typeof A!="number"?zB(A):{top:A,right:A,bottom:A,left:A}}function Qi(A){const{x:t,y:e,width:r,height:s}=A;return{width:r,height:s,top:e,left:t,right:t+r,bottom:e+s,x:t,y:e}}function yl(A,t,e){let{reference:r,floating:s}=A;const i=Mt(t),o=Ra(t),n=Ma(o),a=ne(t),c=i==="y",h=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2,p=r[n]/2-s[n]/2;let g;switch(a){case"top":g={x:h,y:r.y-s.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-s.width,y:d};break;default:g={x:r.x,y:r.y}}switch(dr(t)){case"start":g[o]-=p*(e&&c?-1:1);break;case"end":g[o]+=p*(e&&c?-1:1);break}return g}const PB=async(A,t,e)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:o}=e,n=i.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:A,floating:t,strategy:s}),{x:h,y:d}=yl(c,r,a),p=r,g={},f=0;for(let m=0;m<n.length;m++){const{name:Q,fn:C}=n[m],{x:B,y:U,data:b,reset:v}=await C({x:h,y:d,initialPlacement:r,placement:p,strategy:s,middlewareData:g,rects:c,platform:o,elements:{reference:A,floating:t}});h=B??h,d=U??d,g={...g,[Q]:{...g[Q],...b}},v&&f<=50&&(f++,typeof v=="object"&&(v.placement&&(p=v.placement),v.rects&&(c=v.rects===!0?await o.getElementRects({reference:A,floating:t,strategy:s}):v.rects),{x:h,y:d}=yl(c,p,a)),m=-1)}return{x:h,y:d,placement:p,strategy:s,middlewareData:g}};async function Va(A,t){var e;t===void 0&&(t={});const{x:r,y:s,platform:i,rects:o,elements:n,strategy:a}=A,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:g=0}=cr(t,A),f=Ed(g),Q=n[p?d==="floating"?"reference":"floating":d],C=Qi(await i.getClippingRect({element:(e=await(i.isElement==null?void 0:i.isElement(Q)))==null||e?Q:Q.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(n.floating)),boundary:c,rootBoundary:h,strategy:a})),B=d==="floating"?{x:r,y:s,width:o.floating.width,height:o.floating.height}:o.reference,U=await(i.getOffsetParent==null?void 0:i.getOffsetParent(n.floating)),b=await(i.isElement==null?void 0:i.isElement(U))?await(i.getScale==null?void 0:i.getScale(U))||{x:1,y:1}:{x:1,y:1},v=Qi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:B,offsetParent:U,strategy:a}):B);return{top:(C.top-v.top+f.top)/b.y,bottom:(v.bottom-C.bottom+f.bottom)/b.y,left:(C.left-v.left+f.left)/b.x,right:(v.right-C.right+f.right)/b.x}}const NB=A=>({name:"arrow",options:A,async fn(t){const{x:e,y:r,placement:s,rects:i,platform:o,elements:n,middlewareData:a}=t,{element:c,padding:h=0}=cr(A,t)||{};if(c==null)return{};const d=Ed(h),p={x:e,y:r},g=Ra(s),f=Ma(g),m=await o.getDimensions(c),Q=g==="y",C=Q?"top":"left",B=Q?"bottom":"right",U=Q?"clientHeight":"clientWidth",b=i.reference[f]+i.reference[g]-p[g]-i.floating[f],v=p[g]-i.reference[g],y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let E=y?y[U]:0;(!E||!await(o.isElement==null?void 0:o.isElement(y)))&&(E=n.floating[U]||i.floating[f]);const k=b/2-v/2,F=E/2-m[f]/2-1,_=ae(d[C],F),G=ae(d[B],F),X=_,M=E-m[f]-G,V=E/2-m[f]/2+k,uA=ua(X,V,M),iA=!a.arrow&&dr(s)!=null&&V!==uA&&i.reference[f]/2-(V<X?_:G)-m[f]/2<0,rA=iA?V<X?V-X:V-M:0;return{[g]:p[g]+rA,data:{[g]:uA,centerOffset:V-uA-rA,...iA&&{alignmentOffset:rA}},reset:iA}}}),GB=function(A){return A===void 0&&(A={}),{name:"flip",options:A,async fn(t){var e,r;const{placement:s,middlewareData:i,rects:o,initialPlacement:n,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...Q}=cr(A,t);if((e=i.arrow)!=null&&e.alignmentOffset)return{};const C=ne(s),B=Mt(n),U=ne(n)===n,b=await(a.isRTL==null?void 0:a.isRTL(c.floating)),v=p||(U||!m?[Ci(n)]:OB(n)),y=f!=="none";!p&&y&&v.push(...VB(n,m,f,b));const E=[n,...v],k=await Va(t,Q),F=[];let _=((r=i.flip)==null?void 0:r.overflows)||[];if(h&&F.push(k[C]),d){const V=KB(s,o,b);F.push(k[V[0]],k[V[1]])}if(_=[..._,{placement:s,overflows:F}],!F.every(V=>V<=0)){var G,X;const V=(((G=i.flip)==null?void 0:G.index)||0)+1,uA=E[V];if(uA&&(!(d==="alignment"?B!==Mt(uA):!1)||_.every(vA=>Mt(vA.placement)===B?vA.overflows[0]>0:!0)))return{data:{index:V,overflows:_},reset:{placement:uA}};let iA=(X=_.filter(rA=>rA.overflows[0]<=0).sort((rA,vA)=>rA.overflows[1]-vA.overflows[1])[0])==null?void 0:X.placement;if(!iA)switch(g){case"bestFit":{var M;const rA=(M=_.filter(vA=>{if(y){const wA=Mt(vA.placement);return wA===B||wA==="y"}return!0}).map(vA=>[vA.placement,vA.overflows.filter(wA=>wA>0).reduce((wA,wt)=>wA+wt,0)]).sort((vA,wA)=>vA[1]-wA[1])[0])==null?void 0:M[0];rA&&(iA=rA);break}case"initialPlacement":iA=n;break}if(s!==iA)return{reset:{placement:iA}}}return{}}}},XB=new Set(["left","top"]);async function WB(A,t){const{placement:e,platform:r,elements:s}=A,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),o=ne(e),n=dr(e),a=Mt(e)==="y",c=XB.has(o)?-1:1,h=i&&a?-1:1,d=cr(t,A);let{mainAxis:p,crossAxis:g,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return n&&typeof f=="number"&&(g=n==="end"?f*-1:f),a?{x:g*h,y:p*c}:{x:p*c,y:g*h}}const YB=function(A){return A===void 0&&(A=0),{name:"offset",options:A,async fn(t){var e,r;const{x:s,y:i,placement:o,middlewareData:n}=t,a=await WB(t,A);return o===((e=n.offset)==null?void 0:e.placement)&&(r=n.arrow)!=null&&r.alignmentOffset?{}:{x:s+a.x,y:i+a.y,data:{...a,placement:o}}}}},JB=function(A){return A===void 0&&(A={}),{name:"shift",options:A,async fn(t){const{x:e,y:r,placement:s}=t,{mainAxis:i=!0,crossAxis:o=!1,limiter:n={fn:Q=>{let{x:C,y:B}=Q;return{x:C,y:B}}},...a}=cr(A,t),c={x:e,y:r},h=await Va(t,a),d=Mt(ne(s)),p=_d(d);let g=c[p],f=c[d];if(i){const Q=p==="y"?"top":"left",C=p==="y"?"bottom":"right",B=g+h[Q],U=g-h[C];g=ua(B,g,U)}if(o){const Q=d==="y"?"top":"left",C=d==="y"?"bottom":"right",B=f+h[Q],U=f-h[C];f=ua(B,f,U)}const m=n.fn({...t,[p]:g,[d]:f});return{...m,data:{x:m.x-e,y:m.y-r,enabled:{[p]:i,[d]:o}}}}}},ZB=function(A){return A===void 0&&(A={}),{name:"size",options:A,async fn(t){var e,r;const{placement:s,rects:i,platform:o,elements:n}=t,{apply:a=()=>{},...c}=cr(A,t),h=await Va(t,c),d=ne(s),p=dr(s),g=Mt(s)==="y",{width:f,height:m}=i.floating;let Q,C;d==="top"||d==="bottom"?(Q=d,C=p===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(C=d,Q=p==="end"?"top":"bottom");const B=m-h.top-h.bottom,U=f-h.left-h.right,b=ae(m-h[Q],B),v=ae(f-h[C],U),y=!t.middlewareData.shift;let E=b,k=v;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(k=U),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(E=B),y&&!p){const _=XA(h.left,0),G=XA(h.right,0),X=XA(h.top,0),M=XA(h.bottom,0);g?k=f-2*(_!==0||G!==0?_+G:XA(h.left,h.right)):E=m-2*(X!==0||M!==0?X+M:XA(h.top,h.bottom))}await a({...t,availableWidth:k,availableHeight:E});const F=await o.getDimensions(n.floating);return f!==F.width||m!==F.height?{reset:{rects:!0}}:{}}}};function Ki(){return typeof window<"u"}function hr(A){return Hd(A)?(A.nodeName||"").toLowerCase():"#document"}function YA(A){var t;return(A==null||(t=A.ownerDocument)==null?void 0:t.defaultView)||window}function kt(A){var t;return(t=(Hd(A)?A.ownerDocument:A.document)||window.document)==null?void 0:t.documentElement}function Hd(A){return Ki()?A instanceof Node||A instanceof YA(A).Node:!1}function ht(A){return Ki()?A instanceof Element||A instanceof YA(A).Element:!1}function xt(A){return Ki()?A instanceof HTMLElement||A instanceof YA(A).HTMLElement:!1}function Cl(A){return!Ki()||typeof ShadowRoot>"u"?!1:A instanceof ShadowRoot||A instanceof YA(A).ShadowRoot}const qB=new Set(["inline","contents"]);function ps(A){const{overflow:t,overflowX:e,overflowY:r,display:s}=ut(A);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!qB.has(s)}const jB=new Set(["table","td","th"]);function Ab(A){return jB.has(hr(A))}const tb=[":popover-open",":modal"];function Oi(A){return tb.some(t=>{try{return A.matches(t)}catch{return!1}})}const eb=["transform","translate","scale","rotate","perspective"],rb=["transform","translate","scale","rotate","perspective","filter"],sb=["paint","layout","strict","content"];function $i(A){const t=za(),e=ht(A)?ut(A):A;return eb.some(r=>e[r]?e[r]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||rb.some(r=>(e.willChange||"").includes(r))||sb.some(r=>(e.contain||"").includes(r))}function ib(A){let t=le(A);for(;xt(t)&&!or(t);){if($i(t))return t;if(Oi(t))return null;t=le(t)}return null}function za(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ob=new Set(["html","body","#document"]);function or(A){return ob.has(hr(A))}function ut(A){return YA(A).getComputedStyle(A)}function Mi(A){return ht(A)?{scrollLeft:A.scrollLeft,scrollTop:A.scrollTop}:{scrollLeft:A.scrollX,scrollTop:A.scrollY}}function le(A){if(hr(A)==="html")return A;const t=A.assignedSlot||A.parentNode||Cl(A)&&A.host||kt(A);return Cl(t)?t.host:t}function Id(A){const t=le(A);return or(t)?A.ownerDocument?A.ownerDocument.body:A.body:xt(t)&&ps(t)?t:Id(t)}function es(A,t,e){var r;t===void 0&&(t=[]),e===void 0&&(e=!0);const s=Id(A),i=s===((r=A.ownerDocument)==null?void 0:r.body),o=YA(s);if(i){const n=fa(o);return t.concat(o,o.visualViewport||[],ps(s)?s:[],n&&e?es(n):[])}return t.concat(s,es(s,[],e))}function fa(A){return A.parent&&Object.getPrototypeOf(A.parent)?A.frameElement:null}function kd(A){const t=ut(A);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=xt(A),i=s?A.offsetWidth:e,o=s?A.offsetHeight:r,n=yi(e)!==i||yi(r)!==o;return n&&(e=i,r=o),{width:e,height:r,$:n}}function Pa(A){return ht(A)?A:A.contextElement}function je(A){const t=Pa(A);if(!xt(t))return Ft(1);const e=t.getBoundingClientRect(),{width:r,height:s,$:i}=kd(t);let o=(i?yi(e.width):e.width)/r,n=(i?yi(e.height):e.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!n||!Number.isFinite(n))&&(n=1),{x:o,y:n}}const ab=Ft(0);function Sd(A){const t=YA(A);return!za()||!t.visualViewport?ab:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nb(A,t,e){return t===void 0&&(t=!1),!e||t&&e!==YA(A)?!1:t}function Ie(A,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const s=A.getBoundingClientRect(),i=Pa(A);let o=Ft(1);t&&(r?ht(r)&&(o=je(r)):o=je(A));const n=nb(i,e,r)?Sd(i):Ft(0);let a=(s.left+n.x)/o.x,c=(s.top+n.y)/o.y,h=s.width/o.x,d=s.height/o.y;if(i){const p=YA(i),g=r&&ht(r)?YA(r):r;let f=p,m=fa(f);for(;m&&r&&g!==f;){const Q=je(m),C=m.getBoundingClientRect(),B=ut(m),U=C.left+(m.clientLeft+parseFloat(B.paddingLeft))*Q.x,b=C.top+(m.clientTop+parseFloat(B.paddingTop))*Q.y;a*=Q.x,c*=Q.y,h*=Q.x,d*=Q.y,a+=U,c+=b,f=YA(m),m=fa(f)}}return Qi({width:h,height:d,x:a,y:c})}function Ri(A,t){const e=Mi(A).scrollLeft;return t?t.left+e:Ie(kt(A)).left+e}function Ld(A,t){const e=A.getBoundingClientRect(),r=e.left+t.scrollLeft-Ri(A,e),s=e.top+t.scrollTop;return{x:r,y:s}}function lb(A){let{elements:t,rect:e,offsetParent:r,strategy:s}=A;const i=s==="fixed",o=kt(r),n=t?Oi(t.floating):!1;if(r===o||n&&i)return e;let a={scrollLeft:0,scrollTop:0},c=Ft(1);const h=Ft(0),d=xt(r);if((d||!d&&!i)&&((hr(r)!=="body"||ps(o))&&(a=Mi(r)),xt(r))){const g=Ie(r);c=je(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const p=o&&!d&&!i?Ld(o,a):Ft(0);return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+h.x+p.x,y:e.y*c.y-a.scrollTop*c.y+h.y+p.y}}function cb(A){return Array.from(A.getClientRects())}function db(A){const t=kt(A),e=Mi(A),r=A.ownerDocument.body,s=XA(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=XA(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-e.scrollLeft+Ri(A);const n=-e.scrollTop;return ut(r).direction==="rtl"&&(o+=XA(t.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:n}}const Ql=25;function hb(A,t){const e=YA(A),r=kt(A),s=e.visualViewport;let i=r.clientWidth,o=r.clientHeight,n=0,a=0;if(s){i=s.width,o=s.height;const h=za();(!h||h&&t==="fixed")&&(n=s.offsetLeft,a=s.offsetTop)}const c=Ri(r);if(c<=0){const h=r.ownerDocument,d=h.body,p=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,f=Math.abs(r.clientWidth-d.clientWidth-g);f<=Ql&&(i-=f)}else c<=Ql&&(i+=c);return{width:i,height:o,x:n,y:a}}const ub=new Set(["absolute","fixed"]);function pb(A,t){const e=Ie(A,!0,t==="fixed"),r=e.top+A.clientTop,s=e.left+A.clientLeft,i=xt(A)?je(A):Ft(1),o=A.clientWidth*i.x,n=A.clientHeight*i.y,a=s*i.x,c=r*i.y;return{width:o,height:n,x:a,y:c}}function Ul(A,t,e){let r;if(t==="viewport")r=hb(A,e);else if(t==="document")r=db(kt(A));else if(ht(t))r=pb(t,e);else{const s=Sd(A);r={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Qi(r)}function Td(A,t){const e=le(A);return e===t||!ht(e)||or(e)?!1:ut(e).position==="fixed"||Td(e,t)}function fb(A,t){const e=t.get(A);if(e)return e;let r=es(A,[],!1).filter(n=>ht(n)&&hr(n)!=="body"),s=null;const i=ut(A).position==="fixed";let o=i?le(A):A;for(;ht(o)&&!or(o);){const n=ut(o),a=$i(o);!a&&n.position==="fixed"&&(s=null),(i?!a&&!s:!a&&n.position==="static"&&!!s&&ub.has(s.position)||ps(o)&&!a&&Td(A,o))?r=r.filter(h=>h!==o):s=n,o=le(o)}return t.set(A,r),r}function gb(A){let{element:t,boundary:e,rootBoundary:r,strategy:s}=A;const o=[...e==="clippingAncestors"?Oi(t)?[]:fb(t,this._c):[].concat(e),r],n=o[0],a=o.reduce((c,h)=>{const d=Ul(t,h,s);return c.top=XA(d.top,c.top),c.right=ae(d.right,c.right),c.bottom=ae(d.bottom,c.bottom),c.left=XA(d.left,c.left),c},Ul(t,n,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function mb(A){const{width:t,height:e}=kd(A);return{width:t,height:e}}function Bb(A,t,e){const r=xt(t),s=kt(t),i=e==="fixed",o=Ie(A,!0,i,t);let n={scrollLeft:0,scrollTop:0};const a=Ft(0);function c(){a.x=Ri(s)}if(r||!r&&!i)if((hr(t)!=="body"||ps(s))&&(n=Mi(t)),r){const g=Ie(t,!0,i,t);a.x=g.x+t.clientLeft,a.y=g.y+t.clientTop}else s&&c();i&&!r&&s&&c();const h=s&&!r&&!i?Ld(s,n):Ft(0),d=o.left+n.scrollLeft-a.x-h.x,p=o.top+n.scrollTop-a.y-h.y;return{x:d,y:p,width:o.width,height:o.height}}function Uo(A){return ut(A).position==="static"}function Fl(A,t){if(!xt(A)||ut(A).position==="fixed")return null;if(t)return t(A);let e=A.offsetParent;return kt(A)===e&&(e=e.ownerDocument.body),e}function Dd(A,t){const e=YA(A);if(Oi(A))return e;if(!xt(A)){let s=le(A);for(;s&&!or(s);){if(ht(s)&&!Uo(s))return s;s=le(s)}return e}let r=Fl(A,t);for(;r&&Ab(r)&&Uo(r);)r=Fl(r,t);return r&&or(r)&&Uo(r)&&!$i(r)?e:r||ib(A)||e}const bb=async function(A){const t=this.getOffsetParent||Dd,e=this.getDimensions,r=await e(A.floating);return{reference:Bb(A.reference,await t(A.floating),A.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function vb(A){return ut(A).direction==="rtl"}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:lb,getDocumentElement:kt,getClippingRect:gb,getOffsetParent:Dd,getElementRects:bb,getClientRects:cb,getDimensions:mb,getScale:je,isElement:ht,isRTL:vb};function Kd(A,t){return A.x===t.x&&A.y===t.y&&A.width===t.width&&A.height===t.height}function wb(A,t){let e=null,r;const s=kt(A);function i(){var n;clearTimeout(r),(n=e)==null||n.disconnect(),e=null}function o(n,a){n===void 0&&(n=!1),a===void 0&&(a=1),i();const c=A.getBoundingClientRect(),{left:h,top:d,width:p,height:g}=c;if(n||t(),!p||!g)return;const f=Gs(d),m=Gs(s.clientWidth-(h+p)),Q=Gs(s.clientHeight-(d+g)),C=Gs(h),U={rootMargin:-f+"px "+-m+"px "+-Q+"px "+-C+"px",threshold:XA(0,ae(1,a))||1};let b=!0;function v(y){const E=y[0].intersectionRatio;if(E!==a){if(!b)return o();E?o(!1,E):r=setTimeout(()=>{o(!1,1e-7)},1e3)}E===1&&!Kd(c,A.getBoundingClientRect())&&o(),b=!1}try{e=new IntersectionObserver(v,{...U,root:s.ownerDocument})}catch{e=new IntersectionObserver(v,U)}e.observe(A)}return o(!0),i}function yb(A,t,e,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,c=Pa(A),h=s||i?[...c?es(c):[],...es(t)]:[];h.forEach(C=>{s&&C.addEventListener("scroll",e,{passive:!0}),i&&C.addEventListener("resize",e)});const d=c&&n?wb(c,e):null;let p=-1,g=null;o&&(g=new ResizeObserver(C=>{let[B]=C;B&&B.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var U;(U=g)==null||U.observe(t)})),e()}),c&&!a&&g.observe(c),g.observe(t));let f,m=a?Ie(A):null;a&&Q();function Q(){const C=Ie(A);m&&!Kd(m,C)&&e(),m=C,f=requestAnimationFrame(Q)}return e(),()=>{var C;h.forEach(B=>{s&&B.removeEventListener("scroll",e),i&&B.removeEventListener("resize",e)}),d==null||d(),(C=g)==null||C.disconnect(),g=null,a&&cancelAnimationFrame(f)}}const Cb=YB,Qb=JB,Ub=GB,xl=ZB,Fb=NB,xb=(A,t,e)=>{const r=new Map,s={platform:ii,...e},i={...s.platform,_c:r};return PB(A,t,{...s,platform:i})};function _b(A){return Eb(A)}function Fo(A){return A.assignedSlot?A.assignedSlot:A.parentNode instanceof ShadowRoot?A.parentNode.host:A.parentNode}function Eb(A){for(let t=A;t;t=Fo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Fo(A);t;t=Fo(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||$i(e)||t.tagName==="BODY"))return t}return null}function Hb(A){return A!==null&&typeof A=="object"&&"getBoundingClientRect"in A&&("contextElement"in A?A.contextElement instanceof Element:!0)}var AA=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const A=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),e=this.placement.includes("top")||this.placement.includes("bottom");let r=0,s=0,i=0,o=0,n=0,a=0,c=0,h=0;e?A.top<t.top?(r=A.left,s=A.bottom,i=A.right,o=A.bottom,n=t.left,a=t.top,c=t.right,h=t.top):(r=t.left,s=t.bottom,i=t.right,o=t.bottom,n=A.left,a=A.top,c=A.right,h=A.top):A.left<t.left?(r=A.right,s=A.top,i=t.left,o=t.top,n=A.right,a=A.bottom,c=t.left,h=t.bottom):(r=t.right,s=t.top,i=A.left,o=A.top,n=t.right,a=t.bottom,c=A.left,h=A.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(A){super.updated(A),A.has("active")&&(this.active?this.start():this.stop()),A.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const A=this.getRootNode();this.anchorEl=A.getElementById(this.anchor)}else this.anchor instanceof Element||Hb(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=yb(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(A=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>A())):A()})}reposition(){if(!this.active||!this.anchorEl)return;const A=[Cb({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?A.push(xl({apply:({rects:e})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${e.reference.width}px`:"",this.popup.style.height=s?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&A.push(Ub({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&A.push(Qb({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?A.push(xl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&A.push(Fb({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?e=>ii.getOffsetParent(e,_b):ii.getOffsetParent;xb(this.anchorEl,this.popup,{placement:this.placement,middleware:A,strategy:this.strategy,platform:os(zt({},ii),{getOffsetParent:t})}).then(({x:e,y:r,middlewareData:s,placement:i})=>{const o=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${r}px`}),this.arrow){const a=s.arrow.x,c=s.arrow.y;let h="",d="",p="",g="";if(this.arrowPlacement==="start"){const f=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=o?f:"",g=o?"":f}else if(this.arrowPlacement==="end"){const f=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=o?"":f,g=o?f:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:p,left:g,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${O({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${O({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};AA.styles=[$,SB];l([H(".popup")],AA.prototype,"popup",2);l([H(".popup__arrow")],AA.prototype,"arrowEl",2);l([u()],AA.prototype,"anchor",2);l([u({type:Boolean,reflect:!0})],AA.prototype,"active",2);l([u({reflect:!0})],AA.prototype,"placement",2);l([u({reflect:!0})],AA.prototype,"strategy",2);l([u({type:Number})],AA.prototype,"distance",2);l([u({type:Number})],AA.prototype,"skidding",2);l([u({type:Boolean})],AA.prototype,"arrow",2);l([u({attribute:"arrow-placement"})],AA.prototype,"arrowPlacement",2);l([u({attribute:"arrow-padding",type:Number})],AA.prototype,"arrowPadding",2);l([u({type:Boolean})],AA.prototype,"flip",2);l([u({attribute:"flip-fallback-placements",converter:{fromAttribute:A=>A.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:A=>A.join(" ")}})],AA.prototype,"flipFallbackPlacements",2);l([u({attribute:"flip-fallback-strategy"})],AA.prototype,"flipFallbackStrategy",2);l([u({type:Object})],AA.prototype,"flipBoundary",2);l([u({attribute:"flip-padding",type:Number})],AA.prototype,"flipPadding",2);l([u({type:Boolean})],AA.prototype,"shift",2);l([u({type:Object})],AA.prototype,"shiftBoundary",2);l([u({attribute:"shift-padding",type:Number})],AA.prototype,"shiftPadding",2);l([u({attribute:"auto-size"})],AA.prototype,"autoSize",2);l([u()],AA.prototype,"sync",2);l([u({type:Object})],AA.prototype,"autoSizeBoundary",2);l([u({attribute:"auto-size-padding",type:Number})],AA.prototype,"autoSizePadding",2);l([u({attribute:"hover-bridge",type:Boolean})],AA.prototype,"hoverBridge",2);var FA=class extends D{constructor(){super(),this.localize=new W(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=A=>{A.key==="Escape"&&(A.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const A=un(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),A)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const A=un(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),A)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.closeWatcher)==null||A.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(A){return this.trigger.split(" ").includes(A)}async handleOpenChange(){var A,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((A=this.closeWatcher)==null||A.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await bA(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:r}=aA(this,"tooltip.show",{dir:this.localize.dir()});await cA(this.popup.popup,e,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await bA(this.body);const{keyframes:e,options:r}=aA(this,"tooltip.hide",{dir:this.localize.dir()});await cA(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,RA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,RA(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${O({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};FA.styles=[$,kB];FA.dependencies={"sl-popup":AA};l([H("slot:not([name])")],FA.prototype,"defaultSlot",2);l([H(".tooltip__body")],FA.prototype,"body",2);l([H("sl-popup")],FA.prototype,"popup",2);l([u()],FA.prototype,"content",2);l([u()],FA.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],FA.prototype,"disabled",2);l([u({type:Number})],FA.prototype,"distance",2);l([u({type:Boolean,reflect:!0})],FA.prototype,"open",2);l([u({type:Number})],FA.prototype,"skidding",2);l([u()],FA.prototype,"trigger",2);l([u({type:Boolean})],FA.prototype,"hoist",2);l([x("open",{waitUntilFirstUpdate:!0})],FA.prototype,"handleOpenChange",1);l([x(["content","distance","hoist","placement","skidding"])],FA.prototype,"handleOptionsChange",1);l([x("disabled")],FA.prototype,"handleDisabledChange",1);j("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});j("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});FA.define("sl-tooltip");var Ib=K`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function mA(A,t,e){const r=s=>Object.is(s,-0)?0:s;return A<t?r(t):A>e?r(e):r(A)}function _l(A,t=!1){function e(i){const o=i.getChildrenItems({includeDisabled:!1});if(o.length){const n=o.every(c=>c.selected),a=o.every(c=>!c.selected&&!c.indeterminate);i.selected=n,i.indeterminate=!n&&!a}}function r(i){const o=i.parentElement;Wr.isTreeItem(o)&&(e(o),r(o))}function s(i){for(const o of i.getChildrenItems())o.selected=t?i.selected||o.selected:!o.disabled&&i.selected,s(o);t&&e(i)}s(A),r(A)}var Te=class extends D{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new W(this),this.initTreeItem=A=>{A.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const e=A.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(e===null?A.append(r):e.hasAttribute("data-default")&&e.replaceWith(r))})},this.handleTreeChanged=A=>{for(const t of A){const e=[...t.addedNodes].filter(Wr.isTreeItem),r=[...t.removedNodes].filter(Wr.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=A=>{const t=A.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=A=>{const t=A.target;A.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Wr.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.mutationObserver)==null||A.disconnect()}getExpandButtonIcon(A){const e=(A==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const r=e.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${A}-icon`,r}return null}selectItem(A){const t=[...this.selectedItems];if(this.selection==="multiple")A.selected=!A.selected,A.lazy&&(A.expanded=!0),_l(A);else if(this.selection==="single"||A.isLeaf){const r=this.getAllTreeItems();for(const s of r)s.selected=s===A}else this.selection==="leaf"&&(A.expanded=!A.expanded);const e=this.selectedItems;(t.length!==e.length||e.some(r=>!t.includes(r)))&&Promise.all(e.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:e}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(A){A==null||A.focus()}handleKeyDown(A){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(A.key)||A.composedPath().some(s=>{var i;return["input","textarea"].includes((i=s==null?void 0:s.tagName)==null?void 0:i.toLowerCase())}))return;const t=this.getFocusableItems(),e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(t.length>0){A.preventDefault();const s=t.findIndex(a=>a.matches(":focus")),i=t[s],o=a=>{const c=t[mA(a,0,t.length-1)];this.focusItem(c)},n=a=>{i.expanded=a};A.key==="ArrowDown"?o(s+1):A.key==="ArrowUp"?o(s-1):e&&A.key==="ArrowRight"||r&&A.key==="ArrowLeft"?!i||i.disabled||i.expanded||i.isLeaf&&!i.lazy?o(s+1):n(!0):e&&A.key==="ArrowLeft"||r&&A.key==="ArrowRight"?!i||i.disabled||i.isLeaf||!i.expanded?o(s-1):n(!1):A.key==="Home"?o(0):A.key==="End"?o(t.length-1):(A.key==="Enter"||A.key===" ")&&(i.disabled||this.selectItem(i))}}handleClick(A){const t=A.target,e=t.closest("sl-tree-item"),r=A.composedPath().some(s=>{var i;return(i=s==null?void 0:s.classList)==null?void 0:i.contains("tree-item__expand-button")});!e||e.disabled||t!==this.clickTarget||(r?e.expanded=!e.expanded:this.selectItem(e))}handleMouseDown(A){this.clickTarget=A.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const A=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",A?"true":"false");for(const e of t)e.selectable=A;A&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(e=>_l(e,!0)))}get selectedItems(){const A=this.getAllTreeItems(),t=e=>e.selected;return A.filter(t)}getFocusableItems(){const A=this.getAllTreeItems(),t=new Set;return A.filter(e=>{var r;if(e.disabled)return!1;const s=(r=e.parentElement)==null?void 0:r.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||t.has(s))&&t.add(e),!t.has(e)})}render(){return w`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Te.styles=[$,Ib];l([H("slot:not([name])")],Te.prototype,"defaultSlot",2);l([H("slot[name=expand-icon]")],Te.prototype,"expandedIconSlot",2);l([H("slot[name=collapse-icon]")],Te.prototype,"collapsedIconSlot",2);l([u()],Te.prototype,"selection",2);l([x("selection")],Te.prototype,"handleSelectionChange",1);Te.define("sl-tree");var kb=K`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Na=class extends D{render(){return w` <slot></slot> `}};Na.styles=[$,kb];Na.define("sl-visually-hidden");var Sb=K`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Lb=0,fs=class extends D{constructor(){super(...arguments),this.attrId=++Lb,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return w`
      <slot
        part="base"
        class=${O({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};fs.styles=[$,Sb];l([u({reflect:!0})],fs.prototype,"name",2);l([u({type:Boolean,reflect:!0})],fs.prototype,"active",2);l([x("active")],fs.prototype,"handleActiveChange",1);fs.define("sl-tab-panel");var Tb=K`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ce=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return w`
      <span
        part="base"
        class=${O({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?w`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ce.styles=[$,Tb];ce.dependencies={"sl-icon-button":CA};l([u({reflect:!0})],ce.prototype,"variant",2);l([u({reflect:!0})],ce.prototype,"size",2);l([u({type:Boolean,reflect:!0})],ce.prototype,"pill",2);l([u({type:Boolean})],ce.prototype,"removable",2);ce.define("sl-tag");var Db=K`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Y=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new VA(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var A;super.disconnectedCallback(),this.input&&((A=this.resizeObserver)==null||A.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(A){this.input.focus(A)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(A){if(A){typeof A.top=="number"&&(this.input.scrollTop=A.top),typeof A.left=="number"&&(this.input.scrollLeft=A.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(A,t,e="none"){this.input.setSelectionRange(A,t,e)}setRangeText(A,t,e,r="preserve"){const s=t??this.input.selectionStart,i=e??this.input.selectionEnd;this.input.setRangeText(A,s,i,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!A,r=this.helpText?!0:!!t;return w`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${T(this.name)}
              .value=${He(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${T(this.placeholder)}
              rows=${T(this.rows)}
              minlength=${T(this.minlength)}
              maxlength=${T(this.maxlength)}
              autocapitalize=${T(this.autocapitalize)}
              autocorrect=${T(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${T(this.spellcheck)}
              enterkeyhint=${T(this.enterkeyhint)}
              inputmode=${T(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[$,Le,Db];l([H(".textarea__control")],Y.prototype,"input",2);l([H(".textarea__size-adjuster")],Y.prototype,"sizeAdjuster",2);l([L()],Y.prototype,"hasFocus",2);l([u()],Y.prototype,"title",2);l([u()],Y.prototype,"name",2);l([u()],Y.prototype,"value",2);l([u({reflect:!0})],Y.prototype,"size",2);l([u({type:Boolean,reflect:!0})],Y.prototype,"filled",2);l([u()],Y.prototype,"label",2);l([u({attribute:"help-text"})],Y.prototype,"helpText",2);l([u()],Y.prototype,"placeholder",2);l([u({type:Number})],Y.prototype,"rows",2);l([u()],Y.prototype,"resize",2);l([u({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],Y.prototype,"readonly",2);l([u({reflect:!0})],Y.prototype,"form",2);l([u({type:Boolean,reflect:!0})],Y.prototype,"required",2);l([u({type:Number})],Y.prototype,"minlength",2);l([u({type:Number})],Y.prototype,"maxlength",2);l([u()],Y.prototype,"autocapitalize",2);l([u()],Y.prototype,"autocorrect",2);l([u()],Y.prototype,"autocomplete",2);l([u({type:Boolean})],Y.prototype,"autofocus",2);l([u()],Y.prototype,"enterkeyhint",2);l([u({type:Boolean,converter:{fromAttribute:A=>!(!A||A==="false"),toAttribute:A=>A?"true":"false"}})],Y.prototype,"spellcheck",2);l([u()],Y.prototype,"inputmode",2);l([ar()],Y.prototype,"defaultValue",2);l([x("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);l([x("rows",{waitUntilFirstUpdate:!0})],Y.prototype,"handleRowsChange",1);l([x("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);Y.define("sl-textarea");var Kb=K`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ob=0,ft=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.attrId=++Ob,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(A){A.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,w`
      <div
        part="base"
        class=${O({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?w`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ft.styles=[$,Kb];ft.dependencies={"sl-icon-button":CA};l([H(".tab")],ft.prototype,"tab",2);l([u({reflect:!0})],ft.prototype,"panel",2);l([u({type:Boolean,reflect:!0})],ft.prototype,"active",2);l([u({type:Boolean,reflect:!0})],ft.prototype,"closable",2);l([u({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);l([u({type:Number,reflect:!0})],ft.prototype,"tabIndex",2);l([x("active")],ft.prototype,"handleActiveChange",1);l([x("disabled")],ft.prototype,"handleDisabledChange",1);ft.define("sl-tab");var $b=K`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Mb=K`
  :host {
    display: contents;
  }
`,gs=class extends D{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(A=>{this.emit("sl-resize",{detail:{entries:A}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const A=this.shadowRoot.querySelector("slot");if(A!==null){const t=A.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return w` <slot @slotchange=${this.handleSlotChange}></slot> `}};gs.styles=[$,Mb];l([u({type:Boolean,reflect:!0})],gs.prototype,"disabled",2);l([x("disabled",{waitUntilFirstUpdate:!0})],gs.prototype,"handleDisabledChange",1);var SA=class extends D{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new W(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const A=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const s=r.tagName.toLowerCase();return s==="sl-tab"||s==="sl-tab-panel"});if(e.length!==0){if(e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(r=>r.attributeName==="active")){const s=e.filter(i=>i.attributeName==="active"&&i.target.tagName.toLowerCase()==="sl-tab").map(i=>i.target).find(i=>i.active);s&&this.setActiveTab(s)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),A.then(()=>{new IntersectionObserver((e,r)=>{var s;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var A,t;super.disconnectedCallback(),(A=this.mutationObserver)==null||A.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(A=>A.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(A=>A.active)}handleClick(A){const e=A.target.closest("sl-tab");(e==null?void 0:e.closest("sl-tab-group"))===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(A){const e=A.target.closest("sl-tab");if((e==null?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(A.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),A.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(A.key))){const s=this.tabs.find(n=>n.matches(":focus")),i=this.localize.dir()==="rtl";let o=null;if((s==null?void 0:s.tagName.toLowerCase())==="sl-tab"){if(A.key==="Home")o=this.focusableTabs[0];else if(A.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&A.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&A.key==="ArrowUp"){const n=this.tabs.findIndex(a=>a===s);o=this.findNextFocusableTab(n,"backward")}else if(["top","bottom"].includes(this.placement)&&A.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&A.key==="ArrowDown"){const n=this.tabs.findIndex(a=>a===s);o=this.findNextFocusableTab(n,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(n=>{n.tabIndex=n===o?0:-1}),["top","bottom"].includes(this.placement)&&Oo(o,this.nav,"horizontal"),A.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(A,t){if(t=zt({emitEvents:!0,scrollBehavior:"auto"},t),A!==this.activeTab&&!A.disabled){const e=this.activeTab;this.activeTab=A,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var s;return r.active=r.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Oo(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(e&&this.emit("sl-tab-hide",{detail:{name:e.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(A=>{const t=this.panels.find(e=>e.name===A.panel);t&&(A.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",A.getAttribute("id")))})}repositionIndicator(){const A=this.getActiveTab();if(!A)return;const t=A.clientWidth,e=A.clientHeight,r=this.localize.dir()==="rtl",s=this.getAllTabs(),o=s.slice(0,s.indexOf(A)).reduce((n,a)=>({left:n.left+a.clientWidth,top:n.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${e}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(A=>!A.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(A,t){let e=null;const r=t==="forward"?1:-1;let s=A+r;for(;A<this.tabs.length;){if(e=this.tabs[s]||null,e===null){t==="forward"?e=this.focusableTabs[0]:e=this.focusableTabs[this.focusableTabs.length-1];break}if(!e.disabled)break;s+=r}return e}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(A){const t=this.tabs.find(e=>e.panel===A);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const A=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        class=${O({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?w`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${O({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${A?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?w`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${O({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${A?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};SA.styles=[$,$b];SA.dependencies={"sl-icon-button":CA,"sl-resize-observer":gs};l([H(".tab-group")],SA.prototype,"tabGroup",2);l([H(".tab-group__body")],SA.prototype,"body",2);l([H(".tab-group__nav")],SA.prototype,"nav",2);l([H(".tab-group__indicator")],SA.prototype,"indicator",2);l([L()],SA.prototype,"hasScrollControls",2);l([L()],SA.prototype,"shouldHideScrollStartButton",2);l([L()],SA.prototype,"shouldHideScrollEndButton",2);l([u()],SA.prototype,"placement",2);l([u()],SA.prototype,"activation",2);l([u({attribute:"no-scroll-controls",type:Boolean})],SA.prototype,"noScrollControls",2);l([u({attribute:"fixed-scroll-controls",type:Boolean})],SA.prototype,"fixedScrollControls",2);l([ns({passive:!0})],SA.prototype,"updateScrollButtons",1);l([x("noScrollControls",{waitUntilFirstUpdate:!0})],SA.prototype,"updateScrollControls",1);l([x("placement",{waitUntilFirstUpdate:!0})],SA.prototype,"syncIndicator",1);SA.define("sl-tab-group");var Rb=K`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ga=class extends D{constructor(){super(...arguments),this.effect="none"}render(){return w`
      <div
        part="base"
        class=${O({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ga.styles=[$,Rb];l([u()],Ga.prototype,"effect",2);Ga.define("sl-skeleton");var Vb=K`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Yr(A,t){function e(s){const i=A.getBoundingClientRect(),o=A.ownerDocument.defaultView,n=i.left+o.scrollX,a=i.top+o.scrollY,c=s.pageX-n,h=s.pageY-a;t!=null&&t.onMove&&t.onMove(c,h)}function r(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&e(t.initialEvent)}var El=()=>null,JA=class extends D{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new W(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=El,this.snapThreshold=12}toSnapFunction(A){const t=A.split(" ");return({pos:e,size:r,snapThreshold:s,isRtl:i,vertical:o})=>{let n=e,a=Number.POSITIVE_INFINITY;return t.forEach(c=>{let h;if(c.startsWith("repeat(")){const p=A.substring(7,A.length-1),g=p.endsWith("%"),f=Number.parseFloat(p),m=g?r*(f/100):f;h=Math.round((i&&!o?r-e:e)/m)*m}else c.endsWith("%")?h=r*(Number.parseFloat(c)/100):h=Number.parseFloat(c);i&&!o&&(h=r-h);const d=Math.abs(e-h);d<=s&&d<a&&(n=h,a=d)}),n}}set snap(A){this.snapValue=A??"",A?this.snapFunction=typeof A=="string"?this.toSnapFunction(A):A:this.snapFunction=El}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(A=>this.handleResize(A)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.resizeObserver)==null||A.unobserve(this)}detectSize(){const{width:A,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:A}percentageToPixels(A){return this.size*(A/100)}pixelsToPercentage(A){return A/this.size*100}handleDrag(A){const t=this.localize.dir()==="rtl";this.disabled||(A.cancelable&&A.preventDefault(),Yr(this,{onMove:(e,r)=>{var s;let i=this.vertical?r:e;this.primary==="end"&&(i=this.size-i),i=(s=this.snapFunction({pos:i,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?s:i,this.position=mA(this.pixelsToPercentage(i),0,100)},initialEvent:A}))}handleKeyDown(A){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(A.key)){let t=this.position;const e=(A.shiftKey?10:1)*(this.primary==="end"?-1:1);if(A.preventDefault(),(A.key==="ArrowLeft"&&!this.vertical||A.key==="ArrowUp"&&this.vertical)&&(t-=e),(A.key==="ArrowRight"&&!this.vertical||A.key==="ArrowDown"&&this.vertical)&&(t+=e),A.key==="Home"&&(t=this.primary==="end"?100:0),A.key==="End"&&(t=this.primary==="end"?0:100),A.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=mA(t,0,100)}}handleResize(A){const{width:t,height:e}=A[0].contentRect;this.size=this.vertical?e:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const A=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",e=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?e&&!this.vertical?this.style[A]=`${r} var(--divider-width) ${s}`:this.style[A]=`${s} var(--divider-width) ${r}`:e&&!this.vertical?this.style[A]=`${s} var(--divider-width) ${r}`:this.style[A]=`${r} var(--divider-width) ${s}`,this.style[t]="",w`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${T(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};JA.styles=[$,Vb];l([H(".divider")],JA.prototype,"divider",2);l([u({type:Number,reflect:!0})],JA.prototype,"position",2);l([u({attribute:"position-in-pixels",type:Number})],JA.prototype,"positionInPixels",2);l([u({type:Boolean,reflect:!0})],JA.prototype,"vertical",2);l([u({type:Boolean,reflect:!0})],JA.prototype,"disabled",2);l([u()],JA.prototype,"primary",2);l([u({reflect:!0})],JA.prototype,"snap",1);l([u({type:Number,attribute:"snap-threshold"})],JA.prototype,"snapThreshold",2);l([x("position")],JA.prototype,"handlePositionChange",1);l([x("positionInPixels")],JA.prototype,"handlePositionInPixelsChange",1);l([x("vertical")],JA.prototype,"handleVerticalChange",1);JA.define("sl-split-panel");var zb=K`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,OA=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{value:A=>A.checked?A.value||"on":void 0,defaultValue:A=>A.defaultChecked,setValue:(A,t)=>A.checked=t}),this.hasSlotController=new VA(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(A){A.key==="ArrowLeft"&&(A.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),A.key==="ArrowRight"&&(A.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(A){this.input.focus(A)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!A;return w`
      <div
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${O({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${T(this.value)}
            .checked=${He(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};OA.styles=[$,Le,zb];l([H('input[type="checkbox"]')],OA.prototype,"input",2);l([L()],OA.prototype,"hasFocus",2);l([u()],OA.prototype,"title",2);l([u()],OA.prototype,"name",2);l([u()],OA.prototype,"value",2);l([u({reflect:!0})],OA.prototype,"size",2);l([u({type:Boolean,reflect:!0})],OA.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],OA.prototype,"checked",2);l([ar("checked")],OA.prototype,"defaultChecked",2);l([u({reflect:!0})],OA.prototype,"form",2);l([u({type:Boolean,reflect:!0})],OA.prototype,"required",2);l([u({attribute:"help-text"})],OA.prototype,"helpText",2);l([x("checked",{waitUntilFirstUpdate:!0})],OA.prototype,"handleCheckedChange",1);l([x("disabled",{waitUntilFirstUpdate:!0})],OA.prototype,"handleDisabledChange",1);OA.define("sl-switch");gs.define("sl-resize-observer");var Pb=K`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ga extends ds{constructor(t){if(super(t),this.it=q,t.type!==Qt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||t==null)return this._t=void 0,this.it=t;if(t===WA)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ga.directiveName="unsafeHTML",ga.resultType=1;const oi=cs(ga);var P=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new VA(this,"help-text","label"),this.localize=new W(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=A=>w`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,A)}
      >
        ${A.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=A=>{const t=A.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=A=>{const t=A.target,e=t.closest(".select__clear")!==null,r=t.closest("sl-icon-button")!==null;if(!(e||r)){if(A.key==="Escape"&&this.open&&!this.closeWatcher&&(A.preventDefault(),A.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),A.key==="Enter"||A.key===" "&&this.typeToSelectString===""){if(A.preventDefault(),A.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(A.key)){const s=this.getAllOptions(),i=s.indexOf(this.currentOption);let o=Math.max(0,i);if(A.preventDefault(),!this.open&&(this.show(),this.currentOption))return;A.key==="ArrowDown"?(o=i+1,o>s.length-1&&(o=0)):A.key==="ArrowUp"?(o=i-1,o<0&&(o=s.length-1)):A.key==="Home"?o=0:A.key==="End"&&(o=s.length-1),this.setCurrentOption(s[o])}if(A.key&&A.key.length===1||A.key==="Backspace"){const s=this.getAllOptions();if(A.metaKey||A.ctrlKey||A.altKey)return;if(!this.open){if(A.key==="Backspace")return;this.show()}A.stopPropagation(),A.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),A.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=A.key.toLowerCase();for(const i of s)if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=A=>{const t=A.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(A){this.multiple?A=Array.isArray(A)?A:A.split(" "):A=Array.isArray(A)?A.join(" "):A,this._value!==A&&(this.valueHasChanged=!0,this._value=A)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var A;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((A=this.closeWatcher)==null||A.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var A;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(A=this.closeWatcher)==null||A.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(A){const e=A.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||e||(A.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(A){A.key!=="Tab"&&(A.stopPropagation(),this.handleDocumentKeyDown(A))}handleClearClick(A){A.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(A){A.stopPropagation(),A.preventDefault()}handleOptionClick(A){const e=A.target.closest("sl-option"),r=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const A=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,e=Array.isArray(t)?t:[t],r=[];A.forEach(s=>r.push(s.value)),this.setSelectedOptions(A.filter(s=>e.includes(s.value)))}handleTagRemove(A,t){A.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(A){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),A&&(this.currentOption=A,A.current=!0,A.tabIndex=0,A.focus())}setSelectedOptions(A){const t=this.getAllOptions(),e=Array.isArray(A)?A:[A];t.forEach(r=>r.selected=!1),e.length&&e.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(A,t){t===!0||t===!1?A.selected=t:A.selected=!A.selected,this.selectionChanged()}selectionChanged(){var A,t,e;const r=this.getAllOptions();this.selectedOptions=r.filter(i=>i.selected);const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const i=this.selectedOptions[0];this.value=(A=i==null?void 0:i.value)!=null?A:"",this.displayLabel=(e=(t=i==null?void 0:i.getTextLabel)==null?void 0:t.call(i))!=null?e:""}this.valueHasChanged=s,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((A,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const e=this.getTag(A,t);return w`<div @sl-remove=${r=>this.handleTagRemove(r,A)}>
          ${typeof e=="string"?oi(e):e}
        </div>`}else if(t===this.maxOptionsVisible)return w`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return w``})}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(A,t,e){if(super.attributeChangedCallback(A,t,e),A==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}const A=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(A.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await bA(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:A,options:t}=aA(this,"select.show",{dir:this.localize.dir()});await cA(this.popup.popup,A,t),this.currentOption&&Oo(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await bA(this);const{keyframes:A,options:t}=aA(this,"select.hide",{dir:this.localize.dir()});await cA(this.popup.popup,A,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,RA(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,RA(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(A){this.valueInput.setCustomValidity(A),this.formControlController.updateValidity()}focus(A){this.displayInput.focus(A)}blur(){this.displayInput.blur()}render(){const A=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!A,r=this.helpText?!0:!!t,s=this.clearable&&!this.disabled&&this.value.length>0,i=this.placeholder&&this.value&&this.value.length<=0;return w`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":e,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${O({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":i,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?w`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?w`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};P.styles=[$,Le,Pb];P.dependencies={"sl-icon":eA,"sl-popup":AA,"sl-tag":ce};l([H(".select")],P.prototype,"popup",2);l([H(".select__combobox")],P.prototype,"combobox",2);l([H(".select__display-input")],P.prototype,"displayInput",2);l([H(".select__value-input")],P.prototype,"valueInput",2);l([H(".select__listbox")],P.prototype,"listbox",2);l([L()],P.prototype,"hasFocus",2);l([L()],P.prototype,"displayLabel",2);l([L()],P.prototype,"currentOption",2);l([L()],P.prototype,"selectedOptions",2);l([L()],P.prototype,"valueHasChanged",2);l([u()],P.prototype,"name",2);l([L()],P.prototype,"value",1);l([u({attribute:"value"})],P.prototype,"defaultValue",2);l([u({reflect:!0})],P.prototype,"size",2);l([u()],P.prototype,"placeholder",2);l([u({type:Boolean,reflect:!0})],P.prototype,"multiple",2);l([u({attribute:"max-options-visible",type:Number})],P.prototype,"maxOptionsVisible",2);l([u({type:Boolean,reflect:!0})],P.prototype,"disabled",2);l([u({type:Boolean})],P.prototype,"clearable",2);l([u({type:Boolean,reflect:!0})],P.prototype,"open",2);l([u({type:Boolean})],P.prototype,"hoist",2);l([u({type:Boolean,reflect:!0})],P.prototype,"filled",2);l([u({type:Boolean,reflect:!0})],P.prototype,"pill",2);l([u()],P.prototype,"label",2);l([u({reflect:!0})],P.prototype,"placement",2);l([u({attribute:"help-text"})],P.prototype,"helpText",2);l([u({reflect:!0})],P.prototype,"form",2);l([u({type:Boolean,reflect:!0})],P.prototype,"required",2);l([u()],P.prototype,"getTag",2);l([x("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);l([x(["defaultValue","value"],{waitUntilFirstUpdate:!0})],P.prototype,"handleValueChange",1);l([x("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);j("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});j("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});P.define("sl-select");var Nb=K`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,nA=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this),this.hasSlotController=new VA(this,"help-text","label"),this.localize=new W(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=A=>A.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.resizeObserver)==null||A.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(A){this.input.style.setProperty("--percent",`${A*100}%`)}syncTooltip(A){if(this.output!==null){const t=this.input.offsetWidth,e=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",i=t*A;if(s){const o=`${t-i}px + ${A} * ${r}`;this.output.style.translate=`calc((${o} - ${e/2}px - ${r} / 2))`}else{const o=`${i}px - ${A} * ${r}`;this.output.style.translate=`calc(${o} - ${e/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const A=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(A),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(A))}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}focus(A){this.input.focus(A)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!A,r=this.helpText?!0:!!t;return w`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--medium":!0,"form-control--has-label":e,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${T(this.name)}
              ?disabled=${this.disabled}
              min=${T(this.min)}
              max=${T(this.max)}
              step=${T(this.step)}
              .value=${He(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?w`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};nA.styles=[$,Le,Nb];l([H(".range__control")],nA.prototype,"input",2);l([H(".range__tooltip")],nA.prototype,"output",2);l([L()],nA.prototype,"hasFocus",2);l([L()],nA.prototype,"hasTooltip",2);l([u()],nA.prototype,"title",2);l([u()],nA.prototype,"name",2);l([u({type:Number})],nA.prototype,"value",2);l([u()],nA.prototype,"label",2);l([u({attribute:"help-text"})],nA.prototype,"helpText",2);l([u({type:Boolean,reflect:!0})],nA.prototype,"disabled",2);l([u({type:Number})],nA.prototype,"min",2);l([u({type:Number})],nA.prototype,"max",2);l([u({type:Number})],nA.prototype,"step",2);l([u()],nA.prototype,"tooltip",2);l([u({attribute:!1})],nA.prototype,"tooltipFormatter",2);l([u({reflect:!0})],nA.prototype,"form",2);l([ar()],nA.prototype,"defaultValue",2);l([ns({passive:!0})],nA.prototype,"handleThumbDragStart",1);l([x("value",{waitUntilFirstUpdate:!0})],nA.prototype,"handleValueChange",1);l([x("disabled",{waitUntilFirstUpdate:!0})],nA.prototype,"handleDisabledChange",1);l([x("hasTooltip",{waitUntilFirstUpdate:!0})],nA.prototype,"syncRange",1);nA.define("sl-range");var Gb=K`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,$A=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(A){return this.getValueFromXCoordinate(A.clientX)}getValueFromTouchPosition(A){return this.getValueFromXCoordinate(A.touches[0].clientX)}getValueFromXCoordinate(A){const t=this.localize.dir()==="rtl",{left:e,right:r,width:s}=this.rating.getBoundingClientRect(),i=t?this.roundToPrecision((r-A)/s*this.max,this.precision):this.roundToPrecision((A-e)/s*this.max,this.precision);return mA(i,0,this.max)}handleClick(A){this.disabled||(this.setValue(this.getValueFromMousePosition(A)),this.emit("sl-change"))}setValue(A){this.disabled||this.readonly||(this.value=A===this.value?0:A,this.isHovering=!1)}handleKeyDown(A){const t=this.localize.dir()==="ltr",e=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(A.key==="ArrowDown"||t&&A.key==="ArrowLeft"||e&&A.key==="ArrowRight"){const s=A.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),A.preventDefault()}if(A.key==="ArrowUp"||t&&A.key==="ArrowRight"||e&&A.key==="ArrowLeft"){const s=A.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),A.preventDefault()}A.key==="Home"&&(this.value=0,A.preventDefault()),A.key==="End"&&(this.value=this.max,A.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(A){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(A)}handleMouseMove(A){this.hoverValue=this.getValueFromMousePosition(A)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(A){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(A),A.preventDefault()}handleTouchMove(A){this.hoverValue=this.getValueFromTouchPosition(A)}handleTouchEnd(A){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),A.preventDefault()}roundToPrecision(A,t=.5){const e=1/t;return Math.ceil(A*e)/e}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(A){this.rating.focus(A)}blur(){this.rating.blur()}render(){const A=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let e=0;return this.disabled||this.readonly?e=this.value:e=this.isHovering?this.hoverValue:this.value,w`
      <div
        part="base"
        class=${O({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":A})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(r=>e>r&&e<r+1?w`
                <span
                  class=${O({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(e)===r+1})}
                  role="presentation"
                >
                  <div
                    style=${DA({clipPath:A?`inset(0 ${(e-r)*100}% 0 0)`:`inset(0 0 0 ${(e-r)*100}%)`})}
                  >
                    ${oi(this.getSymbol(r+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${DA({clipPath:A?`inset(0 0 0 ${100-(e-r)*100}%)`:`inset(0 ${100-(e-r)*100}% 0 0)`})}
                  >
                    ${oi(this.getSymbol(r+1))}
                  </div>
                </span>
              `:w`
              <span
                class=${O({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(e)===r+1,"rating__symbol--active":e>=r+1})}
                role="presentation"
              >
                ${oi(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};$A.styles=[$,Gb];$A.dependencies={"sl-icon":eA};l([H(".rating")],$A.prototype,"rating",2);l([L()],$A.prototype,"hoverValue",2);l([L()],$A.prototype,"isHovering",2);l([u()],$A.prototype,"label",2);l([u({type:Number})],$A.prototype,"value",2);l([u({type:Number})],$A.prototype,"max",2);l([u({type:Number})],$A.prototype,"precision",2);l([u({type:Boolean,reflect:!0})],$A.prototype,"readonly",2);l([u({type:Boolean,reflect:!0})],$A.prototype,"disabled",2);l([u()],$A.prototype,"getSymbol",2);l([ns({passive:!0})],$A.prototype,"handleTouchMove",1);l([x("hoverValue")],$A.prototype,"handleHoverValueChange",1);l([x("isHovering")],$A.prototype,"handleIsHoveringChange",1);$A.define("sl-rating");var Xb=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],De=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const A=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const e=t.getTime()-A.getTime(),{unit:r,value:s}=Xb.find(i=>Math.abs(e)<i.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(e/s),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let i;r==="minute"?i=Xs("second"):r==="hour"?i=Xs("minute"):r==="day"?i=Xs("hour"):i=Xs("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),i)}return w` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};l([L()],De.prototype,"isoTime",2);l([L()],De.prototype,"relativeTime",2);l([u()],De.prototype,"date",2);l([u()],De.prototype,"format",2);l([u()],De.prototype,"numeric",2);l([u({type:Boolean})],De.prototype,"sync",2);function Xs(A){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[A];return e-Date.now()%e}De.define("sl-relative-time");var Wb=K`
  ${Zl}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,gt=class extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(A){if(this.disabled){A.preventDefault(),A.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(A){this.input.focus(A)}blur(){this.input.blur()}render(){return $r`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${O({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${T(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};gt.styles=[$,Wb];l([H(".button")],gt.prototype,"input",2);l([H(".hidden-input")],gt.prototype,"hiddenInput",2);l([L()],gt.prototype,"hasFocus",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"checked",2);l([u()],gt.prototype,"value",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);l([u({reflect:!0})],gt.prototype,"size",2);l([u({type:Boolean,reflect:!0})],gt.prototype,"pill",2);l([x("disabled",{waitUntilFirstUpdate:!0})],gt.prototype,"handleDisabledChange",1);gt.define("sl-radio-button");var Yb=K`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Jb=K`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ke=class extends D{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(A){const t=xr(A.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(A){const t=xr(A.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(A){const t=xr(A.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(A){const t=xr(A.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const A=[...this.defaultSlot.assignedElements({flatten:!0})];A.forEach(t=>{const e=A.indexOf(t),r=xr(t);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",e===0),r.toggleAttribute("data-sl-button-group__button--inner",e>0&&e<A.length-1),r.toggleAttribute("data-sl-button-group__button--last",e===A.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return w`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ke.styles=[$,Jb];l([H("slot")],Ke.prototype,"defaultSlot",2);l([L()],Ke.prototype,"disableRole",2);l([u()],Ke.prototype,"label",2);function xr(A){var t;const e="sl-button, sl-radio-button";return(t=A.closest(e))!=null?t:A.querySelector(e)}var xA=class extends D{constructor(){super(...arguments),this.formControlController=new Pt(this),this.hasSlotController=new VA(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const A=this.required&&!this.value;return this.customValidityMessage!==""?$h:A?Oh:Fi}get validationMessage(){const A=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:A?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(A){const t=A.target.closest("sl-radio, sl-radio-button"),e=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,e.forEach(s=>s.checked=s===t),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(A){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(A.key))return;const e=this.getAllRadios().filter(n=>!n.disabled),r=(t=e.find(n=>n.checked))!=null?t:e[0],s=A.key===" "?0:["ArrowUp","ArrowLeft"].includes(A.key)?-1:1,i=this.value;let o=e.indexOf(r)+s;o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.getAllRadios().forEach(n=>{n.checked=!1,this.hasButtonGroup||n.setAttribute("tabindex","-1")}),this.value=e[o].value,e[o].checked=!0,this.hasButtonGroup?e[o].shadowRoot.querySelector("button").focus():(e[o].setAttribute("tabindex","0"),e[o].focus()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),A.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}async syncRadioElements(){var A,t;const e=this.getAllRadios();if(await Promise.all(e.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=e.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),e.length>0&&!e.some(r=>r.checked))if(this.hasButtonGroup){const r=(A=e[0].shadowRoot)==null?void 0:A.querySelector("button");r&&r.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const r=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const A=this.required&&!this.value,t=this.customValidityMessage!=="";return A||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const A=this.validity.valid;return this.errorMessage=this.customValidityMessage||A?"":this.validationInput.validationMessage,this.formControlController.setValidity(A),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),A||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),A}setCustomValidity(A=""){this.customValidityMessage=A,this.errorMessage=A,this.validationInput.setCustomValidity(A),this.formControlController.updateValidity()}focus(A){const t=this.getAllRadios(),e=t.find(i=>i.checked),r=t.find(i=>!i.disabled),s=e||r;s&&s.focus(A)}render(){const A=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),e=this.label?!0:!!A,r=this.helpText?!0:!!t,s=w`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return w`
      <fieldset
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":e,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?w`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};xA.styles=[$,Le,Yb];xA.dependencies={"sl-button-group":Ke};l([H("slot:not([name])")],xA.prototype,"defaultSlot",2);l([H(".radio-group__validation-input")],xA.prototype,"validationInput",2);l([L()],xA.prototype,"hasButtonGroup",2);l([L()],xA.prototype,"errorMessage",2);l([L()],xA.prototype,"defaultValue",2);l([u()],xA.prototype,"label",2);l([u({attribute:"help-text"})],xA.prototype,"helpText",2);l([u()],xA.prototype,"name",2);l([u({reflect:!0})],xA.prototype,"value",2);l([u({reflect:!0})],xA.prototype,"size",2);l([u({reflect:!0})],xA.prototype,"form",2);l([u({type:Boolean,reflect:!0})],xA.prototype,"required",2);l([x("size",{waitUntilFirstUpdate:!0})],xA.prototype,"handleSizeChange",1);l([x("value")],xA.prototype,"handleValueChange",1);var Zb=xA;xA.define("sl-radio-group");var qb=K`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,ur=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.label=""}updated(A){if(super.updated(A),A.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,r=e-this.value/100*e;this.indicatorOffset=`${r}px`}}render(){return w`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};ur.styles=[$,qb];l([H(".progress-ring__indicator")],ur.prototype,"indicator",2);l([L()],ur.prototype,"indicatorOffset",2);l([u({type:Number,reflect:!0})],ur.prototype,"value",2);l([u()],ur.prototype,"label",2);ur.define("sl-progress-ring");var jb=K`
  :host {
    display: inline-block;
  }
`;let Od=null;class $d{}$d.render=function(A,t){Od(A,t)};self.QrCreator=$d;(function(A){function t(n,a,c,h){var d={},p=A(c,a);p.u(n),p.J(),h=h||0;var g=p.h(),f=p.h()+2*h;return d.text=n,d.level=a,d.version=c,d.O=f,d.a=function(m,Q){return m-=h,Q-=h,0>m||m>=g||0>Q||Q>=g?!1:p.a(m,Q)},d}function e(n,a,c,h,d,p,g,f,m,Q){function C(B,U,b,v,y,E,k){B?(n.lineTo(U+E,b+k),n.arcTo(U,b,v,y,p)):n.lineTo(U,b)}g?n.moveTo(a+p,c):n.moveTo(a,c),C(f,h,c,h,d,-p,0),C(m,h,d,a,d,0,-p),C(Q,a,d,a,c,p,0),C(g,a,c,h,c,0,p)}function r(n,a,c,h,d,p,g,f,m,Q){function C(B,U,b,v){n.moveTo(B+b,U),n.lineTo(B,U),n.lineTo(B,U+v),n.arcTo(B,U,B+b,U,p)}g&&C(a,c,p,p),f&&C(h,c,-p,p),m&&C(h,d,-p,-p),Q&&C(a,d,p,-p)}function s(n,a){var c=a.fill;if(typeof c=="string")n.fillStyle=c;else{var h=c.type,d=c.colorStops;if(c=c.position.map(g=>Math.round(g*a.size)),h==="linear-gradient")var p=n.createLinearGradient.apply(n,c);else if(h==="radial-gradient")p=n.createRadialGradient.apply(n,c);else throw Error("Unsupported fill");d.forEach(([g,f])=>{p.addColorStop(g,f)}),n.fillStyle=p}}function i(n,a){A:{var c=a.text,h=a.v,d=a.N,p=a.K,g=a.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var f=t(c,h,d,g);break A}catch{}f=void 0}if(!f)return null;for(c=n.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),h=f.O,p=a.size/h,c.beginPath(),g=0;g<h;g+=1)for(d=0;d<h;d+=1){var m=c,Q=a.left+d*p,C=a.top+g*p,B=g,U=d,b=f.a,v=Q+p,y=C+p,E=B-1,k=B+1,F=U-1,_=U+1,G=Math.floor(Math.min(.5,Math.max(0,a.R))*p),X=b(B,U),M=b(E,F),V=b(E,U);E=b(E,_);var uA=b(B,_);_=b(k,_),U=b(k,U),k=b(k,F),B=b(B,F),Q=Math.round(Q),C=Math.round(C),v=Math.round(v),y=Math.round(y),X?e(m,Q,C,v,y,G,!V&&!B,!V&&!uA,!U&&!uA,!U&&!B):r(m,Q,C,v,y,G,V&&B&&M,V&&uA&&E,U&&uA&&_,U&&B&&k)}return s(c,a),c.fill(),n}var o={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Od=function(n,a){var c={};Object.assign(c,o,n),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),i(a,c)):(n=document.createElement("canvas"),n.width=c.size,n.height=c.size,c=i(n,c),a.appendChild(c))}})(function(){function A(a){var c=e.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var d=0;d<c.length;d+=1)h.put(c[d],8)}}}function t(){var a=[],c=0,h={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var g=0;g<p;g+=1)h.m((d>>>p-g-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);a.length<=p&&a.push(0),d&&(a[p]|=128>>>c%8),c+=1}};return h}function e(a,c){function h(B,U){for(var b=-1;7>=b;b+=1)if(!(-1>=B+b||f<=B+b))for(var v=-1;7>=v;v+=1)-1>=U+v||f<=U+v||(g[B+b][U+v]=0<=b&&6>=b&&(v==0||v==6)||0<=v&&6>=v&&(b==0||b==6)||2<=b&&4>=b&&2<=v&&4>=v)}function d(B,U){for(var b=f=4*a+17,v=Array(b),y=0;y<b;y+=1){v[y]=Array(b);for(var E=0;E<b;E+=1)v[y][E]=null}for(g=v,h(0,0),h(f-7,0),h(0,f-7),b=i.G(a),v=0;v<b.length;v+=1)for(y=0;y<b.length;y+=1){E=b[v];var k=b[y];if(g[E][k]==null)for(var F=-2;2>=F;F+=1)for(var _=-2;2>=_;_+=1)g[E+F][k+_]=F==-2||F==2||_==-2||_==2||F==0&&_==0}for(b=8;b<f-8;b+=1)g[b][6]==null&&(g[b][6]=b%2==0);for(b=8;b<f-8;b+=1)g[6][b]==null&&(g[6][b]=b%2==0);for(b=i.w(p<<3|U),v=0;15>v;v+=1)y=!B&&(b>>v&1)==1,g[6>v?v:8>v?v+1:f-15+v][8]=y,g[8][8>v?f-v-1:9>v?15-v:14-v]=y;if(g[f-8][8]=!B,7<=a){for(b=i.A(a),v=0;18>v;v+=1)y=!B&&(b>>v&1)==1,g[Math.floor(v/3)][v%3+f-8-3]=y;for(v=0;18>v;v+=1)y=!B&&(b>>v&1)==1,g[v%3+f-8-3][Math.floor(v/3)]=y}if(m==null){for(B=n.I(a,p),b=t(),v=0;v<Q.length;v+=1)y=Q[v],b.put(4,4),b.put(y.b(),i.f(4,a)),y.write(b);for(v=y=0;v<B.length;v+=1)y+=B[v].j;if(b.f()>8*y)throw Error("code length overflow. ("+b.f()+">"+8*y+")");for(b.f()+4<=8*y&&b.put(0,4);b.f()%8!=0;)b.m(!1);for(;!(b.f()>=8*y)&&(b.put(236,8),!(b.f()>=8*y));)b.put(17,8);var G=0;for(y=v=0,E=Array(B.length),k=Array(B.length),F=0;F<B.length;F+=1){var X=B[F].j,M=B[F].o-X;for(v=Math.max(v,X),y=Math.max(y,M),E[F]=Array(X),_=0;_<E[F].length;_+=1)E[F][_]=255&b.B()[_+G];for(G+=X,_=i.C(M),X=r(E[F],_.b()-1).l(_),k[F]=Array(_.b()-1),_=0;_<k[F].length;_+=1)M=_+X.b()-k[F].length,k[F][_]=0<=M?X.c(M):0}for(_=b=0;_<B.length;_+=1)b+=B[_].o;for(b=Array(b),_=G=0;_<v;_+=1)for(F=0;F<B.length;F+=1)_<E[F].length&&(b[G]=E[F][_],G+=1);for(_=0;_<y;_+=1)for(F=0;F<B.length;F+=1)_<k[F].length&&(b[G]=k[F][_],G+=1);m=b}for(B=m,b=-1,v=f-1,y=7,E=0,U=i.F(U),k=f-1;0<k;k-=2)for(k==6&&--k;;){for(F=0;2>F;F+=1)g[v][k-F]==null&&(_=!1,E<B.length&&(_=(B[E]>>>y&1)==1),U(v,k-F)&&(_=!_),g[v][k-F]=_,--y,y==-1&&(E+=1,y=7));if(v+=b,0>v||f<=v){v-=b,b=-b;break}}}var p=s[c],g=null,f=0,m=null,Q=[],C={u:function(B){B=A(B),Q.push(B),m=null},a:function(B,U){if(0>B||f<=B||0>U||f<=U)throw Error(B+","+U);return g[B][U]},h:function(){return f},J:function(){for(var B=0,U=0,b=0;8>b;b+=1){d(!0,b);var v=i.D(C);(b==0||B>v)&&(B=v,U=b)}d(!1,U)}};return C}function r(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var h=function(){for(var p=0;p<a.length&&a[p]==0;)p+=1;for(var g=Array(a.length-p+c),f=0;f<a.length-p;f+=1)g[f]=a[f+p];return g}(),d={c:function(p){return h[p]},b:function(){return h.length},multiply:function(p){for(var g=Array(d.b()+p.b()-1),f=0;f<d.b();f+=1)for(var m=0;m<p.b();m+=1)g[f+m]^=o.i(o.g(d.c(f))+o.g(p.c(m)));return r(g,0)},l:function(p){if(0>d.b()-p.b())return d;for(var g=o.g(d.c(0))-o.g(p.c(0)),f=Array(d.b()),m=0;m<d.b();m+=1)f[m]=d.c(m);for(m=0;m<p.b();m+=1)f[m]^=o.i(o.g(p.c(m))+g);return r(f,0).l(p)}};return d}e.s=function(a){for(var c=[],h=0;h<a.length;h++){var d=a.charCodeAt(h);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(h++,d=65536+((d&1023)<<10|a.charCodeAt(h)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var s={L:1,M:0,Q:3,H:2},i=function(){function a(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(d){for(var p=d<<10;0<=a(p)-a(1335);)p^=1335<<a(p)-a(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=a(p)-a(7973);)p^=7973<<a(p)-a(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=r([1],0),g=0;g<d;g+=1)p=p.multiply(r([1,o.i(g)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),g=0,f=0;f<p;f+=1)for(var m=0;m<p;m+=1){for(var Q=0,C=d.a(f,m),B=-1;1>=B;B+=1)if(!(0>f+B||p<=f+B))for(var U=-1;1>=U;U+=1)0>m+U||p<=m+U||(B!=0||U!=0)&&C==d.a(f+B,m+U)&&(Q+=1);5<Q&&(g+=3+Q-5)}for(f=0;f<p-1;f+=1)for(m=0;m<p-1;m+=1)Q=0,d.a(f,m)&&(Q+=1),d.a(f+1,m)&&(Q+=1),d.a(f,m+1)&&(Q+=1),d.a(f+1,m+1)&&(Q+=1),(Q==0||Q==4)&&(g+=3);for(f=0;f<p;f+=1)for(m=0;m<p-6;m+=1)d.a(f,m)&&!d.a(f,m+1)&&d.a(f,m+2)&&d.a(f,m+3)&&d.a(f,m+4)&&!d.a(f,m+5)&&d.a(f,m+6)&&(g+=40);for(m=0;m<p;m+=1)for(f=0;f<p-6;f+=1)d.a(f,m)&&!d.a(f+1,m)&&d.a(f+2,m)&&d.a(f+3,m)&&d.a(f+4,m)&&!d.a(f+5,m)&&d.a(f+6,m)&&(g+=40);for(m=Q=0;m<p;m+=1)for(f=0;f<p;f+=1)d.a(f,m)&&(Q+=1);return g+=Math.abs(100*Q/p/p-50)/5*10}};return h}(),o=function(){for(var a=Array(256),c=Array(256),h=0;8>h;h+=1)a[h]=1<<h;for(h=8;256>h;h+=1)a[h]=a[h-4]^a[h-5]^a[h-6]^a[h-8];for(h=0;255>h;h+=1)c[a[h]]=h;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),n=function(){function a(d,p){switch(p){case s.L:return c[4*(d-1)];case s.M:return c[4*(d-1)+1];case s.Q:return c[4*(d-1)+2];case s.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(d,p){var g=a(d,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=g.length/3,p=[];for(var f=0;f<d;f+=1)for(var m=g[3*f],Q=g[3*f+1],C=g[3*f+2],B=0;B<m;B+=1){var U=C,b={};b.o=Q,b.j=U,p.push(b)}return p}};return h}();return e}());const Av=QrCreator;var mt=class extends D{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Av.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var A;return w`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((A=this.label)==null?void 0:A.length)>0?this.label:this.value}
        style=${DA({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};mt.styles=[$,jb];l([H("canvas")],mt.prototype,"canvas",2);l([u()],mt.prototype,"value",2);l([u()],mt.prototype,"label",2);l([u({type:Number})],mt.prototype,"size",2);l([u()],mt.prototype,"fill",2);l([u()],mt.prototype,"background",2);l([u({type:Number})],mt.prototype,"radius",2);l([u({attribute:"error-correction"})],mt.prototype,"errorCorrection",2);l([x(["background","errorCorrection","fill","radius","size","value"])],mt.prototype,"generate",1);mt.define("sl-qr-code");var tv=K`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,lt=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const A=this.closest("sl-select");A&&A.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const A=this.childNodes;let t="";return[...A].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("slot")||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return w`
      <div
        part="base"
        class=${O({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};lt.styles=[$,tv];lt.dependencies={"sl-icon":eA};l([H(".option__label")],lt.prototype,"defaultSlot",2);l([L()],lt.prototype,"current",2);l([L()],lt.prototype,"selected",2);l([L()],lt.prototype,"hasHover",2);l([u({reflect:!0})],lt.prototype,"value",2);l([u({type:Boolean,reflect:!0})],lt.prototype,"disabled",2);l([x("disabled")],lt.prototype,"handleDisabledChange",1);l([x("selected")],lt.prototype,"handleSelectedChange",1);l([x("value")],lt.prototype,"handleValueChange",1);lt.define("sl-option");AA.define("sl-popup");var ev=K`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,ms=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return w`
      <div
        part="base"
        class=${O({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${T(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${DA({width:`${this.value}%`})}>
          ${this.indeterminate?"":w` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};ms.styles=[$,ev];l([u({type:Number,reflect:!0})],ms.prototype,"value",2);l([u({type:Boolean,reflect:!0})],ms.prototype,"indeterminate",2);l([u()],ms.prototype,"label",2);ms.define("sl-progress-bar");var rv=K`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Md=class extends D{render(){return w` <slot part="base" class="menu-label"></slot> `}};Md.styles=[$,rv];Md.define("sl-menu-label");var sv=K`
  :host {
    display: contents;
  }
`,St=class extends D{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=A=>{this.emit("sl-mutation",{detail:{mutationList:A}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const A=typeof this.attr=="string"&&this.attr.length>0,t=A&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:A,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return w` <slot></slot> `}};St.styles=[$,sv];l([u({reflect:!0})],St.prototype,"attr",2);l([u({attribute:"attr-old-value",type:Boolean,reflect:!0})],St.prototype,"attrOldValue",2);l([u({attribute:"char-data",type:Boolean,reflect:!0})],St.prototype,"charData",2);l([u({attribute:"char-data-old-value",type:Boolean,reflect:!0})],St.prototype,"charDataOldValue",2);l([u({attribute:"child-list",type:Boolean,reflect:!0})],St.prototype,"childList",2);l([u({type:Boolean,reflect:!0})],St.prototype,"disabled",2);l([x("disabled")],St.prototype,"handleDisabledChange",1);l([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],St.prototype,"handleChange",1);St.define("sl-mutation-observer");var iv=K`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Xa=class extends D{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(A){const t=["menuitem","menuitemcheckbox"],e=A.composedPath(),r=e.find(n=>{var a;return t.includes(((a=n==null?void 0:n.getAttribute)==null?void 0:a.call(n,"role"))||"")});if(!r||e.find(n=>{var a;return((a=n==null?void 0:n.getAttribute)==null?void 0:a.call(n,"role"))==="menu"})!==this)return;const o=r;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(A){if(A.key==="Enter"||A.key===" "){const t=this.getCurrentItem();A.preventDefault(),A.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(A.key)){const t=this.getAllItems(),e=this.getCurrentItem();let r=e?t.indexOf(e):0;t.length>0&&(A.preventDefault(),A.stopPropagation(),A.key==="ArrowDown"?r++:A.key==="ArrowUp"?r--:A.key==="Home"?r=0:A.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(A){const t=A.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const A=this.getAllItems();A.length>0&&this.setCurrentItem(A[0])}isMenuItem(A){var t;return A.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=A.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(A=>!(A.inert||!this.isMenuItem(A)))}getCurrentItem(){return this.getAllItems().find(A=>A.getAttribute("tabindex")==="0")}setCurrentItem(A){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===A?"0":"-1")})}render(){return w`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Xa.styles=[$,iv];l([H("slot")],Xa.prototype,"defaultSlot",2);Xa.define("sl-menu");var ov=K`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,av=class{constructor(A,t){this.popupRef=ic(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e);break}},this.handleClick=e=>{var r;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName==="sl-menu-item"||(r=e.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),r=e==null?void 0:e.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],s=getComputedStyle(this.host).direction==="rtl";if(!r)return;const{left:i,top:o,width:n,height:a}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+a}px`)},(this.host=A).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(A){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let e=null;for(const r of t.assignedElements())if(e=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),e.length!==0)break;if(!(!e||e.length===0)){e[0].setAttribute("tabindex","0");for(let r=1;r!==e.length;++r)e[r].setAttribute("tabindex","-1");this.popupRef.value&&(A.preventDefault(),A.stopPropagation(),this.popupRef.value.active?e[0]instanceof HTMLElement&&e[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{e[0]instanceof HTMLElement&&e[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(A){this.popupRef.value&&this.popupRef.value.active!==A&&(this.popupRef.value.active=A,this.host.requestUpdate())}enableSubmenu(A=!0){A?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var A;if(!((A=this.host.parentElement)!=null&&A.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((s,i)=>{var o;const n=(o=t.get(i))!=null?o:new CSSUnitValue(0,"px"),c=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return s-c.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const A=getComputedStyle(this.host).direction==="rtl";return this.isConnected?w`
      <sl-popup
        ${oc(this.popupRef)}
        placement=${A?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:w` <slot name="submenu" hidden></slot> `}},ZA=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new VA(this,"submenu"),this.submenuController=new av(this,this.hasSlotController),this.handleHostClick=A=>{this.disabled&&(A.preventDefault(),A.stopImmediatePropagation())},this.handleMouseOver=A=>{this.focus(),A.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const A=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=A;return}A!==this.cachedTextLabel&&(this.cachedTextLabel=A,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Mh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const A=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return w`
      <div
        id="anchor"
        part="base"
        class=${O({"menu-item":!0,"menu-item--rtl":A,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${A?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?w` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ZA.styles=[$,ov];ZA.dependencies={"sl-icon":eA,"sl-popup":AA,"sl-spinner":ls};l([H("slot:not([name])")],ZA.prototype,"defaultSlot",2);l([H(".menu-item")],ZA.prototype,"menuItem",2);l([u()],ZA.prototype,"type",2);l([u({type:Boolean,reflect:!0})],ZA.prototype,"checked",2);l([u()],ZA.prototype,"value",2);l([u({type:Boolean,reflect:!0})],ZA.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],ZA.prototype,"disabled",2);l([x("checked")],ZA.prototype,"handleCheckedChange",1);l([x("disabled")],ZA.prototype,"handleDisabledChange",1);l([x("type")],ZA.prototype,"handleTypeChange",1);ZA.define("sl-menu-item");var nv=K`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Oe=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.position=50}handleDrag(A){const{width:t}=this.base.getBoundingClientRect(),e=this.localize.dir()==="rtl";A.preventDefault(),Yr(this.base,{onMove:r=>{this.position=parseFloat(mA(r/t*100,0,100).toFixed(2)),e&&(this.position=100-this.position)},initialEvent:A})}handleKeyDown(A){const t=this.localize.dir()==="ltr",e=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(A.key)){const r=A.shiftKey?10:1;let s=this.position;A.preventDefault(),(t&&A.key==="ArrowLeft"||e&&A.key==="ArrowRight")&&(s-=r),(t&&A.key==="ArrowRight"||e&&A.key==="ArrowLeft")&&(s+=r),A.key==="Home"&&(s=0),A.key==="End"&&(s=100),s=mA(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const A=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        id="image-comparer"
        class=${O({"image-comparer":!0,"image-comparer--rtl":A})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${DA({clipPath:A?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${DA({left:A?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Oe.styles=[$,nv];Oe.scopedElement={"sl-icon":eA};l([H(".image-comparer")],Oe.prototype,"base",2);l([H(".image-comparer__handle")],Oe.prototype,"handle",2);l([u({type:Number,reflect:!0})],Oe.prototype,"position",2);l([x("position",{waitUntilFirstUpdate:!0})],Oe.prototype,"handlePositionChange",1);Oe.define("sl-image-comparer");var lv=K`
  :host {
    display: block;
  }
`,xo=new Map;function cv(A,t="cors"){const e=xo.get(A);if(e!==void 0)return Promise.resolve(e);const r=fetch(A,{mode:t}).then(async s=>{const i={ok:s.ok,status:s.status,html:await s.text()};return xo.set(A,i),i});return xo.set(A,r),r}var pr=class extends D{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(A){const t=document.createElement("script");[...A.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=A.textContent,A.parentNode.replaceChild(t,A)}async handleSrcChange(){try{const A=this.src,t=await cv(A,this.mode);if(A!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(e=>this.executeScript(e)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return w`<slot></slot>`}};pr.styles=[$,lv];l([u()],pr.prototype,"src",2);l([u()],pr.prototype,"mode",2);l([u({attribute:"allow-scripts",type:Boolean})],pr.prototype,"allowScripts",2);l([x("src")],pr.prototype,"handleSrcChange",1);pr.define("sl-include");eA.define("sl-icon");CA.define("sl-icon-button");var Vi=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const A=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],e=this.unit==="bit"?A:t,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),s=e[r]+this.unit,i=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(i,{style:"unit",unit:s,unitDisplay:this.display})}};l([u({type:Number})],Vi.prototype,"value",2);l([u()],Vi.prototype,"unit",2);l([u()],Vi.prototype,"display",2);Vi.define("sl-format-bytes");var qA=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.date=new Date,this.hourFormat="auto"}render(){const A=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(A.getMilliseconds()))return w`
      <time datetime=${A.toISOString()}>
        ${this.localize.date(A,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};l([u()],qA.prototype,"date",2);l([u()],qA.prototype,"weekday",2);l([u()],qA.prototype,"era",2);l([u()],qA.prototype,"year",2);l([u()],qA.prototype,"month",2);l([u()],qA.prototype,"day",2);l([u()],qA.prototype,"hour",2);l([u()],qA.prototype,"minute",2);l([u()],qA.prototype,"second",2);l([u({attribute:"time-zone-name"})],qA.prototype,"timeZoneName",2);l([u({attribute:"time-zone"})],qA.prototype,"timeZone",2);l([u({attribute:"hour-format"})],qA.prototype,"hourFormat",2);qA.define("sl-format-date");var Bt=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};l([u({type:Number})],Bt.prototype,"value",2);l([u()],Bt.prototype,"type",2);l([u({attribute:"no-grouping",type:Boolean})],Bt.prototype,"noGrouping",2);l([u()],Bt.prototype,"currency",2);l([u({attribute:"currency-display"})],Bt.prototype,"currencyDisplay",2);l([u({attribute:"minimum-integer-digits",type:Number})],Bt.prototype,"minimumIntegerDigits",2);l([u({attribute:"minimum-fraction-digits",type:Number})],Bt.prototype,"minimumFractionDigits",2);l([u({attribute:"maximum-fraction-digits",type:Number})],Bt.prototype,"maximumFractionDigits",2);l([u({attribute:"minimum-significant-digits",type:Number})],Bt.prototype,"minimumSignificantDigits",2);l([u({attribute:"maximum-significant-digits",type:Number})],Bt.prototype,"maximumSignificantDigits",2);Bt.define("sl-format-number");var dv=K`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,zi=class extends D{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};zi.styles=[$,dv];l([u({type:Boolean,reflect:!0})],zi.prototype,"vertical",2);l([x("vertical")],zi.prototype,"handleVerticalChange",1);zi.define("sl-divider");var hv=K`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Hl(A){return A.charAt(0).toUpperCase()+A.slice(1)}var jA=class extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"footer"),this.localize=new W(this),this.modal=new ec(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=A=>{this.contained||A.key==="Escape"&&this.modal.isActive()&&this.open&&(A.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Mr(this)))}disconnectedCallback(){super.disconnectedCallback(),Rr(this),this.removeOpenListeners()}requestClose(A){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:A}}).defaultPrevented){const e=aA(this,"drawer.denyClose",{dir:this.localize.dir()});cA(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var A;"CloseWatcher"in window?((A=this.closeWatcher)==null||A.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var A;document.removeEventListener("keydown",this.handleDocumentKeyDown),(A=this.closeWatcher)==null||A.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Mr(this));const A=this.querySelector("[autofocus]");A&&A.removeAttribute("autofocus"),await Promise.all([bA(this.drawer),bA(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(A?A.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),A&&A.setAttribute("autofocus","")});const t=aA(this,`drawer.show${Hl(this.placement)}`,{dir:this.localize.dir()}),e=aA(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([cA(this.panel,t.keyframes,t.options),cA(this.overlay,e.keyframes,e.options)]),this.emit("sl-after-show")}else{Ia(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Rr(this)),await Promise.all([bA(this.drawer),bA(this.overlay)]);const A=aA(this,`drawer.hide${Hl(this.placement)}`,{dir:this.localize.dir()}),t=aA(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([cA(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),cA(this.panel,A.keyframes,A.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const e=this.originalTrigger;typeof(e==null?void 0:e.focus)=="function"&&setTimeout(()=>e.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Mr(this)),this.open&&this.contained&&(this.modal.deactivate(),Rr(this))}async show(){if(!this.open)return this.open=!0,RA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,RA(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${O({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${T(this.noHeader?this.label:void 0)}
          aria-labelledby=${T(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};jA.styles=[$,hv];jA.dependencies={"sl-icon-button":CA};l([H(".drawer")],jA.prototype,"drawer",2);l([H(".drawer__panel")],jA.prototype,"panel",2);l([H(".drawer__overlay")],jA.prototype,"overlay",2);l([u({type:Boolean,reflect:!0})],jA.prototype,"open",2);l([u({reflect:!0})],jA.prototype,"label",2);l([u({reflect:!0})],jA.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],jA.prototype,"contained",2);l([u({attribute:"no-header",type:Boolean,reflect:!0})],jA.prototype,"noHeader",2);l([x("open",{waitUntilFirstUpdate:!0})],jA.prototype,"handleOpenChange",1);l([x("contained",{waitUntilFirstUpdate:!0})],jA.prototype,"handleNoModalChange",1);j("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});j("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});j("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});j("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});j("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});j("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});j("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});j("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});j("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});j("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});j("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});jA.define("sl-drawer");var uv=K`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,LA=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=A=>{this.open&&A.key==="Escape"&&(A.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=A=>{var t;if(A.key==="Escape"&&this.open&&!this.closeWatcher){A.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(A.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){A.preventDefault(),this.hide(),this.focusOnTrigger();return}const e=(r,s)=>{if(!r)return null;const i=r.closest(s);if(i)return i;const o=r.getRootNode();return o instanceof ShadowRoot?e(o.host,s):null};setTimeout(()=>{var r;const s=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?Ac():document.activeElement;(!this.containingElement||e(s,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=A=>{const t=A.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=A=>{const t=A.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const A=this.trigger.assignedElements({flatten:!0})[0];typeof(A==null?void 0:A.focus)=="function"&&A.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(A=>A.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(A){if([" ","Enter"].includes(A.key)){A.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const e=t.getAllItems(),r=e[0],s=e[e.length-1];["ArrowDown","ArrowUp","Home","End"].includes(A.key)&&(A.preventDefault(),this.open||(this.show(),await this.updateComplete),e.length>0&&this.updateComplete.then(()=>{(A.key==="ArrowDown"||A.key==="Home")&&(t.setCurrentItem(r),r.focus()),(A.key==="ArrowUp"||A.key==="End")&&(t.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(A){A.key===" "&&A.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>iu(r).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,RA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,RA(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var A;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((A=this.closeWatcher)==null||A.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var A;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(A=this.closeWatcher)==null||A.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await bA(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:A,options:t}=aA(this,"dropdown.show",{dir:this.localize.dir()});await cA(this.popup.popup,A,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await bA(this);const{keyframes:A,options:t}=aA(this,"dropdown.hide",{dir:this.localize.dir()});await cA(this.popup.popup,A,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return w`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${T(this.sync?this.sync:void 0)}
        class=${O({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};LA.styles=[$,uv];LA.dependencies={"sl-popup":AA};l([H(".dropdown")],LA.prototype,"popup",2);l([H(".dropdown__trigger")],LA.prototype,"trigger",2);l([H(".dropdown__panel")],LA.prototype,"panel",2);l([u({type:Boolean,reflect:!0})],LA.prototype,"open",2);l([u({reflect:!0})],LA.prototype,"placement",2);l([u({type:Boolean,reflect:!0})],LA.prototype,"disabled",2);l([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],LA.prototype,"stayOpenOnSelect",2);l([u({attribute:!1})],LA.prototype,"containingElement",2);l([u({type:Number})],LA.prototype,"distance",2);l([u({type:Number})],LA.prototype,"skidding",2);l([u({type:Boolean})],LA.prototype,"hoist",2);l([u({reflect:!0})],LA.prototype,"sync",2);l([x("open",{waitUntilFirstUpdate:!0})],LA.prototype,"handleOpenChange",1);j("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});j("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});LA.define("sl-dropdown");var pv=K`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,_A=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let A=this.value;if(this.from){const t=this.getRootNode(),e=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let s=this.from,i="";e?[s,i]=this.from.trim().split("."):r&&([s,i]=this.from.trim().replace(/\]$/,"").split("["));const o="getElementById"in t?t.getElementById(s):null;o?r?A=o.getAttribute(i)||"":e?A=o[i]||"":A=o.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!A)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(A),this.showStatus("success"),this.emit("sl-copy",{detail:{value:A}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(A){const t=this.copyLabel||this.localize.term("copy"),e=this.successLabel||this.localize.term("copied"),r=this.errorLabel||this.localize.term("error"),s=A==="success"?this.successIcon:this.errorIcon,i=aA(this,"copy.in",{dir:"ltr"}),o=aA(this,"copy.out",{dir:"ltr"});this.tooltip.content=A==="success"?e:r,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=A,s.hidden=!1,await s.animate(i.keyframes,i.options).finished,setTimeout(async()=>{await s.animate(o.keyframes,o.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(i.keyframes,i.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const A=this.copyLabel||this.localize.term("copy");return w`
      <sl-tooltip
        class=${O({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${A}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};_A.styles=[$,pv];_A.dependencies={"sl-icon":eA,"sl-tooltip":FA};l([H('slot[name="copy-icon"]')],_A.prototype,"copyIcon",2);l([H('slot[name="success-icon"]')],_A.prototype,"successIcon",2);l([H('slot[name="error-icon"]')],_A.prototype,"errorIcon",2);l([H("sl-tooltip")],_A.prototype,"tooltip",2);l([L()],_A.prototype,"isCopying",2);l([L()],_A.prototype,"status",2);l([u()],_A.prototype,"value",2);l([u()],_A.prototype,"from",2);l([u({type:Boolean,reflect:!0})],_A.prototype,"disabled",2);l([u({attribute:"copy-label"})],_A.prototype,"copyLabel",2);l([u({attribute:"success-label"})],_A.prototype,"successLabel",2);l([u({attribute:"error-label"})],_A.prototype,"errorLabel",2);l([u({attribute:"feedback-duration",type:Number})],_A.prototype,"feedbackDuration",2);l([u({attribute:"tooltip-placement"})],_A.prototype,"tooltipPlacement",2);l([u({type:Boolean})],_A.prototype,"hoist",2);j("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});j("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});_A.define("sl-copy-button");var fv=K`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,bt=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(A=>{for(const t of A)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.detailsObserver)==null||A.disconnect()}handleSummaryClick(A){A.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),this.open?this.hide():this.show()),(A.key==="ArrowUp"||A.key==="ArrowLeft")&&(A.preventDefault(),this.hide()),(A.key==="ArrowDown"||A.key==="ArrowRight")&&(A.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await bA(this.body);const{keyframes:t,options:e}=aA(this,"details.show",{dir:this.localize.dir()});await cA(this.body,li(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await bA(this.body);const{keyframes:t,options:e}=aA(this,"details.hide",{dir:this.localize.dir()});await cA(this.body,li(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,RA(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,RA(this,"sl-after-hide")}render(){const A=this.localize.dir()==="rtl";return w`
      <details
        part="base"
        class=${O({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":A})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${A?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${A?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};bt.styles=[$,fv];bt.dependencies={"sl-icon":eA};l([H(".details")],bt.prototype,"details",2);l([H(".details__header")],bt.prototype,"header",2);l([H(".details__body")],bt.prototype,"body",2);l([H(".details__expand-icon-slot")],bt.prototype,"expandIconSlot",2);l([u({type:Boolean,reflect:!0})],bt.prototype,"open",2);l([u()],bt.prototype,"summary",2);l([u({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);l([x("open",{waitUntilFirstUpdate:!0})],bt.prototype,"handleOpenChange",1);j("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});j("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});bt.define("sl-details");var gv=K`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function kA(A,t){mv(A)&&(A="100%");const e=Bv(A);return A=t===360?A:Math.min(t,Math.max(0,parseFloat(A))),e&&(A=parseInt(String(A*t),10)/100),Math.abs(A-t)<1e-6?1:(t===360?A=(A<0?A%t+t:A%t)/parseFloat(String(t)):A=A%t/parseFloat(String(t)),A)}function Ws(A){return Math.min(1,Math.max(0,A))}function mv(A){return typeof A=="string"&&A.indexOf(".")!==-1&&parseFloat(A)===1}function Bv(A){return typeof A=="string"&&A.indexOf("%")!==-1}function Rd(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function Ys(A){return Number(A)<=1?`${Number(A)*100}%`:A}function Ce(A){return A.length===1?"0"+A:String(A)}function bv(A,t,e){return{r:kA(A,255)*255,g:kA(t,255)*255,b:kA(e,255)*255}}function Il(A,t,e){A=kA(A,255),t=kA(t,255),e=kA(e,255);const r=Math.max(A,t,e),s=Math.min(A,t,e);let i=0,o=0;const n=(r+s)/2;if(r===s)o=0,i=0;else{const a=r-s;switch(o=n>.5?a/(2-r-s):a/(r+s),r){case A:i=(t-e)/a+(t<e?6:0);break;case t:i=(e-A)/a+2;break;case e:i=(A-t)/a+4;break}i/=6}return{h:i,s:o,l:n}}function _o(A,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?A+(t-A)*(6*e):e<1/2?t:e<2/3?A+(t-A)*(2/3-e)*6:A}function vv(A,t,e){let r,s,i;if(A=kA(A,360),t=kA(t,100),e=kA(e,100),t===0)s=e,i=e,r=e;else{const o=e<.5?e*(1+t):e+t-e*t,n=2*e-o;r=_o(n,o,A+1/3),s=_o(n,o,A),i=_o(n,o,A-1/3)}return{r:r*255,g:s*255,b:i*255}}function kl(A,t,e){A=kA(A,255),t=kA(t,255),e=kA(e,255);const r=Math.max(A,t,e),s=Math.min(A,t,e);let i=0;const o=r,n=r-s,a=r===0?0:n/r;if(r===s)i=0;else{switch(r){case A:i=(t-e)/n+(t<e?6:0);break;case t:i=(e-A)/n+2;break;case e:i=(A-t)/n+4;break}i/=6}return{h:i,s:a,v:o}}function wv(A,t,e){A=kA(A,360)*6,t=kA(t,100),e=kA(e,100);const r=Math.floor(A),s=A-r,i=e*(1-t),o=e*(1-s*t),n=e*(1-(1-s)*t),a=r%6,c=[e,o,i,i,n,e][a],h=[n,e,e,o,i,i][a],d=[i,i,n,e,e,o][a];return{r:c*255,g:h*255,b:d*255}}function Sl(A,t,e,r){const s=[Ce(Math.round(A).toString(16)),Ce(Math.round(t).toString(16)),Ce(Math.round(e).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function yv(A,t,e,r,s){const i=[Ce(Math.round(A).toString(16)),Ce(Math.round(t).toString(16)),Ce(Math.round(e).toString(16)),Ce(Qv(r))];return s&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Cv(A,t,e,r){const s=A/100,i=t/100,o=e/100,n=r/100,a=255*(1-s)*(1-n),c=255*(1-i)*(1-n),h=255*(1-o)*(1-n);return{r:a,g:c,b:h}}function Ll(A,t,e){let r=1-A/255,s=1-t/255,i=1-e/255,o=Math.min(r,s,i);return o===1?(r=0,s=0,i=0):(r=(r-o)/(1-o)*100,s=(s-o)/(1-o)*100,i=(i-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(s),y:Math.round(i),k:Math.round(o)}}function Qv(A){return Math.round(parseFloat(A)*255).toString(16)}function Tl(A){return GA(A)/255}function GA(A){return parseInt(A,16)}function Uv(A){return{r:A>>16,g:(A&65280)>>8,b:A&255}}const ma={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Fv(A){let t={r:0,g:0,b:0},e=1,r=null,s=null,i=null,o=!1,n=!1;return typeof A=="string"&&(A=Ev(A)),typeof A=="object"&&(PA(A.r)&&PA(A.g)&&PA(A.b)?(t=bv(A.r,A.g,A.b),o=!0,n=String(A.r).substr(-1)==="%"?"prgb":"rgb"):PA(A.h)&&PA(A.s)&&PA(A.v)?(r=Ys(A.s),s=Ys(A.v),t=wv(A.h,r,s),o=!0,n="hsv"):PA(A.h)&&PA(A.s)&&PA(A.l)?(r=Ys(A.s),i=Ys(A.l),t=vv(A.h,r,i),o=!0,n="hsl"):PA(A.c)&&PA(A.m)&&PA(A.y)&&PA(A.k)&&(t=Cv(A.c,A.m,A.y,A.k),o=!0,n="cmyk"),Object.prototype.hasOwnProperty.call(A,"a")&&(e=A.a)),e=Rd(e),{ok:o,format:A.format||n,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}const xv="[-\\+]?\\d+%?",_v="[-\\+]?\\d*\\.\\d+%?",te="(?:"+_v+")|(?:"+xv+")",Eo="[\\s|\\(]+("+te+")[,|\\s]+("+te+")[,|\\s]+("+te+")\\s*\\)?",Js="[\\s|\\(]+("+te+")[,|\\s]+("+te+")[,|\\s]+("+te+")[,|\\s]+("+te+")\\s*\\)?",tt={CSS_UNIT:new RegExp(te),rgb:new RegExp("rgb"+Eo),rgba:new RegExp("rgba"+Js),hsl:new RegExp("hsl"+Eo),hsla:new RegExp("hsla"+Js),hsv:new RegExp("hsv"+Eo),hsva:new RegExp("hsva"+Js),cmyk:new RegExp("cmyk"+Js),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ev(A){if(A=A.trim().toLowerCase(),A.length===0)return!1;let t=!1;if(ma[A])A=ma[A],t=!0;else if(A==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=tt.rgb.exec(A);return e?{r:e[1],g:e[2],b:e[3]}:(e=tt.rgba.exec(A),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=tt.hsl.exec(A),e?{h:e[1],s:e[2],l:e[3]}:(e=tt.hsla.exec(A),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=tt.hsv.exec(A),e?{h:e[1],s:e[2],v:e[3]}:(e=tt.hsva.exec(A),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=tt.cmyk.exec(A),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=tt.hex8.exec(A),e?{r:GA(e[1]),g:GA(e[2]),b:GA(e[3]),a:Tl(e[4]),format:t?"name":"hex8"}:(e=tt.hex6.exec(A),e?{r:GA(e[1]),g:GA(e[2]),b:GA(e[3]),format:t?"name":"hex"}:(e=tt.hex4.exec(A),e?{r:GA(e[1]+e[1]),g:GA(e[2]+e[2]),b:GA(e[3]+e[3]),a:Tl(e[4]+e[4]),format:t?"name":"hex8"}:(e=tt.hex3.exec(A),e?{r:GA(e[1]+e[1]),g:GA(e[2]+e[2]),b:GA(e[3]+e[3]),format:t?"name":"hex"}:!1))))))))))}function PA(A){return typeof A=="number"?!Number.isNaN(A):tt.CSS_UNIT.test(A)}class lA{constructor(t="",e={}){if(t instanceof lA)return t;typeof t=="number"&&(t=Uv(t)),this.originalInput=t;const r=Fv(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let e,r,s;const i=t.r/255,o=t.g/255,n=t.b/255;return i<=.03928?e=i/12.92:e=Math.pow((i+.055)/1.055,2.4),o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),n<=.03928?s=n/12.92:s=Math.pow((n+.055)/1.055,2.4),.2126*e+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=Rd(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=kl(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=kl(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.v*100);return this.a===1?`hsv(${e}, ${r}%, ${s}%)`:`hsva(${e}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const t=Il(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Il(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return this.a===1?`hsl(${e}, ${r}%, ${s}%)`:`hsla(${e}, ${r}%, ${s}%, ${this.roundA})`}toHex(t=!1){return Sl(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return yv(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${e}, ${r})`:`rgba(${t}, ${e}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=e=>`${Math.round(kA(e,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=e=>Math.round(kA(e,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ll(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:r,k:s}=Ll(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${r}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+Sl(this.r,this.g,this.b,!1);for(const[e,r]of Object.entries(ma))if(t===r)return e;return!1}toString(t){const e=!!t;t=t??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!e&&s&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new lA(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Ws(e.l),new lA(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new lA(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Ws(e.l),new lA(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Ws(e.s),new lA(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Ws(e.s),new lA(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),r=(e.h+t)%360;return e.h=r<0?360+r:r,new lA(e)}mix(t,e=50){const r=this.toRgb(),s=new lA(t).toRgb(),i=e/100,o={r:(s.r-r.r)*i+r.r,g:(s.g-r.g)*i+r.g,b:(s.b-r.b)*i+r.b,a:(s.a-r.a)*i+r.a};return new lA(o)}analogous(t=6,e=30){const r=this.toHsl(),s=360/e,i=[this];for(r.h=(r.h-(s*t>>1)+720)%360;--t;)r.h=(r.h+s)%360,i.push(new lA(r));return i}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new lA(t)}monochromatic(t=6){const e=this.toHsv(),{h:r}=e,{s}=e;let{v:i}=e;const o=[],n=1/t;for(;t--;)o.push(new lA({h:r,s,v:i})),i=(i+n)%1;return o}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new lA({h:(e+72)%360,s:t.s,l:t.l}),new lA({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),r=new lA(t).toRgb(),s=e.a+r.a*(1-e.a);return new lA({r:(e.r*e.a+r.r*r.a*(1-e.a))/s,g:(e.g*e.a+r.g*r.a*(1-e.a))/s,b:(e.b*e.a+r.b*r.a*(1-e.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:r}=e,s=[this],i=360/t;for(let o=1;o<t;o++)s.push(new lA({h:(r+o*i)%360,s:e.s,l:e.l}));return s}equals(t){const e=new lA(t);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var Dl="EyeDropper"in window,N=class extends D{constructor(){super(),this.formControlController=new Pt(this),this.isSafeValue=!1,this.localize=new W(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const A=["hex","rgb","hsl","hsv"],t=(A.indexOf(this.format)+1)%A.length;this.format=A[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(A){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),e=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,i=this.value;e.focus(),A.preventDefault(),Yr(t,{onMove:o=>{this.alpha=mA(o/r*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:A})}handleHueDrag(A){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),e=t.querySelector(".color-picker__slider-handle"),{width:r}=t.getBoundingClientRect();let s=this.value,i=this.value;e.focus(),A.preventDefault(),Yr(t,{onMove:o=>{this.hue=mA(o/r*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:A})}handleGridDrag(A){const t=this.shadowRoot.querySelector(".color-picker__grid"),e=t.querySelector(".color-picker__grid-handle"),{width:r,height:s}=t.getBoundingClientRect();let i=this.value,o=this.value;e.focus(),A.preventDefault(),this.isDraggingGridHandle=!0,Yr(t,{onMove:(n,a)=>{this.saturation=mA(n/r*100,0,100),this.brightness=mA(100-a/s*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:A})}handleAlphaKeyDown(A){const t=A.shiftKey?10:1,e=this.value;A.key==="ArrowLeft"&&(A.preventDefault(),this.alpha=mA(this.alpha-t,0,100),this.syncValues()),A.key==="ArrowRight"&&(A.preventDefault(),this.alpha=mA(this.alpha+t,0,100),this.syncValues()),A.key==="Home"&&(A.preventDefault(),this.alpha=0,this.syncValues()),A.key==="End"&&(A.preventDefault(),this.alpha=100,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(A){const t=A.shiftKey?10:1,e=this.value;A.key==="ArrowLeft"&&(A.preventDefault(),this.hue=mA(this.hue-t,0,360),this.syncValues()),A.key==="ArrowRight"&&(A.preventDefault(),this.hue=mA(this.hue+t,0,360),this.syncValues()),A.key==="Home"&&(A.preventDefault(),this.hue=0,this.syncValues()),A.key==="End"&&(A.preventDefault(),this.hue=360,this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(A){const t=A.shiftKey?10:1,e=this.value;A.key==="ArrowLeft"&&(A.preventDefault(),this.saturation=mA(this.saturation-t,0,100),this.syncValues()),A.key==="ArrowRight"&&(A.preventDefault(),this.saturation=mA(this.saturation+t,0,100),this.syncValues()),A.key==="ArrowUp"&&(A.preventDefault(),this.brightness=mA(this.brightness+t,0,100),this.syncValues()),A.key==="ArrowDown"&&(A.preventDefault(),this.brightness=mA(this.brightness-t,0,100),this.syncValues()),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(A){const t=A.target,e=this.value;A.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(A){this.formControlController.updateValidity(),A.stopPropagation()}handleInputKeyDown(A){if(A.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(A){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(A)}handleTouchMove(A){A.preventDefault()}parseColor(A){const t=new lA(A);if(!t.isValid)return null;const e=t.toHsl(),r={h:e.h,s:e.s*100,l:e.l*100,a:e.a},s=t.toRgb(),i=t.toHexString(),o=t.toHex8String(),n=t.toHsv(),a={h:n.h,s:n.s*100,v:n.v*100,a:n.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(i),hexa:this.setLetterCase(o)}}setColor(A){const t=this.parseColor(A);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(A){return typeof A!="string"?"":this.uppercase?A.toUpperCase():A.toLowerCase()}async syncValues(){const A=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);A!==null&&(this.format==="hsl"?this.inputValue=this.opacity?A.hsla.string:A.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?A.rgba.string:A.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?A.hsva.string:A.hsv.string:this.inputValue=this.opacity?A.hexa:A.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Dl)return;new EyeDropper().open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(A){const t=this.value;this.disabled||(this.setColor(A),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(A,t,e,r=100){const s=new lA(`hsva(${A}, ${t}%, ${e}%, ${r/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(A){A.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(A,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const e=this.parseColor(t);e!==null?(this.inputValue=this.value,this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=e.hsva.a*100,this.syncValues()):this.inputValue=A??""}}focus(A){this.inline?this.base.focus(A):this.trigger.focus(A)}blur(){var A;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(A=this.dropdown)!=null&&A.open&&this.dropdown.hide()}getFormattedValue(A="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(A){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(A){this.input.setCustomValidity(A),this.formControlController.updateValidity()}render(){const A=this.saturation,t=100-this.brightness,e=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),r=w`
      <div
        part="base"
        class=${O({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?w`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${DA({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${O({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${DA({top:`${t}%`,left:`${A}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${T(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${DA({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${T(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?w`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${DA({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${DA({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${T(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${DA({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":w`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Dl?w`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${e.length>0?w`
              <div part="swatches" class="color-picker__swatches">
                ${e.map(s=>{const i=this.parseColor(s);return i?w`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${T(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${o=>!this.disabled&&o.key==="Enter"&&this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${DA({backgroundColor:i.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:w`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${O({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${DA({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};N.styles=[$,gv];N.dependencies={"sl-button-group":Ke,"sl-button":J,"sl-dropdown":LA,"sl-icon":eA,"sl-input":R,"sl-visually-hidden":Na};l([H('[part~="base"]')],N.prototype,"base",2);l([H('[part~="input"]')],N.prototype,"input",2);l([H(".color-dropdown")],N.prototype,"dropdown",2);l([H('[part~="preview"]')],N.prototype,"previewButton",2);l([H('[part~="trigger"]')],N.prototype,"trigger",2);l([L()],N.prototype,"hasFocus",2);l([L()],N.prototype,"isDraggingGridHandle",2);l([L()],N.prototype,"isEmpty",2);l([L()],N.prototype,"inputValue",2);l([L()],N.prototype,"hue",2);l([L()],N.prototype,"saturation",2);l([L()],N.prototype,"brightness",2);l([L()],N.prototype,"alpha",2);l([u()],N.prototype,"value",2);l([ar()],N.prototype,"defaultValue",2);l([u()],N.prototype,"label",2);l([u()],N.prototype,"format",2);l([u({type:Boolean,reflect:!0})],N.prototype,"inline",2);l([u({reflect:!0})],N.prototype,"size",2);l([u({attribute:"no-format-toggle",type:Boolean})],N.prototype,"noFormatToggle",2);l([u()],N.prototype,"name",2);l([u({type:Boolean,reflect:!0})],N.prototype,"disabled",2);l([u({type:Boolean})],N.prototype,"hoist",2);l([u({type:Boolean})],N.prototype,"opacity",2);l([u({type:Boolean})],N.prototype,"uppercase",2);l([u()],N.prototype,"swatches",2);l([u({reflect:!0})],N.prototype,"form",2);l([u({type:Boolean,reflect:!0})],N.prototype,"required",2);l([ns({passive:!1})],N.prototype,"handleTouchMove",1);l([x("format",{waitUntilFirstUpdate:!0})],N.prototype,"handleFormatChange",1);l([x("opacity",{waitUntilFirstUpdate:!0})],N.prototype,"handleOpacityChange",1);l([x("value")],N.prototype,"handleValueChange",1);N.define("sl-color-picker");var Hv=K`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Vd=class extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${O({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Vd.styles=[$,Hv];Vd.define("sl-card");var Iv=class{constructor(A,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},A.addController(this),this.host=A,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(A){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},A)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},kv=K`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Sv(A,t){if(A!==void 0){let e=0;for(const r of A)yield t(r,e++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lv(A,t,e=1){const r=t===void 0?0:A;t??(t=A);for(let s=r;e>0?s<t:t<s;s+=e)yield s}var hA=class extends D{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Iv(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new W(this),this.pendingSlideChange=!1,this.handleMouseDrag=A=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[A.clientX,A.clientY]),this.scrollContainer.scrollBy({left:-A.movementX,top:-A.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const A=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=A.scrollLeft,e=A.scrollTop;A.style.removeProperty("scroll-snap-type"),A.style.setProperty("overflow","hidden");const r=A.scrollLeft,s=A.scrollTop;A.style.removeProperty("overflow"),A.style.setProperty("scroll-snap-type","none"),A.scrollTo({left:t,top:e,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==r||e!==s)&&(A.scrollTo({left:r,top:s,behavior:$o()?"auto":"smooth"}),await RA(A,"scrollend")),A.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=A=>{A.some(e=>[...e.addedNodes,...e.removedNodes].some(r=>this.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var A;super.disconnectedCallback(),(A=this.mutationObserver)==null||A.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(A){(A.has("slidesPerMove")||A.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const A=this.getSlides().length,{slidesPerPage:t,slidesPerMove:e,loop:r}=this,s=r?A/e:(A-t)/e+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:A=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!A||!t.hasAttribute("data-clone")))}handleClick(A){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-A.clientX),e=Math.abs(this.dragStartPosition[1]-A.clientY);Math.sqrt(t*t+e*e)>=10&&A.preventDefault()}}handleKeyDown(A){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(A.key)){const t=A.target,e=this.localize.dir()==="rtl",r=t.closest('[part~="pagination-item"]')!==null,s=A.key==="ArrowDown"||!e&&A.key==="ArrowRight"||e&&A.key==="ArrowLeft",i=A.key==="ArrowUp"||!e&&A.key==="ArrowLeft"||e&&A.key==="ArrowRight";A.preventDefault(),i&&this.previous(),s&&this.next(),A.key==="Home"&&this.goToSlide(0),A.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var o;const n=(o=this.shadowRoot)==null?void 0:o.querySelector('[part~="pagination-item--active"]');n&&n.focus()})}}handleMouseDragStart(A){this.mouseDragging&&A.button===0&&(A.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const A=new IntersectionObserver(t=>{A.disconnect();for(const n of t){const a=n.target;a.toggleAttribute("inert",!n.isIntersecting),a.classList.toggle("--in-view",n.isIntersecting),a.setAttribute("aria-hidden",n.isIntersecting?"false":"true")}const e=t.find(n=>n.isIntersecting);if(!e)return;const r=this.getSlides({excludeClones:!1}),s=this.getSlides().length,i=r.indexOf(e.target),o=this.loop?i-this.slidesPerPage:i;if(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+s)%s,!this.scrolling&&this.loop&&e.target.hasAttribute("data-clone")){const n=Number(e.target.getAttribute("data-clone"));this.goToSlide(n,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{A.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(A){return A instanceof Element&&A.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((A,t)=>{A.classList.remove("--in-view"),A.classList.remove("--is-active"),A.setAttribute("role","group"),A.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(A.setAttribute("id",`slide-${t+1}`),A.setAttribute("role","tabpanel"),A.removeAttribute("aria-label"),A.setAttribute("aria-labelledby",`tab-${t+1}`)),A.hasAttribute("data-clone")&&A.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const A=this.getSlides(),t=this.slidesPerPage,e=A.slice(-t),r=A.slice(0,t);e.reverse().forEach((s,i)=>{const o=s.cloneNode(!0);o.setAttribute("data-clone",String(A.length-i-1)),this.prepend(o)}),r.forEach((s,i)=>{const o=s.cloneNode(!0);o.setAttribute("data-clone",String(i)),this.append(o)})}handleSlideChange(){const A=this.getSlides();A.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:A[this.activeSlide]}})}updateSlidesSnap(){const A=this.getSlides(),t=this.slidesPerMove;A.forEach((e,r)=>{(r+t)%t===0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(A="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,A)}next(A="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,A)}goToSlide(A,t="smooth"){const{slidesPerPage:e,loop:r}=this,s=this.getSlides(),i=this.getSlides({excludeClones:!1});if(!s.length)return;const o=r?(A+s.length)%s.length:mA(A,0,s.length-e);this.activeSlide=o;const n=this.localize.dir()==="rtl",a=mA(A+(r?e:0)+(n?e-1:0),0,i.length-1),c=i[a];this.scrollToSlide(c,$o()?"auto":t)}scrollToSlide(A,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const e=this.scrollContainer,r=e.getBoundingClientRect(),s=A.getBoundingClientRect(),i=s.left-r.left,o=s.top-r.top;i||o?(this.pendingSlideChange=!0,e.scrollTo({left:i+e.scrollLeft,top:o+e.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:A,scrolling:t}=this,e=this.getPageCount(),r=this.getCurrentPage(),s=this.canScrollPrev(),i=this.canScrollNext(),o=this.localize.dir()==="ltr";return w`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${O({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?w`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${O({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${o?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${O({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!i})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${o?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?w`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Sv(Lv(e),n=>{const a=n===r;return w`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${O({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      id="tab-${n+1}"
                      aria-controls="slide-${n+1}"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${a?this.localize.term("slideNum",n+1):this.localize.term("goToSlide",n+1,e)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(n*A)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};hA.styles=[$,kv];hA.dependencies={"sl-icon":eA};l([u({type:Boolean,reflect:!0})],hA.prototype,"loop",2);l([u({type:Boolean,reflect:!0})],hA.prototype,"navigation",2);l([u({type:Boolean,reflect:!0})],hA.prototype,"pagination",2);l([u({type:Boolean,reflect:!0})],hA.prototype,"autoplay",2);l([u({type:Number,attribute:"autoplay-interval"})],hA.prototype,"autoplayInterval",2);l([u({type:Number,attribute:"slides-per-page"})],hA.prototype,"slidesPerPage",2);l([u({type:Number,attribute:"slides-per-move"})],hA.prototype,"slidesPerMove",2);l([u()],hA.prototype,"orientation",2);l([u({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],hA.prototype,"mouseDragging",2);l([H(".carousel__slides")],hA.prototype,"scrollContainer",2);l([H(".carousel__pagination")],hA.prototype,"paginationContainer",2);l([L()],hA.prototype,"activeSlide",2);l([L()],hA.prototype,"scrolling",2);l([L()],hA.prototype,"dragging",2);l([ns({passive:!0})],hA.prototype,"handleScroll",1);l([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],hA.prototype,"initializeSlides",1);l([x("activeSlide")],hA.prototype,"handleSlideChange",1);l([x("slidesPerMove")],hA.prototype,"updateSlidesSnap",1);l([x("autoplay")],hA.prototype,"handleAutoplayChange",1);hA.define("sl-carousel");var Tv=(A,t)=>{let e=0;return function(...r){window.clearTimeout(e),e=window.setTimeout(()=>{A.call(this,...r)},t)}},Kl=(A,t,e)=>{const r=A[t];A[t]=function(...s){r.call(this,...s),e.call(this,r,...s)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,e=new WeakMap,r=i=>{for(const o of i.changedTouches)t.add(o.identifier)},s=i=>{for(const o of i.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),Kl(EventTarget.prototype,"addEventListener",function(i,o){if(o!=="scrollend")return;const n=Tv(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),Kl(EventTarget.prototype,"removeEventListener",function(i,o){if(o!=="scrollend")return;const n=e.get(this);n&&i.call(this,"scroll",n,{passive:!0})})}})();var Dv=K`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,zd=class extends D{connectedCallback(){super.connectedCallback()}render(){return w` <slot></slot> `}};zd.styles=[$,Dv];zd.define("sl-carousel-item");var Kv=K`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,de=class extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const A=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(A){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return w`
      <div
        part="base"
        class=${O({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?w`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${T(this.target?this.target:void 0)}"
                rel=${T(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?w`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?w`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};de.styles=[$,Kv];l([H("slot:not([name])")],de.prototype,"defaultSlot",2);l([L()],de.prototype,"renderType",2);l([u()],de.prototype,"href",2);l([u()],de.prototype,"target",2);l([u()],de.prototype,"rel",2);l([x("href",{waitUntilFirstUpdate:!0})],de.prototype,"hrefChanged",1);de.define("sl-breadcrumb-item");Ke.define("sl-button-group");var Ov=K`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Lt=class extends D{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const A=w`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=w``;return this.initials?t=w`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=w`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,w`
      <div
        part="base"
        class=${O({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?A:t}
      </div>
    `}};Lt.styles=[$,Ov];Lt.dependencies={"sl-icon":eA};l([L()],Lt.prototype,"hasError",2);l([u()],Lt.prototype,"image",2);l([u()],Lt.prototype,"label",2);l([u()],Lt.prototype,"initials",2);l([u()],Lt.prototype,"loading",2);l([u({reflect:!0})],Lt.prototype,"shape",2);l([x("image")],Lt.prototype,"handleImageChange",1);Lt.define("sl-avatar");var $v=K`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,fr=class extends D{constructor(){super(...arguments),this.localize=new W(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const A=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");A.forEach((t,e)=>{const r=t.querySelector('[slot="separator"]');r===null?t.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),e===A.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),w`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};fr.styles=[$,$v];fr.dependencies={"sl-icon":eA};l([H("slot")],fr.prototype,"defaultSlot",2);l([H('slot[name="separator"]')],fr.prototype,"separatorSlot",2);l([u()],fr.prototype,"label",2);fr.define("sl-breadcrumb");var Mv=K`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,vt=class extends D{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const A=document.createElement("canvas"),{width:t,height:e}=this.animatedImage;A.width=t,A.height=e,A.getContext("2d").drawImage(this.animatedImage,0,0,t,e),this.frozenFrame=A.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return w`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?w`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};vt.styles=[$,Mv];vt.dependencies={"sl-icon":eA};l([H(".animated-image__animated")],vt.prototype,"animatedImage",2);l([L()],vt.prototype,"frozenFrame",2);l([L()],vt.prototype,"isLoaded",2);l([u()],vt.prototype,"src",2);l([u()],vt.prototype,"alt",2);l([u({type:Boolean,reflect:!0})],vt.prototype,"play",2);l([x("play",{waitUntilFirstUpdate:!0})],vt.prototype,"handlePlayChange",1);l([x("src")],vt.prototype,"handleSrcChange",1);vt.define("sl-animated-image");var Rv=K`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Bs=class extends D{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return w`
      <span
        part="base"
        class=${O({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Bs.styles=[$,Rv];l([u({reflect:!0})],Bs.prototype,"variant",2);l([u({type:Boolean,reflect:!0})],Bs.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],Bs.prototype,"pulse",2);Bs.define("sl-badge");var Vv=K`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,At=class Be extends D{constructor(){super(...arguments),this.hasSlotController=new VA(this,"icon","suffix"),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",r="0";this.countdownAnimation=t.animate([{width:e},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await bA(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=aA(this,"alert.show",{dir:this.localize.dir()});await cA(this.base,t,e),this.emit("sl-after-show")}else{Ia(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await bA(this.base);const{keyframes:t,options:e}=aA(this,"alert.hide",{dir:this.localize.dir()});await cA(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,RA(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,RA(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Be.toastStack.parentElement===null&&document.body.append(Be.toastStack),Be.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Be.toastStack.removeChild(this),t(),Be.toastStack.querySelector("sl-alert")===null&&Be.toastStack.remove()},{once:!0})})}render(){return w`
      <div
        part="base"
        class=${O({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?w`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?w`
              <div
                class=${O({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};At.styles=[$,Vv];At.dependencies={"sl-icon-button":CA};l([H('[part~="base"]')],At.prototype,"base",2);l([H(".alert__countdown-elapsed")],At.prototype,"countdownElement",2);l([u({type:Boolean,reflect:!0})],At.prototype,"open",2);l([u({type:Boolean,reflect:!0})],At.prototype,"closable",2);l([u({reflect:!0})],At.prototype,"variant",2);l([u({type:Number})],At.prototype,"duration",2);l([u({type:String,reflect:!0})],At.prototype,"countdown",2);l([L()],At.prototype,"remainingTime",2);l([x("open",{waitUntilFirstUpdate:!0})],At.prototype,"handleOpenChange",1);l([x("duration")],At.prototype,"handleDurationChange",1);var zv=At;j("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});j("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});zv.define("sl-alert");const Pv=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Nv=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Gv=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Xv=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Wv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Jv=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Zv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jv=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Aw=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],tw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],ew=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],rw=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],sw=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],iw=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],ow=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],aw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],nw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],lw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],cw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],dw=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],hw=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],uw=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],pw=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],fw=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],gw=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],mw=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Bw=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],bw=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],vw=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],ww=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],yw=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cw=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qw=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Uw=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Fw=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xw=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_w=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Ew=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Hw=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Iw=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kw=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Sw=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Lw=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Tw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Dw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Kw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Ow=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],$w=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Mw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Rw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Vw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],zw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Pw=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Nw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Gw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Xw=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Ww=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Yw=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Jw=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Zw=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],qw=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],jw=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ay=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],ty=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],ey=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ry=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],sy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],iy=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],oy=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ay=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],ny=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ly=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],cy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],dy=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],hy=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],uy=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],py=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],fy=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],gy=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],my=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],By=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],by=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],vy=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],wy=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],yy=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cy=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Qy=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Uy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Fy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xy=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],_y=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Ey=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],Hy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Iy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ky=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Sy=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Pd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ly=Object.freeze(Object.defineProperty({__proto__:null,backInDown:rw,backInLeft:sw,backInRight:iw,backInUp:ow,backOutDown:aw,backOutLeft:nw,backOutRight:lw,backOutUp:cw,bounce:Pv,bounceIn:dw,bounceInDown:hw,bounceInLeft:uw,bounceInRight:pw,bounceInUp:fw,bounceOut:gw,bounceOutDown:mw,bounceOutLeft:Bw,bounceOutRight:bw,bounceOutUp:vw,easings:Pd,fadeIn:ww,fadeInBottomLeft:yw,fadeInBottomRight:Cw,fadeInDown:Qw,fadeInDownBig:Uw,fadeInLeft:Fw,fadeInLeftBig:xw,fadeInRight:_w,fadeInRightBig:Ew,fadeInTopLeft:Hw,fadeInTopRight:Iw,fadeInUp:kw,fadeInUpBig:Sw,fadeOut:Lw,fadeOutBottomLeft:Tw,fadeOutBottomRight:Dw,fadeOutDown:Kw,fadeOutDownBig:Ow,fadeOutLeft:$w,fadeOutLeftBig:Mw,fadeOutRight:Rw,fadeOutRightBig:Vw,fadeOutTopLeft:zw,fadeOutTopRight:Pw,fadeOutUp:Nw,fadeOutUpBig:Gw,flash:Nv,flip:Xw,flipInX:Ww,flipInY:Yw,flipOutX:Jw,flipOutY:Zw,headShake:Gv,heartBeat:Xv,hinge:vy,jackInTheBox:wy,jello:Wv,lightSpeedInLeft:qw,lightSpeedInRight:jw,lightSpeedOutLeft:Ay,lightSpeedOutRight:ty,pulse:Yv,rollIn:yy,rollOut:Cy,rotateIn:ey,rotateInDownLeft:ry,rotateInDownRight:sy,rotateInUpLeft:iy,rotateInUpRight:oy,rotateOut:ay,rotateOutDownLeft:ny,rotateOutDownRight:ly,rotateOutUpLeft:cy,rotateOutUpRight:dy,rubberBand:Jv,shake:Zv,shakeX:qv,shakeY:jv,slideInDown:hy,slideInLeft:uy,slideInRight:py,slideInUp:fy,slideOutDown:gy,slideOutLeft:my,slideOutRight:By,slideOutUp:by,swing:Aw,tada:tw,wobble:ew,zoomIn:Qy,zoomInDown:Uy,zoomInLeft:Fy,zoomInRight:xy,zoomInUp:_y,zoomOut:Ey,zoomOutDown:Hy,zoomOutLeft:Iy,zoomOutRight:ky,zoomOutUp:Sy},Symbol.toStringTag,{value:"Module"}));var Ty=K`
  :host {
    display: contents;
  }
`,EA=class extends D{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var A,t;return(t=(A=this.animation)==null?void 0:A.currentTime)!=null?t:0}set currentTime(A){this.animation&&(this.animation.currentTime=A)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var A,t;const e=(A=Pd[this.easing])!=null?A:this.easing,r=(t=this.keyframes)!=null?t:Ly[this.name],i=(await this.defaultSlot).assignedElements()[0];return!i||!r?!1:(this.destroyAnimation(),this.animation=i.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var A;(A=this.animation)==null||A.cancel()}finish(){var A;(A=this.animation)==null||A.finish()}render(){return w` <slot @slotchange=${this.handleSlotChange}></slot> `}};EA.styles=[$,Ty];l([Kh("slot")],EA.prototype,"defaultSlot",2);l([u()],EA.prototype,"name",2);l([u({type:Boolean,reflect:!0})],EA.prototype,"play",2);l([u({type:Number})],EA.prototype,"delay",2);l([u()],EA.prototype,"direction",2);l([u({type:Number})],EA.prototype,"duration",2);l([u()],EA.prototype,"easing",2);l([u({attribute:"end-delay",type:Number})],EA.prototype,"endDelay",2);l([u()],EA.prototype,"fill",2);l([u({type:Number})],EA.prototype,"iterations",2);l([u({attribute:"iteration-start",type:Number})],EA.prototype,"iterationStart",2);l([u({attribute:!1})],EA.prototype,"keyframes",2);l([u({attribute:"playback-rate",type:Number})],EA.prototype,"playbackRate",2);l([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],EA.prototype,"handleAnimationChange",1);l([x("play")],EA.prototype,"handlePlayChange",1);l([x("playbackRate")],EA.prototype,"handlePlaybackRateChange",1);EA.define("sl-animation");var Dy=Object.getOwnPropertyDescriptor,Nd=A=>{throw TypeError(A)},Ky=(A,t,e,r)=>{for(var s=r>1?void 0:r?Dy(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=o(s)||s);return s},Oy=(A,t,e)=>t.has(A)||Nd("Cannot "+e),$y=(A,t,e)=>t.has(A)?Nd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),Ho=(A,t,e)=>(Oy(A,t,"access private method"),e),Dr,Gd,Ba;let ba=class extends Ut{constructor(){super(...arguments),$y(this,Dr)}render(){return w`
            <form @submit=${Ho(this,Dr,Gd)}>
                <label>
                    Vardas
                    <sl-input name="name"></sl-input>
                </label>
                <label>
                    Pirma diena dirbant ryte
                    <sl-input type="date" name="morning_date" @sl-change=${Ho(this,Dr,Ba)}></sl-input>
                </label>
                <label>
                    Pirma diena dirbant vakare
                    <sl-input type="date" name="evening_date" @sl-change=${Ho(this,Dr,Ba)}></sl-input>
                </label>
                <sl-button type="submit" name="add">Pridėti</sl-button>
            </form>
            `}};Dr=new WeakSet;Gd=function(A){if(A.preventDefault(),A.submitter instanceof HTMLButtonElement&&A.submitter.name==="add"&&A.target instanceof HTMLFormElement){const t=My(A.target);t&&this.dispatchEvent(new CustomEvent("add",{detail:t})),A.target.reset()}};Ba=function(A){if(A.target instanceof pn){const t=new Date(A.target.value);t.setDate(t.getDate()+6);const e=t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,"0")+"-"+t.getDate().toString().padStart(2,"0"),r=A.target.name==="morning_date"?"evening_date":"morning_date",s=this.renderRoot.querySelector(`sl-input[name="${r}"]`);s instanceof pn&&!s.value&&(s.value=e)}};ba.styles=K`
        form {
            display: flex;
            gap: 0.5rem;
            flex-direction: column;
        }

        form label {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
        }`;ba=Ky([as("user-form")],ba);function My(A){var n,a,c;const t=new FormData(A),e=(n=t.get("name"))==null?void 0:n.toString(),r=(a=t.get("morning_date"))==null?void 0:a.toString(),s=(c=t.get("evening_date"))==null?void 0:c.toString(),i=r?new Date(r):void 0,o=s?new Date(s):void 0;return e&&fn(i)&&fn(o)?{name:e,morning_start_date:gn(i),evening_start_date:gn(o)}:null}var Ry=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,Xd=A=>{throw TypeError(A)},bs=(A,t,e,r)=>{for(var s=r>1?void 0:r?Vy(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Ry(t,e,s),s},zy=(A,t,e)=>t.has(A)||Xd("Cannot "+e),Py=(A,t,e)=>t.has(A)?Xd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),Nt=(A,t,e)=>(zy(A,t,"access private method"),e),Ct,Wd,Yd,Jd,Zd,qd,jd,va;const Ny=A=>new CustomEvent("user-add",{detail:A}),Gy=A=>new CustomEvent("user-delete",{detail:A}),Xy=A=>new CustomEvent("user-select",{detail:A});let ke=class extends Ut{constructor(){super(...arguments),Py(this,Ct),this.users=[],this.addActive=!1,this.confirmDeletionUser=void 0}renderUser(A){const t=A.name;return w`
            <sl-radio value=${t}>
                ${t}
                <sl-button @click=${Nt(this,Ct,qd)} name="delete" data-name=${t}>
                    Pašalinti
                    <sl-icon slot="suffix" name="trash"></sl-icon>
                </sl-button>
            </sl-radio>`}render(){var e;const A=this.users,t=DA({display:"flex","flex-direction":"column",gap:"1rem"});return w`
            <div style=${t}>
                ${A.length>0?w`
                    <sl-radio-group
                        label="Išsaugoti žmonės:"
                        value=${this.selectedUser}
                        @sl-change=${Nt(this,Ct,Zd)}>
                        ${A.map(r=>this.renderUser(r))}
                    </sl-radio-group>
                    `:q}
                <sl-button @click=${Nt(this,Ct,Wd)}>Pridėti naują žmogų</sl-button>
                <sl-dialog ?open=${this.addActive} @sl-hide=${Nt(this,Ct,Jd)}>
                    <user-form @add=${Nt(this,Ct,Yd)}/>
                </sl-dialog>
                <sl-dialog ?open=${!!this.confirmDeletionUser} @sl-hide=${Nt(this,Ct,va)}>
                    Ar tikrai norite ištrinti "${(e=this.confirmDeletionUser)==null?void 0:e.name}"
                    <sl-button slot="footer" @click=${Nt(this,Ct,va)}>Ne</sl-button>
                    <sl-button slot="footer" variant="primary" @click=${Nt(this,Ct,jd)}>Taip</sl-button>
                </sl-dialog>
            </div>`}};Ct=new WeakSet;Wd=function(){this.addActive=!this.addActive};Yd=function(A){this.dispatchEvent(Ny(A.detail)),this.addActive=!1};Jd=function(){this.addActive=!1};Zd=function(A){if(A.target instanceof Zb){const t=A.target.value,e=this.users.find(r=>r.name===t);e&&this.dispatchEvent(Xy(e))}};qd=function(A){if(A.stopPropagation(),A.target instanceof tu){const t=A.target.getAttribute("data-name"),e=this.users.find(r=>r.name===t);e&&(this.confirmDeletionUser=e)}};jd=function(){this.confirmDeletionUser&&(this.dispatchEvent(Gy(this.confirmDeletionUser)),this.confirmDeletionUser=void 0)};va=function(){this.confirmDeletionUser=void 0};ke.styles=K`
        sl-dialog {
            --header-spacing: var(--sl-spacing-small);
            --body-spacing: var(--sl-spacing-small);
            --footer-spacing: var(--sl-spacing-small);
        }

        #users > div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        sl-radio::part(base) {
            display: flex;
            align-items: center;
            max-width: calc(2rem + 200px + 100px);
        }
 
        sl-radio::part(label) {
            flex-grow: 1;
            display: grid;
            grid-template-columns: auto 100px;
            align-items: center;
        }
    `;bs([u({attribute:!1})],ke.prototype,"users",2);bs([u()],ke.prototype,"selectedUser",2);bs([L()],ke.prototype,"addActive",2);bs([L()],ke.prototype,"confirmDeletionUser",2);ke=bs([as("user-selector")],ke);var Wy=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,Ah=A=>{throw TypeError(A)},th=(A,t,e,r)=>{for(var s=r>1?void 0:r?Yy(t,e):t,i=A.length-1,o;i>=0;i--)(o=A[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Wy(t,e,s),s},Jy=(A,t,e)=>t.has(A)||Ah("Cannot "+e),Zy=(A,t,e)=>t.has(A)?Ah("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(A):t.set(A,e),qy=(A,t,e)=>(Jy(A,t,"access private method"),e),wa,eh;const Io=new Date().getFullYear(),jy=[Io-1,Io,Io+1];let ya=class extends Ut{constructor(){super(...arguments),Zy(this,wa),this.years=""}createRenderRoot(){return this}render(){return w`
            <div style="gap: 1rem;display: flex; padding: 1rem 0;">
                ${jy.map(A=>w`
                    <sl-checkbox ?checked=${this.years.includes(A.toString())} @sl-change=${qy(this,wa,eh)}>
                        ${A}
                    </sl-checkbox>`)}
            </div>
        `}};wa=new WeakSet;eh=function(A){const t=A.target,e=parseInt(t.innerText),r=this.years.split(",").map(s=>parseInt(s)).filter(s=>!isNaN(s));isNaN(e)||(t.checked?(r.push(e),r.sort()):r.splice(r.indexOf(e),1),this.dispatchEvent(new CustomEvent("change",{detail:r})))};th([u({attribute:!0})],ya.prototype,"years",2);ya=th([as("year-selector")],ya);Lo("./shoelace/");
