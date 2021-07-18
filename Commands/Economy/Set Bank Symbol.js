module.exports = ({
name:"set-bank-symbol",
aliases:"bank-symbol",
category:"Economy",
explanation:"Set a server's **Bank** symbol!",
bot:"None",
user:"Manage Server",
usage:"bank-symbol <symbol>",
example:"bank-symbol 🏦",
explain:"Sets the server's bank symbol to **🏦**!",
code:`$if[$message==]
$setservervar[bs;]
I disabled the bank symbol for the server!

Previous Symbol: $getservervar[bs]
$else
$setservervar[bs;$message]
I set **$message** as the server's bank symbol!

Previous Symbol: $getservervar[bs]
$endif
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})