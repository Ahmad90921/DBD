module.exports.command = ({
    name: "setprefix",
    aliases: ['changeprefix', 'prefix'],
    code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
    $description[**Done, my new prefix is** \`$message\`]
    $color[RANDOM]
    $setServerVar[prefix;$message]
    $onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
    $onlyPerms[admin;**You dont have** \`ADMIN\` **perms**]`
    })