$("button").click(function(){
	console.log("clicked");
	$.getJSON("public/js/simple.json", function(obj){
		$.each(obj, function(key,value){
			$("ul").append("<li>"	+	value.course	+	"</li>");
		});
	});
});

// function showInfo (arr) {
// 	arr.forEach(function(e){
// 		for (var key in e ) {
// 			console.log (key, e[key]);
// 		}
// 	})
// }