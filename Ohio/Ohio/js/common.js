// Home Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 1800 && jQuery(window).scrollTop() < 6100) {
	jQuery('.switch').addClass('black-typo');
	} 
	else 
	{
	jQuery('.switch').removeClass('black-typo');
  }
});


// Demo 3 Page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 1300 ) {
	jQuery('.switch-filter').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-filter').addClass('black-typo');
  }
});



// Project Page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 5100 ) {
	jQuery('.switch-project').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-project').addClass('black-typo');
  }
});


// 404 Page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 400 ) {
	jQuery('.switch-error').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-error').addClass('black-typo');
  }
});



// Terms & Condition page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 2500 ) {
	jQuery('.switch-terms').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-terms').addClass('black-typo');
  }
});


// Contact Page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 1100 ) {
	jQuery('.switch-contact').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-contact').addClass('black-typo');
  }
});



// About Page Scroll Change Color

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 7500 ) {
	jQuery('.switch-about').removeClass('black-typo');
	} 
	else 
	{
	jQuery('.switch-about').addClass('black-typo');
  }
});




// Menu dropdown Show

$(document).ready(function() {
	$('.menu ul li').hover(
	function() {$(this).children("ul").addClass('active');},
	function() {$(this).children("ul").removeClass('active');}
	);
});




// Menu dropdown Tabs

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" current", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " current";
}




// Slide to Top link show
jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 450) {
	jQuery('#fixed-scroll').addClass('visible');
	} 
	else 
	{
	jQuery('#fixed-scroll').removeClass('visible');
  }
});



// Mouse Circles Move with Cursor

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');
		mouseInnerCircle = document.getElementById('inner-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
		delay2 = 3,
        revisedMousePosX = 0,
        revisedMousePosY = 0,
		revisedInnerMousePosX = 10,
        revisedInnerMousePosY = 10;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 
		
		revisedInnerMousePosX += (mousePosX - revisedInnerMousePosX) / delay2;
        revisedInnerMousePosY += (mousePosY - revisedInnerMousePosY) / delay2;

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
		mouseInnerCircle.style.top = revisedInnerMousePosY + 'px';
        mouseInnerCircle.style.left = revisedInnerMousePosX + 'px';
    }
    delayMouseFollow();
});



// Smooth Scroll

(function($) {
$(function() { //on DOM ready 
		$(".scroller").simplyScroll();
});
})(jQuery);




// Testimonial Owl Carousel

$("#owl-demo2").owlCarousel({
  itemsCustom: [
    [0, 1],
    /* Show half of next item */
    [450, 1],
    [600, 1],
    [700, 1],
    [800, 1],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
  ],

  lazyLoad: false,
  navigation: true,
  loop:true,
  
});
$( ".owl-prev").html('<img src="images/back-arrow.png">');
$( ".owl-next").html('<img src="images/forwad-arrow.png">');



// Testimonial Owl Carousel

$("#owl-demo3").owlCarousel({
  itemsCustom: [
    [0, 1],
    /* Show half of next item */
    [450, 1],
    [600, 1],
    [700, 1],
    [800, 1],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
  ],

  lazyLoad: false,
  navigation: true,
  loop:true,
  
});
$( ".owl-prev").html('<img src="images/back-arrow-2.png">');
$( ".owl-next").html('<img src="images/forwad-arrow-2.png">');



$("#owl-demo4").owlCarousel({
  itemsCustom: [
    [0, 1],
    /* Show half of next item */
    [450, 1],
    [600, 1],
    [700, 1],
    [800, 1],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
  ],

  lazyLoad: false,
  navigation: false,
  pagination: false,
  loop:true,
  
});



$("#owl-demo5").owlCarousel({
  itemsCustom: [
    [0, 1],
    /* Show half of next item */
    [450, 1],
    [600, 1],
    [700, 1],
    [800, 1],
    [1000, 1],
    [1200, 1],
    [1400, 1],
    [1600, 1]
  ],

  lazyLoad: false,
  navigation: true,
  pagination: true,
  loop:true,  
});
$("#owl-demo5 .owl-prev").html('<');
$("#owl-demo5 .owl-next").html('>');



