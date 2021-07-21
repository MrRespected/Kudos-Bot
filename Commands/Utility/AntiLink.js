module.exports = ({
name:"$alwaysExecute",
code:`$deletecommand
$sendmessage[<@$authorid>, you are not allowed to send links!;no]
$onlyif[$checkcontains[$isvalidlink[$get[link]]$isvalidlink[$get[link1]]$isvalidlink[$get[link2]]$isvalidlink[$get[link3]]$isvalidlink[$get[link4]];true]==true;]
$let[link;$suppresserrors$djseval[let array = ['$replacetext[$message; ;',']']
array.filter(fil => fil.toLowerCase().includes('discord.gg/'.toLowerCase())).find(F =>F);yes]$suppresserrors]
$let[link1;$suppresserrors$djseval[let array = ['$replacetext[$message; ;',']']
array.filter(fil => fil.toLowerCase().includes('https://'.toLowerCase())).find(F =>F);yes]$suppresserrors]
$let[link2;$suppresserrors$djseval[let array = ['$replacetext[$message; ;',']']
array.filter(fil => fil.toLowerCase().includes('www.'.toLowerCase())).find(F =>F);yes]$suppresserrors]
$let[link3;$suppresserrors$djseval[let array = ['$replacetext[$message; ;',']']
array.filter(fil => fil.toLowerCase().includes('.com'.toLowerCase())).find(F =>F);yes]$suppresserrors]
$let[link4;$suppresserrors$djseval[let array = ['$replacetext[$message; ;',']']
array.filter(fil => fil.toLowerCase().includes('.gg/'.toLowerCase())).find(F =>F);yes]$suppresserrors]
$onlyif[$suppresserrors$checkcontains[$message;https://;www.;discord.gg;.com;.gg/]$suppresserrors==true;]
$onlyif[$hasperms[$authorid;managemessages]==false;]
$onlyif[$getservervar[antilink]==true;]
$suppresserrors`})