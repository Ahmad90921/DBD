module.exports.command = ({
    name: "truth",
    code: `$argsCheck[>1;Insert something for the scroll to say]
    $title[Scroll of truth]
    $image[https://api.devs-hub.xyz/truth?text=$replaceText[$message; ;+;-1]]
    $color[FFFFFF]`
})