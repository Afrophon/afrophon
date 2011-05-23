$(function() {
	var boxes = $('.newsbox.resize');
	var bc = boxes.children('h4');
	boxes.bind('click', function() {
		var box = $(this);
		if (!box.hasClass('active')) {
			box.addClass('active').stop().animate({ height: 224 }, 1000 ).find('h2').css({ top : -6} );
			box.children().stop().animate({ top: 6 }, 1000 );
			boxes.not(this).stop().animate({ height: 20 }, 1000 );
			boxes.not(this).children().stop().animate({ top: -6 }, 1000 , function() {
				boxes.not(box).removeClass('active');
			});
		}
	});
});