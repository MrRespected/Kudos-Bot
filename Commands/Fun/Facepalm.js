module.exports = ({
name:"facepalm",
category:"Fun",
explanation:"A facepalm gif!",
bot:"Embed Links",
user:"None",
usage:"facepalm",
example:"facepalm",
explain:"Get a random facepalm gif!",
code:`$author[$username facepalmed!;$authoravatar]
$description[<@$authorid> is facepalming! $customemoji[$getvar[facepalm]]]
$image[$httpRequest[https://api.avux.ga/facepalm;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})