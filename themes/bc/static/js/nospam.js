var the_forms = document.querySelectorAll('.remail-form');
for (i = 0; i < the_forms.length; i++) {
    var form = the_forms[i].action.split("/").pop();
    the_forms[i].action="http://libstaff.bc.edu/remail/"+form;
}