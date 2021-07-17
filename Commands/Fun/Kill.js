module.exports = ({
name:"kill",
category:"Fun",
explanation:"Kill someone(just a gif)!",
bot:"Embed Links",
user:"None",
usage:"kill <user>",
example:"kill @stickman",
explain:"kills stickman(gif)!",
code:`$author[$username killed $username[$mentioned[1]];$authoravatar]
$description[<@$authorid> killed <@$mentioned[1]>, but what if they dont die? $customemoji[$getvar[kill]]]
$image[$httpRequest[https://api.avux.ga/kill;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to kill!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})