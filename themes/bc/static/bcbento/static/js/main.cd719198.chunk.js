(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(234)},234:function(e,t,a){"use strict";a.r(t);a(101);var r=a(0),n=a.n(r),l=a(93),c=a.n(l),s=a(14);var i=function(e){var t=e.target,a=e.label;return n.a.createElement("div",null,n.a.createElement("span",{className:"link-to-results__skip_to_link",onClick:function(e){t.current&&t.current.scrollIntoView({behavior:"smooth",block:"start"})}},a))};var o={ONL:{weight:-1,Stacks:-3,"1st Floor Microfilm":1},TML:{weight:0},BAPST:{weight:0},BURNS:{weight:0},ERC:{weight:0},SWK:{weight:0},LAW:{weight:0},GEO:{weight:1},RES_SHARE:{weight:2},DEV:{weight:2},INT:{weight:1}};function u(e,t){var a=o[e];return a[t]?a[t]+a.weight:a.weight}function m(e,t){return u(e.library,e.locationCode)-u(t.library,t.locationCode)}function d(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}var h=function(e){var t=e.item;if(!t.available||0===t.holdings.length)return n.a.createElement("div",null,"Not available. ",n.a.createElement("a",{href:d(t)},"Check for more options"),".");for(var a,r=[],l=0;l<t.holdings.length;l++)a=t.holdings[l].items.filter(function(e){return"available"===e.availability}),Array.prototype.push.apply(r,a);var c=r.sort(m),s=c.length>0?function(e,t,a){var r="available"===e.availability?"item-info--available":"item-info--unavailable",l=a>1?" and other libraries":"";return n.a.createElement("li",{className:"item-info ".concat(r)},n.a.createElement("a",{href:t},n.a.createElement("span",{className:"item-info__library"},"Find in ",e.libraryDisplay),n.a.createElement("span",{className:"item-info__location"},e.location),n.a.createElement("span",{className:"item-info__callno"},"(",e.callNumber,")"),n.a.createElement("span",{className:"item-info__other-libraries"},l)))}(c[0],t.link,c.length):"";return n.a.createElement("ul",{className:"available-items-list"},s)};var b=function(e,t){return function(a){a.target.onerror=null,a.target.src=e,t&&(a.target.className=t)}},g="https://library.bc.edu/images/blank-screen.svg";function v(e){return"https://mlib.bc.edu/reserves-api/items/".concat(e.mms)}var f=function(e){var t,a=e.video,r=a.screenCap?a.screenCap:g,l=a.screenCap?"online-video-thumb__screenshot":"online-video-thumb__blank_screen";return n.a.createElement("div",{className:"online-video"},n.a.createElement("a",{href:v(a)},n.a.createElement("div",{className:"online_video__thumb"},n.a.createElement("img",{src:r,alt:"Watch ".concat(a.title," online"),onError:b(g),className:l}))),n.a.createElement("h3",{className:"online-video__media-heading media-heading"},n.a.createElement("a",{href:(t=a,"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(t.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")),className:"online-video__title"},a.title)),a.date,n.a.createElement("div",{className:"online-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"online-video__watch-link"},n.a.createElement("a",{href:v(a)},"Watch online")))},E="https://library.bc.edu/images/mono-dvd-mount.svg",p="physical-video__dvd-cover",_="https://library.bc.edu/images/video-tape.svg",y="physical-video__vhs-cover";function N(e){return e.coverImages.length>0&&e.coverImages[0]?"physical-video__box_cover":"OPER HERE NOW physical-video__default_cover  ".concat(y)}function w(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}function x(e){1===e.target.naturalHeight&&(e.target.className="physical-video__default_cover ".concat(y),e.target.src=_)}var S=function(e){var t=e.video;t.format.includes("disc")&&(_=E,y=p);var a=function(e){return e.coverImages.length>0&&e.coverImages[0]?String(e.coverImages[0].url):_}(t),r="Catalog record for ".concat(t.title);return n.a.createElement("div",{className:"physical-video"},n.a.createElement("a",{href:w(t),"aria-hidden":"true"},n.a.createElement("img",{src:a,onLoad:x,onError:b(_,"OPER physical-video__default_cover ".concat(y)),alt:r,className:N(t)})),n.a.createElement("h3",{className:"physical-video__media-heading media-heading"},n.a.createElement("a",{href:w(t),className:"physical-video__title"},t.title)),t.date,n.a.createElement("div",{className:"physical-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(t)),t.format,n.a.createElement(h,{item:t}))};var k=function(e){var t=e.item,a=e.inCatalogResult,r=t.isElectronic?n.a.createElement(f,{video:t}):n.a.createElement(S,{video:t}),l=a?"catalog-result-item":"catalog-result-item col-md-4";return n.a.createElement("li",{className:l},r)};function j(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}var A=function(e){var t=e.item;if(t.isElectronic&&"Video"===t.type)return n.a.createElement(k,{item:t,inCatalogResult:!0});var a=j(t);return n.a.createElement("li",{className:"catalog-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"catalog-result-item__media-heading media-heading"},n.a.createElement("a",{href:a,className:"catalog-result-item__title"},t.title)),n.a.createElement("div",{className:"catalog-result-item__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(t)),n.a.createElement("div",{className:"catalog-result-item__publisher"},t.publisher," ",t.date),n.a.createElement("div",{className:"catalog-result-item__type"},t.type),t.isElectronic&&function(e){return n.a.createElement("div",{className:"catalog-result-item__getit"},n.a.createElement("a",{href:j(e)},"Find online"))}(t),t.isPhysical&&function(e){return n.a.createElement(h,{item:e})}(t)),t.coverImages.length>1&&function(e){var t="Catalog record for ".concat(e.title);return n.a.createElement("div",{className:"media-right"},n.a.createElement("a",{href:j(e),"aria-hidden":"true"},n.a.createElement("img",{src:e.coverImages[0].url,alt:t,className:"cover-image"})))}(t))};var O=function(e){var t=e.status,a=e.heading,r=e.results,l=e.classPrefix,c=e.seeAll,s=e.noResultsMessage,i=e.searchUrl,o="";return o="loading"===t?n.a.createElement("div",{className:"bento-results-box__loading-notice"},"Loading"):"error"===t?n.a.createElement("div",{className:"bento-results-box__error-notice"},"There was an error performing this search."):s?n.a.createElement("div",{className:"bento-results-box__no-results-notice"},s):n.a.createElement("div",{className:"".concat(l,"-results-box")},n.a.createElement("ol",{className:"".concat(l,"-results-list")},r),c),n.a.createElement("div",{className:"bento-results-box","aria-live":"polite"},n.a.createElement("div",{className:"bento-results-box__header-row"},function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?n.a.createElement("h2",null,n.a.createElement("a",{href:t},e)):n.a.createElement("h2",null,e)}(a,i),c),o)};var C=function(e){var t=e.total,a=e.found,r=e.term,l=e.url;return t||(t=0),t<=a?n.a.createElement("div",{className:"see-all-link--empty"}):r?n.a.createElement("div",{className:"see-all-link"},n.a.createElement("span",{className:"see-all-link__prefix"},">")," ",n.a.createElement("a",{href:l},"See all ",t.toLocaleString()," ",r)):n.a.createElement("div",{className:"see-all-link--badge"},n.a.createElement("a",{href:l},"See all"))},R=a(236),P=a(26),U=a(16),I=a.n(U);function B(){var e=Object(P.a)(['\n{\n  bestBet( keyword: "','") {\n      title\n      displayText\n      link\n  }\n}']);return B=function(){return e},e}function F(){var e=Object(P.a)(['\n{\n  searchFAQ( keyword: "','", limit: 3) {\n    results {\n      id,\n      question,\n      url\n    },   \n    searchUrl,\n    total\n  }\n}']);return F=function(){return e},e}function T(){var e=Object(P.a)(['\n{\n  searchArticles( keyword: "','", limit: 3) {\n    docs {\n      id,\n      title,\n      date,\n      type,\n      contributors,\n      coverImages {\n        url\n      },\n      isPartOf,\n      journalTitle\n    },   \n    didUMean,\n    total\n  }\n}']);return T=function(){return e},e}function L(){var e=Object(P.a)(['\n{\n  searchVideo( keyword: "','", limit: 3) {\n    docs {\n      id,\n      title,\n      date,\n      type,\n      creator,\n      contributors,\n      coverImages { \n        url\n      },\n      available,\n      isPhysical,\n      isElectronic,\n      screenCap,\n      format,\n      mms,\n      holdings {\n        ilsId,\n        libraryCode,\n        locationDisplay,\n        locationCode,\n        availabilityStatus,\n        callNumber,\n        items {\n          availability,\n          locationCode,\n          location,\n          libraryDisplay,\n          library,\n          callNumber\n          }\n        }\n    },   \n    didUMean,\n    total\n  }\n}']);return L=function(){return e},e}function M(){var e=Object(P.a)(['\n{\n  searchCatalog( keyword: "','", limit: 3) {\n    docs {\n      id,\n      title,\n      date,\n      type,\n      creator,\n      contributors,\n      coverImages { \n        url\n      },\n      available,\n      isPhysical,\n      isElectronic,\n      screenCap,\n      mms,\n      holdings {\n        ilsId,\n        libraryCode,\n        locationDisplay,\n        locationCode,\n        availabilityStatus,\n        callNumber,\n        items {\n          availability,\n          locationCode,\n          location,\n          libraryDisplay,\n          library,\n          callNumber\n          }\n        }\n    },   \n    didUMean,\n    total\n  }\n}']);return M=function(){return e},e}var V={forBooksAndMore:function(e){return I()(M(),q(e))},forVideos:function(e){return I()(L(),q(e))},forArticles:function(e){return I()(T(),q(e))},forFAQ:function(e){return I()(F(),e)},forBestBets:function(e){return I()(B(),e)}};function q(e){return e.replace(/"/g,'\\"').replace("/\\/g","\\")}var Q=function(e,t,a){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,".concat(e,"&tab=").concat(t,"&search_scope=").concat(a,"&vid=bclib_new&lang=en_US&offset=0")};var W=function(e){var t=e.searchString,a=Q(t,"bcl_only","bcl");return n.a.createElement(R.a,{query:V.forBooksAndMore(t)},function(e){var t=e.loading,r=e.error,l=e.data,c="",s="success",i=!1,o="";return t?s="loading":r?s="error":l.searchCatalog?0===l.searchCatalog.total?i="There are no results matching your search.":(c=l.searchCatalog.docs.map(function(e){return n.a.createElement(A,{item:e,key:"book-".concat(e.id)})}),o=n.a.createElement(C,{term:"items",total:l.searchCatalog.total,found:l.searchCatalog.docs.length,url:a})):s="error",n.a.createElement(O,{results:c,heading:"Books & more",status:s,searchUrl:a,classPrefix:"books",noResultsMessage:i,seeAll:o})})};function D(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=PC&tab=pci_only&search_scope=pci&vid=bclib_new&lang=en_US")}var H=function(e){var t=e.article;return n.a.createElement("li",{className:"article-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"article-result-item__media-heading media-heading"},n.a.createElement("a",{href:D(t),className:"article-result-item__title"},t.title)),t.date,n.a.createElement("div",{className:"article-result-item__creator"},t.creator),n.a.createElement("div",{className:"article-result-item__publisher"},function(e,t){var a=(e=e.length>0?e[0]:"").split(t);return t&&2===a.length?n.a.createElement("span",{className:"article-result-item__journal-title"},a[0],n.a.createElement("cite",null,t),a[1]):n.a.createElement("span",null,e)}(t.isPartOf,t.journalTitle))))};var J=function(e){var t=e.searchString,a=Q(t,"pci_only","pci");return n.a.createElement(R.a,{query:V.forArticles(t)},function(e){var t=e.loading,r=e.error,l=e.data;if(t)return n.a.createElement(O,{heading:"Articles",status:"loading",classPrefix:"articles"});if(r)return n.a.createElement(O,{heading:"Articles",status:"error",classPrefix:"articles"});if(0===l.searchArticles.total)return n.a.createElement(O,{heading:"Articles",classPrefix:"articles",noResultsMessage:"There are no results matching your search."});var c=l.searchArticles.docs.map(function(e){return n.a.createElement(H,{article:e,key:"article-".concat(e.id)})}),s=n.a.createElement(C,{term:"articles",total:l.searchArticles.total,found:l.searchArticles.docs.length,url:a});return n.a.createElement(O,{results:c,heading:"Articles",searchUrl:a,classPrefix:"articles",seeAll:s})})};var G=function(e){var t=e.result;return n.a.createElement("li",null,n.a.createElement("a",{href:t.url},t.question))},K="faq",$="FAQ";var z=function(e){var t=e.searchString;return n.a.createElement(R.a,{query:V.forFAQ(t)},function(e){var t=e.loading,a=e.error,r=e.data;if(t)return n.a.createElement(O,{heading:$,status:"loading",classPrefix:K});if(a)return n.a.createElement(O,{heading:$,status:"error",classPrefix:K});if(0===r.searchFAQ.total)return n.a.createElement(O,{heading:$,classPrefix:K,noResultsMessage:"There are no results matching your search."});var l=r.searchFAQ.results.map(function(e){return n.a.createElement(G,{result:e,key:"answer-".concat(e.id)})}),c=n.a.createElement(C,{term:"questions",total:r.searchFAQ.total,found:r.searchFAQ.results.length,url:r.searchFAQ.searchUrl});return n.a.createElement(O,{results:l,heading:$,searchUrl:r.searchFAQ.searchUrl,classPrefix:K,seeAll:c})})};var X=function(e){var t=e.librarian,a="http://libguides.bc.edu/prf.php?account_id=".concat(t.id),r="//".concat(t.image),l="picture of ".concat(t.name),c=t.subjects.sort().join(", ");return n.a.createElement("li",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("a",{href:a},n.a.createElement("img",{src:r,alt:l}))),n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"media-heading"},n.a.createElement("a",{href:a},t.name)),n.a.createElement("p",{className:"guide-description"},c)))},Y=a(25),Z=a.n(Y),ee=a(45);var te=function(e,t){var a=Object(r.useState)({error:!1,items:[],total_results:0}),n=Object(s.a)(a,2),l=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1];function d(){return(d=Object(ee.a)(Z.a.mark(function t(a){var r,n;return Z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r={},""!==e){t.next=3;break}return t.abrupt("return");case 3:return m(!0),t.prev=4,t.next=7,fetch(a);case 7:return n=t.sent,t.next=10,n.json();case 10:r=t.sent,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),r={error:!0,items:[]};case 16:c(r),m(!1);case 18:case"end":return t.stop()}},t,null,[[4,13]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(e){d.apply(this,arguments)}("".concat(t,"?any=").concat(e))},[e]),{data:l,loading:u}};var ae=function(e){var t,a=e.render,r=e.heading,l=e.term,c=e.searchString,s=e.baseUrl,i=e.classPrefix,o=e.noResultsMessage,u=te(c,s),m=u.data,d=u.loading,h=function(e){if(e.error)return e;var t={items:[],total_results:null,search_url:null};return t.items=e.items?e.items:e,t.total_results=e.total_results?e.total_results:t.items.length,t.search_url=e.search_url?e.search_url:null,t}(m);return o=o||"There are no results matching your search.",t=d?n.a.createElement("div",{className:"bento-results-box__loading-notice"},"Loading"):h.error?n.a.createElement("div",{className:"bento-results-box__error-notice"},"There was an error performing this search."):h.total_results?n.a.createElement("div",{className:"".concat(i,"-results-box")},n.a.createElement("ol",{className:"".concat(i,"-results-list")},a(h)),n.a.createElement(C,{url:h.search_url,total:h.total_results,found:h.items.length,term:l})):n.a.createElement("div",{className:"bento-results-box__no-results-notice"},o),n.a.createElement("div",{className:"bento-results-box"},n.a.createElement("div",{className:"bento-results-box__header-row"},n.a.createElement("h2",{className:"bento-results-box__header"},n.a.createElement("a",{href:h.search_url},r)),n.a.createElement(C,{url:h.search_url,total:h.total_results,found:h.items.length,term:l})),t)},re=n.a.createElement("div",{className:"no-results-found"},n.a.createElement("a",{href:"http://libguides.bc.edu/ask-a-librarian/contact"},"See all subject librarians"),"."),ne=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(X,{key:e.id,librarian:e})}))};var le=function(e){var t=e.searchString;return n.a.createElement(ae,{baseUrl:"https://library.bc.edu/search-services/librarians",classPrefix:"librarian",term:"librarians",heading:"Librarians",noResultsMessage:re,searchString:t,render:ne})};var ce=function(e){var t=e.searchString,a=Q(t,"video","VIDEO");return n.a.createElement(R.a,{query:V.forVideos(t)},function(e){var t=e.loading,r=e.error,l=e.data,c="",s="success",i=!1,o="";return t?s="loading":r?s="error":0===l.searchVideo.total?i="There are no results matching your search.":(c=l.searchVideo.docs.map(function(e){return n.a.createElement(k,{item:e,key:"video-".concat(e.id)})}),o=n.a.createElement(C,{term:"videos",total:l.searchVideo.total,found:l.searchVideo.docs.length,url:a})),n.a.createElement(O,{results:c,heading:"Videos",status:s,searchUrl:a,classPrefix:"videos",noResultsMessage:i,seeAll:o})})};function se(e){return{__html:e.highlight[1]}}var ie=function(e){var t=e.hit;return n.a.createElement("li",{className:"website-hit"},n.a.createElement("h3",{className:"website-hit__title"},n.a.createElement("a",{href:t.url},t.page_title)),"in ",n.a.createElement("a",{href:t.guide_url,className:"website-hit__guide-title"},t.guide_title),n.a.createElement("div",{className:"website-hit__highlight",dangerouslySetInnerHTML:se(t)}))},oe=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(ie,{key:e.url,hit:e})}))};var ue=function(e){var t=e.searchString;return n.a.createElement(ae,{baseUrl:"https://library.bc.edu/search-services/website",classPrefix:"website",term:"results",heading:"Our Website",searchString:t,render:oe})};var me=function(e){var t=e.bestBet,a=t.link?n.a.createElement("a",{href:t.link},t.title):n.a.createElement("span",null,t.title);return n.a.createElement("div",{className:"best-bet-row"},n.a.createElement("h2",{className:"best-bet-row__heading"},"Top result"),n.a.createElement("div",{className:"best-bet-result"},n.a.createElement("h3",{className:"best-bet-result__title"},a),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.displayText}})))};var de=function(e){var t=e.searchString;return n.a.createElement(R.a,{query:V.forBestBets(t)},function(e){var t=e.loading,a=(e.error,e.data);return!t&&a&&a.bestBet?n.a.createElement(me,{bestBet:a.bestBet}):null})};var he=function(e){var t=e.searchString,a=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useRef)(null),s=Object(r.useRef)(null),o=Object(r.useRef)(null),u=Object(r.useRef)(null);return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("nav",{className:"link-to-results col-md-8"},n.a.createElement("div",{className:"link-to-results__skip-to"},"Skip to:"),n.a.createElement(i,{target:a,label:"Books & more"}),n.a.createElement(i,{target:l,label:"Articles"}),n.a.createElement(i,{target:c,label:"FAQ"}),n.a.createElement(i,{target:s,label:"Librarians"}),n.a.createElement(i,{target:o,label:"Video"}),n.a.createElement(i,{target:u,label:"Website"})),n.a.createElement("div",{className:"not-finding col-md-4"},"Not finding what you need? ",n.a.createElement("a",{href:"https://libguides.bc.edu/ask-a-librarian"},"Ask us!"))),n.a.createElement("div",{className:"bento-results"},n.a.createElement(de,{searchString:t}),n.a.createElement("div",{className:"results-row-1 row"},n.a.createElement("div",{className:"col-md-5 col-sm-12",ref:a},n.a.createElement(W,{searchString:t})),n.a.createElement("div",{className:"col-md-5 col-md-offset-1 col-sm-12",ref:l},n.a.createElement(J,{searchString:t}))),n.a.createElement("div",{className:"results-row-2 row",ref:c},n.a.createElement("div",{className:"col-md-7"},n.a.createElement(z,{searchString:t})),n.a.createElement("div",{className:"col-md-4 col-md-offset-1",ref:s},n.a.createElement(le,{searchString:t}))),n.a.createElement("div",{className:"results-row-3 row",ref:o},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(ce,{searchString:t}))),n.a.createElement("div",{className:"results-row-4 row",ref:u},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(ue,{searchString:t})))))};var be=function(){return n.a.createElement("div",{className:"blank-search-screen"},n.a.createElement("div",{className:"blank-search-screen__explanation"},"Search for just about anything in or about the Libraries."))},ge=a(99),ve=a(5),fe=new ge.a({uri:"https://library.bc.edu/bcbento-server/graphql"});var Ee=function(e){var t=e.searchBox,a=e.searchString;return n.a.createElement(ve.a,{client:fe},n.a.createElement("div",{className:"bento-results-page"},n.a.createElement("h1",{className:"sr-only sr-only-focusable",id:"main-heading"},"Search the library"),t,a?n.a.createElement(he,{searchString:a}):n.a.createElement(be,null)))},pe=a(98),_e=a.n(pe),ye=3,Ne=function(e){return e.value},we="bento-search-box__search-input";function xe(e,t){t.suggestion;var a=t.suggestionValue,r=(t.suggestionIndex,t.sectionIndex,t.method,window.location.protocol+"//"+window.location.host+window.location.pathname);window.location.href="".concat(r,"?any=").concat(a)}var Se=function(e){return n.a.createElement("div",{className:"search-suggestion"},e.value)};var ke=function(e){var t=e.handleTyping,a=e.searchString,l=e.onSubmit,c=Object(r.useState)([]),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(r.useState)(a),d=Object(s.a)(m,2),h=d[0],b=d[1];function g(){return(g=Object(ee.a)(Z.a.mark(function e(t){var a,r,n,l,c;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.value,r=t.reason,n="https://library.bc.edu/search-services/typeahead?any=".concat(a),l=[],!(a.length<ye)){e.next=5;break}return e.abrupt("return");case 5:if("input-focused"!==r){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,e.next=10,fetch(n);case 10:return c=e.sent,e.next=13,c.json();case 13:l=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),l=[];case 19:u(l);case 20:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}var v={placeholder:"Search for books, articles, journals, databases",value:h,onChange:function(e,a){var r=a.newValue;"enter"===a.method?l():(b(r),t(r))},name:"any",id:we,autoFocus:!h};return n.a.createElement("form",{method:"get",action:".",className:"bento-search-box"},n.a.createElement("label",{htmlFor:we,className:"bcbento-search-box__input-label sr-only"},"Enter a search term"),n.a.createElement(_e.a,{suggestions:o,onSuggestionsFetchRequested:function(e){return g.apply(this,arguments)},onSuggestionsClearRequested:function(){u([])},getSuggestionValue:Ne,renderSuggestion:Se,onSuggestionSelected:xe,inputProps:v}))};a(155);function je(e){return e?"Search - ".concat(e):"Search"}var Ae=function(){var e=function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}("any");document.title=je(e);var t=Object(r.useState)(e),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),u=o[0],m=o[1],d=n.a.createElement(ke,{searchString:l,handleTyping:function(e){return m(e)},handleSubmit:function(){c(u),document.title=je(l)}});return n.a.createElement(Ee,{searchBox:d,searchString:l})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.cd719198.chunk.js.map