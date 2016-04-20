$(document).ready(function() {

//When user inputs city name and clicks submit, show pix for that city.

$('form').submit(showCityPix);


function showCityPix() {
event.preventDefault();

 	console.log("is this working");

 	var varcity = $('#city-type').val();

//If user inputs NYC || New York City || New York, then show 'nyc' pix.
//If user inputs SF || San Francisco || Bay Area, then show 'sf' pix.
//If user inputs LA || Los Angeles || LAX, then show 'la' pix
//If user inputs Austin || ATX ||, then show 'austin' pix
//If user inputs Sydney || SYD, then show 'sydney' pix

	if (varcity == "NYC" || varcity == "New York City" || varcity == "New York") {
 	$('body').addClass('nyc');
  // By adding classes without removing the ones prior, you arent able to type a new city and get a new background

 	} else if (varcity == "San Francisco" || varcity == "SF" || varcity == "Bay Area") {
 	$('body').addClass('sf');

 	} else if (varcity == "LA" || varcity == "Los Angeles" || varcity == "LAX") {
 	$('body').addClass('la');

 	} else if (varcity == "Austin" || varcity == "ATX"){
 	$('body').addClass('austin');

 	} else if (varcity == "Sydney" || varcity == "SYD"){
 	$('body').addClass('sydney');

 	} else
 	$('body').removeClass();

  }

});