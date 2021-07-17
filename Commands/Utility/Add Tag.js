module.exports = ({
name:"tag",
aliases:"tag-add",
category:"Utility",
explanation:"Add a tag to the server! You need atleast 3+ chars for the tag(or 3), and it by default executes when the first message is the tag. Case insensitive. You can enter your **Aoi.js**(npm package) code over here!",
bot:"Embed Links",
user:"Manage Server",
usage:"tag <tag> | <reply>",
example:"tag Hello | $title[Hi!] $description[Hello there, $username!]",
explain:"Adds a tag **Hello** to the server, responds with an embed wit title as hi, and description as Hello there, <name of author of message>!",
code:`I added **$splittext[1]** as a tag!
$setservervar[reply;$getservervar[reply]~~$splittext[2]]
$setservervar[tags;$getservervar[tags]~~$splittext[1]]
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;Eyo, u cant try to set a variable value here, get the client's token, eval something in djs/aoi.js or anything that is dangerous for me! Dont be cheeky xD!]
$onlyif[$checkcontains[$splittext[1]; ]==false;{description:Cannot have **spaces** in tag triggers!}{color:FF0000}]
$onlyif[$splittext[2]!=;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]tag <tag trigger> | <reply>\`\`\`}{color:FF0000}]
$textsplit[$replacetext[$message; |;|;1];|]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})