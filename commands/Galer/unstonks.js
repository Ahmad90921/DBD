module.exports.command = ({
    name: "unstonks",
    code: `$title[Not Stonks]
    $color[$random[000000;999999]]
    $image[https://vacefron.nl/api/stonks?user=$userAvatar[$authorID]?size=1024&notstonks=true]`
})