module.exports = ({
name:"automod",
category:"Mod",
explanation:"Automod settings! The mass emoji is a bit bugged and might not detect all emojis!",
bot:"Manage Messages",
user:"Manage Server",
usage:"automod <antispam true/false> <caps true/false> <mass mention true/false> <mass emoji true/false> <anti links true/false>",
example:"automod true true true false",
explain:"Enables automod, antispam true(5+ messages in 4 seconds), mass caps true(1/4th of the message is caps), mass mention true(4+ mentions), mass emoji false(5+ emojis) and antilink true! By default ignores people with **Manage Messages** permissions.",
code:`$setservervar[antispam;$message[1]]
$setservervar[caps;$message[2]]
$setservervar[massmention;$message[3]]
$setservervar[massemoji;$message[4]]
$setservervar[antilink;$message[5]]
Success! Antispam is now **$replacetext[$replacetext[$message[1];true;enabled];false;disabled]**, anti mass caps is now **$replacetext[$replacetext[$message[2];true;enabled];false;disabled]**, anti mass mention is now **$replacetext[$replacetext[$message[3];true;enabled];false;disabled]**, anti mass emoji is now **$replacetext[$replacetext[$message[4];true;enabled];false;disabled]** and anti link is now **$replacetext[$replacetext[$message[5];true;enabled];false;disabled]**!
$onlybotperms[managemessages;{description:I do not have the \`Manage Messages\` permissions to execute this!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$message[1]$message[2]$message[3]$message[4]$message[5];true;];false;]==;{description:Only true/false can be entered as settings!}{color:FF0000}]
$onlyIf[$message[5]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]automod <antispam true/false> <caps true/false> <mass mention true/false> <mass emoji true/false> <anti links true/false>\`\`\`}{color:FF0000}]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions to do this!}{color:FF0000}]`})