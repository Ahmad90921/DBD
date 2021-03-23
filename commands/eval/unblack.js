module.exports.command = ({
    name: "unblacklist",
    code: `$setGlobalUserVar[Blacklist;false;$mentioned[1]]
    **$username[$mentioned[1]]#$discriminator[$mentioned[1]] ✅ You are no longer on the blacklist**
    $onlyIf[$mentioned[1]!=;You must mention someone]
    $onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself, so you can't unblacklist yourself**]
    $onlyForIDs[766649371684765697;**⛔ You are not the owner**]`
})