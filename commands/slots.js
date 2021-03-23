module.exports.command = ({
    name: "slots",
    code: `$setGlobalUserVar[Money;$replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$sum[$getGlobalUserVar[Money];$message[1]]];false;sub[$getGlobalUserVar[Money];$message[1]]]
        $author[$username]
        $color[$replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;07ff00;1];false;E64338;1]]
        $addField[Slot Machine;>>> **$randomText[🍋;🍊;🍏;🍒;🍇] | $randomText[🍊;🍒;🍇;🍏;🍋] | $randomText[🍒;🍋;🍊;🍇;🍏]
        $replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$randomText[🍊 | 🍊 | 🍊 ;🍇 | 🍇 | 🍇;🍒 | 🍒 | 🍒;🍏 | 🍏 | 🍏;🍋 | 🍋 | 🍋];1];false;$randomText[🍒 | 🍊 | 🍊;🍇 | 🍏 | 🍒;🍇 | 🍒 | 🍊;🍏 | 🍊 | 🍒;🍏 | 🍇 | 🍊;🍋 | 🍊 | 🍒;🍒 | 🍋 | 🍊;🍏| 🍋 | 🍇;🍇 | 🍋 | 🍒;🍏 | 🍊 | 🍋];1] ⬅️
        $randomText[🍇;🍊;🍋;🍏;🍒] | $randomText[🍒;🍏;🍇;🍋;🍊] | $randomText[🍒;🍇;🍋;🍏;🍊]**]
        $footer[**You $randomText[won;lost] $message[1] 💰**]
        $onlyIf[$message[1]!=; ❌ Put a bet]
        $onlyIf[$isNumber[$message[1]]==true;❌ Provide a valid number!]
        $onlyIf[$message[1]>=100;**⛔Minimum bet is \`1000\`$**]
        $onlyIf[$message[1]<=10000;**⛔ maximum bet amount is 10000**]
        $onlyIf[$message[1]<=$getGlobalUserVar[Money];**⛔ You don't have \`$message[1]\` enough money**]
        $cooldown[15s;**❌ You can't play slot until %time%**]`
})