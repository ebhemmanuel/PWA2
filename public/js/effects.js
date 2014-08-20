$(document).ready(function(){

	var		addEntry   = $("#add-entry");
	var		addSection = $("#add-section");
	var 	moveDown 	 = $(".move-down");
	var		type       = $(".type-replace");
	var   signIn     = $("#sign-in");
	var   logBox     = $(".log-box");

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

	$(signIn).on("click", function(e){
		e.preventDefault();
		$(logBox).toggleClass("log-box-open");
	});
});

// $(".reset").click(function() {
//     $(this).closest('form').find("input[type=text], textarea").val("");
// 		});