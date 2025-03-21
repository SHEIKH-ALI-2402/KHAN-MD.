const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
     *꧁ྀི*𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*ྀི꧂*
*❖╭─────────────···▸*
> *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *ɴᴀᴍᴇ ʙᴏᴛ* : *𝐒𝐇𝐄𝐈𝐊𝐇 𝐀𝐋𝐈 𝐌𝐃*
> *ᴄʀᴇᴀᴛᴏʀ* : *𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*
> *ᴠᴇʀsɪᴏɴ* : *ᴠ.2.0*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
*├➤ 2 • ᴀɪ ᴍᴇɴᴜ
*├➤ 3 • ᴀɴɪᴍᴇ ᴍᴇɴᴜ
*├➤ 4 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
*├➤ 5 • ғᴜɴ ᴍᴇɴᴜ
*├➤ 6 • ᴍᴀɪɴ ᴍᴇɴᴜ
*├➤ 7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ
*├➤ 8 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ
*├➤ 9 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ
*├➤ 10 ǫᴜʀᴀɴ ᴍᴇɴᴜ
*├➤ 11 • ʀᴇᴀᴄᴛɪᴏɴs
*├➤ 12 • sᴄᴀᴍᴍᴇʀ 
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤ 🔢Reply with the Number you want to select

> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/YdSKMhv/6767.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾───☉ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • facebook
┃★│ • mediafire
┃★│ • tiktok
┃★│ • twitter
┃★│ • Insta
┃★│ • apk
┃★│ • img
┃★│ • tt2
┃★│ • pins
┃★│ • apk2
┃★│ • fb2
┃★│ • pinterest 
┃★│ • spotify
┃★│ • play
┃★│ • play2
┃★│ • play3
┃★│ • play4
┃★│ • play5
┃★│ • play6
┃★│ • play7
┃★│ • play8
┃★│ • play9
┃★│ • play10
┃★│ • audio
┃★│ • video
┃★│ • video2
┃★│ • video3
┃★│ • video4
┃★│ • video5
┃★│ • video6
┃★│ • video7
┃★│ • video8
┃★│ • video9
┃★│ • video10
┃★│ • ytmp3
┃★│ • ytmp4
┃★│ • song
┃★│ • darama
┃★│ • gdrive
┃★│ • ssweb
┃★│ • tiks
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '2':               
                        reply(`*꧁◈╾───☉ ᴀɪ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • ai
┃★│ • gpt3
┃★│ • gpt2
┃★│ • gptmini
┃★│ • gpt
┃★│ • meta
┃★│ • blackbox
┃★│ • luma
┃★│ • dj 
┃★│ • sheikh
┃★│ • ali
┃★│ • gpt4
┃★│ • bing
┃★│ • imagine 
┃★│ • imagine2
┃★│ • copilot
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '3':               
                        reply(`*꧁◈╾───☉ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • fack
┃★│ • dog
┃★│ • awoo
┃★│ • garl
┃★│ • waifu
┃★│ • neko
┃★│ • megnumin
┃★│ • neko
┃★│ • maid
┃★│ • loli
┃★│ • animegirl
┃★│ • animegirl
┃★│ • animegirl1
┃★│ • animegirl
┃★│ • animegirl3
┃★│ • animegirl4
┃★│ • animegirl5
┃★│ • anime1
┃★│ • anime1
┃★│ • anime2
┃★│ • anime3
┃★│ • anime4
┃★│ • anime5
┃★│ • animenews
┃★│ • foxgirl
┃★│ • naruto
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾───☉ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • sticker
┃★│ • sticker2
┃★│ • emojimix
┃★│ • fancy
┃★│ • take
┃★│ • tomp3
┃★│ • tts
┃★│ • trt
┃★│ • base64
┃★│ • unbase64
┃★│ • binary
┃★│ • dbinary
┃★│ • tinyurl
┃★│ • urldecode
┃★│ • urlencode
┃★│ • url
┃★│ • repeat 
┃★│ • ask
┃★│ • readmore
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '5':               
                        reply(`*꧁◈╾───☉ ғᴜɴ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • shapar
┃★│ • rate
┃★│ • insult
┃★│ • hack
┃★│ • ship
┃★│ • character
┃★│ • pickup 
┃★│ • joke
┃★│ • hrt
┃★│ • hpy
┃★│ • syd
┃★│ • anger
┃★│ • shy
┃★│ • kiss
┃★│ • mon
┃★│ • cunfuzed
┃★│ • setpp
┃★│ • hand
┃★│ • nikal
┃★│ • hold
┃★│ • hug
┃★│ • nikal
┃★│ • hifi
┃★│ • poke
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾───☉ ᴍᴀɪɴ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • ping
┃★│ • live 
┃★│ • alive
┃★│ • runtime
┃★│ • uptime 
┃★│ • repo
┃★│ • owner
┃★│ • menu
┃★│ • scammer
┃★│ • restart
┃★│ • quran
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾───☉ ɢʀᴏᴜᴘ  ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • grouplink
┃★│ • kickall
┃★│ • kickall2
┃★│ • kickall3
┃★│ • add
┃★│ • remove
┃★│ • kick
┃★│ • promote 
┃★│ • demote
┃★│ • dismiss 
┃★│ • revoke
┃★│ • setgoodbye
┃★│ • setwelcome
┃★│ • delete 
┃★│ • getpic
┃★│ • ginfo
┃★│ • delete 
┃★│ • disappear on
┃★│ • disappear off
┃★│ • disappear 7D,24H
┃★│ • allreq
┃★│ • updategname
┃★│ • updategdesc
┃★│ • joinrequests
┃★│ • senddm
┃★│ • nikal
┃★│ • mute
┃★│ • unmute
┃★│ • lockgc
┃★│ • unlockgc
┃★│ • invite
┃★│ • tag
┃★│ • hidetag
┃★│ • tagall
┃★│ • tagadmins
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾───☉ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*

╭────────●●►
┃★│ • owner
┃★│ • menu
┃★│ • allmenu
┃★│ • repo
┃★│ • block
┃★│ • unblock
┃★│ • fullpp
┃★│ • setpp
┃★│ • restart
┃★│ • shutdown
┃★│ • updatecmd
┃★│ • alive
┃★│ • ping 
┃★│ • gjid
┃★│ • jid
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '9':               
                        reply(`*꧁◈╾───☉ ᴏᴛʜᴇʀ ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃★│ • timenow
┃★│ • date
┃★│ • count
┃★│ • calculate
┃★│ • countx
┃★│ • flip
┃★│ • coinflip
┃★│ • rcolor
┃★│ • roll
┃★│ • fact
┃★│ • cpp
┃★│ • rw
┃★│ • pair
┃★│ • pair2
┃★│ • pair3
┃★│ • fancy
┃★│ • logo <text>
┃★│ • define
┃★│ • news
┃★│ • movie
┃★│ • weather
┃★│ • srepo
┃★│ • insult
┃★│ • save
┃★│ • wikipedia
┃★│ • gpass
┃★│ • githubstalk
┃★│ • yts
┃★│ • ytv
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '10':               
                        reply(`*꧁◈╾───☉ ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
┃★│ •  bully @tag
┃★│ •  cuddle @tag
┃★│ •  cry @tag
┃★│ •  hug @tag
┃★│ •  awoo @tag
┃★│ •  kiss @tag
┃★│ •  lick @tag
┃★│ •  pat @tag
┃★│ •  smug @tag
┃★│ •  bonk @tag
┃★│ •  yeet @tag
┃★│ •  blush @tag
┃★│ •  smile @tag
┃★│ •  wave @tag
┃★│ •  highfive @tag
┃★│ •  handhold @tag
┃★│ •  nom @tag
┃★│ •  bite @tag
┃★│ •  glomp @tag
┃★│ •  slap @tag
┃★│ •  kill @tag
┃★│ •  happy @tag
┃★│ •  wink @tag
┃★│ •  poke @tag
┃★│ •  dance @tag
┃★│ •  cringe @tag                        
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '11':               
                        reply(`*꧁◈╾───☉ ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ☉───╼◈꧂*
                        
╭────────●●►
❤️  ⊷┈ *𝑸𝑼𝑹𝑨𝑵 𝑲𝑨𝑹𝑬𝑬𝑴* ┈⊷  🤍

 💫 𝘈𝘭𝘭 𝘴𝘶𝘳𝘢𝘩 𝘢𝘯𝘥 𝘵𝘩𝘦𝘪𝘳 𝘯𝘶𝘮𝘣𝘦𝘳𝘴 𝘭𝘪𝘴𝘵
𝘧𝘰𝘳 𝘨𝘦𝘵𝘵𝘪𝘯𝘨 𝘴𝘶𝘳𝘢𝘩 𝘵𝘺𝘱𝘦 .𝘴𝘶𝘳𝘢𝘩 1 💫🌸 

1. 🕌 𝐀𝐋-𝐅𝐀𝐓𝐈𝐇𝐀\x20(The\x20Opening)\x20-\x20الفاتحہ\x20(پہلا\x20سورہ)


2. 🐄 𝐀𝐋-𝐁𝐀𝐐𝐀𝐑𝐀𝐇\x20(The\x20Cow)\x20-\x20البقرہ\x20(گائے)


3. 🏠 𝐀𝐋\x20𝐈𝐌𝐑𝐀𝐍\x20(The\x20Family\x20of\x20Imran)\x20-\x20آل\x20عمران\x20(عمران\x20کا\x20خاندان)


4. 👩 𝐀𝐍-𝐍𝐈𝐒𝐀\x27\x20(The\x20Women)\x20-\x20النساء\x20(عورتیں)


5. 🍽️ 𝐀𝐋-𝐌𝐀𝐈𝐃𝐀𝐇\x20(The\x20Table\x20Spread)\x20-\x20المائدہ\x20(پھیلی\x20ہوئی\x20میز)


6. 🐪 𝐀𝐋-𝐀𝐍\x27𝐀𝐌\x20(The\x20Cattle)\x20-\x20الانعام\x20(مویشی)


7. ⛰️ 𝐀𝐋-𝐀\x27𝐑𝐀𝐅\x20(The\x20Heights)\x20-\x20الأعراف\x20(بلندیاں)


8. ⚔️ x20𝐀𝐋-𝐀𝐍𝐅𝐀𝐋\x20(The\x20Spoils\x20of\x20War)\x20-\x20الانفال\x20(غنائم)


9. 🙏 𝐀𝐓-𝐓𝐀𝐔𝐁𝐀𝐇\x20(The\x20Repentance)\x20-\x20التوبہ\x20(توبہ)


10. 🐟 𝐘𝐎𝐔𝐍𝐔𝐒\x20(Prophet\x20Younus)\x20-\x20یونس\x20(یونس)


11. 🌩️ 𝐇𝐎𝐃\x20(Prophet\x20Hod)\x20-\x20ہود\x20(ہود)


12. 👶 𝐘𝐎𝐔𝐒𝐔𝐅\x20(prophet\x20Yousuf)\x20-\x20یوسف\x20(یوسف)


13. ⚡ 𝐀𝐑-𝐑𝐀𝐃\x20(The\x20Thunder)\x20-\x20الرعد\x20(گرج)


14. 🕊️ 𝐈𝐁𝐑𝐀𝐇𝐈𝐌\x20(Prophet\x20Abrahim)\x20-\x20ابراہیم\x20(ابراہیم)


15. 🪨 𝐀𝐈-𝐇𝐈𝐉𝐑\x20(The\x20Rocky\x20Tract)\x20-\x20الحجر\x20(پتھرائی\x20زمین)

16. 🐝 𝐈𝐁𝐑𝐀𝐇𝐈𝐌\x20(Prophet\x20Abrahim)\x20-\x20ابراہیم\x20(ابراہیم)


17. 🌙 𝐀𝐍-𝐍𝐀𝐇𝐋\x20(The\x20Bee)\x20-\x20النحل\x20(مکھی)


18. 🕳️ 𝐀𝐋-𝐊𝐀𝐇𝐅\x20(The\x20Cave)\x20-\x20الکہف\x20(غار)


19. 🧕🏻 𝐌𝐀𝐑𝐘𝐀𝐌\x20(Mary)\x20-\x20مریم\x20(مریم)


20. 📜 𝐓𝐀-𝐇𝐀\x20(Ta-Ha)\x20-\x20طٰہٰ\x20(طٰہٰ)


21. 📖 𝐀𝐋-𝐀𝐍𝐁𝐈𝐘𝐀\x27\x20(The\x20Prophets)


22. 🕋 𝐀𝐋-𝐇𝐀𝐉𝐉\x20(The\x20Pilgrimage)\x20-\x20الحج\x20(حج)


23. 🙌 𝐀𝐋-𝐌𝐔\x27𝐌𝐈𝐍𝐔𝐍\x20(The\x20Believers)\x20-\x20المؤمنون\x20(ایمان\x20والے)


24. 💡 𝐀𝐋-𝐍𝐎𝐎𝐑\x20(The\x20Light)


25. ⚖️ 𝐀𝐋-𝐅𝐔𝐑𝐐𝐀𝐍\x20(The\x20Criterion)\x20-\x20الفرقان\x20(فرق\x20کرنے\x20والا)


26. 🎤 𝐀𝐋-𝐒𝐇𝐔𝐀𝐑𝐀\x20(The\x20Poets)\x20-\x20الشعراء\x20(شاعر)


27. 🐜 𝐀𝐋-𝐍𝐀𝐌𝐋\x20(The\x20Ants)\x20-\x20النمل\x20(چڑیا)


28. 📚 𝐀𝐋-𝐐𝐀𝐒𝐀𝐒\x20(The\x20Stories)\x20-\x20القصص\x20(کہانیاں)


29. 🕷️ 𝐀𝐋-𝐀𝐍𝐊𝐀𝐁𝐎𝐎𝐓\x20(The\x20Spider)\x20-\x20الأنعام\x20(مکڑی)


30. 🏛️ 𝐀𝐋-𝐑𝐎𝐎𝐍\x20(The\x20Romans)


31. 📖 𝐋𝐔𝐐𝐌𝐀𝐍\x20(Luqman)\x20-\x20لقمان\x20(لقمان)


32. 🙇 𝐀𝐒-𝐒𝐀𝐉𝐃𝐀\x20(The\x20Prostration)\x20-\x20السجدہ\x20(سجدہ)

33. ⚔️ 𝐀𝐋-𝐀𝐇𝐙𝐀𝐁\x20(The\x20Coalition)\x20-\x20الاحزاب\x20(مخلوط\x20قوتیں)


34. 🌸 𝐒𝐀𝐁𝐀\x20(Sheva)\x20-\x20سبا\x20(سبا)


35. 🛠️ 𝐅𝐀𝐓𝐈𝐑\x20(The\x20Originator)\x20-\x20فاطر\x20(خالق)


36. 📖 𝐘𝐀-𝐒𝐄𝐄𝐍\x20(Yaseen)\x20-\x20یس\x20(یس)


37. 🛡️ 𝐀𝐒-𝐒𝐀𝐀𝐅𝐅𝐀𝐓\x20(Those\x20who\x20set\x20the\x20Ranks)\x20-\x20الصافات\x20(صفیں\x20مرتب\x20کرنے\x20والے)


38. 🅱️ 𝐒𝐀𝐃\x20(The\x20Arabic\x20Letter\x20Sad)\x20-\x20صاد\x20(حرف\x20صاد)
     
     
39. 🪖 𝐀𝐙-𝐙𝐔𝐌𝐀𝐑\x20(The\x20Companies)\x20-\x20الزمر\x20(جنگی\x20دستے)

40. 🤲 𝐆𝐀𝐅𝐈𝐑\x20(The\x20Forgiver)\x20-\x20غافر\x20(بخشنے\x20والا)


41. 📜 𝐅𝐔𝐒𝐒𝐈𝐋𝐀𝐓\x20(Explained\x20in\x20Detail)\x20-\x20فصلت\x20(تفصیل\x20سے\x20بیان)


42. 🗣️ 𝐀𝐒𝐇-𝐒𝐇𝐔𝐑𝐀\x20(Council)\x20-\x20الشوری\x20(مشاورت)


43. 💰 𝐀𝐙-𝐙𝐔𝐊𝐇𝐑𝐔𝐅\x20(The\x20ornaments\x20of\x20Gold)\x20-\x20الزخرف\x20(سونے\x20کے\x20زیور)


44. 💨 𝐀𝐃-𝐃𝐔𝐊𝐇𝐀𝐍\x20(The\x20Smoke)\x20-\x20الدخان\x20(دھواں)


45. 🐊 𝐀𝐋-𝐉𝐀𝐒𝐈𝐘𝐀𝐇\x20(The\x20Crouching)\x20-\x20الجاثیہ\x20(جھکنا)


46. 🌪️ 𝐀𝐋-𝐀𝐇𝐐𝐀𝐅\x20(The\x20Sandhills)\x20-\x20الأحقاف\x20(ہوائی\x20چکروں\x20والی\x20ریت\x20کی\x20پہاڑیاں)


47. 🕋 𝐌𝐔𝐇𝐀𝐌𝐌𝐀𝐃\x20(Muhammad)\x20-\x20محمد\x20(محمد)


48. 🏆 𝐀𝐋-𝐅𝐀𝐓𝐇\x20(The\x20Victory)\x20-\x20الفتح\x20(فتح)


49. 🏠 𝐀𝐋-𝐇𝐔𝐉𝐔𝐑𝐀𝐓\x20(The\x20Rooms)\x20-\x20الحجرات\x20(کمرے))


50. 🔤 𝐐𝐀𝐅\x20(The\x20Letter\x20Qaf)\x20-\x20قاف\x20(حرف\x20قاف)


51. 🌬️ 𝐀𝐃𝐇-𝐃𝐇𝐀𝐑𝐈𝐘𝐀𝐓\x20(The\x20Winnowing\x20Winds)\x20-\x20الذاریات\x20(پھٹنے\x20والی\x20ہوائیں)


52. ⛰️ 𝐀𝐓-𝐓𝐔𝐑\x20(The\x20Mount)\x20-\x20الطور\x20(پہاڑ)


53. 🌟 𝐀𝐍-𝐍𝐀𝐉𝐌\x20(The\x20Star)\x20-\x20النجم\x20(ستارہ)


54. 🌙 𝐀𝐋-𝐐𝐀𝐌𝐀𝐑\x20(The\x20Moon)\x20-\x20القمر\x20(چاند)


55. 💖 𝐀𝐑-𝐑𝐀𝐇𝐌𝐀𝐍\x20(The\x20Beneficent)\x20-\x20الرحمن\x20(بہت\x20مہربان)


56. 🌌 𝐀𝐋-𝐖𝐀𝐐𝐈𝐀𝐇\x20(The\x20Inevitable)\x20-\x20الواقعہ\x20(ہونے\x20والا)


57. 🔩 𝐀𝐋-𝐇𝐀𝐃𝐈𝐃\x20(The\x20Iron)\x20-\x20الحدید\x20(لوہا)


58. 👩‍⚖️ 𝐀𝐋-𝐌𝐔𝐉𝐀𝐃𝐀𝐋𝐀𝐇\x20(The\x20Pleading\x20Woman)\x20-\x20المجادلہ\x20(مدعی\x20عورت)


59. 🏴 𝐀𝐊-𝐇𝐀𝐒𝐇𝐑\x20(The\x20Exile)\x20-\x20الحشر\x20(اخراج)


60. 🔍 𝐀𝐋-𝐌𝐔𝐌𝐓𝐀𝐇𝐈𝐍𝐀𝐇\x20(She\x20that\x20is\x20to\x20be\x20examined)\x20-\x20الممتحنہ\x20(جانچنے\x20والی)


61. 📊 𝐀𝐒-𝐒𝐀𝐅𝐅\x20(The\x20Ranks)\x20-\x20الصف\x20(صفیں)


62. 🕌 𝐀𝐋-𝐉𝐔𝐌𝐔𝐀𝐇\x27ah\x20(Friday)\x20-\x20الجمعة\x20(جمعہ)


63. 🤥 𝐀𝐋-𝐌𝐔𝐍𝐀𝐅𝐈𝐐𝐎𝐍\x20(The\x20Hypocrites)\x20-\x20المنافقون\x20(منافق)


64. 🌪️ 𝐀𝐓-𝐓𝐀𝐆𝐇𝐀𝐁𝐔𝐍\x20(Mutual\x20Disillusion)\x20-\x20التغابن\x20(آپس\x20کی\x20بے\x20وقوفی)


65. 💔 𝐀𝐓-𝐓𝐀𝐋𝐀𝐐\x20(The\x20Divorce)\x20-\x20الطلاق\x20(طلاق)


66. 🚫 𝐀𝐓-𝐓𝐀𝐇𝐑𝐈𝐌\x20(The\x20Prohibition)\x20-\x20التحریم\x20(پابندی)


67. 👑 𝐀𝐋-𝐌𝐔𝐋𝐊\x20(The\x20Sovereignty)\x20-\x20المُلك\x20(حکومت)


68. 🖋️ 𝐀𝐋-𝐐𝐀𝐋𝐀𝐌\x20(The\x20Pen)\x20-\x20القلم\x20(قلم)


69. 🔍 𝐀𝐋-𝐇𝐀𝐐𝐐𝐀𝐇\x20(The\x20Reality)\x20-\x20الحقہ\x20(حقیقت)


70. ⬆️ 𝐀𝐋-𝐌𝐀\x27𝐀𝐑𝐈𝐉\x20(The\x20Ascending\x20Stairways)\x20-\x20المعارج\x20(چڑھنے\x20کی\x20سیڑھیاں)


71. 🌊 𝐍𝐔𝐇\x20(Noah)\x20-\x20نوح\x20(نوح)


72. 👻 𝐀𝐋-𝐉𝐈𝐍𝐍\x20(The\x20Jinn)\x20-\x20الجن\x20(جنات)


73. 🕵️‍♂️ 𝐀𝐋-𝐌𝐔𝐙𝐙𝐀𝐌𝐌𝐈𝐋\x20(The\x20Enshrouded\x20One)\x20-\x20المزمل\x20(چادر\x20اوڑھے\x20ہوئے)


74. 🧕 𝐀𝐋-𝐌𝐔𝐃𝐃𝐀𝐓𝐇𝐓𝐇𝐈𝐑\x20(The\x20Cloaked\x20One)\x20-\x20المُدثر\x20(پوشیدہ)


75. 🌅 𝐀𝐋-𝐐𝐈𝐘𝐀𝐌𝐀𝐇\x20(The\x20Calamity)\x20-\x20القارعة\x20(آفت)


76. 🧑‍🤝‍🧑 𝐀𝐋-𝐃𝐀𝐇𝐑\x20(Eternity)\x20-\x20ابدیت\x20(ابدیت)


77. ✉️ 𝐀𝐋-𝐌𝐔𝐑𝐒𝐀𝐋𝐀𝐓\x20(The\x20Emissaries)\x20-\x20المُرسلات\x20(پہنچانے\x20والے


78. 📣 𝐀𝐍-𝐍𝐀𝐁𝐀\x20(The\x20Tidings)\x20-\x20النبأ\x20(خبریں)


79. 🪤 𝐀𝐍-𝐍𝐀𝐙𝐈𝐀𝐓\x20(Those\x20who\x20drag\x20forth)\x20-\x20النازعات\x20(کھینچنے\x20والے)


80. 😠 𝐀𝐁𝐀𝐒𝐀\x20(He\x20frowned)\x20-\x20عبس\x20(اس\x20نے\x20چہرہ\x20بدلا)


81. 💥 𝐀𝐓-𝐓𝐀𝐊𝐖𝐈𝐑\x20(The\x20Overthrowing)\x20-\x20التکوير\x20(پھٹنا)


82. 💔 𝐀𝐋-𝐈𝐍𝐅𝐈𝐓𝐀𝐀𝐑\x20(The\x20Cleaving)\x20-\x20الانفطار\x20(پھٹنا)


83. ⚖️ 𝐀𝐋-𝐌𝐔𝐓𝐀𝐅𝐅𝐈𝐅𝐈𝐍\x20(Defrauding)\x20-\x20المطففين\x20(کم\x20تولنے\x20والے)


84. 🌀 𝐀𝐋-𝐈𝐍𝐒𝐇𝐈𝐐𝐀𝐐\x20(The\x20Splitting\x20Open)\x20-\x20الانشقاق\x20(پھٹنا)


85. 🌌 𝐀𝐋-𝐁𝐔𝐑𝐎𝐎𝐉\x20(The\x20Mansions\x20of\x20the\x20Stars)\x20-\x20البروج\x20(ستاروں\x20کے\x20گھر)


86. 🌠 𝐀𝐓-𝐓𝐀𝐑𝐈𝐐\x20(The\x20Morning\x20Star)\x20-\x20الطارق\x20(صبح\x20کا\x20ستارہ)


87. 🌍 𝐀𝐋-𝐀𝐋𝐀\x20(The\x20Most\x20High)\x20-\x20الأعلى\x20(سب\x20سے\x20بلند)


88. 🌊 𝐀𝐋-𝐆𝐇𝐀𝐀𝐒𝐇𝐈𝐘𝐀𝐇\x20(The\x20Overwhelming)\x20-\x20الغاشیہ\x20(پرامن)


89. 🌅 𝐀𝐋-𝐅𝐀𝐉𝐑\x20(The\x20Dawn)\x20-\x20الفجر\x20(صبح)


90. 🏙️ 𝐀𝐋-𝐁𝐀𝐋𝐀𝐃\x20(The\x20City)\x20-\x20البلد\x20(شہر)


91. ☀️ 𝐀𝐒𝐇-𝐒𝐇𝐀𝐌𝐒\x20(The\x20Sun)\x20-\x20الشمس\x20(سورج)


92. 🌜 𝐀𝐋-𝐋𝐀𝐈𝐋\x20(The\x20Night)\x20-\x20اللیل\x20(رات)


93. 🌅 𝐀𝐃-𝐃𝐔𝐇𝐀\x20(The\x20Morning\x20Hours)\x20-\x20الضحی\x20(صبح\x20کے\x20گھنٹے)


94. 📖 𝐀𝐋-𝐈𝐍𝐒𝐇𝐈𝐑𝐀𝐇\x20(The\x20Relief)\x20-\x20الشرح\x20(آرام)


95. 🍈 𝐀𝐓-𝐓𝐈𝐍\x20(The\x20Fig)\x20-\x20التین\x20(انجیر)


96. 💧 𝐀𝐋-𝐀𝐋𝐀𝐐\x20(The\x20Clot)\x20-\x20العلق\x20(خون\x20کا\x20لوتھڑا)


97. ⚡ 𝐀𝐋-𝐐𝐀𝐃𝐑\x20(The\x20Power)\x20-\x20القدر\x20(قدرت)


98. 📜 𝐀𝐋-𝐁𝐀𝐈𝐘𝐈𝐍𝐀𝐇\x20(The\x20Clear\x20Proof)\x20-\x20البینة\x20(واضح\x20دلیل)


99. 🌍 𝐀𝐙-𝐙𝐈𝐋𝐙𝐀𝐋\x20(The\x20Earthquake)\x20-\x20الزلزلة\x20(زلزلہ)


100. 🐎 𝐀𝐋-𝐀𝐃𝐈𝐘𝐀𝐓\x20(The\x20Chargers)\x20-\x20العادیات\x20(چارج\x20کرنے\x20والے)


101. ⚡ 𝐀𝐋-𝐐𝐀𝐑𝐈𝐀𝐇\x20(The\x20Calamity)\x20-\x20القارعة\x20(آفت)


102. 💰 𝐀𝐓-𝐓𝐀𝐊𝐀𝐓𝐇𝐔𝐑\x20(The\x20Abundance\x20of\x20Wealth)\x20-\x20التکاثر\x20(مال\x20کی\x20کثرت)


103. ⏳ 𝐀𝐋-𝐀𝐒𝐑\x20(The\x20Time)\x20-\x20العصر\x20(وقت)


104. 😠 𝐀𝐋-𝐇𝐔𝐌𝐀𝐙𝐀𝐇\x20(The\x20Scandal-Monger)\x20-\x20الہمزہ\x20(چغلی\x20کرنے\x20والا)


105. 🐘 𝐀𝐋-𝐅𝐈𝐋\x20(The\x20Elephant)\x20-\x20الفیل\x20(ہاتھی)


106. 🕌 𝐐𝐔𝐑𝐀𝐈𝐒𝐇\x20(Quraysh)\x20-\x20قریش\x20(قریش)


107. 🤲 𝐀𝐋-𝐌𝐀\x𝐔𝐍\x20(Acts\x20of\x20Kindness)\x20-\x20الماعون\x20(نیکی\x20کے\x20کام)


108. 🍇 𝐀𝐋-𝐊𝐀𝐔𝐓𝐇𝐀𝐑\x20(The\x20Abundance)\x20-\x20الکوثر\x20(کثرت)


109. ❌ 𝐀𝐋-𝐊𝐀𝐅𝐈𝐑𝐔𝐍\x20(The\x20Disbelievers)\x20-\x20الکافرون\x20(کافر)


110. 🛡️ 𝐀𝐍-𝐍𝐀𝐒𝐑\x20(The\x20Help)\x20-\x20النصر\x20(مدد)


111. 🔥 𝐀𝐋-𝐋𝐀𝐇𝐀𝐁\x20(The\x20Flame)\x20-\x20اللہب\x20(شعلہ)


112. ❤️ 𝐀𝐋-𝐈𝐊𝐇𝐋𝐀𝐒\x20(The\x20Sincerity)\x20-\x20الإخلاص\x20(اخلاص)


113. 🌅 𝐀𝐋-𝐅𝐀𝐋𝐀𝐐\x20(The\x20Daybreak)-\x20الفلق\x20(طلوع\x20صبح)


114. 🌐 𝐀𝐍-𝐍𝐀𝐒\x20(Mankind)\x20-\x20الناس\x20(انسانیت)                  
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        break;
                    case '12':               
                        reply(`*꧁◈╾───☉ sᴄᴀᴍᴍᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ☉───╼◈꧂*
                        
╭────────●●►
┃★│ • BC tatta 1🖕🏻: https://api.whatsapp.com/send?phone=923181093514&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 2🖕🏻: https://api.whatsapp.com/send?phone=923094230218&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 3🖕🏻: https://api.whatsapp.com/send?phone=447715929714&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 4🖕🏻: https://api.whatsapp.com/send?phone=923092342318&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 5🖕🏻: https://api.whatsapp.com/send?phone=923304093758&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 6🖕🏻: https://api.whatsapp.com/send?phone=923202231275&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ • BC tatta 7🖕🏻: https://api.whatsapp.com/send?phone=923134885399&text=hi+bc+scammer🖕🏻
┃★│ • BC gashti 1🖕🏻: https://api.whatsapp.com/send?phone=923299539369&text=hi+bc+scammer🖕🏻
╰────────────────────●●►

*꧁◈╾───☉ ɪᴍᴘᴏʀᴛᴀɴᴛ ᴍᴇssᴀɢᴇ ☉───╼◈꧂*
╭────────●●►
┃★│ • Please report to all these scammers's numbers.
┃★│ • If you have more scammers's number so contact me. I will add in my bot.
┃★│ • Owner: https://api.whatsapp.com/send?phone=923143702270&text=Hello+𓄂.𝑺𝑯𝑬𝑰𝑲𝑯+𝑨𝑳𝑰+🔥༽༼+♡+I+have+scammer's+number.+Please+add+his/her+number+in+your+bot🥰.
╰────────────────────●●►


> *© Pᴏᴡᴇʀᴇᴅ Bʏ 𓄂𝕚𝕥𝕩.𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ ♡*`);
                        
                        
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});