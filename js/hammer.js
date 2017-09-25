$(document).ready(function() {
  $("#touchsurface").hammer().bind("swipe", function(e) {
    console.log(e.gesture);
    switch(e.gesture.direction) {
      case 2:
        $("#touchsurface").css("color", "#16cac3");
        break;
      case 4:
        $("#touchsurface").css("color", "#ee6363");
        break;
    }

  });
})
