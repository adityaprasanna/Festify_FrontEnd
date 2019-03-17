(function ($) {
	"use strict";

/* Animated Loader */
$(window).load(function() {
	$('#status').fadeOut(); 
	$('#preloader').delay(350).fadeOut('slow'); 
	$('body').delay(350).css({'overflow':'visible'});
	
	/* jQuery masonry */
	
	var $container = $('#fullwidth_blog');
	// initialize
	$container.masonry({
	  itemSelector: '.item'
	});		
	

})


/* Others jQuery */
jQuery(document).ready(function(){
	/* Social Links Toggle */
	$("a.social_trigger").click(function () {
		$("ul.social_profiles").slideToggle("slow");
		return false;
	});		

	
	/* jQuery Scroll to UP */
	$('#ScrollToUp').on("click",function(){
	$('html,body').animate({ scrollTop: 0 }, 'slow', function () {});
	}); 

	$(".post").each(function() {
		var thiseliment = $(this);
		$(this).find('.featured').appendTo($(this).find('.append-feature-media'));
		console.log('foo');
	});

	$(".post").fitVids();
	$("[rel='tooltip']").tooltip();	
	

				if (!!jQuery('.sidebar').offset()) {
					var stickyTop = jQuery('.sidebar').offset().top;
					jQuery(window).scroll(function() {
					var windowTop = jQuery(window).scrollTop();
					if (stickyTop < windowTop){
						$('.sticky').addClass('sticky_sidebar').removeClass('normal_sidebar');
					}
					else {
						$('.sticky').addClass('normal_sidebar').removeClass('sticky_sidebar');
					}
				});
				}	
	
});	


}(jQuery));	




