module.exports = [{
name:"cf",
type:"awaitedCommand",
code:`$setuservar[cf;$message[2];$authorid]
$onlyif[$isbot[$authorid]==false;]`}]