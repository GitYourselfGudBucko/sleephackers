$(document).ready(function() {
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
        var regex = /vol-(\d+)\/issue-(\d+)\/page-(\d+)/;
        url.replace(regex, function(match, p1, p2, p3) {
            current_volume = parseInt(p1) - 1;
            $("#volume_number").html("v." + p2 + ": " + volume_names[current_volume]);
            current_issue = parseInt(p2) - 1;
            $("#issue_number").html("i." + p2 + ": " + issue_names[current_volume][current_issue]);
            current_page = parseInt(p3) - 1;
            $("#page_number").html("p." + p3);
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
            $(".prev").hide();
        } else {
            $(".prev").show();
        }

        if (current_image == imgs.length - 1) {
            $(".next").hide();
        } else {
            $(".next").show();
        }
        var image = imgs[index];
        parseImageURL(image);
        comic.attr('src', image);
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





    // scrolling animations


    // $('#nav-bar').click(
    //     function() {
    //         $(this).animate({
    //             top: "+=200",
    //         },
    //         5000,
    //         function() {
    //             // Animation complete.
    //         });
    //     });
    // });


    // $(window).scroll(function() {
    //     console.log($(window).scrollTop());
    // 	   $("#nav-bar").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
    //     });



});
