module.exports.command = ({
    name: "btt",
    aliases: "binarytotext",
    code: `$jsonRequest[https://no-api-key.com/api/v1/binary-text?binary=$message;text] 
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})