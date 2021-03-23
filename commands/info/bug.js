module.exports.command = ({
    name: "bug",
    code: `
    $useChannel[823429556995096586]
    $title[$username#$discriminator]
    $addField[Message;$message]
    $addField[Channel;$channelID]
    $addField[User;$authorID]
    $addField[Server;$serverID]`
})