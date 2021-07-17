module.exports = ({
name:"mass-takerole",
aliases:"takerole-everyone",
category:"Mod",
explanation:"Take a role from every user in the server.",
bot:"Manage Roles, Embed Links",
user:"Manage Roles",
usage:"mass-takerole <role name/id/mention>",
example:"mass-takerole Testing",
explain:"Takes the role **Testing** from every member.",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:Mass Role Taking!:$authoravatar}{description:<@$authorid> started a mass role taking, taking the role <@&$findrole[$message]> from everyone!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:RANDOM}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$foreachmember[trole]
$onlybotperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. I do not have the necessary permissions!}{color:FF0000}]
$onlyif[$roleexists[$findrole[$message]]==true;Role not found!]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]`})