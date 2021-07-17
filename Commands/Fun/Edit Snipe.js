module.exports = ({
name:"esnipe",
category:"Fun",
explanation:"Get The Last Edited Message Of The Channel!",
bot:"Embed Links",
user:"None",
usage:"esnipe [channel]",
example:"esnipe",
explain:"Shows the last edited message in the current channel",
code:`$author[$usertag[$getchannelvar[esnipea;$get[channel]]];$useravatar[$getchannelvar[esnipea;$get[channel]]]]
$description[$getchannelvar[esnipem;$get[channel]]]
$footer[Edit-Sniped By $usertag;$authoravatar]
$color[RANDOM]
$onlyif[$getchannelvar[esnipem;$get[channel]]!=;No message since the time I joined the server has been edited in <#$get[channel]> :eyes:]
$let[channel;$mentionedchannels[1;yes]]
$onlyif[$replacetext[$replacetext[$hasperms[$authorid;manageserver];false;$checkcontains[$userroles[$authorid;ids;/];$joinsplittext[;]]];true;true]==true;{description:You do not have the necessary roles to execute this!}{color:FF0000}{delete:4s}]
$textsplit[$getservervar[snipe_roles];/]`})