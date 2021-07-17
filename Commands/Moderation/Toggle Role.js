module.exports = ({
name:"role",
category:"Mod",
explanation:"Give the provided role to the given user. Manage Roes permissions required.",
user:"Manage Roles",
bot:"Manage Roles, Embed Links",
usage:"role <userid/name/mention> <role>",
example:"role Stickman Testing",
explain:"Gives the role **Testing** to the user **Stickman**",
code:`$if[$serverchannelexists[$getservervar[bl]]==true]
$channelsendmessage[$getservervar[bl];{author:A user$replacetext[$replacetext[$get[d];take;'s role was taken!];give; was given a role!]}{field:Author:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Role $replacetext[$replacetext[$get[d];give;assigned];take;taken]:$replacetext[<@&$get[role]>;
;;1]:no}{footer:Action performed by $usertag}{color:$replacetext[$replacetext[$get[d];give;GREEN];take;FF0000]}{thumbnail:$useravatar[$get[user]]}]
$else
$endif
$if[$suppresserrors$let[user;$findmember[$message[1];no]]$let[role;$findrole[$message[2]]]$hasrole[$get[user];$get[role]]$let[user;$findmember[$message[1];no]]$let[role;$findrole[$message[2]]]$suppresserrors==true]
$takerole[$get[user];$get[role]]
$let[user;$findmember[$message[1];no]]$let[role;$findrole[$message[2]]]
$else
$giverole[$get[user];$get[role]]
$let[user;$findmember[$message[1];no]]$let[role;$findrole[$message[2]]]
$endif
$sendmessage[{author:Role $replacetext[$replacetext[$get[d];take;taken];give;given]!}{field:Author:<@$authorid>:no}{field:Target:<@$get[user]>:no}{field:Role $replacetext[$replacetext[$get[d];give;assigned];take;taken]:$replacetext[<@&$get[role]>;
;;1]:no}{footer:Action performed by $usertag}{color:$replacetext[$replacetext[$get[d];give;GREEN];take;FF0000]}{thumbnail:$useravatar[$get[user]]};no]
$onlybotperms[manageroles;embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Manage Roles\`, \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:FF0000}]
$onlyif[$get[user]!=$ownerid;{description:Cannot role the owner!}{color:FF0000}]
$onlyif[$get[user]!=$clientid;{description:Cannot role myself!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[d;$replacetext[$replacetext[$checkcondition[$hasrole[$get[user];$get[role]]==true];true;take];false;give]]
$onlyif[$roleexists[$findrole[$messageslice[1]]]==true;{description:The role does not exist! Try using the exact role name/using ID or mentioning it!}{color:FF0000}]
$let[user;$findmember[$message[1];no]]
$let[role;$findrole[$message[2]]]
$onlyif[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`fix
> $getservervar[prefix]role <userid/name/mention> <role>\`\`\`}{color:FF0000}]
$onlyperms[manageroles;{description:Permissions required for execution of the command#COLON# \`Manage Roles\`. You do not have the necessary permissions!}{color:FF0000}]`})