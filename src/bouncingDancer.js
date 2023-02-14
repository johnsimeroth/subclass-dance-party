var MakeBouncingDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;

  this.width = 40;
  this.height = 40;
  this.squishOutAmount = 20;
  this.squishDownAmount = 20;
  this.bounceUpAmount = {
    top: '-=50'
  };
  this.bounceDownAmount = {
    top: '+=50'
  };

  this.shape0 = {
    width: '' + this.width + 'px',
    height: '' + this.height + 'px',
    left: left,
    top: top
  };
  debugger;
  this.shape1 = {
    width: '' + (this.width + this.squishOutAmount) + 'px',
    height: '' + (this.height - this.squishDownAmount) + 'px',
    left: '-=' + (this.squishOutAmount / 2) + 'px',
    top: '+=' + (this.squishDownAmount) + 'px'
  };

  this.$node.css(this.shape0);
  this.step();

};

MakeBouncingDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncingDancer.prototype.constructor = MakeBouncingDancer;

MakeBouncingDancer.prototype.step = function() {

  var bounceUp = function() {
    this.$node.animate(this.bounceUpAmount, this.timeBetweenSteps, $.easie(0.148, 0.494, 0.65, 0.944), bounceDown.bind(this));
  };

  var bounceDown = function() {
    this.$node.animate(this.bounceDownAmount, this.timeBetweenSteps, $.easie(0.414, 0, 0.994, 0.589), squishOut.bind(this));
  };

  var squishOut = function() {
    this.$node.animate(this.shape1, this.timeBetweenSteps / 3, 'swing', squishIn.bind(this));
  };

  var squishIn = function() {
    this.$node.animate(this.shape0, this.timeBetweenSteps / 3, 'swing', bounceUp.bind(this));
  };

  bounceUp.call(this);

};


// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.