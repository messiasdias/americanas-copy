
function header_login() {
	var before_right = 1;
	var right = 10;
	var top =  ($('.user-icon').height()/2 + 60)+$('.user-icon').offset().top;
	
	if( $(document).width() > 1024 ) {
		right = ($('.header-login').width()/2)+($('.user-icon').width()/2);
	}else{
		before_right = $('.user-icon').offset().left - ($('.user-icon').width()) ;
	}

	$('.header-login').css({"top":top+"px","right":right+"px"});
	$('.header-login:before').css('right', before_right+"px" );
}

function header_fixed() {
	
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
  		if(!$(".childs1").is(":visible")){
  			$(".menu1").slideUp(100);
  		}
  	}
}

function header_initial() {
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
  		if(!$(".childs1").is(":visible")){
  			$(".menu1").slideDown(200);
  		}
  	}
}

function header_animate() {

	if( $(window).scrollTop() >= 60){
		header_fixed();
  	}else{
  		header_initial();
  	}
}

function header_resize() {
	header_login();

	if( $(".childs1").is(":visible") ) {
		header_main();
	}
}

function header_scroll() {
	if(!$(".childs1").is(":visible")){
		header_animate();
	}
}

function header_main(){
	header_login();

	if($("#search2").html().trim() == ''){
	 $("#search2").append($(".header>div#content>div#b>div.col.l8").html());
	}

	console.log($(".menu1>ul>li.childs1"));

	if($("#search2").html().trim() == ''){
	 $("#search2").append($(".header>div#content>div#b>div.col.l8").html());
	}

	$(".childs1").css({"top":"initial"});

	if ( $(document).width() > 990 ) {
		var childs_top = $(".banner").height() + $(".header").height()+8;
		$(".childs1").css(
			{"top":childs_top+"px",
			 "min-width":  $(".departments").width()+"px"	
		});
	}else{
		$(".childs1").css({"top":"0px"})
	}

	if ($(".childs1").is(":visible")) {
		destac_content_up('.childs1');
	}
}	