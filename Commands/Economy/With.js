module.exports = ({
name:"with",
aliases:"withdraw",
category:"Economy",
explanation:"Withdraw money from your bank!",
bot:"Embed Links",
user:"None",
usage:"with <amount>",
example:"with 1000",
explain:"Withdraw 1000 from your bank!",
code:`I withdrew $getservervar[bs] **$get[amount]** money to your wallet!\n\nYou have $getservervar[symb] **$getuservar[money]** money, and $getservervar[bs] **$getuservar[bank]** in your bank!
$setuservar[bank;$sub[$getuservar[bank];$get[amount]]]
$setuservar[money;$sum[$getuservar[money];$get[amount]]]
$onlyif[$get[amount]!=0;{description:Cannot withraw 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot withdraw negative amounts!}{color:FF0000}]
$onlyif[$getuservar[bank]>=$get[amount];{description:You do not have that much to withdraw!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[bank;$authorID];1];max;$getUserVar[bank;$authorID];1]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})
