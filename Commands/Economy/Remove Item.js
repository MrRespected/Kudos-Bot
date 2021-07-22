module.exports = ({
name:"role-shop-remove",
aliases:"shop-remove",
category:"Economy",
explanation:"Remove a role from the role shop!",
bot:"Embed Links",
user:"Manage Server",
usage:"shop-remove <item title>",
example:"shop-remove Testers",
explain:"Removes the testers role from the role shop!",
code:`$setservervar[item;$joinsplittext[~~]]
$removetextsplitelement[$get[i]]
$textsplit[$getservervar[item];~~]
$setservervar[names;$joinsplittext[~~]]
$removetextsplitelement[$get[i]]
$textsplit[$getservervar[names];~~]
$setservervar[roles;$joinsplittext[~~]]
$removetextsplitelement[$get[i]]
$textsplit[$getservervar[roles];~~]
Removed the item **$message**(Role: $replacetext[$replacetext[$checkcondition[$roleexists[$findrole[$advancedtextsplit[$advancedtextsplit[$getservervar[roles];~~;$get[i]];.;1]]]==true];true;$rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[roles];~~;$get[i]];.;1]]];false;Role doesn't exist anymore]) from the role shop!
$onlyif[$get[i]!=0;{description:Item not found!}{color:FF0000}]
$let[i;$sum[$findtextsplitindex[$get[item]];1]]
$let[item;$tolowercase[$message]]
$textsplit[$tolowercase[$replacetext[$getservervar[item]~~;heh~~;;1]];~~]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyif[$message!=;{description:Enter the item name!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})
