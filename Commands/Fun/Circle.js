module.exports = ({
name:"circle",
category:"Fun",
explanation:"Make a pfp circled!",
bot:"Embed Links",
user:"None",
usage:"circle [user]",
example:"circle @stickman",
explain:"Get a circled avatar of Stickman!",
code:`$author[$username[$mentioned[1;yes]]'s circlular pfp!;$authoravatar]
$description[<@$authorid>, $username[$mentioned[1;yes]] circular pfp is generated!]
$image[https://api.avux.ga/circle?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})