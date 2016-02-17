describe('Thermostat', function(){
  var thermostat = new Thermostat();

  it ("has a default value", function(){
    expect(thermostat.degrees).toEqual(20);
  });

  it ("increases the temparature", function(){
    thermostat.increaseTemp();
    
  });

});
