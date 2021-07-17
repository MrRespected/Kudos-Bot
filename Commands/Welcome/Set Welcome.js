module.exports = ({
name:"welcome",
aliases:"set-welcome",
category:"Welcome",
explanation:"Set a server's welcome system. Placeholders: Visit https://aoi.leref.ga",
bot:"Embed Links",
user:"Manage Server",
usage:"welcome <#channel> <welcome code. This will be eval-ed by the bot, visit https://aoi.leref.ga to know what you could use!>",
example:"welcome #welcome $author[$usertag just joined!] $description[Welcome to **$servername**! Have fun :D]",
explain:"Sets a welcome message as **username+discriminator just joined!** and the description is **welcome to the name+of+the+server! Havw fun :D**! The $servername and $usertag will be replaced respectively.",
code:`$if[$message!=disable]
Successfully set the welcome system!
$setservervar[wmessage;$messageslice[1]]
$setservervar[wchannel;$findchannel[$message[1];no]]
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;Eyo, u cant try to set a variable value here, get the client's token, eval something in djs/aoi.js or anything that is dangerous for me! Dont be cheeky xD!]
$onlyif[$serverchannelexists[$findchannel[$message[1];no]]==true;{description:Enter either "same" or mention an actual channel!}{color:FF0000}]
$onlyif[$message[2]!=;{field:Invalid Syntax Used!:> \`\`\`fix
> $getservervar[prefix]welcome disable/<channel> <message>\`\`\`}{color:FF0000}]
$else
$setservervar[wmessage;]
$setservervar[wchannel;]
Successfully disabled the welcome system!
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})
