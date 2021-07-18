module.exports = ({
name:"work-messages",
aliases:"wm",
category:"Economy",
explanation:"Set a server's work confirmation messages, separated by / and work amounts! Use fields like {amount} to get what they earn, and {user} to get their username.",
bot:"Embed Links",
user:"Manage Server",
usage:"work",
example:"work",
explain:"Set a server's work messages and amounts!!",
code:`$awaitmessages[$authorid;1m;everything;amount;{description:Time out!}{delete:2s}]
$sendmessage[{description:I set\n\`🔹 $joinsplittext[\n🔹 ]\` as the messages! \`\`\`Now please enter 2 numbers. The first number should be the minimum amount, and second should be the maximum amount!\`\`\`}{color:GREEN};no]
$textsplit[$message;/]
$setservervar[work_msges;$message]
$onlybotperms[manageserver;I do not have \`Manage Server\` permissions for this!]
$onlyif[$checkcontains[$message;/]==true;{description:Since messages are separated by \`/\`, you need to put **atleast 2 statements**, separated with \`/\`.}{color:FF0000}]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]
$onlyperms[manageserver;{description:You do not have the \`Manage\``})