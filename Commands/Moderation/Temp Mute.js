module.exports = ({
name:"tempmute",
aliases:"tm",
category:"Mod",
explanation:"Gives the server's **Mute** role to the user for the specified time. Only for people with **Manage Roles** permissions.",
user:"Manage Roles",
bot:"Manage Roles, Embed Links",
usage:"tempmute <userid/name/mention> <time> [reason]",
example:"tempmute Stickman 1m Testing",
explain:"Temporarily mutes the user **Stickman**, with the reason **Testing**, for 1 minute.",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user's temp-mute expired!:$authoravatar}{description:<@$authorid> temp-muted <@$get[user]> $get[time] ago, due to **$get[reason]**! The time has expired, and the user is now unmuted.\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$takerole[$get[user];$get[role]]
$sendmessage[<@$authorid>{author:Time up!}{title:I successfully unmuted $usertag[$get[user]]}{description:[Jump to original command message](https://discord.com/channels/$guildid/$channelid/$messageid)}{field:Issuer:<@$authorid>:no}{field:Time for Mute:$get[time]}{field:Reason:Mute Time Over}{timestamp}{color:GREEN};no]
$senddm[$get[user];{author:Unmuted!}{title:Your temp-mute in $servername has expired!}{field:Issuer:<@$authorid>:no}{field:Time for Mute:$get[time]}{field:Reason:Time out!}{timestamp}{footer:Feel free to start chatting now!}{color:RED}]
$onlyif[$hasrole[$get[user];$get[role]]==true;]
$wait[$get[time]]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was temp-muted!:$authoravatar}{description:<@$authorid> temp-muted <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:The user will be unmuted in $get[time] | $username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$giverole[$get[user];$get[role]]
$sendmessage[{author:Success!}{title:I successfully temp-muted $usertag[$get[user]]}{field:Issuer:<@$authorid>:no}{field:Time for Mute:$get[time]}{field:Reason:$get[reason]}{timestamp}{color:RED};no]
$senddm[$get[user];{author:Temp-Muted!}{title:You were temporarily muted in $servername!}{field:Issuer:<@$authorid>:no}{field:Time for Mute:$get[time]}{field:Reason:$get[reason]}{timestamp}{color:RED}]
$onlybotperms[manageroles;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Roles\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot mute the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot mute myself!}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$get[time];s;;1];m;;1];h;;1];d;;1]]==true;Not a valid duration!]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$onlyif[$roleexists[$get[role]]==true;{description:The mute role of the guild either does not exist, or has been deleted. Please make another one or set the mute role by using 
> \`\`\`fix
$getservervar[prefix]set-mute <role>\`\`\`}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[role;$findrole[$getservervar[mrole]]]
$let[time;$message[2]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[3]==];true;No reason was specified.];false;$messageslice[2]]]
$onlyif[$message!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]tempmute <userid/name/mention> <time> [reason]\`\`\`}{color:FF0000}]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]`})