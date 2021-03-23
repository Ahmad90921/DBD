module.exports.command = ({
    name: "clyde",
    code: `$argsCheck[>1;Please type something for Clyde to say]
    $image[https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;%20;-1]]
    $color[$random[111111;999999]]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})