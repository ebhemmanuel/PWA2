/**
 * Created with JetBrains WebStorm.
 * User: Emmanuel Barreto
 * Date: 4/7/14
 * Time: 5:45 PM
 * To change this template use File | Settings | File Templates.
 */

 //Animations
$(function(){

          $("#logInContent") .show();
          $("#signUpContent").show();
          $("#buttonCTA").click(function(){
              $("#sliderContent").animate({opacity:0},400)
                                         .hide(400);
              $("#logInContent") .animate({opacity:0},400)
                                         .hide(400);
              $("#signUpContent").show(600)
                                           .animate({opacity:1},900);  });
          $("#signUp").click(function(){
              $("#sliderContent").animate({opacity:0},400)
                                         .hide(400);
              $("#logInContent") .animate({opacity:0},400)
                                         .hide(400);
              $("#signUpContent").show(600)
                                 .animate({opacity:1},900);  });
          $("#logIn").click(function(){
              $("#sliderContent").animate({opacity:0},400)
                                         .hide(400);
              $("#signUpContent").animate({opacity:0},400)
                                         .hide(400);
              $("#logInContent") .show(600)
                                         .animate({opacity:1},900);  });
          $("#home").click(function(){
              $("#signUpContent").animate({opacity:0},400)
                                         .hide(400);
              $("#logInContent") .animate({opacity:0},400)
                                         .hide(400);
              $("#sliderContent").show(600)
                                         .animate({opacity:1},900);  });
});//end of animations


$(function(){  

               //Sign in function
              $('#signinButton').click(function(){
                var user=$('#user').val();
                var pass=$('#pass').val();
                console.log("This notifies you if the password is working");
                $.ajax({
                  url:'xhr/login.php',
                  type:'post',
                  dataType:'json',
                  data:{  username:user, password:pass  },//end data
                success:function(response){
                  console.log("Test User");
                  if (response.error){ alert(response.error); }
                  else                    { window.location.assign('admin.html'); };  
                        }//end success 
                     });//end ajax
                    });//end signinButton function

                //Go to projects Page
                $('.projectsbtn').on('click', function(e){
                      e.preventDefault();
                      window.location.assign('projects.html');
                     });// end projectsbtn function

                //Go to ad projects page
               $('.addbtn').on('click', function(e){
                          e.preventDefault();
                          window.location.assign('add.html');
                     });//end addbtn function

              //New Project
              $('#addButton').on('click', function(e){
                e.preventDefault();
                var projName = $('#projectName').val(),
                projDesc= $('#projectDescription').val(),
                projDue= $('#projectDueDate').val(),
                status= $('#projectStatus').val();

                $.ajax({
                  url: "xhr/new_project.php",
                  type: "post",
                  dataType: "json",
                  data: { projectName: projName,
                            projectDescription: projDesc,
                            dueDate: projDue,
                            status: status
                         },//end ajax

                success: function(response) { 
                    console.log('Testing for success');
                    if(response.error) { alert(response.error);                          }
                    else                    { window.location.assign("projects.html");}
                    }//end success
                 });//end ajax
               });//end addButton function

              //Get Project
              var projects = function(){
              $.ajax({
                    url: 'xhr/get_projects.php',
                    type:'get',
                    dataType: 'json',   

              success: function (response){
                if(response.error){ console.log(response.error);          }
                else                   { 
                      for(var i=0, j=response.projects.length; i < j; i++){
                      var result = response.projects[i];
                      $(".projects").append(
                        '<div style="border:1px solid black">'+
                        "Project ID: "+ result.id + "<br>" +
                        "Project Name: "+ result.projectName + "<br>" +
                        "<button class='deletebtn'>delete</button>"
                        //+'<button class="editbtn">Edit</button>'
                        +"</div> <br>"
                        );//end append
                      };//end loop
                     }//end else
                   }//end success
                 })//end ajax

            //delete Button
            $('.deletebtn').on('click', function(e){
               console.log('test delete');
               $.ajax({
                  url: 'xhr/delete_project.php',
                  data: { projectID: result.id  },
                  type: 'POST',
                  dataType: 'json',

                success: function(response){
                    console.log('Testing for success');
                    if (response.error){ alert(response.error );                          }
                    else                    { window.location.assign("projects.html"); };                    /*console.log(result.id);*/
                   }//end success
                 })//end ajax
                })//end onclick function
               }//end projects function

              //Register
              $('#register').on('click', function(){
                  var username= $('#userName').val(),
                        password= $('#password').val(),
                              email= $('#email').val();
                        // console.log(username+' '+password+' '+email);

                        $.ajax({
                          url:'xhr/register.php',
                          type:'post',
                          dataType: 'json',
                          data: {
                              // firstname: firstname,
                              // lastname: lastname,
                              username: username,
                              email: email,
                              password: password
                              },//end data

                        success: function(response){
                          if(response.error){ alert(response.error);   }
                          else{window.location.assign('admin.html')}
                               }//end success
                            });//end ajax
                           });//end register function

                //Log out function
                $('#logOut').click(function(e){ e.preventDefault; 
                $.get('xhr/logout.php', function(){ window.location.assign('index.html') 
                         })//end get function
                       });//end logOut function

      }); //end self-executing function #2