module.exports = ({
name:"calc",
aliases:"calculator",
category:"Utility",
explanation:"Your own calculator! From the NPM package \"Weky\"",
bot:"Embed Links",
user:"None",
usage:"calc",
example:"calc",
explain:"Adds buttons from 0-9 with basic operators like +, -, * and /, brackets, % and ^",
code:`$djseval[( async () => {const { Calculator } = require ("weky")
await Calculator (message)})()]
$servercooldown[10s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})