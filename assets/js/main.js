/* Main.js */

function ajax(url, method = 'GET', dataType = 'json', data=null, async=false){
	var result;

	$.ajax({
	  method: method,
	  dataType: dataType,
	  url: url,
	  async: async,
	  data:data, 
	  success: function(data, status) {
	  		result = data;
	  		//console.log(data);
   	 },
   	 error: function(data, status) {
   	 	result = false;
 
   	 	if(status == "parsererror"){
   	 	  console.log("Ajax Error: "+status+",\nO que Pode ser um Erro interno no arquivo chamado pelo Ajax.\nEste Arquivo deve Retornar um Json, Html ou xml (default: json) no Final.");
   	 	}

   	 }

	});

	return result;
}


function toggle(element , target=null){
	if ($(element).is(':visible')) {

		$(element).hide('slow');


		 if(target != null){
		 	window.location.href = target;
		 }

	}else{
		
		$(element).show('slow');
		

		if(target != null){
		 	window.location.href = target;
		 }

		}
}


function toggle2(element , target=null){

	if ($(element).is(':visible')) {

		$(element).slideUp(200);

		 if(target != null){
		 	window.location.href = target;
		 }

	}else{

		$(element).slideDown(100);
		$('#menu-btn').hide();

	}

}

function toggle_modalframe(element , src = "/",  target=null){
	
	if ($(element).hasClass('modal-custom')) {	
		$('.modal-custom').each(function(){
			if($(this).is(':visible')){
				toggle2($(this).att('id'));
			}
		});
	} 

	if($(element).is(':visible')){
		toggle2(element);
		$(element+'>iframe').attr('src','');
	}else{

		if(target != null){
			src = src+target;
		}

		toggle2(element);
		$(element+'>iframe').attr('src',src);

	}
}

function header_login(){
	var before_right = 1;
	var right = 10;
	var top =  ($('.user-icon').height()/2 + 60)+$('.user-icon').offset().top;
	
	if( $(document).width() > 1024 ) {
		right = ($('.header-login').width()/2)+($('.user-icon').width()/2);
	}else{
		before_right = $('.user-icon').offset().left - ($('.user-icon').width()) ;
	}

	$('.header-login').css('top', top+"px" );
	$('.header-login').css('right', right+"px" );
	$('.header-login:before').css('right', before_right+"px" );

}

function destac_content_up(element){
	$('.overlay').show();
	$(element).addClass('destac-content');
}

function destac_content_down(element){
   $('.overlay').hide();
   $(element).removeClass('destac-content');
}

function header_animate(){

	if( $(window).scrollTop() >= 60){

  		$( ".header" ).css({
  			"position":"fixed",
  			"top": "0px",
  			"width":"100%" 
  		});

 		$(".menu1" ).css({
  			"position":"fixed",
  			"top": $( ".header" ).height()+"px"
  		});


  		if( $(window).scrollTop() >= 80){
  			$(".menu1").slideUp(100);
  		}

  	}else{

  		$( ".header" ).css({
  			"position":"initial",
  			"top": "initial",
  			"width":"initial" 
  		});

 		$(".menu1" ).css({
  			"position":"initial",
  			"top": "initial"
  		});

  		if( $(window).scrollTop() < 80){
  			$(".menu1").slideDown(200);
  		}
  	}
}	


 //On Load full execute the main funtion
function main(){
	header_login();
}


/* Jquery document onready */
$(document).ready( function(){
 
  /* Jquery document onscroll */	
  $(window).scroll(function(){
  	//header_login();
  	header_animate();
  });

  /* Jquery document resize */	
  $(window).resize(function(){
  	header_login();
  });

  /* Jquery Document Click*/
  $(document).click(function(event){

  	if( !$(event.target.parentNode).hasClass('destac-content') ){
  	 destac_content_down('.search-group');
    }

  	if ( event.target.classList[0] != 'user-icon' ) {
	  	if( $('.header-login').is(':visible') ){
	  		$('.header-login').hide();
	  	}
    }
  	  	
  });

  /* Jquery Document onkeydown*/

  $(document).keydown(function(event){
  	console.log( $(this) );
  });


 $( ".expand" ).hover(function() {
	   $($(this).attr('expand')).show();
	  },null);

 $( ".user-icon" ).hover(function() {
	   $($(this).attr('expand')).show();
	  },null);

$('.user-icon').click(function(){
  	$('.header-login').show();
  });

$('.search-group>input').focus(function(){
	console.log($('.search-group') );
	destac_content_up('.search-group');
});




  //On Load full execute the main funtion
  main();
  	

});


