(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);t(59);var r=t(0),n=t.n(r),l=t(50),s=t.n(l),c=t(21),i=t(51),o=t(57),u=t(52),m=t(16),d=t(56),h=t(7),v=t.n(h),f=t(22),g=t(8);var E=function(e,a){var t=Object(r.useState)({error:!1,items:[]}),n=Object(g.a)(t,2),l=n[0],s=n[1],c=Object(r.useState)(!1),i=Object(g.a)(c,2),o=i[0],u=i[1];function m(){return(m=Object(f.a)(v.a.mark(function a(t){var r,n;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r={},""!==e){a.next=3;break}return a.abrupt("return");case 3:return u(!0),a.prev=4,a.next=7,fetch(t);case 7:return n=a.sent,a.next=10,n.json();case 10:r=a.sent,a.next=16;break;case 13:a.prev=13,a.t0=a.catch(4),r={error:!0,items:[]};case 16:s(r),u(!1);case 18:case"end":return a.stop()}},a,null,[[4,13]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(e){m.apply(this,arguments)}("".concat(a,"?any=").concat(e))},[e]),{data:l,loading:o}};var b=function(e){var a=e.item;if(!a.is_avail&&!a.getit)return n.a.createElement("div",null,"Not available. ",n.a.createElement("a",{href:a.link},"Check for more options"),".");var t=a.avail.filter(function(e){return e.on_shelf});return n.a.createElement("ul",{className:"available-items-list"},t.map(function(e){return function(e,a){var t=e.on_shelf?"item-info--available":"item-info--unavailable",r=e.library+"-"+e.loc_display;return n.a.createElement("li",{className:"item-info ".concat(t),key:r},n.a.createElement("a",{href:a},n.a.createElement("span",{className:"item-info__library"},"Find in ",e.lib_display),n.a.createElement("span",{className:"item-info__location"},e.loc_display),n.a.createElement("span",{className:"item-info__callno"},"(",e.call_number,")")))}(e,a.link)}))};var _=function(e){var a=e.item;return n.a.createElement("li",{className:"catalog-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"catalog-result-item__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"catalog-result-item__title"},a.title)),n.a.createElement("div",{className:"catalog-result-item__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"catalog-result-item__publisher"},a.publisher," ",a.date),n.a.createElement("div",{className:"catalog-result-item__type"},a.type),n.a.createElement(b,{item:a}),n.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0"),a.getit&&function(e){return n.a.createElement("div",{className:"catalog-result-item__getit"},n.a.createElement("a",{href:e.link},"Find online"))}(a)),a.covers.length>1&&function(e){return n.a.createElement("div",{className:"media-right"},n.a.createElement("a",{href:e.link,"aria-hidden":"true"},n.a.createElement("img",{src:e.covers[0],alt:"",className:"cover-image"})))}(a))};var p=function(e){var a=e.message;return n.a.createElement("div",{className:"bento-result-error"},a)};var N=function(){return n.a.createElement("div",{className:"loading-notice"},"Loading")};var k=function(e){var a=e.total,t=e.found,r=e.term,l=e.url;return a<=t?n.a.createElement("div",{className:"see-all-link--empty"}):r?n.a.createElement("div",{className:"see-all-link"},"> ",n.a.createElement("a",{href:l},"See all ",a.toLocaleString()," ",r)):n.a.createElement("div",{className:"see-all-link--badge"},n.a.createElement("a",{href:l},"See all"))};var w=function(e){var a=e.children,t=e.classPrefix,r=e.url;return n.a.createElement("h2",{className:"".concat(t,"-results-box__header")},n.a.createElement("a",{href:r},a))};var y=function(e){var a=e.searchString,t=(e.numResults,E(a,"http://localhost:8080/search-services/catalog")),r=t.data,l=t.loading?n.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?n.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):n.a.createElement("div",null,n.a.createElement("ol",{className:"catalog-results-list"},s.map(function(e){return n.a.createElement(_,{key:e.id,item:e})})),n.a.createElement(k,{total:c,found:s.length,term:"books",url:i})));var s,c,i;return n.a.createElement("div",{className:"catalog-results-box"},n.a.createElement(w,{classPrefix:"catalog",url:r.search_url},"Books & more"),n.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?n.a.createElement(p,{message:"There was an error searching the catalog."}):l)},S=function e(){Object(c.a)(this,e)};var x=function(e){var a=e.article;return n.a.createElement("li",{className:"article-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"article-result-item__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"article-result-item__title"},a.title)),a.date,n.a.createElement("div",{className:"article-result-item__creator"},a.creator),n.a.createElement("div",{className:"article-result-item__publisher"},function(e,a){var t=e.split(a);return a&&2===t.length?n.a.createElement("span",{className:"article-result-item__journal-title"},t[0],n.a.createElement("cite",null,a),t[1]):n.a.createElement("span",null,e)}(a.part_of,a.journal)),n.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")))};var j=function(e){var a=e.searchString,t=(e.numResults,E(a,"http://localhost:8080/search-services/articles")),r=t.data,l=t.loading?n.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?n.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):n.a.createElement("div",null,n.a.createElement("ol",{className:"article-results-list"},s.map(function(e){return n.a.createElement(x,{key:e.id,article:e})})),n.a.createElement(k,{total:c,found:s.length,term:"articles",url:i})));var s,c,i;return n.a.createElement("div",{className:"article-results-box"},n.a.createElement(w,{url:r.search_url,classPrefix:"article"},"Articles"),n.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?n.a.createElement(p,{message:"There was an error searching articles."}):l)};var R=function(e){var a=e.result;return n.a.createElement("li",null,n.a.createElement("a",{href:a.url},a.question))};var O=function(e){var a=e.searchString,t=E(a,"http://libdev.bc.edu/search-services/faq"),r=t.data,l=t.loading;r.items=r.items.slice(0,4);var s=l?n.a.createElement("div",{className:"loading-notice"},"Loading"):(c=r.items,0===c.length?n.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):n.a.createElement("ol",{className:"faq-results-list"},c.map(function(e){return n.a.createElement(R,{key:"".concat(e.id),result:e})})));var c;return n.a.createElement("div",{className:"faq-results-box"},n.a.createElement(w,{url:r.search_url,classPrefix:"faq"},"Frequently asked questions"),r.error?n.a.createElement(p,{message:"There was an error searching the FAQ."}):s,n.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}))};var T=function(e){var a=e.librarian,t="http://libguides.bc.edu/prf.php?account_id=".concat(a.id),r="//".concat(a.image),l="picture of ".concat(a.name),s=a.subjects.sort().join(", ");return n.a.createElement("li",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("a",{href:t},n.a.createElement("img",{src:r,alt:l}))),n.a.createElement("div",{className:"media-body"},n.a.createElement("h4",{className:"media-heading"},n.a.createElement("a",{href:t},a.name)),n.a.createElement("p",{className:"guide-description"},s)))};var q=function(e){var a=e.searchString,t=(e.numResults,E(a,"http://libdev.bc.edu/search-services/librarians")),r=t.data,l=t.loading?n.a.createElement("div",{className:"loading-notice"},"Loading"):(s=r.items,0===s.length?n.a.createElement("div",{className:"no-results-found"},n.a.createElement("a",{href:"http://libguides.bc.edu/ask-a-librarian/contact"},"See all subject librarians"),"."):n.a.createElement("ol",{className:"librarian-results-list"},s.map(function(e){return n.a.createElement(T,{key:e.id,librarian:e})})));var s;return n.a.createElement("div",{className:"librarian-results-box"},n.a.createElement(w,{url:"http://libguides.bc.edu/ask-a-librarian/contact",classPrefix:"librarian"},"Librarians"),r.error?n.a.createElement(p,{message:"There was an error searching for librarians."}):l)},V=t(23),I=t.n(V);var B=function(e){var a=e.video,t=a.covers&&a.covers.length>0?a.covers[0]:I.a,r=a.covers&&a.covers.length>0?"online-video-thumb__screenshot":"online-video-thumb__blank_screen";return n.a.createElement("li",{className:"online-video col-md-4"},n.a.createElement("a",{href:a.getit},n.a.createElement("div",{className:"online_video__thumb"},n.a.createElement("img",{src:t,alt:"Watch ".concat(a.title," online"),className:r}))),n.a.createElement("h3",{className:"online-video__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"online-video__title"},a.title)),a.date,n.a.createElement("div",{className:"online-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"online-video__watch-link"},n.a.createElement("a",{href:a.getit},"Watch online")))},C=t(53),L=t.n(C),P=t(54),F=t.n(P);function A(e){return e.covers.length>0&&e.covers[0]?"physical-video__box_cover":"physical-video__default_cover"}var W=function(e){var a=e.video,t=function(e){if(e.covers.length>0&&e.covers[0])return String(e.covers[0]);switch(e.format){case"DVD":return F.a;case"VHS":return L.a;default:return I.a}}(a);return n.a.createElement("li",{className:"physical-video col-md-4"},n.a.createElement("a",{href:a.link,"aria-hidden":"true"},n.a.createElement("img",{src:t,alt:"",className:A(a)})),n.a.createElement("h3",{className:"physical-video__media-heading media-heading"},n.a.createElement("a",{href:a.link,className:"physical-video__title"},a.title)),a.date,n.a.createElement("div",{className:"physical-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),a.format,n.a.createElement(b,{item:a}))};var D=function(e){var a=e.searchString,t=(e.numResults,E(a,"http://libdev.bc.edu/search-services/video")),r=t.data,l=t.loading?n.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?n.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):n.a.createElement("div",null,n.a.createElement("ol",{className:"video-results-list row"},s.map(function(e){return function(e){return e.getit?n.a.createElement(B,{video:e,key:e.id}):n.a.createElement(W,{video:e,key:e.id})}(e)})),n.a.createElement(k,{total:c,found:s.length,term:"videos",url:i})));var s,c,i;return n.a.createElement("div",{className:"video-results-box"},n.a.createElement(w,{url:r.search_url,classPrefix:"video"},"Video"),n.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?n.a.createElement(p,{message:"There was an error searching videos."}):l)};function H(e){return{__html:e.highlight[1]}}var J=function(e){var a=e.hit;return n.a.createElement("li",{className:"website-hit"},n.a.createElement("h3",{className:"website-hit__title"},n.a.createElement("a",{href:a.url},a.page_title)),"in ",n.a.createElement("a",{href:a.guide_url,className:"website-hit__guide-title"},a.guide_title),n.a.createElement("div",{className:"website-hit__highlight",dangerouslySetInnerHTML:H(a)}))};var Q=function(e){var a=e.searchString,t=(e.numResults,E(a,"http://libdev.bc.edu/search-services/website")),r=t.data,l=t.loading;r.items=r.items.slice(0,4);var s=l?n.a.createElement(N,null):(c=r.items,i=r.total_results,o=r.search_url,0===c.length?n.a.createElement("div",{className:"no-results-found"},"No results found matching your search."):n.a.createElement("div",null,n.a.createElement("ol",{className:"website-results-list"},c.map(function(e){return n.a.createElement(J,{key:e.url,hit:e})})),n.a.createElement(k,{total:i,found:c.length,term:"pages",url:o})));var c,i,o;return n.a.createElement("div",{className:"website-results-box"},n.a.createElement(w,{url:r.search_url,classPrefix:"website"},"Our website"),r.search_url&&n.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?n.a.createElement(p,{message:"There was an error searching the website."}):s)};var M=function(e,a){var t=new S;return t.articleResults=n.a.createElement(j,{searchString:e}),t.bookResults=n.a.createElement(y,{searchString:e}),t.faqResults=n.a.createElement(O,{searchString:e}),t.librarianResults=n.a.createElement(q,{searchString:e}),t.videoResults=n.a.createElement(D,{searchString:e}),t.websiteResults=n.a.createElement(Q,{searchString:e}),t};var U=function(e){var a=e.target,t=e.label;return n.a.createElement("div",null,n.a.createElement("span",{className:"link-to-results__skip_to_link",onClick:function(e){a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})}},t))};var $=function(e){var a=e.boxes,t=Object(r.useRef)(null),l=Object(r.useRef)(null),s=Object(r.useRef)(null),c=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null);return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("nav",{className:"link-to-results col-md-8"},n.a.createElement("div",{className:"link-to-results__skip-to"},"Skip to:"),n.a.createElement(U,{target:t,label:"Books & more"}),n.a.createElement(U,{target:l,label:"Articles"}),n.a.createElement(U,{target:s,label:"FAQ"}),n.a.createElement(U,{target:c,label:"Librarians"}),n.a.createElement(U,{target:i,label:"Video"}),n.a.createElement(U,{target:o,label:"Website"})),n.a.createElement("div",{className:"not-finding col-md-4"},"Not finding what you need? ",n.a.createElement("a",{href:"https://libguides.bc.edu/ask-a-librarian"},"Ask us!"))),n.a.createElement("div",{className:"bento-results"},n.a.createElement("div",{className:"results-row-1 row"},n.a.createElement("div",{className:"col-md-5 col-sm-12",ref:t},a.bookResults),n.a.createElement("div",{className:"col-md-5 col-md-offset-1 col-sm-12",ref:l},a.articleResults)),n.a.createElement("div",{className:"results-row-2 row",ref:s},n.a.createElement("div",{className:"col-md-7"},a.faqResults),n.a.createElement("div",{className:"col-md-4 col-md-offset-1",ref:c},a.librarianResults)),n.a.createElement("div",{className:"results-row-3 row",ref:i},n.a.createElement("div",{className:"col-md-12"},a.videoResults)),n.a.createElement("div",{className:"results-row-4 row",ref:o},n.a.createElement("div",{className:"col-md-12"},a.websiteResults))))};var z=function(){return n.a.createElement("div",null,"Search for just about anything in or about the Libraries.")};var G=function(e){var a=e.searchBox,t=e.searchString,r=e.resultsBoxContainer,l=t?n.a.createElement($,{boxes:r}):n.a.createElement(z,null);return n.a.createElement("div",{className:"bento-results-page"},a,l)},K=t(55),X=t.n(K),Y=3,Z=function(e){return e.value},ee=function(e){return n.a.createElement("div",{className:"search-suggestion"},e.value)};var ae=function(e){var a=e.handleTyping,t=e.searchString,l=e.onSubmit,s=Object(r.useState)([]),c=Object(g.a)(s,2),i=c[0],o=c[1],u=Object(r.useState)(t),m=Object(g.a)(u,2),d=m[0],h=m[1];function E(){return(E=Object(f.a)(v.a.mark(function e(a){var t,r,n,l,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value,r=a.reason,n="http://libdev.bc.edu/search-services/typeahead?any=".concat(t),console.log("reason: ".concat(r)),l=[],!(t.length<Y)){e.next=6;break}return e.abrupt("return");case 6:if("input-focused"!==r){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,e.next=11,fetch(n);case 11:return s=e.sent,e.next=14,s.json();case 14:l=e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),l=[];case 20:o(l);case 21:case"end":return e.stop()}},e,null,[[8,17]])}))).apply(this,arguments)}var b={placeholder:"Search for books, articles, journals, databases",value:d,onChange:function(e,t){var r=t.newValue,n=t.method;console.log("value: ".concat(d," method: ").concat(n)),"enter"===n?l():(h(r),a(r))},name:"any"};return n.a.createElement("form",{method:"get",action:"."},n.a.createElement(X.a,{suggestions:i,onSuggestionsFetchRequested:function(e){return E.apply(this,arguments)},onSuggestionsClearRequested:function(){o([])},getSuggestionValue:Z,renderSuggestion:ee,onSuggestionSelected:function(e,a){a.suggestion,a.suggestionValue,a.suggestionIndex,a.sectionIndex;var t=a.method;console.log("method: ".concat(t))},inputProps:b}))};var te=function(e){function a(e){var t;Object(c.a)(this,a),t=Object(o.a)(this,Object(u.a)(a).call(this,e));var r=function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}("any");return t.state={searchString:r,inputValue:""},t.handleInput=t.handleInput.bind(Object(m.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleInput",value:function(e){console.log("typed ".concat(e)),this.setState({inputValue:e})}},{key:"handleSubmit",value:function(){console.log("submitting"),this.setState({searchString:this.state.inputValue})}},{key:"render",value:function(){var e=M(this.state.searchString),a=n.a.createElement(ae,{searchString:this.state.searchString,handleTyping:this.handleInput,handleSubmit:this.handleSubmit});return n.a.createElement(G,{searchBox:a,searchString:this.state.searchString,resultsBoxContainer:e})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,a,t){e.exports=t.p+"static/media/blank-screen.8c8df489.svg"},53:function(e,a,t){e.exports=t.p+"static/media/video-tape.7b003cc9.svg"},54:function(e,a,t){e.exports=t.p+"static/media/mono-dvd-mount.cb59635b.svg"},58:function(e,a,t){e.exports=t(111)}},[[58,1,2]]]);
//# sourceMappingURL=main.72f285d3.chunk.js.map