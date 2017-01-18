$(document).ready(function () {

    function bcBlockSpam() {
        var the_forms = document.querySelectorAll('.remail-form');
        for (i = 0; i < the_forms.length; i++) {
            var form = the_forms[i].action.split("/").pop();
            the_forms[i].action = "http://arc.bc.edu/jforms/webfeedback/webform.moved.php";
        }
        setFeedbackUrl();
    }

    if (window.attachEvent) {
        window.attachEvent('onload', bcBlockSpam);
    } else {
        if (window.onload) {
            var curronload = window.onload;
            var newonload = function () {
                curronload();
                bcBlockSpam();
            };
            window.onload = newonload;
        } else {
            window.onload = bcBlockSpam;
        }
    }

    function setFeedbackUrl() {
        var url = document.URL;
        url = url.replace(/\#.*$/, '');
        document.getElementsByName('page_url')[0].value = url;
    }

    window.addEventListener("hashchange", setFeedbackUrl, false);

    function clearAndReload() {
        $('.visible-form').css('height','');
        $('.remail-form').show();
        $('.feedback-response').remove();
    }

    $('#bcl-feedback .close-modal').click(function () {
        clearAndReload();
    });

    // Clicking outside box closes modal.
    $(".bcl-modal").click(function () {
        if (!$(".bcl-modal>div").is(":hover")) {
            document.location.href = '#';
            clearAndReload();
        }
    });


    $('.remail-form').submit(function () {
        var url = this.action;
        var $form = $(this);
        var $visible_container = $('.visible-form');
        var $loading_img = $('.visible-form img.loading');

        // Save form height.
        $visible_container.height($visible_container.height());

        // Replace form with spinner.
        $form.hide();
        $loading_img.show();

        var respond = function (message) {
            $form.before('<div class="feedback-response">' + message + '</div>');
            $form.find("input[type=text], textarea").val("");
        };

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(), // serializes the form's elements.
            success: function (data) {
                $loading_img.hide();
                respond(data);
            },
            error: function (foo, bar, baz) {
                $loading_img.hide();
                respond('<div><h3>Form Error Occured</h3><p>There was an error sending your feedback.</p><p>Please resend your feedback to <a href="mailto:lib-webadvisory-ggroup@bc.edu">lib-webadvisory-ggroup@bc.edu</a></p></div>');
            }
        });

        return false; // avoid to execute the actual submit of the form.
    });
});
