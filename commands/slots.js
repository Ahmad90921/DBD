module.exports.command = ({
    name: "slots",
    code: `$setGlobalUserVar[Money;$replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$sum[$getGlobalUserVar[Money];$message[1]]];false;sub[$getGlobalUserVar[Money];$message[1]]]
        $author[$username]
        $color[$replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;07ff00;1];false;E64338;1]]
        $addField[Slot Machine;>>> **$randomText[π;π;π;π;π] | $randomText[π;π;π;π;π] | $randomText[π;π;π;π;π]
        $replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$randomText[π | π | π ;π | π | π;π | π | π;π | π | π;π | π | π];1];false;$randomText[π | π | π;π | π | π;π | π | π;π | π | π;π | π | π;π | π | π;π | π | π;π| π | π;π | π | π;π | π | π];1] β¬οΈ
        $randomText[π;π;π;π;π] | $randomText[π;π;π;π;π] | $randomText[π;π;π;π;π]**]
        $footer[**You $randomText[won;lost] $message[1] π°**]
        $onlyIf[$message[1]!=; β Put a bet]
        $onlyIf[$isNumber[$message[1]]==true;β Provide a valid number!]
        $onlyIf[$message[1]>=100;**βMinimum bet is \`1000\`$**]
        $onlyIf[$message[1]<=10000;**β maximum bet amount is 10000**]
        $onlyIf[$message[1]<=$getGlobalUserVar[Money];**β You don't have \`$message[1]\` enough money**]
        $cooldown[15s;**β You can't play slot until %time%**]`
})