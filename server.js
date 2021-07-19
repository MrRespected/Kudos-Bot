const Aoijs = require("aoi.js");
const Discord = require("discord.js");
const bot = new Aoijs.Bot({
    token:"do u think I wont change my token?", //Your original token lol
    prefix:['$username[$clientid]','$getservervar[prefix]'],
})
const buttons = require('discord-buttons')
buttons(bot.client)
const fetch = require('node-fetch');
bot.onMessage();
bot.loadCommands(`./Commands/`)
bot.status({
  text: " $allmemberscount members in $servercount servers!",
  type: "WATCHING",
  time: 12
})
bot.status({
  text: " the command ?help | Ping for server prefix!",
  type: "WATCHING",
  time: 12
})
bot.variables({
  //customize
  join_channel:"",//Channel for bot join and leave
  prefix: "?", //Self Explanatory
  botinvite:"https://discord.com/oauth2/authorize?client_id=841612776526970922&scope=bot&permissions=1544023167", //Change to your bot invite
  support:"https://discord.gg/v48eDDgESa", //Change to your support server
  about:"Hello **$usertag**, I am **$username[$clientid]**, developed by **$usertag[$botownerid]**!\n\nMy prefix here is \`$getservervar[prefix]\`!\nMy main command is **$getservervar[prefix]help**, and there you can recieve a list of all commands!\n\n**Support Server#COLON#** <$getvar[support]>\n**Invite Me#COLON#** <$getvar[botinvite]>\n\n\nHave fun $customemoji[heart]",//Change if you wanna. Even if u dont, remember to change the emojis
  channel:"859606931651690497",//Change to channel for command usage
  //EMOJIS(KEEP ONLY EMOJI NAMES) PLEASE READ THIS ELSE YOU WILL MESS UP LOL
  solve:"",//Emoji for ticket solve
  unsolve:"",//Emoji for ticket unsolve
  modify:"",//Emoji for ticket modify
  rename:"",//Emoji for ticket rename
  addmember:"",//Emoji to add user to ticket
  removemember:"",//Emoji to remove user to ticket
  createrr:"",//Emoji for RR(as in the one sent when someone starts and RR setup, for better message show lol)
  beautiful:"",//Emoji for beautiful: fun command
  bored:"",//Emoji for bored: fun command
  bye:"",//Emoji for bye: fun command
  clap:"",//Emoji for clap: fun command
  cuddle:"",//Emoji for cuddle: fun command
  facepalm:"",//Emoji for facepalm: fun command
  happy:"",//Emoji for happy: fun command
  hug:"",//Emoji for hug: fun command
  kill:"",//Emoji for kill: fun command
  kiss:"",//Emoji for kiss: fun command
  lick:"",//Emoji for lick: fun command
  punch:"",//Emoji for punch: fun command
  slap:"",//Emoji for slap: fun command
  spank:"",//Emoji for spank: fun command
  wanted:"",//Emoji for wanted: fun command
  wasted:"",//Emoji for wasted: fun command
  emod:"",//Emoji for moderation: help command
  efun:"",//Emoji for fun: help command
  eeconomy:"",//Emoji for economy: help command
  erole:"",//Emoji for RR: help command
  elevelling:"",//Emoji for levelling: help command
  ewelcome:"",//Emoji for welcome: help command
  eutility:"",//Emoji for utility: help command
  einfo:"",//Emoji for info: help command
  eticket:"",//Emoji for ticket: help command
  //mute
  mrole:"Muted", //Original Mute Role
  //Warns
  wc:"0",//Warn Count
  reason:"",//Warn Reasons
  //nuke
  nc:"",//Nuke Channel
  //afk
  afk_roles:"",//AFK needed roles
  r:"",//Reason for AFK
  time:"",//Time for AFK
  afk_pings:"0",//Pings count in AFK
  afk_mentions:"",//Mentions by which user in AFK
  //Bot Logs
  bl:"",//Bot Logs channel
  //Economy
  money:"0",//Wallet
  bank:"0",//Bank
  work_msges:"",//Possible work messages
  work_amounts:"",//Possible work amounts
  work_cd:"10m",//Cooldown for work
  symb:":coin:",//Money symbol
  bs:":bank:",//Bank symbol
  sb:"0",//Starting Bal
  sbd:"false",//Starting Claimed or no
  rs:"false",//Random spawns
  ra:"",//Spawn amounts
  rc:"",//Spawn blacklisted channels	
  e:"false",//Economy Enabled Or no
  bc:"1000000",//Maximum bank capacity
  cf:"0",//Cock fight chances
  c:"0",//Chicken count
  cc:"0",//Chicken Cost
  gc:"0",//Max gamble cost for RPS, Roulette and CF
  ru:"",//Blacklisted economy users
  //Suggestions
  sc:"0",//Suggestions channel
  so:"",//Suggestions order
  no:"",//Numbers order
  sch:"",//Suggestions channel
  //Tags
  tags:"",//First message tag
  reply:"",//First message reply
  mtags:"",//Mention message tag
  mreply:"",//Mention message reply
  ctags:"heh",//Contains message tag
  creply:"heh",//Contains message reply
  //Role Shops
  roles:"heh",//Roles
  names:"heh",//Role shop messages
  item:"heh",//Item names
  //Tickets
  tmsg:"",//Ticket Message
  tmid:"",//Ticket Message IDs
  tcat:"",//Ticket Category IDs
  topener:"",//Ticket Opened by
  tsolve:"",//Ticket Solved Or No
  tscript:"",//Transcript
  //Levelling
  lchannel:"",//Levelling channel
  lmsg:"",//Levelling message
  multi:"1",//Channel multi
  xp:"0",//Current XP
  req:"100",//Current req for next level
  level:"0",//Current level
  lroleorder:"",//Level Roles Order
  lrole:"",//Level Roles
  lmsgorder:"",//Level Roles Order
  lmsges:"",//Level Roles
  lping:"false",//Ping on level up
  //RR
  role:"",//Roles
  emoji:"",//Emojis
  orole:"",//Only for role
  brole:"",//Blacklisted roles
  cemoji:"",//Current emoji
  crole:"",//Current role
  corole:"",//Current only for role
  cmid:"",//Current messageid
  cbrole:"",//Current blacklisted role
  arrole:"",//Add RR Role
  aremoji:"",//Add RR emoji
  armid:"",//Add RR messageid
  //Fight
  op:"",//Opponent
  hp:"0",//Hitpoint
  lh:"",//Last Hit By
  fmid:"",//Fight messageid
  //Welcome
  wchannel:"",//Channel
  wmessage:"",//Message
  //Auto Meme
  automeme:"false",//Auto Memes
  //AutoMod
  antispam:"false",//Anti Spam
  pw:"",//Prohibited Words
  caps:"false",//Anti All Caps
  massmention:"false",//Mass Mention
  massemoji:"false",//Mass Emoji
  spammessages:"0",//User Spam Messages
  antilink:"false",//Anti Links
  //Snipe
  esnipea:"",//Edit-Snipe author
  esnipem:"",//Edit-Snipe message
  snipea:"",//Snipe author
  snipem:"",//Snipe message
  snipe_roles:"",//Roles needed to snipe
  //Starboard
  sreq:"0",//Starboard Req
  schannel:"",//Starboard Channel
  smid:"",//Message IDs
  semid:"",//Message to be edited on more reactions
  author:"",//Author of the message
})


