console.log("Hello World from main.js!");
$(document).ready(function() {

document.body.scrollTop = 2;
})

	
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
var yDelta=(/Firefox/i.test(navigator.userAgent))? "detail" : "deltaY";
var moving = false;
var delta = 0;
var up = false;
var down = false;
var pos = 1;
var slide = 1;
function addScrollJack() {
	// console.log('added');
	document.addEventListener(mousewheelevt, control);
}
addScrollJack();
function control(e) {
	e.stopPropagation();
	e.preventDefault();
	// console.log(moving);
	if (delta == -50 && !up) {
		delta = 0;
	} else if (delta == 50 && !down) {
		delta = 0;
	}
	// console.log(e);
	// console.log(e[yDelta]);
	// console.log(e.detail)
	if(e[yDelta] <= -1 && !up) {
		delta--
		// console.log(delta)
		// moving = true;

	} else if(e[yDelta] >=1 && !down) {
		delta++
		// console.log(delta);
		// moving = true;
	}//else if (delta >=1 && down) {
	// 	delta = 0
	// } else if(delta <= -1 && up) {
	// 	delta = 0
	// 	// moving = true;
	// }
	// console.log(e[yDelta]);
	// console.log(delta)
	if(delta>3 && !moving) {
		
		document.removeEventListener(mousewheelevt, control);
		moving = true;
		delta = 50;
		document.removeEventListener(mousewheelevt, control);
		setTimeout(function(){addScrollJack()},1500);
		moveDotsDown(moving);
		
		
		setTimeout(function() {
			moving = false;
		}, 1000)
		

		setTimeout(addScrollJack,1500);

	}else if(delta == -3 && !moving) {
		// console.log(moving);
		moving = true;
		delta = -50;
		document.removeEventListener(mousewheelevt, control);
		setTimeout(function(){addScrollJack()},1500);
		moveDotsUp(moving);
		
		
		setTimeout(function() {
			moving = false;
		}, 1000)
	}

}



