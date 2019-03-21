/*jslint browser:true */
/*globals $, Handlebars */

'use strict';

/**
 * Function that tracks a click on an outbound link in Analytics.
 * This function takes a valid URL string as an argument, and uses that URL string
 * as the event label. Setting the transport method to 'beacon' lets the hit be sent
 * using 'navigator.sendBeacon' in browser that support it.
 */
var trackOutboundLink = function (url) {
    if (ga.q) {
        // Google Analytics is blocked
        // http://veithen.github.io/2015/01/24/outbound-link-tracking.html
        document.location = url;
    } else {
        ga('send', 'event', 'outbound', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function () {
                document.location = url;
            }
        });
    }
};

function getQueryStringParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var search_string = getQueryStringParam('any');

$.fn.bcBento = function (services) {

    var templates, source, loading_timers, spinner_html, error_html, host, protocol;

    host = window.location.hostname === 'libsite.test' ? 'libdev.bc.edu' : window.location.hostname;
    protocol = window.location.hostname === 'library.bc.edu' ? 'https://' : 'http://';

    function callSearchService(service, keyword) {
        var $target, $heading, url;

        $target = $('#' + service.name + '-results');
        $heading = $('#' + service.name + '-results .search-heading');

        // Workaround for question mark and double-quote problems.
        keyword = keyword.replace(/\?/, '');

        url = protocol + host + '/search-services/' + service.name + '?any=' + encodeURIComponent(keyword);
        url = url.replace(/%2B/, '+').replace('"', '%22');

        // Clear old results.
        $heading.nextAll().remove();
        loading_timers[service.name] = setTimeout(function () {
            $heading.after(spinner_html);
        }, 150);


        $.ajax(
            {
                type: 'GET',
                url: url,
                dataType: 'json',
                cache: true,
                success: function (data) {
                    successfulSearch(data, service, $target, $heading);
                },
                error: function (data) {
                    clearTimeout(loading_timers[service.name]);
                    $heading.nextAll().remove();
                    $heading.after(error_html);
                }
            }
        );
    }

    function successfulSearch(data, service, $target, $heading) {
        if (typeof service.postprocess !== 'undefined') {
            service.postprocess(data);
        }

        if (data.items && data.items.length > service.max_results) {
            data.items = data.items.slice(0, service.max_results);
        }

        buildResultCount(data.total_results, service.name);

        if (templates[service.name]) {
            var html = templates[service.name](data);
            clearTimeout(loading_timers[service.name]);
            $heading.nextAll().remove();
            $heading.after(html);
        }
    }

    function buildResultCount(total_results, service_name) {
        var announce_selector = '#' + service_name + '-results .results-count',
            message = total_results + ' ' + service_name + ' results found',
            aria_results_count;
        aria_results_count = document.querySelector(announce_selector);
        if (aria_results_count) {
            aria_results_count.textContent = message;
        }
    }

    function search(keyword) {
        $('#didyoumean-holder').empty();
        setTitle(keyword);
        services.forEach(function (service) {
            callSearchService(service, keyword);
        });
    }

    function setTitle(keyword) {
        var display_keyword = keyword.replace(/\+/g, ' ');
        if (keyword) {
            document.title = 'Search BC Libraries for "' + truncate(40, display_keyword) + '"';
        }
    }

    function renderServiceResults(service) {
        source = $('#' + service.name + '-template').html();
        if (source) {
            templates[service.name] = Handlebars.compile(source);
        }
    }

    function truncate(max_length, str) {
        if (str.length > max_length) {
            str = str.substr(0, max_length - 1);
            str = str.substr(0, str.lastIndexOf(' ')) + '…';
        }
        return str;
    }

    function localeNumber(n) {
        return n.toLocaleString();
    }

    function ifRemainingResults(v1, v2, options) {
        console.log('called');
        console.log(options);
        if (v1 > v2.length) {
            return options.fn(this);
        }
        return options.inverse(this);
    }

    function missingCoverIcon(format) {
        switch (format) {
            case "DVD":
                return "mono-dvd-mount.svg";
            case "VHS":
                return "video-tape.svg";
            default:
                return "blank-screen.svg";
        }
    }

    function buildSpinner() {
        var source = $('#spinner-template').html();
        return Handlebars.compile(source)({});
    }

    function buildErrorNotice() {
        var source = $('#error-template').html();
        return Handlebars.compile(source)({});
    }

    spinner_html = buildSpinner();
    error_html = buildErrorNotice();

    templates = [];

    loading_timers = [];

    if (!!window.history && history.pushState) {

        history.replaceState({search_string: search_string}, null, '?any=' + search_string);

        window.onpopstate = function (event) {
            search(event.state.search_string);
        };

        $('#bcbento-search').submit(function () {
            var new_search = $('#typeahead').val();
            new_search = new_search.replace(/\s/g, '+');
            history.pushState({search_string: new_search}, null, '?any=' + new_search);
            search(new_search);
            return false;
        });
    }

    $('#search-panel').on('typeahead:selected', function (evt, data) {
        search(data.value);
    });

    Handlebars.registerHelper('truncate', truncate);
    Handlebars.registerHelper('ifRemainingResults', ifRemainingResults);
    Handlebars.registerHelper('localeNumber', localeNumber);
    Handlebars.registerHelper("missingCoverIcon", missingCoverIcon);

    Handlebars.registerPartial("onlineVideo", $("#online-video-template").html());
    Handlebars.registerPartial("physicalVideo", $("#physical-video-template").html());
    Handlebars.registerPartial("seeAll", $("#see-all-template").html());


    services.forEach(renderServiceResults);
    search(search_string);
    $('#lib-search-box').val(search_string);
};


$(document).ready(function () {

    // Define services
    var catalog = {
        name: 'catalog',
        max_results: 3,
        postprocess: function (data) {
            var html, source;
            data.search_string = search_string;
            data.worldcat_search = 'https://bc.on.worldcat.org/search?databaseList=&queryString=' + search_string;
            source = $('#dym-template').html();
            html = Handlebars.compile(source)(data);
            $('#didyoumean-holder').append(html);
        }
    };

    // Define services
    var video = {
        name: 'video',
        max_results: 3
    };

    var articles = {
        name: 'articles',
        max_results: 3
    };

    var librarians = {
        name: 'librarians',
        max_results: 2,
        postprocess: function (data) {
            data.forEach(function (librarian) {
                    librarian.display_subjects = librarian.subjects.sort().join(', ');
                }
            );
        }
    };

    var website = {
        name: 'website',
        max_results: 5
    };

    var faq = {
        name: 'faq',
        max_results: 3
    };

    var service_url_base = '';

    $(document).bcBento([catalog, articles, librarians, website, video, faq], service_url_base);
});