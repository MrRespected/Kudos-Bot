module.exports = ({
name:"kick",
category:"Mod",
explanation:"Usable only if the user and the bot have ban permissions. Sends DM to the user and kicks the user, sends message to the server bot-mod logs(not to be confused with mod logs)",
bot:"Kick, Embed Links",
user:"Kick",
usage:"kick <userid/name/mention> [reason]",
example:"kick Stickman Testing",
explain:"Kicks the user **Stickman**, with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was kicked! 🔨:$authoravatar}{description:<@$authorid> kicked <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$kick[$get[user];$get[reason]]
$sendmessage[{author:🔨Kick!🔨}{title:$usertag[$get[user]] was kicked in $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{timestamp}{color:FF0000}{thumbnail:$useravatar[$get[user]]};no]
$wait[0.1s]
$senddm[$get[user];{author:🔨Kick!🔨}{title:You were kicked in server $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{timestamp}{color:FF0000}{thumbnail:$authoravatar}]
$onlybotperms[kick;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Kick\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot kick the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot kick myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[2]==];true;No reason was specified.];false;$messageslice[1]]]
$onlyif[$message[1]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]kick <userid/name/mention> [reason]\`\`\`}{color:FF0000}]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:FF0000}]`})