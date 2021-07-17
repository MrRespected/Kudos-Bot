module.exports = ({
name:"clap",
category:"Fun",
explanation:"Clapp",
bot:"Embed Links",
user:"None",
usage:"clap",
example:"clap",
explain:"Yay clap!",
code:`$author[$username is clapping!;$authoravatar]
$description[<@$authorid> is clapping! $customemoji[$getvar[clap]]]
$image[$httpRequest[https://api.avux.ga/claps;GET;;message;error;X-API-Key:6Zphw8T7yeOEJ9X8M4]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})