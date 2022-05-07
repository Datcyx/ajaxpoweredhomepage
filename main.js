function card(a){
	if(a ==1){
		let cardc = document.getElementById("card");
		cardc.style.display="block";
		
	}else{
			let cardc = document.getElementById("card");
		cardc.style.display="none";
		
		
	}
}
function hide() {
	let load = document.getElementById("loader");
	 load.style.opacity="0";
  	load.style.width="0%";
 
		
  
}
function starta(){
	let load = document.getElementById("loader");
	load.style.width="100%";
	load.style.transition="all";
	load.style.transitionDuration="3s";
	load.style.opacity="1";
	const timeout = setTimeout(hide, 3000);
	
}
function menu_m_show(a){
	if(a == 1){
	let menu = document.getElementById("menu_m");
	let menuchange = document.getElementById("men");
	let closebtn = document.getElementById("close");
	menuchange.style.display="none";
	menu.style.display ="block";
	closebtn.style.display ="block";
	menu.style.animationName ="menu_anim_open";
	menu.style.animationDuration="0.2s";
	menu.style.transtion="all";
	menu.style.transitionDuration="0.3s";
	menu.style.zIndex ="1";
	 
		
	}else{

		let menu = document.getElementById("menu_m");
			let menuchange = document.getElementById("men");
	let closebtn = document.getElementById("close");
			menu.style.animationName ="menu_anim_close";
	menu.style.animationDuration="1s";
	menu.style.transtion="all";
	menu.style.transitionDuration="1s";
		menu.style.display ="none";
		menuchange.style.display="block";
		closebtn.style.display ="none";

	}
	
}

function News(){
	starta();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ano").innerHTML = this.responseText;
	
    }
  };
  xhttp.open("GET", "function/news.html", true);
  xhttp.send();
}
function Contact(){
	starta();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ano").innerHTML = this.responseText;
	
    }
  };
  xhttp.open("GET", "function/contact.html", true);
  xhttp.send();
}

function Home(){
	starta();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ano").innerHTML = this.responseText;
	
    }
  };
  xhttp.open("GET", "function/home.html", true);
  xhttp.send();
}
