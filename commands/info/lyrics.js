module.exports.command = ({
    name: "lyrics",
    aliases: ["l", "lyric"],
    code: `$title[$message lyrics] 
    $description[
    📗 Name: $jsonRequest[https://some-random-api.ml/lyrics?title=$message;title]
    📝 Author: $jsonRequest[https://some-random-api.ml/lyrics?title=$message;author]
    📑 Lyrics : $jsonRequest[https://some-random-api.ml/lyrics?title=$message;lyrics]]
    $suppressErrors[cant find the lyrics]
    $onlyIf[$message!=;song name? Example : $getServerVar[prefix]lyrics ||never gonna give you up||]`
})