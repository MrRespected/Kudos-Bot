module.exports = ({
name:"add-money",
aliases:"add",
category:"Economy",
explanation:"Add money(bank/wallet) to a user!",
bot:"Embed Links",
user:"Manage Server",
usage:"add-money <bank/money> <user> <amount>",
example:"add-money money Stickman 1000",
explain:"Gives 1000 money to the user Stickman!",
code:`$setuservar[$get[var];$sum[$getuservar[$get[var];$get[user]];$get[amount]];$get[user]]
Added $getservervar[symb] **$get[amount]** to the user **$usertag[$get[user]]**!
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$message[3]]
$onlyif[$isbot[$get[user]]==false;{description:Cannot add money to a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyif[$replacetext[$replacetext[$get[var];money;;1];bank;;1]==;{description:Enter either **bank** or **money** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})