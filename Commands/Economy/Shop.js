module.exports = ({
name:"shop",
category:"Economy",
explanation:"See the server's role shop!",
bot:"Embed Links",
user:"None",
usage:"shop",
example:"shop",
explain:"Get the role shop!",
code:`$eval[$author[Shop of $servername!;$servericon]
$description[$joinsplittext[\n\n]]
$color[RANDOM]
$footer[Requested by $usertag;$authoravatar]
$thumbnail[$servericon]
$addtimestamp]
$textsplit[$replacetext[$getservervar[names];heh~~;;1];~~]
$onlybotperms[embedlinks;I need the \`Embed Links\` permissions for this!]
$onlyif[$getservervar[roles]!=heh;{description:No roles have been set up in the shop!}{color:FF0000}]
$onlyif[$checkcontains[:$joinsplittext[:]:;:$authorid:]==false;You are blacklisted!]
$textsplit[$getservervar[ru];/]
$onlyif[$getservervar[e]==true;{description:The economy system is not yet enabled!}{color:FF0000}]`})