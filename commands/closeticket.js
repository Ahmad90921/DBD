module.exports.command = ({
    name: "close",
    code: `
   $closeTicket[This is not a ticket]
   $onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets{delete:10s}]
   $suppressErrors`
   })