module.exports.command = ({
    name: "buy-phone",
    code: `$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];500];$authorID]
$setGlobalUserVar[smartphone;$sum[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Cash;$authorID]>==499;Need $500 in your wallet, try withrawing it first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📱 $username]
$description[
Nice! You bought a smartphone for $500!
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})