$(function() {	
	var tooltips = $('.tooltip:not(.fest)');
	var masks = $('.mask');
	var current = $();
	tooltips.mouseenter(function() {
		if (current.get(0) != $(this).get(0)) {
			masks.stop().css('z-index', 10).width(90).height(88);
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 1000, function () {

			});
			current = $(this);
		}
	});
	tooltips.click(function () {
		masks.css('z-index', 10).width(90).height(88);
		if (current.get(0) != $(this).get(0)) {
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 1000, function () {

			});
			current=$(this);
		} else 
			current=$();
	});
});