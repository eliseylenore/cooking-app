var cupsToOunces = function() {
  var cups = prompt("How many cups would you like to convert?");
  var ounces = (cups * 8).toFixed(2);
  alert(cups + " cups converts to " + ounces + " ounces")
}


var gallonsToLiters = function() {
  var gallons = prompt("How many gallons would you like to convert?");
  var liters = (gallons * 3.78541).toFixed(2);
  alert(gallons + " gallons converts to " + liters + " liters");
}



var option = prompt("Which calculator do you want to use? cups or gallons");

option = option.toLowerCase();

if(option === "cups") {
cupsToOunces();
}

else if(option === "gallons") {
  gallonsToLiters();
}
