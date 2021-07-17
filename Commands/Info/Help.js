module.exports = ({
name:"help",
category:"Info",
explanation:"Just 1 Word - HELP!",
user:"None",
bot:"Embed Links",
usage:"help",
example:"help",
explain:"Gives all categories of the bot, click the appropriate emoji for info on the given category!",
code:`$sendmessage[{author:Help Is Approaching!:$authoravatar}{title:You asked, and im here. Here is a list of all 9 categories and $commandscount commands for you!}{field:$replacetext[$customemoji[$getvar[emod]];:;#COLON#] **Moderation Commands#COLON# $get[mc]** $replacetext[$customemoji[$getvar[emod]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Mod").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[efun]];:;#COLON#] **Fun Commands#COLON# $get[fc]** $replacetext[$customemoji[$getvar[efun]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Fun").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[eeconomy]];:;#COLON#] **Economy Commands#COLON# $get[ec]** $replacetext[$customemoji[$getvar[eeconomy]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Economy").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[erole]];:;#COLON#] **Reaction-Roles Commands#COLON# $get[rc]** $replacetext[$customemoji[$getvar[erole]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "RR").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[elevelling]];:;#COLON#] **Levelling Commands#COLON# $get[lc]** $replacetext[$customemoji[$getvar[elevelling]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Levelling").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[ewelcome]];:;#COLON#] **Welcome Commands#COLON# $get[wc]** $replacetext[$customemoji[$getvar[ewelcome]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Welcome").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[eutility]];:;#COLON#] **Utility Commands#COLON# $get[uc]** $replacetext[$customemoji[$getvar[eutility]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Utility").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[einfo]];:;#COLON#] **Information Commands#COLON# $get[fc]** $replacetext[$customemoji[$getvar[einfo]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Info").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{field:$replacetext[$customemoji[$getvar[eticket]];:;#COLON#] **Ticketting Commands#COLON# $get[tc]** $replacetext[$customemoji[$getvar[eticket]];:;#COLON#]:\`\`\`$getservervar[prefix]$djsEval[client.bot_commands.filter(x=>x.category == "Ticket").map(x=>x.name).join(", $getservervar[prefix]");yes]\`\`\`}{color:RANDOM}{footer:Help requested by $usertag | Bot by $usertag[$botownerid]:$authoravatar};no]
$let[ec;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Economy").map(x=>x.name).join(", ");yes]; ]
$let[ic;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Info").map(x=>x.name).join(", ");yes]; ]
$let[mc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Mod").map(x=>x.name).join(", ");yes]; ]
$let[fc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Fun").map(x=>x.name).join(", ");yes]; ]
$let[uc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Utility").map(x=>x.name).join(", ");yes]; ]
$let[wc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Welcome").map(x=>x.name).join(", ");yes]; ]
$let[lc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Levelling").map(x=>x.name).join(", ");yes]; ]
$let[rc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "RR").map(x=>x.name).join(", ");yes]; ]
$let[tc;$gettextsplitlength]
$textsplit[$djsEval[client.bot_commands.filter(x=>x.category == "Ticket").map(x=>x.name).join(", ");yes]; ]
$onlybotperms[embedlinks;I do not have permissions to embed links!]
$cooldown[3s;Woah there chill, you need to wait **%time%%**!]`})