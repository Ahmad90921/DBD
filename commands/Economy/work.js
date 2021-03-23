module.exports.command = ({
    name: "work",
    code: `$randomText[You Worked as a Robber; You Working as Chef;You Working as Police and jailed a guy;You Worked As a Developer;You Worked As A Security In a Bank;You Worked As A Youtuber;You Work As a Gamer;You Worked As a Constructor] and get $setGlobalUserVar[Cash;$sum[$getGlobalUserVar[Cash;$authorID];$random[25;50]];$authorID]$random[25;50]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})