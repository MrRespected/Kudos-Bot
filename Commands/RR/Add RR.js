module.exports = ({
name:"add-rr",
category:"RR",
explanation:"Add another role to an RR!",
bot:"Embed Links",
user:"Manage Server",
usage:"add-rr",
example:"add-rr",
explain:"Starts an RR setup, through which you can add an extra RR to an existing one.",
code:`$awaitmessages[$authorid;1m;everything;arr;Time is up! Use **$getservervar[prefix]add-rr** again to start!]
$customemoji[$getvar[createrr]] **Existing RR - Role: Part [1/3]**

Please mention/enter the role you want to add!
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})