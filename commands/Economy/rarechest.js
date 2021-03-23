module.exports.command = ({
    name: "buy-rarechest",
    code: `
    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];550];$authorID]
$setGlobalUserVar[rarechest;$sum[$getGlobalUserVar[rarechest;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Cash]>==550;Need $550in your cash, get some money First]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[SUCCESFULL BUYING]
$description[
Nice! You bought a Rare Chest for $550!
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})