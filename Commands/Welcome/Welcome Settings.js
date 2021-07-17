module.exports = ({
name:"welcome-settings",
category:"Welcome",
explanation:"Get your welcome channel and message!",
bot:"Embed Links",
user:"Manage Server",
usage:"welcome-settings",
example:"welcome-settings",
explain:"Get your welcome settings!",
code:`$author[Welcome Settings Of $servername!;$servericon]
$addfield[Welcome Message;$getservervar[wmessage];no]
$addfield[Welcome Channel;<#$getservervar[wchannel]>;no]
$footer[Requested by $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]
$onlyif[$getservervar[wmessage]!=;The welcome module has not been set-up!]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})
