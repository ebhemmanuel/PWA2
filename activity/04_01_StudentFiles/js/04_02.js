$(document).ready(function(){

	$(document).ready(function(){
		$("img").css("opacity","0")
						.animate({height:"100%",width:"100%"}, 0)
						.delay(200)
						.fadeTo(300, 0.8);
	});

	$("img").mouseover(function(){
		$(this).fadeTo(400, 1)
					 .animate({"margin-top":40,"margin-right":40},100)
					 .animate({height:200,width:200},400);
	});
	$("img").mouseout(function(){
		$(this).fadeTo(400, .3)
					 .animate({"margin-top":0},100)
					 .animate({height:100,width:100},400);
	});
});