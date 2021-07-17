module.exports = ({
name:"fight",
aliases:"battle",
category:"Fun",
explanation:"Play a no-risk no-reward fight game!",
bot:"Embed Links",
user:"None",
usage:"fight <user>",
example:"fight @Stickman",
explain:"Start a fight game with the user Stickman!",
code:`$setuservar[fmid;$get[e]]
$setuservar[fmid;$get[e];$mentioned[1]]
$let[e;$apiMessage[**$usertag** has started a fight with **$usertag[$mentioned[1]]**! Its the chance of <@$replacetext[$authorid$mentioned[1];$randomtext[$authorid;$mentioned[1]];]>!;;{actionRow:Punch,2,4,hit,:Heal,2,3,heal,:End,2,2,end};;yes]]
$setuservar[lh;$randomtext[$authorid;$mentioned[1]]]
$setuservar[lh;$randomtext[$authorid;$mentioned[1]];$mentioned[1]]
$setuservar[op;$mentioned[1]]
$setuservar[op;$authorid;$mentioned[1]]
$setuservar[hp;100]
$setuservar[hp;100;$mentioned[1]]
$onlyif[$getuservar[fmid]==;You are in a fight!]
$onlyIf[$checkcondition[$isbot[$mentioned[1]]==false]$checkCondition[$mentioned[1]!=$authorid]==truetrue;Neither can you fight yourself, or can you fight a bot. Winning is hard for u but try a new way, this won't work out ^^]
$onlyif[$mentioned[1]!=;{description:Mention someone to fight!}{color:FF0000}]
$onlyif[$isbot[$authorid]==false;]`})