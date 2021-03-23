module.exports.command = ({
    name: "setchat",
    code: `set chatbot channel to <#$findChannel[$message]>
    $setServerVar[channels;$findChannel[$message]]
    $onlyPerms[manageserver;U need manageservers permission]
    $argsCheck[1;I need a channel!]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})