module.exports = ({
name:"set-suggestions",
aliases:"suggestions",
category:"Utility",
explanation:"Set a server's suggestion channel! All suggestions will be posted there!",
bot:"Embed Links",
user:"Manage Server",
usage:"suggestions <channel>",
example:"suggestions #suggestions",
explain:"Sets the server's suggestions channel to **#suggestions**, and all suggestions would be posted there!",
code:`$if[$message==disable]
$setservervar[sch;]
Successfully disabled suggestions!
$else
$setservervar[sch;$findchannel[$message[1];no]]
I set <#$findchannel[$message[1];no]> as the server's suggestions channel, and all suggestions will be redirected there!
$onlyif[$serverchannelexists[$findchannel[$message[1];no]]==true;{description:Channel not found!}{color:FF0000}]
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})