module.exports = [{
name:"mid",
type:"awaitedCommand",
code:`$channelsendmessage[$channelid;$customemoji[Yay] Successfully set-up RR for the message **$nomentionmessage**! Use **$getservervar[prefix]add-rr** to add more roles!;no]
$addmessagereactions[$mentionedchannels[1;yes];$nomentionmessage;$joinsplittext[;]]
$removesplittextelement[$gettextsplitlength]
$suppresserrors
$textsplit[$getservervar[cemoji];.]
$setmessagevar[role;$getservervar[crole];$nomentionmessage]
$setmessagevar[emoji;$getservervar[cemoji];$nomentionmessage]
$setmessagevar[orole;$getservervar[corole];$nomentionmessage]
$setmessagevar[brole;$getservervar[cbrole];$nomentionmessage]
$onlyif[$getmessagevar[role;$nomentionmessage]==;That message has RRs already!]
$onlyif[$messageexists[$mentionedchannels[1;yes];$nomentionmessage]==true;Did not find a message with the ID **$nomentionmessage** in <#$mentionedchannels[1;yes]>!]`}]