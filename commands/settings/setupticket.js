module.exports.command = ({
    name: "setup",
    code: `
    $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
    $sendMessage[**Now Give the Category ID**. 
    This Command will be cancelled after** \`30 seconds\`.;no]
    $onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
    $suppressErrors[]`
   })