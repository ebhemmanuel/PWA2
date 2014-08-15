(function($){
/*ToolTip*/
var master 			= $('.masterTooltip');
var dis 				= $(this);
var callTool 		= $('<p class="tooltip"></p>');
var tool 				= '.tooltip';

master.hover(function(){
	      // Hover over code
				var title = $(this).attr('title');
				$(this).data('tipText', title).removeAttr('title');
				callTool.text(title).appendTo('body').fadeIn('slow');
				},	function() {
	      // Hover out code
				$(this).attr('title', $(this).data('tipText'));
				$(tool).remove();
}).mousemove(function(e) {
				var mousex = e.pageX + 20;
				var mousey = e.pageY + 10;
				var mouseLoc = { top: mousey, left: mousex };
				$(tool).css(mouseLoc);
		});


// master.hover(function(){
// 	      // Hover over code
// 				var title = $(this).attr('title');
// 				$(this).data('tipText', title).removeAttr('title');
// 				callTool.text(title).appendTo('body').fadeIn('slow');
// 				},	function() {
// 	      // Hover out code
// 				$(this).attr('title', $(this).data('tipText'));
// 				$(tool).remove();
// }).mousemove(function(e) {
// 				var mousex = e.pageX + 20;
// 				var mousey = e.pageY + 10;
// 				var mouseLoc = { top: mousey, left: mousex };
// 				$(tool).css(mouseLoc);
// 		});

// $('.masterTooltip').hover(function(){
//         // Hover over code
//         var title = $(this).attr('title');
//         $(this).data('tipText', title).removeAttr('title');
//         $('<p class="tooltip"></p>')
//         .text(title)
//         .appendTo('body')
//         .fadeIn('slow');
// }, function() {
//         // Hover out code
//         $(this).attr('title', $(this).data('tipText'));
//         $('.tooltip').remove();
// }).mousemove(function(e) {
//         var mousex = e.pageX + 20;
//         var mousey = e.pageY + 10;
//         $('.tooltip')
//         .css({ top: mousey, left: mousex })
// });
})(jQuery)// closing