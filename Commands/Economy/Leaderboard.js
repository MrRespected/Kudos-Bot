module.exports = ({
name:"lb",
aliases:"leaderboard",
category:"Economy",
explanation:"A leaderboard of the server! Enter **Money** for Money leaderboard, and **Bank** for bank!",
bot:"Embed Links",
user:"None",
usage:"lb <money/bank> [page]",
example:"lb Money 2",
explain:"Shows a leaderboard of the variable Money, page number 2, and 10 people each page",
code:`$author[Leaderboard Page $get[page];$servericon]
$description[$userleaderboard[$replacetext[$replacetext[$get[var];bank;bank;1];money;money;1];asc;\`#{top}\`. **{username}** - $replacetext[$replacetext[$get[var];bank;$getservervar[bs]];money;$getservervar[symb]] {value}\n;10;$get[page]]]
$color[RANDOM]
$thumbnail[$authoravatar]
$footer[Requested by $usertag | Your position: $getleaderboardinfo[$get[var];$authorid;user;top];$authoravatar]
$addtimestamp
$onlyif[$userleaderboard[$replacetext[$replacetext[$get[var];bank;bank;1];money;money;1];asc;\`#{top}\`. {username} - {value} $replacetext[$replacetext[$get[var];bank;$getservervar[bs]];money;$getservervar[symb]]\n;10;$get[page]]!=;{description:No one has more than **0** in the variable **$tolocaleuppercase[$get[var]]**!}{color:FF0000}]
$onlyif[$isnumber[$get[page]]==true;{description:Enter a valid number in the second argument, or leave it blank!}{color:FF0000}]
$let[page;$replacetext[$replacetext[$checkcondition[$message[2]==];true;1];false;$message[2]]]
$onlyif[$replacetext[$replacetext[$get[var];bank;;1];money;;1]==;{description:Enter only **Money** or **Bank** in the first argument!}{color:FF0000}]
$onlyif[$message!=;{description:Enter **Money** or **Bank** in the first argument!}{color:FF0000}]
$let[var;$tolowercase[$message[1]]]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})