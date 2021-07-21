module.exports = ({
name:"$alwaysExecute",
code:`$eval[$splittext[$get[i]]]
$textsplit[$replacetext[$getservervar[creply];heh~~;;1];~~]
$onlyif[$get[i]!=0;]
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
$textsplit[$replacetext[$getservervar[ctags];heh~~;;1];~~]`})