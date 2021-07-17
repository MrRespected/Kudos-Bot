module.exports = ({
name:"afk-roles",
category:"Utility",
explanation:"Sets AFK roles for the server, only people with those roles will be able to go AFK. Ignores if the user has **Manage Server** or **Admin** permissions.",
bot:"None",
user:"Manage Server",
usage:"afk-roles <all roles in a mention format>",
example:"afk @test @test1 @test2",
explain:"Sets the server AFK roles as @test, @test1 and @test2",
code:`$if[$message==reset]
$setservervar[afk_roles;]
I reset the **AFK requirements** for this server!
$else
$setservervar[afk_roles;$djseval[let res = mentions.roles.map(x=>x.id)
d.array = res.join("/");yes]]
I set **$djseval[let res = mentions.roles.map(x=>x.name)
d.array = res.join("**, **");yes]** as the roles which can execute the AFK command!
$onlyif[$mentionedroles[1]!=;{description:Mention atleast 1 role!}{color:FF0000}]
$endif
$onlyperms[manageserver;{description:You do not have the \`Manage Server\` permissions for the execution of this command!}{color:FF0000}]`})