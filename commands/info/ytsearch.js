module.exports.command = ({
    name: "ytsearch",
    code: `$title[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]] 

    $addField[Duration;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration];no] 
    
    $addField[Date of upload;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded];no] 
    
    $addField[URL;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url];no] 
    
    $addField[Views;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views];no] 
    
    $addField[Channel name;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name];no] 
    
    $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]] 
    
    $color[RANDOM] 
    
    $addTimestamp `
})