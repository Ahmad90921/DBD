module.exports.command = ({
    name: "inv",
    code: `$title[$username[$mentioned[1;yes]] item]
    $addField[Gacha Box; Wood Chest = $getGlobalUserVar[woodchest]
Gold Chest = $getGlobalUserVar[goldchest]
Iron Chest = $getGlobalUserVar[goldchest]
Rare Chest = $getGlobalUserVar[rarechest]
Mystery Chest = $getGlobalUserVar[mysterychest]
Wood Chest = $getGlobalUserVar[woodchest]]
$addField[Tools;
Phone: $getGlobalUserVar[smartphone]
Cutter: $getGlobalUserVar[cutter]]
$addField[Trophy;
Medal: $getGlobalUserVar[medal]
Black BX? = $getGlobalUserVar[blackbx]
King hat = $getGlobalUserVar[kinghat]
Gold = $getGlobalUserVar[gold]]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]
`
})