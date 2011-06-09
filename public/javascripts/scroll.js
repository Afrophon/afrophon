$(function() {
	var handle = $('#handle');
	var left = handle.offset().left;
	var wdth = handle.width();
	var lines = $('.line');
	var barwidth = 964;
	var clkoffset = 0;
	var partial =  -1 * (lines.width() + 15 - barwidth) / (barwidth - wdth);
	
	lines.css('left', 0);
	
	$('#events').bind('selectstart', function () {
		return false;
	});
	
	$('#events').bind('mousewheel', function(event, delta) {
		return scrolltopos(parseInt(handle.css('left')) - delta * 64);
	});
	
	scrolldabar = function (e) {
		scrolltopos(e.pageX - left);
	};
	
	scrolltopos = function (offset) {
		if (offset >= barwidth-wdth+clkoffset) {
			handle.css('left', barwidth-wdth);
			lines.css('left', (barwidth-wdth) * partial);
			return;
		} else if (offset <= clkoffset) {
			handle.css('left', 0);
			lines.css('left', 0);
			return;
		} else {
			handle.css('left', offset - clkoffset);
			lines.css('left', (offset-clkoffset) * partial);
			return false;
		}
	};
	
	handle.bind('mousedown', function(e) {
		clkoffset = e.pageX - handle.offset().left;
		$(window).bind('mousemove', scrolldabar);
	});
	
	$('#scrollbar').bind('click', function (e) {
		clkoffset = wdth/2;
		scrolldabar(e);
	});
	
	$(window).bind('mouseup', function() {
		$(window).unbind('mousemove');
	});
});