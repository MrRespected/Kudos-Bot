module.exports = ({
name:"$alwaysExecute",
code:`$reactioncollector[$splittext[1];everyone;2m;💰;claim;yes]
$textsplit[$sendmessage[{author:Some random money has spawned!:$servericon}{description:I have spawned some random money from $getservervar[symb] **$splittext[1]** to **$splittext[2]**. You have 2 minutes to claim, first to react with 💰 wins it!}{color:RANDOM}{footer:Expires in 2 minutes, claim quick!};yes]; ]
$textsplit[$getservervar[ra];/]
$onlyif[$random[1;25]==2;]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$channelid:]==false;]
$textsplit[$getservervar[rc];/]
$onlyif[$checkcontains[$getservervar[rs];true]==true;]
$onlyif[$isbot[$authorid]==false;]`})