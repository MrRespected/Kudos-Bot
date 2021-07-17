module.exports = ({
name:"kiss",
category:"Fun",
explanation:"Kiss someone!",
bot:"Embed Links",
user:"None",
usage:"kiss <user>",
example:"kiss @stickman",
explain:"kisses stickman(gif)!",
code:`$author[$username kissed $username[$mentioned[1]], aww!;$authoravatar]
$description[<@$authorid> kissed <@$mentioned[1]>, <3! $customemoji[$getvar[kiss]]]
$image[$httpRequest[https://api.avux.ga/kiss;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to kiss!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})