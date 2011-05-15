$(function() {	
	var state = {};
	
	var links = $('.event');
	links.unbind('click');
	
	links.click(function(event) {
		var element = $(this);
		$('.dyncontent').append('<div id="animation"></div>');
		var animation = $('#animation');
		animation.offset(element.offset()).width(285).height(285);
		$.get("ajax/event/nil"+element.attr('href'), function(data){ 
			history.pushState(state, "Afrophon", element.attr('href'));
			animation.css({'z-index':15, position:'absolute'}).html(data);
			animation.animate({width: 969, height: 669, left:118, top:260}, 1000);
		});
		return false;
	});
});