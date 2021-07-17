module.exports = [{
name:"armid",
type:"awaitedCommand",
code:`$channelsendmessage[$channelid;$customemoji[yay] Successfully added a role to the message **$nomentionmessage**! Use **$getservervar[prefix]add-rr** to add more roles!]
$addmessagereactions[$mentionedchannels[1;yes];$nomentionmessage;$getservervar[aremoji]]
$setmessagevar[role;$getmessagevar[role;$nomentionmessage]$getservervar[arrole].;$nomentionmessage]
$setmessagevar[emoji;$getmessagevar[emoji;$nomentionmessage]$getservervar[aremoji].;$nomentionmessage]
$onlyif[$getmessagevar[role;$nomentionmessage]!=;That message has no RRs!]
$onlyif[$messageexists[$mentionedchannels[1;yes];$nomentionmessage]==true;That message is not found!]`}]