module.exports.command = ({
    name: "drake",
    code: "$textSplit[$message;/] $image[https://gofaizen.sirv.com/Drake.png?cw=275&w=264&text.0.text=$replaceText[$splitText[1]; ;+;-1]&text.0.position.x=-27%25&text.0.position.y=-65%25&text.0.size=24&text.0.color=000000&text.1.text=$replaceText[$splitText[2]; ;+;-1]&text.1.position.x=-28%25&text.1.position.y=-17%25&text.1.size=24&text.1.color=000000]$color[FCFF00]$onlyIfMessageContains[$message;/;You need two words splitted by /. e.g: +drake ebik/epic`]"
})