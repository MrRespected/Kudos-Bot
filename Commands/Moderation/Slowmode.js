module.exports = ({
name:"slowmode",
aliases:"sm",
category:"Mod",
explanation:"Set a channel slowmode to the specified time. Manage Channels permissions needed.",
user:"Manage Channels",
bot:"Manage Channels",
usage:"sm <time> [channel]",
example:"sm 1m general",
explain:"Sets a 1 minute slowmode for the channel general.",
code:`$if[$nomentionmessage==reset]
$suppresserrors[Enter a valid duration! Do not enter extra args!]
Successfully **disabled** the slowmode for **$channelname[$mentionedchannels[1;yes]]**!
$slowmode[$mentionedchannels[1;yes];0s]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user disabled slowmode!:$authoravatar}{description:<@$authorid> disabled slowmode from <#$mentionedchannels[1;yes]>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$suppresserrors[Enter a valid duration! Do not enter extra args!]
$else
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user added slowmode for a channel!:$authoravatar}{description:<@$authorid> added a $nomentionmessage slowmode to <#$mentionedchannels[1;yes]>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$suppresserrors[Enter a valid duration! Do not enter extra args!]
$slowmode[$mentionedchannels[1;yes];$nomentionmessage]
Set a **$nomentionmessage** slowmode for **$channelname[$mentionedchannels[1;yes]]**!
$suppresserrors[Enter a valid duration! Do not enter extra args!]
$endif
$suppresserrors[Enter a valid duration! Do not enter extra args!]
$onlybotperms[managechannels;{description:I do not have the required permissions! Required permissions#COLON# \`Manage Channels\`}{color:FF0000}]
$onlyif[$nomentionmessage!=;{description:Enter some time too!}{color:FF0000}]
$onlyperms[managechannels;{description:You do not have the permission \`Manage Channels\` to execute this!}{color:FF0000}]
$suppresserrors[Enter a valid duration! Do not enter extra args!]`})