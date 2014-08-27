$(document).ready(function(){

	var		addEntry   = $("#add-entry");
	var		addSection = $("#add-section");
	var 	moveDown 	 = $(".move-down");
	var		type       = $(".type-replace");
	var   signIn     = $("#sign-in");
	var   signUp     = $("#sign-up");
	var   logBoxIn   = $(".log-box-in");
	var   logBoxUp   = $(".log-box-up");
	var logContent   = $(".log-in-content");
	var logUp        = $(".log-up-content");
	var confirmAdd   = $(".confirm-add");
	var confirmAddOn = $(".confirm-add-on");
	var   save       = $("#addButton");
	var   sortIt     = $("#sortable");
	var del          = $('.delete');



	$(addSection).on("click", function(e){
		e.preventDefault();
		if((type).text() === "+"){
			addEntry.toggleClass("move-down");
			confirmAdd.toggleClass("confirm-add-on");
			save.animate({opacity:1}, 400);
			type.text("CANCEL");
		}
		else if((type).text() === "CANCEL"){
		addEntry.toggleClass("move-down");
		confirmAdd.toggleClass("confirm-add-on");
		save.animate({opacity:0}, 400);
		$("#add-entry").find(".reset").val("");
		type.text("+");
		}
	});

	signIn.on("click", function(e){
		e.preventDefault();
		logContent.css("display", "block");
		logBoxIn.toggleClass("log-box-open");
		logBoxUp.removeClass('log-box-open');
	});
	signUp.on("click", function(e){
		e.preventDefault();
		logUp.css("display", "block");
		logBoxUp.toggleClass("log-box-open");
		logBoxIn.removeClass('log-box-open');
	});



	var dashboard     = "dashboard.html"
	function logIn(page){
		var url  				= 'xhr/login.php';
		var user 				= $('#user').val();
		var pass 				= $('#pass').val();
		var dataType 		= 'json';
		var type  			= 'post';
		$.ajax({
			url:url,
			type:type,
			dataType:dataType,
			data:{
				username: user,
				password: pass
			},
			success:function(response){
				if(response.error){alert(response.error)			 }
				else							{window.location.assign(page)}
			}
		});
	};

	function register(page){
		var url  				= 'xhr/register.php';
		var user 				= $('#userR').val();
		var pass 				= $('#passR').val();
		var email				= $('#emailR').val();
		var dataType 		= 'json';
		var type  			= 'post';
		$.ajax({
			url:url,
			type:type,
			dataType:dataType,
			data:{
				username: user,
				password: pass,
				email: email,
			},
			success:function(response){
				if(response.error){alert(response.error)			 }
				else							{window.location.assign(page)}
			}
		});
	};

	$("#sign-in-button").click(function(){
		console.log("boom");
		logIn(dashboard);
	});

		$("#sign-up-button").click(function(){
		console.log("boom");
		register(dashboard);
	});
	var log =  $('#user, #pass');
	var sign = $('#userR, #passR');

// 	function enterFn(name, page){
// 		name.focus(function(){
// 			name.keyup(function(e){
// 				var code = e.which;
// 				e.preventDefault();
// 				if (code == 13){page};
// 			});
// 		});
// 	};
// enterFn(log, logIn(dashboard));
// enterFn(sign, register(dashboard));

log.focus(function(){
		log.keyup(function(e, page){
			var code = e.which;
			e.preventDefault();
			if (code == 13){logIn(dashboard)};
		});
	});

	sign.focus(function(){
		sign.keyup(function(e){
			var code = e.which;
			e.preventDefault();
			if (code == 13){register(dashboard)};
		});
	});

	$.getJSON('xhr/check_login.php', function(data){
		$.each(data,function(key, val){
			$('.userid').html(val.first_name);
		})
	});

	$('html').ready(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
		});
	var logOut = $('#logOut')
	logOut.click(function(e){
		var url = 'xhr/logout.php';
		e.preventDefault();
		$.get(url, function(){
			window.location.assign('index.html');
		})
	});

	$('#addButton').on('click', function(){
		var projName = $('#projectName').val(),
		 		projDesc = $('#projectDescription').val(),
		 	  projDue  = $('#projectDueDate').val();
				 status = $('input[name = "status"]:checked').prop('id');

				$.ajax({
					url     : 'xhr/new_project.php',
					type    : 'post',
					dataType: 'json',
					data    : {
							projectName: projName,
							projectDescription: projDesc,
							// dueDate: projDue
							status: status
					}, success: function(response) {
						console.log('Testing for success');
						if(response.error){
							alert(response.error)
						}else{
							window.location.assign('dashboard.html');
						}
					}
				})
	});



	function projects(){
		$.ajax({
	        url: 'xhr/get_projects.php',
	        type: 'get',
	        dataType: 'json',
	        success: function(response){
	            if(response.error){
	                console.log(response.error);
	            }else{

		            for(var i=0, j=response.projects.length; i < j; i++){
		                var result = response.projects[i];

		                $(".projects").append(
		                	'<div class="listing">' +
													//'<div id="sortable" class="ui-state-default">' +
				                	" <input class='projectid' type='hidden' value='" + result.id + "'>" +
				                	result.projectName + "<br>" +
													// " Project Due Date: " + result.dueDate + "<br>" +
				                	result.projectDescription + "<br>" +
													// " Project Status: " + result.status + "<br>"
													'<div class="buttonHold">'
												+ '<button class="delete">Delete</button>'
												+ '<button class="editbtn">Edit</button>'
									+ '</div> <br>'
		               	);
		               	var height = $(".projects").height()+i+300;
		               	// console.log(height);
		               	$(".history").css("height", height);
		            }; // End of for loop
		            	$('.delete').on('click', function(e){
										var pid = $(this).parent().find(".projectid").val();
								  		console.log('test delete');
									    $.ajax({
									        url: 'xhr/delete_project.php',
									        data: {
									            projectID: pid
									        },
									        type: 'POST',
									        dataType: 'json',
									        success: function(response){
									            // console.log('Testing for success');
														if(response.error) {
															alert(response.error);
														} else {
													// console.log(result.id);
													window.location.assign("dashboard.html");
												}; // end else
									     } //end success
									   }); //end ajax
									}); // End Delete

						}; // end else
					} // end success
			});  // end ajax
	};			// end projects
			projects();

	sortIt.sortable();
	sortIt.disableSelection();
	// (".datepicker").datepicker();
});


// $('.deletebtn').on('click', function(e){
// 					var pid = $(this).parent().find(".projectid").val();
// 			  		console.log('test delete');
// 				    $.ajax({
// 				        url: 'xhr/delete_project.php',
// 				        data: {
// 				            projectID: pid
// 				        },
// 				        type: 'POST',
// 				        dataType: 'json',
// 				        success: function(response){
// 				            console.log('Testing for success');

// 							if(response.error) {
// 								alert(response.error);
// 							} else {
// 								//console.log(result.id);
// 								window.location.assign("projects.html");
// 							};
// 				        }
// 				    });
// 				}); // End Delete







// $(".reset").click(function() {
//     $(this).closest('form').find("input[type=text], textarea").val("");
// 		});