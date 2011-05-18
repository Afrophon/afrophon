document.ready = function() {
	var pageheights = {'/' : 910, '/ueber-uns.html' : 1010,  '/events.html' : 1100,  '/unterstuetzer.html' : 850,  '/kontakt.html' : 1000,  '/impressum.html' : 1000,  '/libellaswing.html' : 1100,  '/datenschutz.html' : 1250,  '/newsletter.html' : 1000,  '/findusmc.html' : 1100,  '/meissentanzt.html' : 1100,  '/sponsoren.html' : 1000, '/indierocknight.html' : 1100, '/investorrelations.html' : 1050, '/bands.html' : 1100, '/anteilseigner.html' : 1100};
	var events = ['/findusmc.html','/libellaswing.html','/indierocknight.html','/meissentanzt.html'];

	var state = {};
	bindevents = function () {
		window.scrollTo(0, 0);
		$('#box').height(pageheights[document.location.pathname]);
		$('a').not('.evlink').click(function() {
			history.pushState(state, "Afrophon", $(this).attr('href'));
			$.get("ajax"+$(this).attr('href'), function(data){ 
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
		$.get(path, function(data){ 
			$('.dyncontent').html(data);
			bindevents();
		});
	});
};