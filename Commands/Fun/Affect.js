module.exports = ({
name:"affect",
category:"Fun",
explanation:"A fun affect api!",
bot:"Embed Links",
user:"None",
usage:"affect [user]",
example:"affect @stickman",
explain:"Stickman is affected!",
code:`$author[$username[$mentioned[1;yes]] is affected!;$authoravatar]
$description[<@$authorid>, $username[$mentioned[1;yes]] has been affected!]
$image[https://api.avux.ga/affect?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})
