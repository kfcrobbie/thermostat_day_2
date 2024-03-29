thermostat = new Thermostat

var buttons = $(".controller_button");


$('#display').html(thermostat.temperature + ' °C');
// VANILLA JAVASCRIPT:
// document.getElementById("display").innerHTML = temperature

// $(buttons[0]).click(thermostat.increaseTemperature());

var increase = function (e) {
  e.preventDefault();
  thermostat.increaseTemperature();
  $('#display').html(thermostat.temperature + ' °C');
}

var decrease = function (e) {
  e.preventDefault();
  thermostat.decreaseTemperature();
  $('#display').html(thermostat.temperature + ' °C');
}

var powerSave = function () {
  // e.preventDefault();
  thermostat.changePowerSaveMode();
}

var reset = function (e) {
  e.preventDefault();
  thermostat.resetTemperature();
  $('#display').html(thermostat.temperature + ' °C');
}

var color = function () {
	var colorAssigned;
  if (thermostat.temperature <18){ 
  	colorAssigned = 'green';
  	console.log(colorAssigned)
   } else if (thermostat.temperature >17 && thermostat.temperature <25){
   	colorAssigned = 'yellow';
   	console.log(colorAssigned)
   } else {
   	colorAssigned = 'red';
   	console.log(colorAssigned)
   }
}


$(buttons[0]).click(increase);
$(buttons[1]).click(decrease);
$(buttons[2]).click(reset);

$('#powerSaveCheckBox').change(function(e) {
    if(!$(this).is(':checked'))
        powerSave();
});