$(document).ready(function() {

  document.addEventListener('contextmenu', event => event.preventDefault());

    $('#top').css('display', 'none');
    $('#top').fadeIn(2000);
    $('#side-image').css('display', 'none');
    $('#side-image').fadeIn(2000);
    $('.profile-box').css('display', 'none');
    $('.profile-box').fadeIn(2000);


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
      var loc = new URI(window.location.href);
      var regex = /vol-(\d+)\/issue-(\d+)\/page-(\d+)/;

      url.replace(regex, function(match, p1, p2, p3) {
          current_volume = parseInt(p1) - 1;
          loc.setQuery("volume", p1);
          $("#volume_number").html("v." + p2 + " " + volume_names[current_volume].toUpperCase());

          current_issue = parseInt(p2) - 1;
          loc.setQuery("issue", p2);
          $("#issue_number").html("." + p2 + " " + issue_names[current_volume][current_issue]);

          current_page = parseInt(p3) - 1;
          $("#page_number").html("p." + p3);
          loc.setQuery("page", p3);
          
          window.history.pushState({path:loc}, "Reality Hackers vol " + p1 +", issue " + p2 + ", p." + p3, loc);
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
            $("#hide-prev").hide();
						$("#hide-alpha").hide();
						$("#hide-prev2").hide();
						$("#hide-alpha2").hide();

        } else {
            $("#hide-prev").show();
						$("#hide-alpha").show();
						$("#hide-prev2").show();
						$("#hide-alpha2").show();
        }

        if (current_image == imgs.length - 1) {
            $("#hide-next").hide();
						$("#hide-omega").hide();
						$("#hide-next2").hide();
						$("#hide-omega2").hide();


        } else {
            $("#hide-next").show();
						$("#hide-omega").show();
						$("#hide-next2").show();
						$("#hide-omega2").show();
        }
        var image = imgs[index];
        parseImageURL(image);
        comic.attr('src', image);

        $(window).scrollTop(0);

    }

    var comic = $("#comic");
    // append to DOM
    updateImage(0);


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
        this.src = 'images/twitter-hover.png';
      },
      "mouseout" : function() {
        this.src='images/twitter.png';
      }
    });

    $("#gram").on({
     "mouseover" : function() {
        this.src = 'images/instagram-hover.png';
      },
      "mouseout" : function() {
        this.src='images/instagram.png';
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
        this.src='images/email.png';
      }
    });

    $(function(){
          $("#scrolling-code").typed({
            strings: ["This is the text that is being typed"],
            typeSpeed: 0
          });
      });

});
