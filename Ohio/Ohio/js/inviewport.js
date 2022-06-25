$(window).scroll(function(){
	 inViewport();
 });

$(window).resize(function(){
	 inViewport();
 });

function inViewport(){
	 $('.form-main').each(function(){
		 var divPos = $(this).offset().top,
             topOfWindow = $(window).scrollTop();
		 
		 if( divPos < topOfWindow+450 ){
			 $(this).addClass('form-visible');
		 }
	 });
 }