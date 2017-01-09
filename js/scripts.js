var gallonsToLiters = function() {
  var gallons = prompt("How many gallons would you like to convert?")
  var liters = (gallons * 3.78541).toFixed(2);
  alert(gallons + " gallons converts to " + liters + " liters");
}

gallonsToLiters();
