module.exports = ({
name:"remove-money",
aliases:"remove",
category:"Economy",
explanation:"Remove money(bank/wallet) from a user!",
bot:"Embed Links",
user:"Manage Server",
usage:"remove-money <bank/money> <user> <amount>",
example:"remove-money money Stickman 1000",
explain:"Removes 1000 money from the user Stickman!",
code:`$setuservar[$get[var];$sub[$getuservar[$get[var];$get[user]];$get[amount]];$get[user]]
Removed $getservervar[symb] **$get[amount]** from the user **$usertag[$get[user]]**!
$onlyif[$get[amount]<=$getuservar[$get[var];$get[user]];{description:User does not have that much to take from!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$message[3]]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyif[$replacetext[$replacetext[$get[var];money;;1];bank;;1]==;{description:Enter either **bank** or **money** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})