module.exports.command = {
    name: "queue",
    aliases: "q",
    code: `$queue[1;30]
    $onlyIf[$queueLength!=0;Nothing song was playing.]
    $onlyIf[$voiceID!=;You need to join the voice channel first!]`
}