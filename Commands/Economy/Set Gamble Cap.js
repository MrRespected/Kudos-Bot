module.exports = ({
name:"bet-setup",
aliases:"gamble-setup",
category:"Economy",
explanation:"Set a server's chicken cost, cock fight winning chances and max gamble amounts!",
bot:"None",
user:"Manage Server",
usage:"bet-setup <chicken cost> <cock fight winning chance> <max gamble amount in 1 gamble>",
example:"bet-setup 1000 50 100000",
explain:"Sets the chicken cost to 1000, 50% chance on the first cf win and 100000 as the max gamble capacity",
code:`$foreachmember[cf]
$setservervar[gc;$message[3]]
$setservervar[cf;$message[2]]
$setservervar[cc;$message[1]]
:white_check_mark: Success! The max chicken cost is **$message[1]**, the chances of winning in the first cf win is **$message[2]%** and **$message[3]** is the gamble capacity! $getservervar[symb]
$onlyif[$checkcondition[$message[2]>=20]$checkcondition[$message[2]<=80]==truetrue;{description:Can have a maximum of **80%** and minimum **20%** CF winning chance!}{color:FF0000}]
$onlyif[$checkcontains[$message[1]$message[2]$message[3];-]==false;{description:Do not enter negative values!}{color:FF0000}]
$onlyif[$isnumber[$message[1]$message[2]$message[3]]==true;{description:Not valid numbers!}{color:FF0000}]
$onlyif[$message!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]bet-setup <chicken cost> <cf winning chance> <max gamble amount>\`\`\`}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})