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
code:`$setservervar[item;$replacetext[$getservervar[item];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[item];~~]
$setservervar[names;$replacetext[$getservervar[names];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[names];~~]
$setservervar[roles;$replacetext[$getservervar[roles];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[roles];~~]
Removed the item **$message**(Role: $rolename[$advancedtextsplit[$advancedtextsplit[$getservervar[roles];~~;$get[i]];.;1]]) from the role shop!
$onlyif[$get[i]!=0;{description:Item not found!}{color:FF0000}]
$let[i;$sum[$findtextsplitindex[$get[item]];1]]
$let[item;$tolowercase[$message]]
$textsplit[$tolowercase[$replacetext[$getservervar[item]~~;heh~~;;1]];~~]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyif[$message!=;{description:Enter the item name!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})