$(function(){

	$('.royalslider').royalSlider({
		arrowsNav: true,
		controlNavigation: 'bullets',
		keyboardNavEnabled: true,
		controlsInside: false,
		navigateByClick: false,
		imageScaleMode: 'fill',
		autoHeight: false,
		autoScaleSlider: false, 
		imageAlignCenter: true,
		transitionType:'move',
		slidesSpacing: 0,
		loopRewind: true,
		randomizeSlides: true,
		autoPlay: {
			enabled: true,
			pauseOnHover: true
		}
	}); 

	$('.backtotop').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 500);
		return false;
	});

});