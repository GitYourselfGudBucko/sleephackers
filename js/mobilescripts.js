$(document).ready(function() {

  document.addEventListener('contextmenu', event => event.preventDefault());


    $('#comic').css('display', 'none');
    $('#comic').fadeIn(2000);
    $('#footer-image').css('display', 'none');
    $('#footer-image').fadeIn(4000);
    $('.nav-bar').css('display', 'none');
    $('.nav-bar').fadeIn(6000);



    // set up an array of comic images
    var imgs = [
        'images/volumes/vol-01/issue-01/page-01.jpg',
        'images/volumes/vol-01/issue-01/page-02.jpg',
        'images/volumes/vol-01/issue-01/page-03.jpg',
        'images/volumes/vol-01/issue-01/page-04.jpg'
     ],
        // initialize current_page to 0
        current_image = 0,
        current_page = 0,
        current_issue = 0,
        current_volume = 0,
        volume_names = ["grounding"],
        issue_names = [
            ["enter the metropolis", "exit the metropolis"],
        ];


    function countPagesInIssue(volume, issue) {
        var pages = 0;
        var volume_regex = new RegExp('vol-' + ("00" + volume).slice(-2));
        var issue_regex = new RegExp('issue-' + ("00" + issue).slice(-2));
        for (var i = 0; i < imgs.length; i ++) {
            if (imgs[i].match(volume_regex) && imgs[i].match(issue_regex)) {
                pages ++;
            }
        }
        return pages;
    }

    console.log(countPagesInIssue(1, 1));

    function parseImageURL(url) {
        var regex = /vol-(\d+)\/issue-(\d+)\/page-(\d+)/;
        url.replace(regex, function(match, p1, p2, p3) {
            current_volume = parseInt(p1) - 1;
            $("#volume_number").html("V." + p2);
            current_issue = parseInt(p2) - 1;
            $("#issue_number").html("." + p2);
            current_page = parseInt(p3) - 1;
            $("#page_number").html("." + p3);
        });
    }

    // define a function that returns the next item in the imgs array,
    // or the first if we're already at the last one
    function next() {
        current_image ++;
        if (current_image == imgs.length) current_image = 0;
        updateImage(current_image);

    }

    // define a function to do the opposite of next()
    function prev() {
        current_image --;
        if (current_image < 0) current_image = imgs.length - 1;
        updateImage(current_image);

    }

    // my alpha and omega
    function alpha() {
        current_image = 0;
        updateImage(current_image);

    }

    function omega() {
        current_image = imgs.length - 1;
        updateImage(current_image);

    }

    function updateImage(index) {
        if (current_image == 0) {
            $("#hide-prev").css('opacity', '0');
						$("#hide-alpha").css('opacity', '0');
						$("#hide-prev2").css('opacity', '0');
						$("#hide-alpha2").css('opacity', '0');
        } else {
            $("#hide-prev").css('opacity', '1');
						$("#hide-alpha").css('opacity', '1');
						$("#hide-prev2").css('opacity', '1');
						$("#hide-alpha2").css('opacity', '1');
        }
        if (current_image == imgs.length - 1) {
            $("#hide-next").css('opacity', '0');
						$("#hide-omega").css('opacity', '0');
						$("#hide-next2").css('opacity', '0');
						$("#hide-omega2").css('opacity', '0');
        } else {
            $("#hide-next").css('opacity', '1');
						$("#hide-omega").css('opacity', '1');
						$("#hide-next2").css('opacity', '1');
						$("#hide-omega2").css('opacity', '1');
        }
        var image = imgs[index];
        parseImageURL(image);
        comic.attr('src', image);
        $(window).scrollTop(0);
    }

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
