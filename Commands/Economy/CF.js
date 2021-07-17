module.exports = ({
name:"cf",
aliases:"cock-fight",
category:"Economy",
explanation:"Play an CF(Cock-Fight) game with the bot!",
bot:"Embed Links",
user:"None",
usage:"cf <amount>",
example:"cf 200",
explain:"CF 200, if the random number from 1 and 100 is lesser than your cf chances, you win, else you lose!",
code:`$reply[$messageid;{author:Your lil' chick's fight!}{field:Your little chicken $get[r] the game!:$replacetext[$replacetext[$get[r];lost;Your 🐣 chicken lost the battle, due to which you now have **$get[nm]** money remaining!];won;Your 🐣 chicken won the batte, and now you have **$get[nm]** balance!]:no}{color:$replacetext[$replacetext[$get[r];lost;FF0000];won;GREEN]}{thumbnail:$authoravatar}{footer:Your chances are $replacetext[$replacetext[$get[r];lost;reset to $getservervar[cf]!];won;increased by 1! Current chances#COLON# $getuservar[cf]] 🐣:$useravatar[$clientid]};yes]
$setuservar[money;$get[nm]]
$setuservar[cf;$get[cf]]
$setuservar[c;$replacetext[$replacetext[$checkcondition[$get[p]>=$random[1;111]];false;$sub[$getuservar[c];1]];true;$getuservar[c]]]
$let[cf;$replacetext[$replacetext[$get[r];lost;$getservervar[cf]];won;$sum[$getuservar[cf];1]]]
$let[r;$replacetext[$replacetext[$checkcondition[$get[p]>=$random[1;111]];true;won];false;lost]]
$let[nm;$replacetext[$replacetext[$checkcondition[$get[p]>=$random[1;111]];true;$sum[$getuservar[money];$get[a]]];false;$sub[$getuservar[money];$get[a]]]]
$let[p;$getuservar[cf]]
$onlyif[$get[a]<=$getservervar[gc];{description:The maximum bet capacity is **$getservervar[gc]**!}{color:FF0000}]
$onlyif[$get[a]<=$getuservar[money];{description:Cannot bet more than what you have!}{color:FF0000}]
$onlyif[$isnumber[$get[a]]==true;{description:Enter a valid number in the first argument!}{color:FF0000}]
$let[a;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[money;$authorID];1];max;$getUserVar[money;$authorID];1]]
$onlyIf[$message!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]cf <amount>\`\`\`}{color:FF0000}]
$onlyif[$getuservar[c]!=0;{description:You have no chickens!}{color:FF0000}]
$onlyif[$getservervar[gc]!=0;{description:The gamble capacity is not yet set up!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})