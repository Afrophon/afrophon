document.ready = function() {
	if (history.replaceState) {
		var pageheights = {'/' : 810, '/ueber-uns.html' : 1010,  '/events.html' : 1100,  '/unterstuetzer.html' : 810,  '/kontakt.html' : 900,  '/impressum.html' : 850,  '/libellaswing.html' : 1100,  '/datenschutz.html' : 1250,  '/newsletter.html' : 1000,  '/findusmc.html' : 1100,  '/meissentanzt.html' : 1100,  '/sponsoren.html' : 1000, '/indierocknight.html' : 1100, '/investorrelations.html' : 1050, '/bands.html' : 850, '/anteilseigner.html' : 1020, '/presse.html' : 1100, '/entstehung.html' : 930};

		var state = {};
		bindevents = function () {
			$('#box').height(pageheights[document.location.pathname]);
			$('a').click(function() {
				history.pushState(state, "Afrophon", $(this).attr('href'));
				
				_gaq.push(['_trackPageview', $(this).attr('href')]);
				
				document.title = "Loading...";
				
				ajaxget($(this).attr('href'));
				
		    	return false;
			});
		};
		bindevents();
		$(window).bind('popstate', function(event) {
			_gaq.push(['_trackPageview', document.location.pathname]);
			
			ajaxget(document.location.pathname);
		});
		ajaxget = function (url) {
			$.get("ajax"+url, function(xml){ 
				var text = $(xml).find('dyncontent').text();
				var navigation = $(xml).find('navigation').text();
				var title = $(xml).find('title').text();
				
				window.scrollTo(0, 0);
				
				document.title = title;
				
				$('#navigation,.banner,#ss_banner').remove();
				$('#box').prepend(navigation);
				
				$('.dyncontent').html(text);
				
				bindevents();
			}, 'xml');
		};
	}
};