function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.44d9437a.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;p=f?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,$=S.bind,O=S.call,j=f&&$.bind(O,O),L=(E=f?function(e){return e&&j(e)}:function(e){return e&&function(){return O.apply(e,arguments)}})({}.toString),x=E("".slice);w=function(e){return x(L(e),8,-1)};var M=Object,P=E("".split);k=d((function(){return!M("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?P(e,""):M(e)}:M;var T,I=TypeError;T=function(e){if(null==e)throw I("Can't call method on "+e);return e},_=function(e){return k(T(e))};var H,q,N,F;F=function(e){return"function"==typeof e},N=function(e){return"object"==typeof e?null!==e:F(e)};var C,A={},R=function(e){return F(e)?e:void 0};C=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var W,U,G,z={};z=C("navigator","userAgent")||"";var B,J,Y=c.process,V=c.Deno,Q=Y&&Y.versions||V&&V.version,K=Q&&Q.v8;K&&(J=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&z&&(!(B=z.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=z.match(/Chrome\/(\d+)/))&&(J=+B[1]),G=J,U=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),W=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=Object;A=W?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return F(t)&&D(t.prototype,X(e))};var Z,ee,te,ne=String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=TypeError;ee=function(e){if(F(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=TypeError;ie=function(e,t){var n,r;if("string"===t&&F(n=e.toString)&&!N(r=p(n,e)))return r;if(F(n=e.valueOf)&&!N(r=p(n,e)))return r;if("string"!==t&&F(n=e.toString)&&!N(r=p(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae;var se,ce={},ue=Object.defineProperty;se=function(e,t){try{ue(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var le=c["__core-js_shared__"]||se("__core-js_shared__",{});ce=le,(ae=function(e,t){return ce[e]||(ce[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.0/LICENSE",source:"https://github.com/zloirock/core-js"});var de,fe={},pe=Object;de=function(e){return pe(T(e))};var he=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return he(de(e),t)};var ge,ve=0,ye=Math.random(),me=E(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+me(++ve+ye,36)};var be=ae("wks"),_e=c.Symbol,we=_e&&_e.for,ke=W?_e:_e&&_e.withoutSetter||ge,Ee=TypeError,Se=function(e){if(!fe(be,e)||!U&&"string"!=typeof be[e]){var t="Symbol."+e;U&&fe(_e,e)?be[e]=_e[e]:be[e]=W&&we?we(t):ke(t)}return be[e]}("toPrimitive");q=function(e,t){if(!N(e)||A(e))return e;var n,r=Z(e,Se);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!N(n)||A(n))return n;throw Ee("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},H=function(e){var t=q(e,"string");return A(t)?t:t+""};var $e,Oe,je=c.document,Le=N(je)&&N(je.createElement);Oe=function(e){return Le?je.createElement(e):{}},$e=!l&&!d((function(){return 7!=Object.defineProperty(Oe("div"),"a",{get:function(){return 7}}).a}));var xe,Me,Pe=Object.getOwnPropertyDescriptor,Te=s=l?Pe:function(e,t){if(e=_(e),t=H(t),$e)try{return Pe(e,t)}catch(e){}if(fe(e,t))return b(!p(h,e,t),e[t])},Ie={};Me=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var He,qe=String,Ne=TypeError;He=function(e){if(N(e))return e;throw Ne(qe(e)+" is not an object")};var Fe=TypeError,Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;xe=l?Me?function(e,t,n){if(He(e),t=H(t),He(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ae(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(He(e),t=H(t),He(n),$e)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Fe("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ie=l?function(e,t,n){return xe(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Re,De,We=Function.prototype,Ue=l&&Object.getOwnPropertyDescriptor,Ge=fe(We,"name"),ze={EXISTS:Ge,PROPER:Ge&&"something"===function(){}.name,CONFIGURABLE:Ge&&(!l||l&&Ue(We,"name").configurable)}.CONFIGURABLE,Be={},Je=E(Function.toString);F(ce.inspectSource)||(ce.inspectSource=function(e){return Je(e)}),Be=ce.inspectSource;var Ye,Ve,Qe=c.WeakMap;Ve=F(Qe)&&/native code/.test(Be(Qe));var Ke,Xe=ae("keys");Ke=function(e){return Xe[e]||(Xe[e]=ge(e))};var Ze={};Ze={};var et,tt,nt,rt=c.TypeError,it=c.WeakMap;if(Ve||ce.state){var ot=ce.state||(ce.state=new it),at=E(ot.get),st=E(ot.has),ct=E(ot.set);et=function(e,t){if(st(ot,e))throw new rt("Object already initialized");return t.facade=e,ct(ot,e,t),t},tt=function(e){return at(ot,e)||{}},nt=function(e){return st(ot,e)}}else{var ut=Ke("state");Ze[ut]=!0,et=function(e,t){if(fe(e,ut))throw new rt("Object already initialized");return t.facade=e,Ie(e,ut,t),t},tt=function(e){return fe(e,ut)?e[ut]:{}},nt=function(e){return fe(e,ut)}}var lt=(Ye={set:et,get:tt,has:nt,enforce:function(e){return nt(e)?tt(e):et(e,{})},getterFor:function(e){return function(t){var n;if(!N(t)||(n=tt(t)).type!==e)throw rt("Incompatible receiver, "+e+" required");return n}}}).enforce,dt=Ye.get,ft=Object.defineProperty,pt=l&&!d((function(){return 8!==ft((function(){}),"length",{value:8}).length})),ht=String(String).split("String"),gt=De=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!fe(e,"name")||ze&&e.name!==t)&&(l?ft(e,"name",{value:t,configurable:!0}):e.name=t),pt&&n&&fe(n,"arity")&&e.length!==n.arity&&ft(e,"length",{value:n.arity});try{n&&fe(n,"constructor")&&n.constructor?l&&ft(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=lt(e);return fe(r,"source")||(r.source=ht.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return F(this)&&dt(this).source||Be(this)}),"toString"),Re=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(F(n)&&De(n,o,r),r.global)i?e[t]=n:se(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:xe(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var vt,yt,mt,bt,_t,wt={},kt={},Et=Math.ceil,St=Math.floor;kt=Math.trunc||function(e){var t=+e;return(t>0?St:Et)(t)},_t=function(e){var t=+e;return t!=t||0===t?0:kt(t)};var $t=Math.max,Ot=Math.min;bt=function(e,t){var n=_t(e);return n<0?$t(n+t,0):Ot(n,t)};var jt,Lt,xt=Math.min;Lt=function(e){return e>0?xt(_t(e),9007199254740991):0},jt=function(e){return Lt(e.length)};var Mt=function(e){return function(t,n,r){var i,o=_(t),a=jt(o),s=bt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Pt={includes:Mt(!0),indexOf:Mt(!1)}.indexOf,Tt=E([].push);mt=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!fe(Ze,n)&&fe(r,n)&&Tt(o,n);for(;t.length>i;)fe(r,n=t[i++])&&(~Pt(o,n)||Tt(o,n));return o};var It,Ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");yt=Object.getOwnPropertyNames||function(e){return mt(e,Ht)},It=Object.getOwnPropertySymbols;var qt=E([].concat);wt=C("Reflect","ownKeys")||function(e){var t=yt(He(e));return It?qt(t,It(e)):t},vt=function(e,t,n){for(var r=wt(t),i=xe,o=s,a=0;a<r.length;a++){var c=r[a];fe(e,c)||n&&fe(n,c)||i(e,c,o(t,c))}};var Nt={},Ft=/#|\.prototype\./,Ct=function(e,t){var n=Rt[At(e)];return n==Wt||n!=Dt&&(F(t)?d(t):!!t)},At=Ct.normalize=function(e){return String(e).replace(Ft,".").toLowerCase()},Rt=Ct.data={},Dt=Ct.NATIVE="N",Wt=Ct.POLYFILL="P";Nt=Ct,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||se(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Te(n,r))&&a.value:n[r],!Nt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;vt(o,i)}(e.sham||i&&i.sham)&&Ie(o,"sham",!0),Re(n,r,o,e)}};var Ut,Gt={},zt=Function.prototype,Bt=zt.apply,Jt=zt.call;Gt="object"==typeof Reflect&&Reflect.apply||(f?Jt.bind(Bt):function(){return Jt.apply(Bt,arguments)});var Yt,Vt=E(E.bind);Yt=function(e,t){return ee(e),void 0===t?e:f?Vt(e,t):function(){return e.apply(t,arguments)}};var Qt={};Qt=C("document","documentElement");var Kt={};Kt=E([].slice);var Xt,Zt=TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var tn;tn="process"==w(c.process);var nn,rn,on,an,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,dn=c.Function,fn=c.MessageChannel,pn=c.String,hn=0,gn={};try{nn=c.location}catch(e){}var vn=function(e){if(fe(gn,e)){var t=gn[e];delete gn[e],t()}},yn=function(e){return function(){vn(e)}},mn=function(e){vn(e.data)},bn=function(e){c.postMessage(pn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=F(e)?e:dn(e),n=Kt(arguments,1);return gn[++hn]=function(){Gt(t,void 0,n)},rn(hn),hn},cn=function(e){delete gn[e]},tn?rn=function(e){un.nextTick(yn(e))}:ln&&ln.now?rn=function(e){ln.now(yn(e))}:fn&&!en?(an=(on=new fn).port2,on.port1.onmessage=mn,rn=Yt(an.postMessage,an)):c.addEventListener&&F(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!d(bn)?(rn=bn,c.addEventListener("message",mn,!1)):rn="onreadystatechange"in Oe("script")?function(e){Qt.appendChild(Oe("script")).onreadystatechange=function(){Qt.removeChild(this),vn(e)}}:function(e){setTimeout(yn(e),0)});var _n=(Ut={set:sn,clear:cn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==_n},{clearImmediate:_n});var wn=Ut.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});var kn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=$(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function $(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=kn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=kn:Function("r","regeneratorRuntime = r")(kn)}const En=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},Sn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},$n=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},On=function(e=Sn.search.page){Sn.search.page=e;const t=(e-1)*Sn.search.resultsPerPage,n=e*Sn.search.resultsPerPage;return Sn.search.results.slice(t,n)},jn=function(){localStorage.setItem("bookmarks",JSON.stringify(Sn.bookmarks))},Ln=function(e){Sn.bookmarks.push(e),e.id===Sn.recipe.id&&(Sn.recipe.bookmarked=!0),jn()};!function(){const e=localStorage.getItem("bookmarks");e&&(Sn.bookmarks=JSON.parse(e))}();var xn;xn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Mn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parantElement.insertAdjacentHTML("afterbegin",n)}_clear(){this._parantElement.innerHTML=""}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parantElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpinner(){const e=`\n          <div class="spinner">\n            <svg>\n              <use href="${n(xn)}#icon-loader"></use>\n            </svg>\n          </div> \n          `;this._parantElement.innerHTML="",this._parantElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(xn)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parantElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._Message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(xn)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parantElement.insertAdjacentHTML("afterbegin",t)}}var Pn;function Tn(e,t,n,r,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(u,c,n,r)}Pn=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,o=r[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),n=a[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const o=!0,a=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return Tn(l,(u-1)*s,r,i,o)}(i,n,e,o,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return Tn(i,o,t,n,r)}(i,o,t)};var In=new class extends Mn{_parantElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_Message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerServings(e){this._parantElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.updateTo;r<=0||e(r)}))}addHandlerAddBookmark(e){this._parantElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(xn)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(xn)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n              <svg>\n                <use href="${n(xn)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n              <svg>\n                <use href="${n(xn)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${n(xn)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(xn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n(xn)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(xn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?n(Pn)(e.quantity):""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}};var Hn=new class{_parantElement=document.querySelector(".search");getQuery(){const e=this._parantElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parantElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parantElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var qn=new class extends Mn{_parantElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            \n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n                <use href="${n(xn)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var Nn=new class extends Mn{_parantElement=document.querySelector(".results");_errorMessage="No recipes found to your query! Please try again";_Message="";_generateMarkup(){return this._data.map((e=>qn.render(e,!1))).join("")}};var Fn=new class extends Mn{_parantElement=document.querySelector(".pagination");addHandlerClick(e){this._parantElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto = "${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(xn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n        `:e===t&&t>1?` \n        <button data-goto = "${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(xn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<t?` \n        <button data-goto = "${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(xn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto = "${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(xn)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var Cn=new class extends Mn{_parantElement=document.querySelector(".bookmarks__list");_errorMessage="No book marks yet. Find a nice recipe and bookmark it ;)";_Message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>qn.render(e,!1))).join("")}};var An=new class extends Mn{_parantElement=document.querySelector(".upload");_Message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parantElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Rn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;In.renderSpinner(),Nn.update(On()),Cn.update(Sn.bookmarks),await async function(e){try{const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=04cebc2b-488e-43af-8a6e-5dd0f7c9f869`);Sn.recipe=$n(t),Sn.bookmarks.some((t=>t.id===e))?Sn.recipe.bookmarked=!0:Sn.recipe.bookmarked=!1}catch(e){throw e}}(e),In.render(Sn.recipe)}catch(e){In.renderError()}},Dn=async function(){try{Nn.renderSpinner();const e=Hn.getQuery();if(!e)return;await async function(e){try{Sn.search.query=e;const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=04cebc2b-488e-43af-8a6e-5dd0f7c9f869`);Sn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Sn.search.page=1}catch(e){throw e}}(e),Nn.render(On()),Fn.render(Sn.search)}catch(e){console.log(e)}},Wn=function(e){Nn.render(On(e)),Fn.render(Sn.search)},Un=function(e){!function(e){Sn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Sn.recipe.servings})),Sn.recipe.servings=e}(e),In.update(Sn.recipe)},Gn=function(){Sn.recipe.bookmarked?Sn.recipe.bookmarked&&function(e){const t=Sn.bookmarks.findIndex((t=>t.id===e));Sn.bookmarks.splice(t,1),e===Sn.recipe.id&&(Sn.recipe.bookmarked=!1),jn()}(Sn.recipe.id):Ln(Sn.recipe),In.update(Sn.recipe),Cn.render(Sn.bookmarks)},zn=function(){Cn.render(Sn.bookmarks)},Bn=async function(e){try{An.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format : ");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await En("https://forkify-api.herokuapp.com/api/v2/recipes/?key=04cebc2b-488e-43af-8a6e-5dd0f7c9f869",n);Sn.recipe=$n(r),Ln(Sn.recipe)}catch(e){throw e}}(e),In.render(Sn.recipe),An.renderMessage(),Cn.render(Sn.bookmarks),window.history.pushState(null,"",`#${Sn.recipe.id}`),setTimeout((function(){An.toggleWindow()}),2500)}catch(e){An.renderError(e.message)}};Cn.addHandlerRender(zn),In.addHandlerRender(Rn),In.addHandlerServings(Un),In.addHandlerAddBookmark(Gn),Hn.addHandlerSearch(Dn),Fn.addHandlerClick(Wn),An.addHandlerUpload(Bn);
//# sourceMappingURL=index.44d9437a.js.map
