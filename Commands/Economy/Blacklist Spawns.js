module.exports = ({
name:"blacklist-spawns",
aliases:"money-spawns-blacklist",
category:"Economy",
explanation:"Blacklist channels for money spawns.",
bot:"None",
user:"Manage Server",
usage:"money-spawns-blacklist <all channel mentions>",
example:"money-spawns-blacklist #general #announcements",
explain:"Blacklists money from spawning in channels #general and #announcements",
code:`$setservervar[rc;$djseval[let res = mentions.channels.map(x=>x.id)
d.array = res.join("/");yes]]
I disable spawn of random money in **$djseval[let res = mentions.channels.map(x=>x.name)
d.array = res.join(", ");yes]**!
$onlyif[$mentionedchannels[1]!=;{description:Mention atleast 1 channel!}{color:FF0000}]
$onlyif[$getservervar[rs]==true;{description:Money spawns are disabled!}{color:FF0000}]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})