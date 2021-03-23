module.exports.command = ({
    name: "buy-goldchest",
    code: `$setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];1150];$authorID]
$setGlobalUserVar[goldchest;$sum[$getGlobalUserVar[goldchest;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Cash]>=1150;Need $1150in your cash, get some money First]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[SUCCESFULL BUYING]
$description[
Nice! You bought a Gold Chest for $1150!
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})