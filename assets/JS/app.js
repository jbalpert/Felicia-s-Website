// function textAnimate(){
// 	// Onload effect on floating slogan
// 	const floatText = document.querySelector(".floating");
// 	const strText = floatText.textContent;
// 	const splitText = strText.split("");
// 	floatText.textContent = "";
// 	for(let i=0; i < splitText.length; i++){
// 		floatText.innerHTML += "<span class=\"floatChar\">" + splitText[i] + "</span>";
// 	}

// 	let char = 0;
// 	let timer = setInterval(onTick, 50);

// 	function onTick(){
// 		const span = floatText.querySelectorAll('.floatChar')[char];
// 		span.classList.add('fade');
// 		char++;
// 		if(char === splitText.length){
// 			complete();
// 			return;
// 		}
// 	}

// 	function complete(){
// 		clearInterval(timer);
// 		timer = null;
// 	}
// }
let isNavSlide = false;

// Functioning Navbar with animation
const navSlide = ()=> {
	const sandwich = document.querySelector('.sandwich');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const navlinkclick = document.querySelectorAll('.nav-links li a')
	sandwichAnimation(sandwich, nav, navLinks, navlinkclick);
}

function sandwichAnimation(sandwich, nav, navLinks, navlinkclick){
	sandwich.addEventListener('click', function(){
		// document.body.classList.toggle('darken');
		nav.classList.toggle('nav-active');
		navLinks.forEach((link, index) =>{
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s`;
			}
		});
		sandwich.classList.toggle('toggle');
		if(isNavSlide){
			isNavSlide = false;
 		}
		else{
			isNavSlide = true;
		}
		if(isNavSlide){
			isNavSlide = navslideclose(sandwich, nav, isNavSlide, navlinkclick);
		}
		console.log(isNavSlide);
		return isNavSlide;
	});
}

function navslideclose(sandwich, nav, isNavSlide, navlinkclick){
	navlinkclick.forEach((link) =>{
		link.addEventListener('click', function(){
			sandwich.classList.toggle('toggle');
			nav.classList.toggle('nav-active');
			isNavSlide = false;
			return false;
		});
	});
	return true;
}
const app = ()=>{
	navSlide();
}

app();