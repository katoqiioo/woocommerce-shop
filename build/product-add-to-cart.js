(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[19],{163:function(e,t){},164:function(e,t){},167:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(0),c=r(7),n=r(10),o=r(15),a=r(41);const i=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(c.useDispatch)(n.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(a.a)(),{createErrorNotice:l,removeNotice:d}=Object(c.useDispatch)("core/notices"),[b,E]=Object(s.useState)(!1),p=Object(s.useRef)(i(r,e));return Object(s.useEffect)(()=>{const t=i(r,e);t!==p.current&&(p.current=t)},[r,e]),{cartQuantity:Number.isFinite(p.current)?p.current:0,addingToCart:b,cartIsLoading:u,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return E(!0),t(e,r).then(()=>{d("add-to-cart")}).catch(e=>{l(Object(o.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{E(!1)})}}}},209:function(e,t,r){"use strict";var s=r(0),c=r(4),n=r.n(c),o=r(1),a=r(40),i=r(356),u=r(7),l=r(10);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},E={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:p,SET_IDLE:m,SET_DISABLED:_,SET_PROCESSING:O,SET_BEFORE_PROCESSING:h,SET_AFTER_PROCESSING:f,SET_PROCESSING_RESPONSE:S,SET_HAS_ERROR:g,SET_NO_ERROR:j,SET_QUANTITY:v,SET_REQUEST_PARAMS:R}=E,y=()=>({type:m}),T=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?g:j;return{type:t}},{SET_PRISTINE:C,SET_IDLE:w,SET_DISABLED:A,SET_PROCESSING:P,SET_BEFORE_PROCESSING:I,SET_AFTER_PROCESSING:k,SET_PROCESSING_RESPONSE:N,SET_HAS_ERROR:D,SET_NO_ERROR:L,SET_QUANTITY:x,SET_REQUEST_PARAMS:F}=E,{PRISTINE:B,IDLE:q,DISABLED:M,PROCESSING:Y,BEFORE_PROCESSING:V,AFTER_PROCESSING:G}=d,Q=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,{quantity:r,type:s,data:c}=arguments.length>1?arguments[1]:void 0;switch(s){case C:e=b;break;case w:e=t.status!==q?{...t,status:q}:t;break;case A:e=t.status!==M?{...t,status:M}:t;break;case x:e=r!==t.quantity?{...t,quantity:r}:t;break;case F:e={...t,requestParams:{...t.requestParams,...c}};break;case N:e={...t,processingResponse:c};break;case P:e=t.status!==Y?{...t,status:Y,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case I:e=t.status!==V?{...t,status:V,hasError:!1}:t;break;case k:e=t.status!==G?{...t,status:G}:t;break;case D:e=t.hasError?t:{...t,hasError:!0},e=t.status===Y||t.status===V?{...e,status:q}:e;break;case L:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&s!==C&&e.status===B&&(e.status=q),e};var K=r(98),W=r(266);const H=e=>({onAddToCartAfterProcessingWithSuccess:Object(W.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(W.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(W.a)("add_to_cart_before_processing",e)});var U=r(313),X=r(59);const J=Object(s.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),z=()=>Object(s.useContext)(J),Z=e=>{var t,r,c,n;let{children:E,product:m,showFormElements:g}=e;const[j,C]=Object(s.useReducer)(Q,b),[w,A]=Object(s.useReducer)(K.b,{}),P=Object(a.a)(w),{createErrorNotice:I}=Object(u.useDispatch)("core/notices"),{setValidationErrors:k}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),N=Object(s.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:H(A).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:H(A).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:H(A).onAddToCartBeforeProcessing}),[A]),D=Object(s.useMemo)(()=>({resetForm:()=>{C({type:p})},submitForm:()=>{C({type:h})},setQuantity:e=>{C((e=>({type:v,quantity:e}))(e))},setHasError:e=>{C(T(e))},setRequestParams:e=>{C((e=>({type:R,data:e}))(e))},setAfterProcessing:e=>{C({type:S,data:e}),C({type:f})}}),[]);Object(s.useEffect)(()=>{const e=j.status,t=!m.id||!Object(i.a)(m);e!==d.DISABLED||t?e!==d.DISABLED&&t&&C({type:_}):C(y())},[j.status,m,C]),Object(s.useEffect)(()=>{j.status===d.BEFORE_PROCESSING&&(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=Object(u.select)("core/notices").getNotices(),{removeNotice:s}=Object(u.dispatch)("core/notices"),c=r.filter(t=>t.status===e);c.forEach(e=>s(e.id,t))}("error","wc/add-to-cart"),Object(U.a)(P,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&I(t,{context:"wc/add-to-cart"}),r&&k(r)}),C(y())):C({type:O})}))},[j.status,k,I,C,P,null==m?void 0:m.id]),Object(s.useEffect)(()=>{if(j.status===d.AFTER_PROCESSING){const e={processingResponse:j.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:s}=e;(Object(X.b)(e)||Object(X.c)(e))&&r&&(t=!0,I(r,s?{context:s}:void 0))}),t};if(j.hasError)return void Object(U.b)(P,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var s;const t=(null===(s=e.processingResponse)||void 0===s?void 0:s.message)||Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block");I(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==m?void 0:m.id)||0)})}C(y())});Object(U.b)(P,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?C(T(!0)):C(y())})}},[j.status,j.hasError,j.processingResponse,D,I,P,null==m?void 0:m.id]);const L=Object(i.b)(m),x={product:m,productType:m.type||"simple",productIsPurchasable:Object(i.a)(m),productHasOptions:m.has_options||!1,supportsFormElements:L,showFormElements:g&&L,quantity:j.quantity||(null==m||null===(t=m.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==m||null===(r=m.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==m||null===(c=m.add_to_cart)||void 0===c?void 0:c.maximum)||99,multipleOf:(null==m||null===(n=m.add_to_cart)||void 0===n?void 0:n.multiple_of)||1,requestParams:j.requestParams,isIdle:j.status===d.IDLE,isDisabled:j.status===d.DISABLED,isProcessing:j.status===d.PROCESSING,isBeforeProcessing:j.status===d.BEFORE_PROCESSING,isAfterProcessing:j.status===d.AFTER_PROCESSING,hasError:j.hasError,eventRegistration:N,dispatchActions:D};return Object(s.createElement)(J.Provider,{value:x},E)};var $=r(14),ee=r.n($),te=r(15),re=r(257),se=r(41),ce=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:c,hasError:n,isProcessing:a,requestParams:i}=z(),{showAllValidationErrors:d}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),b=Object(u.useSelect)(e=>e(l.VALIDATION_STORE_KEY).hasValidationErrors),{createErrorNotice:E,removeNotice:p}=Object(u.useDispatch)("core/notices"),{receiveCart:m}=Object(se.a)(),[_,O]=Object(s.useState)(!1),h=!n&&a,f=Object(s.useCallback)(()=>!b()||(d(),{type:"error"}),[b,d]);Object(s.useEffect)(()=>{const e=c.onAddToCartBeforeProcessing(f,0);return()=>{e()}},[c,f]);const S=Object(s.useCallback)(()=>{O(!0),p("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const s={id:t.id||0,quantity:r,...i};ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then(r=>{ee.a.setNonce(r.headers),r.json().then((function(s){r.ok?m(s):(s.body&&s.body.message?E(Object(te.decodeEntities)(s.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):E(Object(o.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(re.b)({preserveCartData:!0}),e.setAfterProcessing(s),O(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&m(t.data.cart),e.setHasError(),e.setAfterProcessing(t),O(!1)}))})},[t,E,p,m,e,r,i]);return Object(s.useEffect)(()=>{h&&!_&&S()},[h,S,_]),null};const ne=e=>{let{children:t,product:r,showFormElements:c}=e;return Object(s.createElement)(Z,{product:r,showFormElements:c},t,Object(s.createElement)(ce,null))};var oe=r(23),ae=r(8),ie=r(42),ue=(r(235),r(60)),le=r(79),de=r(539),be=r(70),Ee=r(167);const pe=e=>{let{className:t,href:r,text:c,onClick:n}=e;return Object(s.createElement)(ue.a,{className:t,href:r,onClick:n,rel:"nofollow"},c)},me=e=>{let{className:t,quantityInCart:r,isProcessing:c,isDisabled:n,isDone:a,onClick:i}=e;return Object(s.createElement)(ue.a,{className:t,disabled:n,showSpinner:c,onClick:i},a&&r>0?Object(o.sprintf)(
/* translators: %s number of products in cart. */
Object(o._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(o.__)("Add to cart","woo-gutenberg-products-block"),!!a&&Object(s.createElement)(le.a,{icon:de.a}))};var _e=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:c,productType:n,isDisabled:a,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=z(),{parentName:b}=Object(oe.useInnerBlockLayoutContext)(),{dispatchStoreEvent:E}=Object(be.a)(),{cartQuantity:p}=Object(Ee.a)(c.id||0),[m,_]=Object(s.useState)(!1),O=c.add_to_cart||{url:"",text:""};return Object(s.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||_(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===n)&&t?Object(s.createElement)(me,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:p,isDisabled:a,isProcessing:i,isDone:m,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==c?void 0:c.id)||0)),E("cart-add-item",{product:c,listName:b})}}):Object(s.createElement)(pe,{className:"wc-block-components-product-add-to-cart-button",href:O.url,text:O.text||Object(o.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{E("product-view-link",{product:c,listName:b})}})},Oe=r(118),he=e=>{let{disabled:t,min:r,max:c,step:n=1,value:o,onChange:a}=e;const i=void 0!==c,u=Object(Oe.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(c/n)*n)),t=Math.max(t,Math.ceil(r/n)*n),t=Math.floor(t/n)*n,t!==e&&a(t)},300);return Object(s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:c,step:n,hidden:1===c,disabled:t,onChange:e=>{a(e.target.value),u(e.target.value)}})},fe=e=>{let{reason:t=Object(o.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")}=e;return Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},Se=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(s.createElement)(fe,null):e.id&&!e.is_in_stock?Object(s.createElement)(fe,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(_e,null))},ge=(r(265),r(557)),je=r(13),ve=r(16);const Re={value:"",label:Object(o.__)("Select an option","woo-gutenberg-products-block")};var ye=e=>{let{attributeName:t,options:r=[],value:c="",onChange:a=(()=>{}),errorMessage:i=Object(o.__)("Please select a value.","woo-gutenberg-products-block")}=e;const d=t,{setValidationErrors:b,clearValidationError:E}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),{error:p}=Object(u.useSelect)(e=>({error:e(l.VALIDATION_STORE_KEY).getValidationError(d)||{}}));return Object(je.useEffect)(()=>{c?E(d):b({[d]:{message:i,hidden:!0}})},[c,d,i,E,b]),Object(je.useEffect)(()=>()=>{E(d)},[d,E]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(s.createElement)(ge.a,{label:Object(te.decodeEntities)(t),value:c||"",options:[Re,...r],onChange:a,required:!0,className:n()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==p?void 0:p.message)&&!(null!=p&&p.hidden)})}),Object(s.createElement)(ve.ValidationInputError,{propertyName:d,elementId:d}))},Te=r(33);const Ce=(e,t,r)=>{const s=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return s;const c=Object.keys(e);return s.filter(e=>c.every(s=>{const c=r[s]||"",n=t["id:"+e].attributes[s];return""===c||null===n||n===c}))};var we=e=>{let{attributes:t,variationAttributes:r,setRequestParams:c}=e;const n=Object(a.a)(t),o=Object(a.a)(r),[i,u]=Object(s.useState)(0),[l,d]=Object(s.useState)({}),[b,E]=Object(s.useState)(!1),p=Object(s.useMemo)(()=>((e,t,r)=>{const s={},c=Object.keys(e),n=Object.values(r).filter(Boolean).length>0;return c.forEach(c=>{const o=e[c],a={...r,[c]:null},i=n?Ce(e,t,a):null,u=null!==i?i.map(e=>t["id:"+e].attributes[c]):null;s[c]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:s}=e;return null===t||t.includes(null)||t.includes(s)?{value:s,label:Object(te.decodeEntities)(r)}:null}).filter(Boolean)}(o.terms,u)}),s})(n,o,l),[l,n,o]);return Object(s.useEffect)(()=>{if(!b){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(Te.a)(e))return{};const t=Object.keys(e),r={};return 0===t.length||t.forEach(t=>{const s=e[t],c=s.terms.filter(e=>e.default);var n;c.length>0&&(r[s.name]=null===(n=c[0])||void 0===n?void 0:n.slug)}),r}(t);e&&d({...e}),E(!0)}},[l,t,b]),Object(s.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(n).length?u(((e,t,r)=>Ce(e,t,r)[0]||0)(n,o,l)):i>0&&u(0)},[l,i,n,o]),Object(s.useEffect)(()=>{c({id:i,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[c,i,l]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(n).map(e=>Object(s.createElement)(ye,{key:e,attributeName:e,options:p[e],value:l[e],onChange:t=>{d({...l,[e]:t})}})))},Ae=e=>{let{product:t,dispatchers:r}=e;const c=(e=>e?Object(ae.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(t.attributes),n=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:s}=e;t["id:"+r]={id:r,attributes:s.reduce((e,t)=>{let{name:r,value:s}=t;return e[r]=s,e},{})}}),t})(t.variations);return 0===Object.keys(c).length||0===n.length?null:Object(s.createElement)(we,{attributes:c,variationAttributes:n,setRequestParams:r.setRequestParams})},Pe=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:n,dispatchActions:a,isDisabled:i}=z();return e.id&&!e.is_purchasable?Object(s.createElement)(fe,null):e.id&&!e.is_in_stock?Object(s.createElement)(fe,{reason:Object(o.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(Ae,{product:e,dispatchers:a}),Object(s.createElement)(he,{value:t,min:r,max:c,step:n,disabled:i,onChange:a.setQuantity}),Object(s.createElement)(_e,null))},Ie=()=>Object(s.createElement)(_e,null),ke=r(541),Ne=()=>Object(s.createElement)(ke.a,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element."),De=()=>Object(s.createElement)(Ne,null);const Le=()=>{const{showFormElements:e,productType:t}=z();return e?"variable"===t?Object(s.createElement)(Pe,null):"grouped"===t?Object(s.createElement)(De,null):"external"===t?Object(s.createElement)(Ie,null):"simple"===t||"variation"===t?Object(s.createElement)(Se,null):null:Object(s.createElement)(_e,null)};t.a=Object(ie.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:c}=Object(oe.useProductDataContext)(),o=n()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ae.isEmpty)(c)});return Object(s.createElement)(ne,{product:c,showFormElements:r},Object(s.createElement)("div",{className:o},Object(s.createElement)(Le,null)))})},235:function(e,t){},257:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));const s=window.CustomEvent||null,c=(e,t)=>{let{bubbles:r=!1,cancelable:c=!1,element:n,detail:o={}}=t;if(!s)return;n||(n=document.body);const a=new s(e,{bubbles:r,cancelable:c,detail:o});n.dispatchEvent(a)},n=e=>{let{preserveCartData:t=!1}=e;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:t}})},o=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const n=()=>{c(t,{bubbles:r,cancelable:s})};return jQuery(document).on(e,n),()=>jQuery(document).off(e,n)}},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(93),c=(r(17),r(2));const n=e=>{const t=Object.keys(c.defaultAddressFields),r=Object(s.a)(t,{},e.country),n=Object.assign({},e);return r.forEach(t=>{let{key:r="",hidden:s=!1}=t;s&&((e,t)=>e in t)(r,e)&&(n[r]="")}),n}},265:function(e,t){},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(98);const c=(e,t)=>function(r){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const n=s.a.addEventCallback(e,r,c);return t(n),()=>{t(s.a.removeEventCallback(e,n.id))}}},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return n}));var s=r(59);const c=async(e,t,r)=>{const c=Object(s.a)(e,t),n=[];for(const e of c)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&n.push(t)}catch(e){console.error(e)}return!n.length||n},n=async(e,t,r)=>{const c=[],n=Object(s.a)(e,t);for(const e of n)try{const t=await Promise.resolve(e.callback(r));if("object"!=typeof t||null===t)continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(Object(s.b)(t)||Object(s.c)(t))return c.push(t),c;c.push(t)}catch(e){return console.error(e),c.push({type:"error"}),c}return c}},314:function(e,t,r){"use strict";t.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},356:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));const s=e=>e.is_purchasable||!1,c=e=>["simple","variable"].includes(e.type||"simple")},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(0),c=r(26),n=r.n(c);function o(e){const t=Object(s.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var s=r(8),c=r(0),n=r(10),o=r(7),a=r(15),i=r(258),u=r(80),l=r(257);const d=e=>{const t=e.detail;t&&t.preserveCartData||Object(o.dispatch)(n.CART_STORE_KEY).invalidateResolutionForStore()},b=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},E=()=>{Object(c.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),0===window.wcBlocksStoreCartListeners.count){const e=Object(l.a)("added_to_cart","wc-blocks_added_to_cart"),t=Object(l.a)("removed_from_cart","wc-blocks_removed_from_cart");document.body.addEventListener("wc-blocks_added_to_cart",d),document.body.addEventListener("wc-blocks_removed_from_cart",d),window.wcBlocksStoreCartListeners.count=0,window.wcBlocksStoreCartListeners.remove=()=>{e(),t(),document.body.removeEventListener("wc-blocks_added_to_cart",d),document.body.removeEventListener("wc-blocks_removed_from_cart",d)}}window.wcBlocksStoreCartListeners.count++})(),b),[])},p={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},m={...p,email:""},_={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:n.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},O=e=>Object.fromEntries(Object.entries(e).map(e=>{let[t,r]=e;return[t,Object(a.decodeEntities)(r)]})),h={cartCoupons:n.EMPTY_CART_COUPONS,cartItems:n.EMPTY_CART_ITEMS,cartFees:n.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:n.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:_,cartIsLoading:!0,cartErrors:n.EMPTY_CART_ERRORS,billingAddress:m,shippingAddress:p,shippingRates:n.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentRequirements:n.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},extensions:n.EMPTY_EXTENSIONS},f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:t,previewData:r}=Object(u.b)(),a=null==r?void 0:r.previewCart,{shouldSelect:l}=e,d=Object(c.useRef)();E();const b=Object(o.useSelect)((e,r)=>{let{dispatch:s}=r;if(!l)return h;if(t)return{cartCoupons:a.coupons,cartItems:a.items,crossSellsProducts:a.cross_sells,cartFees:a.fees,cartItemsCount:a.items_count,cartItemsWeight:a.items_weight,cartNeedsPayment:a.needs_payment,cartNeedsShipping:a.needs_shipping,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:a.totals,cartIsLoading:!1,cartErrors:n.EMPTY_CART_ERRORS,billingData:m,billingAddress:m,shippingAddress:p,extensions:n.EMPTY_EXTENSIONS,shippingRates:a.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:a.has_calculated_shipping,paymentRequirements:a.paymentRequirements,receiveCart:"function"==typeof(null==a?void 0:a.receiveCart)?a.receiveCart:()=>{}};const c=e(n.CART_STORE_KEY),o=c.getCartData(),u=c.getCartErrors(),d=c.getCartTotals(),b=!c.hasFinishedResolution("getCartData"),E=c.isCustomerDataUpdating(),{receiveCart:_}=s(n.CART_STORE_KEY),f=O(o.billingAddress),S=o.needsShipping?O(o.shippingAddress):f,g=o.fees.length>0?o.fees.map(e=>O(e)):n.EMPTY_CART_FEES;return{cartCoupons:o.coupons.length>0?o.coupons.map(e=>({...e,label:e.code})):n.EMPTY_CART_COUPONS,cartItems:o.items,crossSellsProducts:o.crossSells,cartFees:g,cartItemsCount:o.itemsCount,cartItemsWeight:o.itemsWeight,cartNeedsPayment:o.needsPayment,cartNeedsShipping:o.needsShipping,cartItemErrors:o.errors,cartTotals:d,cartIsLoading:b,cartErrors:u,billingData:Object(i.a)(f),billingAddress:Object(i.a)(f),shippingAddress:Object(i.a)(S),extensions:o.extensions,shippingRates:o.shippingRates,isLoadingRates:E,cartHasCalculatedShipping:o.hasCalculatedShipping,paymentRequirements:o.paymentRequirements,receiveCart:_}},[l]);return d.current&&Object(s.isEqual)(d.current,b)||(d.current=b),d.current}},562:function(e,t,r){"use strict";r.r(t);var s=r(42),c=r(209),n=r(314);t.default=Object(s.withFilteredAttributes)(n.a)(c.a)},59:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u}));var s=r(33);const c=(e,t)=>e[t]?Array.from(e[t].values()).sort((e,t)=>e.priority-t.priority):[];let n,o;!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(n||(n={})),function(e){e.PAYMENTS="wc/payment-area",e.EXPRESS_PAYMENTS="wc/express-payment-area"}(o||(o={}));const a=(e,t)=>Object(s.a)(e)&&"type"in e&&e.type===t,i=e=>a(e,n.ERROR),u=e=>a(e,n.FAIL)},60:function(e,t,r){"use strict";var s=r(6),c=r.n(s),n=r(0),o=r(140),a=r(4),i=r.n(a),u=r(96);r(163),t.a=e=>{let{className:t,showSpinner:r=!1,children:s,variant:a="contained",...l}=e;const d=i()("wc-block-components-button",t,a,{"wc-block-components-button--loading":r});return Object(n.createElement)(o.a,c()({className:d},l),r&&Object(n.createElement)(u.a,null),Object(n.createElement)("span",{className:"wc-block-components-button__text"},s))}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(45),c=r(0),n=r(41);const o=()=>{const e=Object(n.a)(),t=Object(c.useRef)(e);return Object(c.useEffect)(()=>{t.current=e},[e]),{dispatchStoreEvent:Object(c.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(s.doAction)("experimental__woocommerce_blocks-"+e,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(s.doAction)("experimental__woocommerce_blocks-checkout-"+e,{...r,storeCart:t.current})}catch(e){console.error(e)}}),[])}}},80:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var s=r(0),c=r(7);const n=Object(s.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>{}}),o=()=>Object(s.useContext)(n),a=e=>{let{children:t,currentPostId:r=0,currentView:o="",previewData:a={}}=e;const i=Object(c.useSelect)(e=>r||e("core/editor").getCurrentPostId(),[r]),u=Object(s.useCallback)(e=>e in a?a[e]:{},[a]),l={isEditor:!0,currentPostId:i,currentView:o,previewData:a,getPreviewData:u};return Object(s.createElement)(n.Provider,{value:l},t)}},93:function(e,t,r){"use strict";var s=r(2),c=r(1),n=r(149),o=r(83);const a=Object(s.getSetting)("countryLocale",{}),i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),e.label)),e.priority&&(Object(n.a)(e.priority)&&(t.index=e.priority),Object(o.a)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},u=Object.entries(a).map(e=>{let[t,r]=e;return[t,Object.entries(r).map(e=>{let[t,r]=e;return[t,i(r)]}).reduce((e,t)=>{let[r,s]=t;return e[r]=s,e},{})]}).reduce((e,t)=>{let[r,s]=t;return e[r]=s,e},{});t.a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==u[r]?u[r]:{};return e.map(e=>({key:e,...s.defaultAddressFields[e]||{},...c[e]||{},...t[e]||{}})).sort((e,t)=>e.index-t.index)}},96:function(e,t,r){"use strict";var s=r(0);r(164),t.a=()=>Object(s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var s=r(8);let c;!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(c||(c={}));const n={addEventCallback:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(s.uniqueId)(),type:c.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:(e,t)=>({id:t,type:c.REMOVE_EVENT_CALLBACK,eventType:e})},o={},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,{type:t,eventType:r,id:s,callback:n,priority:a}=arguments.length>1?arguments[1]:void 0;const i=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case c.ADD_EVENT_CALLBACK:return i.set(s,{priority:a,callback:n}),{...e,[r]:i};case c.REMOVE_EVENT_CALLBACK:return i.delete(s),{...e,[r]:i}}}}}]);