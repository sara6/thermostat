describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temp by 1 when up called', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases the temp by 1 when down is called', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i <11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a power saving mode', function() {
    expect(thermostat.powerSaving).toBe('on');
  });

  it('has a maxiumum temp of 25 if power saving mode is on', function() {
    thermostat.powerSaving = 'on';
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('has a maximum temp of 32 if power saving mode is off', function() {
    thermostat.powerSaving = 'off';
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('resets temp to 20 if reset button selected', function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('should colour the energy display green < 18', function(){
    thermostat.temperature = 17;
    thermostat.energyDisplay();
    expect(thermostat.displayColour).toEqual('green');
  });

  it('should colour the energy display yellow if temp between 18 and 25', function(){
    thermostat.temperature = 20;
    thermostat.energyDisplay();
    expect(thermostat.displayColour).toEqual('yellow');
  });

  it('should colour the energy display red if temp greater than 25', function(){
    thermostat.temperature = 26;
    thermostat.energyDisplay();
    expect(thermostat.displayColour).toEqual('red');
  });

});
