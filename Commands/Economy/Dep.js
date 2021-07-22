module.exports = ({
name:"dep",
aliases:"deposit",
category:"Economy",
explanation:"Deposit money into your bank!",
bot:"Embed Links",
user:"None",
usage:"dep <amount>",
example:"dep 1000",
explain:"Deposit 1000 into your bank!",
code:`I deposited **$get[amount]** $getservervar[symb] money into your $getservervar[bs] bank!\n\nYou have **$getuservar[money]** $getservervar[symb] money, and **$getuservar[bank]** in your $getservervar[bs] bank!$setuservar[bank;$sum[$getuservar[bank];$get[amount]]]
$setuservar[money;$sub[$getuservar[money];$get[amount]]]
$onlyif[$sum[$getuservar[bank];$get[amount]]<=$getservervar[bc];{description:Cannot hold more than **$getservervar[bc]** in your bank!}{color:FF0000}]
$onlyif[$get[amount]!=0;{description:Cannot dep 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot dep negative amounts!}{color:FF0000}]
$onlyif[$getuservar[money]>=$get[amount];{description:You do not have that much to dep!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getUserVar[money;$authorID];1];max;$getUserVar[money;$authorID];1]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})
