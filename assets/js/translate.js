
function set_language(lang){
	localStorage.setItem("lang", lang);
}



function get_language(){
	var lang = '';

	if (localStorage.getItem("lang")){
		lang = localStorage.getItem("lang");
	}else{
		lang = 'en';
		set_language(lang);
	}

	return lang;
}



function load_language(lang=null){
 		
 	if(!lang){
 		lang = get_language();
 	}	
 	language_disc = ajax('/assets/lang/'+lang+'.json');	

	 if ( translate_verify <= $.now() ) {

		$('.translate').each(function(){
			$(this).html(language_disc[$(this).attr('lang-id')] );
		});
		now = new Date;
		$('#year').html(now.getFullYear());
		$("input#name").attr('placeholder' ,language_disc['form'].name);
		$("input#email").attr('placeholder' ,language_disc['form'].email);
		$("textarea#msg").attr('placeholder' ,language_disc['form'].msg);
		$("button>b#send").html(" "+language_disc['form'].send);

		translate_verify = ($.now()+5000);

		$("div.language-selector>span").each(function(){
	  		if($(this).hasClass('active')){
	  			$(this).removeClass('active')	
	  		}
  		});

		$("div.language-selector>span#"+lang).addClass('active');
		set_language(lang);
		typed_load();

	}else{
		console.log('Wait... 5s');
	}

}