//Commands which I was too lazy to file lol
bot.command({
name:"eval",
code:`$eval[$message]
$onlyforids[$botownerid;]`})
bot.command({
name:"update",
code:`$updatecommands
$addcmdreactions[$customemoji[check]]
Success!
$onlyforids[$botownerid;]`})
bot.command({
name:"$alwaysExecute",
code:`$if[$ismentioned[$clientid]==true]
$eval[$getvar[about]]
$cooldown[10s;]
$onlyif[$replacetext[$replacetext[$message;<@$clientid>;];<@!$clientid>;]==;]
$endif
$if[$checkcondition[$commandinfo[$replacetext[$message[1];$getservervar[prefix];;1];name]!=log-channel]$checkcondition[$commandinfo[$replacetext[$message[1];$getservervar[prefix];;1];name]!=eval]$checkcondition[$commandinfo[$replacetext[$message[1];$getservervar[prefix];;1];name]!=]==truetruetrue]
$channelsendmessage[$getvar[channel];{author:My command was used!}{title:$usertag used my command!}{field:User:<@$authorid>:no}{field:Server:$servername($guildid):no}{field:Command Used:$commandinfo[$replacetext[$message[1];$getservervar[prefix];;1];name]:no}{field:Message Ahead:$replacetext[$replacetext[$checkcondition[$replacetext[$message;$message[1];]==];true;None];false;**$replacetext[$message;$message[1];;1]**]:no}{footer:ID#COLON# $authorid}{timestamp}{color:RANDOM}{thumbnail:$authoravatar};no]
$suppresserrors
$onlyif[$splittext[1]==$getservervar[prefix];]
$textsplit[$message[1];]
$endif`})
bot.command({
name:"log-channel",
code:`$setvar[channel;$mentionedchannels[1]]
$onlyif[$mentionedchannels[1]!=;Mention a channel!]
$onlyforids[$botownerid;]`})
bot.joinCommand({
channel:"$getservervar[wchannel]",
code:`$eval[$getservervar[wmessage]]
$if[$getuservar[sbd]==false]
$setuservar[cf;$getservervar[cf]]
$setuservar[bank;$getservervar[sb]]
$setuservar[sbd;true]
$else
$endif`})
bot.onJoined()


