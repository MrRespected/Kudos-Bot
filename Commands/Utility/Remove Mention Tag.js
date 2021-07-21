module.exports = ({
name:"mention-tag-remove",
aliases:"remove-mention-tag",
category:"Utility",
explanation:"Remove a mention tag from the server! You need to enter the user of that tag to execute it.",
bot:"Embed Links",
user:"Manage Server",
usage:"remove-mention-tag <user>",
example:"remove-mention-tag Stickman",
explain:"Remove the mention tag with the user Stickman!",
code:`I removed the mention tag with the trigger **$message[1]**!
$setservervar[mreply;$replacetext[$getservervar[mreply];~~$splittext[$get[i]];;1]]
$textsplit[$getservervar[mreply];~~]
$setservervar[mtags;$replacetext[$getservervar[mtags];~~$splittext[$get[i]];;1]]
$let[i;$findtextsplitindex[$get[user]]]
$onlyif[$findtextsplitindex[$get[user]]!=0;{description:That tag was not found!}{color:FF0000}]
$textsplit[$getservervar[mtags];~~]
$let[user;$findmember[$message;yes]]
$onlyif[$message!=;{description:Enter the tag trigger!}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})