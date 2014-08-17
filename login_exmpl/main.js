(function($){

function hoverState(item){
    $(item).hover(function(){
      $(this).stop(true, false)
             .fadeTo(100, .3)
            		},function(){
      $(this).stop(true, false)
             .fadeTo(100, 1);
            });
} // end of function

/*Method function*/
function add(selector, method, attribute){
	var s1       = $(selector)
	var m1       = '.'+method
	var at1      = (attribute)
	return s1+m1+at1
}

/*ToolTip*/
var master 			= $('.masterTooltip');
var dis 				= $(this);
var callTool 		= $('<p class="tooltip"></p>');
var tool 				= '.tooltip';

master.hover(function(){
	      // Hover over code
				var title = $(this).attr('title');
				// add(this,'data','tipText'+', '+title);  // it works, however with chaining it sucks.
				// add(this,'removeAttr','title');
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

/*Add Modal*/

var addModal 				= $('.modalClick');
var overlay					= $('#overlay');
var removeModal			= $('.close');

addModal.click(function(e){
	event.preventDefault();
	overlay.fadeIn()
				 .find('#modal')
				 .fadeIn();
});

removeModal.click(function(e){
	event.preventDefault();
	overlay.fadeOut()
				 .find('#modal')
				 .fadeOut();
});



/*Tabs*/
var tabs            = $('#tabs p');
var tabsNotShown    = $('#tabs p:not(:first)');
var tabsLi          = $('#tabs-nav li');
var currentTab      = $('#tabs-nav .current');

tabs.hide().eq(0).show();
tabsNotShown.hide();
tabsLi.click(function(e){
	var clicked       = $(this).find('a:first').attr('href');
	var clickedTabs   = $('#tabs ' + clicked)
	e.preventDefault();
	tabs.hide()
	currentTab.removeClass('current');
	add(this,'addClass','current');
	// $(this).addClass('current');
	clickedTabs.fadeIn('fast');
}).eq(0).addClass('current');



// $(function(){
// $("li").css({"border": "2px solid #333"});
// function hoverState(item){
//     $(item).hover(function(){
//       $(this).stop(true, false)
//               .filter(':not(:animated)')
//               .animate({ width: "200px",
//                          height: "30px",
//                          color: "#fff",
//                          backgroundColor: "#777",
//                          borderTopLeftRadius: 6,
//                          borderTopRightRadius: 6,
//                          borderBottomLeftRadius: 6,
//                          borderBottomRightRadius: 6
//                          }, 90);
//             },function(){
//       $(this).stop(true, false)
//               .animate({ width: "100px",
//                          height: "18px",
//                          backgroundColor: "transparent",
//                          color: "#333",
//                          borderTopLeftRadius: 3,
//                          borderTopRightRadius: 3,
//                          borderBottomLeftRadius: 3,
//                          borderBottomRightRadius: 3
//                         });
//             });
// } // end of function
// hoverState("#1")
// hoverState("#2")
// hoverState("#3")
// });



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