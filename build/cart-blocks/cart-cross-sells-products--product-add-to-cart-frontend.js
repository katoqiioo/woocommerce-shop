(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[7],{162:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));var s=r(7);const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;const r=Object(s.select)("core/notices").getNotices(e);return r.some(e=>e.type===t)},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=Object(s.select)("core/notices").getNotices(),{removeNotice:c}=Object(s.dispatch)("core/notices"),o=r.filter(t=>t.status===e);o.forEach(e=>c(e.id,t))}},289:function(e,t,r){"use strict";var s=r(15),c=r.n(s),o=r(0),a=r(57),n=r(5),i=r.n(n),u=r(152);r(290),t.a=e=>{let{className:t,showSpinner:r=!1,children:s,variant:n="contained",...l}=e;const d=i()("wc-block-components-button",t,n,{"wc-block-components-button--loading":r});return Object(o.createElement)(a.a,c()({className:d},l),r&&Object(o.createElement)(u.a,null),Object(o.createElement)("span",{className:"wc-block-components-button__text"},s))}},290:function(e,t){},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r(0),c=r(13),o=r.n(c);function a(e){const t=Object(s.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},315:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(0),c=r(7),o=r(3),a=r(23),n=r(41);const i=(e,t)=>{const r=e.find(e=>{let{id:r}=e;return r===t});return r?r.quantity:0},u=e=>{const{addItemToCart:t}=Object(c.useDispatch)(o.CART_STORE_KEY),{cartItems:r,cartIsLoading:u}=Object(n.a)(),{createErrorNotice:l,removeNotice:d}=Object(c.useDispatch)("core/notices"),[b,E]=Object(s.useState)(!1),m=Object(s.useRef)(i(r,e));return Object(s.useEffect)(()=>{const t=i(r,e);t!==m.current&&(m.current=t)},[r,e]),{cartQuantity:Number.isFinite(m.current)?m.current:0,addingToCart:b,cartIsLoading:u,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return E(!0),t(e,r).then(()=>{d("add-to-cart")}).catch(e=>{l(Object(a.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{E(!1)})}}}},380:function(e,t,r){"use strict";var s=r(0),c=r(5),o=r.n(c),a=r(1),n=r(31);const i=e=>e.is_purchasable||!1;var u=r(7),l=r(3);const d={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},b={status:d.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},E={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:m,SET_IDLE:p,SET_DISABLED:O,SET_PROCESSING:_,SET_BEFORE_PROCESSING:h,SET_AFTER_PROCESSING:j,SET_PROCESSING_RESPONSE:S,SET_HAS_ERROR:g,SET_NO_ERROR:f,SET_QUANTITY:v,SET_REQUEST_PARAMS:R}=E,T=()=>({type:p}),P=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=e?g:f;return{type:t}},{SET_PRISTINE:A,SET_IDLE:I,SET_DISABLED:N,SET_PROCESSING:y,SET_BEFORE_PROCESSING:C,SET_AFTER_PROCESSING:k,SET_PROCESSING_RESPONSE:w,SET_HAS_ERROR:D,SET_NO_ERROR:F,SET_QUANTITY:q,SET_REQUEST_PARAMS:x}=E,{PRISTINE:B,IDLE:G,DISABLED:L,PROCESSING:Q,BEFORE_PROCESSING:M,AFTER_PROCESSING:V}=d,W=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,{quantity:r,type:s,data:c}=arguments.length>1?arguments[1]:void 0;switch(s){case A:e=b;break;case I:e=t.status!==G?{...t,status:G}:t;break;case N:e=t.status!==L?{...t,status:L}:t;break;case q:e=r!==t.quantity?{...t,quantity:r}:t;break;case x:e={...t,requestParams:{...t.requestParams,...c}};break;case w:e={...t,processingResponse:c};break;case y:e=t.status!==Q?{...t,status:Q,hasError:!1}:t,e=!1===e.hasError?e:{...e,hasError:!1};break;case C:e=t.status!==M?{...t,status:M,hasError:!1}:t;break;case k:e=t.status!==V?{...t,status:V}:t;break;case D:e=t.hasError?t:{...t,hasError:!0},e=t.status===Q||t.status===M?{...e,status:G}:e;break;case F:e=t.hasError?{...t,hasError:!1}:t}return e!==t&&s!==A&&e.status===B&&(e.status=G),e};var H=r(106),Y=r(231);const K=e=>({onAddToCartAfterProcessingWithSuccess:Object(Y.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(Y.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(Y.a)("add_to_cart_before_processing",e)});var U=r(234),J=r(45),z=r(162);const X=Object(s.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),Z=()=>Object(s.useContext)(X),$=e=>{var t,r,c,o;let{children:E,product:p,showFormElements:g}=e;const[f,A]=Object(s.useReducer)(W,b),[I,N]=Object(s.useReducer)(H.b,{}),y=Object(n.a)(I),{createErrorNotice:C}=Object(u.useDispatch)("core/notices"),{setValidationErrors:k}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),w=Object(s.useMemo)(()=>({onAddToCartAfterProcessingWithSuccess:K(N).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:K(N).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:K(N).onAddToCartBeforeProcessing}),[N]),D=Object(s.useMemo)(()=>({resetForm:()=>{A({type:m})},submitForm:()=>{A({type:h})},setQuantity:e=>{A((e=>({type:v,quantity:e}))(e))},setHasError:e=>{A(P(e))},setRequestParams:e=>{A((e=>({type:R,data:e}))(e))},setAfterProcessing:e=>{A({type:S,data:e}),A({type:j})}}),[]);Object(s.useEffect)(()=>{const e=f.status,t=!p.id||!i(p);e!==d.DISABLED||t?e!==d.DISABLED&&t&&A({type:O}):A(T())},[f.status,p,A]),Object(s.useEffect)(()=>{f.status===d.BEFORE_PROCESSING&&(Object(z.b)("error","wc/add-to-cart"),Object(U.a)(y,"add_to_cart_before_processing",{}).then(e=>{!0!==e?(Array.isArray(e)&&e.forEach(e=>{let{errorMessage:t,validationErrors:r}=e;t&&C(t,{context:"wc/add-to-cart"}),r&&k(r)}),A(T())):A({type:_})}))},[f.status,k,C,A,y,null==p?void 0:p.id]),Object(s.useEffect)(()=>{if(f.status===d.AFTER_PROCESSING){const e={processingResponse:f.processingResponse},t=e=>{let t=!1;return e.forEach(e=>{const{message:r,messageContext:s}=e;(Object(J.b)(e)||Object(J.c)(e))&&r&&(t=!0,C(r,s?{context:s}:void 0))}),t};if(f.hasError)return void Object(U.b)(y,"add_to_cart_after_processing_with_error",e).then(r=>{if(!t(r)){var s;const t=(null===(s=e.processingResponse)||void 0===s?void 0:s.message)||Object(a.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block");C(t,{id:"add-to-cart",context:"woocommerce/single-product/"+((null==p?void 0:p.id)||0)})}A(T())});Object(U.b)(y,"add_to_cart_after_processing_with_success",e).then(e=>{t(e)?A(P(!0)):A(T())})}},[f.status,f.hasError,f.processingResponse,D,C,y,null==p?void 0:p.id]);const F=(e=>["simple","variable"].includes(e.type||"simple"))(p),q={product:p,productType:p.type||"simple",productIsPurchasable:i(p),productHasOptions:p.has_options||!1,supportsFormElements:F,showFormElements:g&&F,quantity:f.quantity||(null==p||null===(t=p.add_to_cart)||void 0===t?void 0:t.minimum)||1,minQuantity:(null==p||null===(r=p.add_to_cart)||void 0===r?void 0:r.minimum)||1,maxQuantity:(null==p||null===(c=p.add_to_cart)||void 0===c?void 0:c.maximum)||99,multipleOf:(null==p||null===(o=p.add_to_cart)||void 0===o?void 0:o.multiple_of)||1,requestParams:f.requestParams,isIdle:f.status===d.IDLE,isDisabled:f.status===d.DISABLED,isProcessing:f.status===d.PROCESSING,isBeforeProcessing:f.status===d.BEFORE_PROCESSING,isAfterProcessing:f.status===d.AFTER_PROCESSING,hasError:f.hasError,eventRegistration:w,dispatchActions:D};return Object(s.createElement)(X.Provider,{value:q},E)};var ee=r(34),te=r.n(ee),re=r(23),se=r(88),ce=r(41),oe=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:c,hasError:o,isProcessing:n,requestParams:i}=Z(),{showAllValidationErrors:d}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),b=Object(u.useSelect)(e=>e(l.VALIDATION_STORE_KEY).hasValidationErrors),{createErrorNotice:E,removeNotice:m}=Object(u.useDispatch)("core/notices"),{receiveCart:p}=Object(ce.a)(),[O,_]=Object(s.useState)(!1),h=!o&&n,j=Object(s.useCallback)(()=>!b()||(d(),{type:"error"}),[b,d]);Object(s.useEffect)(()=>{const e=c.onAddToCartBeforeProcessing(j,0);return()=>{e()}},[c,j]);const S=Object(s.useCallback)(()=>{_(!0),m("add-to-cart","woocommerce/single-product/"+((null==t?void 0:t.id)||0));const s={id:t.id||0,quantity:r,...i};te()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then(r=>{te.a.setNonce(r.headers),r.json().then((function(s){r.ok?p(s):(s.body&&s.body.message?E(Object(re.decodeEntities)(s.body.message),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}):E(Object(a.__)("Something went wrong. Please contact us for assistance.","woo-gutenberg-products-block"),{id:"add-to-cart",context:"woocommerce/single-product/"+((null==t?void 0:t.id)||0)}),e.setHasError()),Object(se.c)({preserveCartData:!0}),e.setAfterProcessing(s),_(!1)}))}).catch(t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&p(t.data.cart),e.setHasError(),e.setAfterProcessing(t),_(!1)}))})},[t,E,m,p,e,r,i]);return Object(s.useEffect)(()=>{h&&!O&&S()},[h,S,O]),null};const ae=e=>{let{children:t,product:r,showFormElements:c}=e;return Object(s.createElement)($,{product:r,showFormElements:c},t,Object(s.createElement)(oe,null))};var ne=r(50),ie=r(4),ue=r(140),le=(r(393),r(289)),de=r(94),be=r(394),Ee=r(69),me=r(315);const pe=e=>{let{className:t,href:r,text:c,onClick:o}=e;return Object(s.createElement)(le.a,{className:t,href:r,onClick:o,rel:"nofollow"},c)},Oe=e=>{let{className:t,quantityInCart:r,isProcessing:c,isDisabled:o,isDone:n,onClick:i}=e;return Object(s.createElement)(le.a,{className:t,disabled:o,showSpinner:c,onClick:i},n&&r>0?Object(a.sprintf)(
/* translators: %s number of products in cart. */
Object(a._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(a.__)("Add to cart","woo-gutenberg-products-block"),!!n&&Object(s.createElement)(de.a,{icon:be.a}))};var _e=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:c,productType:o,isDisabled:n,isProcessing:i,eventRegistration:u,hasError:l,dispatchActions:d}=Z(),{parentName:b}=Object(ne.useInnerBlockLayoutContext)(),{dispatchStoreEvent:E}=Object(Ee.a)(),{cartQuantity:m}=Object(me.a)(c.id||0),[p,O]=Object(s.useState)(!1),_=c.add_to_cart||{url:"",text:""};return Object(s.useEffect)(()=>{const e=u.onAddToCartAfterProcessingWithSuccess(()=>(l||O(!0),!0),0);return()=>{e()}},[u,l]),(e||!r&&"simple"===o)&&t?Object(s.createElement)(Oe,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:m,isDisabled:n,isProcessing:i,isDone:p,onClick:()=>{d.submitForm("woocommerce/single-product/"+((null==c?void 0:c.id)||0)),E("cart-add-item",{product:c,listName:b})}}):Object(s.createElement)(pe,{className:"wc-block-components-product-add-to-cart-button",href:_.url,text:_.text||Object(a.__)("View Product","woo-gutenberg-products-block"),onClick:()=>{E("product-view-link",{product:c,listName:b})}})},he=r(53),je=e=>{let{disabled:t,min:r,max:c,step:o=1,value:a,onChange:n}=e;const i=void 0!==c,u=Object(he.a)(e=>{let t=e;i&&(t=Math.min(t,Math.floor(c/o)*o)),t=Math.max(t,Math.ceil(r/o)*o),t=Math.floor(t/o)*o,t!==e&&n(t)},300);return Object(s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:a,min:r,max:c,step:o,hidden:1===c,disabled:t,onChange:e=>{n(e.target.value),u(e.target.value)}})},Se=e=>{let{reason:t=Object(a.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block")}=e;return Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},t)},ge=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:o,dispatchActions:n,isDisabled:i}=Z();return e.id&&!e.is_purchasable?Object(s.createElement)(Se,null):e.id&&!e.is_in_stock?Object(s.createElement)(Se,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(je,{value:t,min:r,max:c,step:o,disabled:i,onChange:n.setQuantity}),Object(s.createElement)(_e,null))},fe=(r(395),r(462)),ve=r(8),Re=r(11);const Te={value:"",label:Object(a.__)("Select an option","woo-gutenberg-products-block")};var Pe=e=>{let{attributeName:t,options:r=[],value:c="",onChange:n=(()=>{}),errorMessage:i=Object(a.__)("Please select a value.","woo-gutenberg-products-block")}=e;const d=t,{setValidationErrors:b,clearValidationError:E}=Object(u.useDispatch)(l.VALIDATION_STORE_KEY),{error:m}=Object(u.useSelect)(e=>({error:e(l.VALIDATION_STORE_KEY).getValidationError(d)||{}}));return Object(ve.useEffect)(()=>{c?E(d):b({[d]:{message:i,hidden:!0}})},[c,d,i,E,b]),Object(ve.useEffect)(()=>()=>{E(d)},[d,E]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(s.createElement)(fe.a,{label:Object(re.decodeEntities)(t),value:c||"",options:[Te,...r],onChange:n,required:!0,className:o()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==m?void 0:m.message)&&!(null!=m&&m.hidden)})}),Object(s.createElement)(Re.ValidationInputError,{propertyName:d,elementId:d}))},Ae=r(19);const Ie=(e,t,r)=>{const s=Object.values(t).map(e=>{let{id:t}=e;return t});if(Object.values(r).every(e=>""===e))return s;const c=Object.keys(e);return s.filter(e=>c.every(s=>{const c=r[s]||"",o=t["id:"+e].attributes[s];return""===c||null===o||o===c}))};var Ne=e=>{let{attributes:t,variationAttributes:r,setRequestParams:c}=e;const o=Object(n.a)(t),a=Object(n.a)(r),[i,u]=Object(s.useState)(0),[l,d]=Object(s.useState)({}),[b,E]=Object(s.useState)(!1),m=Object(s.useMemo)(()=>((e,t,r)=>{const s={},c=Object.keys(e),o=Object.values(r).filter(Boolean).length>0;return c.forEach(c=>{const a=e[c],n={...r,[c]:null},i=o?Ie(e,t,n):null,u=null!==i?i.map(e=>t["id:"+e].attributes[c]):null;s[c]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map(e=>{let{name:r,slug:s}=e;return null===t||t.includes(null)||t.includes(s)?{value:s,label:Object(re.decodeEntities)(r)}:null}).filter(Boolean)}(a.terms,u)}),s})(o,a,l),[l,o,a]);return Object(s.useEffect)(()=>{if(!b){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(Ae.a)(e))return{};const t=Object.keys(e),r={};return 0===t.length||t.forEach(t=>{const s=e[t],c=s.terms.filter(e=>e.default);var o;c.length>0&&(r[s.name]=null===(o=c[0])||void 0===o?void 0:o.slug)}),r}(t);e&&d({...e}),E(!0)}},[l,t,b]),Object(s.useEffect)(()=>{Object.values(l).filter(e=>""!==e).length===Object.keys(o).length?u(((e,t,r)=>Ie(e,t,r)[0]||0)(o,a,l)):i>0&&u(0)},[l,i,o,a]),Object(s.useEffect)(()=>{c({id:i,variation:Object.keys(l).map(e=>({attribute:e,value:l[e]}))})},[c,i,l]),Object(s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(o).map(e=>Object(s.createElement)(Pe,{key:e,attributeName:e,options:m[e],value:l[e],onChange:t=>{d({...l,[e]:t})}})))},ye=e=>{let{product:t,dispatchers:r}=e;const c=(e=>e?Object(ie.keyBy)(Object.values(e).filter(e=>{let{has_variations:t}=e;return t}),"name"):{})(t.attributes),o=(e=>{if(!e)return{};const t={};return e.forEach(e=>{let{id:r,attributes:s}=e;t["id:"+r]={id:r,attributes:s.reduce((e,t)=>{let{name:r,value:s}=t;return e[r]=s,e},{})}}),t})(t.variations);return 0===Object.keys(c).length||0===o.length?null:Object(s.createElement)(Ne,{attributes:c,variationAttributes:o,setRequestParams:r.setRequestParams})},Ce=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:c,multipleOf:o,dispatchActions:n,isDisabled:i}=Z();return e.id&&!e.is_purchasable?Object(s.createElement)(Se,null):e.id&&!e.is_in_stock?Object(s.createElement)(Se,{reason:Object(a.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(ye,{product:e,dispatchers:n}),Object(s.createElement)(je,{value:t,min:r,max:c,step:o,disabled:i,onChange:n.setQuantity}),Object(s.createElement)(_e,null))},ke=()=>Object(s.createElement)(_e,null),we=r(370),De=()=>Object(s.createElement)(we.a,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element."),Fe=()=>Object(s.createElement)(De,null);const qe=()=>{const{showFormElements:e,productType:t}=Z();return e?"variable"===t?Object(s.createElement)(Ce,null):"grouped"===t?Object(s.createElement)(Fe,null):"external"===t?Object(s.createElement)(ke,null):"simple"===t||"variation"===t?Object(s.createElement)(ge,null):null:Object(s.createElement)(_e,null)};t.a=Object(ue.withProductDataContext)(e=>{let{className:t,showFormElements:r}=e;const{product:c}=Object(ne.useProductDataContext)(),a=o()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(ie.isEmpty)(c)});return Object(s.createElement)(ae,{product:c,showFormElements:r},Object(s.createElement)("div",{className:a},Object(s.createElement)(qe,null)))})},393:function(e,t){},395:function(e,t){}}]);