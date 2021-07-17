module.exports = ({
name:"command",
aliases:"cmd",
category:"Info",
explanation:"Get Name, Aliases, Category, Explanation, User Permissions, Bot Permissions, Usage, Example Usage and Usage Explanation of the command.",
user:"None",
bot:"Embed Links",
usage:"command <name>",
example:"command ban",
explain:"Gives all information about the command asked for.",
code:`$reply[$messageid;{title:$tolocaleuppercase[$commandinfo[$message;name]]}{url:$getvar[botinvite]}{author:Command information!:$useravatar[$clientid]}{description:Syntax#COLON# <> are required. [] are optional.}{field:**Aliases#COLON#**:\`\`\`$replacetext[$replacetext[$checkcondition[$commandinfo[$message;aliases]==];true;No aliases for this command];false;$replacetext[$commandinfo[$message;aliases];,;, ]]\`\`\`:no}{field:**Category#COLON#**:\`\`\`$commandinfo[$message;category]\`\`\`:no}{field:**Description#COLON#**:\`\`\`$commandinfo[$message;explanation]\`\`\`:no}{field:**User and Bot permissions#COLON#**:\`\`\`Bot#COLON# $commandinfo[$message;bot]
User#COLON# $commandinfo[$message;user]\`\`\`:no}{field:**Usage and Example#COLON#**:\`\`\`Usage#COLON# $getservervar[prefix]$commandinfo[$message;usage]\`\`\`:no}{field:**Example and Explanation#COLON#**:\`\`\`Example#COLON# $getservervar[prefix]$commandinfo[$message;example]\n$commandinfo[$message;explain]\`\`\`:no}{footer:$username[$clientid] help. Bot by $usertag[$botownerid]}{timestamp}{color:0000FF}{thumbnail:$useravatar[$clientid]};no]
$onlyif[$commandinfo[$message;name]!=;{description:Could not find the command!}{color:FF0000}]
$onlybotperms[embedlinks;I do not have permissions to embed links!]
$cooldown[3s;Woah there chill, you need to wait **%time%%**!]`})