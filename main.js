function Quote (words, speaker) {
  this.words = words
  this.speaker = speaker
}

var quote1 = new Quote('It\'s not the daily increase but the daily decrease. Hack away at the unessential.', 'Bruce Lee')
var quote2 = new Quote('If one does not know to which port one is sailing, no wind is favorable.', 'Seneca')
var quote3 = new Quote('You have power over your mind - not outside events. Realize this, and you will find strength.', 'Marcus Aurelius')
var quote4 = new Quote('Aim above morality. Be not simply good, be good for something.', 'Henry David Thoreau')
var quote5 = new Quote('Risk means more things can happen than will happen.', 'Howard Marks')
var quote6 = new Quote('You only have to do a very few things right in your life so long as you don\'t do too many things wrong.', 'Warren Buffett')
var quote7 = new Quote('Design is not just what it looks like and feels like. Design is how it works.', 'Steve Jobs')
var quote8 = new Quote('Good design is as little design as possible.', 'Dieter Rams')
var quote9 = new Quote('Treat your life like a game.', 'Ray Dalio')
var quote10 = new Quote('Constantly think about how you could be doing things better and questioning yourself.', 'Elon Musk')

var generator = {
  quotes: [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10],
  currentQuote: Math.floor(Math.random() * 10),
  random: function () {
    generator.currentQuote = Math.floor(Math.random() * 10)
    $('h2').text(generator.quotes[generator.currentQuote].words)
    $('h4').text(generator.quotes[generator.currentQuote].speaker)
  }
}

generator.random()

$(function () {
  $('.generator').click(function () {
    generator.random()
  })
})
