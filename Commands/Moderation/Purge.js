module.exports = ({
name:"clear",
aliases:"purge",
category:"Mod",
explanation:"A compact function with 3 features -> Clear from everyone, clear from a specific person, clear words containing a specific text. Manage Messages permissions required.",
bot:"Manage Messages",
user:"Manage Messages",
usage:"clear {<amount>} or {<amount> <user>} or {<amount> <word>}",
example:"clear {10} or {10 @stickman} or {10 sus}",
explain:"{Clears 10 messages} or {Clears all scanned messages from the last 10 messages in the channel from the user @Stickman} or {Clears all messages from the last 10 messages of the channel which contain the word sus}",
code:`$if[$isnumber[$message]==true]
$sendmessage[I purged **$sub[$clear[$sum[$message[1];1];everyone;$channelid;yes];1]** messages from this channel!{delete:3s};no]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user purged messages!:$authoravatar}{description:<@$authorid> purged **$message[1]**, messages from <#$channelid>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$elseif[$checkcondition[$isnumber[$message[1]]==true]$checkcondition[$memberexists[$findmember[$message[2];no]]==true]==truetrue]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user purged messages!:$authoravatar}{description:<@$authorid> purged **$get[msg]**, messages from <@$findmember[$message[2];no]>!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$sendmessage[I purged **$get[msg]** messages from the last **$message[1]** messages in this channel, from the user **$usertag[$findmember[$message[2];no]]**!{delete:3s};no]
$let[msg;$clear[$sum[$message[1];1];$findmember[$message[2];no];$channelid;yes]]
$endelseif
$elseif[$checkcondition[$isnumber[$message[1]]==true]$checkcondition[$message[2]!=]]
$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user purged messages!:$authoravatar}{description:<@$authorid> purged **all** recent messages from the last **$message[1]** messages in <#$channelid>, containing the text **$message[2]**!\n\n[Jump To Message](https://discord.com/channels/$guildid/$channelid/$messageid)}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$sendmessage[I purged **all** recent messages from the last **$message[1]** messages, containing **$message[2]**!{delete:3s};no]
$let[msg;$removecontains[$channelid;$sum[$message[1];1];$message[2]]]	
$endelseif
$else
You have 3 options! \`$getservervar[prefix]clear {<amount>} or {<amount> <user>} or {<amount> <word>}\`
$endif
$onlybotperms[managemessages;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Messages\`. Permissions not granted, execution cancelled.]
$onlyif[$message[1]>=1;{description:Enter a number greater than 1!}{color:FF0000}]
$onlyif[$isnumber[$message[1]]==true;{description:Enter a valid number of messages!}{color:FF0000}]
$onlyif[$message!=;{field:Invalid Arguments Used! You need atleast 1 argument!:> \`\`\`fix
> $getservervar[prefix]clear #RIGHT_BRACKET#<amount>#LEFT_BRACKET# or #RIGHT_BRACKET#<amount> <user>#LEFT_BRACKET# or #RIGHT_BRACKET#<amount> <word>#LEFT_BRACKET#\`\`\`}{color:FF0000}]
$onlyperms[managemessages;{description:Permissions required for execution of the command#COLON# \`Manage Messages\`. You do not have the necessary permissions!}{color:FF0000}]`})