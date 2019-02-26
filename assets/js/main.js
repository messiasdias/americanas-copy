/* Main.js  script */

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


function destac_content_up(element){
	$('.overlay').show();
	$(element).addClass('destac-content');
}

function destac_content_down(element){
   $('.overlay').hide();
   $(element).removeClass('destac-content');
}

function rotate(element, deg){
	//$(element).css("tranform", "rotate("+deg+"deg)");
	$(element).addClass("rotate");
	console.log($(element));
}

function rotate_start(element){
	//$(element).css("tranform", "rotate(0)");
	$(element).removeClass("rotate");
}

 //On Load full execute the main funtion
function main(){
	header_main();
}

/* Jquery document onready */
$(document).ready( function(){
 
 /* Jquery document onscroll */	
 $(window).scroll(function(){
  	header_scroll();
  });

 /* Jquery document resize */	
 $(window).resize(function(){
  	header_resize();
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
  	//console.log( $(this) );
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
	destac_content_up('.search-group');
});


$( ".departments" ).hover(function() {
	if (!$(".childs1").is(":visible")) {
		$(".childs1").slideDown(200);
		//destac_content_up('.departments');
		rotate(".childs1>li.top>svg.fa-chevron-down", 120);
		rotate(".menu1>ul>li.departments>svg.fa-chevron-down", 120);
		destac_content_up('.childs1');
	}
}, 
null);


$( ".childs1" ).hover(null,function() {
	if ($(".childs1").is(":visible")) {
		$(".childs1").slideUp(200);
		//destac_content_down('.departments');
		destac_content_down('.childs1');
		rotate_start(".childs1>li.top>svg.fa-chevron-down");
		rotate_start(".menu1>ul>li.departments>svg.fa-chevron-down");
	}
}); 



 //On Load full execute the main funtion
 main();

});


