module.exports = ({
name:"$alwaysExecute",
code:`$sendmessage[<@$authorid>, do not mass mention!;no]
$onlyif[$mentioned[4]!=;]
$onlyif[$hasperms[$authorid;managemessages]==false;]
$onlyif[$getservervar[massmention]==true;]`})