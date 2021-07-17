module.exports = ({
name:"create-rr",
aliases:"rr-setup",
category:"RR",
explanation:"Start and RR setup!",
bot:"Embed Links",
user:"Manage Server",
usage:"create-rr",
example:"create-rr",
explain:"Start an RR setup",
code:`$awaitmessages[$authorid;1m;everything;r;Time is up! Use **$getservervar[prefix]create-rr** again to start!]
$customemoji[$getVar[createrr]] **New Group - Role: Part [1/5]**

Please mention/enter the role you want to give with this RR!
$setservervar[crole;]
$setservervar[cemoji;]
$setservervar[cbrole;]
$setservervar[corole;]
$setuservar[cmid;]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})