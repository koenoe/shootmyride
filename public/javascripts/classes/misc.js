;(function($, window, document, undefined){
	
	var pluginName = 'misc',
		defaults = {

		};

	// Constructor
	function Misc(element, options){
		this.$element = $(element);
		this.element = element;

		this.options = $.extend({}, defaults, options);
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}

	Misc.prototype = {
		init: function(){
			this.setEvents();
		},
		setEvents: function(){
			$('.scrollTo').on('click', this.scrollTo);
		},
		scrollTo: function(e){
			var $el = $(e.target);
			if($el.data('scrolltoelement')){
				var offset = $($el.data('scrolltoelement')).offset();
			}
			$('html,body').animate({ scrollTop: (offset ? offset.top : 0) }, 500);
			return false;
		}
	};

	// A really lightweight plugin wrapper around the constructor, preventing against multiple instantiations
	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
				new Misc(this, options));
			}
		});
	}

})(jQuery,window,document);