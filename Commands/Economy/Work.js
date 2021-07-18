module.exports = ({
name:"work",
aliases:"job",
category:"Economy",
explanation:"Go to work and earn some money!",
bot:"Embed Links",
user:"None",
usage:"work",
example:"work",
explain:"You go to work and get random money from the amounts set in the server!",
code:`$author[You went to work!;$authoravatar]
$description[$replacetext[$replacetext[$randomtext[$joinsplittext[;]];{amount};$getservervar[symb] $get[amount]];{user};$username] $getservervar[symb]]
$textsplit[$getservervar[work_msges];/]
$color[RANDOM]
$setuservar[money;$sum[$getuservar[money];$get[amount]]]
$footer[You earnt: $get[amount], and now your current balance is $sum[$getuservar[money];$get[amount]];$useravatar[$clientid]]
$addtimestamp
$cooldown[$replacetext[$replacetext[$checkcondition[$hasperms[$authorid;manageserver]==true];true;1s];false;$getservervar[work_cd]];Woah I know you need your income, but please wait for **%time%** before working again, else the other employees might be broke!]
$let[amount;$random[$splittext[1];$splittext[2]]]
$textsplit[$getservervar[work_amounts];/]
$onlybotperms[embedlinks;I do not have the \`Embed Links\` permissions to execute this!]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyif[$getservervar[work_msges]!=;{description:The work module is not yet set up!}{color:FF0000}]`})