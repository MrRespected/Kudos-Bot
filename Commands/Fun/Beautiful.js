module.exports = ({
name:"beautiful",
category:"Fun",
explanation:"Thats beautiful!",
bot:"Embed Links",
user:"None",
usage:"beautiful [user]",
example:"beautiful @stickman",
explain:"Stickman is beautil!",
code:`$author[$username[$mentioned[1;yes]] is beautiful!;$authoravatar]
$description[<@$authorid>, $username[$mentioned[1;yes]] is so lovely! $customemoji[$getvar[beautiful]]]
$image[https://api.avux.ga/beautiful?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})