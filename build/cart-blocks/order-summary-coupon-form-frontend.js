(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[26],{21:function(e,t,o){"use strict";var n=o(0),c=o(6),a=o.n(c);t.a=e=>{let t,{label:o,screenReaderLabel:c,wrapperElement:r,wrapperProps:s={}}=e;const l=null!=o,p=null!=c;return!l&&p?(t=r||"span",s={...s,className:a()(s.className,"screen-reader-text")},Object(n.createElement)(t,s,c)):(t=r||n.Fragment,l&&p&&o!==c?Object(n.createElement)(t,s,Object(n.createElement)("span",{"aria-hidden":"true"},o),Object(n.createElement)("span",{className:"screen-reader-text"},c)):Object(n.createElement)(t,s,o))}},281:function(e,t,o){"use strict";var n=o(15),c=o.n(n),a=o(0),r=o(55),s=o(6),l=o.n(s),p=o(148);o(282),t.a=e=>{let{className:t,showSpinner:o=!1,children:n,variant:s="contained",...i}=e;const u=l()("wc-block-components-button","wp-element-button",t,s,{"wc-block-components-button--loading":o});return Object(a.createElement)(r.a,c()({className:u},i),o&&Object(a.createElement)(p.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},n))}},282:function(e,t){},302:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));var n=o(1),c=o(7),a=o(3),r=o(31),s=o(11),l=o(43);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{cartCoupons:t,cartIsLoading:o}=Object(l.a)(),{createErrorNotice:p}=Object(c.useDispatch)("core/notices"),{createNotice:i}=Object(c.useDispatch)("core/notices"),{setValidationErrors:u}=Object(c.useDispatch)(a.VALIDATION_STORE_KEY),{isApplyingCoupon:b,isRemovingCoupon:d}=Object(c.useSelect)(e=>{const t=e(a.CART_STORE_KEY);return{isApplyingCoupon:t.isApplyingCoupon(),isRemovingCoupon:t.isRemovingCoupon()}},[p,i]),{applyCoupon:m,removeCoupon:O,receiveApplyingCoupon:g}=Object(c.useDispatch)(a.CART_STORE_KEY),j=t=>{m(t).then(o=>{!0===o&&Object(s.__experimentalApplyCheckoutFilter)({filterName:"showApplyCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&i("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been applied to your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(e=>{u({coupon:{message:Object(r.decodeEntities)(e.message),hidden:!1}}),g("")})},E=t=>{O(t).then(o=>{!0===o&&Object(s.__experimentalApplyCheckoutFilter)({filterName:"showRemoveCouponNotice",defaultValue:!0,arg:{couponCode:t,context:e}})&&i("info",Object(n.sprintf)(
/* translators: %s coupon code. */
Object(n.__)('Coupon code "%s" has been removed from your cart.',"woo-gutenberg-products-block"),t),{id:"coupon-form",type:"snackbar",context:e})}).catch(t=>{p(t.message,{id:"coupon-form",context:e}),g("")})};return{appliedCoupons:t,isLoading:o,applyCoupon:j,removeCoupon:E,isApplyingCoupon:b,isRemovingCoupon:d}}},369:function(e,t){},440:function(e,t,o){"use strict";var n=o(0),c=o(1),a=o(281),r=o(21),s=o(149),l=o(9),p=o(11),i=o(7),u=o(3);o(369),t.a=Object(l.withInstanceId)(e=>{let{instanceId:t,isLoading:o=!1,initialOpen:l=!1,onSubmit:b=(()=>{})}=e;const[d,m]=Object(n.useState)(""),O=Object(n.useRef)(!1),g="wc-block-components-totals-coupon__input-"+t,{validationError:j,validationErrorId:E}=Object(i.useSelect)(e=>{const t=e(u.VALIDATION_STORE_KEY);return{validationError:t.getValidationError("coupon"),validationErrorId:t.getValidationErrorId(g)}});return Object(n.useEffect)(()=>{O.current!==o&&(o||!d||j||m(""),O.current=o)},[o,d,j]),Object(n.createElement)(p.Panel,{className:"wc-block-components-totals-coupon",hasBorder:!1,initialOpen:l,title:Object(n.createElement)(r.a,{label:Object(c.__)("Coupon code","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Apply a coupon code","woo-gutenberg-products-block"),htmlFor:g})},Object(n.createElement)(s.a,{screenReaderLabel:Object(c.__)("Applying coupon…","woo-gutenberg-products-block"),isLoading:o,showSpinner:!1},Object(n.createElement)("div",{className:"wc-block-components-totals-coupon__content"},Object(n.createElement)("form",{className:"wc-block-components-totals-coupon__form"},Object(n.createElement)(p.ValidatedTextInput,{id:g,errorId:"coupon",className:"wc-block-components-totals-coupon__input",label:Object(c.__)("Enter code","woo-gutenberg-products-block"),value:d,ariaDescribedBy:E,onChange:e=>{m(e)},focusOnMount:!0,showError:!1}),Object(n.createElement)(a.a,{className:"wc-block-components-totals-coupon__button",disabled:o||!d,showSpinner:o,onClick:e=>{e.preventDefault(),b(d)},type:"submit"},Object(c.__)("Apply","woo-gutenberg-products-block"))),Object(n.createElement)(p.ValidationInputError,{propertyName:"coupon",elementId:g}))))})},520:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(440),a=o(302),r=o(2),s=o(11);t.default=e=>{let{className:t}=e;const o=Object(r.getSetting)("couponsEnabled",!0),{applyCoupon:l,isApplyingCoupon:p}=Object(a.a)("wc/cart");return o?Object(n.createElement)(s.TotalsWrapper,{className:t},Object(n.createElement)(c.a,{onSubmit:l,isLoading:p})):null}}}]);