function moveDotsUp(moving) {
	if(moving) {
	 // tween = TweenMax.to(".dot1", 1, {right:'110%'});
		if(pos === 1 || pos == 4) {
				if(pos == 1){
					document.querySelector('.start').classList.remove('active');
				 	document.querySelector('.y1890').classList.add('active');	
				} else {
					document.querySelector('.y1982').classList.remove('active');
					document.querySelector('.y2000').classList.add('active')
				}
				TweenMax.to(".dot1>.move", .5, { width: '30vw', ease:Linear.easeIn})
				TweenMax.to(".dot1", .8, {right:'110%', ease:Linear.easeIn})
				document.querySelector('.dot3').style.opacity = 0;
				document.querySelector('.dot3').style.right = 30+'%';
				TweenMax.to(".dot2", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
				TweenMax.to(".dot2>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8')	
		} if (pos == 2 || pos == 5) {
				// slide++
				if(pos == 2){
					document.querySelector('.y1890').classList.remove('active');
				 	document.querySelector('.y1930').classList.add('active');	
				} else {
					document.querySelector('.y2000').classList.remove('active');
					document.querySelector('.today').classList.add('active')
				}
				TweenMax.to(".dot2>.move", .5, { width: '30vw', ease:Linear.easeIn})
				TweenMax.to(".dot2", .8, {right:'110%', ease:Linear.easeIn})
				document.querySelector('.dot1').style.opacity = 0;
				document.querySelector('.dot1').style.right = 30+'%';
				TweenMax.to(".dot3", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
				TweenMax.to(".dot3>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8')			
		} if (pos == 3){
				// slide++
				document.querySelector('.y1930').classList.remove('active');
			 	document.querySelector('.y1982').classList.add('active');	
				TweenMax.to(".dot3>.move", .5, { width: '30vw', ease:Linear.easeIn})
				TweenMax.to(".dot3", .8, {right:'110%', ease:Linear.easeIn})
				document.querySelector('.dot2').style.opacity = 0;
				document.querySelector('.dot2').style.right = 30+'%';
				TweenMax.to(".dot1", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
				TweenMax.to(".dot1>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8')	
		}
		if(pos !== 6) {
			pos++
			console.log(pos)
		}
		
	}
	// console.log(pos);
}
// 	// console.log(pos);
// }
function moveDotsDown(moving) {
	if(moving) {
	 // tween = TweenMax.to(".dot1", 1, {right:'110%'});
		if(pos === 2 ) {
			// console.log(pos)
				document.querySelector('.y1890').classList.remove('active');
				document.querySelector('.start').classList.add('active');
				console.log('fired');
				TweenMax.to(".dot2", .3, {right:'30%', opacity:'0', ease:Linear.easeIn}, '.5')
				TweenMax.to(".dot1>.move", .8, {width:'100vw', ease:Linear.easeIn}, '.5')	
				TweenMax.to(".dot1", .8, {right:'30%', opacity:'1', ease:Linear.easeIn}, '.5');
		} else if ( pos == 3 || pos == 6 ) {
			// console.log(pos)
				if(pos == 3){
					document.querySelector('.y1930').classList.remove('active');
				 	document.querySelector('.y1890').classList.add('active');	
				} else {
					document.querySelector('.today').classList.remove('active');
					document.querySelector('.y2000').classList.add('active')
				}
				document.querySelector('.dot1').style.right = '150%';
				document.querySelector('.dot1>.move').style.width = '0vw';
				// document.querySelector('.dot3').style.right = '30%';
				TweenMax.to(".dot3", .3, {right:'30%',opacity:0, ease:Linear.easeIn})
				TweenMax.to(".dot2", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
				TweenMax.to(".dot2>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8');
				TweenMax.to(".dot1>.move", .5, { width: '30vw', ease:Linear.easeIn})
				TweenMax.to(".dot1", 1.2, {right:'110%',opacity:'1', ease:Linear.easeIn})		
		} else if ( pos == 4){
				// console.log(pos)
				document.querySelector('.y1982').classList.remove('active');
				document.querySelector('.y1930').classList.add('active');

				document.querySelector('.dot2').style.right = '150%';
				document.querySelector('.dot2>.move').style.width = '0vw';
				// document.querySelector('.dot3').style.right = '30%';
				TweenMax.to(".dot1", .3, {right:'30%',opacity:0, ease:Linear.easeIn})
				TweenMax.to(".dot3", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
				TweenMax.to(".dot3>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8');
				TweenMax.to(".dot2>.move", .5, { width: '30vw', ease:Linear.easeIn})
				TweenMax.to(".dot2", 1.2, {right:'110%',opacity:'1', ease:Linear.easeIn})
		} else if( pos == 5) {

			document.querySelector('.y2000').classList.remove('active');
			document.querySelector('.y1982').classList.add('active');

			document.querySelector('.dot3').style.right = '150%';
			document.querySelector('.dot3>.move').style.width = '0vw';
			// document.querySelector('.dot3').style.right = '30%';
			TweenMax.to(".dot2", .3, {right:'30%',opacity:0, ease:Linear.easeIn})
			TweenMax.to(".dot1", 1.1, {right:'74.7%', opacity:1, ease:Linear.easeIn}, '.7')
			TweenMax.to(".dot1>.move", .5, { width: '100vw', ease:Linear.easeIn}, '.8');
			TweenMax.to(".dot3>.move", .5, { width: '30vw', ease:Linear.easeIn})
			TweenMax.to(".dot3", 1.2, {right:'110%',opacity:'1', ease:Linear.easeIn})
		}
		if(pos !== 1) {
			pos--
			console.log(pos)
		}
		
	}
	// console.log(pos)
}
// function toggleClass(pos) {

// }
// function toggleClass(className) {

// }
// $(window).on('scroll', function () {
//    console.log('hiasd');
// });

// up -1 down is 1
// document.body.addEventListener("mousewheel", function(e){ e.preventDefault(); });













