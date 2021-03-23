module.exports.command = {
    name: "e",
    code: `$if[$toLowercase[$message[1]]==eval]
    $error
    $eval[$messageSlice[1]]
   
    $argsCheck[>2;Correct Usage: \`$getServerVar[prefix]dev eval (Code)\`{delete:10s}]
    $elseIf[$toLowercase[$message[1]]==djseval]
    $error
    $djsEval[$messageSlice[1]]
   
    $argsCheck[>2;Correct Usage: \`$getServerVar[prefix]dev djseval (Code)\`{delete:10s}]
    $endelseIf
    $elseIf[$toLowercase[$message[1]]==serverlist]
    $reply[$messageID;$replaceText[$serverNames;,;\n];no]
    $endelseIf
    $elseIf[$toLowercase[$message[1]]==commandinfo]
    $reply[$messageID;$commandInfo[$message[2];$message[3]];no]
   
    $onlyIf[$checkContains[$toLowercase[$message[3]];aliases;code;name]==true;Correct Usage: \`$getServerVar[prefix]dev commandinfo $message[2] (Aliases/Code/Name)\`]
    $onlyIf[$checkCondition[$commandInfo[$message;name]==]==true;That is not a valid command!{delete:10s}]
    $argsCheck[>2;Correct Usage: \`$getServerVar[prefix]dev commandinfo (Command) (Aliases/Code/Name)\`{delete:10s}]
    $endelseIf
    $endif
   
    $onlyIf[$checkContains[$toLowercase[$message[1]];eval;djseval;serverlist;commandinfo]==true;Correct Usage: \`$getServerVar[prefix]dev (Eval/DJSEval/Serverlist/Commandinfo)\`{delete:10s}]
   
    $onlyForIDs[$botOwnerID;You must be the developer of the bot to use this command!{delete:10s}]
   
    $suppressErrors[Something went wrong...{delete:10s}]`
}