module.exports = ({
name:"set-start-bal",
aliases:"start-bal",
category:"Economy",
explanation:"Set a default starting balance for a user!",
bot:"None",
user:"Manage Server",
usage:"start-bal <amount>",
example:"start-bal 1000",
explain:"Sets the newly joined user's balance to **1000**!",
code:`$setservervar[sb;$message]
:white_check_mark: Success! Every newly joined user now gets $getservervar[symb] **$message**!
$onlyif[$checkcontains[$message;-]==false;{description:Do not enter negative values!}{color:FF0000}]
$onlyif[$isnumber[$message]==true;{description:Not a number!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})