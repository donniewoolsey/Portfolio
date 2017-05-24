$(document).ready( function() {
	var windowHeight = $(window).height();
	var bodyHeight = $("body").height();
	
	var missing = windowHeight - bodyHeight;
	
	if (missing > 0) {
		var heightFix = $("#heightFix");
		heightFix.css( {
			"height":missing
		});
	}
});