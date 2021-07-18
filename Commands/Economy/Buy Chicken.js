module.exports = ({
name:"buy-chick",
category:"Economy",
explanation:"Buy a chicken to cock fight!",
bot:"Embed Links",
user:"None",
usage:"buy-chick [how many]",
example:"buy-chick 2",
explain:"Adds 2 chickens to your variable",
code:`$setuservar[c;$sum[$getuservar[c];$get[am]]]
$setuservar[money;$sub[$getuservar[money];$get[a]]]
:white_check_mark: Success! You purchased **$get[am] chicken(s)**!\n\nYou now have $getservervar[symb] **$sub[$getuservar[money];$get[a]]** in your wallet!
$onlyif[$getuservar[money]>=$get[a];{description:Not enough money to buy **$get[am]** chickens!\n\nYour balance is $getservervar[symb] **$getuservar[money]**, where as **$get[a]** is needed to buy **$get[am]** chickens!}{color:FF0000}]
$onlyif[$get[a]!=0;{description:Cannot buy 0 chickens!}{color:FF0000}]
$let[a;$multi[$get[am];$getservervar[cc]]]
$onlyif[$isnumber[$get[am]]==true;{description:Not a number!}{color:FF0000}]
$let[am;$replacetext[$replacetext[$checkcondition[$message==];true;1];false;$message[1]]]
$onlyif[$getservervar[cc]!=0;{description:The gamble amounts have not yet been set up!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})