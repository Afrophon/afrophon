document.ready = function() {
	var state = {};
	$('a').click(function() {
		history.pushState(state, "Afrophon", $(this).attr('href'));
	    return false;
	});
	$(window).bind('popstate', function(event) {
 		alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
	});
};