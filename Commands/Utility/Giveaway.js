module.exports = ({
name:"giveaway",
aliases:['gstart','gw'],
category:"Utility",
explanation:"A giveaway command, which selects 1 winner! Maximum 24 days.",
bot:"Embed Links",
user:"Manage Server",
usage:"gw <channel> <time> <prize>",
example:"gw #test 1m Test Giveaway!",
explain:"Start a giveaway in channel #test, for 1 minute, with the prize as **Test Giveaway!**, selecting 1 winner.",
code:`$editmessage[$get[m];**Giveaway Ended!**{author:This giveaway is over}{description:**Hosted By#COLON#** <@$authorid>\n**Winner#COLON#** <@$get[1]>}{color:RANDOM}{footer:Congrats!}{timestamp}{thumbnail:$servericon};$findchannel[$message[1];no]]
$senddm[$get[1];You have won the giveaway of **$messageslice[2]**!]\nJump To Message: https://discord.com/channels/$guildid/$findchannel[$message[1];no]/$get[m]]
$channelsendmessage[$findchannel[$message[1];no];<@$authorid>, <@$get[1]> has won the giveaway of **$messageslice[2]**!
Jump To Message: https://discord.com/channels/$guildid/$findchannel[$message[1];no]/$get[m];no]
$let[1;$randomtext[$replacetext[$joinsplittext[;];a;;1]]]
$textsplit[$replacetext[$replacetext[a$getreactions[$findchannel[$message[1];no];$get[m];🎉;id];$clientid;;1];a,;;1];,]
$wait[$message[2]]
$let[m;$splittext[1]]
$textsplit[$channelsendmessage[$findchannel[$message[1];no];{author:🎊A new giveaway has started!🎊}{description:**Prize#COLON#** $messageslice[2]\n**Time#COLON#** $message[2]\n**Hosted By#COLON#** <@$authorid>}{color:RANDOM}{timestamp}{footer:Good Luck!}{thumbnail:$servericon}{reactions:🎉};yes]; ]
$onlybotperms[embedlinks;I do not have the \`Embed Links\` permissions to execute this command!]
$onlyif[$serverchannelexists[$findchannel[$message[1];no]]==true;{description:Channel not found!}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[2];s;;1];m;;1];h;;1];d;;1]]==true;{description:Not a valid unit of time!}{color:FF0000}]
$onlyif[$checkcontains[$message[2];s;h;m;d]==true;{description:Try entering valid time unit, such as **s**, **m**, **h** or **d**!}{color:FF0000}]
$onlyif[$message[3]!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]giveaway <channel> <time> <prize>\`\`\`}{color:FF0000}]
$onlyperms[manageserver;{description:You do not have the permissions needed to execute this!}{color:FF0000}]`})