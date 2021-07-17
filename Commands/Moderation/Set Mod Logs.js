module.exports = ({
name:"mod-logs",
aliases:"logging",
category:"Mod",
explanation:"Set the mod logs for the guild!",
user:"Manage Server",
bot:"Embed Links",
usage:"mod-logs <channel>",
example:"mod-logs #logging",
explain:"Sets the server mod logs to #logging, all actions(even the ones not by the bot) will be sent there.",
code:`$if[$message==reset]
I successfully **reset** the server bot logs!
$setservervar[ml;]
$elseif[$serverchannelexists[$findchannel[$message[1];no]]==true]
I successfully set <#$findchannel[$message[1];no]> as the mod logs!
$setservervar[ml;$findchannel[$message[1];no]]
$endelseif
$else
Enter either **reset** or enter a valid channel!
$endif
$onlybotperms[embedlinks;{description:I need the \`Embed Links\` permissions for the execution of this!}{color:FF0000}]
$onlyif[$message!=;{description:Enter something! Reset to reset, or a valid channel to set!}{color:FF0000}]
$onlyperms[manageserver;{description:You require the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})