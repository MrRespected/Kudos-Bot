module.exports = ({
name:"tempban",
aliases:"tb",
category:"Mod",
explanation:"Temporarily bans a user for the given time. Ban permissions required for execution.",
bot:"Ban, Embed Links",
user:"Ban",
usage:"tempban <userid/name/mention> <time> [reason]",
example:"tempban Stickman 1h Testing",
explain:"Temporarily bans the user **Stickman** for an hour, with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user's temp-ban expired!:$authoravatar}{description:<@$authorid> temp-banned <@$get[user]> $get[time] ago, due to **$get[reason]**! The time has expired, and the user is now unbanned\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$unban[$get[user]]
$sendmessage[<@$authorid>{author:Time up!}{title:I successfully unbanned $usertag[$get[user]]}{description:[Jump to original command message](https://discord.com/channels/$guildid/$channelid/$messageid)}{field:Issuer:<@$authorid>:no}{field:Time for Ban:$get[time]}{field:Reason:Ban Time Over}{timestamp}{color:GREEN};no]
$senddm[$get[user];{author:Unmuted!}{title:Your temp-ban in $servername has expired!}{description:[Server Invite]($getserverinvite)}{field:Issuer:<@$authorid>:no}{field:Time for Ban:$get[time]}{field:Reason:Time out!}{timestamp}{footer:Feel free to join back now!}{color:RED}]
$onlyif[$isbanned[$get[user]]==true;]
$wait[$get[time]]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was temp-banned! 🔨:$authoravatar}{description:<@$authorid> temp-banned <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:The user will be unbanned in $get[time] | $username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$ban[$get[user];$get[reason];0]
$wait[0.1s]
$sendmessage[{author:Success!}{title:I successfully temp-banned $usertag[$get[user]]}{field:Issuer:<@$authorid>:no}{field:Time for Ban:$get[time]}{field:Reason:$get[reason]}{timestamp}{color:RED};no]
$senddm[$get[user];{author:Temp-Banned!}{title:You were temporarily banned in $servername!}{field:Issuer:<@$authorid>:no}{field:Time for Ban:$get[time]}{field:Reason:$get[reason]}{timestamp}{color:RED}]
$onlybotperms[ban;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Ban\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot ban the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot ban myself!}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$get[time];s;;1];m;;1];h;;1];d;;1]]==true;Not a valid duration!]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[time;$message[2]]
$let[user;$findmember[$message[1];no]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[3]==];true;No reason was specified.];false;$messageslice[2]]]
$onlyif[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]tempban <userid/name/mention> <time> [reason]\`\`\`}{color:FF0000}]
$onlyperms[ban;{description:Permissions required for execution of the command#COLON# \`Ban\`. You do not have the necessary permissions!}{color:FF0000}]`})