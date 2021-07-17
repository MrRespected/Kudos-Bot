module.exports = ({
name:"happy",
category:"Fun",
explanation:"Im happy you're happy!",
bot:"Embed Links",
user:"None",
usage:"happy",
example:"happy",
explain:"Yay im happy!",
code:`$author[$username is realllly happy!;$authoravatar]
$description[<@$authorid> is happy, and so am I! $customemoji[$getvar[happy]]]
$image[$httpRequest[https://api.avux.ga/happy;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})