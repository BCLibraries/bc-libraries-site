$('document').ready(function () {

    $('#subject-guides').chosen({
        width: "100%",
        search_contains: false
    }).change(function (event, params) {
        window.location = 'http://libguides.bc.edu/' + params.selected;
    });

    $.getJSON("/db/resources", function (msg) {
        var options = '';
        var $by_title = $('#dbs-by-title');
        var is_trial = false;
        var needs_groups = false;
        jQuery.each(msg, function (index, value) {
            var url;

            if (index == 0 && value.short_name.indexOf('<strong>') > -1) {
                options = "<optgroup label='Trial databases'>";
                needs_groups = true;
                is_trial = true;
            }

            if (value.number) {
                url = 'http://databases.bc.edu/V?func=native-link&resource=' + value.number;
            } else if (value.url) {
                url = value.url;
            } else {
                url = '';
            }
            if (needs_groups && is_trial && value.short_name.indexOf('<strong>') == -1) {
                is_trial = false;
                options = options + '</optgroup><optgroup label="Databases">';
            }
            options = options + '<option value="' + url + '">' + value.short_name + '</option>'
        });

        if (needs_groups) {
            options = options + '</optgroup>';
        }

        $by_title.append(options).chosen({
            width: "100%",
            search_contains: true
        }).change(function (event, params) {
            window.location = params.selected;
        });
    });
});