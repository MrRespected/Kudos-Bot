module.exports = [{
name:"orole",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;everything;mid;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$if[$mentionedroles[1]==]
$setservervar[corole;a]
$customemoji[$getvar[createrr]] **New Group - Message ID: [Part 5/5]**

**There will be no role required for this RR**. Final step - Please enter the message ID of the message for this RR. Please note that if the message is **not** from this channel, mention the channel and enter the message ID!  
$else
$setservervar[corole;$djseval[let res = mentions.roles.map(x=>x.id)
d.array = res.join(".");yes]]
**New Group - Message ID: [Part 5/5]**

Set the roles required for this RR. Final step - Please enter the message ID of the message for this RR. Please note that if the message is **not** from this channel, mention the channel and enter the message ID!  
$endif`}]