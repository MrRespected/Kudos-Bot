module.exports = ({
name:"$alwaysExecute",
code:`<@$authorid>, please do not use too many emojis!
$deletecommand
$textsplit[$suppresserrors$emojisfrommessage[$noescapingmessage;,];,]
$onlyif[$gettextsplitlength>=5;]
$textsplit[$suppresserrors$emojisfrommessage[$noescapingmessage;,];,]
$onlyif[$hasperms[$authorid;managemessages]==false;]
$onlyif[$suppresserrors$emojisfrommessage[$noescapingmessage]$suppresserrors!=;]
$onlyif[$getservervar[massemoji]==true;]`})