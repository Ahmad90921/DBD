module.exports.command = ({
    name: "hitler",
    code: `$image[https://api.devs-hub.xyz/hitler?image=$replaceText[$userAvatar[$mentioned[1;yes]];webp;jpg;1]]`
})