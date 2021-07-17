module.exports = ({
name:"snake",
category:"Fun",
explanation:"Play a no-risk no-reward catch the food game!",
bot:"Embed Links",
user:"None",
usage:"snake",
example:"snake",
explain:"Start a catch the food game!",
code:`$djseval[( async () => {const { Snake } = require('weky');
new Snake({
message: message,
embed: {
title: 'Snakes And Ladders Game!', 
color: "#gt4668",
gameOverTitle: "Game Over", 
},
emojis: {
empty: '⬛', 
snakeBody: '♿',
food: '💩', 
up: '⬆️', 
right: '⬅️',
down: '⬇️',
left: '➡️',
},
}).start()})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})