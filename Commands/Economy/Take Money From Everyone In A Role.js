module.exports = ({
name:"remove-money-role",
aliases:"remove-role",
category:"Economy",
explanation:"Remove money from every user who has the provided role(Their balance can go negative too, if they have lesser than the given amount)!",
bot:"Embed Links",
user:"Manage Server",
usage:"remove-money-role <bank/money> <role> <amount>",
example:"remove-money-role money Members 1000",
explain:"Removes 1000 money from all the users in the role Members!",
code:`$foreachmember[takemoney]
Executing the command, will send message if a user's money has not been taken due to being blacklisted.
$onlyif[$roleexists[$findrole[$message[2]]]==true;{description:Role not found!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$message[3]]
$onlyif[$replacetext[$replacetext[$get[var];money;;1];bank;;1]==;{description:Enter either **bank** or **money** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})