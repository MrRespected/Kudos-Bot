module.exports = ({
name:"botinfo",
aliases:['bi','about'],
category:"Info",
explanation:"Get information about the bot!",
bot:"Embed Links",
user:"None",
usage:"about",
example:"about",
explain:"Gets the information and TOS about the bot, includes privacy statements and FAQ too. ",
code:`$author[Information!;$useravatar[$clientid]]
$addfield[**__Invite__**;[Click Here!]($getvar[botinvite]);no]
$addfield[**__More FAQ__**;**Q: Can I be bot banned?**\nNo, we have no such feature of bot banning a user, except economy ban in which a server can ban you.\n\n**Q: My economy balance is in negative!**\nThis can happen due to either the bot breaking and by a chance allowing you to gamble you more than your pocket, and you lose the money(EXTREMELY rare), or the server admins ran the command which reduces balance from everyone/a role/you. This can bring your balance to negative.;no]
$addfield[**__FAQ__**;**Q: The economy commands of this server are not working, they show a message You are blacklisted!**\nThis is the decision of the server's mod/admin team. The bot developer has no relation with blacklist from the economy system of a specific server. You can ask the admins why you were banned, and use \`$getservervar[prefix]help\` for the commands(you can see how you can unblacklist users, and other commands).\n\n**Some commands are not at all responding in the server, including logging.**\nThe only cause for this is the server not having an icon. Upload a server URL to get the commands working!\n\n**The bot is sending random error messages.**;\nWe recommend you to DM the bot owner ASAP. This is an issue of the code, probably because of escaping of chracters.;no]
$addfield[**__Privacy Policy and ToS Of The Bot(subject to change on the decisions of the owner.)__**;**Q: What Data Is Tracked?**\nAll data that is related to the bot is tracked. This means that if you use a command \`$getservervar[prefix]mod-logs #logging\`, we get the info that you have used the mod-logs command in $servername, and we also get to know the channel that you set it to, or the message ahead it. This data is only viewable to the developer. [Preview of the data stored](https://media.discordapp.net/attachments/856948364490964992/858390396156772352/unknown.png)\n\n**Q: Do you store any other data except the image link above?**\nNo, not a bit of any other data is tracked.;no]
$addfield[**__Command Categories__**;Utility, Moderation, Economy, Welcome, Tickets, Reaction Roles, Levelling and Fun]
$addfield[**__No.Of Bot Categories__**;9;yes]
$addfield[**__Commands Count__**;$commandscount;yes]
$addfield[**__AOI.JS Package Version__**;$packageversion;yes]
$addfield[**__DB(Database) Ping__**;$dbping;yes]
$addfield[**__Uptime Since The Last Time The Bot Was Offline__**;$uptime;yes]
$addfield[**__CPU__**;$cpu;yes]
$addfield[**__RAM__**;$ram;yes]
$addfield[**__Ping__**;$ping;yes]
$addfield[**__Contact Owner__**;$getservervar[prefix]report <issue>;yes]
$addfield[**__Owner ID__**;$botownerid;yes]
$addfield[**__Bot Owner__**;$usertag[$botownerid];yes]
$thumbnail[$useravatar[$clientid]]
$footer[The ToS and Privacy Policy are subject to change | The bot information is in the same message, but a bit above | Have fun, stay safe! | Requested by $usertag;$useravatar[$clientid]]
$servercooldown[10s;Woah chill, someone just checked about me sometime back! **%time%** is the time you need to wait for :eyes:]`})
