module.exports.command = ({
    name: "mod",
    code: `
    $dm[]
    $onlyIf[$guildID==;]
    $useChannel[822846083000434699]
    $title[$username]
    $authorIcon[$authorAvatar]
    $description[$message]
    $footer[the message has ben sending wait a minute...]`
})