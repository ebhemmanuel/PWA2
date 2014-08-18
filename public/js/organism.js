$(function(){
$("li").css({"border": "2px solid #333"});
function hoverState(item){
    $(item).hover(function(){
       $(this).stop(true, false)
              .filter(':not(:animated)')
              .animate({ width: "200px",
                         height: "30px",
                         color: "#fff",
                         backgroundColor: "#777",
                         borderTopLeftRadius: 6, 
                         borderTopRightRadius: 6, 
                         borderBottomLeftRadius: 6, 
                         borderBottomRightRadius: 6
                         });
            },function(){
       $(this).stop(true, false)
              .animate({ width: "100px",
                         height: "18px",
                         backgroundColor: "transparent",
                         color: "#333",
                         borderTopLeftRadius: 1, 
                         borderTopRightRadius: 1, 
                         borderBottomLeftRadius: 1, 
                         borderBottomRightRadius: 1
                        });
            });
}
hoverState("#1")
hoverState("#2")
hoverState("#3")
});