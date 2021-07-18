module.exports = ({
name:"add-money-role",
aliases:"add-role",
category:"Economy",
explanation:"Give money to every user who has the provided role!",
bot:"Embed Links",
user:"Manage Server",
usage:"add-money-role <bank/money> <role> <amount>",
example:"add-money-role money Members 1000",
explain:"Gives 1000 money to all the users in the role Members!",
code:`$foreachmember[givemoney]
Executing the command, will send message if a user is not been given money due to being blacklisted.
$onlyif[$roleexists[$findrole[$message[2]]]==true;{description:Role not found!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$message[3]]
$onlyif[$replacetext[$replacetext[$get[var];money;;1];bank;;1]==;{description:Enter either **bank** or **money** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})