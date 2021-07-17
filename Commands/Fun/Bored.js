module.exports = ({
name:"bored",
category:"Fun",
explanation:"Yawn",
bot:"Embed Links",
user:"None",
usage:"bored",
example:"bored",
explain:"Get a bored gif!",
code:`$author[$username is bored!;$authoravatar]
$description[<@$authorid> is bored $customemoji[$getvar[bored]]]
$image[$httpRequest[https://api.avux.ga/bored;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})