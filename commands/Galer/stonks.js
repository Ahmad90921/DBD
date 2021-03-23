module.exports.command = ({
    name: "stonks",
    code: `$author[Stonks]
    $color[$random[111111;999999]]
    $image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=4096]`
})