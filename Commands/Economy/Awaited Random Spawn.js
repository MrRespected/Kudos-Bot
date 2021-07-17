module.exports = [{
name:"claim",
type:"awaitedCommand",
code:`$deletemessage[$message[1]]
**$usertag[$authorid]** bagged $getservervar[symb] **$get[a]**! They now have **$sum[$getuservar[money;$authorid];$get[a]]**!
$setuservar[money;$sum[$getuservar[money;$authorid];$get[a]];$authorid]
$let[a;$random[$splittext[1];$splittext[2]]]
$textsplit[$getservervar[ra];/]`}]