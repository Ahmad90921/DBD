module.exports.command = {
    name: "volume",
    code: `$volume[$message[1]]
    $onlyIf[$message[1]<101;**⛔ Max volume 100%**]
    $onlyIf[$charCount[$message[1]]<4;Failed.]
    $onlyIf[$isNumber[$message[1]]==true;Must number!]
    $onlyIf[$message[1]!=;**⛔ Volume can change 0 - 100**]
    $editIn[1s;**✅ Changed to $message[1]%**] **Changing..**
    $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
    $onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
}