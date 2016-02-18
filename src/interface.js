$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#degrees').text(thermostat.degrees);
  updateDegrees();

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

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   });

  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });
});
