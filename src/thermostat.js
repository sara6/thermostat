function Thermostat(){
  this.degrees = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.increaseTemp = function(){
  if (this.degrees >= this.maxTemp) {
    throw new Error("Maximum temparature reached");
  } else {
    this.degrees += 1;
  }
};

Thermostat.prototype.decreaseTemp = function(){
  if (this.degrees <= this.minTemp) {
    throw new Error("Minimum temparature reached");
  } else {
    this.degrees -= 1;
  }
};

Thermostat.prototype.switchPowerSavingOn = function(){
  this.powerSavingMode = true;
  this.changeMaxTemp();
};

Thermostat.prototype.switchPowerSavingOff = function(){
  this.powerSavingMode = false;
  this.changeMaxTemp();
};

Thermostat.prototype.changeMaxTemp =  function(){
  if (this.powerSavingMode) {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};

Thermostat.prototype.resetTemp = function(){
  this.degrees = 20;
};

Thermostat.prototype.displayEnergyUsage = function(){
  if (this.degrees < 18) {
    return "low-usage";
  } else if (this.degrees < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
