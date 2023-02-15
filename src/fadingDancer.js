var MakeFadingDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeFadingDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadingDancer.prototype.constructor = MakeFadingDancer;

MakeFadingDancer.prototype.step = function() {
  MakeDancer.prototype.oldStep.call(this);
  this.$node.fadeToggle(this.timeBetweenSteps);
};