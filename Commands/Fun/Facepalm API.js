module.exports = ({
name:"facepalm-user",
category:"Fun",
explanation:"A fun facepalm api!",
bot:"Embed Links",
user:"None",
usage:"fp <user>",
example:"fp @stickman",
explain:"Stickman is facepalmed!",
code:`$author[$username[$mentioned[1;yes]] is facepalmed!;$authoravatar]
$description[<@$authorid>, $username[$mentioned[1;yes]] is facepalmed! :man_facepalming:]
$image[https://api.avux.ga/fp?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$mentioned[1]!=;Mention someone!]
$onlyif[$isbot[$authorid]==false;]`})