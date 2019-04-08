(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    19: function (e, a, t) {
        e.exports = "/video-search/static/media/blank-screen.8c8df489.svg"
    }, 51: function (e, a, t) {
        e.exports = "/video-search/static/media/video-tape.7b003cc9.svg"
    }, 52: function (e, a, t) {
        e.exports = "/video-search/static/media/mono-dvd-mount.cb59635b.svg"
    }, 55: function (e, a, t) {
        e.exports = t(95)
    }, 95: function (e, a, t) {
        "use strict";
        t.r(a);
        t(56);
        var r = t(0), n = t.n(r), l = t(47), s = t.n(l), c = t(18), i = t(48), o = t(53), m = t(49), u = t(13),
            d = t(54), h = t(32), v = t.n(h), E = t(50), f = t(33);
        var b = function (e, a) {
            var t = Object(r.useState)({items: []}), n = Object(f.a)(t, 2), l = n[0], s = n[1],
                c = Object(r.useState)(!1), i = Object(f.a)(c, 2), o = i[0], m = i[1];

            function u() {
                return (u = Object(E.a)(v.a.mark(function a(t) {
                    var r, n;
                    return v.a.wrap(function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                if ("" !== e) {
                                    a.next = 2;
                                    break
                                }
                                return a.abrupt("return");
                            case 2:
                                return m(!0), a.next = 5, fetch(t);
                            case 5:
                                return r = a.sent, a.next = 8, r.json();
                            case 8:
                                n = a.sent, s(n), m(!1);
                            case 11:
                            case"end":
                                return a.stop()
                        }
                    }, a)
                }))).apply(this, arguments)
            }

            return Object(r.useEffect)(function () {
                !function (e) {
                    u.apply(this, arguments)
                }("".concat(a, "?any=").concat(e))
            }, [e]), {data: l, loading: o}
        };
        var g = function (e) {
            var a = e.item;
            if (!a.is_avail && !a.getit) return n.a.createElement("div", null, "Not available. ", n.a.createElement("a", {href: a.link}, "Check for more options"), ".");
            var t = a.avail.filter(function (e) {
                return e.on_shelf
            });
            return n.a.createElement("ul", {className: "available-items-list"}, t.map(function (e) {
                return function (e, a) {
                    var t = e.on_shelf ? "item-info--available" : "item-info--unavailable",
                        r = e.library + "-" + e.loc_display;
                    return n.a.createElement("li", {
                        className: "item-info ".concat(t),
                        key: r
                    }, n.a.createElement("a", {href: a}, n.a.createElement("span", {className: "item-info__library"}, "Find in ", e.lib_display), n.a.createElement("span", {className: "item-info__location"}, e.loc_display), n.a.createElement("span", {className: "item-info__callno"}, "(", e.call_number, ")")))
                }(e, a.link)
            }))
        };
        var N = function (e) {
            var a = e.item;
            return n.a.createElement("li", {className: "catalog-result-item media"}, n.a.createElement("div", {className: "media-body"}, n.a.createElement("h3", {className: "catalog-result-item__media-heading media-heading"}, n.a.createElement("a", {
                href: a.link,
                className: "catalog-result-item__title"
            }, a.title)), n.a.createElement("div", {className: "catalog-result-item__creator"}, function (e) {
                return e.creator ? e.creator : e.contributors[0] ? e.contributors[0] : ""
            }(a)), n.a.createElement("div", {className: "catalog-result-item__publisher"}, a.publisher, " ", a.date), n.a.createElement("div", {className: "catalog-result-item__type"}, a.type), n.a.createElement(g, {item: a}), a.getit && function (e) {
                return n.a.createElement("div", {className: "catalog-result-item__getit"}, n.a.createElement("a", {href: e.link}, "Find online"))
            }(a)), a.covers.length > 1 && function (e) {
                return n.a.createElement("div", {className: "media-right"}, n.a.createElement("img", {
                    src: e.covers[0],
                    alt: "book cover",
                    className: "cover-image"
                }))
            }(a))
        };
        var _ = function (e) {
            var a = e.searchString, t = (e.numResults, b(a, "http://localhost:8080/search-services/catalog")),
                r = t.data,
                l = t.loading ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (s = r.items, 0 === s.length ? n.a.createElement("div", {className: "no-results-found"}, "There are no results matching your search.") : n.a.createElement("ol", {className: "catalog-results-list"}, s.map(function (e) {
                    return n.a.createElement(N, {key: e.id, item: e})
                })));
            var s;
            return n.a.createElement("div", {className: "catalog-results-box"}, n.a.createElement("h2", {className: "catalog-results-box__header"}, "Books & more"), l)
        }, p = function e() {
            Object(c.a)(this, e)
        };
        var k = function (e) {
            var a = e.article;
            return n.a.createElement("li", {className: "article-result-item media"}, n.a.createElement("div", {className: "media-body"}, n.a.createElement("h3", {className: "article-result-item__media-heading"}, n.a.createElement("a", {
                href: a.link,
                className: "article-result-item__title"
            }, a.title)), a.date, n.a.createElement("div", {className: "article-result-item__creator"}, a.creator), n.a.createElement("div", {className: "article-result-item__publisher"}, a.part_of)))
        };
        var y = function (e) {
            var a = e.searchString, t = (e.numResults, b(a, "http://localhost:8080/search-services/catalog")),
                r = t.data,
                l = t.loading ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (s = r.items, 0 === s.length ? n.a.createElement("div", {className: "no-results-found"}, "There are no results matching your search.") : n.a.createElement("ol", {className: "article-results-list"}, s.map(function (e) {
                    return n.a.createElement(k, {key: e.id, article: e})
                })));
            var s;
            return n.a.createElement("div", {className: "article-results-box"}, n.a.createElement("h2", {className: "article-results-box__header"}, "Articles"), l)
        };
        var w = function (e) {
            var a = e.result;
            return n.a.createElement("li", null, n.a.createElement("a", {href: a.url}, a.question))
        };
        var S = function (e) {
            var a = e.searchString, t = b(a, "http://libdev.bc.edu/search-services/faq"), r = t.data, l = t.loading;
            r.items = r.items.slice(0, 4);
            var s = l ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (c = r.items, 0 === c.length ? n.a.createElement("div", {className: "no-results-found"}, "There are no results matching your search.") : n.a.createElement("ol", {className: "faq-results-list"}, c.map(function (e) {
                return n.a.createElement(w, {key: "".concat(e.id), result: e})
            })));
            var c;
            return n.a.createElement("div", {className: "faq-results-box"}, n.a.createElement("h2", {className: "faq-results-box__header"}, "Frequently asked questions"), s)
        };
        var x = function (e) {
            var a = e.librarian, t = "http://libguides.bc.edu/prf.php?account_id=".concat(a.id),
                r = "//".concat(a.image), l = "picture of ".concat(a.name), s = a.subjects.sort().join(", ");
            return n.a.createElement("li", {className: "media"}, n.a.createElement("div", {className: "media-left"}, n.a.createElement("a", {href: t}, n.a.createElement("img", {
                src: r,
                alt: l
            }))), n.a.createElement("div", {className: "media-body"}, n.a.createElement("h4", {className: "media-heading"}, n.a.createElement("a", {href: t}, a.name)), n.a.createElement("p", {className: "guide-description"}, s)))
        };
        var j = function (e) {
            var a = e.searchString, t = (e.numResults, b(a, "http://libdev.bc.edu/search-services/librarians")),
                r = t.data,
                l = t.loading ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (s = r.items, 0 === s.length ? n.a.createElement("div", {className: "no-results-found"}, n.a.createElement("a", {href: "http://libguides.bc.edu/ask-a-librarian/contact"}, "See all subject librarians"), ".") : n.a.createElement("ol", {className: "librarian-results-list"}, s.map(function (e) {
                    return n.a.createElement(x, {key: e.id, librarian: e})
                })));
            var s;
            return n.a.createElement("div", {className: "librarian-results-box"}, n.a.createElement("h2", {className: "librarian-results-box__header"}, "Librarians"), l)
        }, R = t(19), O = t.n(R);
        var I = function (e) {
            var a = e.video, t = a.covers && a.covers.length > 0 ? a.covers[0] : O.a,
                r = a.covers && a.covers.length > 0 ? "online-video-thumb__screenshot" : "online-video-thumb__blank_screen";
            return n.a.createElement("li", {className: "online-video col-md-4"}, n.a.createElement("a", {href: a.getit}, n.a.createElement("div", {className: "online_video__thumb"}, n.a.createElement("img", {
                src: t,
                alt: "screenshot",
                className: r
            }))), n.a.createElement("h3", {className: "online-video__media-heading media-heading"}, n.a.createElement("a", {
                href: a.link,
                className: "online-video__title"
            }, a.title)), a.date, n.a.createElement("div", {className: "online-video__creator"}, function (e) {
                return e.creator ? e.creator : e.contributors[0] ? e.contributors[0] : ""
            }(a)), n.a.createElement("div", {className: "online-video__watch-link"}, n.a.createElement("a", {href: a.getit}, "Watch online")))
        }, L = t(51), q = t.n(L), V = t(52), B = t.n(V);

        function C(e) {
            return e.covers.length > 0 ? "physical-video__box_cover" : "physical-video__default_cover"
        }

        var T = function (e) {
            var a = e.video, t = function (e) {
                if (e.covers.length > 0) return e.covers[0];
                switch (e.format) {
                    case"DVD":
                        return B.a;
                    case"VHS":
                        return q.a;
                    default:
                        return O.a
                }
            }(a);
            return n.a.createElement("li", {className: "physical-video col-md-4"}, n.a.createElement("a", {href: a.link}, n.a.createElement("img", {
                src: t,
                alt: "video cover",
                className: C(a)
            })), n.a.createElement("h3", {className: "physical-video__media-heading media-heading"}, n.a.createElement("a", {
                href: a.link,
                className: "physical-video__title"
            }, a.title)), a.date, n.a.createElement("div", {className: "physical-video__creator"}, function (e) {
                return e.creator ? e.creator : e.contributors[0] ? e.contributors[0] : ""
            }(a)), a.format, n.a.createElement(g, {item: a}))
        };
        var A = function (e) {
            var a = e.searchString, t = (e.numResults, b(a, "http://libdev.bc.edu/search-services/video")), r = t.data,
                l = t.loading ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (s = r.items, 0 === s.length ? n.a.createElement("div", {className: "no-results-found"}, "There are no results matching your search.") : n.a.createElement("ol", {className: "video-results-list row"}, s.map(function (e) {
                    return function (e) {
                        return e.getit ? n.a.createElement(I, {video: e, key: e.id}) : n.a.createElement(T, {
                            video: e,
                            key: e.id
                        })
                    }(e)
                })));
            var s;
            return n.a.createElement("div", {className: "video-results-box"}, n.a.createElement("h2", {className: "video-results-box__header"}, "Video"), l)
        };

        function F(e) {
            return {__html: e.highlight[1]}
        }

        var W = function (e) {
            var a = e.hit;
            return n.a.createElement("li", {className: "website-hit"}, n.a.createElement("h3", {className: "website-hit__title"}, n.a.createElement("a", {href: a.url}, a.page_title)), "in ", n.a.createElement("a", {
                href: a.guide_url,
                className: "website-hit__guide-title"
            }, a.guide_title), n.a.createElement("div", {
                className: "website-hit__highlight",
                dangerouslySetInnerHTML: F(a)
            }))
        };
        var D = function (e) {
            var a = e.searchString, t = (e.numResults, b(a, "http://libdev.bc.edu/search-services/website")),
                r = t.data, l = t.loading;
            r.items = r.items.slice(0, 4);
            var s = l ? n.a.createElement("div", {className: "loading-notice"}, "Loading") : (c = r.items, 0 === c.length ? n.a.createElement("div", {className: "no-results-found"}, "No results found matching your search.") : n.a.createElement("ul", {className: "website-results-list"}, c.map(function (e) {
                return n.a.createElement(W, {key: e.url, hit: e})
            })));
            var c;
            return n.a.createElement("div", {className: "website-results-box"}, n.a.createElement("h2", {className: "website-results-box__header"}, "Our website"), s)
        };
        var H = function (e, a) {
            var t = new p;
            return t.articleResults = n.a.createElement(y, {searchString: e}), t.bookResults = n.a.createElement(_, {searchString: e}), t.faqResults = n.a.createElement(S, {searchString: e}), t.librarianResults = n.a.createElement(j, {searchString: e}), t.videoResults = n.a.createElement(A, {searchString: e}), t.websiteResults = n.a.createElement(D, {searchString: e}), t
        };
        var J = function (e) {
            var a = e.target, t = e.label;
            return n.a.createElement("div", null, n.a.createElement("span", {
                className: "link-to-results__skip_to_link",
                onClick: function (e) {
                    a.current && a.current.scrollIntoView({behavior: "smooth", block: "start"})
                }
            }, t))
        };
        var M = function (e) {
            var a = e.boxes, t = Object(r.useRef)(null), l = Object(r.useRef)(null), s = Object(r.useRef)(null),
                c = Object(r.useRef)(null), i = Object(r.useRef)(null), o = Object(r.useRef)(null);
            return n.a.createElement("div", null, n.a.createElement("div", {className: "row"}, n.a.createElement("nav", {className: "link-to-results col-md-8"}, n.a.createElement("div", {className: "link-to-results__skip-to"}, "Skip to:"), n.a.createElement(J, {
                target: t,
                label: "Books & more"
            }), n.a.createElement(J, {target: l, label: "Articles"}), n.a.createElement(J, {
                target: s,
                label: "FAQ"
            }), n.a.createElement(J, {target: c, label: "Librarians"}), n.a.createElement(J, {
                target: i,
                label: "Video"
            }), n.a.createElement(J, {
                target: o,
                label: "Website"
            })), n.a.createElement("div", {className: "not-finding col-md-4"}, "Not finding what you need? ", n.a.createElement("a", {href: "https://libguides.bc.edu/ask-a-librarian"}, "Ask us!"))), n.a.createElement("div", {className: "bento-results"}, n.a.createElement("div", {className: "results-row-1 row"}, n.a.createElement("div", {
                className: "col-md-5 col-sm-12",
                ref: t
            }, a.bookResults), n.a.createElement("div", {
                className: "col-md-5 col-md-offset-1 col-sm-12",
                ref: l
            }, a.articleResults)), n.a.createElement("div", {
                className: "results-row-2 row",
                ref: s
            }, n.a.createElement("div", {className: "col-md-7"}, a.faqResults), n.a.createElement("div", {
                className: "col-md-4 col-md-offset-1",
                ref: c
            }, a.librarianResults)), n.a.createElement("div", {
                className: "results-row-3 row",
                ref: i
            }, n.a.createElement("div", {className: "col-md-12"}, a.videoResults)), n.a.createElement("div", {
                className: "results-row-4 row",
                ref: o
            }, n.a.createElement("div", {className: "col-md-12"}, a.websiteResults))))
        };
        var Q = function () {
            return n.a.createElement("div", null, "Search for just about anything in or about the Libraries.")
        };
        var U = function (e) {
            var a = e.searchBox, t = e.searchString, r = e.resultsBoxContainer,
                l = t ? n.a.createElement(M, {boxes: r}) : n.a.createElement(Q, null);
            return n.a.createElement("div", {className: "bento-results-page"}, a, l)
        };
        var $ = function (e) {
            var a = e.inputValue, t = e.handleInput;
            return e.handleSubmit, n.a.createElement("form", {
                method: "get",
                action: "."
            }, n.a.createElement("input", {type: "text", value: a, onChange: t, name: "any"}))
        };
        var z = function (e) {
            function a(e) {
                var t;
                Object(c.a)(this, a), t = Object(o.a)(this, Object(m.a)(a).call(this, e));
                var r = function (e) {
                    e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                    var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                    return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
                }("any");
                return t.state = {
                    searchString: r,
                    inputValue: ""
                }, t.handleInput = t.handleInput.bind(Object(u.a)(t)), t.handleSubmit = t.handleSubmit.bind(Object(u.a)(t)), t
            }

            return Object(d.a)(a, e), Object(i.a)(a, [{
                key: "handleInput", value: function (e) {
                    this.setState({inputValue: e.target.value})
                }
            }, {
                key: "handleSubmit", value: function (e) {
                    this.setState({searchString: this.state.inputValue}), e.preventDefault()
                }
            }, {
                key: "render", value: function () {
                    var e = H(this.state.searchString), a = n.a.createElement($, {
                        searchString: this.state.searchString,
                        handleInput: this.handleInput,
                        handleSubmit: this.handleSubmit
                    });
                    return n.a.createElement(U, {
                        searchBox: a,
                        searchString: this.state.searchString,
                        resultsBoxContainer: e
                    })
                }
            }]), a
        }(r.Component);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        s.a.render(n.a.createElement(z, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
        })
    }
}, [[55, 1, 2]]]);
//# sourceMappingURL=main.31b5041a.chunk.js.map