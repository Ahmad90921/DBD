module.exports.command = ({
    name: "topmoney-global",
    code: `$description[$globalUserLeaderboard[Cash;asc;{top} {value} {username}]]
    $footer[$serverName[$guildID]]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})