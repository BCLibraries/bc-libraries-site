$(document).ready(function () {
    document.querySelectorAll('.remail-form')[0].action='http://libstaff.bc.edu/remail/' + document.querySelectorAll('.remail-form')[0].getAttribute('action');
    document.getElementsByName('page_url')[0].value = document.URL;
});