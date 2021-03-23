module.exports.command = ({
    name: "ban",
    code: `$ban[$mentioned[1;yes]]
    $argsCheck[>1;Pls Tag Someone to i ban]
    $onlyPerms[ban;You dont have perms to ban]
    $title[Member Banned;$mentioned[1;yes;$userAvatar]]
    $description[Reason: $noMentionMessage
    User Banned: $mentioned[1;yes]]
    `
})