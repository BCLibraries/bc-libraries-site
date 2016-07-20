/* FETCH LIBRARY HOURS */

$(document).ready(function(){
    // list of library names as reported by the hours api
    var libs = ["ONeillLibrary",
                "BapstLibrary",
                "BurnsLibrary",
                "EducationalResourceCenter",
                "LawLibrary",
                "SocialWorkLibrary",
                "TheologyandMinistryLibrary"
                ];

    // grab each library's data from the output and place it where it needs to go
    function setHours(data){
        $.each(libs, function(index, value){
            var libList = $(data["out"]).find("ul#" + value);
            if (libList && libList.length > 0){
                $("div#" + value).append(libList);
                $("div#all_hours_container").append(libList.clone());
            }
        });
    };

    // call to the hours api
    $.ajax({
        type: "GET",
        url: "//arc.bc.edu/libhours/libhours.php",
        jsonp: "callback",
        dataType: "jsonp",
        cache: true,
        contentType: "application/javascript",
        data: {l: '0'},
        headers: {'Cache-Control': 'max-age=60'},
        success: setHours,
        error: function(){
            $.each("div.mini_hours_container").html("Error retrieving hours");
        },
    });
});