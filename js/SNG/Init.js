onClick="window.location.reload(true)"
$(document).ready(function() {
	$("#Freeplay").click(function() {
		$("#js").attr("src", "Test.js");
		window.open("./Freeplays.html", "_self");
	});
	$("#Scored").click(function() {
		$("#js").attr("src", "Test2.js");
		window.open("./Scored.html", "_self");
	});
});
