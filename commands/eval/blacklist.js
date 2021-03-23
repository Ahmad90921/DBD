module.exports.command = ({
    name: "blacklist",
    code: `$setGlobalUserVar[Blacklist;true;$mentioned[1]]
    **$username[$mentioned[1]]#$discriminator[$mentioned[1]] you are blacklisted now**
    $onlyIf[$mentioned[1]!=;You must mention someone]
    $onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself**]
    $onlyForIDs[766649371684765697;**⛔ Only the owner can use this command**]`
})