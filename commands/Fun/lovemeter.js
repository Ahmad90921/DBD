module.exports.command = ({
    name: "lovemeter",
    code: `$title[Love Meter] 
    $description[$username[$mentioned[2;yes]] and $username[$mentioned[1;yes]] The Love Meter Is $random[1;105]%]
    $argsCheck[>1;Mention Some User!]
    $color[RANDOM]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})