module.exports = ({
name:"levelling",
aliases:"set-levelling",
category:"Levelling",
explanation:"Set a server's levelling system. Placeholders: {user} - User's name. {level} - New level. {mention} - Mention the user....The message will by default stay in an embed and there will be a ping on level up.",
bot:"Embed Links",
user:"Manage Server",
usage:"levelling <same/#channel> <mention on level up yes/no> <message>",
example:"levelling same yes {mention} is now level {level}!",
explain:"Sets a level message as **@user(mentions the user), you are now level (their new level)!** This message is sent to the current channel, since the first field is **same**. It will mention the user",
code:`$if[$message!=disable]
Successfully set the levelling system!
$setservervar[lmsg;$messageslice[2]]
$setservervar[lping;$message[2]]
$setservervar[lchannel;$replacetext[$replacetext[$checkcondition[$message[1]==same];true;same];false;$findchannel[$message[1];no]]]
$onlyif[$replacetext[$replacetext[$tolowercase[$message[2]];yes;];no;]==;Enter either yes/no in the second argument, which decides whether the user is to be pinged or not!]
$onlyif[$serverchannelexists[$replacetext[$replacetext[$checkcondition[$message[1]==same];true;$channelid];false;$findchannel[$message[1];no]]]==true;{description:Enter either "same" or mention an actual channel!}{color:FF0000}]
$onlyif[$message[3]!=;{description:Invalid syntax! \`\`\`levelling disable/<"same" for the channel the message of the user is sent in, or a valid channel> <ping on levelup> <message>\`\`\`}{color:FF0000}]
$else
$setservervar[lmsg;]
$setservervar[lping;false]
$setservervar[lchannel;]
Successfully disabled the levelling system!
$endif
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})
