$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#degrees').text(thermostat.degrees);

  $('#increaseTemp').on('click', function(){
    thermostat.increaseTemp();
    updateDegrees();
  });

  $('#decreaseTemp').on('click', function(){
    thermostat.decreaseTemp();
    updateDegrees();
  });

  $('#switchPowerSavingOn').on('click', function(){
    thermostat.switchPowerSavingOn();
    $('#powerSavingModeStatus').text('On');
    updateDegrees();
  });

  $('#switchPowerSavingOff').on('click', function(){
    thermostat.switchPowerSavingOff();
    $('#powerSavingModeStatus').text('Off');
    updateDegrees();
  });

  $('#resetTemp').on('click', function(){
    thermostat.resetTemp();
    updateDegrees();
  });

  function updateDegrees() {
    $('#degrees').text(thermostat.degrees);
    if(thermostat.displayEnergyUsage() === 'low-usage') {
      $('#degrees').css('color', 'green');
    } else if(thermostat.displayEnergyUsage() === 'medium-usage') {
      $('#degrees').css('color', 'yellow');
    } else {
      $('#degrees').css('color', 'red');
    }
  }

});
