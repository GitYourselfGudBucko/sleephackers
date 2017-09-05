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
    current++;
    if (current == imgs.length) current = 0;
    return imgs[current];
}

// define a function to do the opposite of next()
function prev() {
    current--;
    if (current < 0) current = imgs.length - 1;
    return imgs[current];
}



// define the first image in terms of a jquery object
var comic = $('<img/>').attr('src', imgs[0]);

// append to DOM
$('#page').append(comic);

// click the prev button, get the previous image
$('#prev').on('click', function(){
    comic.attr('src', prev());
});

// click the next button, get the next image
$('#next').on('click', function(){
    comic.attr('src', next());
});

// my alpha and omega
function alpha() {
	return imgs[0];
}


$('#alpha').on('click', function(){
    comic.attr('src', alpha());
});



function omega() {
	return imgs.slice(-1)[0];
}


$('#omega').on('click', function(){
    comic.attr('src', omega());
});

// scrolling animations


/*$('#nav-bar').click(function() {
  $(this).animate({
    top: "+=200",
    }, 5000, function() {
    // Animation complete.
  });
});
*/

$(window).scroll(function(){
				 $("#nav-bar").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
			 });


});
