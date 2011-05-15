$(function() {
	var handle = $('#handle');
	var left = handle.offset().left;
	var wdth = handle.width()/2;
	var lines = $('.line');
	var barwidth = 969;
	var partial =  -1 * (lines.width() - barwidth) / (barwidth - wdth * 2);
	
	lines.css('left', 0);
	
	scrolldabar = function (e) {
		var offset = e.pageX - left;
		if (offset >= barwidth-wdth) {
			handle.css('left', barwidth-wdth);
			lines.css('left', (barwidth-wdth) * partial);
		} else if (offset <= wdth) {
			handle.css('left', wdth);
			lines.css('left', 0);
		} else {
			handle.css('left', offset);
			lines.css('left', offset * partial);
		}
	};
	
	handle.bind('mousedown', function() {
		$(window).bind('mousemove', scrolldabar);
	});
	
	$('#scrollbar').bind('click', scrolldabar);
	
	$(window).bind('mouseup', function() {
		$(window).unbind('mousemove');
	});
});