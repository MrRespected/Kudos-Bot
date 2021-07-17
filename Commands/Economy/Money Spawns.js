module.exports = ({
name:"spawns",
aliases:"money-spawns",
category:"Economy",
explanation:"Set a server's money spawn",
bot:"None",
user:"Manage Server",
usage:"money-spawns <minimun> <maximum>",
example:"money-spawns 100 200",
explain:"Sets the server's money spawn to enable, and spawns a random amount from 100 to 200 each spawn. Spawn Rate is default to 1 in 20 messages, and cannot be altered(does not mean that every 20 messages a spawn is sent, there is a 1 in 20 chance of the money spawning in any message)",
code:`$if[$message==disable]
Successfully **disabled** the random money spawns!
$setservervar[rs;false]
$else
$setservervar[ra;$message[1]/$message[2]]
$setservervar[rs;true]
I set the random money spawns to enabled! The minimum spawn will be $getservervar[symb] **$message[1]**, and the maximum amount will be **$message[2]**. Use \`$getservervar[prefix]money-spawns-blacklist <channel mentions>\` to blacklist money spawns in certain channels!
$onlyif[$message[1]<$message[2];{description:Enter **2 numbers**, the **greater one being the second argument**, and the **minimum one being the first**!}{color:FF0000}]
$onlyif[$isnumber[$message[1]$message[2]]==true;{description:Enter 2 numbers, or enter disable!}{color:FF0000}]
$endif
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})