module.exports = ({
name:"add-money-everyone",
aliases:"add-everyone",
category:"Economy",
explanation:"Add money to every user!",
bot:"Embed Links",
user:"Manage Server",
usage:"add-money-everyone <bank/money> <amount>",
example:"add-money-everyone money 1000",
explain:"Adda 1000 money to all the users!",
code:`$foreachmember[egivemoney]
Executing the command, will send message if a user is not been given money due to being blacklisted.
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$message[2]]
$onlyif[$replacetext[$replacetext[$get[var];money;;1];bank;;1]==;{description:Enter either **bank** or **money** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})