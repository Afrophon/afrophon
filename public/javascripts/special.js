$(function() {	
	var state = {};
	
	var links = $('.event,.evlink');
	links.unbind('click');
	
	links.click(function(event) {
		if ($.browser.msie)
			document.location.href=$(this).attr('href');
		else {
			var element = $(this);
			$('.dyncontent').append('<div id="ovf"><div id="animation"></div></div>');
			var animation = $('#animation');
			animation.offset(element.offset()).width(285).height(285).css('display', 'none');
			$.get("ajax/event/nil"+element.attr('href'), function(data){ 
				history.pushState(state, "Afrophon", element.attr('href'));
				animation.css({'z-index':15, display: 'block'}).html(data);
				animation.animate({width: 969, height: 669, left:0, top:0}, 1000, function () {
					$('#events').remove();
				});
			});
		}
	});
});