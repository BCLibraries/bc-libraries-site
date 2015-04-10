/* MAKES SUBNAV MENU ITEM ACTIVE & APPEAR IN BREADCRUMBS */

$(document).ready(function(){
    // replace href attribute for first breadcrumb
    $("#s-lib-bc-list #s-lib-bc-customer a").attr("href", "http://library.bc.edu/");

    // check to see if there is an active tab
    var activeLI = $("#s-lg-guide-tabs ul.nav-tabs li.active > a");
    if (activeLI && activeLI.length > 0) {
        // grab the active tab's link and text
        var parentHREF = $(activeLI).attr("href");
        var parentText = $(activeLI).text().trim();
        // get location URL
        var loc = $(location).attr('pathname') + $(location).attr('search');
        loc = loc.replace(/\/libguides\//,"").replace(/\?preview.*$/,"");

        // if what is set as active doesn't match what we know is the page location
        if (parentHREF != loc) {
            // find the subnav menu for the active menu
            var subpageDOM = $(activeLI).siblings("ul.s-lg-subtab-ul");
            // find the a tags for the subnav menu
            var subpageATag = subpageDOM.find("li a");

            subpageATag.each(function(index,element){
                // grab the subnav menu's link and text
                var subpageHREF = $(element).attr("href");
                subpageHREF = subpageHREF.replace(/^.*\.bc\.edu/,"");
                // compare the subnav menu to the page location
                if (loc == subpageHREF) {
                    // make sure the true active subnav menu is set as active
                    $(element).addClass("active");
                    // show the entire subnav menu, which is usually hidden
                    // TODO: check if nav menu is horizontal or vertical
                    //    vertical nav menus shouldn't have the subnav menu always showing
                    subpageDOM.show();
                    // make sure the parent menu isn't set as active anymore
                    activeLI.parent("li").removeClass("active");
                    // edit breadcrumbs
                    var subpageBreadcrumb = '<li id="s-lib-bc-parentpage"><a title="'+parentText+'" href="'+parentHREF+'">'+parentText+'</a></li>';
                    $(subpageBreadcrumb).insertBefore("#s-lib-bc-list #s-lib-bc-page");
                    return;
                }
            });
        }
    }

    // remove href and title attributes from page-level breadcrumb when in edit-mode
    if ($(".edit-mode") && $(".edit-mode").length > 0){
        $("#s-lib-bc-list #s-lib-bc-guide a").removeAttr("href").removeAttr("title");
    }
});