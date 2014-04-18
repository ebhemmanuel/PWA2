/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 4/7/14
 * Time: 5:45 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){


    $("#logInContent") .show();
    $("#signUpContent").show();


    $("#buttonCTA").click(function(){
        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent") .animate({opacity:0},400)
                           .hide(400);

        $("#signUpContent").show(600)
                           .animate({opacity:1},900);

    });

    $("#signUp").click(function(){
        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent") .animate({opacity:0},400)
                           .hide(400);

        $("#signUpContent").show(600)
                           .animate({opacity:1},900);
    });

    $("#logIn").click(function(){
        $("#sliderContent").animate({opacity:0},400)
                           .hide(400);

        $("#signUpContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent") .show(600)
                           .animate({opacity:1},900);
    });

    $("#home").click(function(){
        $("#signUpContent").animate({opacity:0},400)
                           .hide(400);

        $("#logInContent") .animate({opacity:0},400)
                           .hide(400);

        $("#sliderContent").show(600)
                           .animate({opacity:1},900);
    });

});

$(function(){
  $('#signinButton').click(function(){
    var user=$('#user').val();
    var pass=$('#pass').val();
    console.log("This notifies you if the password is working");
    $.ajax({
      url:'xhr/login.php',
      type:'post',
      dataType:'json',
      data:{  
                   username:user,
                   password:pass  
      },
    success:function(response){
      console.log("Test User");
      if (response.error){
          alert(response.error);
      }else{
           window.location.assign('admin.html')
      };  
                  } 
    });
        });

$('#logOut').click(function(e){
  e.preventDefault;
  $.get('xhr/logout.php', function(){
  window.location.assign('index.html')
  })
       });
});
