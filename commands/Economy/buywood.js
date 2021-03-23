module.exports.command = ({
    name: "buy-woodchest",
    code: `$onlyIf[$message[1]==woodchest;]
    $setGlobalUserVar[Cash;$sub[$getGlobalUserVar[Cash;$authorID];50];$authorID]
    $setGlobalUserVar[woodchest;$sum[$getGlobalUserVar[woodchest;$authorID];1];$authorID]
    $onlyIf[$getGlobalUserVar[Cash]>=50;Need $50in your cash, get some money First]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[📱 $username]
    $description[
    Nice! You bought a Wood Chest for $50!
   ]
   $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})