module.exports = ({
name:"mute-settings",
aliases:"ms",
category:"Mod",
explanation:"Returns the server's mute role.",
user:"Manage Server",
bot:"Embed Links",
usage:"mute-settings",
example:"mute-settings",
explain:"Shows the mute role for the server",
code:`$author[Mute settings of $servername!;$servericon]
$description[<@&$getservervar[mrole]> is the mute role for the server! All mutes and tempmutes assign this role!]
$footer[Requested by $usertag]
$onlyperms[manageserver;{description:Permissions required for execution of the command#COLON# \`Manage Server\`. You do not have the necessary permissions!}{color:FF0000}]`})