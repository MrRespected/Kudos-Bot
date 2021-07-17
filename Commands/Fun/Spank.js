module.exports = ({
name:"spank",
category:"Fun",
explanation:"Spank someone's butt! LOL",
bot:"Embed Links",
user:"None",
usage:"spank <user>",
example:"spank @stickman",
explain:"spank stickman(gif)!",
code:`$author[$username spanked $username[$mentioned[1]]!;$authoravatar]
$description[<@$authorid> spanked <@$mentioned[1]>, red butts all around! $customemoji[$getvar[spank]]]
$image[$httpRequest[https://api.avux.ga/spank;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone to spank!]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})