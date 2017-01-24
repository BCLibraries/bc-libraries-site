$(document).ready(function () {
    var href = location.hash.substr(1);
    if (href && href === "bcl-feedback"){
        $("body").addClass("body-modal");
    }

    function clearAndReload() {
        document.location.href = '#';
        $("body").removeClass("body-modal");
    }

    $('#mm-feedback-header').click(function () {
        $("body").addClass("body-modal");
    });

    // Clicking outside box closes modal.
    $(".bcl-modal").click(function () {
        if (!$(".bcl-modal>div").is(":hover")) {
            clearAndReload();
        }
    });

    $("#feedback_close").click(function () {
        clearAndReload();
    });
});
