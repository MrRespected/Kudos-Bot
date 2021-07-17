module.exports = ({
name:"wyr",
aliases:"would-you-rather",
category:"Fun",
explanation:"Get a Would-You-Rather question!",
bot:"Embed Links",
user:"None",
usage:"wyr",
example:"wyr",
explain:"Shows a WYR question!",
code:`$djseval[( async () => {const { WouldYouRather } = require('weky')
await WouldYouRather(message)})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})