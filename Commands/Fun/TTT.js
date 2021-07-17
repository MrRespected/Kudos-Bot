module.exports = ({
name:"ttt",
aliases:"tic-tac-toe",
category:"Fun",
explanation:"Play a no-risk no-reward ttt!",
bot:"Embed Links",
user:"None",
usage:"ttt <user>",
example:"ttt @Stickman",
explain:"Start a TTT game with the user Stickman!",
code:`$djseval[( async () => {const opponent = message.mentions.users.first();
const { TicTacToe } = require('weky')
const game = new TicTacToe({
    message: message,
    opponent: opponent,
    xColor: 'red',
    oColor: 'blurple',
    xEmoji: '❌',
    oEmoji: '0️⃣' ,
})
game.start()})();yes]
$onlyif[$mentioned[1]!=;{description:Mention someone to play against!}{color:FF0000}]
$servercooldown[10s;On a cooldown!]`})