module.exports = ({
name:"bot-logs",
aliases:"bl",
category:"Mod",
explanation:"Set the server's bot logs. **All** moderation actions taken through the bot are sent there.",
user:"Manage Server",
bot:"Embed Links",
usage:"bot-logs <channel>",
example:"bot-logs #logging",
explain:"Sets the server bot logs to #logging, all moderator command actions send a message there.",
code:`$if[$message==reset]
I successfully **reset** the server bot logs!
$setservervar[bl;]
$elseif[$serverchannelexists[$findchannel[$message[1];no]]==true]
I successfully set <#$findchannel[$message[1];no]> as the bot logs!
$setservervar[bl;$findchannel[$message[1];no]]
$endelseif
$else
Enter either **reset** or enter a valid channel!
$endif
$onlybotperms[embedlinks;{description:I need the \`Embed Links\` permissions for the execution of this!}{color:FF0000}]
$onlyif[$message!=;{description:Enter something! Reset to reset, or a valid channel to set!}{color:FF0000}]
$onlyperms[manageserver;{description:You require the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})