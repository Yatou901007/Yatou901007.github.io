/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,e,s;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,h="?"+r,l=`<${h}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,b=/"/g,x=/^(?:script|style|textarea)$/i,y=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),w=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),$=new WeakMap,k=a.createTreeWalker(a,129,null,!1),C=(t,i)=>{const e=t.length-1,s=[];let n,h=2===i?"<svg>":"",a=p;for(let i=0;i<e;i++){const e=t[i];let o,d,c=-1,u=0;for(;u<e.length&&(a.lastIndex=u,d=a.exec(e),null!==d);)u=a.lastIndex,a===p?"!--"===d[1]?a=v:void 0!==d[1]?a=f:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=g):void 0!==d[3]&&(a=g):a===g?">"===d[0]?(a=null!=n?n:p,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,o=d[1],a=void 0===d[3]?g:'"'===d[3]?b:m):a===b||a===m?a=g:a===v||a===f?a=p:(a=g,n=void 0);const y=a===g&&t[i+1].startsWith("/>")?" ":"";h+=a===p?e+l:c>=0?(s.push(o),e.slice(0,c)+"$lit$"+e.slice(c)+r+y):e+r+(-2===c?(s.push(void 0),i):y)}const d=h+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==o?o.createHTML(d):d,s]};class z{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,l=0;const a=t.length-1,c=this.parts,[u,p]=C(t,i);if(this.el=z.createElement(u,e),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=k.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const e=p[l++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(e);c.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?O:"?"===i[1]?j:"@"===i[1]?N:M})}else c.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(x.test(s.tagName)){const t=s.textContent.split(r),i=t.length-1;if(i>0){s.textContent=n?n.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],d()),k.nextNode(),c.push({type:2,index:++o});s.append(t[i],d())}}}else if(8===s.nodeType)if(s.data===h)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(r,t+1));)c.push({type:7,index:o}),t+=r.length-1}o++}}static createElement(t,i){const e=a.createElement("template");return e.innerHTML=t,e}}function E(t,i,e=t,s){var n,o,r,h;if(i===w)return i;let l=void 0!==s?null===(n=e.Σi)||void 0===n?void 0:n[s]:e.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===a?l=void 0:(l=new a(t),l.T(t,e,s)),void 0!==s?(null!==(r=(h=e).Σi)&&void 0!==r?r:h.Σi=[])[s]=l:e.Σo=l),void 0!==l&&(i=E(t,l.S(t,i.values),l,s)),i}class A{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:s}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(e,!0);k.currentNode=n;let o=k.nextNode(),r=0,h=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new T(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new U(o,this,t)),this.l.push(i),l=s[++h]}r!==(null==l?void 0:l.index)&&(o=k.nextNode(),r++)}return n}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class T{constructor(t,i,e,s){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=s}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=E(this,t,i),c(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(e);else{const t=new A(n,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new z(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let e,s=0;for(const n of t)s===i.length?i.push(e=new T(this.k(d()),this.k(d()),this,this.options)):e=i[s],e.I(n),s++;s<i.length&&(this.R(e&&e.B.nextSibling,s),i.length=s)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class M{constructor(t,i,e,s,n){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(S),this.strings=e):this.H=S}get tagName(){return this.element.tagName}I(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=E(this,t,i,0),o=!c(t)||t!==this.H&&t!==w,o&&(this.H=t);else{const s=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=E(this,s[e+r],i,r),h===w&&(h=this.H[r]),o||(o=!c(h)||h!==this.H[r]),h===S?t=S:t!==S&&(t+=(null!=h?h:"")+n[r+1]),this.H[r]=h}o&&!s&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends M{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class j extends M{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class N extends M{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=E(this,t,i,0))&&void 0!==e?e:S)===w)return;const s=this.H,n=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==S&&(s===S||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class U{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){E(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,z,T),(null!==(e=(s=globalThis).litHtmlVersions)&&void 0!==e?e:s.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol();class P{constructor(t,i){if(i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return R&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const B=new Map,D=(t,...i)=>{const e=i.reduce(((i,e,s)=>i+(t=>{if(t instanceof P)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[s+1]),t[0]);let s=B.get(e);return void 0===s&&B.set(e,s=new P(e,_)),s},I=R?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new P(t+"",_))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var L,J,W,F;const q={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},H=(t,i)=>i!==t&&(i==i||t==t),Z={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:H};class K extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this.Πp(e,i);void 0!==s&&(this.Πm.set(s,e),t.push(s))})),t}static createProperty(t,i=Z){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(I(t))}else void 0!==t&&i.push(I(t));return i}static Πp(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{R?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const e=document.createElement("style");e.textContent=i.cssText,t.appendChild(e)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,e){this.K(t,e)}Πj(t,i,e=Z){var s,n;const o=this.constructor.Πp(t,e);if(void 0!==o&&!0===e.reflect){const r=(null!==(n=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:q.toAttribute)(i,e.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,i){var e,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),h=t.converter,l=null!==(n=null!==(s=null===(e=h)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof h?h:null)&&void 0!==n?n:q.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||H)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===e.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const e=this.L;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(e)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,G,Q,X,Y,tt;K.finalized=!0,K.shadowRootOptions={mode:"open"},null===(J=(L=globalThis).reactiveElementPlatformSupport)||void 0===J||J.call(L,{ReactiveElement:K}),(null!==(W=(F=globalThis).reactiveElementVersions)&&void 0!==W?W:F.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(V=(tt=globalThis).litElementVersions)&&void 0!==V?V:tt.litElementVersions=[]).push("3.0.0-rc.1");class it extends K{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();super.update(t),this.Φt=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new T(i.insertBefore(d(),t),t,void 0,e)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return w}}it.finalized=!0,it._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:it}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:it});const et=D`
    :host {
        width: 100%;
    }
    form, form * {
        box-sizing: border-box;
    }
    form {
        width: 100%;
        height: 25px;
        font-size: 16px;
        display: flex;
    }
    @media(max-width: 650px) {
        form {
            height: 30px;
        }  
    }
    input {
        width: 75%;
        height: 100%;
        border: 1px solid #ccc;
        border-right: none;
        box-shadow: none;
        outline: none;
        padding: 0 5px;
        text-transform: capitalize;
        fon-size: 14px;
        -webkit-border-radius: 0;
    }
    @media(max-width: 650px) {
        input {
            font-size: 17px;
        }  
    }
    button {
        width: 25%;
        height: 100%;
        background: #0d6efd;
        color: #fff;
        border: 1px solid #0d6efd;
        box-shadow: none;
        border-radius: 0 3px 3px 0;
        font-size: 14px;
    }
    @media(max-width: 650px) {
        button {
            font-size: 16px;
        }  
    }
