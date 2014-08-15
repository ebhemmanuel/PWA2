$(document).ready(function(){
	console.log("!clicked");
	$("button").click(function(){
		console.log("clicked");
		$.getJSON("public/data/simple.json",	function(obj){
			$.each(obj,	function(key,	value){
				$("ul").append("<li>"	+	value.course	+	"</li>");
			});
		});
	});
});

// $(function(){
// 	$('button').click(function(){
// 	$.getJSON('public/data/simple.json', function(obj){
// 		$.each(obj.students,function(key, value){
// 			$("ul").append("<li>" + value.course + "<li>");
// 			$("ul").append("<li>" + value.location + "<li>");
// 			$("ul").append("<li>" + value.date + "<li>");
// 			});
// 		});
// 	});
// })

// function showInfo (arr) {
// 	arr.forEach(function(e){
// 		for (var key in e ) {
// 			console.log (key, e[key]);
// 		}
// 	})
// }