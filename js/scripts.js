$(document).ready(function() {
	$('#top').css('display', 'none');
	$('#top').fadeIn(2000);
	$('#side-image').css('display', 'none');
	$('#side-image').fadeIn(2000);
	$('.profile-box').css('display', 'none');
	$('.profile-box').fadeIn(2000);

// set up an array of comic images
var imgs = [
	'images/Page-01.jpg',
   	'images/Page-02.jpg',
    'images/Page-03.jpg',
    'images/Page-04.jpg'
 ],
    // initialize current to 0
    current = 0;


// define a function that returns the next item in the imgs array,
// or the first if we're already at the last one
function next() {
    current ++;
    if (current == imgs.length) current = 0;
    updateImage(current);
}

// define a function to do the opposite of next()
function prev() {
    current --;
    if (current < 0) current = imgs.length - 1;
    updateImage(current);
}

// my alpha and omega
function alpha() {
    current = 0;
	updateImage(current);
}

function omega() {
    current = imgs.length - 1;
	updateImage(current);
}


function updateImage(index) {
    if (current == 0) {
        $("#prev").hide();
    } else {
        $("#prev").show();
    }

    if (current == imgs.length - 1) {
        $("#next").hide();
    } else {
        $("#next").show();
    }

    comic.attr('src', imgs[index]);
}


// define the first image in terms of a jquery object
var comic = $('<img/>').attr('src', imgs[0]);

// append to DOM
$('#page').append(comic);

// click the prev button, get the previous image
$('#prev').on('click', prev);
// click the next button, get the next image
$('#next').on('click', next);
$('#alpha').on('click', alpha);
$('#omega').on('click', omega);
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
