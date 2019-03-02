
function slider_resize(name){
	slider_diretions_center(name);
}

function slider_scroll(name){
	slider_diretions_center(name);
}


function slider_load(name){

	var slide = ajax("/assets/json/"+name+".json") ;
	$("."+name+">div#content>img").attr("src", slide[0].src);

	for (var i = 0; i < slide.length ; i++) {
		var classe = "";
		if (i == 0 ){classe = "active";}
		$(".slider1>div#slicks>ul").append('<li><button slide="'+slide[i].id+'" class="'+classe+'" ></button> </li>');
	}

	slider_run(name);
	slider_diretions_center(name);
}


function slider_diretions_center(name){
	var top = '35%';
	$("."+name+">span>#prev").css('top', top);
	$("."+name+">span>#next").css('top', top);
}

function slider_prev(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var prev =  parseInt($(".slider1>div#slicks>ul>li>button.active").attr("slide") ) - parseInt(1);
	
	if ( prev < 1 ){
		prev = total;
	}

	slider_set(name, prev);
}


function slider_next(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var next = parseInt($(".slider1>div#slicks>ul>li>button.active").attr("slide") ) + parseInt(1);

	if ( next > total ){
		next = parseInt(1);
	}
	slider_set(name, next);
}


function slider_set(name,item){
	var slide = ajax("/assets/json/"+name+".json");
	$(".slider1>div#slicks>ul>li>button.active").removeClass('active');
 	$('.slider1>div#slicks>ul>li>button[slide="'+item+'"]').addClass('active') ;
 	$("."+name+">div#content>img").hide();
 	$("."+name+">div#content>img").attr("src", slide[item-1].src);
 	$("."+name+">div#content>img").show();
}	


function slider_run(name){
  setInterval(function(){
   slider_next(name);
    }, 5000);
}