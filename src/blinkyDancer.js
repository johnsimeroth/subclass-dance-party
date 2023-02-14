var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  // this.oldStep = MakeDancer.prototype.step;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.oldStep.call(this);
  this.$node.toggle();
};


// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.