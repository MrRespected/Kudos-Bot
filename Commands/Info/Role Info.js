module.exports = ({
name:"roleinfo",
aliases:['ri','role-info'],
category:"Info",
explanation:"Get information about a role!",
bot:"Embed Links",
user:"None",
usage:"roleinfo <role>",
example:"roleinfo developer",
explain:"Gets the information about the role **developer**! ",
code:`$sendmessage[{author:Information About The Requested Role!:$servericon}{field:Role Name:$rolename[$get[role]]:no}{field:Role ID:$get[role]:no}{field:Role Mention:<@&$get[role]>:no}{field:Role Color:$getrolecolor[$get[role]]:no}{field:No.Of Users With The Role:$gettextsplitlength:no}{field:Time Since Creation:$creationdate[$get[role];time]:no}{color:$getrolecolor[$get[role]]}{footer:Requested By $usertag:$authoravatar};no]
$textsplit[$userswithrole[$get[role];, ;yes];, ]
$suppresserrors	
$onlyif[$roleexists[$get[role]]==true;Role not found!]
$let[role;$replacetext[$replacetext[$checkcondition[$mentionedroles[1]!=];true;$mentionedroles[1]];false;$djseval[const role =d.args[0] ?( guild.roles.cache.get("$message") || mentions.roles.first() || guild.roles.cache.find(x=>x.name.startsWith("$message".toLowerCase())) ) : undefined  
role.id;yes]]]
$suppresserrors
$onlyif[$message!=;Enter a valid role!]`})