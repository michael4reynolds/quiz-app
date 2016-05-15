'use strict';

var _index = 0;
var _right = 0;
var _wrong = 0;

function showQuestion() {
  $('.question').html('<p>' + questions[_index].text + '</p>');
}

function showChoices() {
  $('.choices').empty();
  var choices = questions[_index].choices;
  for (var key in choices) {
    $('.choices').append('\n    <div class="choice">\n      <div class="bar"></div>\n      <input type="radio" id="choice_' + key + '" name="option" key=' + key + '>\n      <label for="choice_' + key + '">' + choices[key] + '</label>\n    </div>');
  }
}

function showQuiz() {
  $('.quiz').fadeIn(800);
}

function checkAnswer() {
  var correct = questions[_index].correct;
  return $('[key=' + correct + ']').prop('checked');
}

function nextQuestion() {
  if (_index > questions.length - 1) {
    _index = 0;
    $('#next').hide();
    $('#start').fadeIn(500);
    return;
  }
  showQuestion();
  showChoices();
}

function updateScore() {
  var togo = questions.length - _index;
  $('#right').text(_right);
  $('#wrong').text(_wrong);
  $('#togo').text(togo);
}

$(function () {
  $('.quiz').hide();

  $('#start').on('click', function () {
    $(this).fadeOut(800);
    showQuestion();
    showChoices();
    updateScore();
    showQuiz();
  });

  $('#next').on('click', function () {
    var correct = checkAnswer();
    correct ? _right++ : _wrong++;
    _index++;
    updateScore(correct);
    nextQuestion();
  });
});

var questions = [{
  text: 'What is the term for a zero score in tennis?',
  choices: {
    a: 'Zero itself',
    b: 'Naught',
    c: 'Love',
    d: 'Let'
  },
  correct: 'c',
  explanation: 'In tennis, zero score is love. You pronounce a score of 6-0 as six-love. "Love" is generally taken as being derived from the French "l"oeuf", the egg, symbolizing nothing. The term "love" can also be said to come from the English phrase "neither for love nor for money", indicating nothing.'
}, {
  text: 'Where is the worlds highest tennis court located?',
  choices: {
    a: 'Empire State Building, New York',
    b: 'Burj Al Arab, Dubai',
    c: 'Petronas Towers, Kuala Lumpur',
    d: 'Taipei 101, Taiwan'
  },
  correct: 'b',
  explanation: 'The 1,000 foot tall dizzying green roof which doubled as a tennis court sat atop the Burj al Arab luxury hotel in Dubai as part of a media stunt right before the Dubai Duty Free Men’s Open. Tennis greats Andre Agassi and Roger Federer were invited up to the courts to play a friendly game before the competition began. While it was only temporary, the tennis court lives on in these amazing pictures'
}, {
  text: 'There are two types of tennis balls, namely pressurized and non-pressurized. Pressurized tennis balls have hollow cores that are filled with what gas?',
  choices: {
    a: 'Oxygen',
    b: 'Carbon dioxide',
    c: 'Hydrogen',
    d: 'Nitrogen'
  },
  correct: 'd',
  explanation: 'A tennis ball is normally yellow in color. Pressurized tennis balls are filled with inert nitrogen gas in their cores. The gas used must be inactive or inert. Hydrogen is highly inflammable.'
}, {
  text: 'Which player holds the record for highest career earnings, of approximately $50 million, in Tennis?',
  choices: {
    a: 'Roger Federer',
    b: 'Rafael Nadal',
    c: 'Pete Sampras',
    d: 'Andre Agassi'
  },
  correct: 'a',
  explanation: 'Roger Federer leads the list of highest earning Tennis players with career earnings till date standing at US$ 49.4 Million. Pete Sampras is second with $43.2 Million, while Nadal is 5th with only $25 Million'
}, {
  text: 'For a professional tennis player, winning the "Grand Slams" involves achieving what feat in Tennis?',
  choices: {
    a: 'Winning all one particluar Grand Slam tournament at least 4 times in the career',
    b: 'Winning all 4 Grand Slam Tournaments in a calendar year',
    c: 'Achieveing number 1 ranking in the world',
    d: 'Winning the Davis Cup'
  },
  correct: 'b',
  explanation: 'For a tennis player, winning the "Grand Slam" involves winning four tournaments in the same calendar year: the Australian Open, French Open, U.S. Open, and Wimbledon. Only a handful of tennis players have accomplished this extraordinary feat, including Maureen Connolly (1953), Margaret Smith Court (1970), Steffi Graf (1988), Don Budge (1938), and Rod Laver (1962 & 1969) who managed to win the Grand Slam TWICE!'
}];
//# sourceMappingURL=main.js.map