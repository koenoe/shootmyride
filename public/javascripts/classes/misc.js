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
			// Set events
			this._setEvents();

			// Check if there is a hashbang in the url
			this.checkForHashBang();
		},
		scrollToTop: function(e){
			$('html,body').animate({ scrollTop: 0 }, 500);
			return false;
		},
		checkForHashBang: function(){
			var hash = this._stripHash(window.location.hash);
			this._doScroll(hash);
		},
		_setEvents: function(){
			$('.scrollToTop').on('click', this.scrollToTop.bind(this));
			$(window).on('hashchange', this.checkForHashBang.bind(this));
		},
		_doScroll: function(hash){
			var headerHeight = $('header').height();
			if(hash){
				var $scrollTo = $('#' + hash);
				if($scrollTo){
					var offset = $scrollTo.offset();
					if(offset){
						$('html,body').animate({ scrollTop: offset.top - headerHeight }, 500);
					}
				}
			}
		},
		_stripHash: function(str){
			return str.replace('#!/','');
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