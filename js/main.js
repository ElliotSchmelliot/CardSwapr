$(function() {
	$("#more-span").click(function() {
		$('html, body').animate({
        	scrollTop: $("#lower-content").offset().top
		}, 2000);
	});

	$(".row").fadeIn();
});