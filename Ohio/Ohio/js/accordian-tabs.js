$(document).ready(function() {
    $('#contact-tab-1').click(function() {
        $(this).addClass('active');
		$('#contact-tab-1').removeClass('moved');
		$('#contact-tab-2').removeClass('moved');
		$('#contact-tab-3').removeClass('moved');
		$('#contact-tab-2').removeClass('active');
		$('#contact-tab-3').removeClass('active');
    });
	
	$('#contact-tab-2').click(function() {
        $(this).addClass('active');
		$('#contact-tab-1').addClass('moved');
		$('#contact-tab-2').removeClass('moved');
		$('#contact-tab-1').removeClass('active');
		$('#contact-tab-3').removeClass('active');
    });
	
	$('#contact-tab-3').click(function() {
        $(this).addClass('active');
		$('#contact-tab-1').addClass('moved');
		$('#contact-tab-2').addClass('moved');
		$('#contact-tab-1').removeClass('active');
		$('#contact-tab-2').removeClass('active');
    });
});