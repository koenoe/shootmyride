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

	$('figure.header').each(function(){
		var src = $(this).data('src');
		$(this).css({
			backgroundImage: 'url('+src+')'
		});
	});

	$('.backtotop').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 500);
		return false;
	});

	var offset = $('.content-wrapper').offset();
	$('.scrolldown').click(function(){
		$('html,body').animate({ scrollTop: offset.top }, 500);
		return false;
	});

});