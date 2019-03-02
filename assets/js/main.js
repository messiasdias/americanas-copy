/* Main.js  script */

function ajax(url, method = 'GET', datatype = 'json', data=null, asyncv=false){
	var result;

	$.ajax({
	  method: method,
	  dataType: datatype,
	  url: url,
	  async: asyncv,
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

function toggle3(element){

	console.log(element);

	if ($(element).is(':visible')) {
		console.log("visivel");
		$(element).removeClass('toggle3');
		$(element).slideToggle();
	}else{
		console.log("Não visivel");
		$(element).addClass('toggle3');
		$(element).slideToggle();
		//$(element).slideDown(200);
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
}

function rotate_start(element){
	//$(element).css("tranform", "rotate(0)");
	$(element).removeClass("rotate");
}

 //On Load full execute the main funtion
function main(){
	header_main();
	load_slider("slider1");
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
 	header_doc_click(event);
  });

 /* Jquery Document onkeydown*/
 $(document).keydown(function(event){
 	//code
  });



/*
$( ".departments" ).hover(function() {
	if (!$(".childs1").is(":visible")) {
		$(".childs1").slideDown(200);
		rotate(".childs1>li.top>svg.fa-chevron-down", 120);
		rotate(".menu1>ul>li.departments>svg.fa-chevron-down", 120);
		destac_content_up('.childs1');
	}
}, 
null);


$( ".childs1" ).hover(null,function() {
	if ($(".childs1").is(":visible") & ( $(document).width() > 990 ) ) {
		$(".childs1").slideUp(200);
		destac_content_down('.childs1');
		rotate_start(".childs1>li.top>svg.fa-chevron-down");
		rotate_start(".menu1>ul>li.departments>svg.fa-chevron-down");
	}
});  */




 //On Load full execute the main funtion
 main();

});


