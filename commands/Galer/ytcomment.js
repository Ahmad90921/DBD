module.exports.command = ({
    name: "ytcomment",
    aliases: ["youtube comment", "youtubecomment"],
    code: `$onlyIf[$message!=;Please type something!]
    $image[https://some-random-api.ml/canvas/youtube-comment?avatar=$userAvatar[$mentioned[1;yes]]&username=$username[$mentioned[1;yes]]&comment=$replaceText[$message; ;+;-1]]
    $color[$random[0;999999]]`
})