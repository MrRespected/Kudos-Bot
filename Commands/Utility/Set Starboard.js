module.exports = ({
name:"set-starboard",
aliases:"starboard",
category:"Utility",
explanation:"Set a starboard system, and when more than the given argument star reactions are added, it will post to the starboard channel. ",
bot:"Embed Links",
user:"Manage Server",
usage:"starboard <channel> <req>",
example:"starboard #starboard 3",
explain:"Sets the starboard channel as #starboard, and 3+ star reactions are added, it sends a message to #starboard!",
code:`$if[$message==reset]
$setservervar[schannel;]
$setservervar[sreq;0]
I successfully disabled the starboard system!
$elseif[$checkcondition[$serverchannelexists[$findchannel[$message[1];no]]==true]$checkcondition[$isnumber[$message[2]]==true]==truetrue]
$setservervar[schannel;$findchannel[$message[1];no]]
$setservervar[sreq;$message[2]]
Successfully set starboard channel to <#$findchannel[$message[1];no]>, and the requirement for the message to be posted there is **$message[2]**! :star:
$onlyif[$message[2]>=1;Enter a requirement of 1 or more!]
$endelseif
$else
> Enter either **reset** or mention a valid channel and enter a requirement which is 1 or above!
$endif
$onlybotperms[embedlinks;I do not have permissions to embed links!]
$onlyif[$message!=;> Enter either **reset** or mention a valid channel and enter a requirement which is 1 or above!]
$onlyperms[manageserver;{description:You do not have the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})