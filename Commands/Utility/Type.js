module.exports = ({
name:"type",
aliases:"fs",
category:"Utility",
explanation:"Typing contest! All credits to the npm package \"Weky\"",
bot:"None",
user:"None",
usage:"type",
example:"type",
explain:"Gives a sentence you have to type in the given time!",
code:`$djseval[( async () => {const { FastType } = require('weky');
const game = new FastType({
    message: message,
    winMessage: "You're faster than I expected you to be! Wow!", 
    sentence: '$randomtext[How fast can you type? I dont know, but surely you do know how fast you do! Lets see whether you can type this sentence which you are reading in 35 seconds!;During the shower, he noticed that he could hear water change temperature. There are few things better in life than a slice of pie.;There's no reason a hula hoop can't also be a circus ring. Are you curious about the large white blimp that appeared overnight?;Behind the window was a reflection that only instilled fear. The best key lime pie is still up for debate;This is the 5th random sentence you can get. Can you type this in 35 seconds? I guess you can, good luck though!]', 
    loseMessage: 'Oops, you mis-spelled something! Sad!', 
    time: 35000,
    startMessage: '$randomtext[Good Luck!;Happy typing!;Just do it!]' 
});
game.start();})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})