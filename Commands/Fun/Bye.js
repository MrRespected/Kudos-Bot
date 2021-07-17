module.exports = ({
name:"bye",
aliases:"cya",
category:"Fun",
explanation:"Cya!",
bot:"Embed Links",
user:"None",
usage:"bye",
example:"bye",
explain:"Ba bye gif!",
code:`$author[$username is going!;$authoravatar]
$description[<@$authorid> is going away from the chat, maybe lurking? $customemoji[$getvar[bye]]]
$image[$httpRequest[https://api.avux.ga/bye;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})