//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = 'GHOST XD V3' //ur bot name
global.ownernumber = '254107065646' //ur owner number
global.ownername = '© MR SMILE' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/IGc9Xl3Ta5C8LNnV0rUK9s" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "Mr Smile"
global.botscript = 'https://whatsapp.com/channel/0029VaesBAXJJhzefVszDu3h' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = "Ghost xd v3"
global.author = "Mr Smile"
global.creator = "254107065646@s.whatsapp.net"
global.xprefix = '+'
global.premium = ["254107065646"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '263,234' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autostatusview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
//========== Setting Auto react  ===========//
global.autoreact =  true


// Pick random emoji react status
global.emoji = [
    "🥶",
    "🙄",
    "😳",
    "😒",
    "🥰",
    "😎",
    "🫣",
    "😍",
    "😨",
    "😁",
    "😂",
    "👀",
    "👿",
    "🤖",
    "😮"
]
global.mess = {
	limit: '`Your limit is up <\>`',
    owner: '`command reserved for owner only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})