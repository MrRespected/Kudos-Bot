module.exports = ({
name:"ban",
aliases:"Banid",
category:"Mod",
explanation:"Usable only if the user and the bot have ban permissions. Sends DM to the user and bans the user, sends message to the server bot-mod logs(not to be confused with mod logs). Deletes the user's messages upto 7 days.",
bot:"Ban, Embed Links",
user:"Ban",
usage:"ban <userid/name/mention> [reason]",
example:"ban Stickman Testing",
explain:"Bans the user **Stickman**, deleting messages from the past 7 days(default) with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was banned! 🔨:$authoravatar}{description:<@$authorid> banned <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:This is a permanent ban | $username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$ban[$get[user];$get[reason];7]
$sendmessage[{author:🔨Ban!🔨}{title:$usertag[$get[user]] was banned in $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{timestamp}{color:FF0000}{thumbnail:$useravatar[$get[user]]};no]
$wait[0.1s]
$senddm[$get[user];{author:🔨Ban!🔨}{title:You were banned in server $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{timestamp}{color:FF0000}{thumbnail:$authoravatar}]
$onlybotperms[ban;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Ban\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot ban the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot ban myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[2]==];true;No reason was specified.];false;$messageslice[1]]]
$onlyif[$message[1]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]ban <userid/name/mention> [reason]\`\`\`}{color:FF0000}]
$onlyperms[ban;{description:Permissions required for execution of the command#COLON# \`Ban\`. You do not have the necessary permissions!}{color:FF0000}]`})