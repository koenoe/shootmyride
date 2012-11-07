var apiToken = 'sLv44JmNroYjmZvpzMTj';

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

	// TEST AJAX
	// $.ajaxSetup({
	// 	beforeSend: function(xhr) {
	// 		xhr.setRequestHeader('X-CSRF-Token',$('meta[name="csrf-token"]').attr('content'));
	// 	}
	// });

	// $.ajax({
	// 	url: '/locomotive/api/content_types/slider/entries.json?auth_token=' + apiToken,
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: function(response){
	// 		console.log(response);
	// 	}
	// });
	// END TEST AJAX

});