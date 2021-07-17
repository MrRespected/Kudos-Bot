module.exports = ({
name:"hug",
category:"Fun",
explanation:"Hug someone!",
bot:"Embed Links",
user:"None",
usage:"hug <user>",
example:"hug @stickman",
explain:"Hugs stickman(gif)!",
code:`$author[$username hugs $username[$mentioned[1]];$authoravatar]
$description[<@$authorid> hugged <@$mentioned[1]>, remember not to squeeze! $customemoji[$getvar[hug]]]
$image[$httpRequest[https://api.avux.ga/hug;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to hug!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})