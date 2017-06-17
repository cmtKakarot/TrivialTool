$(document).ready(function() {
	$("#freeplay").click(function() {
		$("#js").attr("src", "Test.js");
		window.open("./Freeplays.html", "_self");
	});
	$("#scored").click(function() {
		$("#js").attr("src", "Test2.js");
		window.open("./Scored.html", "_self");
	});
});
