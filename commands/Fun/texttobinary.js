module.exports.command = ({
    name: "ttb",
    aliases: "texttobinary",
    code: `$jsonRequest[https://no-api-key.com/api/v1/binary?text=$message;binary]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})