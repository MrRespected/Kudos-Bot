module.exports = ({
name:"unban",
aliases:"unbanid",
category:"Mod",
explanation:"Unbans the specified user, only if they are banned. Ban permissions required.",
bot:"Ban, Embed Links",
user:"Ban",
usage:"unban <userid/name/mention>",
example:"unban Stickman",
explain:"Unbans the user **Stickman**, and DMs them if they have a mutual server with the bot.",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was unbanned!:$authoravatar}{description:<@$authorid> unbanned <@$get[user]>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:GREEN}{footer:This is a permanent ban | $username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$unban[$get[user]]
$sendmessage[{author:🔨Unban!🔨}{title:$usertag[$get[user]] was unbanned in $servername!}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{timestamp}{color:GREEN}{thumbnail:$useravatar[$get[user]]};no]
$wait[0.1s]
$senddm[$get[user];{author:🔨Unban!🔨}{title:You were unbanned in server $servername!}{description:[Server Link]($getserverinvite)}{field:Issuer:<@$authorid>:no}{field:Target:<@$get[user]>:no}{timestamp}{color:GREEN}{footer:Have fun being back in the server!}{thumbnail:$authoravatar}]
$onlybotperms[ban;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Ban\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$isbanned[$get[user]]==true;{description:The user is not banned!}{color:GREEN}]
$onlyif[$userexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$finduser[$message;no]]
$onlyif[$message[1]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]unban <userid/name/mention>\`\`\`}{color:FF0000}]
$onlyperms[ban;{description:Permissions required for execution of the command#COLON# \`Ban\`. You do not have the necessary permissions!}{color:FF0000}]`})