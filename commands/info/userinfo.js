module.exports.command = ({
    name: "userinfo",
    code: `$thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$userTag;$userAvatar[$authorID]]
    $addField[Name;$username[$mentioned[1;yes]];yes]
    $addField[Discriminator;#$discriminator[$mentioned[1;yes]];yes]
    $addField[Full name;$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];yes]
    $addField[Create date;$creationDate[$mentioned[1;yes]];yes]
    $addField[Platform;$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None];web;🌐 Web];mobile;📱 Phone];desktop;🖥️ PC]]
    $addField[Status;$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];offline;⚫ Offline];online;🟢 Online];dnd;🔴 DND];idle;🟡 Idle]]
    $addField[Highest role;<@&$highestRole[$mentioned[1;yes]]>;yes]
    $footer[Information from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
    $color[$getRoleColor[$highestRole[$clientID]]]
    $onlyIf[$mentioned[1]!=;You have to mention someone]
    $addTimestamp
    `
})