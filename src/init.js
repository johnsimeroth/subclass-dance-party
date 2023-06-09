$(document).ready(function() {
  window.dancers = [];
  window.linedUp = false;

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    window.linedUp = true;
    window.dancers.forEach(function(dancer) {
      // debugger;
      dancer.lineUp(0);
    });
  });


});

