$(document).ready(function(){
	var		addEntry   = $("#add-entry");
	var		addSection = $("#add-section");
	var   moveUp     = $(".move-up");
	var 	moveDown 	 = $(".move-down");
	$(addSection).on("click", function(e){
		e.preventDefault();
		$(addEntry).toggleClass('move-down')
		// $(addSection).text("Cancel")
		// $(this).is($(addSection).text("+")) ? $(this).text("") : $(this).show();
	});
});
