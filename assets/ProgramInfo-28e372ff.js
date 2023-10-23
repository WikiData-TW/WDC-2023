import{d as ce,p as lt,r as dt,q as ct,o as f,c as k,a as p,u as g,t as A,f as G,s as ke,F as D,n as ut,v as L,x as ht,y as S,z as P,A as I,i as $,B as pt,g as be,h as te,w as ve,S as Te,k as mt,_ as We}from"./app-65aad429.js";import{e as F,r as O,i as ue,f as he,j as gt,k as j,l as J,m as ft,n as H,S as z,L as pe,M as U,o as Ke,t as N,p as wt,q as me,v as Qe,g as Y,w as Je,x as _e,y as ne,b as yt,a as kt,s as bt,h as vt,d as Tt,_ as Wt}from"./MainNavbar-160773fd.js";import{_ as _t}from"./MainFooter-20e27b3b.js";function X(e){return e}var St=F(O,"WeakMap");const re=St;var Se=Object.create,Dt=function(){function e(){}return function(t){if(!ue(t))return{};if(Se)return Se(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const At=Dt;function Et(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var Pt=800,It=16,Ct=Date.now;function xt(e){var t=0,n=0;return function(){var a=Ct(),i=It-(a-n);if(n=a,i>0){if(++t>=Pt)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Lt(e){return function(){return e}}var Rt=function(){try{var e=F(Object,"defineProperty");return e({},"",{}),e}catch{}}();const K=Rt;var Ht=K?function(e,t){return K(e,"toString",{configurable:!0,enumerable:!1,value:Lt(t),writable:!0})}:X;const Mt=Ht;var Ot=xt(Mt);const Nt=Ot;var $t=9007199254740991,Bt=/^(?:0|[1-9]\d*)$/;function ge(e,t){var n=typeof e;return t=t??$t,!!t&&(n=="number"||n!="symbol"&&Bt.test(e))&&e>-1&&e%1==0&&e<t}function Ye(e,t,n){t=="__proto__"&&K?K(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var jt=Object.prototype,Ft=jt.hasOwnProperty;function Gt(e,t,n){var a=e[t];(!(Ft.call(e,t)&&he(a,n))||n===void 0&&!(t in e))&&Ye(e,t,n)}function Zt(e,t,n,a){var i=!n;n||(n={});for(var r=-1,o=t.length;++r<o;){var s=t[r],c=a?a(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?Ye(n,s,c):Gt(n,s,c)}return n}var De=Math.max;function qt(e,t,n){return t=De(t===void 0?e.length-1:t,0),function(){for(var a=arguments,i=-1,r=De(a.length-t,0),o=Array(r);++i<r;)o[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(o),Et(e,this,s)}}function zt(e,t){return Nt(qt(e,t,X),e+"")}var Ut=9007199254740991;function fe(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ut}function V(e){return e!=null&&fe(e.length)&&!gt(e)}function Ae(e,t,n){if(!ue(n))return!1;var a=typeof t;return(a=="number"?V(n)&&ge(t,n.length):a=="string"&&t in n)?he(n[t],e):!1}var Kt=Object.prototype;function Qt(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Kt;return e===n}function Jt(e,t){for(var n=-1,a=Array(e);++n<e;)a[n]=t(n);return a}var Yt="[object Arguments]";function Ee(e){return j(e)&&J(e)==Yt}var Xe=Object.prototype,Xt=Xe.hasOwnProperty,Vt=Xe.propertyIsEnumerable,en=Ee(function(){return arguments}())?Ee:function(e){return j(e)&&Xt.call(e,"callee")&&!Vt.call(e,"callee")};const we=en;function tn(){return!1}var Ve=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pe=Ve&&typeof module=="object"&&module&&!module.nodeType&&module,nn=Pe&&Pe.exports===Ve,Ie=nn?O.Buffer:void 0,an=Ie?Ie.isBuffer:void 0,rn=an||tn;const oe=rn;var on="[object Arguments]",sn="[object Array]",ln="[object Boolean]",dn="[object Date]",cn="[object Error]",un="[object Function]",hn="[object Map]",pn="[object Number]",mn="[object Object]",gn="[object RegExp]",fn="[object Set]",wn="[object String]",yn="[object WeakMap]",kn="[object ArrayBuffer]",bn="[object DataView]",vn="[object Float32Array]",Tn="[object Float64Array]",Wn="[object Int8Array]",_n="[object Int16Array]",Sn="[object Int32Array]",Dn="[object Uint8Array]",An="[object Uint8ClampedArray]",En="[object Uint16Array]",Pn="[object Uint32Array]",b={};b[vn]=b[Tn]=b[Wn]=b[_n]=b[Sn]=b[Dn]=b[An]=b[En]=b[Pn]=!0;b[on]=b[sn]=b[kn]=b[ln]=b[bn]=b[dn]=b[cn]=b[un]=b[hn]=b[pn]=b[mn]=b[gn]=b[fn]=b[wn]=b[yn]=!1;function In(e){return j(e)&&fe(e.length)&&!!b[J(e)]}function et(e){return function(t){return e(t)}}var tt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,B=tt&&typeof module=="object"&&module&&!module.nodeType&&module,Cn=B&&B.exports===tt,ae=Cn&&ft.process,xn=function(){try{var e=B&&B.require&&B.require("util").types;return e||ae&&ae.binding&&ae.binding("util")}catch{}}();const Ce=xn;var xe=Ce&&Ce.isTypedArray,Ln=xe?et(xe):In;const nt=Ln;var Rn=Object.prototype,Hn=Rn.hasOwnProperty;function Mn(e,t){var n=H(e),a=!n&&we(e),i=!n&&!a&&oe(e),r=!n&&!a&&!i&&nt(e),o=n||a||i||r,s=o?Jt(e.length,String):[],c=s.length;for(var h in e)(t||Hn.call(e,h))&&!(o&&(h=="length"||i&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||ge(h,c)))&&s.push(h);return s}function On(e,t){return function(n){return e(t(n))}}var Nn=On(Object.keys,Object);const $n=Nn;var Bn=Object.prototype,jn=Bn.hasOwnProperty;function Fn(e){if(!Qt(e))return $n(e);var t=[];for(var n in Object(e))jn.call(e,n)&&n!="constructor"&&t.push(n);return t}function ee(e){return V(e)?Mn(e):Fn(e)}function at(e,t){for(var n=-1,a=t.length,i=e.length;++n<a;)e[i+n]=t[n];return e}var Le=z?z.isConcatSpreadable:void 0;function Gn(e){return H(e)||we(e)||!!(Le&&e&&e[Le])}function it(e,t,n,a,i){var r=-1,o=e.length;for(n||(n=Gn),i||(i=[]);++r<o;){var s=e[r];t>0&&n(s)?t>1?it(s,t-1,n,a,i):at(i,s):a||(i[i.length]=s)}return i}function Zn(){this.__data__=new pe,this.size=0}function qn(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function zn(e){return this.__data__.get(e)}function Un(e){return this.__data__.has(e)}var Kn=200;function Qn(e,t){var n=this.__data__;if(n instanceof pe){var a=n.__data__;if(!U||a.length<Kn-1)return a.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ke(a)}return n.set(e,t),this.size=n.size,this}function R(e){var t=this.__data__=new pe(e);this.size=t.size}R.prototype.clear=Zn;R.prototype.delete=qn;R.prototype.get=zn;R.prototype.has=Un;R.prototype.set=Qn;function Jn(e,t){return e&&Zt(t,ee(t),e)}function Yn(e,t){for(var n=-1,a=e==null?0:e.length,i=0,r=[];++n<a;){var o=e[n];t(o,n,e)&&(r[i++]=o)}return r}function Xn(){return[]}var Vn=Object.prototype,ea=Vn.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,ta=Re?function(e){return e==null?[]:(e=Object(e),Yn(Re(e),function(t){return ea.call(e,t)}))}:Xn;const na=ta;function aa(e,t,n){var a=t(e);return H(e)?a:at(a,n(e))}function He(e){return aa(e,ee,na)}var ia=F(O,"DataView");const se=ia;var ra=F(O,"Promise");const le=ra;var oa=F(O,"Set");const de=oa;var Me="[object Map]",sa="[object Object]",Oe="[object Promise]",Ne="[object Set]",$e="[object WeakMap]",Be="[object DataView]",la=N(se),da=N(U),ca=N(le),ua=N(de),ha=N(re),M=J;(se&&M(new se(new ArrayBuffer(1)))!=Be||U&&M(new U)!=Me||le&&M(le.resolve())!=Oe||de&&M(new de)!=Ne||re&&M(new re)!=$e)&&(M=function(e){var t=J(e),n=t==sa?e.constructor:void 0,a=n?N(n):"";if(a)switch(a){case la:return Be;case da:return Me;case ca:return Oe;case ua:return Ne;case ha:return $e}return t});const je=M;var pa=O.Uint8Array;const Fe=pa;var ma="__lodash_hash_undefined__";function ga(e){return this.__data__.set(e,ma),this}function fa(e){return this.__data__.has(e)}function Q(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ke;++t<n;)this.add(e[t])}Q.prototype.add=Q.prototype.push=ga;Q.prototype.has=fa;function wa(e,t){for(var n=-1,a=e==null?0:e.length;++n<a;)if(t(e[n],n,e))return!0;return!1}function ya(e,t){return e.has(t)}var ka=1,ba=2;function rt(e,t,n,a,i,r){var o=n&ka,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var h=r.get(e),T=r.get(t);if(h&&T)return h==t&&T==e;var W=-1,y=!0,m=n&ba?new Q:void 0;for(r.set(e,t),r.set(t,e);++W<s;){var w=e[W],v=t[W];if(a)var E=o?a(v,w,W,t,e,r):a(w,v,W,e,t,r);if(E!==void 0){if(E)continue;y=!1;break}if(m){if(!wa(t,function(l,u){if(!ya(m,u)&&(w===l||i(w,l,n,a,r)))return m.push(u)})){y=!1;break}}else if(!(w===v||i(w,v,n,a,r))){y=!1;break}}return r.delete(e),r.delete(t),y}function va(e){var t=-1,n=Array(e.size);return e.forEach(function(a,i){n[++t]=[i,a]}),n}function Ta(e){var t=-1,n=Array(e.size);return e.forEach(function(a){n[++t]=a}),n}var Wa=1,_a=2,Sa="[object Boolean]",Da="[object Date]",Aa="[object Error]",Ea="[object Map]",Pa="[object Number]",Ia="[object RegExp]",Ca="[object Set]",xa="[object String]",La="[object Symbol]",Ra="[object ArrayBuffer]",Ha="[object DataView]",Ge=z?z.prototype:void 0,ie=Ge?Ge.valueOf:void 0;function Ma(e,t,n,a,i,r,o){switch(n){case Ha:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ra:return!(e.byteLength!=t.byteLength||!r(new Fe(e),new Fe(t)));case Sa:case Da:case Pa:return he(+e,+t);case Aa:return e.name==t.name&&e.message==t.message;case Ia:case xa:return e==t+"";case Ea:var s=va;case Ca:var c=a&Wa;if(s||(s=Ta),e.size!=t.size&&!c)return!1;var h=o.get(e);if(h)return h==t;a|=_a,o.set(e,t);var T=rt(s(e),s(t),a,i,r,o);return o.delete(e),T;case La:if(ie)return ie.call(e)==ie.call(t)}return!1}var Oa=1,Na=Object.prototype,$a=Na.hasOwnProperty;function Ba(e,t,n,a,i,r){var o=n&Oa,s=He(e),c=s.length,h=He(t),T=h.length;if(c!=T&&!o)return!1;for(var W=c;W--;){var y=s[W];if(!(o?y in t:$a.call(t,y)))return!1}var m=r.get(e),w=r.get(t);if(m&&w)return m==t&&w==e;var v=!0;r.set(e,t),r.set(t,e);for(var E=o;++W<c;){y=s[W];var l=e[y],u=t[y];if(a)var d=o?a(u,l,y,t,e,r):a(l,u,y,e,t,r);if(!(d===void 0?l===u||i(l,u,n,a,r):d)){v=!1;break}E||(E=y=="constructor")}if(v&&!E){var _=e.constructor,x=t.constructor;_!=x&&"constructor"in e&&"constructor"in t&&!(typeof _=="function"&&_ instanceof _&&typeof x=="function"&&x instanceof x)&&(v=!1)}return r.delete(e),r.delete(t),v}var ja=1,Ze="[object Arguments]",qe="[object Array]",Z="[object Object]",Fa=Object.prototype,ze=Fa.hasOwnProperty;function Ga(e,t,n,a,i,r){var o=H(e),s=H(t),c=o?qe:je(e),h=s?qe:je(t);c=c==Ze?Z:c,h=h==Ze?Z:h;var T=c==Z,W=h==Z,y=c==h;if(y&&oe(e)){if(!oe(t))return!1;o=!0,T=!1}if(y&&!T)return r||(r=new R),o||nt(e)?rt(e,t,n,a,i,r):Ma(e,t,c,n,a,i,r);if(!(n&ja)){var m=T&&ze.call(e,"__wrapped__"),w=W&&ze.call(t,"__wrapped__");if(m||w){var v=m?e.value():e,E=w?t.value():t;return r||(r=new R),i(v,E,n,a,r)}}return y?(r||(r=new R),Ba(e,t,n,a,i,r)):!1}function ye(e,t,n,a,i){return e===t?!0:e==null||t==null||!j(e)&&!j(t)?e!==e&&t!==t:Ga(e,t,n,a,ye,i)}var Za=1,qa=2;function za(e,t,n,a){var i=n.length,r=i,o=!a;if(e==null)return!r;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<r;){s=n[i];var c=s[0],h=e[c],T=s[1];if(o&&s[2]){if(h===void 0&&!(c in e))return!1}else{var W=new R;if(a)var y=a(h,T,c,e,t,W);if(!(y===void 0?ye(T,h,Za|qa,a,W):y))return!1}}return!0}function ot(e){return e===e&&!ue(e)}function Ua(e){for(var t=ee(e),n=t.length;n--;){var a=t[n],i=e[a];t[n]=[a,i,ot(i)]}return t}function st(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Ka(e){var t=Ua(e);return t.length==1&&t[0][2]?st(t[0][0],t[0][1]):function(n){return n===e||za(n,e,t)}}function Qa(e,t){return e!=null&&t in Object(e)}function Ja(e,t,n){t=wt(t,e);for(var a=-1,i=t.length,r=!1;++a<i;){var o=me(t[a]);if(!(r=e!=null&&n(e,o)))break;e=e[o]}return r||++a!=i?r:(i=e==null?0:e.length,!!i&&fe(i)&&ge(o,i)&&(H(e)||we(e)))}function Ya(e,t){return e!=null&&Ja(e,t,Qa)}var Xa=1,Va=2;function ei(e,t){return Qe(e)&&ot(t)?st(me(e),t):function(n){var a=Y(n,e);return a===void 0&&a===t?Ya(n,e):ye(t,a,Xa|Va)}}function ti(e){return function(t){return t==null?void 0:t[e]}}function ni(e){return function(t){return Je(t,e)}}function ai(e){return Qe(e)?ti(me(e)):ni(e)}function ii(e){return typeof e=="function"?e:e==null?X:typeof e=="object"?H(e)?ei(e[0],e[1]):Ka(e):ai(e)}function ri(e){return function(t,n,a){for(var i=-1,r=Object(t),o=a(t),s=o.length;s--;){var c=o[e?s:++i];if(n(r[c],c,r)===!1)break}return t}}var oi=ri();const si=oi;function li(e,t){return e&&si(e,t,ee)}function di(e,t){return function(n,a){if(n==null)return n;if(!V(n))return e(n,a);for(var i=n.length,r=t?i:-1,o=Object(n);(t?r--:++r<i)&&a(o[r],r,o)!==!1;);return n}}var ci=di(li);const ui=ci;function C(e,t){var n=At(e);return t==null?n:Jn(n,t)}function hi(e,t){var n=-1,a=V(e)?Array(e.length):[];return ui(e,function(i,r,o){a[++n]=t(i,r,o)}),a}function pi(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function mi(e,t){if(e!==t){var n=e!==void 0,a=e===null,i=e===e,r=_e(e),o=t!==void 0,s=t===null,c=t===t,h=_e(t);if(!s&&!h&&!r&&e>t||r&&o&&c&&!s&&!h||a&&o&&c||!n&&c||!i)return 1;if(!a&&!r&&!h&&e<t||h&&n&&i&&!a&&!r||s&&n&&i||!o&&i||!c)return-1}return 0}function gi(e,t,n){for(var a=-1,i=e.criteria,r=t.criteria,o=i.length,s=n.length;++a<o;){var c=mi(i[a],r[a]);if(c){if(a>=s)return c;var h=n[a];return c*(h=="desc"?-1:1)}}return e.index-t.index}function fi(e,t,n){t.length?t=ne(t,function(r){return H(r)?function(o){return Je(o,r.length===1?r[0]:r)}:r}):t=[X];var a=-1;t=ne(t,et(ii));var i=hi(e,function(r,o,s){var c=ne(t,function(h){return h(r)});return{criteria:c,index:++a,value:r}});return pi(i,function(r,o){return gi(r,o,n)})}var wi=zt(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Ae(e,t[0],t[1])?t=[]:n>2&&Ae(t[0],t[1],t[2])&&(t=[t[0]]),fi(e,it(t,1),[])});const q=wi,yi=[{ID:"ALYH9W","Proposal title":"Structured data and collaborative curation: WikiProjects and Wikidata | 結構化資料與共同策畫：維基專題與維基數據",Abstract:`\`(EN)\`\r
WikiProjects are one of the mechanism by which Wikimedians coordinate their contributions to Wikimedia projects. They had already seen considerable evolution before Wikidata was launched, and experiences from other wikis are still shaping the way WikiProjects work on Wikidata. There are three main ways in which Wikidata interacts with WikiProjects: (i) Wikidata stores data about WikiProjects across Wikimedia projects, (ii) some WikiProjects are active on Wikidata, (iii) some WikiProjects make active use of structured data from Wikidata. All of these types of interactions continue to shape collaborative curation workflows across Wikimedia projects. This session is to provide an overview of the current state of such interactions and then to zoom in on how structured data or the lack thereof contribute to WikiProject-based collaborative curation workflows.\r
\r
---\r
\`(ZH)\`\r
維基專題是維基人進行共同貢獻的系統之一。早在維基數據開始之前，維基專題已然發展多年並有過多次轉變，時至今日，來自其他維基專案的經驗與成果仍在持續的影響並形塑維基專題在維基數據中的樣貌。目前，維基專題與維基數據主要有三種互動類型：\r
1. 維基專題使用維基數據作為其跨維基媒體專案工作資料的儲存庫。\r
2. 維基專題直接對於維基數據平台進行活動。\r
3. 維基專題於活動中大量應用來自於維基數據平台上的結構化資料。\r
\r
上述的三種互動模式持續地在影響著各個維基媒體專案中維基人們的共同工作流程。在本次的討論，我們將會提供對這些互動模式的簡略介紹，並針對結構化資料，或者說缺乏結構化資料，是如何影響維基媒體專案上的共同工作流程進行探討。`,Description:`\`(EN)\`\r
The talk will consist of the following parts:\r
- Overview of WikiProjects and similar mechanisms across Wikimedia wikis\r
- Overview of WikiProjects active on Wikidata\r
- Overview of structured data that Wikidata has about WikiProjects across Wikimedia wikis\r
- Overview of how WikiProjects use Wikidata\r
- Observations about how structured data about WikiProjects can assist collaborative curation both within and beyond WikiProjects\r
\r
---\r
\`(ZH)\`\r
該場次將有以下階段：\r
- 維基專題介紹，以及其在各個維基媒體專案上共同的工作模式。\r
- 於維基數據上活動的維基專題介紹。\r
- 維基數據平台上，來自各個維基媒體專案的維基專提結構化資料介紹。\r
- 維基專題如何使用維基數據介紹。\r
- 維基專題相關的結構化資料如何協助維基專題內部以及外部共同工作的觀察。`,"Speaker names":["Daniel Mietchen"],Room:{en:"Main program"},Start:"2023-10-28T15:00:00+00:00",End:"2023-10-28T23:30:00+08:00"},{ID:"ATCCHH","Proposal title":"Making Wikidata Smaller Without Reducing Information | 維基數據簡而不減",Abstract:`\`(EN)\`\r
Walkthrough of ways to drastically reduce the size of Wikidata, both as MediaWiki pages and as Query Service data\r
\r
---\r
\`(ZH)\`\r
說明有什麼方法可以大幅縮減維基數據的大小。`,Description:`\`(EN)\`\r
Wikidata's growth in recent years has sparked concerns about the likelihood of [the collapse of its Query Service](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/WDQS_backend_update/Blazegraph_failure_playbook) and the increasing inability to edit many of its larger items. Much of it stems from a considerably large amount of data within it being stored unnecessarily, both when this information is not actively used elsewhere on Wikidata and when the information represented by this data can be readily and reliably computed in other ways.\r
\r
This session will highlight ways to keep the amount of *information* on Wikidata constant while reducing the overall size of its *data*, both in terms of the lengths of item pages on wikidata.org and the number of RDF triples in the Query Service's store. It will distinguish between several types of action that may be taken, including 1) what can in principle be done right now without affecting existing workflows, 2) what is also possible now but may require acceptable changes to queries for accommodation, and 3) what is not currently feasible since it necessitates software changes and possibly entirely new storage units. It is expected that some of the proposed actions may be controversial, but this session seeks to defend these actions from at least the standpoints of Wikidata's site health, community health, and usability.\r
\r
It is hoped that, depending on the types of action described, viewers will be inspired to either take these actions directly or encourage those who develop Wikibase, its Lua interface, and the Query Service to make appropriate changes and improvements so that those actions can later be taken.\r
\r
---\r
\`(ZH)\`\r
維基數據在近幾年的成長幅度之大，令人不禁擔憂其[查詢服務崩潰](https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/WDQS_backend_update/Blazegraph_failure_playbook)的可能性，以及編輯許多大形項目所會遭遇的困難。這些問題皆源於維基數據上相當大量且稍嫌多餘的資料，其中許多更是閒置並缺乏使用的資料，又或是可以透過其他資料輕鬆計算獲得。\r
\r
本場次的重點將會放在如何保持維基數據的資訊總量不變，同時減少其數據的總體大小，無論是在維基數據上的項目頁面長度，又或是資料查詢服務所蒐錄的 RDF 三元組。根據操作的方式不同可分為以下：\r
1. 在不影響目前工作流程的前提下可以做的操作\r
2. 在可能需要些許改變與適應但在實務上具有可行性的操作\r
3. 以及在現下無法直接進行的操作，可能需要軟體層面的更改又或是需要設計全新的儲存模式。可以預期的是，我們所提出的部分方案是具有爭議性的，然而，本場會議的目的便是將這一議題，站在維護維基數據的整體健全、社群的健全、以及平台的可使用性來與大家進行討論。\r
\r
我們希望，在經過這場會議的討論可以引起社群成員們對這一議題的重視，並根據上述的不同方案採取行動，又或是鼓勵軟體開發者們採取必要的措施和改進，協助未來這類方案的執行。`,"Speaker names":["Mahir Morshed"],Room:{en:"Main program"},Start:"2023-10-29T20:00:00+00:00",End:"2023-10-30T04:30:00+08:00"},{ID:"B3KFN8","Proposal title":"Batch validating Wikidata items using EntitySchemas and entityshape",Abstract:`I'll present a Notebook that can easily be used by anyone to batch check a set of items based on a SPARQL query.\r
During the session I will demo the Notebook and explain why batch validation using EntitySchemas can help editors curate sets of items in Wikidata effectively.`,Description:`Batch validating Wikidata items is currently not very common. I want to help change that.\r
I made a Notebook that can easily be used by anyone to batch check a set of items based on a SPARQL query.\r
\r
During the session I will explain how to make a simple EntitySchema and demo the Notebook using the schema in PAWS.\r
\r
Combined with the new QueryBuilder and a simple existing EntitySchema or adapting one of the existing ones anyone can check a set of items they care about quite easily.\r
\r
Batch validation using EntitySchemas can help editors curate sets of items in Wikidata effectively. \r
\r
In the end I'll elaborate a little on the shortcomings of the chosen validator [entityshape](https://github.com/dpriskorn/entityshape).`,"Speaker names":["Dennis Priskorn"],Room:{en:"Main program"},Start:"2023-10-28T16:30:00+00:00",End:"2023-10-29T01:00:00+08:00"},{ID:"C8BLHU","Proposal title":"Semi-automatic Tagging of Images on Wikimedia Commons | 維基共享資源上的半自動圖像標記",Abstract:`\`(EN)\`\r
In the course of 2022-2023, a R&D project was carried out with the goal to develop a fully functional prototype of a crowdsourcing tool for the semi-automatic tagging of images on Wikimedia Commons. The resulting software solution has taken the form of an enhanced version of the ISA Tool, originally developed to support crowdsourcing campaigns for the tagging of images in the context of projects run by WikiAfrica. The session will be used to present the enhanced tool, the findings from the first user tests, as well as perspectives and recommendations regarding its further development.\r
\r
---\r
\`(ZH)\`\r
在 2022-2023 期間，一個研究專案旨在開發一個可運行的群眾式半自動圖像標記工具原型來對維基共享資源上的圖片進行標記。專案的最終成果以強化版 ISA Tool 的形式公開。起初只是作為支持 WikiAfrica 群眾活動的圖像標記工具。在本場次中，我們將會向各位簡介 ISA Tool，以及我們第一次使用者測試的發現，和我們對該工具的未來展望。`,Description:`\`(EN)\`\r
Project Website: https://commons.wikimedia.org/wiki/Commons:ISA_Tool/Image_to_Concept\r
\r
---\r
\`(ZH)\`\r
專案網站：https://commons.wikimedia.org/wiki/Commons:ISA_Tool/Image_to_Concept`,"Speaker names":["Beat Estermann"],Room:{en:"Main program"},Start:"2023-10-28T19:15:00+00:00",End:"2023-10-29T03:45:00+08:00"},{ID:"CZWEMK","Proposal title":"Obstacles from data users: how can we understand the data? | 使用者困境：數據到底在講什麼？",Abstract:`\`(EN)\`\r
This sharing is about my personal experience trying to understand the data from Wikidata. Wikidata is an amazing data source where I can find any kind of data about any topic from anywhere. However, it's really hard to understand the meaning of the data that I found for my research. I will share some examples of what I liked to learn from Wikidata and how I failed in the session.\r
\r
---\r
\`(ZH)\`\r
這場分享是我個人在使用維基數據學習其資料架構時的經驗。維基數據是一個蒐錄了各式各樣資料的大平台。然而，要了解這些資料卻是十分的複雜。我將會分享一些我希望從維基數據平台所習得的東西以及我為何失敗。`,Description:`\`(EN)\`\r
With Wikidata Query Builder, I could easily find all the data with "instance of" something and other conditions from Wikidata. However, when I tried to list all cities (Q515) around the world, the result has so many different kinds of human settlements, some of them were not even close to a city in my comprehension, which was not the result as I expected. How to understand properly to the result items in Wikidata? I always try to figure it out.\r
\r
---\r
\`(ZH)\`\r
藉由維基數據查詢服務建立工具我可以輕易的藉由 “instance of” 以及其他的搜尋限制來快速尋得我所想要的資料。然而，當我希望列出全球所有的城市 (Q515) 時，搜尋結果中卻混雜了各式各樣的人類居住點，其中部分在我的理解中與城市的定義相去甚遠，不用說這些並不是我預期中希望的結果。到底該如何正確的識讀並理解維基數據的搜尋結果？這是我長期以來希望釐清的事。`,"Speaker names":["Tan Te-chuan"],Room:{en:"Main program"},Start:"2023-10-28T05:30:00+00:00",End:"2023-10-28T14:00:00+08:00"},{ID:"EBT7QN","Proposal title":'Building Abstract Wikipedia Using Wikidata Lexemes | 使用維基數據詞位功能來建立"抽象維基百科"',Abstract:`\`(EN)\`\r
Demonstration of Wikidata's lexicographical data being used by Ninai/Udiron in various ways to generate Abstract Wikipedia article text\r
\r
---\r
\`(ZH)\`\r
展示 Ninai/Udiron 如何以各種方式使用維基數據的詞位資料來產生抽象維基百科條目內容。`,Description:`\`(EN)\`\r
As Wikifunctions expands after its launch, there will be lots of opportunities to explore how it can be used to realize the Abstract Wikipedia project—that is, what functions might need to be written to do so many simple and complex things for it. Of the numerous other systems for text generation that might be considered for addition to Wikifunctions, *only one* 1) takes *specific* and *direct* advantage of Wikidata's information *and* 2) is *specifically designed* to be as easily as possible to add to Wikifunctions. It is this system that will be demonstrated here.\r
\r
This session will first exhibit how the lexicographical data on Wikidata—its lexemes ("items for words") and their senses ("word meanings") and forms ("word inflections")—can be best set up for use with any natural language generation system. It will detail how one can model, in a number of different languages in as many different ways, information about the structure of different types of phrases and sentences, the usage styles and circumstances of word meanings, and the different forms and patterns words can take on. The importance of Wikidata item links in many important circumstances will also be highlighted here, not just for linking word meanings across languages but also for ensuring that, if a phrase in a particular language has no direct equivalent or multiple such equivalents in another language, that appropriate choices can be made based on those item links.\r
\r
Throughout this exhibition, potential abstract content will be processed with the Ninai/Udiron *living* text generation system to show how many of the details in the Wikidata items and lexemes shown affect the output of that *living* system. It will clarify what sorts of functionality, whether in the processing of individual abstract content elements or in the manipulation of sentence structure, are expected to be contributed by the community, while acknowledging areas in which--due to limits in the knowledge of the *living* system's sole author--improvements to functionality for certain languages are indeed necessary.\r
\r
(This session is largely a follow-up to the WikidataCon 2021 session ["Ninai (நினை) and Udiron (উদীরণ): text generation with Wikidata items and lexemes"](https://pretalx.com/wdcon21/talk/J7DVKX/), given how much the described software has evolved since then.)\r
\r
---\r
\`(ZH)\`\r
在維基函數發布之後我們將會遭遇許多的機會來探索其在實現抽象維基百科專案的潛力，即探索我們需要什麼函數來解決那些複雜或簡單的問題。在眾多可能被收錄至維基函數中的敘述產生系統，只有\r
\r
1. 可以符合維基數據資料獨特的優勢和特性\r
2. 可以相對簡易的被收錄至維基函數之中，才會被在此展示。\r
\r
本場次中，首先我們將會展示維基數據的詞位資料 (描述字詞的項目) 和其詞意 (字詞的內涵) 以及其詞形 (字詞的變體) 需如何建立以最佳的供任何自然語言產生系統所使用。我們將會詳細說明如何在多種不同的語言中，以多種不同的方式，對有關不同類型的短句和句子的結構、單詞含義的使用風格和情況，以及單詞可以採取的不同形式和模式的信息進行建模。我們也會在此強調，維基數據項目應當連結至許多重要的使用情況，不僅僅是連結各語言之間相同意涵的單詞，更要確保在特定語言中與個別語言間缺乏對等翻譯，或是擁有數個相同翻譯時，仍然可以透過這些重要連結做出最適當的選擇。\r
\r
在本次的展示，我們將會使用 Ninai/Udiron 敘述產生系統來處理潛在的抽象條目內容，以展示維基數據的項目和詞位資料將如何影響系統的輸出結果。這將可以協助釐清，不論是在處理單一抽象條目內容或是調整語句結構時需要社群貢獻的功能與函數；並且，受限於系統的單一作者性，這些功能在面對特定語言時必定有其侷限性且需要社群的協助進行改進。\r
\r
(有鑑於所展示之軟體經過這些年的發展，本場次之內容大致上可以視作 2021 WikidataCon [“Ninai (நினை) and Udiron (উদীরণ): text generation with Wikidata items and lexemes”](https://pretalx.com/wdcon21/talk/J7DVKX/) 的後續。)`,"Speaker names":["Mahir Morshed"],Room:{en:"Main program"},Start:"2023-10-28T21:30:00+00:00",End:"2023-10-29T06:00:00+08:00"},{ID:"KDKMNL","Proposal title":"Wikidata for Education | 維基數據教育專案",Abstract:`\`(EN)\`\r
Wikidata for Education is an initiative that aims to ensure that the "sum of all knowledge" can be aligned with school curricula and easily accessible by teachers and students to achieve their learning objectives. At present, aligning open educational resources with local, national, and international curriculum frameworks is difficult, because standards, competencies, and other elements of curricula are not machine-readable. Wikidata for Education has started as a pilot project in Ghana to structure curriculum data, add it to Wikidata, create more curriculum-aligned content, and develop platforms that help curate it. Below are examples of how this initiative will impact global education.\r
\r
---\r
\`(ZH)\`\r
教育用維基數據是一個旨在確保 “知識的總體” 跟學校的課綱能輕易整合並能簡易的被教師和學生使用以協助其學術成就。就目前而言，要將地區、國家、以及國際課程的綱領與開放教育資源做整合仍有許多困難；主因於其課綱內容有許多元素無法輕易的被機器所識讀。教育用維基數據是一由迦納共和國所發起的先頭專案旨在將課綱內容結構化並上傳至維基數據，並在此之上建立更多與課綱相關連之內容同時開發了一個平台來對其進行規劃。以下是這個專案所能為全球教育體系所帶來的影響。`,Description:`\`(EN)\`\r
Wikidata for Education is an initiative that aims to align the "sum of all knowledge" with school curricula and make it easily accessible by teachers and students. In many countries, aligning open educational resources with local, national, and international curriculum frameworks is challenging because curriculum elements such as standards and competencies are not machine-readable. This session will explore how Wikidata for Education can help address this issue.\r
\r
The primary objective of this session is to introduce Wikidata for Education and its pilot project in Ghana, which focuses on structuring curriculum data, adding it to Wikidata, creating more curriculum-aligned content, and developing platforms that help curate it. The session will provide a comprehensive overview of the current state of the project, including its successes, challenges, and future plans.\r
\r
The session will also provide examples of how this initiative can impact global education. For instance, Wikidata for Education can enhance the accessibility of educational resources to students and teachers worldwide, regardless of their location or financial resources. It can also provide educators with better tools to track their students' progress and ensure that they are meeting educational standards.\r
\r
The session will be interactive and engaging, allowing attendees to participate in the discussion and ask questions. Attendees will gain a better understanding of how Wikidata for Education can contribute to the improvement of global education, and they will learn about the challenges and opportunities involved in the implementation of the initiative.\r
\r
The session's target audience is educators, curriculum developers, educational policymakers, and anyone interested in the intersection between technology and education. Attendees will leave with a greater understanding of the potential of Wikidata for Education to enhance global education and the steps they can take to participate in the initiative.\r
\r
---\r
\`(ZH)\`\r
教育用維基數據是一個旨在確保 “知識的總體” 跟學校的課綱能輕易整合並能簡易的被教師和學生使用。對許多國家而言，要將開放教育資源與地區、國家、以及國際課程的更領做整合時，因其課綱的許多元素無法輕易的被機器所識讀所以遭遇許多的挑戰。在接下來的時間中，我們將會介紹教育用維基數據可以如何協助處理這一問題。\r
\r
本場次最重要的任務便是向大家介紹教育用維基數據以及其先頭專案；該專案主要著重於結構化課綱資料並將其上傳至維基數據，並且基於這些資料，在維基數據上建立更多與之相關的內容，最後更開發了一個平台來協助整體的規劃。然後我們將會針對該專案目前的現況做一個詳細的介紹，包括我們所經歷的挑戰與成果，以及對未來的規劃。\r
\r
同時，本場次也將會針對該專案在國際教育環境所能提供的助益作簡介。舉例來說，教育用維基數據可以協助提升全球所有的教師或是學生對開放教育資源的使用；該專案也能提供教師工具來更好的追蹤學生的學習成效確保其能夠通過課綱所設立的標準。\r
\r
我們期許在這場會議中能夠與社群的各位進行積極的互動和討論。我們希望將該專案能對國際教育環境所提供的助益及其所將帶來的潛力和挑戰，詳細的與大家分享。\r
\r
這場會議主要的目標是所有的教育者、課綱規劃者、教育政策制定者、以及對科技和教育的互動有興趣的人們。我們希望能夠讓各位更加了解教育用維基百科專案所具備的潛力，並提供各位未來參與該專案的管道。`,"Speaker names":["Sailesh Patnaik","Justice Okai-Allotey","Mohammed Kamal-Deen Fuseini (Dnshitobu)","Soukaina Abelhad"],Room:{en:"Main program"},Start:"2023-10-29T03:10:00+00:00",End:"2023-10-29T11:50:00+08:00"},{ID:"KLLJCR","Proposal title":"Bring your heritage to Wiki Loves Living Heritage! | 帶著家鄉的文化一起加入 Wiki Loves Living Heritage！",Abstract:`\`(EN)\`\r
In 2023, [Wiki Loves Living Heritage](https://meta.wikimedia.org/wiki/Wiki_Loves_Living_Heritage) brings the authorities and organizations responsible for safeguarding intangible cultural heritage around the world together with the Wikimedia affiliates and contributors to create activities at the occasion of the 20th anniversary of the UNESCO Convention for the Safeguarding of the Intangible Cultural Heritage. Wikidata plays a pivotal role in this. Each member state of the Convention is responsible for safeguarding measures by maintaining an inventory of living heritage in the area. This session walks through importing data to Wiki Loves Living Heritage and the ways in which it has been used throughout Wikimedia projects. We will introduce some of the tricky ethical considerations related to data contributions, such as indigenous data sovereignty. We invite you to imagine together how to continue working with cultural data of this kind!\r
\r
---\r
\`(ZH)\`\r
2023年，[維基愛活態遺產活動 (Wiki Love Living Heritage)](https://meta.wikimedia.org/wiki/Wiki_Loves_Living_Heritage) 將世界各地負責保護非物質文化遺產的當局和組織，與維基媒體附屬機構和貢獻者們聯合起來，在聯合國教科文組織《保護無形文化遺產公約》20週年之際開展活動。維基數據是這任務中的關鍵角色。 該公約的每個成員國都有責任保護其地區中的活態遺產。本場次中將會說明，我們在維基愛活態遺產活動如何匯整資料，以及這些資料如何在整個維基媒體專案中被使用。同時，我們也會針對一些資料貢獻時會遭遇的道德考量，如原住民的資料主權問題。我們邀請各位一起參與討論，想像未來遭遇這類文化資料時應該如何進行工作。`,Description:"","Speaker names":["Susanna Ånäs"],Room:{en:"Main program"},Start:"2023-10-29T16:15:00+00:00",End:"2023-10-30T00:45:00+08:00"},{ID:"KT89RQ","Proposal title":"Investigating Taiwan's native languages | 臺灣原住民語的探尋之旅",Abstract:`\`(EN)\`\r
Investigating Taiwan's native languages by revealing their cultural importance. In addition to how to use platforms such as Wikidata, which plays a crucial role in their preservation.\r
\r
This session analyses the linguistic landscape and provides a window into the variety and vitality of these languages. \r
\r
We meticulously record linguistic nuances using technology, fostering a team effort to protect linguistic heritage (Chen 2021).\r
\r
 Join us to have fun with Wikidata, and explore language, heritage, and identity, and how you can contribute to their enduring legacies\r
\r
---\r
\`(ZH)\`\r
探尋台灣原住民的語言並展示其文化重要性。除此之外，維基數據的使用在文化保存的議題中扮演了重要的角色。\r
\r
在本場次中我們將會從語言學的視角探索並發現臺灣原住民的多樣性與生命力。\r
\r
透過科技的協助，我們鉅細靡遺的紀錄了語言的各種眉角，通過群體的力量保護語言遺產 (Chen 2021)。\r
\r
加入我們一起在維基數據中遨遊，探索這些民族的語言、文化和身分，並學習在這議題中我們能夠如何為他們的保存作出什麼樣的貢獻。`,Description:`\`(EN)\`\r
Introduction:\r
Taiwan, known for its linguistic diversity, is home to a fascinating array of indigenous languages. These languages are not only crucial to preserving the island's cultural identity but also hold invaluable insights into its history. In this session, we'll uncover the vibrant world of Taiwan's aboriginal languages and the unique tribes that speak them.\r
\r
Understanding the Indigenous Tapestry:\r
Before we delve into the individual languages, let's appreciate the intricate mosaic of indigenous tribes across Taiwan. The table below showcases some of the remarkable aboriginal tribes, each with their distinct languages and cultural nuances:\r
\r
Tribe	Language\r
Atayal	Atayal\r
Paiwan	Paiwan\r
Amis	Amis\r
Rukai	Rukai\r
Tsou	Tsou\r
Bunun	Bunun\r
Puyuma	Puyuma\r
Saisiyat	Saisiyat\r
Yami	Yami\r
Thao	Thao\r
Truku (Taroko)	Truku (Taroko)\r
Kavalan	Kavalan\r
Sakizaya	Sakizaya\r
Seediq	Seediq\r
Exploring the Indigenous Languages:\r
Diving into the languages themselves, we'll uncover the phonetic beauty and linguistic intricacies that set them apart. From the rhythmic tones of Atayal to the melodic nuances of Puyuma, each language tells a story of resilience and cultural pride.\r
\r
Preservation Efforts:\r
Understanding these languages' importance, there has been a growing effort to preserve and revitalize them. The challenge lies not only in documenting their vocabulary and grammar but also in ensuring their transmission to younger generations.\r
\r
Connecting Through Wikidata:\r
Just as we've embraced technology to connect with our global community, we can harness platforms like Wikidata to safeguard these languages' legacy. By collaboratively documenting language details and cultural context, we create a bridge between our modern world and the ancestral voices that echo through these languages.\r
\r
Conclusion:\r
As we conclude our journey through Taiwan's indigenous languages, I hope you feel inspired to contribute to the preservation of this linguistic treasure trove. Our efforts on platforms like Wikidata pave the way for a more inclusive understanding of the world's linguistic heritage.\r
\r
Thank you for joining me today. Let's celebrate and protect the diverse voices that make up the cultural symphony of Taiwan.\r
\r
---\r
\`(ZH)\`\r
臺灣因其語言的多元性而聲名遠播，在這座島上住著相當多元的原住民文化。這些原住民的文化和語言，不僅僅擁有非常重要的文化身分價值，同時也是非常重要的史料來源。在這場會議中，我們將會揭開臺灣原住民的面紗，探索其多采多姿的世界以及這些獨特的人們。\r
\r
理解原住民圖板：\r
在我們深入語言的世界之前，讓我們從宏觀來欣賞臺灣原住民的圖板；以下是在臺灣這片土地之上的原住民族群，以及其獨特的語言和文化內涵。\r
\r
原住民族群：\r
\r
1. 泰雅族 - 泰雅語\r
2. 排灣族 - 排灣語\r
3. 阿美族 - 阿美語\r
4. 魯凱族 - 魯凱語\r
5. 鄒族 - 鄒語\r
6. 布農族 - 布農語\r
7. 卑南族(普悠瑪) - 卑南語\r
8. 賽夏族 - 賽夏語\r
9. 達悟族 - 達悟語\r
10. 邵族 - 邵語\r
11. 太魯閣族 - 太魯閣語\r
12. 噶瑪蘭族 - 噶瑪蘭語\r
13. 薩奇萊雅族 - 薩奇萊雅語\r
14. 賽德克族 - 賽德克語\r
\r
探索原住民語：\r
深入研究這些語言本身，我們將展示它們與眾不同的語音美感和複雜性。不論是富有節奏性的泰雅語或是如音樂般的卑南語，每個語言都有其獨特的歷史和文化驕傲。\r
\r
保存工作：\r
在了解了這些語言文化重要性後，臺灣愈來愈加重視對這些語言的保育工作。然而其真正的挑戰並不只是要記錄其詞彙和文法，還要確保能夠將這些知識傳遞給未來的世代。\r
\r
連結維基數據：\r
就如同我們擁抱科技來與世界連接。我們也可以運用如維基數據平台來保護這些語言文化。透過協作紀錄語言細節和文化內涵，我們可以建立起將現代世界和來自祖先的語言連接起來的橋樑。\r
\r
結論：\r
隨著我們的旅程即將抵達尾聲，我希望在過去的這段時間中能夠啟發各位一同加入保護這語言寶庫的行列。我們在維基數據平台上的這些貢獻都將成為未來語言文化遺產的保存和理解的養分。`,"Speaker names":["Yucheng Lin"],Room:{en:"Main program"},Start:"2023-10-29T07:00:00+00:00",End:"2023-10-29T15:30:00+08:00"},{ID:"KUCPMF","Proposal title":"Wikidata and OBO Foundry ontologies - What is the current state of integration? | 維基數據和 OBO Foundry - 整合現狀",Abstract:`\`(EN)\`\r
In this academic session, we will explore the interplay of Wikidata and the OBO Foundry, how Wikidata is connected with the biomedical ontologies in this community, and how they can mutually benefit in the future. We will talk about licensing and technical challenges to synchronize the resources and discuss paths forward. The  integration of Cell Ontology to Wikidata will be presented as a sample case, but other ontologies will be considered when viewing the panorama.\r
\r
---\r
\`(ZH)\`\r
在本場次中，我們將會探索維基數據和 OBO Foundry 之間的互動關係；兩者之間如何連接，以及兩者在未來可以如何攜手共同發展。我們將會討論共享資源所將遭遇的授權問題和技術挑戰，並探討前進的道路。我們將以細胞資料的整合案例作為範本進行討論，其他的資料也將在後續更廣泛的討論時進行。`,Description:"","Speaker names":["Tiago Lubiana"],Room:{en:"Main program"},Start:"2023-10-29T19:15:00+00:00",End:"2023-10-30T03:45:00+08:00"},{ID:"LCBZQM","Proposal title":"Ontology issues in Wikidata - Everything in neat and tidy boxes? Not quite! | 維基數據的本體論議題 - 資料蒐錄的複雜與困難",Abstract:`\`(EN)\`\r
Wikidata describes so many different things in its more than 100 Million Items and how they relate to each other. That is a complex task and at times pretty messy. In this session we will look at some of the different types of issues you'll find in Wikidata's ontology, why they are problematic and what we can do about them together.\r
\r
---\r
\`(ZH)\`\r
維基數據擁有超過 1 億個項目，之中所描述的關係與資料種類更是多樣。這是一個非常複雜的系統，而且在某些狀況下，非常的混亂。在本場次的時間中，我們將會簡單介紹幾個扎根於維基數據中的本體論議題，說明為甚麼他們會造成工作上的困難，以及可能的解決辦法。`,Description:"","Speaker names":["Lydia Pintscher"],Room:{en:"Main program"},Start:"2023-10-29T18:30:00+00:00",End:"2023-10-30T03:00:00+08:00"},{ID:"LCVL7E","Proposal title":"Spreading our data further with the Wikibase REST API | 資料的流通與應用 - Wikibase REST API 簡介",Abstract:`\`(EN)\`\r
Wikidata's data is there to be used - to build useful and fun applications that bring knowledge to everyone. In this session we will dive into the new Wikibase REST API, that will make it easier for people to build applications on top of Wikidata's data.\r
\r
---\r
\`(ZH)\`\r
維基數據並不僅僅是保存資料，更要藉由這些資料，以有用且有趣的方式，將知識帶給眾人。在本場次的時間中我們將會向各位介紹我們新的 Wikibase REST API，希望這個新的工具可以讓人們在使用維基數據的資料來建立應用程式時能夠更加輕鬆愜意。`,Description:"","Speaker names":["Lydia Pintscher"],Room:{en:"Main program"},Start:"2023-10-28T18:30:00+00:00",End:"2023-10-29T03:00:00+08:00"},{ID:"MCDDCR","Proposal title":"Wikidata birthday presents lightning talks",Abstract:`\`(EN)\`\r
The *Wikidata Birthday presents lightning talks* sessions is the traditional format where community members can present their gifts to the Wikidata community in a few minutes.\r
Did you prepare a present for Wikidata's birthday and would like to present it to the community? You can sign up for the birthday presents lightning talks session! Please see the instructions and sign up here: https://etherpad.wikimedia.org/p/WikidataCon2023-BirthdayLTsession\r
\r
---\r
\`(ZH)\`\r
*Wikidata birthday presents lightning talks* 是一個傳統的活動段落，社群成員們可以以簡短的幾分鐘快速的向維基數據獻上他們的禮物。`,Description:"","Speaker names":["Andrew Lih","Lydia Pintscher"],Room:{en:"Main program"},Start:"2023-10-29T14:15:00+00:00",End:"2023-10-29T23:15:00+08:00"},{ID:"MDTPWC","Proposal title":"Dicothèque: explore and compare dictionaries on the French Wikisource | Dicothèque：法文維基文庫上的字典搜尋和比較",Abstract:`\`(EN)\`\r
The **Dicothèque** is a search engine powered by Wikidata and the French Wikisource, which allows users to explore and compare dictionaries from the 17th to 20th centuries. It is available on the French Wikisource at [Wikisource:Dicothèque](https://fr.wikisource.org/wiki/Wikisource:Dicoth%C3%A8que).\r
\r
---\r
\`(ZH)\`\r
**Dicothèque** 是一個建立於維基數據和法文維基文庫之上的搜尋引擎，主要用於讓使用者探索和比對17世紀和20世紀的字典。該工具位於法文維基文庫 [Wikisource:Dicothèque](https://fr.wikisource.org/wiki/Wikisource:Dicoth%C3%A8que)。`,Description:`\`(EN)\`\r
We will showcase the Dicothèque, briefly explain how it works and the steps it takes to add a new dictionary to it. We will conclude with our plans for the future of this search engine.\r
\r
The Dicothèque allows users to search **through more than 20 dictionaries** and compare entries between said dictionaries. As such, it is one of the biggest "dictionary search engines" in existence for the French language: the [CNRTL's one](https://www.cnrtl.fr) has 7, the [Dictionnaire des Francophones](https://www.dictionnairedesfrancophones.org/) has 8. And the Dicothèque is entirely powered by Wikidata and the French Wikisource.\r
\r
---\r
\`(ZH)\`\r
在本場次中，我們將會展示如何使用 Dicothèque ，並簡單介紹其運作原理，以及如何向其添加新的字典，並在最後以我們對其的未來計畫做為總結。\r
\r
Dicothèque 可以搜尋並比對**超過 20 本字典**中的條目，使其成為在法語最大規模的 “字典搜尋引擎”；與之相比，[CNRTL](https://www.cnrtl.fr) 和 [Dictionnaire des Francophones](https://www.dictionnairedesfrancophones.org/) 的搜尋引擎分別蒐錄了7本以及8本字典。並且 Dicothèque 的資料來源全部皆來自於維基數據以及法文維基文庫。`,"Speaker names":["Poslovitch","Lyokoï"],Room:{en:"Main program"},Start:"2023-10-28T20:00:00+00:00",End:"2023-10-29T04:30:00+08:00"},{ID:"MDWXXX","Proposal title":"Workshopping Metadata Interoperability for Small Museums | 小型博物館可相互操作的後設資料工作坊",Abstract:`\`(EN)\`\r
In this session, Curationist will present an early-stage idea for a Wikidata-compatible by design metadata schema, conceived as a low impact out-of-the-box solution for small museums seeking to digitize their collections under open access licenses.\r
\r
Curationist’s mission is to bring together arts and culture communities to find, share, and work together to reimagine cultural narratives, and we believe that an important component of this work involves helping small, often underserved, museums and archives achieve parity with major cultural heritage institutions. As a result, our focus in 2024 will be on designing methods and tools that attempt to help these small organizations to be equally present in online open access spaces like WikiCommons and the Curationist platform.\r
\r
We present this project to the Wikidata community in order to identify potential challenges to interoperability based on previous work in this area, as well as to surface potential collaborators interested in participating in this initiative with us. This project builds upon work begun on the Curationist technical platform as well as at the Metadata Learning and Unlearning Summit held in June 2023.\r
\r
---\r
\`(ZH)\`\r
在本場次中，"策展人"將會為我們展示一個維基數據相容的後設資料儲存格式初步設計；可以做為小型博物館數位化並開放其館藏的低勞力簡易解決方案。\r
\r
"策展人"的任務是將藝術和文化社群凝聚起來一同探尋、分享、並合作重新定義文化敘事。我們相信其中重要的元素之一便是協助小型，缺乏關注的博物館和檔案庫站上與其他大型文化遺產機構同樣的一個舞台。基於此目標，我們 2024 將會專注於設計一套方案和配套的工具來協助這些小型機構來在開放的網路空間如維基媒體共享資源或是策展人平台上獲得平等與眾人分享的機會。\r
\r
我們向維基數據社群介紹該專案的目的在於，透過以往在該領域的工作經驗，探索並發現這項專案所可能遭遇的挑戰，同時吸引願意為了這一目標與我們共同參與這項專案的潛在合作者。該專案是建立於"策展人"技術平台以及 2023 六月的後設資料學習和反學習峰會的經驗之上。`,Description:"","Speaker names":["Amanda Figueroa"],Room:{en:"Main program"},Start:"2023-10-28T08:00:00+00:00",End:"2023-10-28T16:40:00+08:00"},{ID:"MRZBDV","Proposal title":"Supercharging Wikidata with External Aliases and New Entity Types | 透過外部資料庫的別名和新實體類型來強化維基數據",Abstract:`\`(EN)\`\r
Wikidata plays a crucial role in facilitating Named Entities Linking and Relations extraction for companies and researchers. However, it also faces certain limitations. Unlike DBpedia, Wikidata lacks a comprehensive taxonomy of entities, and many entities have a partial list of aliases that could benefit from enrichment. In this talk, we will introduce a database built within Orange that supplements Wikidata with enriched entity information sourced from various external databases using intelligent heuristics. Then we will show how this database can be used to highlight inconsistencies and poor-quality data in Wikidata and across various Wikipedia editions. We will also share our plans to develop robots to seamlessly transfer enhanced data back into the public Wikidata instance, fostering a more robust and accurate knowledge base.\r
\r
---\r
\`(ZH)\`\r
維基數據在協助研究員或公司進行實體鏈結以及關係擷取方面極為重要。然而，維基數據並非完美，相較於 DBpedia，維基數據缺乏清晰易懂的實體分類，並且部分實體因為別名眾多而有待補充。在本次的演講中，我們將介紹一個在 Orange 中建立的資料庫，該資料庫使用啟發式方法，透過來自各種外部資料庫的豐富實體資訊來補充維基數據。接著我們將會展示如何使用該資料庫來對維基數據以及各語言版本的維基百科條目進行比對，找出不一致或是低品質的內容。我們接著將會簡單說明我們計畫如何應用此技術，開發機器人來將資料庫中的優質資料導入維基數據，強化知識庫的的準確性。`,Description:"","Speaker names":["Yoan Chabot","Yann Almeras"],Room:{en:"Main program"},Start:"2023-10-28T15:45:00+00:00",End:"2023-10-29T00:15:00+08:00"},{ID:"NFTHYF","Proposal title":"Wikidata ESEAP Forum | ESEAP 維基數據交流論壇",Abstract:`\`(EN)\`\r
WikidataCon 2023 ESEAP Form invited 4 community partners, coming from ESEAP (East and South East Asia and Pacific Region) region, to share their experience with Wikidata and how were it be used in local promotion activities.\r
\r
During the forum, beside from the presentation, we also have a discussion session at the end of the forum. Through this special gathering, we hope to bring more understanding to the development of Wikidata in ESEAP region.\r
\r
\r
\r
**Content**\r
\`Host - Wikimedia Taiwan Dennis\`\r
* From the POV of application to disscet the bottleneck of cross-displine data cooperation - 林宥伯\r
* Wikidata as the world’s global gazetteer - Alex\r
* Leksem Wikidata Project as a source of knowledge and preservation of local languages - Michael Lim\r
* Using Wikidata for Cosplay and ACG World - Dody\r
\r
---\r
\`(ZH)\`\r
WikidataCon 2023 ESEAP 交流論壇特別邀請到 ESEAP (東亞、東南亞和太平洋地區) 區域內四個國家的維基媒體社群夥伴，來與我們分享 Wikidata 是如何應用在各社群中推廣以及有什麼有趣的在地化應用。\r
\r
在論壇的過程中，除了各國社群的 Wikidata 發展外，也在最後留有綜合座談的討論時間，透過 WikidataCon 這個機會，讓大家可以更加瞭解 ESEAP 區域內 Wikidata 現今的發展。\r
\r
**發表內容與成員**\r
\`主持人 - Wikimedia Taiwan Dennis\`\r
* 從應用研究角度看資料跨域協作瓶頸 - 林宥伯\r
* Wikidata as the world's global gazetteer - Alex \r
*  Leksem Wikidata Project as a source of knowledge and preservation of local languages - Michael Lim \r
*  Using Wikidata for Cosplay and ACG World - Dody`,Description:"","Speaker names":["Alex Lum / Canley","Dody Ismoyo","Michael Lim","林宥伯"],Room:{en:"Main program"},Start:"2023-10-28T02:00:00+00:00",End:"2023-10-28T12:00:00+08:00"},{ID:"PLCCRL","Proposal title":"Closing session | 閉幕式",Abstract:`\`(EN)\`\r
Closing session for the conference, chatting and presenting other upcoming events in the Wikidata world.\r
\r
---\r
\`(ZH)\`\r
閉幕式，大家將以輕鬆的談話並介紹維基數據接下來的活動。`,Description:"","Speaker names":["Léa Lacroix"],Room:{en:"Main program"},Start:"2023-10-29T21:30:00+00:00",End:"2023-10-30T06:00:00+08:00"},{ID:"PVVNFZ","Proposal title":"Research Data Repositories and Wikidata | 維基數據與研究資料儲存庫",Abstract:`\`(EN)\`\r
The _[depositar](https://data.depositar.io/about)_ is an open repository developed in Academia Sinica, Taiwan. The service is free: Anyone can deposit and access research datasets on the _depositar_. The _depositar_ features a Wikidata-based keyword system where datasets in its collection can be annotated and filtered by Wikidata items. [The feature was introduced in 2019](https://commons.wikimedia.org/wiki/File:Improving_data_discovery_through_Wikidata_-_WikidataCon_2019.pdf). In this presentation, we aim to talk about some of ideas to further extend the Wikidata keyword feature in the _depositar_.\r
\r
---\r
\`(ZH)\`\r
[*研究資料寄存所 (depositar)*](https://data.depositar.io/about)是臺灣中央研究院的開放資料庫。這是一個免費的資料庫服務：任何人都可以儲存並使用在*研究資料寄存所*上的研究資料集。並且*研究資料寄存所*內建有維基數據相同的關鍵字系統，資料集可以透過這個系統被標註並搜尋。[該功能於 2019 年被新增進入 ](https://commons.wikimedia.org/wiki/File:Improving_data_discovery_through_Wikidata_-_WikidataCon_2019.pdf)*研究資料寄存所*。在本場次中，我們將會分享一些我們打算如何擴展維基數據關鍵字系統的計畫。`,Description:`Research data repositories are websites where datasets are deposited, aggregated, distributed, and discovered by researchers and the public. The repositories are online places entrusted by the communities to preserve and share data for the common good. To help search and discovery, data repositories use various vocabularies to describe and annotate datasets in their collections. The _[depositar](https://data.depositar.io/about)_ is an open repository developed in Academia Sinica, Taiwan. The service is free: Anyone can deposit and access research datasets on the _depositar_. The _depositar_ features a Wikidata-based keyword system where datasets in its collection can be annotated and filtered by Wikidata items. [The feature was introduced in 2019](https://commons.wikimedia.org/wiki/File:Improving_data_discovery_through_Wikidata_-_WikidataCon_2019.pdf). In this presentation, we aim to talk about some of ideas to further extend the Wikidata keyword feature in the _depositar_.\r
\r
One of the ideas is to present and explore the relationship among the datasets in the collection based on their annotated Wikidata keywords as well as the Wikidata properties between the keywords. Such semantic exploration need not be a builtin feature of the _depositar_ as the repository already publishes via data APIs the metadata of all the datasets in its collections (including their Wikidata keywords). This semantic exploration can be a standalone application and it can further rely on the Wikidata services for functionalities. Another idea is to suggest Wikidata keywords from the natural language descriptions given by the users to the datasets as part of their metadata.\r
\r
We will also explore the scenarios where multiple data repositories all publish via data APIs the Wikidata keywords that have been used to annotate their collections. Starting from this, we can have a basis for federated semantic search across data repositories that is driven by the Wikidata infrastructure and its worldwide communities.`,"Speaker names":["Tyng-Ruey Chuang  | 莊庭瑞","Cheng-Jen Lee | 李承錱"],Room:{en:"Main program"},Start:"2023-10-28T06:00:00+00:00",End:"2023-10-28T14:30:00+08:00"},{ID:"PZF9TA","Proposal title":"Wikifunctions: Fulfilling One of Wikidata's Missing Promises? | 維基函數：實現維基數據失落願景的下一步",Abstract:`\`(EN)\`\r
A general introduction to Wikifunctions, the new Wikimedia project to create and maintain all kinds of functions that anyone can call, write, maintain, and use\r
\r
---\r
\`(ZH)\`\r
在本場次中，我們將會介紹維基函數，一個全新的維基媒體專案旨在蒐錄並維護各式的函數供任何人來呼叫、編寫、維護和使用。`,Description:`\`(EN)\`\r
Wikifunctions is a new Wikimedia project that allows anyone to create and maintain all kinds of functions that anyone can call, write, maintain, and use. Functions are a form of knowledge that can answer questions, such as how many days have passed between two dates or the distance between two cities. More complicated functions can answer more complicated questions, such as the volume of a three dimensional shape, the distance between Mars and Venus on a certain date, or whether two species were alive at the same time.\r
\r
One of our early tasks after launch will be to allow accessing data from Wikidata in Wikifunctions. In this presentation we want to kick off and further the discussion with the Wikidata community about how to work towards that.\r
\r
Furthermore, it will be possible to integrate the results from Wikifunctions function calls in Wikipedia and other Wikimedia projects. These two features together enable the integration of Wikidata’s data into Wikipedia in powerful ways, e.g. in the form of tables, lists, etc. This was initially planned as Phase 3 of the Wikidata project, and we are now working towards delivering on this old promise.\r
\r
---\r
\`(ZH)\`\r
維基函數是一個全新的維基媒體專案，旨在供使任何人來建立並維護各式的函數以提供任何人來呼叫、編寫、維護和使用。函數是一種可以對問題提出回答的知識類型：舉例而言回答於兩個日期之間共經過多少天數，或是兩座城市距離多遠等。更加複雜的函數可以回答更加複雜的問題：舉例而言回答三次元中型體的體積、火星和水星於特定日期時的距離，或是兩個物種是否存在於同一時期等。\r
\r
在專案開始後最早期任務之一便是使維基函數可以使用維基數據的資料。在本次的報告中我們希望可以開始並發展與維基數據社群之間的溝通，討論如何去發展這一功能。\r
\r
除此之外，維基函數所得出的結果將要可以被導入至維基百科等其他維基媒體專案。這兩個功能將可以解鎖維基數據相當強大的應用潛力，即：以表格或表格等形式將維基數據的資料呈現於維基百科以及其他維基媒體專案之中。這本是維基數據於第三階段的目標之一，如今我們正在努力實現這長久以來的承諾。`,"Speaker names":["Denny Vrandečić"],Room:{en:"Main program"},Start:"2023-10-28T20:45:00+00:00",End:"2023-10-29T05:15:00+08:00"},{ID:"QXYM7N","Proposal title":"Wikidata: What happened over the past year? What's next? | 維基數據的過往與未來",Abstract:`\`(EN)\`\r
In this session we'll take a moment to look back at some of the amazing things that happened over the past year around Wikidata. Then we'll do some crystal ball reading and look into the future and exciting things that will happen over the next year.\r
\r
---\r
\`(ZH)\`\r
在接下來的時間中，我們將會花一點時間回顧一下過去幾年中維基數據的大事紀。然後我們將會向前展望未來，預測一下維基數據明年一年的前景如何。`,Description:"","Speaker names":["Lydia Pintscher"],Room:{en:"Main program"},Start:"2023-10-28T14:15:00+00:00",End:"2023-10-28T22:45:00+08:00"},{ID:"R9HGZR","Proposal title":"Building Knowledge Graphs for Underrepresented Communities | 小眾社群的知識圖譜建立計畫",Abstract:`\`(EN)\`\r
This session will share the methods, tools, and approaches on building knowledge graphs for underrepresented communities, for example, we will analyse the efforts made on the Quechua community, for instance, by building the Quechua Language and Knowledge Base (https://qichwa.wikibase.cloud/)\r
\r
---\r
\`(ZH)\`\r
在本場次中我們將會分享為小眾社群創立知識圖譜的方法和工具；我們將會以奇楚亞社群為案例進行探討，如為奇楚亞社群建立專屬的語言和知識庫。(https://qichwa.wikibase.cloud/)`,Description:`\`(EN)\`\r
The availability of interoperable linguistics resources is nowadays more urgent in order to save and help under-resourced languages, and their communities. Despite the efforts, not all languages are represented, nor made accessible in a structured format. Furthermore, well-spread languages, like English or Spanish, took up an overwhelming majority on the Web, while indigenous communities and their resources received less attention. \r
\r
In order to overcome these limitations, we propose a methodology for creating knowledge graphs for under-resourced languages and their communities. By building knowledge graphs we allow the development of applications, the shaping of open educational resources, and the gathering of minority communities in a central space. For instance, we will show how to decentralize demographic contributions with Wikibase, which allows communities to design, create, curate and deploy a mature community-driven knowledge base. Furthermore, the Quechua Language and Knowledge Graph (https://qichwa.wikibase.cloud/) will be showcased. Finally, we will show how educators, students, researchers, and developers may work together for building inclusive applications and resources for all through knowledge graphs.\r
### Session Outcomes\r
* Learn how to build a knowledge graph for an under-resourced language\r
* Know approaches and tools that can help to preserve indigenous language and knowledge.\r
* Advantages of building/creating knowledge graphs.\r
\r
---\r
\`(ZH)\`\r
在現今的社會中，要拯救和幫助缺乏資源的語言及其社群，我們急需可交互工作的語言學資源。雖然有著來自多方的協助，但仍然有許多的語言尚未被記錄，更別說以結構化的形式向大眾公開。除此之外，強勢語言如英語或西班牙語佔據了網路上絕大部分的內容，而原住民及其資源則往往被忽略。\r
\r
為了要克服這些限制，我們提出了一個為缺乏資源的語言和社群建立知識圖譜的方法。藉由建立知識圖譜，我們將能協助未來應用的發展、型塑開放教育資源、並將少數族群們凝聚起來。我們將會示範如何藉由 Wikibase 來擺脫人口中心化限制以做出貢獻，這將協助社群設計、建立、策畫、並設置一個成熟並由社群主導的知識庫。除此之外，我們也將會與各位分享奇楚亞語言和知識圖譜 (https://qichwa.wikibase.cloud/) 。最後我們將會展示，教師、學生、研究員、以及開發者們可以如何透過知識圖譜來建立供所有人共享且具有包容性的應用和資源。\r
\r
**本次目標：**\r
\r
* 學習如何為缺乏資源的語言建立知識圖譜。\r
* 認識工具和方法來協助保存原住民語言和知識。\r
* 建立知識圖譜的好處。`,"Speaker names":["Elwin Huaman"],Room:{en:"Main program"},Start:"2023-10-29T20:45:00+00:00",End:"2023-10-30T05:15:00+08:00"},{ID:"RAEYYS","Proposal title":"The Impact of Wikidata-powered Infoboxes on Minority and Low-resourced Language Wikipedias in Africa | 維基數據資料欄對非洲少數語言維基百科版本的助益",Abstract:`\`(EN)\`\r
Adding infobox templates to Wikipedia articles can be difficult, particularly for smaller language Wikipedias that do not have existing templates. Modifying an existing template can be time-consuming and tedious. Databoxes, however, are sideboxes that can be powered by Wikidata and require less manual work by volunteers.\r
\r
The session will bring together different African language Wikipedia communities from West, East, and North Africa to learn more about how they can leverage the power of Wikidata to improve the quality of articles in their language wikis. It will provide insights into the usefulness of Databox for smaller and under-resourced African language Wikipedias, the importance of linking Wikidata items to Wikipedia articles, and the use of Databox on African language Wikipedias. The session will be useful for Wikimedia communities and will help promote the creation and improvement of articles in African languages.\r
\r
---\r
\`(ZH)\`\r
為維基百科條目增加資訊欄樣板，特別對小型語言來說，相當困難。對現有的樣版進行調整也是一件相當耗時費力的工作。不過，基於維基數據的資訊欄 (Wikidata-powered) 將會是一個十分具有效率的替代方案。\r
\r
在本會議中我們會集結非洲各個語言的維基百科社群，一起研究我們能如何使用維基數據的力量來提升其各自語言版本的維基百科。我們將會探索資訊欄能夠如何協助小型且缺乏資源的維基百科版本，以及將維基數據與維基百科鏈結的重要性和資訊欄在非洲語言維基百科版本的實際應用。本場次旨在協助維基媒體社群推廣、建立和提升非洲語系中維基百科條目的品質。`,Description:`\`(EN)\`\r
This proposal aims to share the impact of Wikidata-powered infoboxes on smaller language Wikipedias in Africa, with a focus on improving the user experience for contributors. By identifying barriers related to adding infoboxes and editing templates on Wikipedia articles, this research will lay the foundation for future support of small language communities in Africa.\r
\r
---\r
\`(ZH)\`\r
該專案旨在分享基於維基數據資料的資訊欄對小型語系維基百科的影響力，專注於提升貢獻者編輯時的體驗。透過尋找新增資訊欄以及編輯維基百科條目樣板時所會遭遇的困難，該專案將會是未來對非洲小型語系社群進行輔助工作的基石。`,"Speaker names":["Sadik Shahadu, User:Shahadusadik"],Room:{en:"Main program"},Start:"2023-10-29T05:30:00+00:00",End:"2023-10-29T14:00:00+08:00"},{ID:"RPUNGG","Proposal title":"Wikidata × Department of History National Cheng Kung University | 成功大學歷史系教學與 Wikidata",Abstract:`\`(EN)\`\r
In this session we will share our experience with National Cheng Kong University in “Wikimedia in the classroom of history education”(Starting from 2020 to date); Three major result are:\r
\r
1. Intergration: Introduce wikidata related courses into the curriculum of history education\r
2. Student Community: Establish the Open Knowledge Clube as the cradel for future development\r
3. Local Participation: Take part in local communicty’s activity and cooperate to held workshops.\r
\r
Materials used: Taiwan post-war medical history documentation, academic journals, and local lore.\r
\r
---\r
\`(ZH)\`\r
本次的分享以執行「國立成功大學歷史系的維基融入歷史教學與研究」相關計畫的期間（2020至今），與wikidata應用有關的成果為主，並分為三大部分，分別為：\r
\r
一、大學課程：從歷史教學到資料庫的原理與建置\r
二、學生社團：「開放知識社」作為教學與交流的基地\r
三、社區融入：參與當地日照據點的例行活動，以及與文教基金會合辦課程。\r
\r
應用素材的部分，則包含臺灣戰後醫療史文獻、學術期刊、社區刊物以及臺語俗諺等。`,Description:"","Speaker names":["王文岳 Allen Wang","張維芹 Chang Wei Qin","許宏彬","杜晏汝"],Room:{en:"Main program"},Start:"2023-10-29T01:30:00+00:00",End:"2023-10-29T10:10:00+08:00"},{ID:"TCGNRZ","Proposal title":"Wikidata for African Librarians - the journey so far | 非洲圖書館員的維基數據之旅",Abstract:`\`(EN)\`\r
Making library collections in Africa more visible, open and connected is a major objective of the “Promoting Open Knowledge practices in African Libraries through WikiData” project by AfLIA. The project which is funded by Wikimedia Foundation also aims to drive better understanding of open knowledge and linked data in the African Library sector. This is critical as the organization believes that access to knowledge is crucial for sustainable development and for creating more knowledge.\r
\r
---\r
\`(ZH)\`\r
AfLIA “透過維基數據在非洲圖書館中提倡開放知識” 計畫最主要的目標之一便是使非洲圖書館的館藏更加能見、開放、並且與更多的資料庫連接。這項由維基媒體基金會資助的計畫同時也將提升非洲圖書館領域對開放知識和鏈結資料的認知。這一點至關重要，因為該我們相信獲取知識對於永續發展和創造更多知識極為重要。`,Description:`\`(EN)\`\r
Innovations are more prone to happen when there is access to knowledge that can be built on to create more knowledge and value without restrictions. Sharing and linking of knowledge is critical for development. A principal reason why Africa is yet to have robust innovative ecosystems could be rightly attributed to lack of collaborative information sharing practices by researchers and the academia of what they are working on or what they have previously worked on and successes/failures encountered. One of the enduring lessons of the COVID-19 crisis is that the entire world is interconnected as what happens in a region or continent may most likely affect other parts of the world. This brings to the fore the need to open up knowledge to tackle common challenges so that no one is left behind.\r
\r
However, from cursory observations, opening up knowledge for the common good is yet to take root deeply among the academia and researchers in Africa. This could be attributed to a lack of knowledge about digital platforms that promote and drive open practices, understanding about the advantages as well as lack of knowledge and skills on how to successfully share what they know for the benefit of others on such platforms. With a focus on Librarians and other information practitioners within the Africa library sector working in different Library types - public, school, national, academic, research, special, parliamentary libraries etc., at least 200 librarians from at least 20 African countries have been admitted as participants in this course.\r
\r
The objectives include :\r
Share with the audience our unique motivation for engaging with Wikidata ;\r
Share with the audience what our challenges, successes and learning points are so far\r
Prompt a conversation on ways AfLIA can make an impact on the African library sector and the larger Wikimedia Community with this project especially in the area of driving Openness through linked data and access to knowledge in the continent ;\r
\r
---\r
\`(ZH)\`\r
如果人們可以自由的獲得創造知識所需要的知識，創新將是必然的結果。知識的分享和鏈結對於發展來說至關重要。非洲為何尚未有一個強健的創新生態系，其主因之一便是研究者或是說整個學術界，尚未有一套可以與他人分享其當前工作，以及過往成果資訊的工作系統。在 COVID-19 危機中我們所學到最重要的經驗便是，全球社群是一個相當緊密連接的共同體，某地所發生的事情，其餘波極有可能往外擴散至其他地區。這正是為甚麼我們需要開放知識的獲取，這樣我們才能一起同舟共濟面對挑戰。\r
\r
然而，從粗略地觀察中我們可以發現，將知識與大眾分享的思維尚未在非洲的學術界中生根。這來自許多原因，可能是因為缺乏對這類提倡開放運動的數位平台的知識，或是並不理解這類運動和平台所能提供的優勢，又或是缺少關鍵知識或技能來有效利用這類平台來與大眾分享其成果。聚焦於圖書館員和其他於圖書館領域的資訊工作者，該計畫吸引了超過 200 名來自超過 20 個非洲國家的公共圖書館、學校圖書館、國家圖書館、學術圖書館、研究圖書館、特殊圖書館、國會圖書館等圖書員一同加入。\r
\r
我們的目標包括：\r
\r
* 與大眾分享我們獨特的動機。\r
* 與大眾分享我們所遭遇的挑戰、成就、以及我們所學到的經驗。\r
* 促進 AfLIA 透過該計畫，可以如何影響非洲圖書館領域以及更加廣泛的維基媒體社群的討論，尤其是如何促進非洲地區鏈結數據和開放知識方面的討論。`,"Speaker names":["Jesse Asiedu-Akrofi","Alice Kibombo-Ekanya"],Room:{en:"Main program"},Start:"2023-10-29T15:30:00+00:00",End:"2023-10-30T00:00:00+08:00"},{ID:"URUBHD","Proposal title":"Tying Wikidata to English Wikipedia – experiences and proposals | 維基數據與維基百科的整合 - 經驗與建議分享",Abstract:`\`(EN)\`\r
Wikidata has always been tied to many other Wikimedia projects. Currently, the most important of its ties are probably with Wikimedia Commons, which hosts more than 95 million free access images, and English Wikipedia. With nearly 6.7 million articles, English Wikipedia is way ahead of almost all the other language Wikipedias in terms of article numbers. But whereas the ties between Wikidata and Commons are now strong, the ones with English Wikipedia are much weaker, and in need of strengthening. The presenter has been an editor of all three projects for many years. In this presentation, he will share some of his experiences in developing and using templates to tie Wikidata with English Wikipedia. Additionally, he will make proposals for expansions of, and improvements to, the ties between the two projects. As he will demonstrate, such modifications would likely also have a substantial flow-on effect on the ties between Wikidata and other language Wikipedias.\r
\r
---\r
\`(ZH)\`\r
維基數據一直都是一個與其他維基媒體專案具有高度整合性的平台。其中目前最主要的是與維基共享資源以及與英文維基百科的這兩組；在維基共享資源上擁有超過九千五百萬個自由開放的圖片，而英文維基百科則擁有將近六百七十萬篇條目，領先其他所有語言版本的維基百科。然而維基數據與這兩者的整合率並不一致，其中與英文維基百科的整合度極需強化。本場次的報告者在這三個平台皆耕耘多年，在本場次中，他將會分享他開發並使用範本來整合英文維基百科和維基數據的經驗。除此之外，他將會提出建議，如何來拓展並改善兩者之間的整合。他將會展示，這些改變將會有何種重大的擴張效應，影響其他語言版本的維基百科和維基數據之間的整合。`,Description:`\`(EN)\`\r
The presentation could be given either as a General Session (40 minutes) or a Sharing Session (20 minutes), depending upon the time available.\r
\r
The presenter, Jeremy Ludlow (User:Bahnfrend), resides in Perth, Western Australia. He has been an editor of English Wikipedia and Wikimedia Commons since November 2009, and of Wikidata since February 2013.\r
\r
Since becoming a Wikimedian, the presenter has always been involved in tying Wikimedia projects to each other. His first contribution to English Wikipedia was a translation of an article from German Wikipedia; his first contribution to Commons was a transfer of an image from German Wikipedia, so that it could be transcluded from Commons to both English and German Wikipedias (and also other Wikimedia projects).\r
\r
As an editor of both Wikidata and English Wikipedia, the presenter has set up and/or used a variety of templates for transcluding data from Wikidata directly to English Wikipedia articles, to some extent in collaboration with Butch Bustria, a well known Wikimedian from the Philippines. In particular, Butch has helped the presenter to adapt for use with East Timorese topics a template he created for Filipino topics; that template has also been translated by other Wikimedians into other languages for use on other language Wikipedias.\r
\r
As an editor of Wikimedia Commons, the presenter also has experience in using the well-known {{Wikidata Infobox}} on that project.\r
\r
The presentation reports on the presenter's experiences with these activities, and makes suggestions as to further work that could and should be done to increase and improve the existing ties between Wikidata and English Wikipedia.\r
\r
---\r
\`(ZH)\`\r
該場次根據時間的限制可以是一般場 (時長 40 分鐘) 或是經驗分享 (時長 20 分鐘)。\r
\r
該場次的講者 Jeremy Ludlow (USer: Bahnfrend) 定居於澳洲西部的伯斯。他自 2009 年起便開始其英文維基百科以及維基共享資源的編輯之路；並在 2013 年加入維基數據的編輯。\r
\r
自從加入維基媒體運動， Jeremy Ludlow 便一直持續的致力於將各個維基媒體專案相互連結。他在英文維基百科的第一個貢獻便是將一個條目從德文維基百科翻譯成為英文版本；他在維基共享資源上的第一個貢獻便是從德文維基百科中提取出一個圖片，使其能夠被其他語言的維基百科和其他維基媒體專案所使用。\r
\r
身為維基數據和英文維基百科的編輯者， Jeremy Ludlow 在與 Butch Bustria 一位十分有名的菲律賓維基人的共同合作中建立或使用了許多樣板來從維基數據中提取資料直接進入英文維基百科之中。舉例而言，Butch 協助 Jeremy Ludlow 將 East Timorese 轉換使用；East Timorese 也在後續被其他維基人翻譯作其他語言來在其他語言版本的維基百科上做使用。\r
\r
身為一名維基媒體共享資源的編輯者，Jeremy Ludlow 也十分熟悉 {{Wikidata Infobox}} 的應用。\r
\r
該場會議著重於 Jeremy Ludlow 在這三個平台上的活動經驗，並將會對未來工作以及對維基數據和英文維基百科整合強化做出可能的建議。`,"Speaker names":["Jeremy Ludlow"],Room:{en:"Main program"},Start:"2023-10-28T06:40:00+00:00",End:"2023-10-28T15:20:00+08:00"},{ID:"WXAXLA","Proposal title":"Are you modeling my gender? Results from the Wikidata Gender Diversity project",Abstract:"The [Wikidata Gender Diversity (WiGeDi)](https://wigedi.com) project aims to study how gender is represented in Wikidata, focusing on marginalized gender identities and adopting a queer and intersectional feminist perspective. This presentation will showcase results from the three strands of the project — model, data, and community. The *model* strand looks at how gender is represented in the Wikidata ontology, and how this representation has evolved over time. The *data* strand looks at the actual people who are described in Wikidata and at their gender identities. The *community* strand looks at how gender has been discussed by Wikidata users. The three main outcomes of the project, roughly corresponding to the three strands, will be the Wikidata Gender Timeline, a full timeline of gender modeling in Wikidata, the Wikidata Gender Dashboard, showcasing up-to-date statistics about gender identities of people who are described in the knowledge base, and the Wikidata Gender Talk corpus of user discussions. The project has been funded through the Wikimedia Research Fund.",Description:"","Speaker names":["Daniele Metilli"],Room:{en:"Main program"},Start:"2023-10-29T17:00:00+00:00",End:"2023-10-30T01:30:00+08:00"},{ID:"YSRSXP","Proposal title":"Biodiversity in underrepresented languages using crowdsourcing | 小眾語言中的生物多樣性 - 群眾工作模式的探索",Abstract:`\`(EN)\`\r
Biodiversity preservation and management is crucial, but many languages, especially those of indigenous communities, are underrepresented in scientific literature, hindering the documentation of local biodiversity. Crowdsourcing offers a solution to this problem, enabling individuals who speak these languages to share their knowledge via user-friendly platforms with features such as audio recording and image uploading.\r
\r
---\r
\`(ZH)\`\r
生物多樣性的保護和管理是一項非常重要的工作，然而許多的語言，尤其是那些原住民族群的聲音往往缺席於科學研究之中，對當地生物多樣性記錄的工作產生空缺。群眾工作模式為這個問題提供了一種可行的解決方案，透過一個使用者友善的平台，來自這些語言的使用者們可以透過錄音或是圖像紀錄的方式來與世界分享他們的知識。`,Description:`\`(EN)\`\r
The presentation will focus on the importance of biodiversity conservation and the role that underrepresented languages can play in this effort. The talk will explore how crowdsourcing can be used to collect and analyze data on biodiversity in regions where these languages are spoken.\r
\r
The presentation will begin with an overview of the current state of biodiversity loss and the need for action to protect endangered species and ecosystems. It will then move on to discuss the role that underrepresented languages can play in this effort, including the unique insights they can offer into local ecosystems and traditional knowledge about conservation practices.\r
\r
The talk will then delve into the potential of crowdsourcing to gather data on biodiversity in these regions. It will explore how crowdsourcing can help to overcome language barriers and allow local communities to contribute to the conservation effort. The presentation will also discuss some of the challenges of using crowdsourcing for biodiversity conservation, such as ensuring the quality and accuracy of the data collected.\r
\r
Finally, the talk will conclude with a discussion of some real-world examples of successful crowdsourcing projects for biodiversity conservation in underrepresented languages. These examples will illustrate the potential of crowdsourcing to help protect biodiversity, while also highlighting the need for continued support and investment in these efforts.\r
\r
---\r
\`(ZH)\`\r
在本場次中，我們將會專注於生物多樣性保護的重要性，以及這些小眾語言所能在其中扮演的角色。我們將會探索群眾工作模式可以如何來蒐集並分析某地區的生物多樣性資料。\r
\r
首先，我們會從生物多樣性保育工作的現狀說起，並解釋為甚麼我們需要發起行動來保護這些瀕危的物種與生態系。接著我們將會討論當地的原住民們可以在這工作中提供怎麼樣的協助，如提供其文化背景對當地生態系以及如何進行保育的獨特觀點。\r
\r
接著，我們將會深入探討群眾工作模式在協助蒐集生物多樣性資料的潛力。我們將會檢視群眾工作模式如何協助我們克服語言的隔閡並協助當地社群一起投入生態保育的工作。在本場會議中，我們也將討論使用群眾工作模式來進行生物多樣性保護工作所將遭遇的困難，例如如何確保資料的準確性以及品質。\r
\r
最後，我們將會使用真實的成功案例來進行探討。這些例子將會協助展示群眾工作模式在協助保護生物多樣性的潛力，同時展示持續支持和投入這類工作的重要性。`,"Speaker names":["Mohammed Kamal-Deen Fuseini (Dnshitobu)","AgnesAbah"],Room:{en:"Main program"},Start:"2023-10-29T06:00:00+00:00",End:"2023-10-29T14:30:00+08:00"},{ID:"YZGBBZ","Proposal title":"How can Wikidata help non-Mandarin Sinitic Languages on Wikimedia (digitial) development | Wikidata 會當按怎幫贊漢語非官話 ê 維基媒體 ê (數位) 發展",Abstract:`\`(EN)\`\r
Taiwanese Tagi is one of the National languages of Taiwan, it is called Taiwanese Min-nan by the Taiwanese government, and the ordinary people called the language Taiwanese(Tâi-oân-ōe). The other ethnic group like the Hakka people called the language Hoklo, and the Min-nan speaking people in the Philippines and Southeast Asia called the language they speak Lan-lang-oe or Hokkien-oe.  There are also other sister languages on WIkimedia-sprere like Cantonese, Eastern Min, and Hakka. I will talk about the current situation of these languages, mostly focusing on the language I am most familiar with - Taiwanese Taigi, and also talk about the situation of Cantonese, Eastern Min, and Hakka on Wikidata, Wikipedia, and other Wikimedia projects. It is also worth mentioning OpenStreetMap due to its multilingual approach and cross-linked nature to Wikidata and other Wikimedia projects in those southern Sinitic languages. And the future of those languages on Wikimedia-spere.\r
\r
---\r
\`(NAN-TW)\`\r
台灣台語，進前 ê 官方名號 sī 台灣閩南語，民間慣勢 ū 講臺灣話，別 ê 族群親像客人稱呼福佬話，臺灣海外 sī 叫做福建話抑是咱人話。其他 tī 維基媒體 ū 專案 ê 猶閣 ū 廣東話、閩東話 kah 客人話 ê 維基百科等等。這場演講 ài 探討社群 ê 情形，除了較認捌 ê 台灣台語 ê 臺灣本地發展，嘛參照其他 ê 語言 ê 維基百科甚至 sī Wikidata 專案，各種計畫的發展狀況，比如講 Wikidata、Wikidata Lexeme、Wikipedia、Wiki Commons，猶閣 ū 姊妹仔計畫親像 OpenStreetMap ê 整合。嘛會講維基媒體姊妹仔 ê 南方漢語族 ê  發展狀況。做啥物活動 kah 寫出來啥內容，提出未來可能 ê 發展方向 kah 方式。`,Description:"","Speaker names":["Dennis Raylin Chen"],Room:{en:"Main program"},Start:"2023-10-29T06:30:00+00:00",End:"2023-10-29T15:00:00+08:00"},{ID:"ZGHESA","Proposal title":"Wikidata and the College Life | Wikidata如何影響我們的大學生活？",Abstract:"分享個人在大學課程中接觸wikidata的歷程，以及到大學社團推廣wikidata遇到的難題，與社團未來的計畫。",Description:`\`(EN)\`\r
This session will be in two part:\r
\r
1. As an humanities student, the journey of how wikidata enter our life.\r
2. The challenges and opportunities while promoting wikidata in university.\r
3. After establishing the club, growing from a receiver to a giver, we have found out that it is difficult to cultivate long term contributor. To improve this, we expect to hold more small scale gathering to strenghten the participation motivation. We hope to hear from your experience as well, what can be done to further grow our community.\r
\r
---\r
\`(ZH)\`\r
這場分享預計分成兩個部分：\r
1. 作為一個人文科系的學生，在大學課程中接觸wikidata的歷程\r
2. 大學社團推廣wikidata遇到的難題與因應之道\r
在大學成立社團後，從被授課的角色到授課角色的轉變中，我們發現wikidata教學總會流為一次性的課程成果，會持續在社群貢獻的人並不多。我們預計透過密集的社群小聚計畫改善這樣的狀況，期許藉由這次論壇的機會向大家請教。`,"Speaker names":["張維芹 Chang Wei Qin"],Room:{en:"Main program"},Start:"2023-10-29T02:30:00+00:00",End:"2023-10-29T11:00:00+08:00"}],ki=[{"Proposal title":"Day 1 Opening","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T09:00:00+08:00",End:"2023-10-28T09:30:00+08:00"},{"Proposal title":"Lunch Time","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T12:00:00+08:00",End:"2023-10-28T13:30:00+08:00"},{"Proposal title":"break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T09:30:00+08:00",End:"2023-10-28T10:00:00+08:00"},{"Proposal title":"break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T14:30:00+08:00",End:"2023-10-28T14:40:00+08:00"},{"Proposal title":"Tea Break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T15:20:00+08:00",End:"2023-10-28T16:00:00+08:00"},{"Proposal title":"break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T16:40:00+08:00",End:"2023-10-28T16:45:00+08:00"},{"Proposal title":"Day 1 Closing","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 1"},Start:"2023-10-28T16:45:00+08:00",End:"2023-10-28T17:00:00+08:00"},{"Proposal title":"Day 2 Opening","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T09:00:00+08:00",End:"2023-10-29T09:10:00+08:00"},{"Proposal title":"break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T11:00:00+08:00",End:"2023-10-29T11:10:00+08:00"},{"Proposal title":"Launch Time","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T12:00:00+08:00",End:"2023-10-29T13:30:00+08:00"},{"Proposal title":"Tea Break / Wikidata Birtday Celebrete","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T15:30:00+08:00",End:"2023-10-29T16:00:00+08:00"},{"Proposal title":"Lighting Talk","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T16:00:00+08:00",End:"2023-10-29T16:45:00+08:00"},{"Proposal title":"Day 2 Closing","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T16:45:00+08:00",End:"2023-10-29T17:00:00+08:00"},{"Proposal title":"break","Session type":{en:"General Session","zh-tw":"議程"},Description:"break",Abstract:"",Room:{en:"Day 2"},Start:"2023-10-29T11:50:00+08:00",End:"2023-10-29T12:00:00+08:00"}],bi={class:"session-item-content"},vi={class:"session-item-content-title"},Ti={key:0},Wi={key:1,class:"session-break"},_i={key:0,class:"session-item-content-speaker"},Si={class:"session-item-content-time"},Di={class:"session-item-info-wrapper"},Ai=p("h1",null,[p("svg",{viewBox:"0 0 352 512",width:"1.2em",height:"1.2em"},[p("path",{fill:"currentColor",d:"m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})])],-1),Ei=[Ai],Pi={class:"info-item"},Ii={class:"font-size--m"},Ci={class:"font-size--m"},xi=p("br",null,null,-1),Li=p("h2",null,"Abstract",-1),Ri={class:"font-size--m",style:{"font-size":"1.15em"}},Hi=p("br",null,null,-1),Mi=p("h2",null,"Description",-1),Oi={class:"font-size--m",style:{"font-size":"1.15em"}},Ue=ce({__name:"SessionInfo",props:{session:{type:Object,required:!0},programID:{required:!0}},setup(e){const t=e,n=ht(),a=m=>{let w=m.Start,v=Number(S(w,"DD").value),E=Number(S(w,"HH").value),l=v*100+E;return console.log(l),l<2818?"Day 1":l<2906?"Day 1.5":l<2918?"Day 2":"Day 2.5"},{session:i,programID:r}=lt(t),o=dt(!1);function s(m){let w=S(m.Start,"_HHmm"),v=S(m.End,"_HHmm");return Y(m,"Room.en"),{"grid-column-start":a(m).replace(" ","_").replace(".","_"),"grid-row":`${w.value} / ${v.value}`}}function c(m){return(m["Speaker names"]??[""]).join("、")}function h(m){return m["Proposal title"]==="break"}function T(m){y(m)&&(o.value===!1?(o.value=!o.value,n.push(`/program/${m.ID}`)):(o.value=!o.value,n.push("/program")))}function W(m){let w=S(m.Start,"HH:mm"),v=S(m.End,"HH:mm");return`${w.value}~${v.value}`}function y(m){return m.Description!=="break"&&m.Description!==""||m.Abstract!==""}return ct(()=>{r===i.ID&&i.ID!==void 0&&(console.log("TOGGLE!"),T(i))}),(m,w)=>(f(),k("div",{class:ut(["session-item",{"session-break":h(g(i)),"info-showable":y(g(i)),"info-unshowable":!y(g(i))}]),style:L(s(g(i))),onClick:w[2]||(w[2]=v=>T(g(i)))},[p("div",bi,[p("div",vi,[h(g(i))?(f(),k("p",Wi,A(g(i)["Proposal title"]),1)):(f(),k("h3",Ti,A(g(i)["Proposal title"]),1))]),h(g(i))?G("",!0):(f(),k("div",_i,[p("span",Si,A(c(g(i))),1)]))]),o.value===!0?(f(),k("div",{key:0,class:"session-item-info",onClick:w[1]||(w[1]=ke(()=>{},["stop"]))},[p("div",Di,[p("div",{class:"info-close",onClick:w[0]||(w[0]=ke(v=>T(g(i)),["stop"]))},Ei),p("div",Pi,[p("h1",null,A(g(i)["Proposal title"]),1),p("p",Ii,A(c(g(i))),1),p("p",Ci,A(W(g(i))),1),xi,g(i).Abstract!==""?(f(),k(D,{key:0},[Li,p("p",Ri,A(g(i).Abstract.replace("`(EN)`","English").replace("`(ZH)`","中文").replace("---","")),1),Hi],64)):G("",!0),g(i).Description!==""?(f(),k(D,{key:1},[Mi,p("p",Oi,A(g(i).Description.replace("`(EN)`","English").replace("`(ZH)`","中文").replace("---","")),1)],64)):G("",!0)])])])):G("",!0)],6))}}),Ni={class:"session article"},$i={class:"session-list sesssion-daytime"},Bi=p("div",{class:"session-daynight",style:{gridRowStart:"_daytime",gridColumn:"Day_1 / _time2"}},[p("h2",null,"Day Time")],-1),ji={class:"session-time-item-content"},Fi={class:"session-time-item-content"},Gi={class:"session-list sesssion-nighttime"},Zi=p("div",{class:"session-daynight",style:{gridRowStart:"_nighttime",gridColumn:"Day_1_5 / _time2"}},[p("h2",null,"Night Time")],-1),qi={class:"session-time-item-content"},zi={class:"session-time-item-content"},Ui=ce({__name:"SessionList",setup(e){const t=pt(),n=["Day 1","Day 2"],a=["Day 1.5","Day 2.5"],i=t.params.programID,r=l=>{let u=l.Start,d=Number(S(u,"DD").value),_=Number(S(u,"HH").value),x=d*100+_;return console.log(x),x<2818?"Day 1":x<2906?"Day 1.5":x<2918?"Day 2":"Day 2.5"},o=P(()=>{let l={"Day 1":[],"Day 1.5":[],"Day 2":[],"Day 2.5":[],others:[]};return yi.forEach(u=>{let d=r(u)??"others";d=="others"?l.others.push(C(u)):d=="Day 1"?l["Day 1"].push(C(u)):d=="Day 1.5"?l["Day 1.5"].push(C(u)):d=="Day 2"?l["Day 2"].push(C(u)):l["Day 2.5"].push(C(u))}),ki.forEach(u=>{let d=Y(u,"Room.en")??"others";d=="others"?l.others.push(C(u)):d=="Day 1"?l["Day 1"].push(C(u)):d=="Day 1.5"?l["Day 1.5"].push(C(u)):d=="Day 2"?l["Day 2"].push(C(u)):l["Day 2.5"].push(C(u))}),l["Day 1"]=q(l["Day 1"],u=>new Date(u.Start)),l["Day 1.5"]=q(l["Day 1.5"],u=>new Date(u.Start)),l["Day 2"]=q(l["Day 2"],u=>new Date(u.Start)),l["Day 2.5"]=q(l["Day 2.5"],u=>new Date(u.Start)),console.log(l),l}),s=P(()=>[...new Set([...o.value["Day 1"].map(({Start:l})=>S(l,"HHmm").value),...o.value["Day 1"].map(({End:l})=>S(l,"HHmm").value)])].sort()),c=P(()=>[...new Set([...o.value["Day 2"].map(({Start:l})=>S(l,"HHmm").value),...o.value["Day 2"].map(({End:l})=>S(l,"HHmm").value)])].sort()),h=P(()=>[...new Set([...s.value,...c.value])].sort()),T=P(()=>[...new Set([...o.value["Day 1.5"].map(({Start:l})=>S(l,"HHmm").value),...o.value["Day 1.5"].map(({End:l})=>S(l,"HHmm").value)])].sort()),W=P(()=>[...new Set([...o.value["Day 2.5"].map(({Start:l})=>S(l,"HHmm").value),...o.value["Day 2.5"].map(({End:l})=>S(l,"HHmm").value)])].sort()),y=P(()=>[...new Set([...T.value,...W.value])].sort((l,u)=>{let d=Number(l),_=Number(u);return d=d>1200?d:d+2400,_=_>1200?_:_+2400,d-_})),m=P(()=>{let u=["[_time1]","auto",["[Day_1]","[Day_2]"].join(" 1fr ")+" 1fr","[_time2]","auto","[_end]"].join(" ");return console.log(u),u}),w=P(()=>{let l=h.value.map(d=>`[_${d}]`);return["[_day]","[_daytime]",["[decoration-line-start]"],...l,"[_end]"].join(" auto ")}),v=P(()=>{let u=["[_time1]","auto",["[Day_1_5]","[Day_2_5]"].join(" 1fr ")+" 1fr","[_time2]","auto","[_end]"].join(" ");return console.log(`NIght: ${u}`),u}),E=P(()=>{let l=y.value.map(d=>`[_${d}]`);return["[_night]","[_nighttime]",["[decoration-line-start]"],...l,"[_end]"].join(" auto ")});return(l,u)=>(f(),k("div",Ni,[p("div",$i,[p("div",{class:"session-grid",style:L({gridTemplateColumns:g(m),gridTemplateRows:g(w)})},[(f(),k(D,null,I(n,d=>p("div",{class:"session-day",key:d,style:L({gridRowStart:"_day",gridColumnStart:d.replace(" ","_")})},[p("h2",null,A(d),1)],4)),64)),Bi,(f(!0),k(D,null,I(g(s),d=>(f(),k("div",{class:"session-time-item",key:d,style:L({gridRowStart:`_${d}`,gridColumnStart:"_time1"})},[p("div",ji,A(d.slice(0,2)+":"+d.slice(2)),1)],4))),128)),(f(!0),k(D,null,I(g(c),d=>(f(),k("div",{class:"session-time-item",key:d,style:L({gridRowStart:`_${d}`,gridColumnStart:"_time2"})},[p("div",Fi,A(d.slice(0,2)+":"+d.slice(2)),1)],4))),128)),(f(),k(D,null,I(n,d=>(f(),k(D,{key:d},[(f(!0),k(D,null,I(g(o)[d],_=>(f(),$(Ue,{key:_,session:_,programID:g(i)},null,8,["session","programID"]))),128))],64))),64))],4)]),p("div",Gi,[p("div",{class:"session-grid",style:L({gridTemplateColumns:g(v),gridTemplateRows:g(E)})},[(f(),k(D,null,I(a,d=>p("div",{class:"session-day",key:d,style:L({gridRowStart:"_night",gridColumnStart:d.replace(" ","_").replace(".","_")})},[p("h2",null,A(d),1)],4)),64)),Zi,(f(!0),k(D,null,I(g(T),d=>(f(),k("div",{class:"session-time-item",key:d,style:L({gridRowStart:`_${d}`,gridColumnStart:"_time1"})},[p("div",qi,A(d.slice(0,2)+":"+d.slice(2)),1)],4))),128)),(f(!0),k(D,null,I(g(W),d=>(f(),k("div",{class:"session-time-item",key:d,style:L({gridRowStart:`_${d}`,gridColumnStart:"_time2"})},[p("div",zi,A(d.slice(0,2)+":"+d.slice(2)),1)],4))),128)),(f(),k(D,null,I(a,d=>(f(),k(D,{key:d},[(f(!0),k(D,null,I(g(o)[d],_=>(f(),$(Ue,{key:_,session:_,programID:g(i)},null,8,["session","programID"]))),128))],64))),64))],4)])]))}}),Ki={class:"main-viewport"},Qi=ce({__name:"ProgramInfo",setup(e){yt({mobile:600,tablet:900,laptop:1024,desktop:1280}).smaller("tablet");const n=kt(),a={"zh-TW":be(()=>We(()=>import("./program.component-7ceeabca.js"),["assets/program.component-7ceeabca.js","assets/app-65aad429.js","assets/index-849f8b60.css"])),en:be(()=>We(()=>import("./CFP.component-31db7bca.js"),["assets/CFP.component-31db7bca.js","assets/app-65aad429.js","assets/index-849f8b60.css"]))},i=bt(Y(a,vt(n.value)??"en")??a.en);return(r,o)=>{const s=Tt;return f(),k("div",null,[te(s),p("main",Ki,[(f(),$(Te,null,{default:ve(()=>[(f(),$(mt(g(i)())))]),_:1})),(f(),$(Te,null,{default:ve(()=>[te(Ui)]),_:1}))]),te(_t)])}}});const Vi=Wt(Qi,[["__scopeId","data-v-123531f1"]]);export{Vi as default};
