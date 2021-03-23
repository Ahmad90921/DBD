module.exports.command = ({
    name: "invite",
    code: `$title[$username's invite info]
    $thumbnail[$authorAvatar]
    $description[
    Total: $sum[$userInfo[real];$userInfo[fake]]
    Real: $userInfo[real]
    Fake: $userInfo[fake]]
    `
})