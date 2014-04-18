
    jQuery(document).ready(function($){

//    $("#checkbox").change(function(){
//        setInterval(function(){moveRight();},3000);
//    });

        var sliderCount  = $('#myslider ul li').length;
        var sliderWidth  = $('#myslider ul li').width();
        var sliderHeight = $('#myslider ul li').height();
        var sliderUlWidth= sliderCount * sliderWidth;

        $('#myslider').css({width:sliderWidth,     height:sliderHeight});
        $('#myslider ul').css({width:sliderUlWidth,marginLeft: - sliderWidth});
        $('#myslider ul li:last-child').prependTo('#myslider ul');

        function moveLeft(){

            $('#myslider ul').animate({left: +sliderWidth},200,function(){
                $('#myslider ul li:last-child').prependTo('#myslider ul');
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