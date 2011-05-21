$(function() {	
	var state = {};
	
	var links = $('.event');
	links.unbind('click');
	
	links.click(function(event) {
		links.unbind('click');
		if (!history.replaceState)
			document.location.href=$(this).attr('href');
		else {
			var element = $(this);
			$('.dyncontent').append('<div id="ovf"></div>');
			var ovf = $('#ovf');
			$.get("ajax/event"+element.attr('href'), function(xml){ 
				var text = $(xml).find('dyncontent').text();
				var navigation = $(xml).find('navigation').text();
				history.pushState(state, "Afrophon", element.attr('href'));
				ovf.html().css({'z-index':15, display: 'block', left:118, top:402});
				var animation = $('#animation');
				animation.offset(element.offset()).width(285).height(285);
				animation.animate({width: 965, height: 669, left:0, top:0}, 1000, function () {
					$('#events').remove();
				});
			}, 'xml');
		}
	});
});