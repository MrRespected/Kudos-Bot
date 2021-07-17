module.exports = [{
name:"ny",
type:"awaitedCommand",
code:`$if[$tolowercase[$message[1]]==no]
$awaitmessages[$authorid;1m;everything;brole;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$customemoji[$getvar[createrr]] **New Group - Blacklisted Roles: [Part 3/5]**

Please **__mention__** all the roles that are blacklisted from getting roles from this set of RR. Enter anything except mentioning a role if none.
$elseif[$tolowercase[$message[1]]==yes]
$awaitmessages[$authorid;1m;everything;r;Time is up! Use **$getservervar[prefix]create-rr** again to start!]
$customemoji[$getvar[createrr]] **New Group - Another Role: Part [1/5]**

Please mention/enter the role you want to give with this RR!
$endelseif
$else
Enter either **yes** or **no**!
$endif`}]