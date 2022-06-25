// Fixed Header Top

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 200) {
	jQuery('#fixed-header').addClass('fixed-visible');
	} 
	else 
	{
	jQuery('#fixed-header').removeClass('fixed-visible');
  }
});

