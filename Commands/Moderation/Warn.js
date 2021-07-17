module.exports = ({
name:"warn",
aliases:"w",
category:"Mod",
explanation:"Warn a user. Bot can track a maximum of 25 warnings, after that the warnings wont be tracked into the user's warn count. Kick permissions required.",
bot:"Embed Links",
user:"Kick",
usage:"warn <userid/name/mention> <reason>",
example:"warn Stickman Testing",
explain:"Warns the user **Stickman**, with the reason **Testing**",
code:`$senddm[$get[user];{author:You recieved a warning in $servername!:$servericon}{description:<@$authorid> warned you, due to **$get[reason]**!\n\nYou now have **$get[warns]** warnings!}{color:FF0000}{timestamp}{footer:Issued by $usertag}]
$sendmessage[{author:Warned!}{description:I warned **$usertag[$get[user]]**, due to **$get[reason]**!\n\n<@$get[user]> now has **$get[warns]** warnings!}{color:FF0000}{timestamp}{footer:Issued by $usertag};no]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user was warned!:$authoravatar}{description:<@$authorid> warned <@$get[user]>, due to **$get[reason]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$setuservar[reason;$getuservar[reason;$get[user]]&&($get[warns]) $usertag - $get[reason];$get[user]]
$setuservar[wc;$get[warns];$get[user]]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$get[warns]!=26;{description:Cannot track more than 25 warnings!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot warn a bot!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot warn the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot warn myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[warns;$sum[$getuservar[wc;$get[user]];1]]
$let[user;$findmember[$message[1];no]]
$let[reason;$messageslice[1]]
$onlyif[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]warn <userid/name/mention> <reason>\`\`\`}{color:FF0000}]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:FF0000}]`})