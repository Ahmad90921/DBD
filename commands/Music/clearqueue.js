module.exports.command = {
    name: "clearqueue",
    code: `$clearSongQueue
    $stopSong
    $editIn[125ms;✅ Cleared queue. from **$queueLength song** to **0**] ⚠️ Clearing...
    $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]`
}