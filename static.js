$(document).ready(function() {
          
  $("#all").click(function(){
    $(".static-template div").show();
  });
  
  $("#Html").click(function(){
    $(".static-template div").hide();
    $(".static-template #Html").show();
  });
  
  $("#Css").click(function(){
    $(".static-template div").hide();
    $(".static-template #Css").show();
  });
  
  $("#Ruby-on-Rails").click(function(){
    $(".static-template div").hide();
    $(".static-template #Ruby-on-Rails").show();
  });
  
  $("#WordPress").click(function(){
    $(".static-template div").hide();
    $(".static-template #WordPress").show();
  });

  $("#Unix-shell").click(function(){
    $(".static-template div").hide();
    $(".static-template #Unix-shell").show();
  });
        
});
