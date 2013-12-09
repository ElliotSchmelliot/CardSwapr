$(function() {
	$("#more-span").click(function() {
		$('html, body').animate({
        	scrollTop: $("#lower-content").offset().top
		}, 2000);
	});

			//bind("load", function () { $(this).fadeIn(); });

		// $("body").css("background-color", "blue");

});