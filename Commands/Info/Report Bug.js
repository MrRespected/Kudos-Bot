module.exports = ({
name:"report",
category:"Info",
explanation:"Report a BUG in the bot.",
bot:"Embed Links",
user:"None",
usage:"report <query/bug>",
example:"report How can I disable levelling?",
explain:"DMs the bot owner with the question **How can I disable levelling?**. Its upto the owner whether they would reply, you require patience. Refrain from asking questions that are in the FAQ and Bot Info command(about), or questions like what all commands are available.",
code:`$addcmdreactions[$customemoji[check]]
Successfully DMed the bot owner!
$senddm[$botownerid;{author:New Report!:$servericon}{title:$usertag reported something!}{description:> $message}{footer:ID#COLON# $authorid:$authoravatar}{timestamp}]
$onlyif[$message[10]!=;Elaborate your issue, with a MINIMUM of 10 words! Non-serious reports may lead into consequences!]
$cooldown[$replacetext[$replacetext[$checkcondition[$message[10]==];true;1s];false;2h];Woah chill, you just reported about me sometime back! **%time%** is the time you need to wait for! Join $getvar[support] if you need help quick!]`})