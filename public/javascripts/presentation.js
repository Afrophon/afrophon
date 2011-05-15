$(function() {	
	var pres = $('#pages');
	var slidenr = 0;
	var slidecount = pres.children().size() - 1;
	
	$('#control-left').click(function () {
		slidenr--;
		if (slidenr >= 0)
			pres.animate({'left': -874 * slidenr}, 1000);
		else {
			slidenr = slidecount;
			pres.animate({'left': -874 * slidenr}, 1000);
		}
	});
	$('#control-right').click(function () {
		slidenr++;
		if (slidenr <= slidecount)
			pres.animate({'left': -874 * slidenr}, 1000);
		else {
			slidenr = 0;
			pres.animate({'left': 0}, 1000);
		}
	});
});