this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={40:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([374,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},101:function(e,t,c){"use strict";c.d(t,"a",(function(){return y}));var r=c(6),n=c.n(r),o=c(0),l=c(1),a=c(3),i=c(79),s=c(522),u=c(4),b=c.n(u),d=c(11),m=c(19),g=c(37),p=c(521),h=c(15);const E=e=>{let{id:t,label:c,popoverContents:r,remove:n,screenReaderLabel:s,className:u=""}=e;const[m,g]=Object(o.useState)(!1),O=Object(d.useInstanceId)(E);if(s=s||c,!c)return null;c=Object(h.decodeEntities)(c);const j=b()("woocommerce-tag",u,{"has-remove":!!n}),w="woocommerce-tag__label-"+O,f=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},s),Object(o.createElement)("span",{"aria-hidden":"true"},c));return Object(o.createElement)("span",{className:j},r?Object(o.createElement)(a.Button,{className:"woocommerce-tag__text",id:w,onClick:()=>g(!0)},f):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:w},f),r&&m&&Object(o.createElement)(a.Popover,{onClose:()=>g(!1)},r),n&&Object(o.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(l.sprintf)(// Translators: %s label.
Object(l.__)("Remove %s","woo-gutenberg-products-block"),c),"aria-describedby":w},Object(o.createElement)(i.a,{icon:p.a,size:20,className:"clear-icon"})))};var O=E;const j=e=>Object(o.createElement)(g.b,e),w=e=>{const{list:t,selected:c,renderItem:r,depth:l=0,onSelect:a,instanceId:i,isSingle:s,search:u}=e;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{const b=-1!==c.findIndex(e=>{let{id:c}=e;return c===t.id});return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,r({item:t,isSelected:b,onSelect:a,isSingle:s,search:u,depth:l,controlId:i})),Object(o.createElement)(w,n()({},e,{list:t.children,depth:l+1})))})):null},f=e=>{let{isLoading:t,isSingle:c,selected:r,messages:n,onChange:i,onRemove:s}=e;if(t||c||!r)return null;const u=r.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,n.selected(u)),u>0?Object(o.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":n.clear},Object(l.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(o.createElement)("ul",null,r.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(O,{label:e.name,id:e.id,remove:s})))):null)},_=e=>{let{filteredList:t,search:c,onSelect:r,instanceId:n,...a}=e;const{messages:u,renderItem:b,selected:d,isSingle:m}=a,g=b||j;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(i.a,{icon:s.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(l.sprintf)(u.noResults,c):u.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(w,{list:t,selected:d,renderItem:g,onSelect:r,instanceId:n,isSingle:m,search:c}))},y=e=>{const{className:t="",isCompact:c,isHierarchical:r,isLoading:l,isSingle:i,list:s,messages:u=m.a,onChange:g,onSearch:p,selected:h,debouncedSpeak:E}=e,[O,j]=Object(o.useState)(""),w=Object(d.useInstanceId)(y),x=Object(o.useMemo)(()=>({...m.a,...u}),[u]),k=Object(o.useMemo)(()=>Object(m.c)(s,O,r),[s,O,r]);Object(o.useEffect)(()=>{E&&E(x.updated)},[E,x]),Object(o.useEffect)(()=>{"function"==typeof p&&p(O)},[O,p]);const v=Object(o.useCallback)(e=>()=>{i&&g([]);const t=h.findIndex(t=>{let{id:c}=t;return c===e});g([...h.slice(0,t),...h.slice(t+1)])},[i,h,g]),S=Object(o.useCallback)(e=>()=>{-1===h.findIndex(t=>{let{id:c}=t;return c===e.id})?g(i?[e]:[...h,e]):v(e.id)()},[i,v,g,h]);return Object(o.createElement)("div",{className:b()("woocommerce-search-list",t,{"is-compact":c})},Object(o.createElement)(f,n()({},e,{onRemove:v,messages:x})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},Object(o.createElement)(a.TextControl,{label:x.search,type:"search",value:O,onChange:e=>j(e)})),l?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(o.createElement)(a.Spinner,null)):Object(o.createElement)(_,n()({},e,{search:O,filteredList:k,messages:x,onSelect:S,instanceId:w})))};Object(a.withSpokenMessages)(y)},103:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3);t.a=e=>{let{value:t,setAttributes:c}=e;return Object(r.createElement)(o.SelectControl,{label:Object(n.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(n.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(n.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(n.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(n.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:e=>c({orderby:e})})}},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.wp.primitives},14:function(e,t){e.exports=window.wp.apiFetch},15:function(e,t){e.exports=window.wp.htmlEntities},153:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},17:function(e,t){e.exports=window.wp.url},19:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(8),o=c(1);const l={clear:Object(o.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(o.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(o.__)("No results for %s","woo-gutenberg-products-block"),search:Object(o.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(o.sprintf)(
/* translators: Number of items selected from list. */
Object(o._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(o.__)("Search results updated.","woo-gutenberg-products-block")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=Object(n.groupBy)(e,"parent"),r=Object(n.keyBy)(t,"id"),o=["0"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=l(r[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=c[e.id];return o.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}}),i=a(c[0]||[]);return Object.entries(c).forEach(e=>{let[t,c]=e;o.includes(t)||i.push(...a(c||[]))}),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!r.test(e.name)&&e).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,c){"use strict";c.d(t,"o",(function(){return o})),c.d(t,"m",(function(){return l})),c.d(t,"l",(function(){return a})),c.d(t,"n",(function(){return i})),c.d(t,"j",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"f",(function(){return b})),c.d(t,"g",(function(){return d})),c.d(t,"k",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p})),c.d(t,"h",(function(){return h})),c.d(t,"a",(function(){return E})),c.d(t,"i",(function(){return O})),c.d(t,"b",(function(){return j}));var r,n=c(2);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,b=n.STORE_PAGES.checkout.permalink,d=n.STORE_PAGES.privacy.permalink,m=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),g=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),p=n.STORE_PAGES.cart.permalink,h=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),E=Object(n.getSetting)("allowedCountries",{}),O=Object(n.getSetting)("shippingStates",{}),j=Object(n.getSetting)("allowedStates",{})},27:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return b})),c.d(t,"i",(function(){return d})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return E}));var r=c(17),n=c(14),o=c.n(n),l=c(8),a=c(2),i=c(20);const s=e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const a=(e=>{let{selected:t=[],search:c="",queryArgs:n={}}=e;const o=i.o.productCount>100,l={per_page:o?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},a=[Object(r.addQueryArgs)("/wc/store/v1/products",{...l,...n})];return o&&t.length&&a.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:c,queryArgs:n});return Promise.all(a.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),b=()=>o()({path:"wc/store/v1/products/attributes"}),d=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:c}=e;const n=(e=>{let{selected:t=[],search:c}=e;const n=Object(a.getSetting)("limitTags",!1),o=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:c})];return n&&t.length&&o.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:c});return Promise.all(n.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id"))},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),p=e=>o()({path:"wc/store/v1/products/categories/"+e}),h=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return l}));var r=c(1),n=c(15);const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},l=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return null!=e&&e.message?Object(n.decodeEntities)(e.message):Object(r.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},303:function(e){e.exports=JSON.parse('{"name":"woocommerce/products-by-attribute","title":"Products by Attribute","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products with selected attributes.","supports":{"align":["wide","full"],"html":false},"attributes":{"attributes":{"type":"array","default":[]},"attrOperator":{"type":"string","enum":["all","any"],"default":"any"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},320:function(e,t){},34:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(35);t.a=e=>{let{error:t}=e;return Object(r.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===c?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},35:function(e,t){e.exports=window.wp.escapeHtml},37:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c(6),n=c.n(r),o=c(0),l=c(19);const a=e=>{let{countLabel:t,className:c,depth:r=0,controlId:a="",item:i,isSelected:s,isSingle:u,onSelect:b,search:d="",...m}=e;const g=null!=t&&void 0!==i.count&&null!==i.count,p=[c,"woocommerce-search-list__item"];p.push("depth-"+r),u&&p.push("is-radio-button"),g&&p.push("has-count");const h=i.breadcrumbs&&i.breadcrumbs.length,E=m.name||"search-list-item-"+a,O=`${E}-${i.id}`;return Object(o.createElement)("label",{htmlFor:O,className:p.join(" ")},u?Object(o.createElement)("input",n()({type:"radio",id:O,name:E,value:i.value,onChange:b(i),checked:s,className:"woocommerce-search-list__item-input"},m)):Object(o.createElement)("input",n()({type:"checkbox",id:O,name:E,value:i.value,onChange:b(i),checked:s,className:"woocommerce-search-list__item-input"},m)),Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},h?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(l.b)(i.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(l.d)(i.name,d))),!!g&&Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t||i.count))};t.b=a},374:function(e,t,c){e.exports=c(484)},375:function(e,t){},484:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(79),o=c(528),l=c(9),a=c(2),i=(c(320),c(303)),s=c(6),u=c.n(s),b=c(5),d=c(3),m=c(1),g=c(64),p=c(63),h=c(37),E=c(101),O=c(11),j=c(27),w=c(30);const f=function(e,t){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Array.isArray(t)?t.find(t=>t[c]===e):null};var _=c(34),y=c(4),x=c.n(y),k=c(82);c(375);const v=e=>{let{attributes:t,error:c,expandedAttribute:n,onChange:o,onExpandAttribute:l,onOperatorChange:a,instanceId:i,isCompact:s,isLoading:b,operator:g,selected:p,termsAreLoading:O,termsList:j}=e;const w=[...t,...j[n]||[]],f={clear:Object(m.__)("Clear all product attributes","woo-gutenberg-products-block"),list:Object(m.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(m.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(m.__)("Search for product attributes","woo-gutenberg-products-block"),selected:e=>Object(m.sprintf)(
/* translators: %d is the count of attributes selected. */
Object(m._n)("%d attribute selected","%d attributes selected",e,"woo-gutenberg-products-block"),e),updated:Object(m.__)("Product attribute search results updated.","woo-gutenberg-products-block")};return c?Object(r.createElement)(_.a,{error:c}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(E.a,{className:"woocommerce-product-attributes",list:w,isLoading:b,selected:p.map(e=>{let{id:t}=e;return w.find(e=>e.id===t)}).filter(Boolean),onChange:o,renderItem:e=>{const{item:t,search:c,depth:a=0}=e,s=["woocommerce-product-attributes__item","woocommerce-search-list__item",{"is-searching":c.length>0,"is-skip-level":0===a&&0!==t.parent}];if(!t.breadcrumbs.length){const c=n===t.id;return Object(r.createElement)(k.a,u()({},e,{className:x()(...s,{"is-selected":c}),isSelected:c,item:t,isLoading:O,disabled:"0"===t.count,onSelect:e=>{let{id:t}=e;return()=>{o([]),l(t)}},name:"attributes-"+i,countLabel:Object(m.sprintf)(
/* translators: %d is the count of terms. */
Object(m._n)("%d term","%d terms",t.count,"woo-gutenberg-products-block"),t.count),"aria-label":Object(m.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of terms for the item. */
Object(m._n)("%1$s, has %2$d term","%1$s, has %2$d terms",t.count,"woo-gutenberg-products-block"),t.name,t.count)}))}const b=`${t.breadcrumbs[0]}: ${t.name}`;return Object(r.createElement)(h.a,u()({},e,{name:"terms-"+i,className:x()(...s,"has-count"),countLabel:Object(m.sprintf)(
/* translators: %d is the count of products. */
Object(m._n)("%d product","%d products",t.count,"woo-gutenberg-products-block"),t.count),"aria-label":Object(m.sprintf)(
/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
Object(m._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),b,t.count)}))},messages:f,isCompact:s,isHierarchical:!0}),!!a&&Object(r.createElement)("div",{hidden:p.length<2},Object(r.createElement)(d.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(m.__)("Display products matching","woo-gutenberg-products-block"),help:Object(m.__)("Pick at least two attributes to use this setting.","woo-gutenberg-products-block"),value:g,onChange:a,options:[{label:Object(m.__)("Any selected attributes","woo-gutenberg-products-block"),value:"any"},{label:Object(m.__)("All selected attributes","woo-gutenberg-products-block"),value:"all"}]})))};v.defaultProps={isCompact:!1,operator:"any"};var S,C=(S=Object(O.withInstanceId)(v),e=>{const{selected:t=[]}=e,c=t.length?t[0].attr_slug:null,[n,o]=Object(r.useState)(null),[l,a]=Object(r.useState)(0),[i,s]=Object(r.useState)({}),[b,d]=Object(r.useState)(!0),[m,g]=Object(r.useState)(!1),[p,h]=Object(r.useState)(null);return Object(r.useEffect)(()=>{null===n&&Object(j.b)().then(e=>{if(e=e.map(e=>({...e,parent:0})),o(e),c){const t=f(c,e,"taxonomy");t&&a(t.id)}}).catch(async e=>{h(await Object(w.a)(e))}).finally(()=>{d(!1)})},[n,c]),Object(r.useEffect)(()=>{const e=f(l,n);e&&(g(!0),Object(j.i)(l).then(t=>{t=t.map(t=>({...t,parent:l,attr_slug:e.taxonomy})),s(e=>({...e,[l]:t}))}).catch(async e=>{h(await Object(w.a)(e))}).finally(()=>{g(!1)}))},[l,n]),Object(r.createElement)(S,u()({},e,{attributes:n||[],error:p,expandedAttribute:l,onExpandAttribute:a,isLoading:b,termsAreLoading:m,termsList:i}))}),A=c(103),P=c(81);const N=e=>{const{setAttributes:t}=e,{attributes:c,attrOperator:n,columns:o,contentVisibility:l,orderby:i,rows:s,alignButtons:u,stockStatus:h}=e.attributes;return Object(r.createElement)(b.InspectorControls,{key:"inspector"},Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(g.a,{columns:o,rows:s,alignButtons:u,setAttributes:t,minColumns:Object(a.getSetting)("min_columns",1),maxColumns:Object(a.getSetting)("max_columns",6),minRows:Object(a.getSetting)("min_rows",1),maxRows:Object(a.getSetting)("max_rows",6)})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(p.a,{settings:l,onChange:e=>t({contentVisibility:e})})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Filter by Product Attribute","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(C,{selected:c,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const c=e.map(e=>{let{id:t,attr_slug:c}=e;return{id:t,attr_slug:c}});t({attributes:c})},operator:n,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})},isCompact:!0})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(A.a,{setAttributes:t,value:i})),Object(r.createElement)(d.PanelBody,{title:Object(m.__)("Filter by stock status","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(P.a,{setAttributes:t,value:h})))},T=e=>{const{attributes:t,setAttributes:c,setIsEditing:l,isEditing:a,debouncedSpeak:i}=e;return Object(r.createElement)(d.Placeholder,{icon:Object(r.createElement)(n.a,{icon:o.a}),label:Object(m.__)("Products by Attribute","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(m.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),Object(r.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(r.createElement)(C,{selected:t.attributes,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.map(e=>{let{id:t,attr_slug:c}=e;return{id:t,attr_slug:c}});c({attributes:t})},operator:t.attrOperator,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return c({attrOperator:e})}}),Object(r.createElement)(d.Button,{isPrimary:!0,onClick:()=>{l(!a),i(Object(m.__)("Showing Products by Attribute block preview.","woo-gutenberg-products-block"))}},Object(m.__)("Done","woo-gutenberg-products-block"))))};var B=c(56),R=c.n(B),I=c(153);const L=e=>{const{attributes:t,name:c}=e;return t.isPreview?I.a:Object(r.createElement)(R.a,{block:c,attributes:t})},$=Object(d.withSpokenMessages)(e=>{const t=Object(b.useBlockProps)(),{attributes:{attributes:c}}=e,[n,o]=Object(r.useState)(!c.length);return Object(r.createElement)("div",t,Object(r.createElement)(b.BlockControls,null,Object(r.createElement)(d.ToolbarGroup,{controls:[{icon:"edit",title:Object(m.__)("Edit selected attribute","woo-gutenberg-products-block"),onClick:()=>o(!n),isActive:n}]})),Object(r.createElement)(N,e),n?Object(r.createElement)(T,u()({isEditing:n,setIsEditing:o},e)):Object(r.createElement)(d.Disabled,null,Object(r.createElement)(L,e)))});Object(l.registerBlockType)(i,{icon:{src:Object(r.createElement)(n.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:Object(a.getSetting)("default_columns",3)},rows:{type:"number",default:Object(a.getSetting)("default_rows",3)},stockStatus:{type:"array",default:Object.keys(Object(a.getSetting)("stockStatusOptions",[]))}},edit:$,save:()=>null})},5:function(e,t){e.exports=window.wp.blockEditor},56:function(e,t){e.exports=window.wp.serverSideRender},63:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3);t.a=e=>{let{onChange:t,settings:c}=e;const{image:l,button:a,price:i,rating:s,title:u}=c,b=!1!==l;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woo-gutenberg-products-block"),checked:b,onChange:()=>t({...c,image:!b})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woo-gutenberg-products-block"),checked:u,onChange:()=>t({...c,title:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woo-gutenberg-products-block"),checked:i,onChange:()=>t({...c,price:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:s,onChange:()=>t({...c,rating:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woo-gutenberg-products-block"),checked:a,onChange:()=>t({...c,button:!a})}))}},64:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(8),l=c(3);t.a=e=>{let{columns:t,rows:c,setAttributes:a,alignButtons:i,minColumns:s=1,maxColumns:u=6,minRows:b=1,maxRows:d=6}=e;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:e=>{const t=Object(o.clamp)(e,s,u);a({columns:Number.isNaN(t)?"":t})},min:s,max:u}),Object(r.createElement)(l.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:c,onChange:e=>{const t=Object(o.clamp)(e,b,d);a({rows:Number.isNaN(t)?"":t})},min:b,max:d}),Object(r.createElement)(l.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woo-gutenberg-products-block"),help:i?Object(n.__)("Align the last block to the bottom.","woo-gutenberg-products-block"):Object(n.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:i,onChange:()=>a({alignButtons:!i})}))}},8:function(e,t){e.exports=window.lodash},81:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2),l=c(3);const a=Object(o.getSetting)("hideOutOfStockItems",!1),i=Object(o.getSetting)("stockStatusOptions",{});t.a=e=>{let{value:t,setAttributes:c}=e;const{outofstock:o,...s}=i,u=a?s:i,b=Object.entries(u).map(e=>{let[t,c]=e;return{value:t,label:c}}).filter(e=>!!e.label),[d,m]=Object(r.useState)(t);Object(r.useEffect)(()=>{c({stockStatus:["",...d]})},[d,c]);const g=Object(r.useCallback)(e=>{const t=d.includes(e),c=d.filter(t=>t!==e);t||(c.push(e),c.sort()),m(c)},[d]);return Object(r.createElement)(r.Fragment,null,b.map(e=>{const t=d.includes(e.value)?
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" visible.',"woo-gutenberg-products-block"):
/* translators: %s stock status. */
Object(n.__)('Stock status "%s" hidden.',"woo-gutenberg-products-block");return Object(r.createElement)(l.ToggleControl,{label:e.label,key:e.value,help:Object(n.sprintf)(t,e.label),checked:d.includes(e.value),onChange:()=>g(e.value)})}))}},82:function(e,t,c){"use strict";var r=c(6),n=c.n(r),o=c(0),l=c(37),a=c(3),i=c(4),s=c.n(i);t.a=e=>{let{className:t,item:c,isSelected:r,isLoading:i,onSelect:u,disabled:b,...d}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.a,n()({},d,{key:c.id,className:t,isSelected:r,item:c,onSelect:u,isSingle:!0,disabled:b})),r&&i&&Object(o.createElement)("div",{key:"loading",className:s()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(o.createElement)(a.Spinner,null)))}},9:function(e,t){e.exports=window.wp.blocks}});