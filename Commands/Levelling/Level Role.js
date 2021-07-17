module.exports = ({
name:"lrole",
aliases:"level-role",
category:"Levelling",
explanation:"Add a level role for a specific level!",
bot:"Embed Links",
user:"Manage Server",
usage:"lrole <add/remove> <level> <role>",
example:"lrole add 1 newbie",
explain:"Gives the role newbie to every user who reaches level 1!",
code:`$if[$message[1]==add]
$setservervar[lrole;$getservervar[lrole]$findrole[$message[3]]/]
$setservervar[lroleorder;$getservervar[lroleorder]$message[2]/]
$customemoji[verify] Added the role **$rolename[$findrole[$message[3]]]** to the level **$message[2]**!
$onlyif[$roleexists[$findrole[$message[3]]]==true;That role does not exist!]
$onlyif[$findtextsplitindex[$message[2]]==0;That role is already in the level roles!]
$onlyif[$isnumber[$message[2]]==true;Enter a valid level!]
$textsplit[$getservervar[lroleorder];/]
$elseif[$message[1]==remove]
$setservervar[lrole;$replacetext[$getservervar[lrole];$advancedtextsplit[$getservervar[lrole];/;$findtextsplitindex[$message[2]]];;1]]
$setservervar[lroleorder;$replacetext[$getservervar[lroleorder];$splittext[$findtextsplitindex[$message[2]]];;1]]
$customemoji[verify] Successfully removed the role for the level **$message[2]**!
$onlyif[$findtextsplitindex[$message[2]]!=0;That level role does not exist!]
$onlyif[$isnumber[$message[2]]==true;Enter a valid level!]
$textsplit[$getservervar[lroleorder];/]
$endelseif
$else
Enter either **add** or **remove** in the first argument!
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})