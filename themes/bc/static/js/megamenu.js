/* Script to control the MegaMenu animations */
$(function () {
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    });

    $('.dropdown-toggle').dropdownHover({delay: "300",hoverDelay: "50"});

    /* Slide effect lifted from http://stackoverflow.com/a/19339162/122629. */
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    }).on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(50);
    });
});