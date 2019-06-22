(function( $ ) {

	"use strict";

	var customizer = {

		init: function () {

			function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i=0;i<vars.length;i++) {
					var pair = vars[i].split("=");
					if(pair[0] == variable){return pair[1];}
				}
				return(false);
			}

			var color = getQueryVariable('color');

			if( color ) {
				var css = $('<link>', {
					'id': 'color-css',
					'rel': 'stylesheet',
					'href': 'assets/css/colors/' + color + '.css'
				});
				$('head').append(css);
			}

		}

	};

	$(window).load(function(){

		customizer.init();

	});

})( jQuery );