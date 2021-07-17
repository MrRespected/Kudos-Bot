module.exports = ({
name:"set-mute",
aliases:"mute-role",
category:"Mod",
explanation:"Sets a server mute role, the default role is named **Muted**. Changes the role assigned on the event of mute to the provided role.",
user:"Manage Server",
bot:"Manage Roles, Embed Links",
usage:"set-mute <roleid/name/mention>",
example:"set-mute Punished",
explain:"Sets the server mute role as the role **Punished**. This role will be assigned on the execution of the mute command.",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:Mute role setup!:$authoravatar}{description:<@$authorid> set the server mute role as <@&$findrole[$message]>**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:RANDOM}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$setservervar[mrole;$findrole[$message]]
$title[Success!]
$description[I successfully set the mute role of the server to <@&$findrole[$message]>!]
$color[FFFF]
$footer[$addtimestamp]
$onlybotperms[manageroles;embedlinks;{description:I need the \`Manage Roles\` and \`Embed Links\` permissions for the execution of this!}{color:FF0000}]
$onlyif[$roleexists[$findrole[$message]]==true;{description:Could not find the role!}{color:FF0000}]
$onlyif[$message!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]set-mute <new role>\`\`\`}{color:FF0000}]
$onlyperms[manageserver;{description:You require the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})