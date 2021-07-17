module.exports = [{
name:"etakemoney",
type:"awaitedCommand",
code:`$setuservar[$tolowercase[$message[1]];$sub[$getuservar[$tolowercase[$message[1]];$authorID];$message[2]];$authorid]
$deletein[3s]
Took $getservervar[symb] **$message[2]** from **$usertag[$authorid]**
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;Did not give the money to **$usertag[$authorid]**, since they are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$isbot[$authorid]==false;]`}]