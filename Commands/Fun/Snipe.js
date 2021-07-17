module.exports = ({
name:"snipe",
category:"Fun",
explanation:"Get The Last Deleted Message Of The Channel!",
bot:"Embed Links",
user:"None",
usage:"snipe [channel]",
example:"snipe",
explain:"Shows the last deleted message in the current channel",
code:`$author[$usertag[$getchannelvar[snipea;$get[channel]]];$useravatar[$getchannelvar[snipea;$get[channel]]]]
$description[$getchannelvar[snipem;$get[channel]]]
$footer[Sniped By $usertag;$authoravatar]
$color[RANDOM]
$onlyif[$getchannelvar[snipem;$get[channel]]!=;No message since the time I joined the server has been edited in <#$get[channel]> :eyes:]
$let[channel;$mentionedchannels[1;yes]]
$onlyif[$replacetext[$replacetext[$hasperms[$authorid;manageserver];false;$checkcontains[$userroles[$authorid;ids;/];$joinsplittext[;]]];true;true]==true;{description:You do not have the necessary roles to execute this!}{color:FF0000}{delete:4s}]
$textsplit[$getservervar[snipe_roles];/]`})