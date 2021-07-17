module.exports = ({
name:"economy-enable",
aliases:"economy",
category:"Economy",
explanation:"Enable the economy system for the server!",
bot:"None",
user:"Manage Server",
usage:"economy <enable/disable> [maximum bank capacity]",
example:"economy enable 10000",
explain:"Enables economy, and allows users to only keep maximum 10000 in balance(If nothing is entered in the bank capacity argument, default: 1000000)",
code:`$if[$tolowercase[$message[1]]==disable]
$setservervar[e;false]
I **disabled** the economy system for the server!
$elseif[$tolowercase[$message[1]]==enable]
$setservervar[e;true]
$setservervar[bc;$replacetext[$replacetext[$checkcondition[$message[2]==];true;1000000];false;$message[2]]]
I **enabled** the economy system for the server! The maximum bank capacity is **$replacetext[$replacetext[$checkcondition[$message[2]==];true;1000000];false;$message[2]]**!
$onlyif[$isnumber[$replacetext[$replacetext[$checkcondition[$message[2]==];true;1000000];false;$message[2]]]==true;{description:Not a valid bank capacity!}{color:FF0000}]
$endelseif
$else
Enter either **Enable** or **Disable**!
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})