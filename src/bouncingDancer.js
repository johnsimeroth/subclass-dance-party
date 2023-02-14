var MakeBouncingDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps * 10;
};

MakeBouncingDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncingDancer.prototype.constructor = MakeBouncingDancer;

MakeBouncingDancer.prototype.step = function() {
  // MakeDancer.prototype.oldStep.call(this);
  // this = MakeBouncingDancer
  var bounceUpAmount = {
    top: '-=50'
  };
  var bounceDownAmount = {
    top: '+=50'
  };

  var bounceUp = function() {
    this.$node.animate(bounceUpAmount, this.timeBetweenSteps / 10, 'swing', bounceDown.bind(this));
  };

  var bounceDown = function() {
    this.$node.animate(bounceDownAmount, this.timeBetweenSteps / 10, 'swing', bounceUp.bind(this));
  };
};


// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.