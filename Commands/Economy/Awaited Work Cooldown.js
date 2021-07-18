module.exports = [{
name:"wcd",
type:"awaitedCommand",
code:`$setservervar[work_cd;$message]
Setup complete!$deletein[2s]
$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message;h;;1];d;;1];s;;1];m;;1]]==true;{description:Not a valid unit of time! Try again!}{color:FF0000}{execute:wcd}]
$onlyif[$checkcontains[$message;m;h;s;d]==true;{description:Try again and enter valid units!}{color:FF0000}{execute:wcd}]`}]