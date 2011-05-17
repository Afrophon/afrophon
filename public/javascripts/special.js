$(function() {	
	var state = {};
	
	var links = $('.event,.evlink');
	links.unbind('click');
	
	links.click(function(event) {
		if ($.browser.msie)
			document.location.href=$(this).attr('href');
		else {
			var element = $(this);
			$('.dyncontent').append('<div id="ovf"></div>');
			var ovf = $('#ovf');
			ovf.offset(element.offset()).width(285).height(285);
			$.get("ajax/event/nil"+element.attr('href'), function(data){ 
				history.pushState(state, "Afrophon", element.attr('href'));
				ovf.html(data).children().css({'z-index':15, display: 'block', left:0, top:0});
				ovf.animate({width: 969, height: 669, left:118, top:402}, 1000, function () {
					$('#events').remove();
				});
			});
		}
	});
});