// Counters

$('.counter').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {
      duration: 5000,
      easing: 'linear',
      step: function() {
        $this.text(commaSeparateNumber(Math.floor(this.countNum)));
      },
      complete: function() {
        $this.text(commaSeparateNumber(this.countNum));
        //alert('finished');
      }
    }
  );

});

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}




// Home Page Capability Accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




// Demo 3 Page Filter Content Hover Effect

$(document).ready(function() {
	$('.filterDiv').hover(
	function() {$(this).addClass('hover-visible'); $('.filter-content').addClass('hover-content');},
	function() {$(this).removeClass('hover-visible'); $('.filter-content').removeClass('hover-content');}
	);
});



// Team Hover Effect

$(document).ready(function() {
	$('.team-1').hover(
	function() {$('.team-text-1').addClass('team-active'); $('.team-text-2').removeClass('team-active'); $('.team-text-3').removeClass('team-active');},
	function() {$('.team-text-1').addClass('team-active'); $('.team-text-2').removeClass('team-active'); $('.team-text-3').removeClass('team-active');}
	);
	
	$('.team-2').hover(
	function() {$('.team-text-2').addClass('team-active'); $('.team-text-1').removeClass('team-active'); $('.team-text-3').removeClass('team-active');},
	function() {$('.team-text-1').addClass('team-active'); $('.team-text-2').removeClass('team-active'); $('.team-text-3').removeClass('team-active');}
	);
	
	$('.team-3').hover(
	function() {$('.team-text-3').addClass('team-active'); $('.team-text-1').removeClass('team-active'); $('.team-text-2').removeClass('team-active');},
	function() {$('.team-text-1').addClass('team-active'); $('.team-text-2').removeClass('team-active'); $('.team-text-3').removeClass('team-active');}
	);
});



//Menu left transition on mobile

$(document).ready(function() {
	$('.mobile-header .popup-menu').click(
		function(){
			$('.mob-menu-left').addClass('visible');
		}
	);
	$('.mob-menu-left .close').click(
		function(){
			$('.mob-menu-left').removeClass('visible');
			$('#subModal').removeClass('visible');
		}
	);
});


//Submenu mobile

$(document).ready(function() {
	$('.mobile-menu li').click(
		function(){
			if($('.mobile-top-bar').hasClass('visible')){
				$('.mobile-top-bar').removeClass('visible');
			}
			if($('.copyrightsMenu').hasClass('visible')){
				$('.copyrightsMenu').removeClass('visible');
			}
		}
	);
});

$(document).ready(function() {
	$('#subModal .close').click(
		function(){
			$('#subModal').removeClass('visible');
			$('.mobile-top-bar').addClass('visible');
			$('.copyrightsMenu').addClass('visible');
		}
	);
});

$(document).ready(function() {
	$('#elementToogle').click(
		function(){
			if($('#subModal').hasClass('visible')){
				$('.mobile-menu li').removeClass('sub-visible');
				$('.menu-sub-popup').removeClass('visible');
				$(this).addClass('sub-visible');
				$('#elementModal').addClass('visible');
			}
			else{
				$('.mobile-menu li').removeClass('sub-visible');
				$('.menu-sub-popup').removeClass('visible');
				$(this).addClass('sub-visible');
				$('#subModal').addClass('visible');
				$('#elementModal').addClass('visible');
			}
		}
	);
});

$(document).ready(function() {
	$('#portfolioToogle').click(
		function(){
			if($('#subModal').hasClass('visible')){
				$('.mobile-menu li').removeClass('sub-visible');
				$('.menu-sub-popup').removeClass('visible');
				$(this).addClass('sub-visible');
				$('#portfolioModal').addClass('visible');
			}
			else{
				$('.mobile-menu li').removeClass('sub-visible');
				$('.menu-sub-popup').removeClass('visible');
				$(this).addClass('sub-visible');
				$('#subModal').addClass('visible');
				$('#portfolioModal').addClass('visible');
			}
		}
	);
});

// Demo 3 page Filter Content

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
