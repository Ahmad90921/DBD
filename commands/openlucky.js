module.exports.command = {
    name: "buy lucky",
    code: `$​nomention
    $​setGlobalUserVar[lucky;$​sum[$​getGlobalUserVar[lucky];$​message]]
    $​setGlobalUserVar[Money;$​sub[$​getGlobalUserVar[Money];$​getVar[Sword]]]
    $​setServerVar[Money;$​sub[$​getGlobalUserVar[Money];$​geGlobalUserVar[lucky]]]
    $​title[Purchased]
    $​description[You have bought $​message swords, you now have $​sum[$​getUserVar[Sword];$​message]]
    $​footer[Created by NT]`

}