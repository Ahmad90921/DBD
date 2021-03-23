module.exports.command = ({
    name: "bal",
    aliases: "balance",
    code: `$title[$username[$mentioned[1;yes]] balance]
    $description[Cash: $getGlobalUserVar[Cash;$mentioned[1;yes]]]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})