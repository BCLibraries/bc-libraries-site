/* Script to control the MegaMenu animations */
$(function () {
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    });

    $('.dropdown-toggle').dropdownHover({delay: "300",hoverDelay: "400"});

    /* Slide effect lifted from http://stackoverflow.com/a/19339162/122629. */
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    }).on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(50);
    });

    // Close open menus when user presses ESC
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) {
            $('.dropdown-toggle').each(closeMenu);
        }
    });

    function closeMenu(num, menu) {
        if ($(menu).attr('aria-expanded') === 'true') {
            $(menu).dropdown('toggle');
        }
    }
});