module.exports = ({
name:"rps",
aliases:"rock-paper-scissor",
category:"Economy",
explanation:"Play an RPS game with the bot!",
bot:"Embed Links",
user:"None",
usage:"rps <rock/paper/scissor> <amount>",
example:"rps rock 200",
explain:"RPS's 200, if bot chooses Scissor, you win, if bot chooses Rock, you tie and if bot chooses Paper, you Lose(if the argument chosen is rock)",
code:`$reply[$messageid;{author:RPS Game of $username against $username[$clientid]!}{title:Lets see the results}{field:$username Chose#COLON#:$tolocaleuppercase[$message[1]]:yes}{field:$replacetext[$getservervar[symb];:;#COLON#] Final Result#COLON#:$tolocaleuppercase[$get[m]]:yes}{field:I Chose#COLON#:$randomtext[Rock;Paper;Scissor]:yes}{color:$get[r]}{thumbnail:$authoravatar}{footer:You $get[m], and now have $get[nm]!:$useravatar[$clientid]};yes]
$setuservar[money;$get[nm]]
$suppresserrors[{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]rps <rock/paper/scissor> <amount>\`\`\`}{color:FF0000}]
$let[m;$replacetext[$replacetext[$replacetext[$get[r];FFFF00;tied;1];FF0000;lost];00FF00;won]]
$let[nm;$replacetext[$replacetext[$replacetext[$get[r];FFFF00;$getuservar[money];1];FF0000;$sub[$getuservar[money];$get[a]]];00FF00;$sum[$getuservar[money];$get[a]]]]
$let[r;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$randomText[Rock;Paper;Scissor]$message[1]];rockrock;FFFF00;1];rockpaper;00FF00;1];rockscissor;FF0000;1];paperpaper;FFFF00;1];paperrock;FF0000;1];paperscissor;00FF00;1];scissorscissor;FFFF00;1];scissorrock;00FF00;1];scissorpaper;FF0000;1]]
$onlyif[$replacetext[$replacetext[$replacetext[$tolowercase[$message[1]];rock;;1];paper;;1];scissor;;1]==;{description:Use either **Rock**, **Paper** or **Scissor** in the first argument!}{color:FF0000}]
$onlyif[$get[a]<=$getservervar[gc];{description:The maximum bet capacity is **$getservervar[gc]**!}{color:FF0000}]
$onlyif[$get[a]<=$getuservar[money];{description:Cannot bet more than what you have!}{color:FF0000}]
$onlyif[$isnumber[$get[a]]==true;{description:Enter a valid number in the second argument!}{color:FF0000}]
$let[a;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[2]];k;000;1];m;000000;1];all;$getUserVar[money;$authorID];1];max;$getUserVar[money;$authorID];1]]
$onlyif[$getservervar[gc]!=0;{description:The gamble capacity is not yet set up!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyIf[$message[2]!=;{description:Invalid syntax!\`\`\`$getservervar[prefix]rps <rock/paper/scissor> <amount>\`\`\`}{color:FF0000}]`})