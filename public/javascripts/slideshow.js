$(function() {
	var cc = $('#ss_controls');
	var elements = 1;
	$('#ss_banner .slide').each(function (index, element) {
		elements++;
		cc.append('<div class="slide-control" onclick="ss_choose('+index+')"></div>');
		if (index != 0)
			$(element).css({'opacity': '0.0'});
	});
	$('#ss_controls :first').attr('id', 'slide-control-active');
	var interval = 0;
    clearInterval(interval);
    var counter = 0;
    var cs = $('#ss_banner').children();
    var ccc = cc.children();
    interval = setInterval(function () {
		counter++;
		
   		var nextid = (counter+1)%elements;
   		nextid = (nextid == 0 ) ? 1 : nextid;
   		
  	  	var activecontrol = ccc.eq((counter%elements)-1);
  	 	var nextcontrol = ccc.eq(nextid-1);
		activecontrol.attr('id', '');
   		nextcontrol.attr('id', 'slide-control-active');
   		
  	  	var active = cs.eq((counter%elements)-1);
  	 	var next = cs.eq(nextid-1);
		next.css({opacity: 0.0})
			.addClass('active')
        	.animate({opacity: 1.0}, 1000, function() {
        		active.css({opacity: 0.0});
            	next.removeClass('active');
    	});
    	if (counter == elements-1)
    		counter = 0;
	}, 8000);
    ss_choose = function(x) {
    	x++;
    	ccc.attr('id', '');
    	ccc.eq(x-1).attr('id', 'slide-control-active');
    	cs.stop().css({'opacity':0.0}).eq(x-1).css({'opacity': 1.0});
    	clearInterval(interval);
    };
});