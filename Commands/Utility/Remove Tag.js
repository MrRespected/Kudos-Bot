module.exports = ({
name:"tag-remove",
aliases:"remove-tag",
category:"Utility",
explanation:"Remove a tag from the server! You need to enter the trigger of that tag to execute it.",
bot:"Embed Links",
user:"Manage Server",
usage:"remove-tag <tag>",
example:"remove-tag Hello",
explain:"Remove the tag with that trigger!",
code:`I removed the tag with the trigger **$message[1]**!
$setservervar[reply;$replacetext[$getservervar[reply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[reply];~~]
$setservervar[tags;$replacetext[$getservervar[tags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;{description:That tag was not found!}{color:FF0000}]
$textsplit[$getservervar[tags];~~]
$onlyif[$message!=;{description:Enter the tag trigger!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})