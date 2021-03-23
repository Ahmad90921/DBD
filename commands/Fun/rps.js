module.exports.command = ({
    name: "rps",
    code: `$onlyIf[$checkCondition[$toLowercase[$message[1]]==rock]-$checkCondition[$toLowercase[$message[1]]==paper]-$checkCondition[$toLowercase[$message[1]]==scissors]!=false-false-false; You must select an object! This can either be rock, paper, or scissors!{delete:10s}]
    $author[Rock Paper Scissors!]
    $description[You chose $replaceText[$replaceText[$replaceText[$toLowercase[$message[1]];rock;Rock;1];paper;Paper;1];scissors;Scissors;1], and I have chosen $randomText[Rock;Paper;Scissors].
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[1]]-$randomText[Rock;Paper;Scissors];rock-Scissors;You Win this game nice one!
    ;1];paper-Rock;You Win this game nice one!;1];scissors-Paper;You're actually able to beat me, I'm impressed!;1];rock-Paper;Lol You can defeat me,You lost!;1];paper-Scissors;Lol you can defeat me,You lost!;1];scissors-Rock;Looks like you've lost lmao!;1];rock-Rock;It's a tie! You've almost had me there!;1];scissors-Scissors;It's a tie! You've almost had me there!;1];paper-Paper;It's a tie! You've almost had me there!;1]]
    $footer[Well Lets Do It One More time]
    $color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
    $argsCheck[1; You must select an object! This can either be rock, paper, or scissors!]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})