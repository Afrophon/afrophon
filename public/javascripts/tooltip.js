$(function() {	
	var tooltips = $('.tooltip:not(.fest)');
	var masks = $('.mask');
	var current = $();
	tooltips.bind('mouseenter', function() {
		if (jQuery.inArray($(this).get(0),current.get()) == -1) {
			$(this).parent().parent().children('.mask').stop().css('z-index', 10).width(90).height(88);
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 800, function () {

			});
			current = current.not($(this).parent().parent().children().children()).add(this);
		}
	});
	tooltips.click(function () {
		$(this).parent().parent().children('.mask').stop().css('z-index', 10).width(90).height(88);
		if (jQuery.inArray($(this).get(0),current.get()) == -1) {
			$(this).parent().css('z-index', 15).animate({width: $(this).parent().attr('endwidth'), height: $(this).parent().attr('endheight')}, 800, function () {

			});
			current = current.add(this);
		} else 
			current = current.not(this);
	});
});