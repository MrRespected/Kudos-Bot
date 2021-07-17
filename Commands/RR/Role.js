module.exports = [{
name:"r",
type:"awaitedCommand",
code:`$setservervar[crole;$getservervar[crole]$findrole[$message].]
$setuservar[cmid;1]
$textsplit[$sendmessage[$customemoji[$getvar[createrr]] **New Group - Emoji: [Part 2/5]**

Now, please react with the emoji that will give this role, to the message that you sent!;yes]; ]
$onlyif[$roleexists[$findrole[$message]]==true;{description:Invalid role!}{color:FF0000}]`}]