bot.botJoinCommand({
channel:"$randomchannelid",
code:`$eval[$getvar[about]]
$channelsendmessage[$getvar[join_channel];{author:New Server Joined}{description:I joined **$servername**($guildid)!}{field:Members Count Of The Server:$memberscount}{field:Owner:$usertag[$ownerid]($ownerid):no}{field:Total Members Count Now:$allmemberscount}{field:Current Server Count:$servercount}{timestamp}{thumbnail:$servericon}{color:GREEN};no]`})
bot.onGuildJoin()
bot.botLeaveCommand({
channel:"$getvar[join_channel]",
code:`$channelsendmessage[$getvar[join_channel];{author:Server Left}{description:I was removed from **$servername**($guildid)!}{field:Members Count Of The Server:$memberscount}{field:Owner:$usertag[$ownerid]($ownerid):no}{field:Total Members Count Now:$allmemberscount}{field:Current Server Count:$servercount}{timestamp}{thumbnail:$servericon}{color:FF0000};no]`})
bot.onGuildLeave()

//Tickets

bot.reactionAddCommand({
channel:"$channelid",
code:`$setchannelvar[topener;$authorid;$splittext[1]]
$setchannelvar[tsolve;false;$splittext[1]]
$textsplit[$newticket[ticket-$username-#$discriminator;<@$authorid>{author:$usertag's ticket!:$authoravatar}{title:Welcome to your ticket!}{description:$replacetext[$advancedtextsplit[$getservervar[tmsg];/;$get[i]];{user};$usertag]}{footer:Opened by $usertag | Ticketing system of $username[$clientid]:$useravatar[$clientid]}{timestamp}{thumbnail:$authoravatar}{color:RANDOM};$advancedtextsplit[$getservervar[tcat];/;$get[i]];yes;An error occurred!]; ]
$djsEval[channel.messages.fetch(message.id).then(d=>d.reactions.resolve("🎫").users.remove(author.id))]
$onlyif[$get[i]!=0;]
$let[i;$findtextsplitindex[$messageid]]
$textsplit[$getservervar[tmid];/]
$onlyif[\`$emojitostring\`==\`🎫\`;]
$onlyif[$getservervar[tmsg]!=;]
$onlyif[$isbot[$authorid]==false;]`})
bot.onReactionAdd()
//Awaited Tickets
bot.awaitedCommand({
name:"solve",
code:`$closeticket[]
$onlyif[$getchannelvar[tsolve]==true;]
$wait[12h]
$editchannel[$channelid;$default;Solved-$username[$getchannelvar[topener]]-#$discriminator[$getchannelvar[topener]];$default;$default;$default;no]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully marked the channel as solved. This ticket will be deleted in 12 hours!}{color:00FF00}{footer:Performed by $usertag};no]
$setchannelvar[tsolve;true]
$onlyif[$getchannelvar[tsolve]==false;This ticket is already solved!]`})

bot.awaitedCommand({
name:"unsolve",
code:`$setchannelvar[tsolve;false]
$editchannel[$channelid;$default;ticket-$username[$getchannelvar[topener]]-#$discriminator[$getchannelvar[topener]];$default;$default;$default;no]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully marked the channel as un-solved! The ticket will not be deleted now!}{color:RED}{footer:Performed by $usertag};no]
$onlyif[$getchannelvar[tsolve]==true;This ticket is already unsolved!]`})

