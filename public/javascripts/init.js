$(function(){
	// Init royal slider
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

	// Temporary, needs to change
	$('figure.header').each(function(){
		var src = $(this).data('src');
		$(this).css({
			backgroundImage: 'url('+src+')'
		});
	});
	// End temporary

	// Misc class
	$('body').misc();

	// Init Google Maps
	$('.maps').maps({
		zoom: 9,
		addresses: ["Oranjelaan 7, Rozenburg","Musschenbroekstraat 42, 's-Hertogenbosch","Hatertseweg 32, Nijmegen"],
		title: 'Shoot my Ride',
		markerImage: {
			url: '/images/marker.png',
			width: 31,
			height: 48
		}
	});
});