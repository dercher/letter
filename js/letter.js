(function () {
 var timer = 1500, isOpen = false; 
 document.querySelector('.prove').onclick = function() {
 if(!isOpen) {
   isOpen = true;
   document.querySelector('.front').style.transform = 'perspective(900px) rotateY(-180deg)';
   document.querySelector('.back').style.transform = 'perspective(900px) rotateY(0deg)';
   elems = [
             ['.back__top', '.back__top__inner'], 
             ['.back__bottom', '.back__bottom__inner'], 
             ['.back__right', '.back__right__inner'], 
             ['.back__left', '.back__left__inner']
           ];
   setTimeout(function() {
   animateZ(elems, false, true, 4, 200, [0, 1], false, false);
  }, timer*0.6);
 }
}
//--------------------------------------------
function movePaper(elems) {
  var paper = document.querySelector('.paper');
  paper.style.display = 'block';
  paper.style.left = '-450%'
  paper.style.zIndex ='2';
  setTimeout(function() {
  	paper.style.transform = 'rotate(360deg)';
    paper.style.left = '0%';
    setTimeout(function() {
     animateZ(elems, true, false, 3, 0, [0, 3], true, false);
    }, timer*0.2666)
  }, 20)
}
//---------------------------------------
function animateZ(elems, close, paper, num, time, zIndex, paperOut, last) {
if(close) elems = elems.reverse();
  var count = 0, property = '';
  envelop = setInterval(function() {

   var  el = document.querySelector(elems[count][0]);
   var el2 = document.querySelector(elems[count][1]);
    if( count < (num/2) ) {
    	if(!close) 
			  property = 'perspective(900px) rotateX(180deg)';
		 else property = 'perspective(900px) rotateX(0deg)';
    } else {
    	if(!close) 
    	  property = 'perspective(900px) rotateY(180deg)'; 
     else property = 'perspective(900px) rotateY(0deg)';
    }
 	 el.style.transform = property;
 	el2.style.transform = property;

 	setTimeout(function() {
 		if(!close) {
 		   el.style.zIndex = zIndex[0];	
 	      el2.style.zIndex = zIndex[1];
 		} else {
 		  el2.style.zIndex = zIndex[0];	
 	       el.style.zIndex = zIndex[1];
 	      if(last) {
 	      	el.style.zIndex = '5';
 	      	document.querySelector('.paper').style.zIndex = '-1';
 	      }
 		}
 	}, time);

 	if( count >= (num-1)) {
 	 clearInterval(envelop);
 	 if(paper) movePaper(elems);
 	 if(paperOut) {
 	 	setTimeout(function() {
           document.querySelector('.paper').style.top = '-100px';

           var wrapper1 = document.querySelector('.formWrapper1');
           var wrapper2 = document.querySelector('.formWrapper2');
           wrapper1.style.display = 'block';
           wrapper2.style.display = 'block';
           setTimeout(function() {
            wrapper1.style.transform = 'scale(1)'; 
           	wrapper2.style.transform = 'scale(1)';
           }, timer*0.233)
          
 	 	}, timer*0.233)    
 	  }
 	}
    count++;
   }, timer*0.233);
}
//-----------------------
document.querySelector('.letter__button').onclick = function(event) {
    event.preventDefault();
   document.querySelector('.paper').style.top = '0';
   setTimeout(function() {
    animateZ([['.back__top', '.back__top__inner']], true, false, 1, timer*0.0665, [0, 1], false, true)
   }, 15)
   setTimeout(function() {
     document.querySelector('.front').style.transform = 'perspective(900px) rotateY(0deg)';
     document.querySelector('.back').style.transform = 'perspective(900px) rotateY(180deg)';
     setTimeout(function() {
        document.querySelector('.container').style.transform = 'scale(0)';
        document.querySelector('.submited').style.display = 'block';
        setTimeout(function() {
        document.querySelector('.submited').style.transform = 'scale(1) rotate(360deg)';
     }, timer)
    }, timer*0.834)
   }, timer*0.5)
}
//-----------------
document.querySelectorAll('.ok')[0].onclick = function() {removeSub()}
document.querySelectorAll('.ok')[1].onclick = function() {removeSub()}
function removeSub() {
	var el = document.querySelector('.submited');
	el.style.opacity = '0';
	setTimeout(function() {
    el.style.display = 'none';
	}, timer)
}
//--------------------------
})();

