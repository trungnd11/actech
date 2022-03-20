(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

	function addStyleBtnHome() {
		$("#btn-return-home").addClass("isActiveBtnStyle");
		setTimeout(function() {
			$("#btn-return-home").removeClass("isActiveBtnStyle");
		}, 500);
	}

	setInterval(addStyleBtnHome(), 500);

})(jQuery);