`;customElements.define("form-add",class extends it{static get properties(){return{value:{type:String}}}static get styles(){return[et]}constructor(){super(),this.value=""}handleChange({target:t}){this.value=t.value,this.dispatchEvent(new CustomEvent("form-change",{composed:!0,bubbles:!0}))}handleSubmit(t){t.preventDefault(),this.value.trim()&&(this.dispatchEvent(new CustomEvent("form-add",{composed:!0,bubbles:!0,detail:{id:(new Date).getTime(),description:this.value,selected:!1}})),this.value="")}render(){return y`
        <form @submit=${this.handleSubmit}>
            <input @input=${this.handleChange} id="input" type="text" .value=${this.value}>
            <button type="submit">Add+</button>
        </form>`}});const st=D`
    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        align-items: center; 
        background: rgb(249, 247, 247);
        cursor:pointer;
    }
    p {
        text-indent: 20px;
        margin: 0px;
        text-align: left;
        flex: 2 1 auto;
        padding-left: 5px;
        text-transform: capitalize;
    }
    @media(max-width: 650px) {
        p {
            font-size: 18px;
        }
    }
    .check {
        position: absolute;
        margin-left: 6px;
        margin-top: -5px;
        width: 10px;
        height: 6px;
        border-bottom: 2px solid green;
    }
    .check:after {
        content: "";
        display: block;
        height: 2px;
        background: green;
        transform: rotate(90deg);
        position: relative;
        top: 6px;
    }
    @media(max-width: 650px) {
        .check {
            margin-top: -3px;
        }
    }
    li.selected p {
        text-decoration: line-through;
    }
    li.selected .check {      
        margin-top: -4px;
        border-bottom: solid 2px green;
        border-left: solid 2px green;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);      
    }
    li.selected .check:after {
        display: none;
    }
    button {
        height: 25px;
        font-size: 14px;
        background: rgb(220, 53, 69);
        color: rgb(255, 255, 255);
        border-radius: 3px;
        box-shadow: none;
        border: 1px solid rgb(220, 53, 69);
        outline: none;
    }
    @media(max-width: 650px) {
        button {
            height: 28px;
            font-size: 15px;
        }
    }
`;customElements.define("item-add",class extends it{static get properties(){return{todo:{type:Object}}}static get styles(){return[st]}constructor(){super(),this.todo={}}handleToggle(t){this.dispatchEvent(new CustomEvent("toggle-item",{composed:!0,bubbles:!0,detail:t}))}handleDelete(t){this.dispatchEvent(new CustomEvent("delete-item",{composed:!0,bubbles:!0,detail:t}))}render(){const{id:t,description:i,selected:e}=this.todo;return y`
        <li 
            @click=${()=>this.handleToggle(t)}
            id=${t} 
            class=${e?"selected":""}
        >
            <span class="check"></span>
            <p>
            ${i}
            </p>
            <button @click=${()=>this.handleDelete(t)}>delete</button>
        </li>`}});const nt=D`
    :host {
        width: 100%;
    }
    ul {
        padding: 0;
    }`;customElements.define("list-item",class extends it{static get properties(){return{data:{type:Array}}}static get styles(){return[nt]}constructor(){super(),this.data=[]}render(){return y`<ul>
        ${this.data.map((t=>y`<item-add .todo=${t}></item-add>`))}
        </ul>`}});const ot=D`
    button {
        background: #fff;
        color: #000;
        border-radius: 3px;
        border: none;
        box-shadow: 0 0 3px #ccc;
        padding: 4px 9px;
        margin-top: 10px;
        outline: none;
        width:90px;
        text-transform: capitalize;
        font-size: 14px;
    }

    @media(max-width: 650px) {
        button {
            font-size: 15px;
            width:93px;
        }
    }

    button:disabled {
        background: #ffc107;
        color: #000;
    }
