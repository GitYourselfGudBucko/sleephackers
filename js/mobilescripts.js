$(document).ready(function() {

  document.addEventListener('contextmenu', event => event.preventDefault());


    $('#comic').css('display', 'none');
    $('#comic').fadeIn(2000);
    $('#footer-image').css('display', 'none');
    $('#footer-image').fadeIn(4000);
    $('.nav-bar').css('display', 'none');
    $('.nav-bar').fadeIn(6000);


    var comic = $("#comic");
    // append to DOM
    updateImage(0);

    comic.hammer().bind("swipe", function(e) {
      switch(e.gesture.direction) {
        case 2:
          if (current_image < imgs.length - 1) {
            next();
          }
          break;
        case 4:
          if (current_image > 0) {
            prev();
          }
          break;
        }
    });

    // click the prev button, get the previous image
    $('.prev').on('click', prev);
    // click the next button, get the next image
    $('.next').on('click', next);
    $('.alpha').on('click', alpha);
    $('.omega').on('click', omega);
    $('#page').on('click', next);
		$('#header-image').on('click', alpha);


		$("#volume-dropdown-hover").on('click', function(){
      $('#volume-dropdown').slideToggle();
		});

		$("#issue-dropdown-hover").on('click', function(){
      $('#issue-dropdown').slideToggle();
		});

		$("#page-dropdown-hover").on('click', function(){
      $('#page-dropdown').slideToggle();
		});

		$("#sol").on({
		 "mouseover" : function() {
		    this.src = 'images/solHover.gif';
		  },
		  "mouseout" : function() {
		    this.src='images/sol.gif';
		  }
		});

		$("#rube").on({
		 "mouseover" : function() {
		    this.src = 'images/rubeHover.gif';
		  },
		  "mouseout" : function() {
		    this.src='images/rube.gif';
		  }
		});

		$("#sol").on('click', function(){
      $("#sol-profile").slideToggle();
		});

		$("#atropa").on('click', function(){
      $("#atropa-profile").slideToggle();
		});

		$("#rube").on('click', function(){
      $("#rube-profile").slideToggle();
		});

    $("#twit").on({
     "mouseover" : function() {
        this.src = 'images/twitter-mobile.png';
      },
      "mouseout" : function() {
        this.src='images/twitter-mobile.png';
      }
    });

    $("#gram").on({
     "mouseover" : function() {
        this.src = 'images/instagram-mobile.png';
      },
      "mouseout" : function() {
        this.src='images/instagram-mobile.png';
      }
    });

    $("#in").on({
     "mouseover" : function() {
        this.src = 'images/linkedin-mobile.png';
      },
      "mouseout" : function() {
        this.src='images/linkedin-mobile.png';
      }
    });

    $("#mail").on({
     "mouseover" : function() {
        this.src = 'images/email-mobile.png';
      },
      "mouseout" : function() {
        this.src='images/email-mobile.png';
      }
    });


});
