module.exports = ({
name:"$alwaysExecute",
code:`$eval[$splittext[$get[i]]]
$textsplit[$getservervar[mreply];~~]
$let[i;$findtextsplitindex[$mentioned[1]]]
$onlyif[$findtextsplitindex[$mentioned[1]]!=0;]
$textsplit[$getservervar[mtags];~~]`})