module.exports = ({
name:"$alwaysExecute",
code:`$if[$sum[$getuservar[xp];$multi[$randomtext[2;3;4;2;2;3];$getchannelvar[multi]]]>$getuservar[req]]
$suppresserrors
$giverole[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$get[l]]==0];true;$clientid];false;$authorid];$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$get[l]]!=0];true;$advancedtextsplit[$getservervar[lrole];/;$findtextsplitindex[$get[l]]]];false;$highestrole[$clientid]]]
$textsplit[$getservervar[lroleorder];/]
$suppresserrors
$channelsendmessage[$replacetext[$replacetext[$checkcondition[$getservervar[lchannel]==same];true;$channelid];false;$getservervar[lchannel]];$replacetext[$replacetext[$getservervar[lping];yes;<@$authorid>];no;]{author:And someone just levelled up!:$authoravatar}{title:$username advanced to level $get[l]!}{description:$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$get[l]]==0];true;$getservervar[lmsg]];false;$advancedtextsplit[$getservervar[lmsges];/;$findtextsplitindex[$get[l]]]];{user};$username];{level};$get[l]];{mention};<@$authorid>]}{color:RANDOM}{image:https#COLON#//api.avux.ga/welcomer?avatar=$replacetext[$authoravatar;.webp;.png]&username=$replacetext[$username; ;+]&discrim=$discriminator&title=Level+Up!&message=Is+Now+Level+$getuservar[level]!+GG!&background=https://media.discordapp.net/attachments/854002520887525406/856051975325614100/d0a8cbae0698b19dfbc7e41e55c38463.png&color=00FF00&border=FFFFFF}{footer:New Req#COLON# $getuservar[req]! Good luck levelling!}{timestamp};no]
$setuservar[level;$sum[$getuservar[level];1]]
$setuservar[xp;0]
$setuservar[req;$truncate[$sum[$getuservar[req];$divide[$getuservar[req];2]]]]
$let[l;$sum[$getuservar[level];1]]
$textsplit[$getservervar[lmsgorder];/]
$else
$setuservar[xp;$truncate[$sum[$getuservar[xp];$multi[$randomtext[2;3;4;2;2;3];$getchannelvar[multi]]]]]
$endif
$onlyif[$getservervar[lmsg]!=;]`})
