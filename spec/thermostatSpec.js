describe('Thermostat', function(){
  var thermostat = new Thermostat();

  it ("has a default value", function(){
    expect(thermostat.degrees).toEqual(20);
  });

  it ("displays the minimum temperature", function(){
    expect(thermostat.minTemp).toEqual(10);
  });


  describe('#increaseTemp', function(){

    it ("increases the temparature by 1", function(){
      thermostat.increaseTemp();
      expect(thermostat.degrees).toEqual(21);
    });

  });

  describe('#decreaseTemp', function(){

    it ("throws an error if minimum temp is reached", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = 10;
      expect(function() {
        thermostat.decreaseTemp();
      }).toThrowError("Minimum temparature reached");
    });

    it ("decreases the temparature by 1", function(){
      thermostat.decreaseTemp();
      expect(thermostat.degrees).toEqual(20);
    });

  });


});
