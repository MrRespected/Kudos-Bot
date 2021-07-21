module.exports = ({
name:"reply",
category:"Utility",
explanation:"Reply to a suggestion sent in the server!",
bot:"Embed Links",
user:"Manage Server",
usage:"reply <suggestion number> <accept/consider/deny> [reason]",
example:"reply 1 accept Yeah sure",
explain:"Edits the original suggestion of that number, and DMs the author of the suggestion with the reason **Yeah sure**!",
code:`$editmessage[$get[mid];{author:$usertag[$get[author]]'s Suggestion:$useravatar[$get[author]]}{title:Suggestion #$message[1] $replacetext[$replacetext[$replacetext[$message[2];accept;Accepted;1];deny;Declined;1];consider;Considered] By $usertag}{field:Original Suggestion:$getembed[$getservervar[sch];$get[mid];fvalue]:no}{field:Reason For $replacetext[$replacetext[$replacetext[$message[2];accept;Accepting The Suggestion;1];deny;Declining The Suggestion;1];consider;Considering The Suggestion]:$replacetext[$replacetext[$checkcondition[$message[3]==];true;No Reason Specified By $usertag];false;$messageslice[2]]:no}{timestamp}{thumbnail:$useravatar[$get[user]]}{color:$replacetext[$replacetext[$replacetext[$message[2];accept;00FF00;1];deny;FF0000;1];consider;FFFFFF]};$getservervar[sch]]
$onlyif[$replacetext[$replacetext[$replacetext[$tolowercase[$message[2]];accept;;1];deny;;1];consider;;1]==;{description:Use either **accept**, **deny** or **consider**!}{color:FF0000}]
$senddm[$get[author];Hello! One of your suggestions with the number $message[1] was $replacetext[$replacetext[$replacetext[$message[2];accept;Accepted;1];deny;Declined;1];consider;Considered] by **$usertag**. Below are the details.{author:$usertag[$get[author]]'s Suggestion:$useravatar[$get[author]]}{title:Suggestion #$message[1] $replacetext[$replacetext[$replacetext[$message[2];accept;Accepted;1];deny;Declined;1];consider;Considered] By $usertag}{field:Original Suggestion:$getembed[$getservervar[sch];$get[mid];fvalue]:no}{field:Reason For $replacetext[$replacetext[$replacetext[$message[2];accept;Accepting The Suggestion;1];deny;Declining The Suggestion;1];consider;Considering The Suggestion]:$replacetext[$replacetext[$checkcondition[$message[3]==];true;No Reason Specified By $usertag];false;$messageslice[2]]:no}{field:Link:[Jump To The Suggestion!](https://discord.com/channels/$guildid/$getservervar[sch]/$get[mid]):no}{timestamp}{thumbnail:$useravatar[$get[user]]}{color:$replacetext[$replacetext[$replacetext[$message[2];accept;00FF00;1];deny;FF0000;1];consider;FFFFFF]}]
$sendmessage[{title:Success!}{description:Successfully DMed the user and Edited the suggestion!\n\n[Jump To Suggestion!](https://discord.com/channels/$guildid/$getservervar[sch]/$get[mid])}{color:GREEN};no]
$onlyif[$replacetext[$replacetext[$replacetext[$tolowercase[$message[2]];accept;;1];deny;;1];consider;;1]==;{description:Use either **accept**, **deny** or **consider**!}{color:FF0000}]
$onlyif[$messageexists[$getservervar[sch];$get[mid]]==true;{description:That suggestion has been deleted!}{color:FF0000}]
$let[mid;$advancedtextsplit[$advancedtextsplit[$getservervar[so];/;$message[1]];.;2]]
$let[author;$advancedtextsplit[$advancedtextsplit[$getservervar[so];/;$message[1]];.;1]]
$onlyif[$checkcontains[$advancedtextsplit[$getservervar[so];/;$message[1]];yes]==false;{description:That suggestion has already been replied to!}{color:FF0000}]
$onlyif[$message[2]!=;Enter accept, deny or consider!]
$onlyif[$findtextsplitindex[$message[1]]!=0;{description:Only **$getservervar[sc]** suggestions have been sent!}{color:FF0000}]
$textsplit[$getservervar[no];/]
$onlyif[$isnumber[$message[1]]==true;{description:Not a valid suggestion number!}{color:FF0000}]
$onlyif[$serverchannelexists[$getservervar[sch]]==true;{description:The suggestions module is not yet set up, or the suggestions channel has been deleted!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})