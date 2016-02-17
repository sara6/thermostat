function Thermostat(){
  this.degrees = 20;
  this.minTemp = 10;
}

Thermostat.prototype.increaseTemp = function(){
  this.degrees += 1;
};

Thermostat.prototype.decreaseTemp = function(){
  if (this.degrees <= this.minTemp) {
    throw new Error("Minimum temparature reached");
  } else {
    this.degrees -= 1;
  }

};
