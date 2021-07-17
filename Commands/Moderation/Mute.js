module.exports = ({
name:"mute",
aliases:"m",
category:"Mod",
explanation:"Give the server's **Mute** role to the user. Only for people with **Manage Roles** permissions.",
user:"Manage Roles",
bot:"Manage Roles, Embed Links",
usage:"mute <userid/name/mention> [reason]",
example:"mute Stickman Testing",
explain:"Mutes the user **Stickman**, with the reason **Testing**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was muted!:$authoravatar}{description:<@$authorid> muted <@$get[user]>, due to **$get[reason]**. They have the role <@&$get[role]>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:This is a permanent mute | $username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$giverole[$get[user];$get[role]]
$sendmessage[{author:Mute!}{title:$usertag[$get[user]] was muted in $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Role Assigned:<@&$get[role]>:no}{field:Reason:$get[reason]:no}{footer:This is a permanent mute, and you need to use a command/manually take their role to unmute them!}{color:RED}{thumbnail:$useravatar[$get[user]]};no]
$wait[0.1s]
$senddm[$get[user];{author:Muted!}{title:You were muted in server $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Reason:$get[reason]:no}{footer:This is a permanent mute, and someone has to use a command/manually take your role to unmute you!}{color:RED}{thumbnail:$authoravatar}]
$onlybotperms[manageroles;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Roles\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot mute the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot mute myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$onlyif[$roleexists[$get[role]]==true;{description:The mute role of the guild either does not exist, or has been deleted. Please make another one or set the mute role by using \`\`\`$getservervar[prefix]set-mute <role>\`\`\`}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[role;$findrole[$getservervar[mrole]]]
$let[reason;$replacetext[$replacetext[$checkcondition[$message[2]==];true;No reason was specified.];false;$messageslice[1]]]
$onlyif[$message!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]mute <userid/name/mention> [reason]\`\`\`}{color:FF0000}]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]`})