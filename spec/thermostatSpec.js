describe('Thermostat', function(){
  var thermostat = new Thermostat();

  it ("has a default value", function(){
    expect(thermostat.degrees).toEqual(20);
  });

  it ("displays the minimum temperature", function(){
    expect(thermostat.minTemp).toEqual(10);
  });


  describe('#increaseTemp', function(){

    it ("throws an error if minimum temp is reached", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = thermostat.maxTemp;
      expect(function() {
        thermostat.increaseTemp();
      }).toThrowError("Maximum temparature reached");
    });

    it ("increases the temparature by 1", function(){
      thermostat.increaseTemp();
      expect(thermostat.degrees).toEqual(21);
    });

  });

  describe('#decreaseTemp', function(){

    it ("throws an error if minimum temp is reached", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = thermostat.minTemp;
      expect(function() {
        thermostat.decreaseTemp();
      }).toThrowError("Minimum temparature reached");
    });

    it ("decreases the temparature by 1", function(){
      thermostat.decreaseTemp();
      expect(thermostat.degrees).toEqual(20);
    });

  });

  describe("#Power saving mode", function(){
    it ("Is on by default", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe("#switchPowerSavingOn", function(){
    it ("Sets powerSavingMode to true", function(){
      thermostat.switchPowerSavingOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe("#switchPowerSavingOff", function(){
    it ("Sets powerSavingMode to false", function(){
      thermostat.switchPowerSavingOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });
  });

  describe("#changeMaxTemp", function(){
    it ("Changes to 25 when powerSavingMode is on", function(){
      thermostat.switchPowerSavingOn();
      expect(thermostat.maxTemp).toEqual(25);
    });
    it ("Changes to 32 when powerSavingMode is off", function(){
      thermostat.switchPowerSavingOff();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });

  describe("#resetTemp", function(){

    it ("resets the temparature back to 20 degrees", function(){
      thermostat.resetTemp();
      expect(thermostat.degrees).toEqual(20);
    });

  });

  describe('#displayColor', function(){

    it("changes the display color to green if < 18 degrees", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = 17;
      expect(thermostat.displayColor()).toEqual("green");
    });

    it("changes the display color to yellow if < 25 degrees", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = 24;
      expect(thermostat.displayColor()).toEqual("yellow");
    });

    it("changes the display color to red if 25 degrees or over", function(){
      spyOn(thermostat, "degrees");
      thermostat.degrees = 25;
      expect(thermostat.displayColor()).toEqual("red");
    });

  });


});
