const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlIMUs1b3oycnp1VmVYbjAzbTBkNEZoMDJhWDV4N3lzeG93dDRtbU1rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkx5L0NTUlJDOGJBQmJnSXZUUlJoMlg2Z3RZQ092ZHpEdkxWbi9uYjVoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ05WU3ZRMXlhZU4vbDN4OS9RTC9zdmVmbmFnSGZxSmc0TUhGdnJzZEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNaWdicWhEdTd2ZTFsKzFGcExFanVMVGYwUVVPeHMxd1c1d3VKTncyaURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBU1RCMENDMXA2Si9yV0FoRFVlU2k5OU5pUXFEYWk3NDVBNGRTTVJKRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZUcGFhY3FJR3ZCZ3Z4ZDZNNFBFYmpqcEp1RlRqMlc5YjlwVzhrVnl3eGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZ6TWx6VFZCbUNQbEZ3UGNlM0pBQldLTFVFTTNUYVBFS0VaaUN4RVRIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickplV3k2WG13Wmtxemh2ZGJ4bDE1RHFUdXBVMHM5NWJ0U0psZ0hNa3BFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw1cTFERTFPSmpuOWM5clpWSzZLdjc2Vis4RHlYMnFSMEdBOFlOR3pCdk9vakVjYnBLYkJENmE4azV6aVBoeHV2ZGsySnhXdTUrYWpjSnVWVXFPdWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IlJ1OFFZY3U0RkJ1MHVZL1NlVlNhRHhMcFoyS3JOYSs0cWpTTVY3ZVJVVUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDg4MjEyMTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RDZBNEE5NDg2MjU3QkM4ODJEMjNEMjZEMDlGNUU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njc1Njc5MTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA4ODIxMjE0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTZDMTUzNDRFNjY1N0RGRDE1N0E0N0JFODczNjJFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY3NTY3OTE4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwODgyMTIxNDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVGMzJGRUFFNUQzMzE5M0Y3Qzg2QjRGM0Y2REEyMTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzU2NzkxOH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiOTIzMDg4MjEyMTQ0OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bSAybThtIDKj+G0gOG0myDhtIvJqsm0yaIiLCJsaWQiOiIyMDkwNDA5NzQwODIxMzA6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ095anBoc1FudVRyeWdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ill1Wlp5WHFDUWVoa0tjS1NHMzR6Umlxei9kV1p0elp1T3YyMnY5OVA5d3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRsT1FXNUV6SktQcWh4N2FDV1E4ekluRkh6SGloZnI5MUQvVTJEKzhydEFva3IzSERMaUUvTTRMbjFnMFFaKytkYzVoaWRoYWF0aGJGUVBoaUxJbERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwQ1piWTZXWnd6enE1c0c0NzhmWjltd1BOcE85ZkMxVURtYXZxdzQ5MGk4OG8rbFc4T2xNY0NQQVl1UE1waW1ZcXN1azlCWWV5aGZHRndGS2p0NjBqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA4ODIxMjE0NDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldMbVdjbDZna0hvWkNuQ2todCtNMFlxcy8zVm1iYzJianI5dHIvZlQvY0wifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzU2NzkxNiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdYMSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
