module.exports.command = ({
    name: "$alwaysExecute",
    code: `$jsonRequest[https://api.udit.gq/api/chatbot?message=$replaceText[$message; ;+];message;]
    $onlyForChannels[$getServerVar[channels];]
    $onlyIf[$getServerVar[channels]=!not set;]`
})