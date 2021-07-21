module.exports = ({
name:"tags",
aliases:"tag-list",
category:"Utility",
explanation:"Get the tags of the requested types of the server!",
bot:"Embed Links",
user:"Manage Server",
usage:"tags <contains/mention/normal>",
example:"tags mention",
explain:"Shows all tags that occur on someone's mention.",
code:`$author[All $message[1]-tags in $servername;$servericon]
$description[$replacetext[$replacetext[$checkcondition[$get[t]==mtags];true;$replacetext[<@$joinsplittext[>\n<@]>;<@>;]];false;$joinsplittext[\n]]]
$color[RANDOM]
$footer[Use $getservervar[prefix]tag-info <tag type> <tag> for info on a specific tag | Requested by $usertag;$authoravatar]
$addtimestamp
$textsplit[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;$replacetext[$getservervar[ctags];heh~~;]];false;$getservervar[$get[t]]];~~]
$onlyif[$replacetext[$replacetext[$checkcondition[$get[t]==ctags];true;heh];false;]!=$getservervar[$get[t]];There are **no $message[1]-tags** on the server!]
$onlyif[$checkcontains[$get[t];mtags;ctags;tags]==true;You can only have **contains**, **mention** or **normal** tags!]
$let[t;$replacetext[$replacetext[$replacetext[$tolowercase[$message[1]];contains;ctags];mention;mtags];normal;tags]]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to execute this!}{color:FF0000}]`})