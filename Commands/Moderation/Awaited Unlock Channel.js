module.exports = [{
name:"unlock",
type:"awaitedCommand",
code:`$sendmessage[{author:Server Unlocked!:$useravatar[$clientid]}{description:The whole server is **:lock: Unlocked :lock:**!\n\n**Reason#COLON#** $replacetext[$replacetext[$checkcondition[$message==];true;None];false;$message]}{color:GREEN}{thumbnail:$servericon}{footer:Unlocked by $usertag:$authoravatar};no]
$editchannel[$channelid;$default;$default;$default;$default;$default;$default;yes]
$suppresserrors[]`}]