module.exports.command = ({
    name: "spotifysearch",
    aliases: "ss",
    code: `$color[03FF00]
    $author[Spotify Search;https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-brands-logo-34.png]
    $description[
    🔎 Search : **$toUppercase[$message]**
    👤 Author : **$username#$discriminator[$authorID]**
    🔗 Link: [Click Here\\](https://open.spotify.com/search/$replaceText[$message; ;_;-1])]
    $onlyIf[$message[1]!=;**🔍 You need to search something**]`
})