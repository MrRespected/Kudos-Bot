module.exports = ({
name:"mention-tag",
aliases:"mention-tag-add",
category:"Utility",
explanation:"Add a mention tag to the server! This triggers when the given user is mentioned in a message. You can enter your **Aoi.js**(npm package) code over here!",
bot:"Embed Links",
user:"Manage Server",
usage:"mention-tag <user> | <reply>",
example:"mention-tag Stickman | $title[Hi!] $description[Hello $username!]",
explain:"Adds a tag for the user **Stickman**, when they are mentioned in a sentence, it shows a title Hi! and description Hello username!",
code:`$setservervar[mreply;$getservervar[mreply]~~$splittext[2]]
$setservervar[mtags;$getservervar[mtags]~~$get[user]]
I added **$usertag[$get[user]]** as a mention tag!
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;Eyo, u cant try to set a variable value here, get the client's token, eval something in djs/aoi.js or anything that is dangerous for me! Dont be cheeky xD!]
$onlyif[$splittext[2]!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]mention-tag <user> | <reply>\`\`\`}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$splittext[1]]]
$textsplit[$replacetext[$message; |;|;1];|]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})