$(document).ready(function(){
	var		addEntry   = $("#add-entry");
	var		addSection = $("#add-section");
	var 	moveDown 	 = $(".move-down");
	var		type       = $(".type-replace");
	$(addSection).on("click", function(e){
		e.preventDefault();
		if((type).text() === "+"){
			$(addEntry).toggleClass("move-down");
			$(type).text("-");
		}
		else if((type).text() === "-"){
		$(addEntry).toggleClass("move-down");
		$(type).text("+");
		}
	});
});

// $("#signUpCta").on("click", function(){
// 	$(".cta-content").animate({"margin-left":-500},4
// 		00);
// 	// $("#signUpContent").css("display","block")
// 	// 								.animate({opacity:1},400);
// });



// $(".reset").click(function() {
//     $(this).closest('form').find("input[type=text], textarea").val("");
// 		});