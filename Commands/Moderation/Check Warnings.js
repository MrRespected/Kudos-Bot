module.exports = ({
name:"checkwarns",
aliases:['check-warns','warns','warnings'],
category:"Mod",
explanation:"Get a user's warnings. Only 25 warnings can be shown. Kick permissions required.",
bot:"Embed Links",
user:"Kick",
usage:"warns [userid/name/mention]",
example:"warns Stickman",
explain:"Shows the warns of the user **Stickman**.",
code:`$author[Here are the warnings of $usertag[$get[user]]!;$useravatar[$get[user]]]
$description[\`\`\`fix
$joinsplittext[\n\n]\`\`\`]
$footer[Requested by $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$textsplit[$getuservar[reason;$get[user]];&&]
$onlyif[$getuservar[wc;$get[user]]!=0;{description:**$usertag[$get[user]]** user has 0 warnings!}{color:RANDOM}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot check warnings of a bot!}{color:FF0000}]
$let[user;$findmember[$message;yes]]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:FF0000}]`})