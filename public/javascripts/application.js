document.ready = function() {
	var pageheights = {'/' : 910, '/ueber-uns.html' : 1100,  '/events.html' : 1100};
	
	var state = {};
	bindevents = function () {
		window.scrollTo(0, 0);
		$('#box').height(pageheights[document.location.pathname]);
		$('a').click(function() {
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
		$.get("ajax"+document.location.pathname, function(data){ 
			$('.dyncontent').html(data);
			bindevents();
		});
	});
};