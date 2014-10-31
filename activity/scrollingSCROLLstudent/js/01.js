	$(document).ready(function(){
		$("p").css("opacity","0")
						.animate({height:"100%",
							width:"100%"}, 0)
						.delay(200)
						.fadeTo(300, 0.8);
	});