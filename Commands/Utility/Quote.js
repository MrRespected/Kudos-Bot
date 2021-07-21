module.exports = ({
name:"quote",
category:"Utility",
explanation:"Quotes the given message link/ID! If you use a message ID, please mention the channel where it is from, if it is not from the current channel!",
bot:"Embed Links",
user:"None(Unless the server has AFK requirements set up)",
usage:"quote <message link/id and channel>",
example:"quote 854192131512729610 #bot-commands",
explain:"Shows the message content(embed or message itself) of the message with the ID 854192131512729610, from #bot-commands",
code:`$if[$suppresserrors$hasembeds[$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$advancedtextsplit[$message;/;6]];false;$mentionedchannels[1;yes]];$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$advancedtextsplit[$message;/;7]];false;$nomentionmessage]]$suppresserrors==$suppresserrorstrue$suppresserrors]
> **Message By $usertag[$getmessage[$get[c];$get[m];userID]]**
$author[$getembed[$get[c];$get[m];author]]
$title[$getembed[$get[c];$get[m];title];$getembed[$get[c];$get[m];url]]
$description[$getembed[$get[c];$get[m];description]]
$thumbnail[$getembed[$get[c];$get[m];thumbnail]]
$color[$getembed[$get[c];$get[m];color]]
$footer[$getembed[$get[c];$get[m];footer]]
$let[c;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$advancedtextsplit[$message;/;6]];false;$mentionedchannels[1;yes]]]
$let[m;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$advancedtextsplit[$message;/;7]];false;$nomentionmessage]]
$suppresserrors
$else
$author[$usertag[$get[user]];$useravatar[$get[user]]]
$description[$getmessage[$get[c];$get[m];content]]
$footer[Quoted By $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]
$thumbnail[$useravatar[$get[user]]]
$let[user;$getmessage[$get[c];$get[m];userID]]
$let[c;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$splittext[6]];false;$mentionedchannels[1;yes]]]
$let[m;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$splittext[7]];false;$nomentionmessage]]
$suppresserrors
$endif
$suppresserrors
$onlyif[$messageexists[$get[c];$get[m]]==true;{description:The message with that ID was not found in <#$get[c]>!}{color:FF0000}]
$let[c;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$splittext[6]];false;$mentionedchannels[1;yes]]]
$let[m;$replacetext[$replacetext[$checkcondition[$isvalidlink[$message]==true];true;$splittext[7]];false;$nomentionmessage]]
$onlybotperms[embedlinks;I need the embed link permissions to execute this!]
$textsplit[$message;/]
$onlyif[$message!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]quote <message link/message id and channel>\`\`\`}{color:FF0000}]`})