`;customElements.define("button-filter",class extends it{static get properties(){return{text:{type:String},btnActive:{type:String},disabled:{type:Boolean}}}static get styles(){return[ot]}render(){return this.disabled=this.btnActive===this.text,y`
        <button ?disabled=${this.disabled}>${this.text}</button>`}});const rt=D`
    :host {
        width: 100%;
    }
    .filter-btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 10px;
    }
`;customElements.define("filter-buttons",class extends it{static get properties(){return{type:{type:Object},btnActive:{type:String}}}static get styles(){return[rt]}constructor(){super(),this.type={completed:"completed",pending:"pending",all:"all"}}handleFilters(t){return console.log(t),this.dispatchEvent(new CustomEvent("filter-btns",{composed:!0,bubbles:!0,detail:t}))}printButtons(){let t=[];for(let i in this.type)t.push(y`<button-filter
                .btnActive=${this.btnActive}
                @click=${()=>this.handleFilters(this.type[i])}
                text=${this.type[i]}></button-filter>`);return y`${t}`}render(){return y`
        <div class="filter-btns">
           ${this.printButtons()}
        </div>`}});const ht=D`
    p {
        position: absolute;
        top: -20px;
        margin: 0;
        width: 100%;
        text-align: center;
        left: 0;
        font-size: 14px;
        background: #fff;
        color: #333;
    }
    p.red {
        color: red;
    }
    p.green {
        color: green;
    }
    @media(max-width: 550px) {
        p {
            font-size: 16px;
        }
    }
`;customElements.define("message-paragraph",class extends it{static get properties(){return{text:{type:String},color:{type:String}}}static get styles(){return[ht]}constructor(){super(),this.text="",this.color=""}render(){return y`<p class=${this.color?this.color:""}>${this.text}</p>`}});class lt{constructor(){}getStorage(t){return JSON.parse(localStorage.getItem(t))}updateStorage(t,i){localStorage.setItem(t,JSON.stringify(i))}}var at=D`
    main {
        width: 300px;
        margin: 30px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }    
    
    @media(max-width: 768px) {
        main {
            width:85%;
            max-width: 400px;
        }
    }

    h1 {
        font-size: 20px;
        text-align: center;
        width: 100%;
        padding: 3px;
        box-sizing: border-box;
    }
    `;customElements.define("todo-list",class extends it{static get properties(){return{title:{type:String},data:{type:Array},exist:{type:Boolean},filter:{type:String}}}static get styles(){return at}constructor(){super(),this.handleStorage=new lt,this.data=this.handleStorage.getStorage("items")||[],this.exist=!1,this.filter="all"}connectedCallback(){super.connectedCallback(),this.addEventListener("form-change",this.handleChange),this.addEventListener("form-add",this.handleAdd),this.addEventListener("delete-item",this.handeleDelete),this.addEventListener("toggle-item",this.handleToggle),this.addEventListener("filter-btns",this.handleFilters)}handleChange(){this.exist=!1}handleAdd({detail:t}){this.data.some((i=>i.description.toLowerCase()===t.description.toLowerCase()))?this.exist=!0:(this.data=[...this.data,t],this.handleStorage.updateStorage("items",this.data))}handeleDelete({detail:t}){this.data=this.data.filter((i=>i.id!==t)),this.handleStorage.updateStorage("items",this.data)}handleToggle({detail:t}){this.data=this.data.map((i=>i.id===t?{...i,selected:!i.selected}:i)),this.handleStorage.updateStorage("items",this.data),this.handleChange()}handleMessageComplete(){const t=this.data.length>0,i=this.data.filter((t=>!0===t.selected));if(t&&this.data.length===i.length)return y`<message-paragraph text="List completed." color="green"></message-paragraph>`}handleMessageExist(){if(this.exist)return y`<message-paragraph text="This item allready exist." color="red"></message-paragraph>`}handleFilters({detail:t}){this.filter=t}applyFilters(t){switch(t){case"completed":return this.data.filter((t=>t.selected));case"pending":return this.data.filter((t=>!t.selected));default:return this.data}}render(){return y`<main>
        <h1>${this.title?this.title:"To-do-list demo"}</h1>
        ${this.handleMessageComplete()}
        ${this.handleMessageExist()}
        <filter-buttons .btnActive=${this.filter}></filter-buttons>
        <form-add></form-add>
        <list-item .data=${this.applyFilters(this.filter)}></list-item>
        </main>`}});
