module.exports.command = ({
    name: "join",
    code: `$djsEval[message.member.voice.channel.join();]
    $onlyIf[$voiceID[$authorID]!=;**You are not in a voice channel!**`
})