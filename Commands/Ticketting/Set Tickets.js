module.exports = ({
name:"tickets",
category:"Ticket",
explanation:"Set a ticketting system!",
bot:"Embed Links",
user:"Manage Server",
usage:"tickets Channel For Ticket | Ticket Embed Title | In Ticket Message | Category For Ticket",
example:"tickets #tickets | Open a ticket here! | Thanks for opening a ticket, {user}! Please describe your issue, while a moderator gets back to you | 833956539718696971",
explain:"Sends the ticket message to the channel **#tickets**, the title being **Open a ticket here!**. When a user reacts, a ticket is opened in the category with the ID 833956539718696971, and the message will be **Thanks for opening a ticket, {user}! Please describe your issue, while a moderator gets back to you**! {user} ",
code:`$setservervar[tmid;$getservervar[tmid]$splittext[1]/]
$textsplit[$channelsendmessage[$findchannel[$splittext[1];no];{author:Tickets!:$servericon}{description:**$splittext[2]**}{footer:React with 🎫 to create a ticket!:$useravatar[$clientid]}{color:RANDOM}{reactions:🎫};yes]; ]
$setservervar[tmsg;$getservervar[tmsg]$splittext[3]/]
$setservervar[tcat;$getservervar[tcat]$splittext[4]/]
$onlyif[$channelexists[$findchannel[$splittext[1];no]]==true;Not a valid channel in the first argument!]
$suppresserrors[That category does not exist!]
$onlyif[$channeltype[$splittext[4]]==category;The 4th argument is not a category!]
$suppresserrors
$onlyif[$checkcontains[$splittext[2]$splittext[3];/;|]==false;You can't keep a / or | symbol in the ticket message due to the bot taking those as separators!]
$onlyif[$checkcondition[$splittext[1]!=]$checkcondition[$splittext[2]!=]$checkcondition[$splittext[3]!=]$checkcondition[$splittext[4]!=]==truetruetruetrue;{field:Invalid syntax Used!:> \`\`\`fix
> $getservervar[prefix]tickets Channel For Ticket | Ticket Embed Title | In Ticket Message | Category For Ticket\`\`\`}{color:FF0000}]
$textsplit[$replacetext[$message; | ;|];|]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:FF0000}]`})
