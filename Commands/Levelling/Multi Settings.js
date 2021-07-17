module.exports = ({
name:"multi-settings",
category:"Levelling",
explanation:"Get a channel multiplier!",
bot:"None",
user:"None",
usage:"multi-settings [channel]",
example:"multi #secret-channel",
explain:"Gets the multiplier of the channel #secret-channel!",
code:`$sendmessage[{author:Multiplier for $channelname[$get[c]]:$servericon}{description:<#$get[c]>\n> **$getchannelvar[multi;$get[c]]x** is the multiplier of the requested channel!}{color:RANDOM}{footer:Requested By $usertag:$authoravatar};no]
$let[c;$mentionedchannels[1;yes]]
$cooldown[5s;Woah wait for **%time%** to execute this again!]`})