(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[4],{118:function(e,t,n){"use strict";var o=n(119);e.exports=function(e,t,n){n=n||{},9===t.nodeType&&(t=o.getWindow(t));var s=n.allowHorizontalScroll,i=n.onlyScrollIfNeeded,r=n.alignWithTop,a=n.alignWithLeft,u=n.offsetTop||0,l=n.offsetLeft||0,c=n.offsetBottom||0,d=n.offsetRight||0;s=void 0===s||s;var p=o.isWindow(t),h=o.offset(e),f=o.outerHeight(e),g=o.outerWidth(e),m=void 0,v=void 0,b=void 0,k=void 0,w=void 0,T=void 0,S=void 0,y=void 0,O=void 0,I=void 0;p?(S=t,I=o.height(S),O=o.width(S),y={left:o.scrollLeft(S),top:o.scrollTop(S)},w={left:h.left-y.left-l,top:h.top-y.top-u},T={left:h.left+g-(y.left+O)+d,top:h.top+f-(y.top+I)+c},k=y):(m=o.offset(t),v=t.clientHeight,b=t.clientWidth,k={left:t.scrollLeft,top:t.scrollTop},w={left:h.left-(m.left+(parseFloat(o.css(t,"borderLeftWidth"))||0))-l,top:h.top-(m.top+(parseFloat(o.css(t,"borderTopWidth"))||0))-u},T={left:h.left+g-(m.left+b+(parseFloat(o.css(t,"borderRightWidth"))||0))+d,top:h.top+f-(m.top+v+(parseFloat(o.css(t,"borderBottomWidth"))||0))+c}),w.top<0||T.top>0?!0===r?o.scrollTop(t,k.top+w.top):!1===r?o.scrollTop(t,k.top+T.top):w.top<0?o.scrollTop(t,k.top+w.top):o.scrollTop(t,k.top+T.top):i||((r=void 0===r||!!r)?o.scrollTop(t,k.top+w.top):o.scrollTop(t,k.top+T.top)),s&&(w.left<0||T.left>0?!0===a?o.scrollLeft(t,k.left+w.left):!1===a?o.scrollLeft(t,k.left+T.left):w.left<0?o.scrollLeft(t,k.left+w.left):o.scrollLeft(t,k.left+T.left):i||((a=void 0===a||!!a)?o.scrollLeft(t,k.left+w.left):o.scrollLeft(t,k.left+T.left)))}},119:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function i(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!=typeof n){var s=e.document;"number"!=typeof(n=s.documentElement[o])&&(n=s.body[o])}return n}function r(e){return i(e)}function a(e){return i(e,!0)}function u(e){var t=function(e){var t,n=void 0,o=void 0,s=e.ownerDocument,i=s.body,r=s&&s.documentElement;return n=(t=e.getBoundingClientRect()).left,o=t.top,{left:n-=r.clientLeft||i.clientLeft||0,top:o-=r.clientTop||i.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=r(o),t.top+=a(o),t}var l=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),c=/^(top|right|bottom|left)$/,d="left",p=void 0;function h(e,t){for(var n=0;n<e.length;n++)t(e[n])}function f(e){return"border-box"===p(e,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(e,t,n){var o="",s=e.ownerDocument,i=n||s.defaultView.getComputedStyle(e,null);return i&&(o=i.getPropertyValue(t)||i[t]),o}:function(e,t){var n=e.currentStyle&&e.currentStyle[t];if(l.test(n)&&!c.test(t)){var o=e.style,s=o[d],i=e.runtimeStyle[d];e.runtimeStyle[d]=e.currentStyle[d],o[d]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[d]=s,e.runtimeStyle[d]=i}return""===n?"auto":n});var g=["margin","border","padding"];function m(e,t,n){var o={},s=e.style,i=void 0;for(i in t)t.hasOwnProperty(i)&&(o[i]=s[i],s[i]=t[i]);for(i in n.call(e),t)t.hasOwnProperty(i)&&(s[i]=o[i])}function v(e,t,n){var o=0,s=void 0,i=void 0,r=void 0;for(i=0;i<t.length;i++)if(s=t[i])for(r=0;r<n.length;r++){var a;a="border"===s?s+n[r]+"Width":s+n[r],o+=parseFloat(p(e,a))||0}return o}function b(e){return null!=e&&e==e.window}var k={};function w(e,t,n){if(b(e))return"width"===t?k.viewportWidth(e):k.viewportHeight(e);if(9===e.nodeType)return"width"===t?k.docWidth(e):k.docHeight(e);var o="width"===t?["Left","Right"]:["Top","Bottom"],s="width"===t?e.offsetWidth:e.offsetHeight,i=(p(e),f(e)),r=0;(null==s||s<=0)&&(s=void 0,(null==(r=p(e,t))||Number(r)<0)&&(r=e.style[t]||0),r=parseFloat(r)||0),void 0===n&&(n=i?1:-1);var a=void 0!==s||i,u=s||r;if(-1===n)return a?u-v(e,["border","padding"],o):r;if(a){var l=2===n?-v(e,["border"],o):v(e,["margin"],o);return u+(1===n?0:l)}return r+v(e,g.slice(n),o)}h(["Width","Height"],(function(e){k["doc"+e]=function(t){var n=t.document;return Math.max(n.documentElement["scroll"+e],n.body["scroll"+e],k["viewport"+e](n))},k["viewport"+e]=function(t){var n="client"+e,o=t.document,s=o.body,i=o.documentElement[n];return"CSS1Compat"===o.compatMode&&i||s&&s[n]||i}}));var T={position:"absolute",visibility:"hidden",display:"block"};function S(e){var t=void 0,n=arguments;return 0!==e.offsetWidth?t=w.apply(void 0,n):m(e,T,(function(){t=w.apply(void 0,n)})),t}function y(e,t,n){var o=n;if("object"!==(void 0===t?"undefined":s(t)))return void 0!==o?("number"==typeof o&&(o+="px"),void(e.style[t]=o)):p(e,t);for(var i in t)t.hasOwnProperty(i)&&y(e,i,t[i])}h(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);k["outer"+t]=function(t,n){return t&&S(t,e,n?0:1)};var n="width"===e?["Left","Right"]:["Top","Bottom"];k[e]=function(t,o){return void 0===o?t&&S(t,e,-1):t?(p(t),f(t)&&(o+=v(t,["padding","border"],n)),y(t,e,o)):void 0}})),e.exports=o({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return u(e);!function(e,t){"static"===y(e,"position")&&(e.style.position="relative");var n=u(e),o={},s=void 0,i=void 0;for(i in t)t.hasOwnProperty(i)&&(s=parseFloat(y(e,i))||0,o[i]=s+t[i]-n[i]);y(e,o)}(e,t)},isWindow:b,each:h,css:y,clone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(b(e)){if(void 0===t)return r(e);window.scrollTo(t,a(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(b(e)){if(void 0===t)return a(e);window.scrollTo(r(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},k)},128:function(e,t,n){"use strict";var o=n(0),s=n(5),i=n(6),r=n.n(i),a=n(1),u=n(9),l=n(24),c=n(14),d=n.n(c),p=n(141),h=n(71),f=n(41);function g({value:e,status:t,title:n,displayTransform:i,isBorderless:l=!1,disabled:c=!1,onClickRemove:d=s.noop,onMouseEnter:m,onMouseLeave:v,messages:b,termPosition:k,termsCount:w}){const T=Object(u.useInstanceId)(g),S=r()("components-form-token-field__token",{"is-error":"error"===t,"is-success":"success"===t,"is-validating":"validating"===t,"is-borderless":l,"is-disabled":c}),y=i(e),O=Object(a.sprintf)(
/* translators: 1: term name, 2: term position in a set of terms, 3: total term set count. */
Object(a.__)("%1$s (%2$s of %3$s)"),y,k,w);return Object(o.createElement)("span",{className:S,onMouseEnter:m,onMouseLeave:v,title:n},Object(o.createElement)("span",{className:"components-form-token-field__token-text",id:"components-form-token-field__token-text-"+T},Object(o.createElement)(f.a,{as:"span"},O),Object(o.createElement)("span",{"aria-hidden":"true"},y)),Object(o.createElement)(h.a,{className:"components-form-token-field__remove-token",icon:p.a,onClick:!c&&(()=>d({value:e})),label:b.remove,"aria-describedby":"components-form-token-field__token-text-"+T}))}var m=n(94),v=n(95),b=n(10),k=n(31),w=Object(u.createHigherOrderComponent)(e=>t=>Object(o.createElement)(e,Object(b.a)({},t,{speak:k.speak,debouncedSpeak:Object(u.useDebounce)(k.speak,500)})),"withSpokenMessages");const T={incompleteTokenValue:"",inputOffsetFromEnd:0,isActive:!1,isExpanded:!1,selectedSuggestionIndex:-1,selectedSuggestionScroll:!1};class S extends o.Component{constructor(){super(...arguments),this.state=T,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyPress=this.onKeyPress.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),this.deleteTokenBeforeInput=this.deleteTokenBeforeInput.bind(this),this.deleteTokenAfterInput=this.deleteTokenAfterInput.bind(this),this.addCurrentToken=this.addCurrentToken.bind(this),this.onContainerTouched=this.onContainerTouched.bind(this),this.renderToken=this.renderToken.bind(this),this.onTokenClickRemove=this.onTokenClickRemove.bind(this),this.onSuggestionHovered=this.onSuggestionHovered.bind(this),this.onSuggestionSelected=this.onSuggestionSelected.bind(this),this.onInputChange=this.onInputChange.bind(this),this.bindInput=this.bindInput.bind(this),this.bindTokensAndInput=this.bindTokensAndInput.bind(this),this.updateSuggestions=this.updateSuggestions.bind(this)}componentDidUpdate(e){this.state.isActive&&!this.input.hasFocus()&&this.input.focus();const{suggestions:t,value:n}=this.props,o=!d()(t,e.suggestions);(o||n!==e.value)&&this.updateSuggestions(o)}static getDerivedStateFromProps(e,t){return e.disabled&&t.isActive?{isActive:!1,incompleteTokenValue:""}:null}bindInput(e){this.input=e}bindTokensAndInput(e){this.tokensAndInput=e}onFocus(e){const{__experimentalExpandOnFocus:t}=this.props;this.input.hasFocus()||e.target===this.tokensAndInput?this.setState({isActive:!0,isExpanded:!!t||this.state.isExpanded}):this.setState({isActive:!1}),"function"==typeof this.props.onFocus&&this.props.onFocus(e)}onBlur(){this.inputHasValidValue()?this.setState({isActive:!1}):this.setState(T)}onKeyDown(e){let t=!1;switch(e.keyCode){case l.BACKSPACE:t=this.handleDeleteKey(this.deleteTokenBeforeInput);break;case l.ENTER:t=this.addCurrentToken();break;case l.LEFT:t=this.handleLeftArrowKey();break;case l.UP:t=this.handleUpArrowKey();break;case l.RIGHT:t=this.handleRightArrowKey();break;case l.DOWN:t=this.handleDownArrowKey();break;case l.DELETE:t=this.handleDeleteKey(this.deleteTokenAfterInput);break;case l.SPACE:this.props.tokenizeOnSpace&&(t=this.addCurrentToken());break;case l.ESCAPE:t=this.handleEscapeKey(e),e.stopPropagation()}t&&e.preventDefault()}onKeyPress(e){let t=!1;switch(e.charCode){case 44:t=this.handleCommaKey()}t&&e.preventDefault()}onContainerTouched(e){e.target===this.tokensAndInput&&this.state.isActive&&e.preventDefault()}onTokenClickRemove(e){this.deleteToken(e.value),this.input.focus()}onSuggestionHovered(e){const t=this.getMatchingSuggestions().indexOf(e);t>=0&&this.setState({selectedSuggestionIndex:t,selectedSuggestionScroll:!1})}onSuggestionSelected(e){this.addNewToken(e)}onInputChange(e){const t=e.value,n=this.props.tokenizeOnSpace?/[ ,\t]+/:/[,\t]+/,o=t.split(n),i=Object(s.last)(o)||"";o.length>1&&this.addNewTokens(o.slice(0,-1)),this.setState({incompleteTokenValue:i},this.updateSuggestions),this.props.onInputChange(i)}handleDeleteKey(e){let t=!1;return this.input.hasFocus()&&this.isInputEmpty()&&(e(),t=!0),t}handleLeftArrowKey(){let e=!1;return this.isInputEmpty()&&(this.moveInputBeforePreviousToken(),e=!0),e}handleRightArrowKey(){let e=!1;return this.isInputEmpty()&&(this.moveInputAfterNextToken(),e=!0),e}handleUpArrowKey(){return this.setState((e,t)=>({selectedSuggestionIndex:(0===e.selectedSuggestionIndex?this.getMatchingSuggestions(e.incompleteTokenValue,t.suggestions,t.value,t.maxSuggestions,t.saveTransform).length:e.selectedSuggestionIndex)-1,selectedSuggestionScroll:!0})),!0}handleDownArrowKey(){return this.setState((e,t)=>({selectedSuggestionIndex:(e.selectedSuggestionIndex+1)%this.getMatchingSuggestions(e.incompleteTokenValue,t.suggestions,t.value,t.maxSuggestions,t.saveTransform).length,selectedSuggestionScroll:!0})),!0}handleEscapeKey(e){return this.setState({incompleteTokenValue:e.target.value,isExpanded:!1,selectedSuggestionIndex:-1,selectedSuggestionScroll:!1}),!0}handleCommaKey(){return this.inputHasValidValue()&&this.addNewToken(this.state.incompleteTokenValue),!0}moveInputToIndex(e){this.setState((t,n)=>({inputOffsetFromEnd:n.value.length-Math.max(e,-1)-1}))}moveInputBeforePreviousToken(){this.setState((e,t)=>({inputOffsetFromEnd:Math.min(e.inputOffsetFromEnd+1,t.value.length)}))}moveInputAfterNextToken(){this.setState(e=>({inputOffsetFromEnd:Math.max(e.inputOffsetFromEnd-1,0)}))}deleteTokenBeforeInput(){const e=this.getIndexOfInput()-1;e>-1&&this.deleteToken(this.props.value[e])}deleteTokenAfterInput(){const e=this.getIndexOfInput();e<this.props.value.length&&(this.deleteToken(this.props.value[e]),this.moveInputToIndex(e))}addCurrentToken(){let e=!1;const t=this.getSelectedSuggestion();return t?(this.addNewToken(t),e=!0):this.inputHasValidValue()&&(this.addNewToken(this.state.incompleteTokenValue),e=!0),e}addNewTokens(e){const t=Object(s.uniq)(e.map(this.props.saveTransform).filter(Boolean).filter(e=>!this.valueContainsToken(e)));if(t.length>0){const e=Object(s.clone)(this.props.value);e.splice.apply(e,[this.getIndexOfInput(),0].concat(t)),this.props.onChange(e)}}addNewToken(e){const{__experimentalExpandOnFocus:t,__experimentalValidateInput:n}=this.props;n(e)?(this.addNewTokens([e]),this.props.speak(this.props.messages.added,"assertive"),this.setState({incompleteTokenValue:"",selectedSuggestionIndex:-1,selectedSuggestionScroll:!1,isExpanded:!t}),this.state.isActive&&this.input.focus()):this.props.speak(this.props.messages.__experimentalInvalid,"assertive")}deleteToken(e){const t=this.props.value.filter(t=>this.getTokenValue(t)!==this.getTokenValue(e));this.props.onChange(t),this.props.speak(this.props.messages.removed,"assertive")}getTokenValue(e){return"object"==typeof e?e.value:e}getMatchingSuggestions(e=this.state.incompleteTokenValue,t=this.props.suggestions,n=this.props.value,o=this.props.maxSuggestions,i=this.props.saveTransform){let r=i(e);const a=[],u=[];return 0===r.length?t=Object(s.difference)(t,n):(r=r.toLocaleLowerCase(),Object(s.each)(t,e=>{const t=e.toLocaleLowerCase().indexOf(r);-1===n.indexOf(e)&&(0===t?a.push(e):t>0&&u.push(e))}),t=a.concat(u)),Object(s.take)(t,o)}getSelectedSuggestion(){if(-1!==this.state.selectedSuggestionIndex)return this.getMatchingSuggestions()[this.state.selectedSuggestionIndex]}valueContainsToken(e){return Object(s.some)(this.props.value,t=>this.getTokenValue(e)===this.getTokenValue(t))}getIndexOfInput(){return this.props.value.length-this.state.inputOffsetFromEnd}isInputEmpty(){return 0===this.state.incompleteTokenValue.length}inputHasValidValue(){return this.props.saveTransform(this.state.incompleteTokenValue).length>0}updateSuggestions(e=!0){const{__experimentalExpandOnFocus:t}=this.props,{incompleteTokenValue:n}=this.state,o=n.trim().length>1,s=this.getMatchingSuggestions(n),i=s.length>0,r={isExpanded:t||o&&i};if(e&&(r.selectedSuggestionIndex=-1,r.selectedSuggestionScroll=!1),this.setState(r),o){const{debouncedSpeak:e}=this.props;e(i?Object(a.sprintf)(
/* translators: %d: number of results. */
Object(a._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",s.length),s.length):Object(a.__)("No results."),"assertive")}}renderTokensAndInput(){const e=Object(s.map)(this.props.value,this.renderToken);return e.splice(this.getIndexOfInput(),0,this.renderInput()),e}renderToken(e,t,n){const s=this.getTokenValue(e),i=e.status?e.status:void 0,r=t+1,a=n.length;return Object(o.createElement)(g,{key:"token-"+s,value:s,status:i,title:e.title,displayTransform:this.props.displayTransform,onClickRemove:this.onTokenClickRemove,isBorderless:e.isBorderless||this.props.isBorderless,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,disabled:"error"!==i&&this.props.disabled,messages:this.props.messages,termsCount:a,termPosition:r})}renderInput(){const{autoCapitalize:e,autoComplete:t,maxLength:n,placeholder:s,value:i,instanceId:r}=this.props;let a={instanceId:r,autoCapitalize:e,autoComplete:t,placeholder:0===i.length?s:"",ref:this.bindInput,key:"input",disabled:this.props.disabled,value:this.state.incompleteTokenValue,onBlur:this.onBlur,isExpanded:this.state.isExpanded,selectedSuggestionIndex:this.state.selectedSuggestionIndex};return n&&i.length>=n||(a={...a,onChange:this.onInputChange}),Object(o.createElement)(m.a,a)}render(){const{disabled:e,label:t=Object(a.__)("Add item"),instanceId:n,className:s,__experimentalShowHowTo:i}=this.props,{isExpanded:u}=this.state,l=r()(s,"components-form-token-field__input-container",{"is-active":this.state.isActive,"is-disabled":e});let c={className:"components-form-token-field",tabIndex:"-1"};const d=this.getMatchingSuggestions();return e||(c=Object.assign({},c,{onKeyDown:this.onKeyDown,onKeyPress:this.onKeyPress,onFocus:this.onFocus})),Object(o.createElement)("div",c,Object(o.createElement)("label",{htmlFor:"components-form-token-input-"+n,className:"components-form-token-field__label"},t),Object(o.createElement)("div",{ref:this.bindTokensAndInput,className:l,tabIndex:"-1",onMouseDown:this.onContainerTouched,onTouchStart:this.onContainerTouched},this.renderTokensAndInput(),u&&Object(o.createElement)(v.a,{instanceId:n,match:this.props.saveTransform(this.state.incompleteTokenValue),displayTransform:this.props.displayTransform,suggestions:d,selectedIndex:this.state.selectedSuggestionIndex,scrollIntoView:this.state.selectedSuggestionScroll,onHover:this.onSuggestionHovered,onSelect:this.onSuggestionSelected})),i&&Object(o.createElement)("p",{id:"components-form-token-suggestions-howto-"+n,className:"components-form-token-field__help"},this.props.tokenizeOnSpace?Object(a.__)("Separate with commas, spaces, or the Enter key."):Object(a.__)("Separate with commas or the Enter key.")))}}S.defaultProps={suggestions:Object.freeze([]),maxSuggestions:100,value:Object.freeze([]),displayTransform:s.identity,saveTransform:e=>e.trim(),onChange:()=>{},onInputChange:()=>{},isBorderless:!1,disabled:!1,tokenizeOnSpace:!1,messages:{added:Object(a.__)("Item added."),removed:Object(a.__)("Item removed."),remove:Object(a.__)("Remove item"),__experimentalInvalid:Object(a.__)("Invalid item")},__experimentalExpandOnFocus:!1,__experimentalValidateInput:()=>!0,__experimentalShowHowTo:!0},t.a=w(Object(u.withInstanceId)(S))},141:function(e,t,n){"use strict";var o=n(0),s=n(12);const i=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(s.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=i},152:function(e,t,n){"use strict";var o=n(0),s=n(12);const i=Object(o.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)(s.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}));t.a=i},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(8);function s(e,t,n){var s=this,i=Object(o.useRef)(null),r=Object(o.useRef)(0),a=Object(o.useRef)(null),u=Object(o.useRef)([]),l=Object(o.useRef)(),c=Object(o.useRef)(),d=Object(o.useRef)(e),p=Object(o.useRef)(!0);d.current=e;var h=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var f=!!(n=n||{}).leading,g=!("trailing"in n)||!!n.trailing,m="maxWait"in n,v=m?Math.max(+n.maxWait||0,t):null;return Object(o.useEffect)((function(){return p.current=!0,function(){p.current=!1}}),[]),Object(o.useMemo)((function(){var e=function(e){var t=u.current,n=l.current;return u.current=l.current=null,r.current=e,c.current=d.current.apply(n,t)},n=function(e,t){h&&cancelAnimationFrame(a.current),a.current=h?requestAnimationFrame(e):setTimeout(e,t)},o=function(e){if(!p.current)return!1;var n=e-i.current,o=e-r.current;return!i.current||n>=t||n<0||m&&o>=v},b=function(t){return a.current=null,g&&u.current?e(t):(u.current=l.current=null,c.current)},k=function(){var e=Date.now();if(o(e))return b(e);if(p.current){var s=e-i.current,a=e-r.current,u=t-s,l=m?Math.min(u,v-a):u;n(k,l)}},w=function(){for(var d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];var g=Date.now(),v=o(g);if(u.current=d,l.current=s,i.current=g,v){if(!a.current&&p.current)return r.current=i.current,n(k,t),f?e(i.current):c.current;if(m)return n(k,t),e(i.current)}return a.current||n(k,t),c.current};return w.cancel=function(){a.current&&(h?cancelAnimationFrame(a.current):clearTimeout(a.current)),r.current=0,u.current=i.current=l.current=a.current=null},w.isPending=function(){return!!a.current},w.flush=function(){return a.current?b(Date.now()):c.current},w}),[f,m,t,v,g,h])}},6:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var r=s.apply(null,o);r&&e.push(r)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(o=function(){return s}.apply(t,[]))||(e.exports=o)}()},75:function(e,t,n){"use strict";var o=n(0);t.a=function(e){let{icon:t,size:n=24,...s}=e;return Object(o.cloneElement)(t,{width:n,height:n,...s})}},94:function(e,t,n){"use strict";var o=n(10),s=n(0),i=n(6),r=n.n(i);class a extends s.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:n,selectedSuggestionIndex:i,className:a,...u}=this.props,l=e?e.length+1:0;return Object(s.createElement)("input",Object(o.a)({ref:this.bindInput,id:"components-form-token-input-"+n,type:"text"},u,{value:e||"",onChange:this.onChange,size:l,className:r()(a,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?"components-form-token-suggestions-"+n:void 0,"aria-activedescendant":-1!==i?`components-form-token-suggestions-${n}-${i}`:void 0,"aria-describedby":"components-form-token-suggestions-howto-"+n}))}}t.a=a},95:function(e,t,n){"use strict";var o=n(0),s=n(5),i=n(96),r=n.n(i),a=n(6),u=n.n(a),l=n(9);class c extends o.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,r()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout(()=>{this.scrollingIntoView=!1},100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const n=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,n),suggestionMatch:e.substring(n,n+t.length),suggestionAfterMatch:e.substring(n+t.length)}}render(){return Object(o.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:"components-form-token-suggestions-"+this.props.instanceId,role:"listbox"},Object(s.map)(this.props.suggestions,(e,t)=>{const n=this.computeSuggestionMatch(e),s=u()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return Object(o.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:s,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},n?Object(o.createElement)("span",{"aria-label":this.props.displayTransform(e)},n.suggestionBeforeMatch,Object(o.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch):this.props.displayTransform(e))}))}}c.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])},t.a=Object(l.withSafeTimeout)(c)},96:function(e,t,n){"use strict";e.exports=n(118)},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(8),s=n(56);function i(e,t){return e===t}function r(e){return"function"==typeof e?function(){return e}:e}function a(e,t,n){var a=n&&n.equalityFn||i,u=function(e){var t=Object(o.useState)(r(e)),n=t[0],s=t[1];return[n,Object(o.useCallback)((function(e){return s(r(e))}),[])]}(e),l=u[0],c=u[1],d=Object(s.a)(Object(o.useCallback)((function(e){return c(e)}),[c]),t,n),p=Object(o.useRef)(e);return a(p.current,e)||(d(e),p.current=e),[l,d]}}}]);