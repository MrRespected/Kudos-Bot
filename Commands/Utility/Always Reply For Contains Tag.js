module.exports = ({
name:"$alwaysExecute",
code:`$if[$getservervar[creply]!=heh]
$suppresserrors
$eval[$splittext[$get[i]]]
$textsplit[$replacetext[$getservervar[creply];heh~~;;1];~~]
$suppresserrors
$onlyif[$get[i]!=0;]
$suppresserrors
$let[i;$findtextsplitindex[$get[word]]]
$let[word;$djsEval[let triggers = ["$joinsplittext[","]"]
let m = "$message"
let ans;
for(let I =0;triggers.length >I;I++){
if(m.includes(triggers[I])){
ans = triggers[I];
break;
}else{
}
}
ans;yes]]
$suppresserrors
$textsplit[$replacetext[$getservervar[ctags];heh~~;;1];~~]
$suppresserrors
$else
$endif
$if[$checkcondition[$mentioned[1]!=]$checkcondition[$getservervar[mreply]!=]==truetrue]
$eval[$splittext[$get[i]]]
$textsplit[$getservervar[mreply];~~]
$let[i;$findtextsplitindex[$mentioned[1]]]
$onlyif[$findtextsplitindex[$mentioned[1]]!=0;]
$textsplit[$getservervar[mtags];~~]
$else
$endif
$if[$getservervar[reply]!=]
$eval[$splittext[$get[i]]]
$textsplit[$getservervar[reply];~~]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;]
$textsplit[$getservervar[tags];~~]
$else
$endif`})