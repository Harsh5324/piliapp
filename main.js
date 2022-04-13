jQuery(document).ready(function($) {
	$(".link").click(function() {
		window.open($(this).attr("data-to"), "_self");
	});
});