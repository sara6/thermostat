function Thermostat(){
  this.degrees = 20;
}

Thermostat.prototype.increaseTemp = function(){
  this.degrees += 1;
};
