$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#degrees').text(thermostat.degrees);

  $('#increaseTemp').on('click', function(){
    thermostat.increaseTemp();
    $('#degrees').text(thermostat.degrees);
  });

  $('#decreaseTemp').on('click', function(){
    thermostat.decreaseTemp();
    $('#degrees').text(thermostat.degrees);
  });

  $('#switchPowerSavingOn').on('click', function(){
    thermostat.switchPowerSavingOn();
    $('#powerSavingModeStatus').text('On');
  });

  $('#switchPowerSavingOff').on('click', function(){
    thermostat.switchPowerSavingOff();
    $('#powerSavingModeStatus').text('Off');
  });

  $('#resetTemp').on('click', function(){
    thermostat.resetTemp();
    $('#degrees').text(thermostat.degrees);
  });

});
