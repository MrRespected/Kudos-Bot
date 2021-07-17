module.exports = ({
name:"snipe-roles",
category:"Mod",
explanation:"Sets snipe roles for the server, only people with those roles will be able to snipe and editsnipe. Ignores if the user has **Manage Server** or **Admin** permissions.",
bot:"None",
user:"Manage Server",
usage:"snipe-roles <all roles in a mention format>",
example:"snipe @test @test1 @test2",
explain:"Sets the server snipe and editsnipe roles as @test, @test1 and @test2",
code:`$if[$message==reset]
$setservervar[snipe_roles;]
I reset the **snipe and editsnipe requirements** for this server!
$else
$setservervar[snipe_roles;$djseval[let res = mentions.roles.map(x=>x.id)
d.array = res.join("/");yes]]
I set **$djseval[let res = mentions.roles.map(x=>x.name)
d.array = res.join("**, **");yes]** as the roles which can execute the snipe commands!
$onlyif[$mentionedroles[1]!=;{description:Mention atleast 1 role!}{color:FF0000}]
$endif
$onlyperms[manageserver;{description:You do not have the \`Manage Server\` permissions for the execution of this command!}{color:FF0000}]`})