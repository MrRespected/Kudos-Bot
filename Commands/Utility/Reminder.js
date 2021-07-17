module.exports = ({
name:"remind",
aliases:['remind-me','reminder'],
category:"Utility",
explanation:"Sets a reminder for you! DMs if the channel in the first argument does not exist, else sends a message in the channel!",
bot:"Embed Links",
user:"None",
usage:"reminder [channel] <time> <message>",
example:"remind 1m My reminder made a min ago",
explain:"DMs the user in 1 minute, with the message **My reminder made a min ago**.",
code:`$if[$serverchannelexists[$findchannel[$message[1];no]]==true]
$channelsendmessage[$findchannel[$message[1];no];<@$authorid>{author:Reminder!:$useravatar[$clientid]}{title:A reminder made by you $message[2] ago has ended!}{url:https#COLON#//discord.com/channels/$guildid/$channelid/$messageid}{description:\`\`\`$messageslice[2]\`\`\`}{color:RANDOM}{timestamp}{footer:Reminder of $usertag | ID#COLON# $randomstring[5]}{thumbnail:$authoravatar};no]
$wait[$message[2]]
$sendmessage[Alright! I will remind you in the channel <#$findchannel[$message[1];no]>, in **$message[2]**, with the message **$messageslice[2]**!;no]
$onlyif[$message[3]!=;{description:Invalid syntax!\`\`\`$getservervar[prefix] [channel] <time> <message>\`\`\`}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[2];s;;1];m;;1];h;;1];d;;1]]==true;{description:Not a valid unit of time!}{color:FF0000}]
$onlyif[$checkcontains[$message[2];s;h;m;d]==true;{description:Try entering valid time unit, such as **s**, **m**, **h** or **d**!}{color:FF0000}]
$else
$senddm[$authorid;{author:Reminder!:$useravatar[$clientid]}{title:A reminder made by you $message[1] ago has ended!}{url:https#COLON#//discord.com/channels/$guildid/$channelid/$messageid}{description:\`\`\`$messageslice[1]\`\`\`}{color:RANDOM}{timestamp}{footer:Reminder of $usertag | Made in the server $servername}{thumbnail:$authoravatar}]
$wait[$message[1]]
$sendmessage[Alright! I will remind you in DMs, in **$message[1]**, with the message **$messageslice[1]**!;no]
$onlyif[$message[2]!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix] <time> <message>\`\`\`}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[1];s;;1];m;;1];h;;1];d;;1]]==true;{description:Not a valid unit of time!}{color:FF0000}]
$onlyif[$checkcontains[$message[1];s;h;m;d]==true;{description:Try entering valid time unit, such as **s**, **m**, **h** or **d**!}{color:FF0000}]
$endif
$onlyif[$message!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]remind [channel] <time> <message>\`\`\`}{color:FF0000}]
$onlybotperms[embedlinks;I need the \`Embed Links\` permissions to execute this!]`})