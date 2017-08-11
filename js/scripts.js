$(document).ready(function() {
	$('#top').css('display', 'none');
	$('#top').fadeIn(2000);
	$('#side').css('display', 'none');
	$('#side').fadeIn(2000);
	
	$('profile-box').click(function() {
		$(this).animate({left: '250px'});
	});
});