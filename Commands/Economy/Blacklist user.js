module.exports = ({
name:"blacklist-user",
category:"Economy",
explanation:"Blacklist a user from the economy system.",
bot:"None",
user:"Manage Server",
usage:"blacklist-user <user>",
example:"blacklist-user Stickman",
explain:"Blacklists stickman from using any economy command.",
code:`$senddm[$mentioned[1];**$usertag** __blacklisted__ you from the economy system of **$servername**!]
$if[$getservervar[ru]==]
$setservervar[ru;$mentioned[1]]
$else
$setservervar[ru;$getservervar[ru]/$mentioned[1]]
$endif
I blacklisted **$usertag[$mentioned[1]]** from the economy system!
$onlyif[$checkcontains[$getservervar[ru];$mentioned[1]]==false;That user is already blacklisted!]
$onlyif[$mentioned[1;yes]!=$authorid;Mention someone!]
$onlyif[$mentioned[1]!=;{description:Mention 1 user!}{color:FF0000}]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})