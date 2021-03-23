module.exports.command = {
    name: "skip",
    code: `⏩ Skipped!
    $onlyIf[$queueLength>1;Only have **$queueLength song**]
    $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
    $onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
}