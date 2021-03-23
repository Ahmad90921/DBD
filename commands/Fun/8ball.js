module.exports.command = ({
    name: "8ball",
    code: `$addField[Your Answer;$message] $addField[Answer;$randomText[Nope;Yes;100% Noo;BIG NOOO!;Maybe;Sure;Are You Sure?;Ask Again in 2 Year;Littery Yes;50% YES??]]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})