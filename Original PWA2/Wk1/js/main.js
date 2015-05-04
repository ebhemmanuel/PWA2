/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 4/7/14
 * Time: 5:45 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){


    $("#logInContent").show();
    $("#signUpContent").show();

    $("#buttonCTA").click(function(){


        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent").animate({opacity:0},400)
                          .hide(400);

        $("#signUpContent").show(300)
                           .animate({opacity:1},900);

    });

    $("#signUp").click(function(){


        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent").animate({opacity:0},400)
                          .hide(400);

        $("#signUpContent").show(300)
                           .animate({opacity:1},900);

    });

    $("#logIn").click(function(){


        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#signUpContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent").show(300)
                          .animate({opacity:1},900);

    });

    $("#home").click(function(){


        $("#signUpContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent").animate({opacity:0},400)
                          .hide(400);

        $("#sliderContent").show(300)
                           .animate({opacity:1},900);


    });

});
