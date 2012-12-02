;(function($, window, document, undefined){
	
	var pluginName = 'maps',
		defaults = {
			zoom: 10,
			addresses: ['Nederland'],
			markerImage: null
		};

	// Constructor
	function Maps(element, options){
		this.$element = $(element);
		this.element = element;

		this.options = $.extend({}, defaults, options);
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}

	Maps.prototype = {
		init: function(){
			this.setMap();
			this.setStyles();
			this.setMarkers();
		},
		setMap: function(){
			// Init map
			this.mapOptions = {
				zoom: this.options.zoom,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				scrollwheel: false
			};
			this.map = new google.maps.Map(this.element, this.mapOptions);
		},
		setStyles: function(){
			// Set marker image
			if(this.options.markerImage){
				this.markerImage = new google.maps.MarkerImage(this.options.markerImage.url,
					new google.maps.Size(this.options.markerImage.width, this.options.markerImage.height),
					new google.maps.Point(0,0),
					new google.maps.Point(0, this.options.markerImage.height)
				);
			}
		},
		setMarkers: function(){
			$.each(this.options.addresses,function(index,address) { 
				var geocoder = new google.maps.Geocoder();
				geocoder.geocode( { address: address, region: 'nl'}, function(results, status) {
					if(status == google.maps.GeocoderStatus.OK) {
						var geo = results[0].geometry.location;
						
						if(index == 0){
							this.map.setCenter(geo);
						}

						var marker = new google.maps.Marker({
							map: this.map,
							position: geo,
							title: this.options.title,
							icon: (this.markerImage ? this.markerImage : null),
							shadow: (this.markerShadow ? this.markerShadow : null)
						});
					}
				}.bind(this));
			}.bind(this));
		}
	};

	// A really lightweight plugin wrapper around the constructor, preventing against multiple instantiations
	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, 
				new Maps(this, options));
			}
		});
	}

})(jQuery,window,document);