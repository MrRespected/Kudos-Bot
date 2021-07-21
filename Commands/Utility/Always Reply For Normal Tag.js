module.exports = ({
name:"$alwaysExecute",
code:`$eval[$splittext[$get[i]]]
$textsplit[$getservervar[reply];~~]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;]
$textsplit[$getservervar[tags];~~]`})