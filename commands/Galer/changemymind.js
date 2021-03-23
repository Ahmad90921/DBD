module.exports.command = ({
    name: "changemymind",
    code: `$nomention
    $image[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;%20;-1]]
    $color[$random[000000;999999]]
    $argsCheck[>1;Write something to change your mind :)]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})