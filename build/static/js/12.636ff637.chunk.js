(window.webpackJsonpfrancisco_brandao=window.webpackJsonpfrancisco_brandao||[]).push([[12],{254:function(e,a,t){},255:function(e,a,t){(function(n){var r;e.exports=(r=t(0),function(e){var a={};function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(n,r,function(a){return e[a]}.bind(null,r));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=r},function(e,a,t){"use strict";var n=t(3);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:o,resetWarningCache:r};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),l=n.n(i),s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,n=e.onClick,r=e.href,i=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),l=null;return e.selected&&(l="page",i=e.ariaLabel||"Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),o.a.createElement("li",{className:a},o.a.createElement("a",{onClick:n,role:"button",className:t,href:r,tabIndex:"0","aria-label":i,"aria-current":l,onKeyPress:n},e.page))};s.propTypes={onClick:l.a.func.isRequired,selected:l.a.bool.isRequired,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,extraAriaContext:l.a.string,href:l.a.string,ariaLabel:l.a.string,page:l.a.number.isRequired};var c=s;!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=void 0;try{o=n[r]}catch(e){continue}e.register(o,r,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var u=function(e){var a=e.breakLabel,t=e.breakClassName,n=e.breakLinkClassName,r=e.onClick,i=t||"break";return o.a.createElement("li",{className:i},o.a.createElement("a",{className:n,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};u.propTypes={breakLabel:l.a.oneOfType([l.a.string,l.a.node]),breakClassName:l.a.string,breakLinkClassName:l.a.string,onClick:l.a.func.isRequired};var p=u;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,a){return(m=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function g(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?b(e):a}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=void 0;try{o=n[r]}catch(e){continue}e.register(o,r,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&m(e,a)}(r,e);var a,t,n=function(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,n=v(e);if(a){var r=v(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return g(this,t)}}(r);function r(e){var a,t;return function(e,a){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),h(b(a=n.call(this,e)),"handlePreviousPage",function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)}),h(b(a),"handleNextPage",function(e){var t=a.state.selected,n=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<n-1&&a.handlePageSelected(t+1,e)}),h(b(a),"handlePageSelected",function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))}),h(b(a),"handleBreakClick",function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var n=a.state.selected;a.handlePageSelected(n<e?a.getForwardJump():a.getBackwardJump(),t)}),h(b(a),"callCallback",function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})}),h(b(a),"pagination",function(){var e=[],t=a.props,n=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,l=t.breakLabel,s=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(r<=n)for(var f=0;f<r;f++)e.push(a.getPageElement(f));else{var d,m,g,b=n/2,v=n-b;u>r-n/2?b=n-(v=r-u):u<n/2&&(v=n-(b=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<r;d++)(m=d+1)<=i||m>r-i||d>=u-b&&d<=u+v?e.push(h(d)):l&&e[e.length-1]!==g&&(g=o.a.createElement(p,{key:d,breakLabel:l,breakClassName:s,breakLinkClassName:c,onClick:a.handleBreakClick.bind(null,d)}),e.push(g))}return e}),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=r,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,i=t.activeClassName,l=t.activeLinkClassName,s=t.extraAriaContext;return o.a.createElement(c,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:s,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,n=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,s=e.previousAriaLabel,c=e.nextLabel,u=e.nextClassName,p=e.nextLinkClassName,f=e.nextAriaLabel,d=this.state.selected,m=i+(0===d?" ".concat(a):""),g=u+(d===t-1?" ".concat(a):""),b=0===d?"true":"false",v=d===t-1?"true":"false";return o.a.createElement("ul",{className:n},o.a.createElement("li",{className:m},o.a.createElement("a",{onClick:this.handlePreviousPage,className:l,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":b,"aria-label":s},r)),this.pagination(),o.a.createElement("li",{className:g},o.a.createElement("a",{onClick:this.handleNextPage,className:p,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v,"aria-label":f},c)))}}])&&d(a.prototype,t),r}(r.Component);h(y,"propTypes",{pageCount:l.a.number.isRequired,pageRangeDisplayed:l.a.number.isRequired,marginPagesDisplayed:l.a.number.isRequired,previousLabel:l.a.node,previousAriaLabel:l.a.string,nextLabel:l.a.node,nextAriaLabel:l.a.string,breakLabel:l.a.oneOfType([l.a.string,l.a.node]),hrefBuilder:l.a.func,onPageChange:l.a.func,initialPage:l.a.number,forcePage:l.a.number,disableInitialCallback:l.a.bool,containerClassName:l.a.string,pageClassName:l.a.string,pageLinkClassName:l.a.string,activeClassName:l.a.string,activeLinkClassName:l.a.string,previousClassName:l.a.string,nextClassName:l.a.string,previousLinkClassName:l.a.string,nextLinkClassName:l.a.string,disabledClassName:l.a.string,breakClassName:l.a.string,breakLinkClassName:l.a.string,extraAriaContext:l.a.string,ariaLabelBuilder:l.a.func}),h(y,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=void 0;try{o=n[r]}catch(e){continue}e.register(o,r,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=y,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n=void 0!==t?t:a;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=void 0;try{o=n[r]}catch(e){continue}e.register(o,r,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(n,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(14))},256:function(e,a,t){},257:function(e,a,t){},283:function(e,a,t){"use strict";t.r(a);var n=t(149),r=t(116),o=t(25),i=t(66),l=t(0),s=t.n(l),c=t(67),u=t(148),p=t(74),f=(t(254),function(e){e.id;var a=e.img,t=e.title,n=e.categoria,r=e.data,o=e.link;return s.a.createElement("a",{className:"MidiaLink",href:"".concat(o),target:"_blank",style:{backgroundImage:"url(".concat(a,")")}},s.a.createElement("div",{className:"MidiaLink__caption"},s.a.createElement("div",{className:"data"},r," | ",n),s.a.createElement("div",{className:"title"},t),s.a.createElement("button",{className:"more"},"Leia mais")))}),d=t(255),m=t.n(d),g=(t(256),function(e){var a=e.changePage,t=e.totalItems,n=e.currPage;return s.a.createElement(m.a,{pageCount:t,pageRangeDisplayed:4,marginPagesDisplayed:0,containerClassName:"pagination",nextLabel:"Pr\xf3ximo",previousLabel:"Anterior",itemClassFirst:"first",itemClassLast:"last",itemClassPrev:"prev",itemClassNext:"next",forcePage:n,onPageChange:function(e){return t=e.selected+1,void a(t);var t}})});t(257),a.default=function(e){var a=Object(l.useState)(!0),t=Object(o.a)(a,2),d=(t[0],t[1]),m=Object(l.useState)({page:{dados:!1}}),b=Object(o.a)(m,2),v=b[0],h=b[1],y=Object(l.useState)({cavaleiro:!1,cavalos:!1,anos:!1}),C=Object(o.a)(y,2),k=C[0],N=C[1],P=Object(l.useState)(1),x=Object(o.a)(P,2),E=x[0],O=x[1],L=Object(l.useState)([]),_=Object(o.a)(L,2),j=_[0],w=_[1],S=Object(l.useState)([]),D=Object(o.a)(S,2),I=D[0],R=D[1],T=[],A=[],B=[];v.posts&&(v.posts.forEach(function(e){e.integrantes_data.forEach(function(e){T.push({label:e.label,value:e.id})})}),T=T.filter(function(e,a,t){return a===t.findIndex(function(a){return a.value===e.value})}),v.posts.forEach(function(e){e.cavalos_data.forEach(function(e){A.push({label:e.label,value:e.id})})}),A=A.filter(function(e,a,t){return a===t.findIndex(function(a){return a.place===e.place&&a.value===e.value})}),B=v.posts.map(function(e){return e.date_of_publication?{label:new Date(e.date_of_publication).getFullYear(),value:new Date(e.date_of_publication).getFullYear()}:{label:2019,value:2019}}).filter(function(e,a,t){return a===t.findIndex(function(a){return a.place===e.place&&a.value===e.value})}).sort(function(e,a){return a.value-e.value}),console.log(B)),Object(l.useEffect)(function(){var e="hipica-midia-data";Object(c.a)(e)?(d(!1),h(JSON.parse(Object(c.a)(e)))):i.a.get("/equipe/midia").then(function(a){console.log(a),h(a.data),Object(c.b)(e,JSON.stringify(a.data))}).catch(function(e){return console.log(e)}).finally(function(){d(!1)})},[]);var q=function(e,a){a.value?N(function(t){var n=Object(r.a)({},t);return n[e]=a,n}):N(function(a){var t=Object(r.a)({},a);return t[e]=!1,t})};Object(l.useEffect)(function(){if(v.posts){O(1);var e=v.posts.filter(function(e){return(!k.cavaleiro||e.integrantes_data.some(function(e){return e.id===k.cavaleiro.value}))&&(!k.cavalos||e.cavalos_data.some(function(e){return e.id===k.cavalos.value}))&&(!k.anos||new Date(e.date_of_publication).getFullYear()==k.anos.value)});w(e)}},[k,v]),Object(l.useEffect)(function(){R(M(j,6,E))},[E,v,j]);var M=function(e,a,t){return e.slice((t-1)*a,t*a)};return s.a.createElement("section",{className:"Midia page-interna mb-2 mb-lg-5"},v.page.dados?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"pt-lg-3 pb-lg-1"},s.a.createElement("div",{className:"markup pb-lg-4"},s.a.createElement("h2",{class:"mb-lg-4"},"M\xeddia"),s.a.createElement("p",null,"Principais destaques da Equipe Santo Ant\xf4nio na m\xeddia"))),s.a.createElement("div",{className:"container justify-content-center pb-3 pb-lg-5"},s.a.createElement("div",{className:"row px-lg-0"},s.a.createElement("div",{className:"col-lg-5 px-lg-4 d-flex"},s.a.createElement("div",{className:"filter-group"},s.a.createElement("label",{htmlFor:""},"Cavaleiro"),s.a.createElement(u.a,{noOptionsMessage:function(){return"Sem resultados"},className:"custom-select",placeholder:"Todos",onChange:function(e){return q("cavaleiro",e)},options:[{label:"Todos",value:""}].concat(Object(n.a)(T))}))),s.a.createElement("div",{className:"col-lg-3 px-lg-4 d-flex pl-lg-0"},s.a.createElement("div",{className:"filter-group"},s.a.createElement("label",{htmlFor:""},"Anos"),s.a.createElement(u.a,{className:"custom-select",placeholder:"Todos",noOptionsMessage:function(){return"Sem resultados"},onChange:function(e){return q("anos",e)},options:[{label:"Todos",value:""}].concat(Object(n.a)(B))}))))),s.a.createElement("div",{className:"container "},s.a.createElement("div",{className:"row pt-lg-4"},I.length>0?I.map(function(e,a){return s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(p.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0,key:a},s.a.createElement(f,{img:e.image,link:e.link,data:e.date_of_publication,categoria:e.summary,title:e.title,description:e.description})))}):s.a.createElement("div",{className:"col-12 pt-4 text-center"},s.a.createElement("h4",{style:{color:"#9D8855",fontFamily:"Lowan"}},"N\xe3o encontramos resultados para sua busca."))),s.a.createElement("div",{className:"row pt-4 pt-lg-5"},s.a.createElement("div",{className:"col-12"},I.length>0?s.a.createElement(g,{changePage:function(e){O(e)},totalItems:j.length/6,currPage:E-1}):null)))):null)}},66:function(e,a,t){"use strict";var n=t(68),r=t.n(n).a.create({baseURL:"https://agenciawebsorocaba.com.br/equipe_sa/api/v1/"});a.a=r},67:function(e,a,t){"use strict";function n(e){var a=Date.now(),t=localStorage.getItem(e+"_expiresIn");if(void 0!==t&&null!==t||(t=0),t<a)return function(e){try{localStorage.removeItem(e),localStorage.removeItem(e+"_expiresIn")}catch(a){return console.log("removeStorage: Error removing key ["+e+"] from localStorage: "+JSON.stringify(a)),!1}}(e),null;try{return localStorage.getItem(e)}catch(n){return console.log("getStorage: Error reading key ["+e+"] from localStorage: "+JSON.stringify(n)),null}}function r(e,a,t){t=void 0===t||null===t?3600:Math.abs(t);var n=Date.now()+1e3*t;try{localStorage.setItem(e,a),localStorage.setItem(e+"_expiresIn",n)}catch(r){return console.log("setStorage: Error setting key ["+e+"] in localStorage: "+JSON.stringify(r)),!1}return!0}t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})}}]);
//# sourceMappingURL=12.636ff637.chunk.js.map