(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t(240)},240:function(e,a,t){"use strict";t.r(a);t(103);var r=t(0),n=t.n(r),l=t(95),c=t.n(l),s=t(14);var i=function(e){var a=e.target,t=e.label;return n.a.createElement("div",null,n.a.createElement("span",{className:"link-to-results__skip_to_link",onClick:function(e){a.current&&a.current.scrollIntoView({behavior:"smooth",block:"start"})}},t))},o=t(13);var u={ONL:{weight:-1,Stacks:-3,"1st Floor Microfilm":1},TML:{weight:0},BAPST:{weight:0},BURNS:{weight:0},ERC:{weight:0},SWK:{weight:0},LAW:{weight:0},GEO:{weight:1},RES_SHARE:{weight:2},DEV:{weight:2},INT:{weight:1}};function m(e,a){var t=u[e];return t[a]?t[a]+t.weight:t.weight}function d(e,a){return m(e.library,e.locationCode)-m(a.library,a.locationCode)}function h(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}var b=function(e){var a=e.item;if(!a.available||0===a.holdings.length)return n.a.createElement("div",null,"Not available. ",n.a.createElement("a",{href:h(a)},"Check for more options"),".");for(var t,r=[],l=0;l<a.holdings.length;l++)t=a.holdings[l].items.filter(function(e){return"available"===e.availability}),Array.prototype.push.apply(r,t);var c=r.sort(d),s=c.length>0?function(e,a,t){var r="available"===e.availability?"item-info--available":"item-info--unavailable",l=t>1?" and other libraries":"";return n.a.createElement("li",{className:"item-info ".concat(r)},n.a.createElement("a",{href:a},n.a.createElement("span",{className:"item-info__library"},"Find in ",e.libraryDisplay),n.a.createElement("span",{className:"item-info__location"},e.location),n.a.createElement("span",{className:"item-info__callno"},"(",e.callNumber,")"),n.a.createElement("span",{className:"item-info__other-libraries"},l)))}(c[0],a.link,c.length):"";return n.a.createElement("ul",{className:"available-items-list"},s)};var g=function(e,a){return function(t){t.target.onerror=null,t.target.src=e,a&&(t.target.className=a)}},v="https://library.bc.edu/images/blank-screen.svg";function f(e){return"https://mlib.bc.edu/reserves-api/items/".concat(e.mms)}var E=function(e){var a=e.video,t=a.screenCap?a.screenCap:v,r=a.screenCap?"online-video-thumb__screenshot":"online-video-thumb__blank_screen";return n.a.createElement("div",{className:"online-video"},n.a.createElement("a",{href:f(a)},n.a.createElement("div",{className:"online_video__thumb"},n.a.createElement("img",{src:t,alt:"Watch ".concat(a.title," online"),onError:g(v),className:r}))),n.a.createElement("h3",{className:"online-video__media-heading media-heading"},n.a.createElement("a",{href:f(a),className:"online-video__title"},a.title)),a.date,n.a.createElement("div",{className:"online-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"online-video__watch-link"},n.a.createElement("a",{href:f(a)},"Watch online")))},p="https://library.bc.edu/images/mono-dvd-mount.svg",_="physical-video__dvd-cover",y="https://library.bc.edu/images/video-tape.svg",N="physical-video__vhs-cover";function w(e){return e.coverImages.length>0&&e.coverImages[0]?"physical-video__box_cover":"OPER HERE NOW physical-video__default_cover  ".concat(N)}function x(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}function S(e){1===e.target.naturalHeight&&(e.target.className="physical-video__default_cover ".concat(N),e.target.src=y)}var k=function(e){var a=e.video;a.format.includes("disc")&&(y=p,N=_);var t=function(e){return e.coverImages.length>0&&e.coverImages[0]?String(e.coverImages[0].url):y}(a);return n.a.createElement("div",{className:"physical-video"},n.a.createElement("a",{href:x(a),"aria-hidden":"true"},n.a.createElement("img",{src:t,onLoad:S,onError:g(y,"OPER physical-video__default_cover ".concat(N)),alt:"",className:w(a)})),n.a.createElement("h3",{className:"physical-video__media-heading media-heading"},n.a.createElement("a",{href:x(a),className:"physical-video__title"},a.title)),a.date,n.a.createElement("div",{className:"physical-video__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),a.format,n.a.createElement(b,{item:a}),";")};var j=function(e){var a=e.item,t=e.inCatalogResult,r=a.isElectronic?n.a.createElement(E,{video:a}):n.a.createElement(k,{video:a}),l=t?"catalog-result-item":"catalog-result-item col-md-4";return n.a.createElement("li",{className:l},r)};function O(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US")}var C=function(e){var a=e.item;if(a.isElectronic&&"Video"===a.type)return n.a.createElement(j,{item:a,inCatalogResult:!0});var t=O(a);return n.a.createElement("li",{className:"catalog-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"catalog-result-item__media-heading media-heading"},n.a.createElement("a",{href:t,className:"catalog-result-item__title"},a.title)),n.a.createElement("div",{className:"catalog-result-item__creator"},function(e){return e.creator?e.creator:e.contributors[0]?e.contributors[0]:""}(a)),n.a.createElement("div",{className:"catalog-result-item__publisher"},a.publisher," ",a.date),n.a.createElement("div",{className:"catalog-result-item__type"},a.type),a.isElectronic&&function(e){return n.a.createElement("div",{className:"catalog-result-item__getit"},n.a.createElement("a",{href:O(e)},"Find online"))}(a),a.isPhysical&&function(e){return n.a.createElement(b,{item:e})}(a),n.a.createElement("a",{href:t,"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")),a.coverImages.length>1&&function(e){return n.a.createElement("div",{className:"media-right"},n.a.createElement("a",{href:O(e),"aria-hidden":"true"},n.a.createElement("img",{src:e.coverImages[0].url,alt:"",className:"cover-image"})))}(a))};var A=function(e){var a=e.status,t=e.heading,r=e.results,l=e.classPrefix,c=e.seeAll,s=e.noResultsMessage,i=e.searchUrl,o="";return o="loading"===a?n.a.createElement("div",{className:"bento-results-box__loading-notice"},"Loading"):"error"===a?n.a.createElement("div",{className:"bento-results-box__error-notice"},"There was an error performing this search."):s?n.a.createElement("div",{className:"bento-results-box__no-results-notice"},s):n.a.createElement("div",{className:"".concat(l,"-results-box")},n.a.createElement("ol",{className:"".concat(l,"-results-list")},r),c),n.a.createElement("div",{className:"bento-results-box"},n.a.createElement("div",{className:"bento-results-box__header-row"},function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a?n.a.createElement("h2",null,n.a.createElement("a",{href:a},e)):n.a.createElement("h3",null,e)}(t,i),c),o)};var R=function(e){var a=e.total,t=e.found,r=e.term,l=e.url;return a||(a=0),a<=t?n.a.createElement("div",{className:"see-all-link--empty"}):r?n.a.createElement("div",{className:"see-all-link"},n.a.createElement("span",{className:"see-all-link__prefix"},">")," ",n.a.createElement("a",{href:l},"See all ",a.toLocaleString()," ",r)):n.a.createElement("div",{className:"see-all-link--badge"},n.a.createElement("a",{href:l},"See all"))},P=t(11),U=t(10),I=t.n(U);var T=function(e){return e.replace(/"/g,'\\"').replace("/\\/g","\\")};function F(){var e=Object(o.a)(['\n{\n  searchCatalog( keyword: "','", limit: 3) {\n    docs {\n      id,\n      title,\n      date,\n      type,\n      creator,\n      contributors,\n      coverImages { \n        url\n      },\n      available,\n      isPhysical,\n      isElectronic,\n      screenCap,\n      mms,\n      holdings {\n        ilsId,\n        libraryCode,\n        locationDisplay,\n        locationCode,\n        availabilityStatus,\n        callNumber,\n        items {\n          availability,\n          locationCode,\n          location,\n          libraryDisplay,\n          library,\n          callNumber\n          }\n        }\n    },   \n    didUMean,\n    total\n  }\n}']);return F=function(){return e},e}function q(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any%2Ccontains%2C".concat(e,"&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US&offset=0")}var L=function(e){var a=e.searchString,t=T(a),r=I()(F(),t);return n.a.createElement(P.b,{query:r},function(e){var t=e.loading,r=e.error,l=e.data,c="",s="success",i=!1,o="";return t?s="loading":r?s="error":l.searchCatalog?0===l.searchCatalog.total?i="There are no results matching your search.":(c=l.searchCatalog.docs.map(function(e){return n.a.createElement(C,{item:e,key:"book-".concat(e.id)})}),o=n.a.createElement(R,{term:"items",total:l.searchCatalog.total,found:l.searchCatalog.docs.length,url:q(a)})):s="error",n.a.createElement(A,{results:c,heading:"Books & more",status:s,searchUrl:q(a),classPrefix:"books",noResultsMessage:i,seeAll:o})})};function M(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=".concat(e.id,"&context=PC&tab=pci_only&search_scope=pci&vid=bclib_new&lang=en_US")}var B=function(e){var a=e.article;return n.a.createElement("li",{className:"article-result-item media"},n.a.createElement("div",{className:"media-body"},n.a.createElement("h3",{className:"article-result-item__media-heading media-heading"},n.a.createElement("a",{href:M(a),className:"article-result-item__title"},a.title)),a.date,n.a.createElement("div",{className:"article-result-item__creator"},a.creator),n.a.createElement("div",{className:"article-result-item__publisher"},function(e,a){var t=(e=e.length>0?e[0]:"").split(a);return a&&2===t.length?n.a.createElement("span",{className:"article-result-item__journal-title"},t[0],n.a.createElement("cite",null,a),t[1]):n.a.createElement("span",null,e)}(a.isPartOf,a.journalTitle)),n.a.createElement("a",{href:M(a),"aria-hidden":"true",className:"media-body__mobile-link"},"\xa0")))};function V(){var e=Object(o.a)(['\n{\n  searchArticles( keyword: "','", limit: 3) {\n    docs {\n      id,\n      title,\n      date,\n      type,\n      contributors,\n      coverImages {\n        url\n      },\n      isPartOf,\n      journalTitle\n    },   \n    didUMean,\n    total\n  }\n}']);return V=function(){return e},e}function Q(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any%2Ccontains%2C".concat(e,"&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US&offset=0")}var W=function(e){var a=e.searchString,t=T(a),r=I()(V(),t);return n.a.createElement(P.b,{query:r},function(e){var t=e.loading,r=e.error,l=e.data;if(t)return n.a.createElement(A,{heading:"Articles",status:"loading",classPrefix:"articles"});if(r)return n.a.createElement(A,{heading:"Articles",status:"error",classPrefix:"articles"});if(0===l.searchArticles.total)return n.a.createElement(A,{heading:"Articles",classPrefix:"articles",noResultsMessage:"There are no results matching your search."});var c=l.searchArticles.docs.map(function(e){return n.a.createElement(B,{article:e,key:"article-".concat(e.id)})}),s=n.a.createElement(R,{term:"articles",total:l.searchArticles.total,found:l.searchArticles.docs.length,url:Q(a)});return n.a.createElement(A,{results:c,heading:"Articles",searchUrl:Q(a),classPrefix:"articles",seeAll:s})})};var D=function(e){var a=e.result;return n.a.createElement("li",null,n.a.createElement("a",{href:a.url},a.question))};function H(){var e=Object(o.a)(['\n{\n  searchFAQ( keyword: "','", limit: 3) {\n    results {\n      id,\n      question,\n      url\n    },   \n    searchUrl,\n    total\n  }\n}']);return H=function(){return e},e}var J="faq",G="FAQ";var K=function(e){var a=e.searchString,t=T(a),r=I()(H(),t);return n.a.createElement(P.b,{query:r},function(e){var a=e.loading,t=e.error,r=e.data;if(a)return n.a.createElement(A,{heading:G,status:"loading",classPrefix:J});if(t)return n.a.createElement(A,{heading:G,status:"error",classPrefix:J});if(0===r.searchFAQ.total)return n.a.createElement(A,{heading:G,classPrefix:J,noResultsMessage:"There are no results matching your search."});var l=r.searchFAQ.results.map(function(e){return n.a.createElement(D,{result:e,key:"answer-".concat(e.id)})}),c=n.a.createElement(R,{term:"questions",total:r.searchFAQ.total,found:r.searchFAQ.results.length,url:r.searchFAQ.searchUrl});return n.a.createElement(A,{results:l,heading:G,searchUrl:r.searchFAQ.searchUrl,classPrefix:J,seeAll:c})})};var $=function(e){var a=e.librarian,t="http://libguides.bc.edu/prf.php?account_id=".concat(a.id),r="//".concat(a.image),l="picture of ".concat(a.name),c=a.subjects.sort().join(", ");return n.a.createElement("li",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("a",{href:t},n.a.createElement("img",{src:r,alt:l}))),n.a.createElement("div",{className:"media-body"},n.a.createElement("h4",{className:"media-heading"},n.a.createElement("a",{href:t},a.name)),n.a.createElement("p",{className:"guide-description"},c)))},z=t(27),X=t.n(z),Y=t(46);var Z=function(e,a){var t=Object(r.useState)({error:!1,items:[],total_results:0}),n=Object(s.a)(t,2),l=n[0],c=n[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1];function d(){return(d=Object(Y.a)(X.a.mark(function a(t){var r,n;return X.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r={},""!==e){a.next=3;break}return a.abrupt("return");case 3:return m(!0),a.prev=4,a.next=7,fetch(t);case 7:return n=a.sent,a.next=10,n.json();case 10:r=a.sent,a.next=16;break;case 13:a.prev=13,a.t0=a.catch(4),r={error:!0,items:[]};case 16:c(r),m(!1);case 18:case"end":return a.stop()}},a,null,[[4,13]])}))).apply(this,arguments)}return Object(r.useEffect)(function(){!function(e){d.apply(this,arguments)}("".concat(a,"?any=").concat(e))},[e]),{data:l,loading:u}};var ee=function(e){var a,t=e.render,r=e.heading,l=e.term,c=e.searchString,s=e.baseUrl,i=e.classPrefix,o=e.noResultsMessage,u=Z(c,s),m=u.data,d=u.loading,h=function(e){if(e.error)return e;var a={items:[],total_results:null,search_url:null};return a.items=e.items?e.items:e,a.total_results=e.total_results?e.total_results:a.items.length,a.search_url=e.search_url?e.search_url:null,a}(m);return o=o||"There are no results matching your search.",a=d?n.a.createElement("div",{className:"bento-results-box__loading-notice"},"Loading"):h.error?n.a.createElement("div",{className:"bento-results-box__error-notice"},"There was an error performing this search."):h.total_results?n.a.createElement("div",{className:"".concat(i,"-results-box")},n.a.createElement("ol",{className:"".concat(i,"-results-list")},t(h)),n.a.createElement(R,{url:h.search_url,total:h.total_results,found:h.items.length,term:l})):n.a.createElement("div",{className:"bento-results-box__no-results-notice"},o),n.a.createElement("div",{className:"bento-results-box"},n.a.createElement("div",{className:"bento-results-box__header-row"},n.a.createElement("h2",{className:"bento-results-box__header"},n.a.createElement("a",{href:h.search_url},r)),n.a.createElement(R,{url:h.search_url,total:h.total_results,found:h.items.length,term:l})),a)},ae=n.a.createElement("div",{className:"no-results-found"},n.a.createElement("a",{href:"http://libguides.bc.edu/ask-a-librarian/contact"},"See all subject librarians"),"."),te=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement($,{key:e.id,librarian:e})}))};var re=function(e){var a=e.searchString;return n.a.createElement(ee,{baseUrl:"https://library.bc.edu/search-services/librarians",classPrefix:"librarian",term:"librarians",heading:"Librarians",noResultsMessage:ae,searchString:a,render:te})};function ne(){var e=Object(o.a)(['\n{\n  searchVideo( keyword: "','", limit: 3) {\n     docs {\n      id,\n      title,\n      date,\n      format,\n      type,\n      creator,\n      contributors,\n      coverImages { \n        url\n      },\n      available,\n      isPhysical,\n      isElectronic,\n      screenCap,\n      mms,\n      holdings {\n        ilsId,\n        libraryCode,\n        locationDisplay,\n        locationCode,\n        availabilityStatus,\n        callNumber,\n        items {\n          availability,\n          locationCode,\n          location,\n          libraryDisplay,\n          library,\n          callNumber\n          }\n        }\n    },   \n    didUMean,\n    total\n  }\n}']);return ne=function(){return e},e}function le(e){return"https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,".concat(e,"&tab=bcl_only&search_scope=bcl&vid=bclib_new&facet=rtype,include,video&lang=en_US&offset=0")}var ce=function(e){var a=e.searchString,t=T(a),r=I()(ne(),t);return n.a.createElement(P.b,{query:r},function(e){var t=e.loading,r=e.error,l=e.data,c="",s="success",i=!1,o="";return t?s="loading":r?s="error":0===l.searchVideo.total?i="There are no results matching your search.":(c=l.searchVideo.docs.map(function(e){return n.a.createElement(j,{item:e,key:"video-".concat(e.id)})}),o=n.a.createElement(R,{term:"videos",total:l.searchVideo.total,found:l.searchVideo.docs.length,url:le(a)})),n.a.createElement(A,{results:c,heading:"Videos",status:s,searchUrl:le(a),classPrefix:"videos",noResultsMessage:i,seeAll:o})})};function se(e){return{__html:e.highlight[1]}}var ie=function(e){var a=e.hit;return n.a.createElement("li",{className:"website-hit"},n.a.createElement("h3",{className:"website-hit__title"},n.a.createElement("a",{href:a.url},a.page_title)),"in ",n.a.createElement("a",{href:a.guide_url,className:"website-hit__guide-title"},a.guide_title),n.a.createElement("div",{className:"website-hit__highlight",dangerouslySetInnerHTML:se(a)}))},oe=function(e){return n.a.createElement(n.a.Fragment,null,e.items.map(function(e){return n.a.createElement(ie,{key:e.url,hit:e})}))};var ue=function(e){var a=e.searchString;return n.a.createElement(ee,{baseUrl:"https://library.bc.edu/search-services/website",classPrefix:"website",term:"results",heading:"Our Website",searchString:a,render:oe})};var me=function(e){var a=e.bestBet,t=a.link?n.a.createElement("a",{href:a.link},a.title):n.a.createElement("span",null,a.title);return n.a.createElement("div",{className:"best-bet-row"},n.a.createElement("h2",{className:"best-bet-row__heading"},"Top result"),n.a.createElement("div",{className:"best-bet-result"},n.a.createElement("h3",{className:"best-bet-result__title"},t),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.displayText}})))};function de(){var e=Object(o.a)(['\n{\n  bestBet( keyword: "','") {\n      title\n      displayText\n      link\n  }\n}']);return de=function(){return e},e}var he=function(e){var a=e.searchString,t=T(a),r=I()(de(),t);return n.a.createElement(P.b,{query:r},function(e){var a=e.loading,t=(e.error,e.data);return!a&&t&&t.bestBet?n.a.createElement(me,{bestBet:t.bestBet}):null})};var be=function(e){var a=e.searchString,t=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useRef)(null),s=Object(r.useRef)(null),o=Object(r.useRef)(null),u=Object(r.useRef)(null);return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("nav",{className:"link-to-results col-md-8"},n.a.createElement("div",{className:"link-to-results__skip-to"},"Skip to:"),n.a.createElement(i,{target:t,label:"Books & more"}),n.a.createElement(i,{target:l,label:"Articles"}),n.a.createElement(i,{target:c,label:"FAQ"}),n.a.createElement(i,{target:s,label:"Librarians"}),n.a.createElement(i,{target:o,label:"Video"}),n.a.createElement(i,{target:u,label:"Website"})),n.a.createElement("div",{className:"not-finding col-md-4"},"Not finding what you need? ",n.a.createElement("a",{href:"https://libguides.bc.edu/ask-a-librarian"},"Ask us!"))),n.a.createElement("div",{className:"bento-results"},n.a.createElement(he,{searchString:a}),n.a.createElement("div",{className:"results-row-1 row"},n.a.createElement("div",{className:"col-md-5 col-sm-12",ref:t},n.a.createElement(L,{searchString:a})),n.a.createElement("div",{className:"col-md-5 col-md-offset-1 col-sm-12",ref:l},n.a.createElement(W,{searchString:a}))),n.a.createElement("div",{className:"results-row-2 row",ref:c},n.a.createElement("div",{className:"col-md-7"},n.a.createElement(K,{searchString:a})),n.a.createElement("div",{className:"col-md-4 col-md-offset-1",ref:s},n.a.createElement(re,{searchString:a}))),n.a.createElement("div",{className:"results-row-3 row",ref:o},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(ce,{searchString:a}))),n.a.createElement("div",{className:"results-row-4 row",ref:u},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(ue,{searchString:a})))))};var ge=function(){return n.a.createElement("div",{className:"blank-search-screen"},n.a.createElement("div",{className:"blank-search-screen__explanation"},"Search for just about anything in or about the Libraries."))},ve=new(t(101).a)({uri:"https://library.bc.edu/bcbento-server/graphql"});var fe=function(e){var a=e.searchBox,t=e.searchString;return n.a.createElement(P.a,{client:ve},n.a.createElement("div",{className:"bento-results-page"},a,t?n.a.createElement(be,{searchString:t}):n.a.createElement(ge,null)))},Ee=t(100),pe=t.n(Ee),_e=3,ye=function(e){return e.value};function Ne(e,a){a.suggestion;var t=a.suggestionValue,r=(a.suggestionIndex,a.sectionIndex,a.method,window.location.protocol+"//"+window.location.host+window.location.pathname);window.location.href="".concat(r,"?any=").concat(t)}var we=function(e){return n.a.createElement("div",{className:"search-suggestion"},e.value)};var xe=function(e){var a=e.handleTyping,t=e.searchString,l=e.onSubmit,c=Object(r.useState)([]),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(r.useState)(t),d=Object(s.a)(m,2),h=d[0],b=d[1];function g(){return(g=Object(Y.a)(X.a.mark(function e(a){var t,r,n,l,c;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.value,r=a.reason,n="https://library.bc.edu/search-services/typeahead?any=".concat(t),l=[],!(t.length<_e)){e.next=5;break}return e.abrupt("return");case 5:if("input-focused"!==r){e.next=7;break}return e.abrupt("return");case 7:return e.prev=7,e.next=10,fetch(n);case 10:return c=e.sent,e.next=13,c.json();case 13:l=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),l=[];case 19:u(l);case 20:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}var v={placeholder:"Search for books, articles, journals, databases",value:h,onChange:function(e,t){var r=t.newValue;"enter"===t.method?l():(b(r),a(r))},name:"any",autoFocus:!h};return n.a.createElement("form",{method:"get",action:".",className:"bento-search-box"},n.a.createElement("label",{htmlFor:"bento-search-box__search-input",className:"bcbento-search-box__input-label sr-only"},"Search"),n.a.createElement(pe.a,{suggestions:o,onSuggestionsFetchRequested:function(e){return g.apply(this,arguments)},onSuggestionsClearRequested:function(){u([])},getSuggestionValue:ye,renderSuggestion:we,onSuggestionSelected:Ne,inputProps:v,id:"bento-search-box__search-input"}))};t(161);function Se(e){return e?"Search - ".concat(e):"Search"}var ke=function(){var e=function(e){e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}("any");document.title=Se(e);var a=Object(r.useState)(e),t=Object(s.a)(a,2),l=t[0],c=t[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),u=o[0],m=o[1],d=n.a.createElement(xe,{searchString:l,handleTyping:function(e){return m(e)},handleSubmit:function(){c(u),document.title=Se(l)}});return n.a.createElement(fe,{searchBox:d,searchString:l})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,1,2]]]);
//# sourceMappingURL=main.6266c0c7.chunk.js.map