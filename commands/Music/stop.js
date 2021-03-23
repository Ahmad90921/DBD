module.exports.command = {
    name: "stop",
    code: `$stopSong
    $sendMessage[⏹️ Stopped.;no]
    $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
    $deleteIn[5s]`
}