function Thermostat(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSaving = 'on';
    this.displayColour = 'yellow';
}

Thermostat.prototype.up = function(){
  if ((this.powerSaving === 'on' && this.temperature < 25) || (this.powerSaving === 'off' && this.temperature < 32)) {
      this.temperature += 1;
  }
  else {
    return this.temperature;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
    return this.MINIMUM_TEMPERATURE;
  }
  else {
      this.temperature -= 1;
  }

Thermostat.prototype.powerSaveOn = function(){
  this.powerSaving = "on";
};

Thermostat.prototype.powerSaveOff = function(){
  this.powerSaving = "off";
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

Thermostat.prototype.energyDisplay = function(){
  if (this.temperature <= 17) {
    this.displayColour = 'green';}
  else if (this.temperature >= 18 && this.temperature <25){
    this.displayColour = 'yellow'; }
  else {this.displayColour = 'red';}
};

};
