var MakeBouncingDancer = function(top, left, timeBetweenSteps) {
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
    left: '+=' + (this.squishOutAmount / 2) + 'px',
    top: '-=' + (this.squishDownAmount) + 'px'
  };

  this.shape1 = {
    width: '' + (this.width + this.squishOutAmount) + 'px',
    height: '' + (this.height - this.squishDownAmount) + 'px',
    left: '-=' + (this.squishOutAmount / 2) + 'px',
    top: '+=' + (this.squishDownAmount) + 'px'
  };

  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.css(this.shape0);

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
    if (window.linedUp) {
      this.lineUp(0);
    }
    this.$node.animate(this.shape1, this.timeBetweenSteps / 3, 'swing', squishIn.bind(this));
  };

  var squishIn = function() {
    if (window.linedUp) {
      this.lineUp(0);
    }
    this.$node.animate(this.shape0, this.timeBetweenSteps / 3, 'swing', bounceUp.bind(this));
  };

  bounceUp.call(this);

};
