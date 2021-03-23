module.exports.command = ({
    name: "setupwelcome",
    code: `$nomention
    $title[Welcome setup]
    $description[Welcome message Setuped in $message ]
    $setServerVar[welcome;$message; serverID]
    $argsCheck[>1; Use !setup (welcome channel id) ]
    $onlyAdmin[You're not a admin]
    $argsCheck[>1;Please write the channel id where you want the welcome message to be]
    $color[$random[15;999999]]`
})