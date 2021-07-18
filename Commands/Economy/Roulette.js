module.exports = ({
name:"roulette",
category:"Economy",
explanation:"Play an roulette game with the bot!",
bot:"Embed Links",
user:"None",
usage:"roulette <amount> <red/black>",
example:"roulette 200 black",
explain:"Roulette 200, if the bot and you have the same choice, you win.",
code:`$reply[$messageid;{author:Roulette Game of $username against $username[$clientid]!}{title:Lets see the results}{field:$username Chose#COLON#:$tolocaleuppercase[$get[c]]:yes}{field:$replacetext[$getservervar[symb];:;#COLON#] Final Result#COLON#:You $tolocaleuppercase[$get[m]]:yes}{field:I Chose#COLON#:$tolocaleuppercase[$randomtext[red;black]]:yes}{color:$get[r]}{thumbnail:$authoravatar}{footer:You $get[m], and now have $get[nm]!:$useravatar[$clientid]};yes]
$setuservar[money;$get[nm]]
$let[nm;$replacetext[$replacetext[$get[r];00FF00;$sum[$getuservar[money];$get[a]]];FF0000;$sub[$getuservar[money];$get[a]]]]
$let[m;$replacetext[$replacetext[$get[r];00FF00;won];FF0000;lost]]
$let[r;$replacetext[$replacetext[$replacetext[$replacetext[$randomtext[red;black]$tolowercase[$get[c]];redred;00FF00];blackblack;00FF00];redblack;FF0000];blackred;FF0000]]
$onlyif[$replacetext[$replacetext[$get[c];red;;1];black;;1]==;{description:Use either **Black** or **Red** in the first argument!}{color:FF0000}]
$let[c;$tolowercase[$message[2]]]
$onlyif[$get[a]<=$getservervar[gc];{description:The maximum bet capacity is **$getservervar[gc]**!}{color:FF0000}]
$onlyif[$get[a]<=$getuservar[money];{description:Cannot bet more than what you have!}{color:FF0000}]
$onlyif[$isnumber[$get[a]]==true;{description:Enter a valid number in the second argument!}{color:FF0000}]
$let[a;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[money;$authorID];1];max;$getUserVar[money;$authorID];1]]
$onlyIf[$message[2]!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]roulette <amount> <red/black>\`\`\`}{color:FF0000}]
$onlyif[$getservervar[gc]!=0;{description:The gamble capacity is not yet set up!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})