module.exports = ({
name:"lick",
category:"Fun",
explanation:"Lick someone!",
bot:"Embed Links",
user:"None",
usage:"lick <user>",
example:"lick @stickman",
explain:"Licks stickman(gif)!",
code:`$author[$username licked $username[$mentioned[1]];$authoravatar]
$description[<@$authorid> licked <@$mentioned[1]>, xD! $customemoji[$getvar[lick]]]
$image[$httpRequest[https://api.avux.ga/lick;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to lick!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})