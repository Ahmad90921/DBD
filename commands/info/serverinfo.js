module.exports.command = ({
    name: "serverinfo",
    code: `$title[$serverName \`(ID: $guildID)\`]
    $addfield[📄 **Roles**;\`\`\`$guildRoles\`\`\`]
    $addfield[🍥 **Boosts**;$serverBoostCount]
    $addfield[👥 **Members**;$membersCount[;all]]
    $addfield[📊 **Verification**;$serverVerificationLevel]
    $addfield[🔥 **Channel Count**;$channelCount]
    $addfield[👑 **Owner**;$username[$ownerID]] 
    $description[$image[$serverIcon]]`
})