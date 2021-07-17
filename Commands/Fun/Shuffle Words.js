module.exports = ({
name:"shuffle-words",
aliases:"chaos-words",
category:"Fun",
explanation:"Play a chaos words game!!",
bot:"Embed Links",
user:"None",
usage:"chaos-words",
example:"chaos-words",
explain:"Start a chaos-words game with random words!",
code:`$djseval[( async () => {  const { ChaosWords } = require("weky")
var randomWords = require('random-words');
const words = randomWords(2)
await new ChaosWords({
message: message,
maxTries: 8,
charGenerated: 20, 
words:['alphabet','random','banana','apple','$username[$clientid]'], 
embedTitle: 'Chaos words!',
embedFooter: 'Find the words in the sentence!',
embedColor: 'RANDOM'
}).start()})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})