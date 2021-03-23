module.exports.command = {
    name: "nowplaying",
    aliases: "np",
    code: `author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
    $title[$songInfo[title]]
    $description[$addField[Duration;$songInfo[duration]]
    $addField[URL;$songInfo[url]]]
    $footer[$botPingms to load it.]
    $thumbnail[$songInfo[thumbnail]]
    $color[a09fff]
    $onlyIf[$queueLength!=0;Nothing song was playing.]
    $onlyIf[$voiceID!=;You need to join the voice channel first!]`
}