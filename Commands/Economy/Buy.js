module.exports = ({
name:"buy",
aliases:"buy-item",
category:"Economy",
explanation:"Buy an item from the role shop!",
bot:"None",
user:"None",
usage:"buy <item title>",
example:"buy-item Testers",
explain:"Gives the role with the title Testers",
code:`$giverole[$authorid;$get[role]]
$setuservar[money;$sub[$getuservar[money];$get[amount]]]
:white_check_mark: Success! You purchased **$get[item]**, and got the role **$rolename[$get[role]]**!\n\nYou now have $getservervar[symb] **$sub[$getuservar[money];$get[amount]]** in your wallet!
$onlyif[$hasrole[$authorid;$get[role]]==false;{description:You already have that role!}{color:FF0000}]
$onlyif[$getuservar[money]>=$get[amount];{description:You do not have enough money!}{color:FF0000}]
$let[amount;$advancedtextsplit[$advancedtextsplit[$getservervar[roles];~~;$get[i]];.;2]]
$onlyif[$get[role]!=;{description:Item not found!}{color:FF0000}]
$let[role;$advancedtextsplit[$advancedtextsplit[$getservervar[roles];~~;$get[i]];.;1]]
$onlyif[$get[i]!=1;{description:Item not found!}{color:FF0000}]
$let[i;$sum[$findtextsplitindex[$get[item]];1]]
$let[item;$tolowercase[$message]]
$textsplit[$tolowercase[$replacetext[$getservervar[item]~~;heh~~;;1]];~~]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyif[$message!=;{description:Enter the item name!}{color:FF0000}]`})