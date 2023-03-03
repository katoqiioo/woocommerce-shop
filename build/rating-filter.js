this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["rating-filter"]=function(e){function t(t){for(var c,l,a=t[0],s=t[1],i=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={45:0,1:0},o=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;return o.push([487,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)({}),o=()=>{const{wrapper:e}=Object(c.useContext)(r);return t=>{e&&e.current&&(e.current.hidden=!t)}}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(13);function r(e,t){const n=Object(c.useRef)();return Object(c.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},11:function(e,t){e.exports=window.wp.primitives},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(10),r=n(7),o=n(0),l=n(43);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:s={},shouldSelect:i=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const u=Object(o.useRef)({results:[],isLoading:!0}),b=Object(l.a)(s),d=Object(l.a)(a),p=(()=>{const[,e]=Object(o.useState)();return Object(o.useCallback)(t=>{e(()=>{throw t})},[])})(),g=Object(r.useSelect)(e=>{if(!i)return null;const r=e(c.COLLECTIONS_STORE_KEY),o=[t,n,b,d],l=r.getCollectionError(...o);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");p(l)}return{results:r.getCollection(...o),isLoading:!r.hasFinishedResolution("getCollection",o)}},[t,n,d,b,i]);return null!==g&&(u.current=g),u.current}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(5),r=n(56),o=n(32),l=n(76);const a=e=>{if(!Object(r.b)())return{className:"",style:{}};const t=Object(o.b)(e)?e:{},n=Object(l.a)(t.style);return Object(c.__experimentalUseBorderProps)({...t,style:n})}},12:function(e,t){e.exports=window.wp.compose},13:function(e,t){e.exports=window.React},131:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),l=n.n(o),a=n(30);n(170),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(r.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:s=Object(r.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{className:l()("wc-block-components-filter-reset-button",t),onClick:o},Object(c.createElement)(a.a,{label:n,screenReaderLabel:s}))}},132:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),l=n.n(o),a=n(30);n(171),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
s=Object(r.__)("Apply","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:u=Object(r.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(c.createElement)("button",{type:"submit",className:l()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:i},Object(c.createElement)(a.a,{label:s,screenReaderLabel:u}))}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},14:function(e,t){e.exports=window.wc.blocksCheckout},158:function(e,t,n){"use strict";var c=n(6),r=n.n(c),o=n(0),l=n(317),a=n(4),s=n.n(a);n(201),t.a=e=>{let{className:t,style:n,suggestions:c,multiple:a=!0,saveTransform:i=(e=>e.trim().replace(/\s/g,"-")),messages:u={},validateInput:b=(e=>c.includes(e)),label:d="",...p}=e;return Object(o.createElement)("div",{className:s()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!a}),style:n},Object(o.createElement)(l.a,r()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:i,maxLength:a?void 0:1,suggestions:c,messages:u},p)))}},159:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),l=n.n(o),a=n(14);n(202),t.a=e=>{let{className:t,onChange:n,options:o=[],checked:s=[],isLoading:i=!1,isDisabled:u=!1,limit:b=10}=e;const[d,p]=Object(c.useState)(!1),g=Object(c.useMemo)(()=>[...Array(5)].map((e,t)=>Object(c.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),f=Object(c.useMemo)(()=>{const e=o.length-b;return!d&&Object(c.createElement)("li",{key:"show-more",className:"show-more"},Object(c.createElement)("button",{onClick:()=>{p(!0)},"aria-expanded":!1,"aria-label":Object(r.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(r._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(r.sprintf)(
/* translators: %s number of options to reveal. */
Object(r._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),O=Object(c.useMemo)(()=>d&&Object(c.createElement)("li",{key:"show-less",className:"show-less"},Object(c.createElement)("button",{onClick:()=>{p(!1)},"aria-expanded":!0,"aria-label":Object(r.__)("Show less options","woo-gutenberg-products-block")},Object(r.__)("Show less","woo-gutenberg-products-block"))),[d]),m=Object(c.useMemo)(()=>{const e=o.length>b+5;return Object(c.createElement)(c.Fragment,null,o.map((t,r)=>Object(c.createElement)(c.Fragment,{key:t.value},Object(c.createElement)("li",e&&!d&&r>=b&&{hidden:!0},Object(c.createElement)(a.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:s.includes(t.value),onChange:()=>{n(t.value)},disabled:u})),e&&r===b-1&&f)),e&&O)},[o,n,s,d,b,O,f,u]),j=l()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(c.createElement)("ul",{className:j},i?g:m)}},17:function(e,t){e.exports=window.wp.url},170:function(e,t){},171:function(e,t){},187:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,n){"use strict";n.d(t,"o",(function(){return o})),n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return s})),n.d(t,"j",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return b})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"h",(function(){return f})),n.d(t,"a",(function(){return O})),n.d(t,"i",(function(){return m})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return w}));var c,r=n(2);const o=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",s=o.buildPhase,i=null===(c=r.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=r.STORE_PAGES.checkout.id,b=(r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink),d=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),p=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),g=r.STORE_PAGES.cart.permalink,f=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),O=Object(r.getSetting)("allowedCountries",{}),m=Object(r.getSetting)("shippingStates",{}),j=Object(r.getSetting)("allowedStates",{}),w=Object(r.getSetting)("localPickupEnabled",!1)},201:function(e,t){},202:function(e,t){},239:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var c=n(17),r=n(2),o=n(133);const l=Object(r.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),a="query_type_",s="filter_";function i(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function u(e){l?window.location.href=e:window.history.replaceState({},"",e)}},25:function(e,t){e.exports=window.wp.isShallowEqual},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),r=n(259),o=n(9),l=n(43),a=n(32),s=n(55),i=n(111),u=n(49);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:d,queryState:p,productIds:g,isEditor:f=!1}=e,O=Object(u.a)();O+="-collection-data";const[m]=Object(s.a)(O),[j,w]=Object(s.b)("calculate_attribute_counts",[],O),[_,h]=Object(s.b)("calculate_price_range",null,O),[y,k]=Object(s.b)("calculate_stock_status_counts",null,O),[E,v]=Object(s.b)("calculate_rating_counts",null,O),S=Object(l.a)(t||{}),C=Object(l.a)(n),x=Object(l.a)(b),T=Object(l.a)(d);Object(c.useEffect)(()=>{"object"==typeof S&&Object.keys(S).length&&(j.find(e=>Object(a.c)(S,"taxonomy")&&e.taxonomy===S.taxonomy)||w([...j,S]))},[S,j,w]),Object(c.useEffect)(()=>{_!==C&&void 0!==C&&h(C)},[C,h,_]),Object(c.useEffect)(()=>{y!==x&&void 0!==x&&k(x)},[x,k,y]),Object(c.useEffect)(()=>{E!==T&&void 0!==T&&v(T)},[T,v,E]);const[N,R]=Object(c.useState)(f),[P]=Object(r.a)(N,200);N||R(!0);const A=Object(c.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(g)&&{include:g},...A},shouldSelect:P})}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,n){"use strict";var c=n(0),r=n(4),o=n.n(r);t.a=e=>{let t,{label:n,screenReaderLabel:r,wrapperElement:l,wrapperProps:a={}}=e;const s=null!=n,i=null!=r;return!s&&i?(t=l||"span",a={...a,className:o()(a.className,"screen-reader-text")},Object(c.createElement)(t,a,r)):(t=l||c.Fragment,s&&i&&n!==r?Object(c.createElement)(t,a,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},r)):Object(c.createElement)(t,a,n))}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));const c=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return c(e)&&t in e}const o=e=>0===Object.keys(e).length},36:function(e,t){e.exports=window.wp.deprecated},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(0),r=n(25),o=n.n(r);function l(e){const t=Object(c.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},47:function(e,t){e.exports=window.wp.a11y},487:function(e,t,n){e.exports=n(513)},488:function(e,t){},489:function(e,t){},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);const r=Object(c.createContext)("page"),o=()=>Object(c.useContext)(r);r.Provider},5:function(e,t){e.exports=window.wp.blockEditor},513:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),o=n(0),l=n(8),a=n(78),s=n(553),i=n(4),u=n.n(i),b=n(5),d=n(1),p=n(3),g=n(47),f=n(566),O=e=>{let{className:t,rating:n,ratedProductsCount:c}=e;const r=u()("wc-block-components-product-rating",t),l={width:n/5*100+"%"},a=Object(d.sprintf)(
/* translators: %f is referring to the average rating value */
Object(d.__)("Rated %f out of 5","woo-gutenberg-products-block"),n),s={__html:Object(d.sprintf)(
/* translators: %s is the rating value wrapped in HTML strong tags. */
Object(d.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(d.sprintf)('<strong class="rating">%f</strong>',n))};return Object(o.createElement)("div",{className:r},Object(o.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":a},Object(o.createElement)("span",{style:l,dangerouslySetInnerHTML:s})),null!==c?Object(o.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",c,")"):null)},m=n(119),j=n(43),w=n(106),_=n(55),h=n(274),y=n(2),k=n(133),E=n(32),v=n(25),S=n.n(v),C=n(159),x=n(132),T=n(131),N=n(158),R=n(17),P=n(239),A=n(9);const L=[{label:Object(o.createElement)(O,{className:"",key:5,rating:5,ratedProductsCount:5}),value:"5"},{label:Object(o.createElement)(O,{className:"",key:4,rating:4,ratedProductsCount:4}),value:"4"},{label:Object(o.createElement)(O,{className:"",key:3,rating:3,ratedProductsCount:3}),value:"3"},{label:Object(o.createElement)(O,{className:"",key:2,rating:2,ratedProductsCount:2}),value:"2"},{label:Object(o.createElement)(O,{className:"",key:1,rating:1,ratedProductsCount:1}),value:"1"}];n(489);var F=n(66),M=n(187);function B(){return Math.floor(Math.random()*Date.now())}const G=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");var q=n(104);const D=e=>Object(d.sprintf)(
/* translators: %s is referring to the average rating value */
Object(d.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),Q=e=>Object(d.sprintf)(
/* translators: %s is referring to the average rating value */
Object(d.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e);var Y=e=>{let{attributes:t,isEditor:n,noRatingsNotice:c=null}=e;const r=Object(q.a)(),l=Object(y.getSettingWithCoercion)("is_rendering_php_template",!1,k.a),[s,i]=Object(o.useState)(!1),[b]=Object(_.a)(),{results:p,isLoading:v}=Object(h.a)({queryRating:!0,queryState:b,isEditor:n}),[M,Y]=Object(o.useState)(t.isPreview?L:[]),U=!t.isPreview&&v&&0===M.length,I=!t.isPreview&&v,V=Object(o.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(P.d)(e);if(!t)return[];const n=Object(F.a)(t)?t.split(","):t;return n}("rating_filter"),[]),[K,W]=Object(o.useState)(V),[J,z]=Object(_.b)("rating",V),[H,Z]=Object(o.useState)(B()),$=Object(m.a)(t),[X,ee]=Object(o.useState)(!1),te="single"!==t.selectType,ne=te?!U&&K.length<M.length:!U&&0===K.length,ce=Object(o.useCallback)(e=>{n||(e&&!l&&z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(R.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(P.c)(e))}const t=Object(R.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(P.c)(t)})(e))},[n,z,l]);Object(o.useEffect)(()=>{t.showFilterButton||ce(K)},[t.showFilterButton,K,ce]);const re=Object(o.useMemo)(()=>J,[J]),oe=Object(j.a)(re),le=Object(w.a)(oe);Object(o.useEffect)(()=>{S()(le,oe)||S()(K,oe)||W(oe)},[K,oe,le]),Object(o.useEffect)(()=>{s||(z(V),i(!0))},[z,s,i,V]),Object(o.useEffect)(()=>{if(v||t.isPreview)return;const e=!v&&Object(E.c)(p,"rating_counts")&&Array.isArray(p.rating_counts)?[...p.rating_counts].reverse():[];if(n&&0===e.length)return Y(L),void ee(!0);const c=e.filter(e=>Object(E.b)(e)&&Object.keys(e).length>0).map(e=>{var n;return{label:Object(o.createElement)(O,{key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:t.showCounts?null==e?void 0:e.count:null}),value:null==e||null===(n=e.rating)||void 0===n?void 0:n.toString()}});Y(c),Z(B())},[t.showCounts,t.isPreview,p,v,J,n]);const ae=Object(o.useCallback)(e=>{const t=K.includes(e);if(!te){const n=t?[]:[e];return Object(g.speak)(t?Q(e):D(e)),void W(n)}if(t){const t=K.filter(t=>t!==e);return Object(g.speak)(Q(e)),void W(t)}const n=[...K,e].sort((e,t)=>Number(t)-Number(e));Object(g.speak)(D(e)),W(n)},[K,te]);return(v||0!==M.length)&&Object(y.getSettingWithCoercion)("has_filterable_products",!1,k.a)?(r(!0),Object(o.createElement)(o.Fragment,null,X&&c,Object(o.createElement)("div",{className:u()("wc-block-rating-filter","style-"+t.displayStyle,{"is-loading":U})},"dropdown"===t.displayStyle?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(N.a,{key:H,className:u()($.className,{"single-selection":!te,"is-loading":U}),style:{...$.style,borderStyle:"none"},suggestions:M.filter(e=>!K.includes(e.value)).map(e=>e.value),disabled:U,placeholder:Object(d.__)("Select Rating","woo-gutenberg-products-block"),onChange:e=>{!te&&e.length>1&&(e=[e[e.length-1]]),e=e.map(e=>{const t=M.find(t=>t.value===e);return t?t.value:e});const t=Object(A.difference)(e,K);if(1===t.length)return ae(t[0]);const n=Object(A.difference)(K,e);1===n.length&&ae(n[0])},value:K,displayTransform:e=>{const t={value:e,label:Object(o.createElement)(O,{key:Number(e),rating:Number(e),ratedProductsCount:0})},n=M.find(t=>t.value===e)||t,{label:c,value:r}=n;return Object.assign({},c,{toLocaleLowerCase:()=>r,substring:(e,t)=>0===e&&1===t?c:""})},saveTransform:G,messages:{added:Object(d.__)("Rating filter added.","woo-gutenberg-products-block"),removed:Object(d.__)("Rating filter removed.","woo-gutenberg-products-block"),remove:Object(d.__)("Remove rating filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(d.__)("Invalid rating filter.","woo-gutenberg-products-block")}}),ne&&Object(o.createElement)(a.a,{icon:f.a,size:30})):Object(o.createElement)(C.a,{className:"wc-block-rating-filter-list",options:M,checked:K,onChange:e=>{ae(e.toString())},isLoading:U,isDisabled:I})),Object(o.createElement)("div",{className:"wc-block-rating-filter__actions"},(K.length>0||n)&&!U&&Object(o.createElement)(T.a,{onClick:()=>{W([]),z([]),ce([])},screenReaderLabel:Object(d.__)("Reset rating filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(o.createElement)(x.a,{className:"wc-block-rating-filter__button",isLoading:U,disabled:U||I,onClick:()=>ce(K)})))):(r(!1),null)};n(488);const U=Object(o.createElement)(p.Notice,{status:"warning",isDismissible:!1},Object(o.createElement)("p",null,Object(d.__)("Your store doesn't have any products with ratings yet. This filter option will display when a product receives a review.","woo-gutenberg-products-block")));var I=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:n}=e;const{className:c,displayStyle:r,showCounts:l,showFilterButton:a,selectType:s}=t,i=Object(b.useBlockProps)({className:u()("wc-block-rating-filter",c)});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.InspectorControls,{key:"inspector"},Object(o.createElement)(p.PanelBody,{title:Object(d.__)("Display Settings","woo-gutenberg-products-block")},Object(o.createElement)(p.ToggleControl,{label:Object(d.__)("Display product count","woo-gutenberg-products-block"),checked:l,onChange:()=>n({showCounts:!l})}),Object(o.createElement)(p.__experimentalToggleGroupControl,{label:Object(d.__)("Allow selecting multiple options?","woo-gutenberg-products-block"),value:s||"multiple",onChange:e=>n({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"multiple",label:Object(d.__)("Multiple","woo-gutenberg-products-block")}),Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"single",label:Object(d.__)("Single","woo-gutenberg-products-block")})),Object(o.createElement)(p.__experimentalToggleGroupControl,{label:Object(d.__)("Display Style","woo-gutenberg-products-block"),value:r,onChange:e=>n({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"list",label:Object(d.__)("List","woo-gutenberg-products-block")}),Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(d.__)("Dropdown","woo-gutenberg-products-block")})),Object(o.createElement)(p.ToggleControl,{label:Object(d.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:Object(d.__)("Products will update when the button is clicked.","woo-gutenberg-products-block"),checked:a,onChange:e=>n({showFilterButton:e})}))),Object(o.createElement)("div",i,Object(o.createElement)(p.Disabled,null,Object(o.createElement)(Y,{attributes:t,isEditor:!0,noRatingsNotice:U}))))});Object(l.registerBlockType)(M,{icon:{src:Object(o.createElement)(a.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},attributes:{...M.attributes},edit:I,save(e){let{attributes:t}=e;const{className:n,showCounts:c}=t,l={"data-show-counts":c};return Object(o.createElement)("div",r()({},b.useBlockProps.save({className:u()("is-loading",n)}),l),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-rating-filter__placeholder"}))}})},54:function(e,t){e.exports=window.wp.keycodes},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var c=n(10),r=n(7),o=n(0),l=n(25),a=n.n(l),s=n(43),i=n(106),u=n(49);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(r.useSelect)(t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{l(e,t)},[e,l])]},d=(e,t,n)=>{const l=Object(u.a)();n=n||l;const a=Object(r.useSelect)(r=>r(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:s}=Object(r.useDispatch)(c.QUERY_STATE_STORE_KEY);return[a,Object(o.useCallback)(t=>{s(n,e,t)},[n,e,s])]},p=(e,t)=>{const n=Object(u.a)();t=t||n;const[c,r]=b(t),l=Object(s.a)(c),d=Object(s.a)(e),p=Object(i.a)(d),g=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{a()(p,d)||(r(Object.assign({},l,d)),g.current=!0)},[l,d,p,r]),g.current?[c,r]:[e,r]}},56:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return a}));var c=n(8),r=n(20);const o=(e,t)=>{if(r.n>2)return Object(c.registerBlockType)(e,t)},l=()=>r.n>2,a=()=>r.n>1},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},68:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(66),r=n(32);const o=e=>Object(c.a)(e)?JSON.parse(e)||{}:Object(r.b)(e)?e:{}},8:function(e,t){e.exports=window.wp.blocks},9:function(e,t){e.exports=window.lodash},98:function(e,t){e.exports=window.wp.warning}});