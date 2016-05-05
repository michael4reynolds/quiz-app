'use strict';

$(function () {
  $('#maxcount').on('keyup', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      showValues($(this).val());
    }
  });
});

function showValues(max) {
  max = parseInt(max);
  if (isNaN(max)) {
    return;
  }
  $('.display p').remove();
  for (var num = 1; num <= max; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      $('.display').append('<p class="fizzbuzz">FizzBuzz<p>');
    } else if (num % 3 === 0) {
      $('.display').append('<p class="fizz">Fizz</p>');
    } else if (num % 5 === 0) {
      $('.display').append('<p class="buzz">Buzz</p>');
    } else {
      $('.display').append('<p class="neither">' + num + '</p>');
    }
  }
}
//# sourceMappingURL=main.js.map