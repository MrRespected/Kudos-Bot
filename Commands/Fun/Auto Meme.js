module.exports = ({
name:"auto-meme",
category:"Fun",
explanation:"Auto Memes in the channel every 30 seconds!",
bot:"Embed Links",
user:"Manage Server",
usage:"auto-meme",
example:"auto-meme",
explain:"Get a reddit meme every 30 seconds!",
code:`$if[$getservervar[automeme]==false]
$loop[999999999999;automeme]
$sendmessage[Started auto memes, which post every 30 seconds! 

*Starts in 30 seconds from now, use this command again to disable*;no]
$setservervar[automeme;true]
$else
$sendmessage[Successfully stopped auto-memes!;no]
$setservervar[automeme;false]
$endif
$onlyperms[manageserver;You need the manage server permissions!]
$onlyif[$isbot[$authorid]==false;]`})