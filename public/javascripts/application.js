document.ready = function() {
	if (history.replacestate) {
		var pageheights = {'/' : 810, '/ueber-uns.html' : 1010,  '/events.html' : 1100,  '/unterstuetzer.html' : 810,  '/kontakt.html' : 900,  '/impressum.html' : 850,  '/libellaswing.html' : 1100,  '/datenschutz.html' : 1250,  '/newsletter.html' : 1000,  '/findusmc.html' : 1100,  '/meissentanzt.html' : 1100,  '/sponsoren.html' : 1000, '/indierocknight.html' : 1100, '/investorrelations.html' : 1050, '/bands.html' : 850, '/anteilseigner.html' : 1020, '/zeitungsartikel.html' : 1100, '/entstehung.html' : 2200};
		var events = ['/findusmc.html','/libellaswing.html','/indierocknight.html','/meissentanzt.html'];

		var state = {};
		bindevents = function () {
			window.scrollTo(0, 0);
			$('#box').height(pageheights[document.location.pathname]);
			$('a').click(function() {
				history.pushState(state, "Afrophon", $(this).attr('href'));
				_gaq.push(['_trackPageview', $(this).attr('href')]);
				var path = "ajax"+$(this).attr('href');
				if (jQuery.inArray(document.location.pathname, events) != -1)
					path = "ajax/event"+$(this).attr('href');
				$.get(path, function(data){ 
				$('.dyncontent').html(data);
				bindevents();
			});
		    return false;
			});
		};
		bindevents();
		$(window).bind('popstate', function(event) {
			var path = "ajax"+document.location.pathname;
			if (jQuery.inArray(document.location.pathname, events) != -1)
				path = "ajax/event"+document.location.pathname;
			_gaq.push(['_trackPageview', document.location.pathname]);
			$.get(path, function(data){ 
				$('.dyncontent').html(data);
				bindevents();
			});
		});
	}
};