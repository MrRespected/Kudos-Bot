module.exports = ({
name:"cuddle",
category:"Fun",
explanation:"Cuddle someone!",
bot:"Embed Links",
user:"None",
usage:"cuddle <user>",
example:"cuddle @stickman",
explain:"Cuddle's stickman(gif)!",
code:`$author[$username cuddles $username[$mentioned[1]];$authoravatar]
$description[<@$authorid> cuddled <@$mentioned[1]>, dont cuddle it too hard though! $customemoji[$getvar[cuddle]]]
$image[$httpRequest[https://api.avux.ga/cuddle;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to cuddle!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})