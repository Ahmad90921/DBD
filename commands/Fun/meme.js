module.exports.command = ({
    name: "meme",
    code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
    $image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
    $footer[:thumbsup: - $jsonRequest[https://meme-api.herokuapp.com/gimme;ups] | $jsonRequest[https://meme-api.herokuapp.com/gimme;postLink] | u/$jsonRequest[https://meme-api.herokuapp.com/gimme;subreddit]]
    $onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
})