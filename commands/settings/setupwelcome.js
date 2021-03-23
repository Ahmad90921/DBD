module.exports.command = ({
    name: "setupjoin",
    code: `$title[Welcome setup]
    $description[Welcome message Setuped in $message ]
    $setServerVar[welcome;$message; serverID]
    $argsCheck[>1; Use $getServerVar[prefix]setup (welcome channel id) ]
    $onlyPerms[admin;You're not a admin]`
})