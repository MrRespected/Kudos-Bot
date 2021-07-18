module.exports = ({
name:"set-money-symbol",
aliases:"money-symbol",
category:"Economy",
explanation:"Set a server's **Money** symbol!",
bot:"None",
user:"Manage Server",
usage:"money-symbol <symbol>",
example:"money-symbol 💰",
explain:"Sets the server's money symbol to **💰**!",
code:`$if[$message==]
$setservervar[symb;]
I disabled the money symbol for the server!

Previous Symbol: $getservervar[symb]
$else
$setservervar[symb;$message]
I set **$message** as the server's money symbol!

Previous Symbol: $getservervar[symb]
$endif
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})