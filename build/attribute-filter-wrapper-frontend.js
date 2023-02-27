(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[14],{102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n(5);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const a=e.filter(e=>e.attribute===n.taxonomy),o=a.length?a[0]:null;if(!(o&&o.slug&&Array.isArray(o.slug)&&o.slug.includes(c)))return;const s=o.slug.filter(e=>e!==c),l=e.filter(e=>e.attribute!==n.taxonomy);s.length>0&&(o.slug=s.sort(),l.push(o)),t(Object(r.sortBy)(l,"attribute"))},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";if(!n||!n.taxonomy)return[];const o=e.filter(e=>e.attribute!==n.taxonomy);return 0===c.length?t(o):(o.push({attribute:n.taxonomy,operator:a,slug:c.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(r.sortBy)(o,"attribute"))),o}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n(53);var r=n(37);const c=()=>r.n>1},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(23),c=n(20);const a=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}},117:function(e,t){},118:function(e,t){},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(2);const c=Object(r.getSetting)("attributes",[]).reduce((e,t)=>{const n=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return n&&n.id&&e.push(n),e},[]),a=e=>{if(e)return c.find(t=>t.id===e)},o=e=>{if(e)return c.find(t=>t.taxonomy===e)}},128:function(e){e.exports=JSON.parse('{"name":"woocommerce/attribute-filter","version":"1.0.0","title":"Filter by Attribute Controls","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":true},"queryType":{"type":"string","default":"or"},"headingLevel":{"type":"number","default":3},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},138:function(e,t){},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(98),a=n(5),o=n(30),s=n(20),l=n(32),i=n(63),u=n(25);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:d,queryState:m,productIds:f,isEditor:p=!1}=e,O=Object(u.a)();O+="-collection-data";const[j]=Object(l.a)(O),[g,y]=Object(l.b)("calculate_attribute_counts",[],O),[h,v]=Object(l.b)("calculate_price_range",null,O),[w,_]=Object(l.b)("calculate_stock_status_counts",null,O),[E,k]=Object(l.b)("calculate_rating_counts",null,O),C=Object(o.a)(t||{}),S=Object(o.a)(n),x=Object(o.a)(b),N=Object(o.a)(d);Object(r.useEffect)(()=>{"object"==typeof C&&Object.keys(C).length&&(g.find(e=>Object(s.b)(C,"taxonomy")&&e.taxonomy===C.taxonomy)||y([...g,C]))},[C,g,y]),Object(r.useEffect)(()=>{h!==S&&void 0!==S&&v(S)},[S,v,h]),Object(r.useEffect)(()=>{w!==x&&void 0!==x&&_(x)},[x,_,w]),Object(r.useEffect)(()=>{E!==N&&void 0!==N&&k(N)},[N,k,E]);const[T,L]=Object(r.useState)(p),[A]=Object(c.a)(T,200);T||L(!0);const R=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(a.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(j),[j]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...m,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(a.isEmpty)(f)&&{include:f},...R},shouldSelect:A})}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(66),c=n(115),a=n(20),o=n(116);const s=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(o.a)(t.style);return Object(r.__experimentalUseBorderProps)({...t,style:n})}},159:function(e,t,n){"use strict";var r=n(0),c=n(1),a=n(151),o=n(30),s=n(64),l=n(32),i=n(63),u=n(139),b=n(65),d=n(70),m=n(71),f=n(13),p=n.n(f),O=n(31),j=n(218),g=n(2),y=n(14),h=n(74),v=n(23),w=n(20),_=n(221),E=n(76),k=n(152),C=n(72),S=n(5),x=n(93),N=n(69),T=n(6),L=n.n(T),A=n(122),R=n(112);const F=[{value:"preview-1",formattedValue:"preview-1",name:"Blue",label:Object(r.createElement)(b.a,{name:"Blue",count:3}),textLabel:"Blue (3)"},{value:"preview-2",formattedValue:"preview-2",name:"Green",label:Object(r.createElement)(b.a,{name:"Green",count:3}),textLabel:"Green (3)"},{value:"preview-3",formattedValue:"preview-3",name:"Red",label:Object(r.createElement)(b.a,{name:"Red",count:2}),textLabel:"Red (2)"}],q={id:0,name:"preview",taxonomy:"preview",label:"Preview"};n(222);var I=n(56),B=n(94),P=e=>{let{isLoading:t=!1,options:n,checked:c,onChange:a}=e;return t?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"is-loading"}),Object(r.createElement)("span",{className:"is-loading"})):Object(r.createElement)(B.a,{className:"wc-block-attribute-filter-list",options:n,checked:c,onChange:a,isLoading:t,isDisabled:t})},D=n(47);t.a=e=>{let{attributes:t,isEditor:n=!1}=e;const f=Object(g.getSettingWithCoercion)("has_filterable_products",!1,h.a),T=Object(g.getSettingWithCoercion)("is_rendering_php_template",!1,h.a),B=Object(g.getSettingWithCoercion)("page_url",window.location.href,v.a),M=n?[]:Object(g.getSettingWithCoercion)("product_ids",[],Array.isArray),[Q,V]=Object(r.useState)(!1),U=t.isPreview&&!t.attributeId?q:Object(A.a)(t.attributeId),Y=Object(r.useMemo)(()=>Object(I.e)(U),[U]),[W,$]=Object(r.useState)(Y),[K,J]=Object(r.useState)(Object(I.d)()),[G,H]=Object(r.useState)(t.isPreview&&!t.attributeId?F:[]),z=Object(a.a)(t),[Z]=Object(l.a)(),[X,ee]=Object(l.b)("attributes",[]),{results:te,isLoading:ne}=Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[(null==U?void 0:U.id)||0],shouldSelect:t.attributeId>0}),re="dropdown"!==t.displayStyle&&"and"===t.queryType,{results:ce,isLoading:ae}=Object(u.a)({queryAttribute:{taxonomy:(null==U?void 0:U.taxonomy)||"",queryType:t.queryType},queryState:{...Z,attributes:re?Z.attributes:null},productIds:M,isEditor:n}),oe=Object(r.useCallback)(e=>Object(w.b)(ce,"attribute_counts")&&Array.isArray(ce.attribute_counts)?ce.attribute_counts.find(t=>{let{term:n}=t;return n===e}):null,[ce]);Object(r.useEffect)(()=>{if(ne||ae)return;if(!Array.isArray(te))return;const e=te.map(e=>{const n=oe(e.id);if(!(n||W.includes(e.slug)||(c=e.slug,null!=Z&&Z.attributes&&Z.attributes.some(e=>{let{attribute:t,slug:n=[]}=e;return t===(null==U?void 0:U.taxonomy)&&n.includes(c)}))))return null;var c;const a=n?n.count:0;return{formattedValue:Object(I.c)(e.slug),value:e.slug,name:Object(O.decodeEntities)(e.name),label:Object(r.createElement)(b.a,{name:Object(O.decodeEntities)(e.name),count:t.showCounts?a:null}),textLabel:t.showCounts?`${Object(O.decodeEntities)(e.name)} (${a})`:Object(O.decodeEntities)(e.name)}}).filter(e=>!!e);H(e),J(Object(I.d)())},[null==U?void 0:U.taxonomy,te,ne,t.showCounts,ae,oe,W,Z.attributes]);const se=Object(r.useCallback)(e=>Array.isArray(te)?te.reduce((t,n)=>(e.includes(n.slug)&&t.push(n),t),[]):[],[te]),le=Object(r.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=e.map(e=>({...e,slug:e.slug.map(e=>decodeURIComponent(e))})),t){if(null==U||!U.taxonomy)return;const t=Object.keys(Object(y.getQueryArgs)(window.location.href)),n=Object(I.h)(U.taxonomy),r=t.reduce((e,t)=>t.includes(C.b+n)||t.includes(C.a+n)?Object(y.removeQueryArgs)(e,t):e,window.location.href),c=Object(I.b)(r,e);Object(C.c)(c)}else{const t=Object(I.b)(B,e),n=Object(y.getQueryArgs)(window.location.href),r=Object(y.getQueryArgs)(t);Object(I.f)(n,r)||Object(C.c)(t)}}),[B,null==U?void 0:U.taxonomy]),ie=e=>{const n=Object(R.b)(X,ee,U,se(e),"or"===t.queryType?"in":"and");le(n,0===e.length)},ue=Object(r.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n||($(e),!r&&t.showFilterButton||Object(R.b)(X,ee,U,se(e),"or"===t.queryType?"in":"and"))}),[n,$,X,ee,U,se,t.queryType,t.showFilterButton]),be=Object(r.useMemo)(()=>Object(_.a)(X)?X.filter(e=>{let{attribute:t}=e;return t===(null==U?void 0:U.taxonomy)}).flatMap(e=>{let{slug:t}=e;return t}):[],[X,null==U?void 0:U.taxonomy]),de=Object(o.a)(be),me=Object(s.a)(de);Object(r.useEffect)(()=>{!me||p()(me,de)||p()(W,de)||ue(de)},[W,de,me,ue]);const fe="single"!==t.selectType,pe=Object(r.useCallback)(e=>{const t=W.includes(e);let n;fe?(n=W.filter(t=>t!==e),t||(n.push(e),n.sort())):n=t?[]:[e],ue(n)},[W,fe,ue]);Object(r.useEffect)(()=>{U&&!t.showFilterButton&&(Object(I.a)({currentCheckedFilters:W,hasSetFilterDefaultsFromUrl:Q})?le(X,!0):le(X,!1))},[Q,le,X,U,W,t.showFilterButton]),Object(r.useEffect)(()=>{if(!Q&&!ne)return Y.length>0?(V(!0),void ue(Y,!0)):void(T||V(!0))},[U,Q,ne,ue,Y,T]);const Oe=Object(D.b)();if(!f)return Oe(!1),null;if(!U)return n?Object(r.createElement)(j.a,{status:"warning",isDismissible:!1},Object(r.createElement)("p",null,Object(c.__)("Please select an attribute to use this filter!","woo-gutenberg-products-block"))):(Oe(!1),null);if(0===G.length&&!ne&&n)return Object(r.createElement)(j.a,{status:"warning",isDismissible:!1},Object(r.createElement)("p",null,Object(c.__)("There are no products with the selected attributes.","woo-gutenberg-products-block")));const je="h"+t.headingLevel,ge=!t.isPreview&&ne,ye=!t.isPreview&&ae,he=(ge||ye)&&0===G.length;if(!he&&0===G.length)return Oe(!1),null;const ve=fe?!he&&W.length<G.length:!he&&0===W.length,we=Object(r.createElement)(je,{className:"wc-block-attribute-filter__title"},t.heading),_e=he?Object(r.createElement)(N.a,null,we):we;return Oe(!0),Object(r.createElement)(r.Fragment,null,!n&&t.heading&&_e,Object(r.createElement)("div",{className:L()("wc-block-attribute-filter","style-"+t.displayStyle)},"dropdown"===t.displayStyle?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(x.a,{key:K,className:L()(z.className,{"single-selection":!fe,"is-loading":he}),style:{...z.style,borderStyle:"none"},suggestions:G.filter(e=>!W.includes(e.value)).map(e=>e.formattedValue),disabled:he,placeholder:Object(c.sprintf)(
/* translators: %s attribute name. */
Object(c.__)("Select %s","woo-gutenberg-products-block"),U.label),onChange:e=>{!fe&&e.length>1&&(e=[e[e.length-1]]),e=e.map(e=>{const t=G.find(t=>t.formattedValue===e);return t?t.value:e});const t=Object(S.difference)(e,W);if(1===t.length)return pe(t[0]);const n=Object(S.difference)(W,e);1===n.length&&pe(n[0])},value:W,displayTransform:e=>{const t=G.find(t=>[t.value,t.formattedValue].includes(e));return t?t.textLabel:e},saveTransform:I.c,messages:{added:Object(c.sprintf)(
/* translators: %s is the attribute label. */
Object(c.__)("%s filter added.","woo-gutenberg-products-block"),U.label),removed:Object(c.sprintf)(
/* translators: %s is the attribute label. */
Object(c.__)("%s filter removed.","woo-gutenberg-products-block"),U.label),remove:Object(c.sprintf)(
/* translators: %s is the attribute label. */
Object(c.__)("Remove %s filter.","woo-gutenberg-products-block"),U.label.toLocaleLowerCase()),__experimentalInvalid:Object(c.sprintf)(
/* translators: %s is the attribute label. */
Object(c.__)("Invalid %s filter.","woo-gutenberg-products-block"),U.label.toLocaleLowerCase())}}),ve&&Object(r.createElement)(E.a,{icon:k.a,size:30})):Object(r.createElement)(P,{options:G,checked:W,onChange:pe,isLoading:he,isDisabled:he})),Object(r.createElement)("div",{className:"wc-block-attribute-filter__actions"},W.length>0&&!he&&Object(r.createElement)(d.a,{onClick:()=>{$([]),J(Object(I.d)()),Q&&ie([])},screenReaderLabel:Object(c.__)("Reset attribute filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(r.createElement)(m.a,{className:"wc-block-attribute-filter__button",isLoading:he,disabled:(()=>{if(ge||ye)return!0;const e=Object(I.e)(U);return e.length===W.length&&W.every(t=>e.includes(t))})(),onClick:()=>ie(W)})))}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},21:function(e,t,n){"use strict";var r=n(0),c=n(6),a=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:o,wrapperProps:s={}}=e;const l=null!=n,i=null!=c;return!l&&i?(t=o||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(r.createElement)(t,s,c)):(t=o||r.Fragment,l&&i&&n!==c?Object(r.createElement)(t,s,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,s,n))}},218:function(e,t,n){"use strict";var r=n(0),c=n(5),a=n(6),o=n.n(a),s=n(1),l=n(28),i=n(125),u=n(55);function b(e){switch(e){case"success":case"warning":case"info":return"polite";case"error":default:return"assertive"}}t.a=function({className:e,status:t="info",children:n,spokenMessage:a=n,onRemove:d=c.noop,isDismissible:m=!0,actions:f=[],politeness:p=b(t),__unstableHTML:O,onDismiss:j=c.noop}){!function(e,t){const n="string"==typeof e?e:Object(r.renderToString)(e);Object(r.useEffect)(()=>{n&&Object(l.speak)(n,t)},[n,t])}(a,p);const g=o()(e,"components-notice","is-"+t,{"is-dismissible":m});return O&&(n=Object(r.createElement)(r.RawHTML,null,n)),Object(r.createElement)("div",{className:g},Object(r.createElement)("div",{className:"components-notice__content"},n,Object(r.createElement)("div",{className:"components-notice__actions"},f.map(({className:e,label:t,isPrimary:n,variant:c,noDefaultClasses:a=!1,onClick:s,url:l},i)=>{let b=c;return"primary"===c||a||(b=l?"link":"secondary"),void 0===b&&n&&(b="primary"),Object(r.createElement)(u.a,{key:i,href:l,variant:b,onClick:l?void 0:s,className:o()("components-notice__action",e)},t)}))),m&&Object(r.createElement)(u.a,{className:"components-notice__dismiss",icon:i.a,label:Object(s.__)("Dismiss this notice"),onClick:e=>{var t;null==e||null===(t=e.preventDefault)||void 0===t||t.call(e),j(),d()},showTooltip:!1}))}},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(20);const c=e=>Object(r.b)(e,"count")&&Object(r.b)(e,"description")&&Object(r.b)(e,"id")&&Object(r.b)(e,"name")&&Object(r.b)(e,"parent")&&Object(r.b)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,a=e=>Array.isArray(e)&&e.every(c),o=e=>Object(r.b)(e,"attribute")&&Object(r.b)(e,"operator")&&Object(r.b)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every(e=>"string"==typeof e),s=e=>Array.isArray(e)&&e.every(o)},222:function(e,t){},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);const c=Object(r.createContext)("page"),a=()=>Object(r.useContext)(c);c.Provider},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(66),c=n(115),a=n(20),o=n(116);const s=e=>{if(!Object(c.a)())return{className:"",style:{}};const t=Object(a.a)(e)?e:{},n=Object(o.a)(t.style);return Object(r.__experimentalUseColorProps)({...t,style:n})}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=n(13),a=n.n(c);function o(e){const t=Object(r.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(3),c=n(7),a=n(0),o=n(13),s=n.n(o),l=n(30),i=n(64),u=n(25);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:o}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(a.useCallback)(t=>{o(e,t)},[e,o])]},d=(e,t,n)=>{const o=Object(u.a)();n=n||o;const s=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:l}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[s,Object(a.useCallback)(t=>{l(n,e,t)},[n,e,l])]},m=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),o=Object(l.a)(r),d=Object(l.a)(e),m=Object(i.a)(d),f=Object(a.useRef)(!1);return Object(a.useEffect)(()=>{s()(m,d)||(c(Object.assign({},o,d)),f.current=!0)},[o,d,m,c]),f.current?[r,c]:[e,c]}},485:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(285),a=n(23),o=n(159),s=n(56);t.default=e=>{const t=Object(c.a)(e);return Object(r.createElement)("div",{className:Object(a.a)(e.className)?e.className:"",style:{...t.style}},Object(r.createElement)(o.a,{isEditor:!1,attributes:Object(s.g)(e)}))}},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return f}));var r=n(14),c=n(72),a=n(23),o=n(128);function s(){return Math.floor(Math.random()*Date.now())}const l=e=>e.replace("pa_",""),i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n={};t.forEach(e=>{const{attribute:t,slug:r,operator:a}=e,o=l(t),s=r.join(","),i=`${c.b}${o}`,u="in"===a?"or":"and";n[`${c.a}${o}`]=s,n[i]=u});const a=Object(r.removeQueryArgs)(e,...Object.keys(n));return Object(r.addQueryArgs)(a,n)},u=e=>{let{currentCheckedFilters:t,hasSetFilterDefaultsFromUrl:n}=e;return n&&0===t.length},b=e=>{if(e){const t=Object(c.d)("filter_"+e.name);return("string"==typeof t?t.split(","):[]).map(e=>encodeURIComponent(e).toLowerCase())}return[]},d=(e,t)=>{const n=Object.entries(t).reduce((e,t)=>{let[n,r]=t;return n.includes("query_type")?e:{...e,[n]:r}},{});return Object.entries(n).reduce((t,n)=>{let[r,c]=n;return e[r]===c&&t},!0)},m=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),f=e=>({className:Object(a.a)(null==e?void 0:e.className)?e.className:"",attributeId:parseInt(Object(a.a)(null==e?void 0:e.attributeId)?e.attributeId:"0",10),showCounts:"false"!==(null==e?void 0:e.showCounts),queryType:Object(a.a)(null==e?void 0:e.queryType)&&e.queryType||o.attributes.queryType.default,heading:Object(a.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(a.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||o.attributes.headingLevel.default,displayStyle:Object(a.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||o.attributes.displayStyle.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),selectType:Object(a.a)(null==e?void 0:e.selectType)&&e.selectType||o.attributes.selectType.default,isPreview:!1})},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),c=n(7),a=n(0),o=n(30),s=n(105);const l=e=>{const{namespace:t,resourceName:n,resourceValues:l=[],query:i={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(a.useRef)({results:[],isLoading:!0}),d=Object(o.a)(i),m=Object(o.a)(l),f=Object(s.a)(),p=Object(c.useSelect)(e=>{if(!u)return null;const c=e(r.COLLECTIONS_STORE_KEY),a=[t,n,d,m],o=c.getCollectionError(...a);if(o){if(!(o instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(o)}return{results:c.getCollection(...a),isLoading:!c.hasFinishedResolution("getCollection",a)}},[t,n,m,d,u]);return null!==p&&(b.current=p),b.current}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},65:function(e,t,n){"use strict";var r=n(0),c=n(1),a=n(21);n(138),t.a=e=>{let{name:t,count:n}=e;return Object(r.createElement)(r.Fragment,null,t,null!==n&&Number.isFinite(n)&&Object(r.createElement)(a.a,{label:n.toString(),screenReaderLabel:Object(c.sprintf)(
/* translators: %s number of products. */
Object(c._n)("%s product","%s products",n,"woo-gutenberg-products-block"),n),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},69:function(e,t,n){"use strict";var r=n(0);n(102),t.a=e=>{let{children:t}=e;return Object(r.createElement)("div",{className:"wc-block-filter-title-placeholder"},t)}},70:function(e,t,n){"use strict";var r=n(0),c=n(1),a=n(6),o=n.n(a),s=n(21);n(103),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:a,screenReaderLabel:l=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:o()("wc-block-components-filter-reset-button",t),onClick:a},Object(r.createElement)(s.a,{label:n,screenReaderLabel:l}))}},71:function(e,t,n){"use strict";var r=n(0),c=n(1),a=n(6),o=n.n(a),s=n(21);n(104),t.a=e=>{let{className:t,isLoading:n,disabled:a,label:
/* translators: Submit button text for filters. */
l=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:u=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:o()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:a,onClick:i},Object(r.createElement)(s.a,{label:l,screenReaderLabel:u}))}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(14),c=n(2),a=n(74);const o=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,a.a),s="query_type_",l="filter_";function i(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){o?window.location.href=e:window.history.replaceState({},"",e)}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},93:function(e,t,n){"use strict";var r=n(15),c=n.n(r),a=n(0),o=n(130),s=n(6),l=n.n(s);n(117),t.a=e=>{let{className:t,style:n,suggestions:r,multiple:s=!0,saveTransform:i=(e=>e.trim().replace(/\s/g,"-")),messages:u={},validateInput:b=(e=>r.includes(e)),label:d="",...m}=e;return Object(a.createElement)("div",{className:l()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!s}),style:n},Object(a.createElement)(o.a,c()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:i,maxLength:s?void 0:1,suggestions:r,messages:u},m)))}},94:function(e,t,n){"use strict";var r=n(0),c=n(1),a=n(6),o=n.n(a),s=n(11);n(118),t.a=e=>{let{className:t,onChange:n,options:a=[],checked:l=[],isLoading:i=!1,isDisabled:u=!1,limit:b=10}=e;const[d,m]=Object(r.useState)(!1),f=Object(r.useMemo)(()=>[...Array(5)].map((e,t)=>Object(r.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),p=Object(r.useMemo)(()=>{const e=a.length-b;return!d&&Object(r.createElement)("li",{key:"show-more",className:"show-more"},Object(r.createElement)("button",{onClick:()=>{m(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[a,b,d]),O=Object(r.useMemo)(()=>d&&Object(r.createElement)("li",{key:"show-less",className:"show-less"},Object(r.createElement)("button",{onClick:()=>{m(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[d]),j=Object(r.useMemo)(()=>{const e=a.length>b+5;return Object(r.createElement)(r.Fragment,null,a.map((t,c)=>Object(r.createElement)(r.Fragment,{key:t.value},Object(r.createElement)("li",e&&!d&&c>=b&&{hidden:!0},Object(r.createElement)(s.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:l.includes(t.value),onChange:()=>{n(t.value)},disabled:u})),e&&c===b-1&&p)),e&&O)},[a,n,l,d,b,O,p,u]),g=o()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(r.createElement)("ul",{className:g},i?f:j)}}}]);