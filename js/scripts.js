$(function() {
  
  // $("body").keydown(function(event) {
  //
  //   console.log(event.which);
  //   if (event.which === 38) { // up
  //     $("#rover").css("top", top-5);
  //   } else if (event.which === 40) { // down
  //     $("#rover").css("top", +5);
  //   } else if (event.which === 37) { // left
  //     $("#rover").css("left", -5);
  //   } else if (event.which === 39) { // right
  //     $("#rover").css("left", +5);
  //   }
  // });
  
  $(document).mousemove(function(e){
    $("#rover").stop().animate({left:e.pageX + 10, top:e.pageY + 10});
  });
  
  $("#donate").ready( function() {

  $("#donate").contents().scrollTop( $("#donate").contents().scrollTop() + 100 );

});
  
});
