(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/blank-screen.8c8df489.svg"},51:function(e,a,t){e.exports=t.p+"static/media/video-tape.7b003cc9.svg"},52:function(e,a,t){e.exports=t.p+"static/media/mono-dvd-mount.cb59635b.svg"},55:function(e,a,t){e.exports=t(95)},95:function(e,a,t){"use strict";t.r(a);t(56);var r=t(0),l=t.n(r),n=t(47),s=t.n(n),c=t(18),i=t(48),o=t(54),m=t(49),u=t(13),d=t(53),h=t(32),v=t.n(h),E=t(50),f=t(33);var g=function(e,a){var t=Object(r.useState)({error:!1,items:[]}),l=Object(f.a)(t,2),n=l[0],s=l[1],c=Object(r.useState)(!1),i=Object(f.a)(c,2),o=i[0],m=i[1];function u(){return(u=Object(E.a)(v.a.mark(function a(t){var r,l;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r={},""!==e){a.next=3;break}return a.abrupt("return");case 3:return m(!0),a.prev=4,a.next=7,fetch(t);case 7:return l=a.sent,a.next=10,l.json();case 10:r=a.sent,a.next=16;break;case 13:a.prev=13,a.t0=a.catch(4),r={error:!0,items:[]};case 16:s(r),m(!1);case 18:case"end":return a.stop()}},a,null,[[4,13]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(e){u.apply(this,arguments)}("".concat(a,"?any=").concat(e))},[e]),{data:n,loading:o}};var b=function(e){var a=e.item;if(!a.is_avail&&!a.getit)return l.a.createElement("div",null,"Not available. ",l.a.createElement("a",{href:a.link},"Check for more options"),".");var t=a.avail.filter(function(e){return e.on_shelf});return l.a.createElement("ul",{className:"available-items-list"},t.map(function(e){return function(e,a){var t=e.on_shelf?"item-info--available":"item-info--unavailable",r=e.library+"-"+e.loc_display;return l.a.createElement("li",{className:"item-info ".concat(t),key:r},l.a.createElement("a",{href:a},l.a.createElement("span",{className:"item-info__library"},"Find in ",e.lib_display),l.a.createElement("span",{className:"item-info__location"},e.loc_display),l.a.createElement("span",{className:"item-info__callno"},"(",e.call_number,")")))}(e,a.link)}))};var _=function(e){var a=e.item;return l.a.createElement("li",{className:"catalog-result-item media"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h3",{className:"catalog-result-item__media-heading media-heading"},l.a.createElement("a",{href:a.link,className:"catalog-result-item__title"},a.title)),l.a.createElement("div",{className:"catalog-result-item__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),l.a.createElement("div",{className:"catalog-result-item__publisher"},a.publisher," ",a.date),l.a.createElement("div",{className:"catalog-result-item__type"},a.type),l.a.createElement(b,{item:a}),l.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0"),a.getit&&function(e){return l.a.createElement("div",{className:"catalog-result-item__getit"},l.a.createElement("a",{href:e.link},"Find online"))}(a)),a.covers.length>1&&function(e){return l.a.createElement("div",{className:"media-right"},l.a.createElement("a",{href:e.link,"aria-hidden":"true"},l.a.createElement("img",{src:e.covers[0],alt:"",className:"cover-image"})))}(a))};var p=function(e){var a=e.message;return l.a.createElement("div",{className:"bento-result-error"},a)};var N=function(){return l.a.createElement("div",{className:"loading-notice"},"Loading")};var k=function(e){var a=e.total,t=e.found,r=e.term,n=e.url;return a<=t?l.a.createElement("div",{className:"see-all-link--empty"}):r?l.a.createElement("div",{className:"see-all-link"},"> ",l.a.createElement("a",{href:n},"See all ",a.toLocaleString()," ",r)):l.a.createElement("div",{className:"see-all-link--badge"},l.a.createElement("a",{href:n},"See all"))};var w=function(e){var a=e.children,t=e.classPrefix,r=e.url;return l.a.createElement("h2",{className:"".concat(t,"-results-box__header")},l.a.createElement("a",{href:r},a))};var y=function(e){var a=e.searchString,t=(e.numResults,g(a,"http://localhost:8080/search-services/catalog")),r=t.data,n=t.loading?l.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?l.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):l.a.createElement("div",null,l.a.createElement("ol",{className:"catalog-results-list"},s.map(function(e){return l.a.createElement(_,{key:e.id,item:e})})),l.a.createElement(k,{total:c,found:s.length,term:"books",url:i})));var s,c,i;return l.a.createElement("div",{className:"catalog-results-box"},l.a.createElement(w,{classPrefix:"catalog",url:r.search_url},"Books & more"),l.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?l.a.createElement(p,{message:"There was an error searching the catalog."}):n)},S=function e(){Object(c.a)(this,e)};var x=function(e){var a=e.article;return l.a.createElement("li",{className:"article-result-item media"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h3",{className:"article-result-item__media-heading media-heading"},l.a.createElement("a",{href:a.link,className:"article-result-item__title"},a.title)),a.date,l.a.createElement("div",{className:"article-result-item__creator"},a.creator),l.a.createElement("div",{className:"article-result-item__publisher"},function(e,a){var t=e.split(a);return a&&2===t.length?l.a.createElement("span",{className:"article-result-item__journal-title"},t[0],l.a.createElement("cite",null,a),t[1]):l.a.createElement("span",null,e)}(a.part_of,a.journal)),l.a.createElement("a",{href:a.link,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")))};var j=function(e){var a=e.searchString,t=(e.numResults,g(a,"http://localhost:8080/search-services/articles")),r=t.data,n=t.loading?l.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?l.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):l.a.createElement("div",null,l.a.createElement("ol",{className:"article-results-list"},s.map(function(e){return l.a.createElement(x,{key:e.id,article:e})})),l.a.createElement(k,{total:c,found:s.length,term:"articles",url:i})));var s,c,i;return l.a.createElement("div",{className:"article-results-box"},l.a.createElement(w,{url:r.search_url,classPrefix:"article"},"Articles"),l.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?l.a.createElement(p,{message:"There was an error searching articles."}):n)};var R=function(e){var a=e.result;return l.a.createElement("li",null,l.a.createElement("a",{href:a.url},a.question))};var O=function(e){var a=e.searchString,t=g(a,"http://libdev.bc.edu/search-services/faq"),r=t.data,n=t.loading;r.items=r.items.slice(0,4);var s=n?l.a.createElement("div",{className:"loading-notice"},"Loading"):(c=r.items,0===c.length?l.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):l.a.createElement("ol",{className:"faq-results-list"},c.map(function(e){return l.a.createElement(R,{key:"".concat(e.id),result:e})})));var c;return l.a.createElement("div",{className:"faq-results-box"},l.a.createElement(w,{url:r.search_url,classPrefix:"faq"},"Frequently asked questions"),r.error?l.a.createElement(p,{message:"There was an error searching the FAQ."}):s,l.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}))};var T=function(e){var a=e.librarian,t="http://libguides.bc.edu/prf.php?account_id=".concat(a.id),r="//".concat(a.image),n="picture of ".concat(a.name),s=a.subjects.sort().join(", ");return l.a.createElement("li",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("a",{href:t},l.a.createElement("img",{src:r,alt:n}))),l.a.createElement("div",{className:"media-body"},l.a.createElement("h4",{className:"media-heading"},l.a.createElement("a",{href:t},a.name)),l.a.createElement("p",{className:"guide-description"},s)))};var I=function(e){var a=e.searchString,t=(e.numResults,g(a,"http://libdev.bc.edu/search-services/librarians")),r=t.data,n=t.loading?l.a.createElement("div",{className:"loading-notice"},"Loading"):(s=r.items,0===s.length?l.a.createElement("div",{className:"no-results-found"},l.a.createElement("a",{href:"http://libguides.bc.edu/ask-a-librarian/contact"},"See all subject librarians"),"."):l.a.createElement("ol",{className:"librarian-results-list"},s.map(function(e){return l.a.createElement(T,{key:e.id,librarian:e})})));var s;return l.a.createElement("div",{className:"librarian-results-box"},l.a.createElement(w,{url:"http://libguides.bc.edu/ask-a-librarian/contact",classPrefix:"librarian"},"Librarians"),r.error?l.a.createElement(p,{message:"There was an error searching for librarians."}):n)},q=t(19),V=t.n(q);var B=function(e){var a=e.video,t=a.covers&&a.covers.length>0?a.covers[0]:V.a,r=a.covers&&a.covers.length>0?"online-video-thumb__screenshot":"online-video-thumb__blank_screen";return l.a.createElement("li",{className:"online-video col-md-4"},l.a.createElement("a",{href:a.getit},l.a.createElement("div",{className:"online_video__thumb"},l.a.createElement("img",{src:t,alt:"Watch ".concat(a.title," online"),className:r}))),l.a.createElement("h3",{className:"online-video__media-heading media-heading"},l.a.createElement("a",{href:a.link,className:"online-video__title"},a.title)),a.date,l.a.createElement("div",{className:"online-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),l.a.createElement("div",{className:"online-video__watch-link"},l.a.createElement("a",{href:a.getit},"Watch online")))},L=t(51),C=t.n(L),P=t(52),A=t.n(P);function F(e){return e.covers.length>0&&e.covers[0]?"physical-video__box_cover":"physical-video__default_cover"}var W=function(e){var a=e.video,t=function(e){if(e.covers.length>0&&e.covers[0])return String(e.covers[0]);switch(e.format){case"DVD":return A.a;case"VHS":return C.a;default:return V.a}}(a);return l.a.createElement("li",{className:"physical-video col-md-4"},l.a.createElement("a",{href:a.link,"aria-hidden":"true"},l.a.createElement("img",{src:t,alt:"",className:F(a)})),l.a.createElement("h3",{className:"physical-video__media-heading media-heading"},l.a.createElement("a",{href:a.link,className:"physical-video__title"},a.title)),a.date,l.a.createElement("div",{className:"physical-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),a.format,l.a.createElement(b,{item:a}))};var D=function(e){var a=e.searchString,t=(e.numResults,g(a,"http://libdev.bc.edu/search-services/video")),r=t.data,n=t.loading?l.a.createElement(N,null):(s=r.items,c=r.total_results,i=r.search_url,0===s.length?l.a.createElement("div",{className:"no-results-found"},"There are no results matching your search."):l.a.createElement("div",null,l.a.createElement("ol",{className:"video-results-list row"},s.map(function(e){return function(e){return e.getit?l.a.createElement(B,{video:e,key:e.id}):l.a.createElement(W,{video:e,key:e.id})}(e)})),l.a.createElement(k,{total:c,found:s.length,term:"videos",url:i})));var s,c,i;return l.a.createElement("div",{className:"video-results-box"},l.a.createElement(w,{url:r.search_url,classPrefix:"video"},"Video"),l.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?l.a.createElement(p,{message:"There was an error searching videos."}):n)};function H(e){return{__html:e.highlight[1]}}var J=function(e){var a=e.hit;return l.a.createElement("li",{className:"website-hit"},l.a.createElement("h3",{className:"website-hit__title"},l.a.createElement("a",{href:a.url},a.page_title)),"in ",l.a.createElement("a",{href:a.guide_url,className:"website-hit__guide-title"},a.guide_title),l.a.createElement("div",{className:"website-hit__highlight",dangerouslySetInnerHTML:H(a)}))};var Q=function(e){var a=e.searchString,t=(e.numResults,g(a,"http://libdev.bc.edu/search-services/website")),r=t.data,n=t.loading;r.items=r.items.slice(0,4);var s=n?l.a.createElement(N,null):(c=r.items,i=r.total_results,o=r.search_url,0===c.length?l.a.createElement("div",{className:"no-results-found"},"No results found matching your search."):l.a.createElement("div",null,l.a.createElement("ol",{className:"website-results-list"},c.map(function(e){return l.a.createElement(J,{key:e.url,hit:e})})),l.a.createElement(k,{total:i,found:c.length,term:"pages",url:o})));var c,i,o;return l.a.createElement("div",{className:"website-results-box"},l.a.createElement(w,{url:r.search_url,classPrefix:"website"},"Our website"),r.search_url&&l.a.createElement(k,{url:r.search_url,total:r.total_results,found:r.items.length}),r.error?l.a.createElement(p,{message:"There was an error searching the website."}):s)};var M=function(e,a){var t=new S;return t.articleResults=l.a.createElement(j,{searchString:e}),t.bookResults=l.a.createElement(y,{searchString:e}),t.faqResults=l.a.createElement(O,{searchString:e}),t.librarianResults=l.a.createElement(I,{searchString:e}),t.videoResults=l.a.createElement(D,{searchString:e}),t.websiteResults=l.a.createElement(Q,{searchString:e}),t};var U=function(e){var a=e.target,t=e.label;return l.a.createElement("div",null,l.a.createElement("span",{className:"link-to-results__skip_to_link",onClick:function(e){a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})}},t))};var $=function(e){var a=e.boxes,t=Object(r.useRef)(null),n=Object(r.useRef)(null),s=Object(r.useRef)(null),c=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null);return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("nav",{className:"link-to-results col-md-8"},l.a.createElement("div",{className:"link-to-results__skip-to"},"Skip to:"),l.a.createElement(U,{target:t,label:"Books & more"}),l.a.createElement(U,{target:n,label:"Articles"}),l.a.createElement(U,{target:s,label:"FAQ"}),l.a.createElement(U,{target:c,label:"Librarians"}),l.a.createElement(U,{target:i,label:"Video"}),l.a.createElement(U,{target:o,label:"Website"})),l.a.createElement("div",{className:"not-finding col-md-4"},"Not finding what you need? ",l.a.createElement("a",{href:"https://libguides.bc.edu/ask-a-librarian"},"Ask us!"))),l.a.createElement("div",{className:"bento-results"},l.a.createElement("div",{className:"results-row-1 row"},l.a.createElement("div",{className:"col-md-5 col-sm-12",ref:t},a.bookResults),l.a.createElement("div",{className:"col-md-5 col-md-offset-1 col-sm-12",ref:n},a.articleResults)),l.a.createElement("div",{className:"results-row-2 row",ref:s},l.a.createElement("div",{className:"col-md-7"},a.faqResults),l.a.createElement("div",{className:"col-md-4 col-md-offset-1",ref:c},a.librarianResults)),l.a.createElement("div",{className:"results-row-3 row",ref:i},l.a.createElement("div",{className:"col-md-12"},a.videoResults)),l.a.createElement("div",{className:"results-row-4 row",ref:o},l.a.createElement("div",{className:"col-md-12"},a.websiteResults))))};var z=function(){return l.a.createElement("div",null,"Search for just about anything in or about the Libraries.")};var G=function(e){var a=e.searchBox,t=e.searchString,r=e.resultsBoxContainer,n=t?l.a.createElement($,{boxes:r}):l.a.createElement(z,null);return l.a.createElement("div",{className:"bento-results-page"},a,n)};var K=function(e){var a=e.inputValue,t=e.handleInput;return e.handleSubmit,l.a.createElement("form",{method:"get",action:"."},l.a.createElement("input",{type:"text",value:a,onChange:t,name:"any"}))};var X=function(e){function a(e){var t;Object(c.a)(this,a),t=Object(o.a)(this,Object(m.a)(a).call(this,e));var r=function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}("any");return t.state={searchString:r,inputValue:""},t.handleInput=t.handleInput.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleInput",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({searchString:this.state.inputValue}),e.preventDefault()}},{key:"render",value:function(){var e=M(this.state.searchString),a=l.a.createElement(K,{searchString:this.state.searchString,handleInput:this.handleInput,handleSubmit:this.handleSubmit});return l.a.createElement(G,{searchBox:a,searchString:this.state.searchString,resultsBoxContainer:e})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.8d7e30eb.chunk.js.map