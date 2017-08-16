(function () {
    $('#storybox .selector').click(handleClick);
    randomizeSelectedStory();

    function handleClick(evt) {
        switchTo(this);
    }

    function switchTo(target) {
        var selected_story = target.getAttribute('data-story'),
            $currently_visible = $('#storybox .selected-story'),
            $new_selection;

        $('#storybox .selected-selector').removeClass('selected-selector');
        $(target).addClass('selected-selector');

        $new_selection = $('#storybox #'+selected_story);

        $currently_visible.removeClass('selected-story');
        $currently_visible.addClass('sr-only');

        $new_selection.removeClass('sr-only');
        $new_selection.addClass('selected-story');
    }

    function randomizeSelectedStory() {
        var selectors = document.querySelectorAll('#storybox .selector');
        var x = Math.floor(Math.random() * selectors.length );
        var random_selector = selectors[x];
        switchTo(random_selector);
    }
}());