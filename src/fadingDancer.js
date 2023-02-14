var MakeFadingDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

MakeFadingDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadingDancer.prototype.constructor = MakeFadingDancer;

MakeFadingDancer.prototype.step = function() {
  MakeDancer.prototype.oldStep.call(this);
  this.$node.fadeToggle(this.timeBetweenSteps);
};


// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.