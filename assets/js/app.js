/* App.js */

//Globals vars
var menu_btn_animate_verify = true;
var overlay_verify = false;

//var translate_verify = 0;
//var language_dic ;

//Import Script Function
function import_script(name, pathDefault = true){
	var url = '';
	if(pathDefault){
		url = '/assets/js/'+name;
	}else{
		url = name;
	}
	var script = document.createElement('script');
	script.src = url;
	document.head.appendChild(script); 
}

//Importting scripts Files
//import_script('jquery.min.js');
import_script('fontawesome.min.js');
import_script('materialize.min.js');
import_script('header.js');
import_script('slider.js');
import_script('main.js');


