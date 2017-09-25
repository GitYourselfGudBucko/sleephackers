// Have to forward declare or it is undefined in comic.js
var comic;

$(document).ready(function() {
    
    $('#top').css('display', 'none');
    $('#top').fadeIn(2000);
    $('#side-image').css('display', 'none');
    $('#side-image').fadeIn(2000);
    $('.profile-box').css('display', 'none');
    $('.profile-box').fadeIn(2000);

    comic = $("#comic");
    // append to DOM
    var loc = new URI(window.location.href);
    var params = loc.query(true);
    
    if (Object.keys(params).length) {
        loadQueryString(loc.query(true));
    } else if (document.cookie != "") {
        loadCookie();
    } else {
        updateImage(0);
    }
    // click the prev button, get the previous image
    $('.prev').on('click', prev);
    // click the next button, get the next image
    $('.next').on('click', next);
    $('.alpha').on('click', alpha);
    $('.omega').on('click', omega);
    $('#page').on('click', next);
	$('#header-image').on('click', alpha);

    console.log(countPagesInIssue(1, 1));


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
	    this.src = 'images/sol.gif';
	  }
	});

	$("#rube").on({
	 "mouseover" : function() {
	    this.src = 'images/rubeHover.gif';
	  },
	  "mouseout" : function() {
	    this.src = 'images/rube.gif';
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
        this.src = 'images/twitter-hover.png';
      },
      "mouseout" : function() {
        this.src = 'images/twitter.png';
      }
    });

    $("#gram").on({
     "mouseover" : function() {
        this.src = 'images/instagram-hover.png';
      },
      "mouseout" : function() {
        this.src = 'images/instagram.png';
      }
    });

    $("#in").on({
     "mouseover" : function() {
        this.src = 'images/linkedin-hover.png';
      },
      "mouseout" : function() {
        this.src='images/linkedin.png';
      }
    });

    $("#mail").on({
     "mouseover" : function() {
        this.src = 'images/email-hover.png';
      },
      "mouseout" : function() {
        this.src = 'images/email.png';
      }
    });


});
