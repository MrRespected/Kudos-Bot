module.exports = ({
name:"rank",
aliases:"level",
category:"Levelling",
explanation:"Check your current rank!",
bot:"Embed Links",
user:"None",
usage:"rank [user]",
example:"rank Stickman",
explain:"Get the rank of the user stickman!",
code:`$if[$message==]
$author[Here is the rank of $usertag[$get[user]]!;$useravatar[$get[user]]]
$image[https://vacefron.nl/api/rankcard?username=$username&avatar=$authorAvatar&level=8&rank=2&currentxp=350&nextlevelxp=400&previouslevelxp=150&custombg=https://cdn.discordapp.com/attachments/740416020761804821/741310178330148894/1596811604088.png&xpcolor=FFFFFF&isboosting=true]
$color[RANDOM]
$footer[Position: $getleaderboardinfo[level;$get[user];user;top] | Requested by $usertag;$authoravatar]
$addtimestamp
$let[user;$authorid]
$elseif[$checkcontains[$checkcondition[$isnumber[$message]==true]$checkcondition[$mentioned[1]!=];true]==false]
$author[Here is the rank of $usertag[$get[user]]!;$useravatar[$get[user]]]
$image[https://api.no-api-key.com/api/v2/rank/2?current=$getUserVar[xp;$get[user]]&total=$getUserVar[req;$get[user]]&rank=$getleaderboardinfo[level;$get[user];user;top]&level=$getUserVar[level;$get[user]]&discrim=$discriminator[$get[user]]&username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$replacetext[$useravatar[$get[user]]?size=4096;.webp;.png]&status=$status[$get[user]]&barFill=GREY&mainColor=YELLOW]
$color[RANDOM]
$footer[Position: $getleaderboardinfo[level;$get[user];user;top] | Requested by $usertag;$authoravatar]
$addtimestamp
$let[user;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];yes]]
$endelseif
$else
$author[Here is the rank of $usertag[$get[user]]!;$useravatar[$get[user]]]
$image[https://api.no-api-key.com/api/v2/rank/2?current=$getUserVar[xp;$get[user]]&total=$getUserVar[req;$get[user]]&rank=$getleaderboardinfo[level;$get[user];user;top]&level=$getUserVar[level;$get[user]]&discrim=$discriminator[$get[user]]&username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$replacetext[$useravatar[$get[user]]?size=4096;.webp;.png]&status=$status[$get[user]]&barFill=GREY&mainColor=YELLOW]
$color[RANDOM]
$footer[Position: $getleaderboardinfo[level;$get[user];user;top] | Requested by $usertag;$authoravatar]
$addtimestamp
$let[user;$findmember[$message;yes]]
$endif
$onlyif[$getservervar[lmsg]!=;{description:The levelling system is **disabled**!}{color:FF0000}]`})