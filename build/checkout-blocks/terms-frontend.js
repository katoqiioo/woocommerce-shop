(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[54],{29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(0),c=n(14),r=n.n(c);function o(e){const t=Object(s.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},309:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var s=n(29),c=n(18),r=n(7),o=n(3);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:a,availableExpressPaymentMethods:i}=Object(r.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(a).map(e=>{let{name:t}=e;return t}),u=Object.values(i).map(e=>{let{name:t}=e;return t}),d=Object(c.getPaymentMethods)(),b=Object(c.getExpressPaymentMethods)(),m=Object.keys(d).reduce((e,t)=>(l.includes(t)&&(e[t]=d[t]),e),{}),g=Object.keys(b).reduce((e,t)=>(u.includes(t)&&(e[t]=b[t]),e),{}),h=Object(s.a)(m),p=Object(s.a)(g);return{paymentMethods:e?p:h,isInitialized:e?n:t}},i=()=>a(!1),l=()=>a(!0)},448:function(e,t){},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(3),c=n(7),r=n(87),o=n(309);const a=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:n,isAfterProcessing:a,isComplete:i,hasError:l}=Object(c.useSelect)(e=>{const t=e(s.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}}),{activePaymentMethod:u,isExpressPaymentMethodActive:d}=Object(c.useSelect)(e=>{const t=e(s.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}}),{onSubmit:b}=Object(r.b)(),{paymentMethods:m={}}=Object(o.b)(),g=n||a||t,h=i&&!l;return{paymentMethodButtonLabel:(m[u]||{}).placeOrderButtonLabel,onSubmit:b,isCalculating:e,isDisabled:n||d,waitingForProcessing:g,waitingForRedirect:h}}},521:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n(6),o=n.n(r),a=n(11),i=n(449),l=n(9),u=n(7),d=n(3),b=n(37);const m=b.k?`<a href="${b.k}" target="_blank">${Object(c.__)("Terms and Conditions","woo-gutenberg-products-block")}</a>`:Object(c.__)("Terms and Conditions","woo-gutenberg-products-block"),g=b.g?`<a href="${b.g}" target="_blank">${Object(c.__)("Privacy Policy","woo-gutenberg-products-block")}</a>`:Object(c.__)("Privacy Policy","woo-gutenberg-products-block"),h=Object(c.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("By proceeding with your purchase you agree to our %1$s and %2$s","woo-gutenberg-products-block"),m,g),p=Object(c.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("You must accept our %1$s and %2$s to continue with your purchase.","woo-gutenberg-products-block"),m,g);n(448),t.default=Object(l.withInstanceId)(e=>{let{text:t,checkbox:n,instanceId:r,className:l}=e;const[b,m]=Object(s.useState)(!1),{isDisabled:g}=Object(i.a)(),O="terms-and-conditions-"+r,{setValidationErrors:y,clearValidationError:j}=Object(u.useDispatch)(d.VALIDATION_STORE_KEY),P=Object(u.useSelect)(e=>e(d.VALIDATION_STORE_KEY).getValidationError(O)),_=!(null==P||!P.message||null!=P&&P.hidden);return Object(s.useEffect)(()=>{if(n)return b?j(O):y({[O]:{message:Object(c.__)("Please read and accept the terms and conditions.","woo-gutenberg-products-block"),hidden:!0}}),()=>{j(O)}},[n,b,O,j,y]),Object(s.createElement)("div",{className:o()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":g},l)},n?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(a.CheckboxControl,{id:"terms-and-conditions",checked:b,onChange:()=>m(e=>!e),hasError:_,disabled:g},Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||p}}))):Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||h}}))})}}]);