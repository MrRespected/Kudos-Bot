module.exports = [{
name:"lock",
type:"awaitedCommand",
code:`$sendmessage[{author:Server Lockdown:$useravatar[$clientid]}{description:The whole server is under **:lock: Lockdown :lock:**!\n\n**Reason#COLON#** $replacetext[$replacetext[$checkcondition[$message==];true;None];false;$message]}{color:FF0000}{thumbnail:$servericon}{footer:Locked by $usertag:$authoravatar};no]
$modifychannelperms[$channelid;-sendmessages;$guildid]
$suppresserrors[]`}]