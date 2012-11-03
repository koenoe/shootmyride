$(function(){
	$('.cycle').cycle({
		slides: '> figure',
		fx: 'scrollHorz',
		timeout: 5000,
		speed: 300,
		prev: '.slider-prev',
		next: '.slider-next',
		pager: '.slider-pager',
		pagerTemplate: '<span></span>',
		pagerActiveClass: 'active',
		swipe: true
	});

	$('.back-to-top').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 300);
		return false;
	});
});