module.exports = [{
name:"amount",
type:"awaitedCommand",
code:`$awaitmessages[$authorid;10m;everything;wcd;Time up!]
$setservervar[work_amounts;$message[1]/$message[2]]
$sendmessage[{description:Set the work amount! People can get a maximum of $getservervar[symb] **$message[2]** and minimum of **$message[1]**! Now please enter a work cooldown!}{color:GREEN};no]
$onlyif[$sub[$message[2];2]>$message[1];{description:Enter the minimum amount in the first argument, and maximum in the second! The difference should be minimum of **2**! Enter again!}{color:FF0000}{execute:amount}]
$onlyif[$isnumber[$message[1]$message[2]]==true;{description:Not valid numbers! Enter again!}{color:FF0000}{execute:amount}]`}]