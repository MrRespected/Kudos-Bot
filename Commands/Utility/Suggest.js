module.exports = ({
name:"suggest",
category:"Utility",
explanation:"Suggest something in the server!",
bot:"Embed Links",
user:"None",
usage:"suggest <suggestion>",
example:"suggest Can we have a suggestions system?",
explain:"Sends a message to the suggestions channel, with the message **Can we have a suggestions system?**!",
code:`$senddm[$authorid;{description:Suggestion Successfully Posted Your Suggestion Of **$message** in <#$getservervar[sch]>!\n\n[Jump To Bot Message](https://discord.com/channels/$guildid/$getservervar[sch]/$splittext[1])}{color:YELLOW}{title:Suggestion #$get[sn] Posted}{footer:Use \`$getservervar[prefix]reply $get[sn] <accept/deny/consider> [reason]\` to reply to it!}{timestamp}]
$sendmessage[<@$authorid>, I successfully posted the suggestion, check DMs for details!;no]
$setservervar[sc;$get[sn]]
$setservervar[so;$getservervar[so]$authorid.$splittext[1]/]
$textsplit[$channelsendmessage[$getservervar[sch];{author:$usertag:$authoravatar}{title:Suggestion #$get[sn]}{field:Suggestion:\`\`\`$message\`\`\`:no}{field:Status:\`\`\`Pending\`\`\`:no}{color:RANDOM}{footer:Suggested by $usertag}{timestamp}{thumbnail:$authoravatar}{reactions:$customemoji[verify],$customemoji[cross],$customemoji[shrug]};yes]; ]
$setservervar[no;$getservervar[no]$get[sn]/]
$let[sn;$sum[$getservervar[sc];1]]

$onlyif[$message[5]!=;{description:Enter atleast **5** words!}{color:FF0000}]
$onlyif[$serverchannelexists[$getservervar[sch]]==true;{description:The suggestions module is not yet set up, or the suggestions channel has been deleted!}{color:FF0000}]`})