module.exports = ({
name:"afk",
aliases:"busy",
category:"Utility",
explanation:"Marks you as AFK, aka **Away From Keyboard**!",
bot:"None",
user:"None(Unless the server has AFK requirements set up)",
usage:"afk [reason]",
example:"afk be right back!",
explain:"Sets the user as AFK, and on mention, **be right back!** is shown as a message.",
code:`$sendmessage[$customemoji[$getvar[createrr]] I successfully marked you as **AFK**!

> **Reason Specified By You:** 
$get[reason]{delete:20s};no]
$setuservar[r;$get[reason]]
$if[$checkcondition[$ownerid==$authorid]$checkcondition[$roleposition[$highestrole[$clientid]]>=$roleposition[$highestrole[$authorid]]]$checkcondition[$hasperms[$clientid;managenicknames]==true]==falsefalsetrue]
$changenickname[$authorid;$replacetext[$replacetext[$checkcondition[$charcount[$nickname]<=26];true;⟨AFK⟩ $nickname];false;$nickname]]
$else
$endif
$setuservar[time;$datestamp]
$let[reason;$replacetext[$replacetext[$checkcondition[$message==];true;None];false;$message]]
$onlyif[$getuservar[r]==;{description:You are already AFK!}{color:FF0000}]
$onlyif[$mentioned[1]==;{description:To avoid any troubles, like pings for others when you are afk, mentions are not permitted in an AFK command!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$hasperms[$authorid;manageserver];false;$checkcontains[$userroles[$authorid;ids;/];$joinsplittext[;]]];true;true]==true;{description:You do not have the necessary roles to execute this!}{color:FF0000}{delete:4s}]
$textsplit[$getservervar[afk_roles];/]`})