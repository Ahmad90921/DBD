module.exports.command = ({
    name: "buy-premiumcoin",
    code: `$onlyIf[$message[1]==premiumcoin;]
    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];10500];$authorID]
$setGlobalUserVar[premiumcoin;$sum[$getGlobalUserVar[premiumcoin;$authorID];$message[2]];$authorID]
$onlyIf[$getGlobalUserVar[Cash;$authorID]>=10500;Need $10500 in your wallet, try withrawing it first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[SUCCESFULL BUYING]
$description[
Nice! You bought a $message[2] premiumcoin for $10500!
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})