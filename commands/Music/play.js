module.exports.command = {
    name: "play",
    aliases: "p",
    code: `$color[RANDOM]
    $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
    $title[**Song Added to Queue**]
    $description[**Succesfully added** [$songInfo[title]\\]($songInfo[url]) to the **Queue**]
    $addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
    $addField[:dvd: | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
    $addField[:coffee: | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
    $addField[:clock10: Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
    $playSong[$message;1m;{title:Error}{description:**⛔ There was an error while making the request**}{color:RED}]
    $onlyIf[$message!=;{title:Error}{description:**⛔ I need Song name to find a** \`song\`...}]
    $onlyIf[$voiceID!=;**⛔ You are Not in a Voice channel! Join a voice channel**]`
}