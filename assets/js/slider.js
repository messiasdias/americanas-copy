
function load_slider(name){

	var slide = ajax("/assets/json/"+name+".json") ;
	$("."+name+">div#content>img").attr("src", slide[0].src);

	for (var i = 0; i < slide.length ; i++) {
		var classe = "";
		if (i == 0 ){classe = "active";}
		$(".slider1>div#slicks>ul").append('<li><button slide="'+slide[i].id+'" class="'+classe+'" ></button> </li>');
	}

	run_slider(name);
}


function prev_slider(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var prev =  parseInt($(".slider1>div#slicks>ul>li>button.active").attr("slide") ) - parseInt(1);
	
	if ( prev < 1 ){
		prev = total;
	}

	set_slider(name, prev);
}


function next_slider(name){
	var total = ajax("/assets/json/"+name+".json").length;
	var next = parseInt($(".slider1>div#slicks>ul>li>button.active").attr("slide") ) + parseInt(1);

	if ( next > total ){
		next = parseInt(1);
	}
	set_slider(name, next);
}


function set_slider(name,item){
	var slide = ajax("/assets/json/"+name+".json");
	$(".slider1>div#slicks>ul>li>button.active").removeClass('active');
 	$('.slider1>div#slicks>ul>li>button[slide="'+item+'"]').addClass('active') ;
 	$("."+name+">div#content>img").hide();
 	$("."+name+">div#content>img").attr("src", slide[item-1].src);
 	$("."+name+">div#content>img").show();
}	


function run_slider(name){
  setInterval(function(){
   	next_slider(name);
    }, 5000);
}