module.exports = ({
name:"punch",
category:"Fun",
explanation:"Punch someone on their face!",
bot:"Embed Links",
user:"None",
usage:"punch <user>",
example:"punch @stickman",
explain:"Punches stickman(gif)!",
code:`$author[$username punched $username[$mentioned[1]], see through the scars!;$authoravatar]
$description[<@$authorid> punched <@$mentioned[1]>, they seem to be dead! $customemoji[$getvar[punch]]]
$image[$httpRequest[https://api.avux.ga/punch;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to punch!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})