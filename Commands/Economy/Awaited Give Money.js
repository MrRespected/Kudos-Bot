module.exports = [{
name:"givemoney",
type:"awaitedCommand",
code:`$setuservar[$tolowercase[$message[1]];$sum[$getuservar[$tolowercase[$message[1]];$authorID];$message[3]];$authorid]
$onlyif[$hasrole[$authorid;$findrole[$message[2]]]==true;]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;Did not give the money to **$usertag[$authorid]**, since they are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$isbot[$authorid]==false;]`}]