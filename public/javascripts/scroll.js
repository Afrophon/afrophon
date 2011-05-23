$(function() {
	var handle = $('#handle');
	var left = handle.offset().left;
	var wdth = handle.width()/2;
	var lines = $('.line');
	var barwidth = 964;
	var partial =  -1 * (lines.width() - barwidth) / (barwidth - wdth * 2);
	
	lines.css('left', 0);
	
	$('#events').bind('selectstart', function () {
		return false;
	});
	
	$('#events').bind('mousewheel', function(event, delta) {
		scrolltopos(parseInt(handle.css('left')) - delta * 64);
		return false;
	});
	
	scrolldabar = function (e) {
		scrolltopos(e.pageX - left);
	};
	
	scrolltopos = function (offset) {
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
	
	handle.bind('mousedown', function(e) {
		$(window).bind('mousemove', scrolldabar);
	});
	
	$('#scrollbar').bind('click', scrolldabar);
	
	$(window).bind('mouseup', function() {
		$(window).unbind('mousemove');
	});
});