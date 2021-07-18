module.exports = ({
name:"reset-everyone",
aliases:"reset-economy",
category:"Economy",
explanation:"Reset everyone's money, bank or both!",
bot:"Embed Links",
user:"Manage Server",
usage:"reset-everyone <bank/money/all>",
example:"reset-everyone all",
explain:"Resets everyone's bank and money!",
code:`$if[$tolowercase[$message[1]]==bank]
Successfully reset **everyone's** $getservervar[bs] bank balance to **0**!
$resetuservar[bank]
$elseif[$tolowercase[$message[1]]==money]
Successfully reset **everyone's** $getservervar[symb] money to **0**!
$resetuservar[money]
$endelseif
$elseif[$tolowercase[$message[1]]==all]
Successfully reset the **whole** economy system for **everyone**!
$resetuservar[bank]
$resetuservar[money]
$endelseif
$else
Enter either **bank**, **money** or **all**! All resets **bank __and__ money**!
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})