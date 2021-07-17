module.exports = ({
name:"transcript",
category:"Ticket",
explanation:"Get a ticket's transcript file!",
bot:"None",
user:"Manage Server",
usage:"transcript",
example:"transcript",
explain:"Shows the transcript for the ticket.",
code:`$dm[$mentioned[1;yes]]
$createfile[$getchannelvar[tscript];Transcript for $channelname.html]
$sendmessage[I sent the transcript of **$channelname** to **$usertag[$mentioned[1;yes]]**!;no]
$onlyif[$getchannelvar[topener]!=;This is not a ticket!]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})