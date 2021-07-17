module.exports = ({
name:"unmute",
aliases:"um",
category:"Mod",
explanation:"Takes the server's **Mute** role from the user. Only for people with **Manage Roles** permissions.",
user:"Manage Roles",
bot:"Manage Roles, Embed Links",
usage:"unmute <userid/name/mention> [reason]",
example:"unmute Stickman Testing",
explain:"Unmutes the user **Stickman**, with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was unmuted!:$authoravatar}{description:<@$authorid> unmuted <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$takerole[$get[user];$get[role]]
$sendmessage[{author:Unmute!}{title:$usertag[$get[user]] was unmuted in $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Role Taken:<@$get[role]>:no}{field:Reason:$get[reason]:no}{footer:They do not have the Muted role anymore!}{color:GREEN}{thumbnail:$useravatar[$get[user]]};no]
$wait[0.1s]
$senddm[$get[user];{author:Unmuted!}{title:You were unmuted in server $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{footer:Have fun chatting again in $servername!}{color:GREEN}{thumbnail:$authoravatar}]
$onlybotperms[manageroles;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Roles\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$hasrole[$get[user];$get[role]]==true;{description:The user is not muted!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot mute the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot mute myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$onlyif[$roleexists[$get[role]]==true;{description:The mute role of the guild either does not exist, or has been deleted. Please make another one or set the mute role by using 
> \`\`\`fix 
> $getservervar[prefix]set-mute <role>\`\`\`}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[role;$findrole[$getservervar[mrole]]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[2]==];true;No reason was specified.];false;$messageslice[1]]]
$onlyif[$message!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]unmute <userid/name/mention> [reason]\`\`\`}{color:FF0000}]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]`})