/* SCRIPT TO CHANGE THE VARIOUS ITEM DROPDOWN PANES */

      $(document).ready(function(){
        /* takes in a single class/id name
         note, the parameter should be stripped of . or # chars  */
        var updateMenu = function(className){
          /* find topmost parent selector for this className */
          var topParent = $("." + className).parents(".iteminfo-content")
          /* toggle the "selected" class value for the li
          // element that was selected */
          $(topParent).find("ul.item-list li").not($("." + className).addClass("selected")).removeClass("selected")
          /* toggle the display of the item_pane element
          // to be shown */
          $(topParent).find(".item_pane").not($("#" + className).show()).hide();
        };

        /* changes the library display pane */
        var changeLibrary = function(){
              /* get list of class values and split them into an array */
              var myClasses = $(this).attr("class").split(/\s+/);
              var myClassPane;

              /* in the case there are multiple class values for each li element */
              if (myClasses && myClasses.length > 1) {
                  /* go through each and get the one class name that
                   // matches "_pane", which is what we know to look for */
                  $.each(myClasses, function(i,e){
                      if (e.indexOf("_pane") != -1) {
                          myClassPane = myClasses[i];
                          return false;
                      }
                  });
              } else {
                  myClassPane = myClasses[0];
              }
              /* add selected class and toggle menu contents div */
              updateMenu(myClassPane);
          }

        /* set up which menu to show as default */
        updateMenu('oneill_pane');
        updateMenu('chat_pane');



        /* when menu li element gets clicked */
        $("ul.item-list li").hoverIntent(changeLibrary);
        $("ul.item-list li").focusin(changeLibrary);
      });