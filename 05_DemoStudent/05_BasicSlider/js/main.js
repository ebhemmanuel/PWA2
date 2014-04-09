/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 4/9/14
 * Time: 2:58 PM
 * To change this template use File | Settings | File Templates.
 */


jQuery(document).ready(function($){

    $("#checkbox").change(function($){
        setInterval(function(){moveRight();},3000);
    });

    var sliderCount  = $('#myslider ul li').length;
    var sliderWidth  = $('#myslider ul li').width();
    var sliderHeight = $('#myslider ul li').height();
    var sliderUlWidth= sliderCount * sliderWidth;

             $('#myslider').css({width:sliderWidth,     height:sliderHeight});
             $('#myslider ul').css({width:sliderUlWidth,marginLeft: - sliderWidth});
             $('#myslider ul li:last-child').prependTo('#slider ul');

    function moveLeft(){

            $('#myslider ul').animate({left: +sliderWidth},200,function(){
            $('#myslider ul li:last-child').prependTo('#slider ul');
            $('#myslider ul').css('left', '');
        });
    }
    function moveRight() {

            $('#myslider ul').animate({left: -sliderWidth},200,function(){
            $('#myslider ul li:first-child').appendTo('#myslider ul');
            $('#myslider ul').css('left','');

        });
    }

            $('a.control_prev').click(function(){
                                moveLeft();
    });

            $('a.control_next').click(function(){
                                moveRight();
    });


});

//jQuery(document).ready(function($){
//
//    var sliderCount  = $('#myslider ul li').length;
//    var sliderWidth  = $('#myslider ul li').width();
//    var sliderHeight = $('#myslider ul li').height();
//    var sliderUlWidth= sliderCount * sliderWidth;
//
//            $('#myslider').css({ width: sliderWidth, height: sliderHeight});
//            $('#myslider ul').css({ width: sliderUlWidth, marginLeft: -sliderWidth});
//            $('#myslider ul li:last-child').prependTo('#slider ul');
//
//    function moveLeft(){
//
//            $('#myslider ul').animate({left: + sliderWidth}, 200, function(){
//            $('#myslider ul li:last-child').prependTo('#slider ul');
//            $('#myslider ul').css('left', '');
//        });
//    };
//
//    function moveRight(){
//
//            $('#myslider ul').animate({left: -sliderWidth}, 200, function (){
//            $('#myslider ul li:first-child').appendTo('#myslider ul');
//            $('#myslider ul').css('left', '');
//        });
//    };
//
//            $('a.control_prev').click(function(){
//                                moveLeft();
//    });
//
//            $('a.control_next').click(function(){
//                                moveRight();
//    });
//
//});