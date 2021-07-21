module.exports = ({
name:"$alwaysExecute",
code:`$if[$getuservar[r]!=]
$if[$checkcondition[$ownerid==$authorid]$checkcondition[$roleposition[$highestrole[$clientid]]>=$roleposition[$highestrole[$authorid]]]$checkcondition[$hasperms[$clientid;managenicknames]==true]==falsefalsetrue]
$changenickname[$authorid;$replacetext[$nickname;⟨AFK⟩;]]
$else
$endif
$setuservar[afk_pings;0]
$setuservar[afk_mentions;]
$setuservar[r;]
$setuservar[time;]
$senddm[$authorid;{author:While you were away, you got $getuservar[afk_pings] mentions:$authoravatar}{description:$getuservar[afk_mentions]}{footer:You went afk $parseDate[$sub[$dateStamp;$getUserVar[time]];time] ago}{color:RANDOM}]
$sendmessage[I **disabled** your AFK, **$usertag**! You can check your DMs for a list of pings you recieved!{delete:10s};no]
$else
$endif
$if[$getuservar[r;$mentioned[1]]!=]
$setuservar[afk_pings;$sum[$getuservar[afk_pings;$mentioned[1]];1];$mentioned[1]]
$setuservar[afk_mentions;$getuservar[afk_mentions;$mentioned[1]]\n\n**[$usertag](https://discord.com/channels/$guildid/$channelid/$messageid)**;$mentioned[1]]
$sendmessage[**$usertag[$mentioned[1]]** is AFK!\n\n**Reason:** $getuservar[r;$mentioned[1]]  —   **$parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time]** ago {delete:10s};no]
$else
$endif
$onlyif[$checkcontains[$message[1];$getservervar[prefix]afk;$getservervar[prefix]busy]==false;]`})