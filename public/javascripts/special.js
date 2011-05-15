$(function() {	
		alert('t');
	var links = $('.event');
	links.unbind('click');
	links.bind('click', function(event) {
		var element = $(this);
		//history.pushState(state, "Afrophon", $(this).attr('href'));
		$.get("ajax"+element.attr('href'), function(data){ 
			element.css({'z-index':15, position:'absolute'});
			element.animate({width: 969, height: 969, left:0; top:0}, 1000);
			//$('.dyncontent').html(data);
		});
		return false;
	});
});