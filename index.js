const dbd = require('dbd.js')
const db = require('quick.db')
const Discord = require('discord.js')
const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const username = `$username[$authorID]`
const discrim = `$discriminator[$authorID]`
const members = `$membersCount`
const guild = `$serverName`
const avatar = `$replaceText[$userAvatar[$authorID];webp;png]`
const background = `https://files.123freevectors.com/wp-content/original/151915-abstract-orange-diagonal-lines-and-stripes-background.jpg`
const dbdExpress = require('dbd.express')
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render('index', { bot: settings.website })
})

const listener = server.listen(8000, function() {
    console.log("Your app is listening on port " + listener.address().port);
})

const bot = new dbd.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "YOUR TOKEN", //Discord Bot Token
  prefix: "$getServerVar[prefix]" //Change PREFIX to your Prefix
})

bot.onMessage()

const fs = require('fs');
let dir = fs.readdirSync('./commands');

let i = 0;

handler: while (i < dir.length) {
    const stat = fs.statSync('./commands/' + dir[i]);

    if (stat.isDirectory()) {
        const readdir = fs.readdirSync('./commands/' + dir[i]);

        let nums = 0;
        while (nums < readdir.length) {
            dir.push(dir[i] + '/' + readdir[nums]);
            nums++;
        }
        i++;
        continue handler;
    } else if (stat.isFile()) {
        const command = require('./commands/' + dir[i]);
        try {
            bot[Object.keys(command)[0]](command[Object.keys(command)[0]]);
            i++;
            continue handler;
        } catch (err) {
            console.error(err.message);
            delete dir[i];

            continue handler;
        }
    } else {
        console.error('Directory was not a Folder or File');
        delete dir[i];

        continue handler;
    }
}

bot.status({
    text: "$serverCount Server!",
    type: "WATCHING",
    time: "12"
})

bot.status({
    text: "MY PREFIX IS Obi",
    type: "LISTENING",
    time: "12"
})

bot.status({
    text: "Bored",
    type: "PLAYING",
    time: "12"
})

bot.status({
    text: "You",
    type: "WATCHING",
    time: "12"
})

bot.botJoinCommand({
    channel: "$randomChannelID",
    code: `
   $title[Thanks for adding me]
   $description[My prefix: \`Obi\`, You can see the command by typing\`Obi help\` and you can change the prefix Ex: Obi setprefix - ]
   $color[RANDOM]`
   })
   bot.onGuildJoin()

   bot.joinCommand({ //command
    channel: "$getServerVar[welcome]", //channel where it will log
    code: `$​nomention
    $​description[<@$​authorID> Just joined our server !]
    $​author[$​username$​discriminator[$​authorID]]
    $​authorIcon[$​authorAvatar]
    $​footer[$​date | $​serverName[$​guildID]]
    $​addTimestamp
    $​footerIcon[$​serverIcon]` //Message sent to <channel>
})
bot.onJoined()

bot.deletedCommand({
    channel: "$channelID",
    code: `$setChannelVar[snipe_msg;$message]
    $setChannelVar[snipe_author;$authorID]
    $setChannelVar[snipe_channel;$channelID]
    $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
   });
   bot.onMessageDelete();
    
   bot.command({
   name: "snipe",
   code: `$color[RANDOM]
   $author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
   $description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
   $footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
   $onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]`
   })
    
   bot.command({
   name: "quote",
   code: ` $author[$userTag[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]];$userAvatar[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]]]
   $description[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];content]
    
   [Jump to message\\]($replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$message];false;https://discord.com/channels/$guildID/$mentionedChannels[1;yes]/$noMentionMessage])]
   $textSplit[$message;/]
   $color[RANDOM]
   $suppressErrors[**⛔ Could not find message**]`
   })
    
    
   bot.updateCommand({
    channel: "$channelID",
    code: `$setChannelVar[msgEditorID;$authorID]
    $setChannelVar[esnipeOldMsg;$oldMessage]`
   })
   bot.onMessageUpdate();
    
   bot.command({
    name: "editsnipe",
    aliases: ["esnipe"],
    code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
   $description[$getChannelVar[esnipeOldMsg]]
   $addTimestamp
   $color[RANDOM]
   $onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
   $onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
   $suppressErrors[There is nothing to snipe]`
   })

   bot.command({
    name: "remindme", 
    code: `You will be reminded with $messageSlice[1] after $message[1].
$setTimeout[$message[1];
userID: $authorID 
message: $messageSlice[1]]`
})

