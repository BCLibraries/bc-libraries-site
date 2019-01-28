/* FETCH LIBRARY HOURS */

$(document).ready(function(){
    // list of library names as keys
    // dom class name as values
    var libs2 = {
                "O'Neill Library": ".lib-oneill",
                "Bapst Library": ".lib-bapst",
                "Burns Library": ".lib-burns",
                "Educational Resource Center": ".lib-erc",
                "Law Library": ".lib-law",
                "Social Work Library": ".lib-swl",
                "Theology and Ministry Library": ".lib-tml"
                };

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // grab each library's data from the output and place it where it needs to go
    function setHours(data){
        // set today's date
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var day = today.getDate()
        var date = months[month] + " " + day + ", " + year;
        $(".hours-todays-date").text(date);

        if ("locations" in data) {
            //console.log(date);
            $.each(data["locations"], function(index, loc) {
                var cat = loc.category;
                var name = loc.name;
                if ((cat == "library") && (name in libs2)) {
                    //console.log(loc.name);
                    //console.log("found " + name);
                    var rendered = loc.rendered;
                    if (loc.rendered.length >= 12) {
                        //console.log("adding font-small class to output");
                        rendered = "<span class='font-small'>" + rendered + "</span>";
                    }

                    if (loc.name == "O'Neill Library" && loc.rendered.includes('*')) {
                        $('.onl-asterisk-notice').show();
                    }

                    $(libs2[name]).html(rendered);
                }
            });
        }
    };

    // call to the hours api
    $.ajax({
        type: "GET",
        url: "//api3.libcal.com/api_hours_today.php?iid=609&lid=0&format=json&system_time=0",
        jsonp: "callback",
        dataType: "jsonp",
        cache: true,
        contentType: "application/javascript",
        data: {l: '0'},
        headers: {'Cache-Control': 'max-age=60'},
        success: setHours,
        error: function(){
            console.log("could not retrieve hours!");
            $.each("div.mini_hours_container").html("Error retrieving hours");
        },
    });
});