(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);t(53);var r=t(0),n=t.n(r),l=t(49),c=t.n(l),i=t(2);var s=function(e){var a=e.target,t=e.label;return n.a.createElement("div",null,n.a.createElement("span",{className:"link-to-results__skip_to_link",onClick:function(e){a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})}},t))};var o={ONL:{weight:-1,Stacks:-3,"1st Floor Microfilm":1},TML:{weight:0},BAPST:{weight:0},BURNS:{weight:0},ERC:{weight:0},SWK:{weight:0},LAW:{weight:0}};function m(e,a){var t=o[e];return t[a]?t[a]+t.weight:t.weight}function u(e,a){return m(e.library,e.loc_display)-m(a.library,a.loc_display)}var d=function(e){var a=e.item;if(!a.is_avail&&!a.getit)return n.a.createElement("div",null,"Not available. ",n.a.createElement("a",{href:a.link},"Check for more options"),".");var t=a.avail.filter(function(e){return e.on_shelf}).sort(u),r=t.length>0?function(e,a,t){var r=e.on_shelf?"item-info--available":"item-info--unavailable",l=t>1?" and other libraries":"";return n.a.createElement("li",{className:"item-info ".concat(r)},n.a.createElement("a",{href:a},n.a.createElement("span",{className:"item-info__library"},"Find in ",e.lib_display),n.a.createElement("span",{className:"item-info__location"},e.loc_display),n.a.createElement("span",{className:"item-info__callno"},"(",e.call_number,")"),n.a.createElement("span",{className:"item-info__other-libraries"},l)))}(t[0],a.link,t.length):"";return n.a.createElement("ul",{className:"available-items-list"},r)};var h=function(e){var a=e.item;return n.a.createElement("li",{className:"catalog-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"catalog-result-item__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"catalog-result-item__title"},a.title)),n.a.createElement("div",{className:"catalog-result-item__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"catalog-result-item__publisher"},a.publisher," ",a.date),n.a.createElement("div",{className:"catalog-result-item__type"},a.type),a.getit&&function(e){return n.a.createElement("div",{className:"catalog-result-item__getit"},n.a.createElement("a",{href:e.link},"Find online"))}(a),n.a.createElement(d,{item:a}),n.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")),a.covers.length>1&&function(e){return n.a.createElement("div",{className:"media-right"},n.a.createElement("a",{href:e.link,"aria-hidden":"true"},n.a.createElement("img",{src:e.covers[0],alt:"",className:"cover-image"})))}(a))},v=t(8),f=t.n(v),g=t(20);var b=function(e,a){var t=Object(r.useState)({error:!1,items:[],total_results:0}),n=Object(i.a)(t,2),l=n[0],c=n[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),m=o[0],u=o[1];function d(){return(d=Object(g.a)(f.a.mark(function a(t){var r,n;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r={},""!==e){a.next=3;break}return a.abrupt("return");case 3:return u(!0),a.prev=4,a.next=7,fetch(t);case 7:return n=a.sent,a.next=10,n.json();case 10:r=a.sent,a.next=16;break;case 13:a.prev=13,a.t0=a.catch(4),r={error:!0,items:[]};case 16:c(r),u(!1);case 18:case"end":return a.stop()}},a,null,[[4,13]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(e){d.apply(this,arguments)}("".concat(a,"?any=").concat(e))},[e]),{data:l,loading:m}};var E=function(e){var a=e.total,t=e.found,r=e.term,l=e.url;return a<=t?n.a.createElement("div",{className:"see-all-link--empty"}):r?n.a.createElement("div",{className:"see-all-link"},n.a.createElement("span",{className:"see-all-link__prefix"},">")," ",n.a.createElement("a",{href:l},"See all ",a.toLocaleString()," ",r)):n.a.createElement("div",{className:"see-all-link--badge"},n.a.createElement("a",{href:l},"See all"))};var _=function(e){var a,t=e.render,r=e.heading,l=e.term,c=e.searchString,i=e.baseUrl,s=e.classPrefix,o=e.noResultsMessage,m=b(c,i),u=m.data;return o=o||"There are no results matching your search.",a=m.loading?n.a.createElement("div",{className:"bento-results-box__loading-notice"},"Loading"):u.error?n.a.createElement("div",{className:"bento-results-box__error-notice"},"There was an error performing this search."):u.total_results?n.a.createElement("div",{className:"".concat(s,"-results-box")},n.a.createElement("ol",{className:"".concat(s,"-results-list")},t(u)),n.a.createElement(E,{url:u.search_url,total:u.total_results,found:u.items.length,term:l})):n.a.createElement("div",{className:"bento-results-box__no-results-notice"},o),n.a.createElement("div",{className:"bento-results-box"},n.a.createElement("div",{className:"bento-results-box__header-row"},n.a.createElement("h3",{className:"bento-results-box__header"},n.a.createElement("a",{href:u.search_url},r)),n.a.createElement(E,{url:u.search_url,total:u.total_results,found:u.items.length,term:l})),a)},p=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(h,{key:e.id,item:e})}))};var N=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/catalog",classPrefix:"catalog",term:"results",heading:"Books & more",searchString:a,render:p})};var k=function(e){var a=e.article;return n.a.createElement("li",{className:"article-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"article-result-item__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"article-result-item__title"},a.title)),a.date,n.a.createElement("div",{className:"article-result-item__creator"},a.creator),n.a.createElement("div",{className:"article-result-item__publisher"},function(e,a){var t=e.split(a);return a&&2===t.length?n.a.createElement("span",{className:"article-result-item__journal-title"},t[0],n.a.createElement("cite",null,a),t[1]):n.a.createElement("span",null,e)}(a.part_of,a.journal)),n.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")))},w=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(k,{key:e.id,article:e})}))};var S=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/articles",classPrefix:"article",term:"articles",heading:"Articles",searchString:a,render:w})};var y=function(e){var a=e.result;return n.a.createElement("li",null,n.a.createElement("a",{href:a.url},a.question))},x=function(e){var a=e.items.slice(0,3);return n.a.createElement(n.a.Fragment,null,a.map(function(e){return n.a.createElement(y,{key:e.id,result:e})}))};var j=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/faq",classPrefix:"faq",term:"questions",heading:"Frequently Asked Questions",searchString:a,render:x})};var O=function(e){var a=e.librarian,t="http://libguides.bc.edu/prf.php?account_id=".concat(a.id),r="//".concat(a.image),l="picture of ".concat(a.name),c=a.subjects.sort().join(", ");return n.a.createElement("li",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("a",{href:t},n.a.createElement("img",{src:r,alt:l}))),n.a.createElement("div",{className:"media-body"},n.a.createElement("h4",{className:"media-heading"},n.a.createElement("a",{href:t},a.name)),n.a.createElement("p",{className:"guide-description"},c)))},R=n.a.createElement("div",{className:"no-results-found"},n.a.createElement("a",{href:"http://libguides.bc.edu/ask-a-librarian/contact"},"See all subject librarians"),"."),F=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(O,{key:e.id,librarian:e})}))};var L=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/librarians",classPrefix:"librarian",term:"librariabs",heading:"Librarians",noResultsMessage:R,searchString:a,render:F})},P=t(35),U=t.n(P);var B=function(e){return function(a){a.target.onerror=null,a.target.src=e}};var V=function(e){var a=e.video,t=a.covers&&a.covers.length>0?a.covers[0]:U.a,r=a.covers&&a.covers.length>0?"online-video-thumb__screenshot":"online-video-thumb__blank_screen";return n.a.createElement("li",{className:"online-video col-md-4"},n.a.createElement("a",{href:a.getit},n.a.createElement("div",{className:"online_video__thumb"},n.a.createElement("img",{src:t,alt:"Watch ".concat(a.title," online"),onError:B(U.a),className:r}))),n.a.createElement("h3",{className:"online-video__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"online-video__title"},a.title)),a.date,n.a.createElement("div",{className:"online-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"online-video__watch-link"},n.a.createElement("a",{href:a.getit},"Watch online")))},W=t(21),q=t.n(W),A=t(50),T=t.n(A);function C(e){return e.covers.length>0&&e.covers[0]?"physical-video__box_cover":"physical-video__default_cover"}var I=function(e){var a=e.video,t=function(e){if(e.covers.length>0&&e.covers[0])return String(e.covers[0]);switch(e.format){case"DVD":return T.a;case"VHS":default:return q.a}}(a);return n.a.createElement("li",{className:"physical-video col-md-4"},n.a.createElement("a",{href:a.link,"aria-hidden":"true"},n.a.createElement("img",{src:t,onError:B(q.a),alt:"",className:C(a)})),n.a.createElement("h3",{className:"physical-video__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"physical-video__title"},a.title)),a.date,n.a.createElement("div",{className:"physical-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),a.format,n.a.createElement(d,{item:a}))},M=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return function(e){var a=e.id;return e.getit?n.a.createElement(V,{video:e,key:a}):n.a.createElement(I,{video:e,key:a})}(e)}))};var D=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/video",classPrefix:"video",term:"videos",heading:"Video",searchString:a,render:M})};function H(e){return{__html:e.highlight[1]}}var J=function(e){var a=e.hit;return n.a.createElement("li",{className:"website-hit"},n.a.createElement("h3",{className:"website-hit__title"},n.a.createElement("a",{href:a.url},a.page_title)),"in ",n.a.createElement("a",{href:a.guide_url,className:"website-hit__guide-title"},a.guide_title),n.a.createElement("div",{className:"website-hit__highlight",dangerouslySetInnerHTML:H(a)}))},Q=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(J,{key:e.url,hit:e})}))};var K=function(e){var a=e.searchString;return n.a.createElement(_,{baseUrl:"http://libdev.bc.edu/search-services/website",classPrefix:"website",term:"results",heading:"Our Website",searchString:a,render:Q})};var $=function(e){var a=e.searchString,t=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null),m=Object(r.useRef)(null);return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("nav",{className:"link-to-results col-md-8"},n.a.createElement("div",{className:"link-to-results__skip-to"},"Skip to:"),n.a.createElement(s,{target:t,label:"Books & more"}),n.a.createElement(s,{target:l,label:"Articles"}),n.a.createElement(s,{target:c,label:"FAQ"}),n.a.createElement(s,{target:i,label:"Librarians"}),n.a.createElement(s,{target:o,label:"Video"}),n.a.createElement(s,{target:m,label:"Website"})),n.a.createElement("div",{className:"not-finding col-md-4"},"Not finding what you need? ",n.a.createElement("a",{href:"https://libguides.bc.edu/ask-a-librarian"},"Ask us!"))),n.a.createElement("div",{className:"bento-results"},n.a.createElement("div",{className:"results-row-1 row"},n.a.createElement("div",{className:"col-md-5 col-sm-12",ref:t},n.a.createElement(N,{searchString:a})),n.a.createElement("div",{className:"col-md-5 col-md-offset-1 col-sm-12",ref:l},n.a.createElement(S,{searchString:a}))),n.a.createElement("div",{className:"results-row-2 row",ref:c},n.a.createElement("div",{className:"col-md-7"},n.a.createElement(j,{searchString:a})),n.a.createElement("div",{className:"col-md-4 col-md-offset-1",ref:i},n.a.createElement(L,{searchString:a}))),n.a.createElement("div",{className:"results-row-3 row",ref:o},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(D,{searchString:a}))),n.a.createElement("div",{className:"results-row-4 row",ref:m},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(K,{searchString:a})))))};var z=function(){return n.a.createElement("div",{className:"blank-search-screen"},n.a.createElement("div",{className:"blank-search-screen__explanation"},"Search for just about anything in or about the Libraries."))};var G=function(e){var a=e.searchBox,t=e.searchString;return n.a.createElement("div",{className:"bento-results-page"},a,t?n.a.createElement($,{searchString:t}):n.a.createElement(z,null))},X=t(51),Y=t.n(X),Z=3,ee=function(e){return e.value};function ae(e,a){a.suggestion;var t=a.suggestionValue,r=(a.suggestionIndex,a.sectionIndex,a.method,window.location.protocol+"//"+window.location.host+window.location.pathname);window.location.href="".concat(r,"?any=").concat(t)}var te=function(e){return n.a.createElement("div",{className:"search-suggestion"},e.value)};var re=function(e){var a=e.handleTyping,t=e.searchString,l=e.onSubmit,c=Object(r.useState)([]),s=Object(i.a)(c,2),o=s[0],m=s[1],u=Object(r.useState)(t),d=Object(i.a)(u,2),h=d[0],v=d[1];function b(){return(b=Object(g.a)(f.a.mark(function e(a){var t,r,n,l,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value,r=a.reason,n="http://libdev.bc.edu/search-services/typeahead?any=".concat(t),l=[],!(t.length<Z)){e.next=5;break}return e.abrupt("return");case 5:if("input-focused"!==r){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,e.next=10,fetch(n);case 10:return c=e.sent,e.next=13,c.json();case 13:l=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),l=[];case 19:m(l);case 20:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}var E={placeholder:"Search for books, articles, journals, databases",value:h,onChange:function(e,t){var r=t.newValue;"enter"===t.method?l():(v(r),a(r))},name:"any"};return n.a.createElement("form",{method:"get",action:".",className:"bento-search-box"},n.a.createElement("label",{for:"bento-search-box__search-input",className:"bcbento-search-box__input-label sr-only"},"Search"),n.a.createElement(Y.a,{suggestions:o,onSuggestionsFetchRequested:function(e){return b.apply(this,arguments)},onSuggestionsClearRequested:function(){m([])},getSuggestionValue:ee,renderSuggestion:te,onSuggestionSelected:ae,inputProps:E,id:"bento-search-box__search-input"}))};function ne(e){return e?"Search - ".concat(e):"Search"}var le=function(){var e=function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}("any");document.title=ne(e);var a=Object(r.useState)(e),t=Object(i.a)(a,2),l=t[0],c=t[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),m=o[0],u=o[1],d=n.a.createElement(re,{searchString:l,handleTyping:function(e){return u(e)},handleSubmit:function(){c(m),document.title=ne(l)}});return n.a.createElement(G,{searchBox:d,searchString:l})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,a,t){e.exports=t.p+"static/media/video-tape.38e1c445.svg"},35:function(e,a,t){e.exports=t.p+"static/media/blank-screen.f8c2d118.svg"},50:function(e,a,t){e.exports=t.p+"static/media/mono-dvd-mount.cb59635b.svg"},52:function(e,a,t){e.exports=t(105)}},[[52,1,2]]]);
//# sourceMappingURL=main.7ec3f477.chunk.js.map