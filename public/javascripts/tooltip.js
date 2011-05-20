$(function() {	
	var tooltips = $('.tooltip:not(.fest)');
	var masks = $('.mask');
	var current = $();
	tooltips.bind('mouseenter', function() {
		if (current.get(0) != $(this).get(0)) {
			$(this).parent().parent().children('.mask').stop().css('z-index', 10).width(90).height(88);
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 800, function () {

			});
			current = $(this);
		}
	});
	tooltips.click(function () {
		$(this).parent().parent().children('.mask').stop().css('z-index', 10).width(90).height(88);
		if (current.get(0) != $(this).get(0)) {
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 800, function () {

			});
			current=$(this);
		} else 
			current=$();
	});
});