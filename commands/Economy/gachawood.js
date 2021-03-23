module.exports.command = ({
    name: "gacha-wood",
    description: "Gacha Wood for get a Dumb Item",
    code: `Gacha you wood chest... $editIn[3s;]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})