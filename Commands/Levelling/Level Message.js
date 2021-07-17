module.exports = ({
name:"lmsg",
aliases:"level-msg",
category:"Levelling",
explanation:"Add a level message for a specific level!",
bot:"Embed Links",
user:"Manage Server",
usage:"lmsg <add/remove> <level> <message>",
example:"lrole add 1 You took your first steps to levelling up!",
explain:"Sends the message **You took your first steps to levelling up!** when someone reaches level 1!",
code:`$if[$message[1]==add]
$setservervar[lmsges;$getservervar[lmsges]$messageslice[2]/]
$setservervar[lmsgorder;$getservervar[lmsgorder]$message[2]/]
$customemoji[verify] Added the message to the level **$message[2]**!
$onlyif[$message[3]!=;Enter a message too!]
$onlyif[$findtextsplitindex[$message[2]]==0;That message is already in the level messages!]
$onlyif[$isnumber[$message[2]]==true;Enter a valid level!]
$textsplit[$getservervar[lmsgorder];/]
$elseif[$message[1]==remove]
$setservervar[lmsges;$replacetext[$getservervar[lmsges];$advancedtextsplit[$getservervar[lmsges];/;$findtextsplitindex[$message[2]]];;1]]
$setservervar[lmsgorder;$replacetext[$getservervar[lmsgorder];$splittext[$findtextsplitindex[$message[2]]];;1]]
$customemoji[verify] Successfully removed the message for the level **$message[2]**!
$onlyif[$findtextsplitindex[$message[2]]!=0;That level message does not exist!]
$onlyif[$isnumber[$message[2]]==true;Enter a valid level!]
$textsplit[$getservervar[lmsgorder];/]
$endelseif
$else
Enter either **add** or **remove** in the first argument!
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})