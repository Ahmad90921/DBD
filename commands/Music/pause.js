module.exports.command = {
    name: "pause",
    code: `$pauseSong
    **⏸️ Paused**
    $onlyIf[$queueLength!=0;Nothing song was playing.]
    $onlyIf[$voiceID!=;You need to join the voice channel first!]`
}