bot.awaitedCommand({
name:"modify",
code:`$reactioncollector[$splittext[1];$authorid;1m;$customemoji[$getvar[addmember]],$customemoji[$getvar[removemember]];add,remove;Time out! These buttons **won't** respond anymore!,,0]
$textsplit[$sendmessage[Modifying Ticket - Please click on the appropriate button, whether you would like to add someone/a role or remove someone/a role!;yes]; ]`})
bot.awaitedCommand({
name:"add",
code:`$awaitmessages[$authorid;1m;everything;am;Time up!]
Alright, please enter the role/user(preferrably IDs, if you are using names, ensure they are the exact names. Mentions too work.), so that I can add it to this channel!`})
bot.awaitedCommand({
name:"remove",
code:`$awaitmessages[$authorid;1m;everything;rm;Time up!]
Alright, please enter the role/user(preferrably IDs, if you are using names, ensure they are the exact names. Mentions too work.), so that I can remove them from this channel!`})
bot.awaitedCommand({
name:"rm",
code:`$if[$memberexists[$findmember[$message;no]]==true]
$modifychannelperms[$channelid;-viewchannel;$findmember[$message;no]]
Removed the __user__ **$usertag[$findmember[$message;no]]** from this channel!
$elseif[$roleexists[$findrole[$message]]==true]
$modifychannelperms[$channelid;-viewchannel;$findrole[$message]]
Removed the __role__ **$rolename[$findrole[$message]]** from this channel!
$endelseif
$else
Could not find the user/role!
$endif`})
bot.awaitedCommand({
name:"am",
code:`$if[$memberexists[$findmember[$message;no]]==true]
$modifychannelperms[$channelid;+viewchannel;$findmember[$message;no]]
Added the __user__ **$usertag[$findmember[$message;no]]** to this channel!
$elseif[$roleexists[$findrole[$message]]==true]
$modifychannelperms[$channelid;+viewchannel;$findrole[$message]]
Added the __role__ **$rolename[$findrole[$message]]** to this channel!
$endelseif
$else
Could not find the user/role!
$endif`})
bot.awaitedCommand({
name:"rename",
code:`Alright, please enter the new name for this ticket!
$awaitmessages[$authorid;1m;everything;rn;Time up!]`})
bot.awaitedCommand({
name:"rn",
code:`$editchannel[$channelid;$default;$message;$default;$default;$default;$default;yes]
Renamed the channel successfully!`})
bot.awaitedCommand({
name:"delete",
code:`Are you sure you want to confirm? This action cant be undone! Write in **yes** or **no**
$awaitmessages[$authorid;1m;yes,no;dyes,dno;Time up!]`})
bot.awaitedCommand({
name:"dyes",
code:`$closeticket[]`})
bot.awaitedCommand({
name:"dno",
code:`*Cancelled Successfully!*`})
bot.command({
name:"$alwaysExecute",
code:`$if[$getchannelvar[topener]!=]
$setchannelvar[tscript;$getchannelvar[tscript]$usertag at $hour:$minute:$second(GMT)\n$message\n\n]
$setmessagevar[author;$authorid;$messageid]
$else
$endif
$setmessagevar[author;$authorid;$messageid]`})


//Reaction Roles

bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$getuservar[cmid]==1]
$setuservar[cmid;]
$setservervar[cemoji;$getservervar[cemoji]$emojitostring.]
$awaitmessages[$authorid;1m;everything;ny;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$customemoji[$getvar[createrr]] **New Group - Extra Part**

Would you like to add another role, or not? Please enter **__yes__** OR **__no__**.
$elseif[$getuservar[armid]==1]
$setuservar[armid;]
$setservervar[aremoji;$emojitostring]
$awaitmessages[$authorid;1m;everything;armid;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$customemoji[$getvar[createrr]] **Existing RR - Message ID [Part 3/3]**

**Please enter the ID of the message you want to add this RR to. Note that the message should be from this channel, if not, try mentioning the channel and entering the message ID too!** Also note that the message should have an RR already, or you would have to execute this again!
$endelseif
$else
$endif
$onlyif[$isbot[$authorid]==false;]`})
bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$textsplit[$getmessagevar[brole];.]$replacetext[$replacetext[$checkcondition[$getmessagevar[brole]==a];true;false];false;$checkcontains[$userroles[$authorid;ids;.];$joinsplittext[;]]]$textsplit[$getmessagevar[brole];.]==false]
$djsEval[channel.messages.fetch(message.id).then(d=>d.reactions.cache.find(x=>x.emoji.toString() === "$emojitostring").users.remove(author.id))] 
$senddm[$authorid;**$servername:** Could not give you the role because you have a blacklisted role needed for that role!]
$elseif[$textsplit[$getmessagevar[orole];.]$replacetext[$replacetext[$checkcondition[$getmessagevar[orole]==a];true;true];false;$checkcontains[$userroles[$authorid;ids;.];$joinsplittext[;]]]$textsplit[$getmessagevar[orole];.]==true]
$djsEval[channel.messages.fetch(message.id).then(d=>d.reactions.cache.find(x=>x.emoji.toString() === "$emojitostring").users.remove(author.id))] 
$senddm[$authorid;**$servername:** You do not have the role required to obtain this role!]
$endelseif
$else
$giverole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]
$senddm[$authorid;You successfully recieved the role **$rolename[$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]**, since you reacted to $emojitostring in the server **$servername**!]
$textsplit[$replacetext[$getmessagevar[emoji];$emojitostring;];.]
$onlyif[$roleposition[$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]>$roleposition[$highestrole[$clientid]];]
$endif
$onlyif[$checkcontains[$getmessagevar[emoji];$emojitostring]==true;]
$onlyif[$getmessagevar[role]!=;]
$onlyif[$isbot[$authorid]==false;]`})
bot.reactionRemoveCommand({
channel:"$channelid",
code:`$takerole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]
$senddm[$authorid;Your role **$rolename[$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]** was taken from you, since you un-reacted to $emojitostring in the server **$servername**!]
$onlyif[$hasrole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]==true;]
$textsplit[$replacetext[$getmessagevar[emoji];$emojitostring;];.]
$onlyif[$checkcontains[$getmessagevar[emoji];$emojitostring]==true;]
$onlyif[$getmessagevar[role]!=;]
$onlyif[$isbot[$authorid]==false;]`})
bot.onReactionRemove()

//Fight
bot.onInteractionCreate()
bot.interactionCommand({
name:"hit",
prototype:"button",
code:`$if[$getuservar[lh]==$authorid]
$interactionreply[;{description:It is <@$getuservar[op]>'s chance to play!}{color:FF0000}{delete:3s};;64]
$elseif[$getuservar[lh]!=$authorid]
$if[$checkcondition[$sub[$getuservar[hp;$getuservar[op]];$random[10;20]]<0]$checkcontains[$sub[$getuservar[hp;$getuservar[op]];$random[10;20]];-]==truetrue]
$setuservar[op;]
$setuservar[fmid;;$getuservar[op]]
$setuservar[fmid;]
$deletemessage[$getuservar[fmid]]
$setuservar[op;;$getuservar[op]]
$sendmessage[{author:Game Over!}{description:With just $getuservar[hp] health remaining, <@$authorid> won from <@$getuservar[op]>! GG!}{color:00FF00}{footer:Congrats on the win!}{thumbnail:$authoravatar}{image:https#COLON#//media3.giphy.com/media/2gtoSIzdrSMFO/giphy.gif};no]
$else
$interactionReply[<@$getuservar[op]>;{author:Current Scores After The Heal}{field:$username:$getuservar[hp]:yes}{field:$username[$getuservar[op]]:$getuservar[hp;$getuservar[op]]:yes}{field:Now It Is The Chance Of:<@$getuservar[op]>}{color:$random[11111;999999]}{thumbnail:$authoravatar}{footer:Damage Given#COLON# $random[10;20]};{actionRow:Punch,2,4,hit,:Heal,2,3,heal,:End,2,2,end};0;7]
$setuservar[lh;$authorid]
$setuservar[lh;$authorid;$getuservar[op]]
$setuservar[hp;$sub[$getuservar[hp;$getuservar[op]];$random[10;20]];$getuservar[op]]
$endif
$endelseif
$endif
$onlyif[$getuservar[op]!=;]`})
bot.interactionCommand({
name:"end",    
prototype:"button",
code:`$setuservar[op;]
$setuservar[fmid;;$getuservar[op]]
$setuservar[fmid;]
$deletemessage[$getuservar[fmid]]
$setuservar[op;;$getuservar[op]]
$sendmessage[{author:Game Ended!}{description:With $getuservar[hp] health remaining, <@$authorid> decided to surrender to <@$getuservar[op]>! Congrats **$usertag[$getuservar[op]]**!}{color:00FF00}{footer:Congrats on the win!}{thumbnail:$useravatar[$getuservar[op]]};no]`})
bot.interactionCommand({
name:"heal",    
prototype:"button",
code:`$if[$getuservar[lh]==$authorid]
$interactionreply[;{description:It is <@$getuservar[op]>'s chance to play!}{color:FF0000}{delete:3s};;64]
$elseif[$getuservar[lh]!=$authorid]
$interactionReply[<@$getuservar[op]>;{author:Current Scores After The Heal}{field:$username:$getuservar[hp]:yes}{field:$username[$getuservar[op]]:$getuservar[hp;$getuservar[op]]:yes}{field:Now It Is The Chance Of:<@$getuservar[op]>}{color:$random[11111;999999]}{thumbnail:$authoravatar}{footer:Amount Healed#COLON# $random[10;20]};{actionRow:Punch,2,4,hit,:Heal,2,3,heal,:End,2,2,end};0;7]
$setuservar[lh;$authorid]
$setuservar[lh;$authorid;$getuservar[op]]
$setuservar[hp;$sum[$getuservar[hp];$random[10;20]]]
$endelseif
$endif
$onlyif[$getuservar[op]!=;]`})

