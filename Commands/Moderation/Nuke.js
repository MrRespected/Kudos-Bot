module.exports = ({
name:"nuke",
category:"Mod",
explanation:"Deletes and re-creates the channel. If no channel is specified, then the current channel is nuked.",
bot:"Manage Channels",
user:"Manage Channels",
usage:"nuke [channel]",
example:"nuke",
explain:"Nukes the current channel.",
code:`$reactioncollector[$splittext[1];$authorid;1m;✔️,❌;confirm,deny;{description:Time up!}{delete:2s}]
$textsplit[$sendmessage[{author:Petition to nuke a channel!}{description:<@$authorid>, are you sure that you want to nuke <#$findchannel[$message;yes]>? 
React with ✔️ to confirm
React with :x: to deny}{color:RANDOM}{footer:If you confirm, $channelname[$findchannel[$message;yes]] will be deleted and recreated with all same permissions};yes]; ]
$setservervar[nc;$findchannel[$message;yes]]
$onlybotperms[managechannels;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Channels\`. Permissions not granted, execution cancelled.]
$onlyperms[managechannels;{description:Permissions required for execution of the command#COLON# \`Manage Channels\`. You do not have the necessary permissions!}{color:FF0000}]`})