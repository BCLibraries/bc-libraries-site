$('document').ready(function () {

    $('#subject-guides').chosen({
        width: "100%",
        search_contains: true
    }).change(function (event, params) {
        window.location = 'http://libguides.bc.edu/' + params.selected;
    });

    $.getJSON("//library.bc.edu/db/resources?callback=?", function (msg) {
        var options = '';
        var $by_title = $('#dbs-by-title');
        jQuery.each(msg, function (index, value) {
            var url = 'http://databases.bc.edu/V?func=native-link&resource=' + value.number;
            options = options + '<option value="' + url + '">' + value.short_name + '</option>'
        });

        $by_title.append(options).chosen({
            width: "100%",
            search_contains: true
        }).change(function (event, params) {
            window.location = params.selected;
        });
    });
});