//Snipe and Esnipe

bot.updateCommand({
channel:"$randomchannelid", 
code:`$setchannelvar[esnipem;[Message](https://discord.com/channels/$guildid/$channelid/$messageid)\n\n**Old Message:** $oldmessage\n\n**New Message:** $message]
$setchannelvar[esnipea;$authorid;$channelused]
$onlyif[$partial==false;{execute:cache}]
$onlyif[$oldmessage!=$message;]`})
bot.onMessageUpdate()
bot.awaitedCommand({
name:"cache",
code:`$cachemembers`})
bot.deletedCommand({
channel:"$randomchannelid", 
code:`$setchannelvar[snipem;**Message:** $message;$channelused]
$setchannelvar[snipea;$authorid;$channelused]
$onlyif[$partial==false;{execute:cache}]`})
bot.onMessageDelete()

bot.readyCommand({
channel:"$getvar[channel]",
code:`$log[$usertag[$botownerid], I am up!]`
})

//Starboard

bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$suppresserrors$getmessagevar[smid]$suppresserrors==]
$setmessagevar[smid;$splittext[1]]
$textsplit[$channelsendmessage[$getservervar[schannel];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:Starred At $day-$month-$year | StarBoard System Of $username[$clientid]};yes]; ]
$let[a;$getmessagevar[author;$messageid]]
$suppresserrors
$else
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$endif
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$onlyif[$emojitostring==⭐;]
$onlyif[$serverchannelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})
bot.reactionRemoveCommand({
channel:"$channelid",
code:`$if[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors!=0]
$editmessage[$getmessagevar[smid];**⭐ $reactioncount[$channelid;$messageid;⭐]** | <#$channelid> | Originally Posted By <@$get[a]>{author:$usertag[$get[a]]}{description:$getmessage[$channelid;$messageid;content]}{field:Original Message:[Jump To Message!](https://discord.com/channels/$guildid/$channelid/$messageid):no}{image:$replacetext[$replacetext[$isvalidlink[$messageattachment];true;$messageattachment];false;]}{color:YELLOW}{footer:$getembed[$getservervar[schannel];$getmessagevar[smid];footer]};$getservervar[schannel]]
$let[a;$getmessagevar[author]]
$suppresserrors
$onlyif[$suppresserrors$reactioncount[$channelid;$messageid;⭐]$suppresserrors>=$getservervar[sreq];]
$else
$deletemessage[$getservervar[schannel];$getmessagevar[smid]]
$suppresserrors
$endif
$onlyif[$suppresserrors$messageexists[$getservervar[schannel];$getmessagevar[smid]]$suppresserrors==true;]
$onlyif[$replacetext[$emojitostring;⭐;]==;]
$onlyif[$channelexists[$getservervar[schannel]]==true;]
$onlyif[$getservervar[sreq]!=0;]`})
