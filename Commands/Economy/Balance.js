module.exports = ({
name:"bal",
aliases:"balance",
category:"Economy",
explanation:"Get the wallet, bank and total money of any user!",
bot:"Embed Links",
user:"None",
usage:"bal [user]",
example:"bal Stickman",
explain:"Gets the wallet, bank and total money of the user **Stickman**!",
code:`$if[$message==]
$author[Balance of $usertag[$get[user]];$useravatar[$get[user]]]
$addfield[Total Money:;:coin: $sum[$getuservar[money;$get[user]];$getuservar[bank;$get[user]]]]
$addfield[Bank:;$getservervar[bs] $getuservar[bank;$get[user]]]
$addfield[Money:;$getservervar[symb] $getuservar[money;$get[user]]]
$thumbnail[$authoravatar]
$footer[Position in leaderboard in terms of Money: $getleaderboardinfo[money;$get[user];user;top] | Position in leader terms of bank: $getleaderboardinfo[bank;$get[user];user;top];$authoravatar]
$color[RANDOM]
$addtimestamp
$let[user;$authorid]
$elseif[$checkcontains[$checkcondition[$isnumber[$message]==true]$checkcondition[$mentioned[1]!=];true]==false]
$suppresserrors[]
$author[Balance of $usertag[$get[user]];$useravatar[$get[user]]]
$addfield[Total Money:;:coin: $sum[$getuservar[money;$get[user]];$getuservar[bank;$get[user]]]]
$addfield[Bank:;$getservervar[bs] $getuservar[bank;$get[user]]]
$addfield[Money:;$getservervar[symb] $getuservar[money;$get[user]]]
$thumbnail[$authoravatar]
$footer[Position in leaderboard in terms of Money: $getleaderboardinfo[money;$get[user];user;top] | Position in leader terms of bank: $getleaderboardinfo[bank;$get[user];user;top] | Requested By $usertag;$authoravatar]
$color[RANDOM]
$addtimestamp
$suppresserrors[]
$let[user;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];yes]]
$suppresserrors[]
$endelseif
$else
$author[Balance of $usertag[$get[user]];$useravatar[$get[user]]]
$addfield[Total Money:;:coin: $sum[$getuservar[money;$get[user]];$getuservar[bank;$get[user]]]]
$addfield[Bank:;$getservervar[bs] $getuservar[bank;$get[user]]]
$addfield[Money:;$getservervar[symb] $getuservar[money;$get[user]]]
$thumbnail[$authoravatar]
$footer[Position in leaderboard in terms of Money: $getleaderboardinfo[money;$get[user];user;top] | Position in leader terms of bank: $getleaderboardinfo[bank;$get[user];user;top] | Requested By $usertag;$authoravatar]
$color[RANDOM]
$addtimestamp
$let[user;$findmember[$message;yes]]
$endif
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})