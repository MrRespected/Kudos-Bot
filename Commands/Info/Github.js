module.exports = ({
name:"source",
aliases:['github','repo','repository'],
category:"Info",
explanation:"Get the open source repo of the bot!",
bot:"Embed Links",
user:"None",
usage:"source",
example:"source",
explain:"Gets the github open source repo of the bot",
code:`$author[Open source repo!;$useravatar[$clientid]]
$description[Hi **$usertag**. I am developed by **$usertag[$botownerid]**. This bot is an open source project made by the original owner of the original **$username[841612776526970922]** bot, and the repository is owned by **$usertag[760504975075180564]**]
$addfield[** **;**__Repo Related:__ [Github Repo](https://github.com/Kudos-Official/Kudos-Bot/) | [Support For Repo](https://discord.gg/5NB8fUYkpW) | [Original Repo Owner's Profile](https://discord.com/users/760504975075180564)\n\n__Related To Me:__ [Support Server]($getvar[support]) | [Invite]($getvar[invite]) | [Developer Profile](https://discord.com/users/$botownerid)**]
$thumbnail[$useravatar[$clientid]]
$footer[The ToS and Privacy Policy are subject to change | The bot information is in the same message, but a bit above | Have fun, stay safe! | Requested by $usertag;$useravatar[$clientid]]
$servercooldown[10s;Woah chill, someone just checked about me sometime back! **%time%** is the time you need to wait for :eyes:]`})
