module.exports = ({
name:"channel-multi",
aliases:"multi",
category:"Levelling",
explanation:"Set a multiplier for a channel. Original multi is 1x, and people can get 3-8 xp each message, with a cooldown of 7 seconds. Level 1 xp is 100, 2 is 150, 3 is 225 and so on, basically **last level xp+(last level xp/2)**. You can keep 0 to let people get no xp in that channel!",
bot:"Embed Links",
user:"Manage Server",
usage:"multi [channel] <multi>",
example:"multi #secret-channel 3x",
explain:"Enables people to get 3x multi in the #secret-channel!",
code:`Set a **$nomentionmessagex** multi for <#$mentionedchannels[1;yes]>!
$setchannelvar[multi;$nomentionmessage;$mentionedchannels[1;yes]]
$onlyif[$checkcondition[$nomentionmessage>=0]$checkcondition[$nomentionmessage<11]==truetrue;{description:The multi can be lesser than 10 and more than/equal to 0! 0 means no xp for that channel!}{color:FF0000}]
$onlyif[$isnumber[$nomentionmessage]==true;{description:Enter a valid multi amount!}{color:FF0000}]
$onlyif[$nomentionmessage!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]multi [channel] <multi>\`\`\`}{color:FF0000}]
$onlyif[$getservervar[lmsg]!=;{description:The levelling system is **not** enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})