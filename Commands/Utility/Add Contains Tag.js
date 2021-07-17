module.exports = ({
name:"contains-tag",
aliases:"contains-tag-add",
category:"Utility",
explanation:"Add a contains tag to the server! This triggers when the message contains the given word. 3+ chars needed. You can enter your **Aoi.js**(npm package) code over here!",
bot:"Embed Links",
user:"Manage Server",
usage:"contains-tag <word> | <reply>",
example:"contains-tag Hello | $title[Hi!] $description[Hello $username!]",
explain:"Adds a tag with the word **Hello**, when it is used anywhere in a sentence, it shows a title Hi! and description Hello username!",
code:`$setservervar[creply;$getservervar[creply]~~$splittext[2]]
$setservervar[ctags;$getservervar[ctags]~~$get[tag]]
I added **$get[tag]** as a contains tag!
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;Eyo, u cant try to set a variable value here, get the client's token, eval something in djs/aoi.js or anything that is dangerous for me! Dont be cheeky xD!]
$onlyif[$checkcondition[$splittext[2]!=]$checkcondition[$splittext[1]!=]==truetrue;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]contains-tag <tag> | <reply>\`\`\`}{color:FF0000}]
$let[tag;$splittext[1]]
$onlyif[$charcount[$splittext[1]]>=3;{description:A contains tag needs to be of 3+ chars!}{color:FF0000}]
$textsplit[$replacetext[$message; |;|;1];|]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})
