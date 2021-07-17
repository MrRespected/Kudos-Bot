module.exports = ({
name:"role-shop-add",
aliases:"shop-add",
category:"Economy",
explanation:"Add a role to the role shop!",
bot:"Embed Links",
user:"Manage Server",
usage:"shop-add <role> | <item ID> | <item description> | <cost>",
example:"shop-add Testers | Testers | Get the testers role here! | 1000",
explain:"Adds the role testers to the role shop, the ID being Testers and description being get the testers role here, and it will be buyable for 1000 money of the bot!",
code:`$setservervar[names;$getservervar[names]~~**Item#COLON#** $get[title]\n**Role#COLON#** <@&$get[role]>\n**Description#COLON#** $get[desc]\n**Cost#COLON#** $get[cost]]
$setservervar[roles;$getservervar[roles]~~$get[role].$get[cost]]
$setservervar[item;$getservervar[item]~~$get[title]]
Added the item to the shop!
$onlyif[$isnumber[$get[cost]]==true;{description:Not a valid cost!}]
$onlyif[$checkcondition[$get[title]!=]$checkcondition[$get[desc]!=]$checkcondition[$get[cost]!=]==truetruetrue;{description:Please enter a title, a description and a cost!}{color:FF0000}]
$onlyif[$roleexists[$get[role]]==true;{description:Role not found!}{color:FF0000}]
$let[cost;$splittext[4]]
$let[desc;$splittext[3]]
$let[title;$splittext[2]]
$let[role;$findrole[$splittext[1]]]
$textsplit[$replacetext[$message; | ;|;1];|]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})
