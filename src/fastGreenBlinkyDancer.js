var MakeFastGreenBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps / 5);
  this.$node.css('background-color', 'green');

};

MakeFastGreenBlinkyDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeFastGreenBlinkyDancer.prototype.constructor = MakeFastGreenBlinkyDancer;