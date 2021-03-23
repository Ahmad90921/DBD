module.exports.command = ({
    name: "daily",
    code: `$setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];225];$authorID] 
    $globalCooldown[24h;calm and wait \`%time%\`]
    You get ur daily bro nice? +\`255\`
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})