module.exports = ({
name:"unblacklist-user",
category:"Economy",
explanation:"Unblacklist a user from the economy system.",
bot:"None",
user:"Manage Server",
usage:"unblacklist-user <user>",
example:"unblacklist-user Stickman",
explain:"Un-blacklists Stickman.",
code:`$senddm[$mentioned[1];**$usertag** __unblacklisted__ you from the economy system of **$servername**!]
I un-blacklisted **$usertag[$mentioned[1]]** from the economy system, they can use all commands now!
$setservervar[ru;$replacetext[$replacetext[$getservervar[ru];/$mentioned[1];;1];$mentioned[1];;1]]
$onlyif[$checkcontains[$getservervar[ru];$mentioned[1]]==true;That user is not blackisted!]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone!]
$onlyif[$mentioned[1]!=;{description:Mention 1 user!}{color:FF0000}]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})