bot.timeoutCommand({
    code: `$sendDM[$timeoutData[userID];$timeoutData[message]]`
})

bot.joinCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==];true;$randomChannelID];false;$getServerVar[joinchannel]]",
    code: `$djseval[(async() =>{const Discord = require('discord.js')
    const canvas = require('discord-canvas'),
      welcomeCanvas = new canvas.Welcome();
    let image = await welcomeCanvas
      .setUsername("${username}")
      .setDiscriminator("${discrim}")
      .setMemberCount("${members}")
      .setGuildName("${guild}")
      .setAvatar("${avatar}")
      .setColor("border", "#ff0000")
      .setColor("username-box", "#660000")
      .setColor("discriminator-box", "#ff0000")
      .setColor("message-box", "#ff6666")
      .setColor("title", "#ff0000")
      .setColor("avatar", "#660000")
      .setBackground("${background}")
      .toAttachment();
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome.png");
    message.channel.send(attachment);
    })()]
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinmessage];(user.mention);<@$authorID>];(guild.name);$serverName];(user.username);$username[$authorID]];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
    $onlyIf[$getServerVar[joinmessage]!=;]$onlyIf[$getServerVar[joinchannel]!=;]
    $onlyIf[$getServerVar[joinchannel]==$channelID;]
    $suppressErrors[**⛔ Error**{delete:1s}]`
    })
     
    bot.onJoined();
     
     
    bot.leaveCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==];true;$randomChannelID];false;$getServerVar[leavechannel]]",
    code: `$djseval[(async() =>{const Discord = require('discord.js')
    const canvas = require('discord-canvas'),
      goodbyeCanvas = new canvas.Goodbye();
    let image = await goodbyeCanvas
      .setUsername("${username}")
      .setDiscriminator("${discrim}")
      .setMemberCount("${members}")
      .setGuildName("${guild}")
      .setAvatar("${avatar}")
      .setColor("border", "#ff5c33")
      .setColor("username-box", "#ff0000")
      .setColor("discriminator-box", "#ff0000")
      .setColor("message-box", "#ff0000")
      .setColor("title", "#ff0000")
      .setColor("avatar", "#ff5c33")
      .setBackground("${background}")
      .toAttachment();
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye.png");
    message.channel.send(attachment);
    })()]
    $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemessage];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
    $onlyIf[$getServerVar[leavemessage]!=;]
    $onlyIf[$getServerVar[leavechannel]!=;]
    $onlyIf[$getServerVar[leavechannel]==$channelID;]
    $suppressErrors[**⛔ Error**{delete:1s}]`
    })
     
    bot.onLeave();
     
     
    bot.command({
     name: "setjoinchannel",
     code: `
    $setServerVar[joinchannel;$mentionedChannels[1]]
    Set Server Joinchannel To <#$mentionedChannels[1]>
    $onlyIf[$mentionedChannels[1]!=;Mention a channel]
    $onlyPerms[manageserver;You need manage server permission]`
     })
     
    bot.command({
     name: "setleavechannel",
     code: `
    $setServerVar[leavechannel;$mentionedChannels[1]]
    Successfully Set Server Leave Channel To <#$mentionedChannels[1]>
    $onlyIf[$mentionedChannels[1]!=;Mention a channel]
    $onlyPerms[manageserver;You need manage server permission!]`
     })
     
    bot.command({
     name: "setleavemessage",
     code: `
    $setServerVar[leavemessage;$message]
    Set Server Leave Message To $message
    $onlyIf[$getServerVar[leavechannel]!=;This Server Has No Join Leave! Set it by $getServerVar[prefix]setleavemessage
    (channel)]
    $argsCheck[>1;Write something]
    $onlyPerms[manageserver;You need manage server permission]`
     })
     
    bot.command({
     name: "setjoinmessage",
     code: `
    $setServerVar[joinmessage;$message]
    Set Server Join Message To $message
    $onlyIf[$getServerVar[joinchannel]!=;Server Join Message To $message
    $onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
    $argsCheck[>1;Write something]
    $onlyPerms[manageserver;You need manage server permission]`
     })
     
     
     //welcome without image, if you choose this don't put the previous commands
     bot.joinCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[joinchannel]==];true;$randomChannelID];false;$getServerVar[joinchannel]]",
    code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[joinmessage];(user.mention);<@$authorID>];(guild.name);$serverName];(user.username);$username[$authorID]];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
    $onlyIf[$getServerVar[joinmessage]!=;]$onlyIf[$getServerVar[joinchannel]!=;]
    $onlyIf[$getServerVar[joinchannel]==$channelID;]
    $suppressErrors[**⛔ Error**{delete:5s}]`
    })
     
    bot.onJoined();
     
     
    bot.leaveCommand({
    channel: "$replaceText[$replaceText[$checkCondition[$getServerVar[leavechannel]==];true;$randomChannelID];false;$getServerVar[leavechannel]]",
    code: `$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemessage];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
    $onlyIf[$getServerVar[leavemessage]!=;]
    $onlyIf[$getServerVar[leavechannel]!=;]
    $onlyIf[$getServerVar[leavechannel]==$channelID;]
    $suppressErrors[**⛔ Error**{delete:5s}]`
    })
     
    bot.onLeave();
     
     
    bot.command({
     name: "setjoinchannel",
     code: `
    $setServerVar[joinchannel;$mentionedChannels[1]]
    Set Server Joinchannel To <#$mentionedChannels[1]>
    $onlyIf[$mentionedChannels[1]!=;Mention a channel]
    $onlyPerms[manageserver;You need manage server permission]`
     })
     
    bot.command({
     name: "setleavechannel",
     code: `
    $setServerVar[leavechannel;$mentionedChannels[1]]
    Successfully Set Server Leave Channel To <#$mentionedChannels[1]>
    $onlyIf[$mentionedChannels[1]!=;Mention a channel]
    $onlyPerms[manageserver;You need manage server permission!]`
     })
     
    bot.command({
     name: "setleavemessage",
     code: `
    $setServerVar[leavemessage;$message]
    Set Server Leave Message To $message
    $onlyIf[$getServerVar[leavechannel]!=;This Server Has No Join Leave! Set it by $getServerVar[prefix]setleavemessage
    (channel)]
    $argsCheck[>1;Write something]
    $onlyPerms[manageserver;You need manage server permission]`
     })
     
    bot.command({
     name: "setjoinmessage",
     code: `
    $setServerVar[joinmessage;$message]
    Set Server Join Message To $message
    $onlyIf[$getServerVar[joinchannel]!=;Server Join Message To $message
    $onlyIf[$getServerVar[joinchannel]!=;This Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]Server Has No Join Channel! Set it by $getServerVar[prefix]setjoinchannel (channel)]
    $argsCheck[>1;Write something]
    $onlyPerms[manageserver;You need manage server permission]`
     })

     bot.command({
        name: "setrank",
        usage: "setrank <channel>",
        description: "settings the levelup channel",
        code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
       $color[01ff00]
       $setServerVar[rch;$mentionedChannels[1;yes]]
       $setServerVar[rsystem;1]
       $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
       $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
       $cooldown[5s;Please wait **%time%**]`
       })
        
       bot.command({
        name: "resetrank",
        usage: "resetrank",
        description: "reset the levelup channel",
        code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
       $color[01ff00]
       $setServerVar[rch;]
       $setServerVar[rmsg;$getVar[rmsg]]
       $setServerVar[rsystem;0]
       $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
       $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
       $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
       $cooldown[5s;Please wait **%time%**]`
       })
        
       bot.command({
        name: "$alwaysExecute",
        code: `$useChannel[$getServerVar[rch]]
       $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
       $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
       $setUserVar[rexp;$multi[$getUserVar[rexp];2]]
       $onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
       $onlyForServers[$guildID;]` 
       })
        
       bot.command({
        name: "$alwaysExecute",
        code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
       $onlyIf[$getServerVar[rsystem]>=1;]
       $onlyForServers[$guildID;]`
       })
        
       bot.awaitedCommand({
        name: "errorrank",
        code: `$setServerVar[rch;]
       $onlyForServers[$guildID;]`
       })
        
       bot.command({
        name: "setrankmsg",
        usage: "setrankmsg <message>",
        description: "message for the leveled up",
        code: `$description[You have been setted the message to:
       \`$message\`]
       $color[01ff00]
       $setServerVar[rmsg;$message]
       $onlyIf[$message!=;You can also use this variables:
       \`\`\`
       {user.tag} = $userTag
       {user.mention} = <@$authorID>
       {level} = 1
       {exp} = 25
       \`\`\`
       Current msg is:
       \`$getServerVar[rmsg]\`]
       $onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
       $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
       $cooldown[5s;Please wait **%time%**]`
       })
        
       bot.command({
        name: "rank",
        aliases: ["level"],
        usage: "rank (user)",
        description: "see the current level and exp",
        code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
       $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
       $cooldown[5s;]`
       })