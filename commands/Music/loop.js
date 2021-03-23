module.exports.command = {
    name: "loop",
    code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop now **on**];false;Loop now **off**]
    $onlyIf[$queueLength!=0;Nothing song was playing.]
    $onlyIf[$voiceID!=;You need to join the voice channel first!]
    $onlyForIDs[437066743173611520;Only Donator can use this!]`
}