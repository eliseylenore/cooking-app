var cupsToOunces = function() {
  var cups = prompt("How many cups would you like to convert?");
  var ounces = (cups * 8).toFixed(2);
  alert(cups + " cups converts into " + ounces + " ounces")
}

var gallonsToLiters = function() {
  var gallons = prompt("How many gallons would you like to convert?");
  var liters = (gallons * 3.78541).toFixed(2);
  alert(gallons + " gallons converts into " + liters + " liters");
}

var pintsToQuarts = function() {
  var pints = prompt("How many pints would you like to convert?");
  var quarts = (pints / 2).toFixed(2);
  alert(pints + " pints converts into " + quarts + " quarts");
}


while(option !== "quit") {
var option = prompt("Which calculator do you want to use? cups, gallons, or pints");

option = option.toLowerCase();

if(option === "cups") {
  cupsToOunces();
}

else if (option === "gallons") {
  gallonsToLiters();
}

else if(option === "pints") {
  pintsToQuarts();
}
}
