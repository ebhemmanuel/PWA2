$("li a").click(function(e){
	e.preventDefault();
	var id          = $(this).attr("href");
	var divPosition = $(id).offset().top;
	$("html, body").animate({scrollTop:divPosition},200);
});

// $(document).ready(function(){
// 	$("#paragraph").hide();
// 	$("#checkbox").click(function{
// 		$("#paragraph").toggle($("#checkbox").is(':checked')function{
// 			$("#paragraph").hide;
// 		});
// 	});
// });


	// $(pws).hide();
	// (ch).click(function(){
	// 	if(this.checked) {$(pws).show()}
	// 		else					 {$(pws).hide()}
	// });

var pws  = $("#paragraph");
var ch   = $("#checkbox");
$(pws).hide()

$(ch).click(function(){
  $(this).is(':checked') ? $(pws).show() : $(pws).hide();
});




