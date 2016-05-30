$(document).ready(function() {
        
  var drop_down = $('.dropdown-menu')                         // get ul.dropdown-menu
  $( ".dynamic-template div[id]" ).each(function() {          // loop through all divs with ID assigned
    var link_id = $(this).attr('id');                         // store each ID in link_id variable
    var select_content = $('<li/>').appendTo(drop_down);      // append li tag to dropdown
    var link_dash_replace = link_id.replace(/-/g, " ");       // replace - for " " (space) if found
    $('<a/>').attr('href', '#').attr('id', link_id).text(link_dash_replace).appendTo(select_content);    // append a tag with ID and ID text
  });


  $(".dropdown-menu li a").click(function(){          // get .dropdown-menu li a
    var id = $(this).attr('id');                      // store ID in id variable

    if (id === 'all') {                               // if variable id is equal to 'all'
      $(".dynamic-template div").show();              // show all divs
    }
    else {                                            // else
      $(".dynamic-template div[id]").hide();          // hide all divs with id attribute
      $(".dynamic-template #" + id).show();           // show div with id attribute stored in id variable
    }
  });

});
