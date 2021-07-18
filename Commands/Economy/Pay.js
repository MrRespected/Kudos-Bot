module.exports = ({
name:"give",
aliases:"pay",
category:"Economy",
explanation:"Pay money to someone!",
bot:"Embed Links",
user:"None",
usage:"pay <amount> <user>",
example:"pay 1000 Stickman",
explain:"Pay 1000 money to the user Stickman!",
code:`$sendmessage[{author:Success!:$authoravatar}{description:Successfully paid $getservervar[symb] **$get[amount]** to **$usertag[$get[user]]**!\n\nYou now have $getservervar[symb] **$getuservar[money]**, and they have $getservervar[symb] **$getuservar[money;$get[user]]**!}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setuservar[money;$sub[$getuservar[money];$get[amount]]]
$setuservar[money;$sum[$getuservar[money;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot pay 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot pay negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getuservar[money];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[money;$authorID];1];max;$getUserVar[money;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot pay yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})