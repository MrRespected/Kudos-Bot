module.exports = [{
name:"confirm",
type:"awaitedCommand",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A channel was nuked!:$authoravatar}{description:<@$authorid> nuked the channel with the name $channelname, and the new created channel was <#$splittext[1]>!}{color:FF0000}{footer:$username[$clientid] bot-mod logs}{timestamp}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$channelsendmessage[$splittext[1];{image:https#COLON#//media2.giphy.com/media/oe33xf3B50fsc/200.gif}{author:Nuked by $usertag!:$authoravatar}{color:FF0000}{timestamp};no]
$wait[1s]
$deletechannels[$getservervar[nc]]
$textsplit[$clonechannel[$getservervar[nc];yes]; ]`}]