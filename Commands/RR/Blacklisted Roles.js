module.exports = [{
name:"brole",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;1m;everything;orole;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$if[$mentionedroles[1]==]
$setservervar[cbrole;a]
$customemoji[$getvar[createrr]] **New Group - Only For Roles: [Part 4/5]**

**There will be no blacklisted roles for this RR**. Now please **enter(mention only please!)** the roles you want the user to have for obtaining roles from this RR. They will get the role if they have any 1 of the role. If you do not want any of those, enter something random.
$else
$setservervar[cbrole;$djseval[let res = mentions.roles.map(x=>x.id)
d.array = res.join(".");yes]]
**New Group - Only For Roles: [Part 4/5]**

Set up the blacklisted roles for this RR. Now please enter the roles you want the user to have for obtaining roles from this RR. They will get the role if they have any 1 of the role. If you do not want any of those, enter something random.
$endif`}]