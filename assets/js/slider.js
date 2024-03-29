
function slider_resize(name){
	slider_diretions_center(name);
}

function slider_scroll(name){
	slider_diretions_center(name);
}


function slider_load(name){
	slider_diretions_center(name);
	var slide = ajax("/assets/json/"+name+".json") ;
	$("."+name+">div#content>img").attr("src", slide[0].img);

	for (var i = 0; i < slide.length ; i++) {
		var classe = "";
		if (i == 0 ){classe = "active";}
		$(".slider>div#slicks>ul").append('<li><button slide="'+slide[i].id+'" class="'+classe+'" onclick="slider_set(\'slider\', '+parseInt(i+1)+' )" ></button> </li>');
	}

	slider_run(name);
}


function slider_diretions_center(name){

	//$("."+name+">span#previus").hide();
	//$("."+name+">span#next").hide();

	var top = ( ( ( $('.'+name+'>div#content>a>img').offset().top/2)) - ($("."+name+">span#previus").height() ) )+"px" 
	//$("."+name+">span#previus").css('top', top);
	//$("."+name+">span#next").css('top', top);

	$("."+name+">span#previus").show();
	$("."+name+">span#next").show();

}

function slider_prev(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var prev =  parseInt($(".slider>div#slicks>ul>li>button.active").attr("slide") ) - parseInt(1);
	
	if ( prev < 1 ){
		prev = total;
	}

	slider_set(name, prev);
}


function slider_next(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var next = parseInt($(".slider>div#slicks>ul>li>button.active").attr("slide") ) + parseInt(1);

	if ( next > total ){
		next = parseInt(1);
	}
	slider_set(name, next);
}


function slider_set(name,item){

	slider_diretions_center(name);
	var slide = ajax("/assets/json/"+name+".json");
	$(".slider>div#slicks>ul>li>button.active").removeClass('active');
 	$('.slider>div#slicks>ul>li>button[slide="'+item+'"]').addClass('active') ;
 	$("."+name+">div#content>a>img").hide();
 	$("."+name+">div#content>a").attr("href", slide[item-1].link);
 	$("."+name+">div#content>a>img").attr("src", slide[item-1].img);
 	$("."+name+">div#content>a>img").show();
}	


function slider_run(name){

	setInterval(function(){
		slider_diretions_center(name);
	}, 100);	

	setInterval(function(){
   	slider_next(name);
    }, 15000);
}