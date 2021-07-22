module.exports = ({
name:"remove-warn",
aliases:['rw','clearwarn'],
category:"Mod",
explanation:"Remove warning of a user. Kick permissions required.",
bot:"Embed Links",
user:"Kick",
usage:"remove-warn <userid/name/mention> <number>",
example:"remove-warn Stickman 1",
explain:"Removes the warning with the number 1 of the user **Stickman**!",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user's warning was cleared!:$authoravatar}{description:<@$authorid> removed a warning from <@$get[user]>, the number being **$get[warn]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$senddm[$get[user];{author:Warning Cleared!:$servericon}{description:**$usertag** removed your warning with the number **$get[warn]**!}{color:GREEN}{footer:Executed by $usertag in $servername:$authoravatar}{timestamp}]
$setuservar[reason;&&$joinsplittext[&&];$get[user]]
$edittextsplitelement[$sum[$get[warn];1];($get[warn]) Cleared By $usertag. ID: $authorid]
$textsplit[$getuservar[reason;$get[user]];&&]
$sendmessage[{author:Warning Cleared!}{description:I removed the warning with the number **$get[warn]** of **$usertag[$get[user]]**!}{color:GREEN}{footer:Executed by $usertag}{timestamp};no]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;100];false;$roleposition[$highestrole[$clientid]]]>$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;100];false;$roleposition[$highestrole[$authorid]]]>$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot unwarn a bot!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot unwarn the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot unwarn myself!}{color:FF0000}]
$onlyif[$checkcontains[$getuservar[reason;$get[user]];($get[warn]) ]==true;{description:That warning has already been cleared!}{color:FF0000}]
$onlyif[$getuservar[wc;$get[user]]>=$get[warn];{description:That warning does not exist. Check their warns for existing warnings! They have **$getuservar[wc;$get[user]]** warns right now!}{color:FF0000}]
$onlyif[$isnumber[$get[warn]]==true;{description:Enter a valid number!}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[warn;$message[2]]
$onlyif[$message[2]!=;{description:Invalid Arguments! > \`\`\`fix
> $getservervar[prefix]clearwarn <userid/name/mention> <warn number>\`\`\`}{color:FF0000}]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:FF0000}]`})
