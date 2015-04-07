$(document).ready(function() {
    /* console.log("here"); */
    /* first things first, add in custom updated total containers that we'll be using to display 
    // the updated number of records retrieved. */
    $("#s-lg-az-search-reset").prepend("<div id='updated-total-container' class='s-lib-text-lg pull-left col-md-4'></div>");
    $("#updated-total-container").prepend("<div id='updated-total' style='display: none;' class='bold s-lib-text-lg'></div>");
    $("#updated-total-container").prepend("<div id='updated-total-loading' style='text-align: center;' class='bold s-lib-text-lg'>Loading...</div>");
    $("#s-lg-az-cols #col1").append("<div id='cloned-content-container'></div>");
    
    /* trigger loading text container when parent container is first emptied.
    // SpringShare empties content containers by using $("#foo").html(""),
    // which first causes a DOMNodeRemoved mutation event... */
    $("#s-lg-az-content").on("DOMNodeRemoved propertychange", function(e) {
        console.log("DOMNodeRemoved triggered")
        /* hide updated result count block */
        $("#updated-total").hide();
        /* show loading text */
        $("#updated-total-loading").show();
        /* we unbind the DOMNodeInserted propertychange event after certain 
        // conditions are met. we must rebind the events for page updates. */
        $("#s-lg-az-content").bind("DOMNodeInserted propertychange", onInsert);
    });

    /* then the parent container gets updated with the new content by using the
    // .html() function, which triggers the DOMNodeInserted mutation event...
    // check for tagged elements, remove them and update the total number found. */
    $("#s-lg-az-content").on("DOMNodeInserted propertychange", onInsert);

    /* function bounded to the DOMNodeInserted propertychange event */
    function onInsert() {
        /* console.log("DOMNodeInserted triggered"); */
        /* clone the results block */
        var clone = $("#s-lg-az-content #s-lg-az-results").clone();
        /* remove the DOMNodeInserted propertychange event for the cloned content */
        $(clone).unbind("DOMNodeInserted propertychange");
        /* next, hide the original results block and replace it with our cloned version */
        $("#s-lg-az-content").hide();
        $(clone).attr("id","cloned-content").show();
        $("#cloned-content-container").html(clone);
        updateContent();
    }

    /* go through the cloned block and hide tagged elements */
    function updateContent() {
        var total = $("#cloned-content-container .s-lg-az-result-title a").length;
        /* console.log("total: " + total); */
        /* var anyHidden = $("#col1 .s-lg-az-result:hidden").length; */

        /* ignore this process if there aren't any elements loaded yet OR 
        // only if there wasn't any actual results. */
        if (total == 0 || $("#s-lg-az-results-none").length > 0) {
            return false;
        } else {
            /* tricky. IE will repeatedly loop through this function so we need 
            // a way to remove the binding so it'll play nice. */
            $("#s-lg-az-content").unbind("DOMNodeInserted propertychange");
        }
        var remaining = total;
        
        /* find all tagged databases and add them to an array */
        $("#col1 #cloned-content-container .s-lg-az-result-title a span.to-make-asset").each(function() {
            remaining-=1;
            $(this).parents(".s-lg-az-result").hide();
        });
        /* console.log(remaining); */

        /* update total number of databases available */
        $("#updated-total-loading").hide();

        $("#updated-total").html(remaining + " Database"+ (remaining > 1 ? "s" : "" )+ " found").show();

        /* hide letter headers if searching by database title ONLY 
        // when all results for that letter header are hidden
        //$("#cloned-content .s-lg-db-panel").each(function() {
        //    findVisible = $(this).find(".s-lg-az-result:visible").length;
        //    if (findVisible == 0) {
        //        $(this).hide();
        //    }
        //});
        */
    }
});