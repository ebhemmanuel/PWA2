$(function(){
	$("#handle").click(toggleImage);
});
function toggleImage(){
	if ($("#handle").html()=='+'){
			$("#photo").show(400, function(){$("#footer").show();});
			$("#handle").html("-");
	} else {
		$("#footer").hide();
		$("#photo").hide(400);
		$("#handle").html("+");
	};
}