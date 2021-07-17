module.exports = ({
name:"poll",
category:"Utility",
explanation:"Start a poll with maximum 5 options! Shows percent of each option after the poll timer ends.",
bot:"Embed Links",
user:"Manage Server",
usage:"poll <time> <Question/option 1/2/3/4/5>(minimum 2 options, all options separated with /. First text is the question)",
example:"poll 1m This is a test poll! / Hey! / No / Maybe",
explain:"Starts a 1 minute long poll with the question as This is a test poll!, option 1 as Hey!, option 2 as No and option 3 as Maybe.",
code:`$if[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[4]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$editmessage[$get[mid];{author:🗳️ Poll ended! 🗳️}{title:$get[ti]}{color:RANDOM}{description:1️⃣ - **$get[o1]** ($roundtenth[$math[$get[1]*100/$get[t]];2]%)\n\n2️⃣ - **$get[o2]** ($roundtenth[$math[$get[2]*100/$get[t]];2]%)}{timestamp}{footer:Poll by $usertag | Total Votes - $get[t]:$authoravatar}{thumbnail:$servericon};$channelid]
$let[1;$reactioncount[$channelid;$get[mid];1️⃣]]
$let[2;$reactioncount[$channelid;$get[mid];2️⃣]]
$let[t;$sum[$reactioncount[$channelid;$get[mid];1️⃣];$reactioncount[$channelid;$get[mid];2️⃣]]]
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[5]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$editmessage[$get[mid];{author:🗳️ Poll ended! 🗳️}{title:$get[ti]}{color:RANDOM}{description:1️⃣ - **$get[o1]** ($roundtenth[$math[$get[1]*100/$get[t]];2]%)\n\n2️⃣ - **$get[o2]** ($roundtenth[$math[$get[2]*100/$get[t]];2]%)\n\n3️⃣ - **$get[o3]** ($roundtenth[$math[$get[3]*100/$get[t]];2]%)}{timestamp}{footer:Poll by $usertag | Total Votes - $get[t]:$authoravatar}{thumbnail:$servericon};$channelid]
$let[1;$reactioncount[$channelid;$get[mid];1️⃣]]
$let[2;$reactioncount[$channelid;$get[mid];2️⃣]]
$let[3;$reactioncount[$channelid;$get[mid];3️⃣]]
$let[t;$sum[$reactioncount[$channelid;$get[mid];1️⃣];$reactioncount[$channelid;$get[mid];2️⃣];$reactioncount[$channelid;$get[mid];3️⃣]]]
$endelseif
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[6]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$editmessage[$get[mid];{author:🗳️ Poll ended! 🗳️}{title:$get[ti]}{color:RANDOM}{description:1️⃣ - **$get[o1]** ($roundtenth[$math[$get[1]*100/$get[t]];2]%)\n\n2️⃣ - **$get[o2]** ($roundtenth[$math[$get[2]*100/$get[t]];2]%)\n\n3️⃣ - **$get[o3]** ($roundtenth[$math[$get[3]*100/$get[t]];2]%)\n\n4️⃣ - **$get[o4]** ($roundtenth[$math[$get[4]*100/$get[t]];2]%)}{timestamp}{footer:Poll by $usertag | Total Votes - $get[t]:$authoravatar}{thumbnail:$servericon};$channelid]
$let[1;$reactioncount[$channelid;$get[mid];1️⃣]]
$let[2;$reactioncount[$channelid;$get[mid];2️⃣]]
$let[3;$reactioncount[$channelid;$get[mid];3️⃣]]
$let[4;$reactioncount[$channelid;$get[mid];4️⃣]]
$let[t;$sum[$reactioncount[$channelid;$get[mid];1️⃣];$reactioncount[$channelid;$get[mid];2️⃣];$reactioncount[$channelid;$get[mid];3️⃣];$reactioncount[$channelid;$get[mid];4️⃣]]]
$endelseif
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[7]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$editmessage[$get[mid];{author:🗳️ Poll ended! 🗳️}{title:$get[ti]}{color:RANDOM}{description:1️⃣ - **$get[o1]** ($roundtenth[$math[$get[1]*100/$get[t]];2]%)\n\n2️⃣ - **$get[o2]** ($roundtenth[$math[$get[2]*100/$get[t]];2]%)\n\n3️⃣ - **$get[o3]** ($roundtenth[$math[$get[3]*100/$get[t]];2]%)\n\n4️⃣ - **$get[o4]** ($roundtenth[$math[$get[4]*100/$get[t]];2]%)\n\n5️⃣ - **$get[o5]** ($roundtenth[$math[$get[5]*100/$get[t]];2]%)}{timestamp}{footer:Poll by $usertag | Total Votes - $get[t]:$authoravatar}{thumbnail:$servericon};$channelid]
$let[1;$reactioncount[$channelid;$get[mid];1️⃣]]
$let[2;$reactioncount[$channelid;$get[mid];2️⃣]]
$let[3;$reactioncount[$channelid;$get[mid];3️⃣]]
$let[4;$reactioncount[$channelid;$get[mid];4️⃣]]
$let[5;$reactioncount[$channelid;$get[mid];5️⃣]]
$let[t;$sum[$reactioncount[$channelid;$get[mid];1️⃣];$reactioncount[$channelid;$get[mid];2️⃣];$reactioncount[$channelid;$get[mid];3️⃣];$reactioncount[$channelid;$get[mid];4️⃣];$reactioncount[$channelid;$get[mid];5️⃣]]]
$endelseif
$endif
$wait[$message[1]]
$if[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[4]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$let[mid;$splittext[1]]
$textsplit[$sendmessage[{author:🗳️ A new poll has started! 🗳️:$authoravatar}{title:$splittext[1]}{description:1️⃣ - **$get[o1]**\n\n2️⃣ - **$get[o2]**}{color:RANDOM}{footer:Poll by $usertag}{thumbnail:$servericon}{reactions:1️⃣,2️⃣};yes]; ]
$let[ti;$splittext[1]]
$let[o1;$splittext[2]]
$let[o2;$splittext[3]]
$textsplit[$replacetext[$message;$message[1];;1];/]
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[5]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$let[mid;$splittext[1]]
$textsplit[$sendmessage[{author:🗳️ A new poll has started! 🗳️:$authoravatar}{title:$splittext[1]}{description:1️⃣ - **$get[o1]**\n\n2️⃣ - **$get[o2]**\n\n3️⃣ - **$get[o3]**}{color:RANDOM}{footer:Poll by $usertag}{thumbnail:$servericon}{reactions:1️⃣,2️⃣,3️⃣};yes]; ]
$let[ti;$splittext[1]]
$let[o1;$splittext[2]]
$let[o2;$splittext[3]]
$let[o3;$splittext[4]]
$textsplit[$replacetext[$message;$message[1];;1];/]
$endelseif
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[6]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$let[mid;$splittext[1]]
$textsplit[$sendmessage[{author:🗳️ A new poll has started! 🗳️:$authoravatar}{title:$splittext[1]}{description:1️⃣ - **$get[o1]**\n\n2️⃣ - **$get[o2]**\n\n3️⃣ - **$get[o3]**\n\n4️⃣ - **$get[o4]**}{color:RANDOM}{footer:Poll by $usertag}{thumbnail:$servericon}{reactions:1️⃣,2️⃣,3️⃣,4️⃣};yes]; ]
$let[ti;$splittext[1]]
$let[o1;$splittext[2]]
$let[o2;$splittext[3]]
$let[o3;$splittext[4]]
$let[04;$splittext[5]]
$textsplit[$replacetext[$message;$message[1];;1];/]
$endelseif
$elseif[$textsplit[$replacetext[$message;$message[1];;1];/]$splittext[7]$textsplit[$replacetext[$message;$message[1];;1];/]==]
$let[mid;$splittext[1]]
$textsplit[$sendmessage[{author:🗳️ A new poll has started! 🗳️:$authoravatar}{title:$splittext[1]}{description:1️⃣ - **$get[o1]**\n\n2️⃣ - **$get[o2]**\n\n3️⃣ - **$get[o3]**\n\n4️⃣ - **$get[o4]**\n\n5️⃣ - **$get[o5]**}{color:RANDOM}{footer:Poll by $usertag}{thumbnail:$servericon}{reactions:1️⃣,2️⃣,3️⃣,4️⃣,5️⃣};yes]; ]
$let[ti;$splittext[1]]
$let[o1;$splittext[2]]
$let[o2;$splittext[3]]
$let[o3;$splittext[4]]
$let[04;$splittext[5]]
$let[o5;$splittext[6]]
$textsplit[$replacetext[$message;$message[1];;1];/]
$endelseif
$endif
$onlyif[$splittext[7]==;{description:You can have a maximum of 5 options!}{color:FF0000}]
$onlyif[$splittext[3]!=;{description:You need __atleast__ **2 options**, a **title** and a **time** for the poll!}{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]poll <time> <title/opt 1/opt 2/optional 3/4/5>\`\`\`}{color:FF0000}]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[1];s;;1];m;;1];h;;1];d;;1]]==true;{description:Not a valid unit of time!}{color:FF0000}]
$onlyif[$checkcontains[$message[1];s;h;m;d]==true;{description:Try entering valid time unit, such as **s**, **m**, **h** or **d**!}{color:FF0000}]
$textsplit[$replacetext[$message;$message[1];;1];/]
$onlybotperms[embedlinks;I need the \`Embed Links\` permissions to execute this!]
$onlyperms[manageserver;{description:You do not have the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})