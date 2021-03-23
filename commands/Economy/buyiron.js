module.exports.command = ({
    name: `buy-ironchest`,
    code: `$onlyIf[$message[1]==ironchest;]
    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];250];$authorID]
    $setGlobalUserVar[ironchest;$sum[$getGlobalUserVar[ironchest;$authorID];1];$authorID]
    $onlyIf[$getGlobalUserVar[Cash]>=0;Need $50in your cash, get some money First]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[SUCCESFULL BUYING]
    $description[
    Nice! You bought a Iron Chest for $250!
    ]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})