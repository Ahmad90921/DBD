module.exports.command = ({
    name: "eject",
    code: `$argsCheck[>1;Mention someone for me to eject]
    $image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
    $color[ff0000]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})