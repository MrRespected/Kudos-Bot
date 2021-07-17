module.exports = ({
name:"contains-tag-remove",
aliases:"remove-contains-tag",
category:"Utility",
explanation:"Remove a contains tag from the server! You need to enter the tag to execute it.",
bot:"Embed Links",
user:"Manage Server",
usage:"remove-contains-tag <user>",
example:"remove-contains-tag Stickman",
explain:"Remove the contains tag with the trigger Stickman!",
code:`I removed the contains tag with the trigger **$message[1]**!
$setservervar[creply;$replacetext[$getservervar[creply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[creply];~~]
$setservervar[ctags;$replacetext[$getservervar[ctags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$get[tag]]]
$onlyif[$findtextsplitindex[$get[tag]]!=0;{description:That tag was not found!}{color:FF0000}]
$textsplit[$getservervar[ctags];~~]
$let[tag;$message]
$onlyif[$message!=;{description:Enter the tag trigger!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})