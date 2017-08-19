$(document).ready(function() {
	$('#top').css('display', 'none');
	$('#top').fadeIn(2000);
	$('#side-image').css('display', 'none');
	$('#side-image').fadeIn(2000);
	$('.profile-box').css('display', 'none');
	$('.profile-box').fadeIn(2000);

	$('.profile-box').click(function() {
  	$(this).animate({
    	left: "+=15",
    	}, 5000, function() {
    	
  });
});
	
});