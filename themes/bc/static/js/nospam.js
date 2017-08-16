$(document).ready(function () {
    var url = window.location.href;
    var hash = window.location.hash;

    console.log('loaded');

    // form fields which will be updated automatically
    // this selector is specific to the LibAnswers Feedback form
    var urlFormField = "#s-la-widget-5468 fieldset#s-la-askform-section-5494 input#val4_5468";

    function clearAndReload() {
        window.location.hash = '#';
        $("body").removeClass("body-modal");
    }

    // adds page url into hidden feedback form field
    function updateURLFormField(){
        $(urlFormField).val(url).change();
        //console.log("added url to input field");
        //console.log("value: " + $(urlFormField).val());
    }

    if (hash && hash === "#bcl-feedback"){
        $("body").addClass("body-modal");
    }

    // backup focus event trigger for when the user reload the page
    // with the form still open
    // TODO: find a better way to handle this case
    $(document.body).one("focus", "#bcl-feedback .s-la-widget", function(){
        updateURLFormField();
    })

    $('#mm-feedback-header').click(function () {
        $("body").addClass("body-modal");
        updateURLFormField();
    });

    // Clicking outside box closes modal.
    $(".bcl-modal").click(function () {
        if (!$(".bcl-modal>div").is(":hover")) {
            clearAndReload();
        }
    });

    $("#feedback_close").click(clearAndReload);
});
