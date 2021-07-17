module.exports = ({
name:"settings",
category:"Ticket",
explanation:"View A Ticket's Settings! You can mark it as solved(deletes the ticket in 12 hours), unsolve it, add/remove a member/role, rename the ticket or delete it!",
bot:"Embed Links",
user:"Manage Server",
usage:"settings",
example:"settings",
explain:"Shows modifyable options for the ticket",
code:`$reactioncollector[$splittext[1];$authorid;1m;$customemoji[$getvar[solve]],$customemoji[$getvar[unsolve]],$customemoji[$getvar[modify]],$customemoji[$getvar[rename]],🔒;solve,unsolve,modify,rename,delete;yes]
$textsplit[$sendmessage[{author:Ticket Settings!:$authoravatar:}{description:Below are the reactions you would need to toggle between.\n\n$replacetext[$customemoji[solve];:;#COLON#]#COLON# Solve a ticket\n$replacetext[$customemoji[unsolve];:;#COLON#]#COLON# Unsolve a ticket\n$replacetext[$customemoji[modify];:;#COLON#]#COLON# Modify a ticket\n$replacetext[$customemoji[rename];:;#COLON#]#COLON# Rename the ticket\n#COLON#lock#COLON##COLON# Delete the ticket}{color:$random[111111;999999]}{footer:You can use $getservervar[prefix]transcript to get the transcript of a ticket!};yes]; ]
$onlyif[$getchannelvar[topener]!=;This is not a ticket!]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})