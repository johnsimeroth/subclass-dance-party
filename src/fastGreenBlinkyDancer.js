var MakeFastGreenBlinkyDancer = function(top, left, timeBetweenSteps) {

  // debugger;
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps / 5);
  this.$node.css('background-color', 'green');
  // this.step();

};

MakeFastGreenBlinkyDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeFastGreenBlinkyDancer.prototype.constructor = MakeFastGreenBlinkyDancer;