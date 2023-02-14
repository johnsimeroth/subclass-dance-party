var MakeFastGreenBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps / 10);
  this.$node.css('border', '10px solid green');

};

MakeFastGreenBlinkyDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
MakeFastGreenBlinkyDancer.prototype.constructor = MakeFastGreenBlinkyDancer;

// MakeFastGreenBlinkyDancer.prototype.step = function() {
//   MakeDancer.prototype.oldStep.call(this);
//   this.$node.toggle();
// };

/*
MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
 */
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.