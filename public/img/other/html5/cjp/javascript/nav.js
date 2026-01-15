// JavaScript Document

// When the page is ready
$(document).ready(function(){

	<!-- ---------- INITIAL SITE STATE ---------- -->

	$("#sectContainer0").animate({ marginTop: "0%"}, 0);
	$("#sectContainer1").animate({ marginTop: "100%"}, 0);
	$("#sectContainer2").animate({ marginTop: "100%"}, 0);
	$("#sectContainer3").animate({ marginTop: "100%"}, 0);
	$("#sectContainer4").animate({ marginTop: "100%"}, 0);

/*
	$("#sectContainer0").show();
	$("#sectContainer1").hide();
	$("#sectContainer2").hide();
	$("#sectContainer3").hide();
	$("#sectContainer4").hide();
*/

	<!-- ---------- HOME ---------- -->

	$(".navHed").click(function(event) {
	/*$("#navHed0").click(function() {*/

/*
		$("#sectContainer0").fadeIn("250", "linear");
		$("#sectContainer1").fadeOut("250", "linear");
		$("#sectContainer2").fadeOut("250", "linear");
		$("#sectContainer3").fadeOut("250", "linear");
		$("#sectContainer4").fadeOut("250", "linear");
*/

		var thisClicked = event.target.id;
		var thisIndex = thisClicked.substr(thisClicked.length - 1);
		var thisSect = "#sectContainer" + thisIndex;
		var thisMargin = $(thisSect).css("margin-top");

		/*alert("PING!!! you clicked the logo!");*/
		/*alert("thisMargin = " + thisMargin);*/
		/*alert("PING!!! you clicked " + thisClicked + "    thisSect = " + thisSect + "     thisMargin = " + thisMargin);*/

		$('.sectContainer').each(function(index) {
			var sectIndex = "#sectContainer" + index;
			var navIndex = "#navSect" + index;

			/*alert(index + ': ' + $(this).text());*/
			/*alert("navIndex = " + navIndex + "     thisSect = " + thisSect + "     sectIndex = " + sectIndex);*/

			if ( sectIndex == thisSect ){
				/*alert("sectIndex == thisSect!");*/
	
				$(navIndex).animate({
					left: "0%"
				}, 500);
	
				$(thisSect).animate({
					marginTop: "0%"
				}, 500);
	
			} else {
				/*alert("sectIndex != thisSect!");*/
	
				$(navIndex).animate({
					left: "-100%"
				}, 500);
	
				$(sectIndex).animate({
					marginTop: "100%"
				}, 500);
			}

		});
	});

	<!-- ---------- SUB NAV ---------- -->

	$(".navSectContainer").click(function(event) {

		var thisClicked = event.target.id;
		var thisIndex = thisClicked.substr(thisClicked.length - 1);
		var thisSect = "#sectContainer" + thisIndex;
		var thisMargin = $(thisSect).css("margin-top");

		/*alert("PING!!! you clicked the logo!");*/
		/*alert("thisMargin = " + thisMargin);*/
		alert("PING!!! you clicked " + thisClicked + "    thisSect = " + thisSect + "     thisMargin = " + thisMargin);

//		$('.subNavSect').each(function(index) {
//			var subSectIndex = "#subSectContainer" + index;
//			var subNavIndex = "#subNavSect" + index;
//
//			alert(index + ': ' + $(this).text());
//			alert("navIndex = " + navIndex + "     thisSect = " + thisSect + "     sectIndex = " + sectIndex);
//		});

	});


	<!-- ---------- NAVBAR ---------- -->
/*
	$(".navHed").click(function() {

		var thisHed = $(this).attr("id");
		alert("thisHed = " + thisHed);

		switch (thisHed) {
			case "navHed0":
				$("#sectContainer0").fadeIn("250", "linear");
				$("#sectContainer1").fadeOut("250", "linear");
				$("#sectContainer2").fadeOut("250", "linear");
				$("#sectContainer3").fadeOut("250", "linear");
				$("#sectContainer4").fadeOut("250", "linear");

			break;

			case "navHed1":
				$("#sectContainer0").fadeOut("250", "linear");
				$("#sectContainer1").fadeIn("250", "linear");
				$("#sectContainer2").fadeOut("250", "linear");
				$("#sectContainer3").fadeOut("250", "linear");
				$("#sectContainer4").fadeOut("250", "linear");
			break;

			case "navHed2":
				$("#sectContainer0").fadeOut("250", "linear");
				$("#sectContainer1").fadeOut("250", "linear");
				$("#sectContainer2").fadeIn("250", "linear");
				$("#sectContainer3").fadeOut("250", "linear");
				$("#sectContainer4").fadeOut("250", "linear");
			break;

			case "navHed3":
				$("#sectContainer0").fadeOut("250", "linear");
				$("#sectContainer1").fadeOut("250", "linear");
				$("#sectContainer2").fadeOut("250", "linear");
				$("#sectContainer3").fadeIn("250", "linear");
				$("#sectContainer4").fadeOut("250", "linear");
			break;

			case "navHed4":
				$("#sectContainer0").fadeOut("250", "linear");
				$("#sectContainer1").fadeOut("250", "linear");
				$("#sectContainer2").fadeOut("250", "linear");
				$("#sectContainer3").fadeOut("250", "linear");
				$("#sectContainer4").fadeIn("250", "linear");
			break;

			default:
				$("#sectContainer0").show();
		}
	});
*/

});
