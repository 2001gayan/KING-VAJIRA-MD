const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mongodbural:mongodbural@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94766943622'
global.devs = '94766943622';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElIWmxSVjZZUmNBT1F2M3RCOCtCejdJdVpCTTJHSTRnaHIzenR4ZmMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJ3WEdKWlBSS2tKQ1dXa3ZxekRxN0Z4TVRoY1czYTdCWG1UbGN6OHZScz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S0svRHVBQWFFZHFmYW5zRU94dnNSNGN0SGhFdngzZmRxR252L1BzNjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZUNodnFROW5Sek1xc09wbFNZN1FWRzJEV3BkMzhEeDNBV0N0cWhlcHpnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FTzNVY2ROeHlmM2tzTjZiUFVDYk4ycjNLYTBhbGErK1duTDBJVk9wMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii93dHRiL1ZNUnczVUN1R3FEdkFUMEEzTmpib09ZdURaZkZmQVA4OVovMzA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUUlkMWtRV3EyREFkcmdFM0VZdFpFMUU2T2tpMnVxWXhjVUdaUGtpaHNoQ2t6TUpzWHFPc2tDMk8vSy8vZFJSUm43MkJ6aHQxSlZCSFN5bmJKVmNnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MSwiYWR2U2VjcmV0S2V5IjoiODkzYllNc0NYUm4xQzVlbEptSmt2bGFnRWVoRTBCa0Rwa2MwQ28rOGdIOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib1diMjAxSU9UZzJrZXZ0NEkwWGNZQSIsInBob25lSWQiOiIxZjE0OGQxYS0zY2QzLTRlYWQtYWUzMS03NjAwZjcyODEzMjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzdiSDBveHhyZnczbVlsVzlxMkNjV1daSzNBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWWprMG1VdFRSYU4vNENTdzMvU2xyRkg0Vm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLRFp5SXdGRU02MDZhb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1PZi9FRTVhZHJ1WDJUc0lUZzNrTy92Rmh3eloyQllCenZpd2daTDQ4bnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9hMVFEb25YSit4anRwR21LdG9ONXliNDg1Qjk0VnpFVkRKTjFteVZRQnNwRGJNZFAzaVV0cUNYRlhiZ01XQTV0V3VmWlp5SmE2WVZsMFI2OTUyckR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0SGJmUmVYN2cxZjBBSGY1VHB2aDNQbW12cWx2d3B0L1FjUDZNV0RyOFNWczl3ck11WEhiR1pyY05wSmRrMGk5Z1lrR0lLYXlOMDlGOHVqY2d5QXRpQT09In0sIm1lIjp7ImlkIjoiOTQ3NjI0NTc5MzM6MjRAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI0NTc5MzM6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVERuL3hCT1duYTdsOWs3Q0U0TjVEdjd4WWNNMmRnV0FjNzRzSUdTK1BKOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMDQyMDE3N30=' =VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElIWmxSVjZZUmNBT1F2M3RCOCtCejdJdVpCTTJHSTRnaHIzenR4ZmMyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJ3WEdKWlBSS2tKQ1dXa3ZxekRxN0Z4TVRoY1czYTdCWG1UbGN6OHZScz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S0svRHVBQWFFZHFmYW5zRU94dnNSNGN0SGhFdngzZmRxR252L1BzNjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZUNodnFROW5Sek1xc09wbFNZN1FWRzJEV3BkMzhEeDNBV0N0cWhlcHpnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FTzNVY2ROeHlmM2tzTjZiUFVDYk4ycjNLYTBhbGErK1duTDBJVk9wMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii93dHRiL1ZNUnczVUN1R3FEdkFUMEEzTmpib09ZdURaZkZmQVA4OVovMzA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUUlkMWtRV3EyREFkcmdFM0VZdFpFMUU2T2tpMnVxWXhjVUdaUGtpaHNoQ2t6TUpzWHFPc2tDMk8vSy8vZFJSUm43MkJ6aHQxSlZCSFN5bmJKVmNnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MSwiYWR2U2VjcmV0S2V5IjoiODkzYllNc0NYUm4xQzVlbEptSmt2bGFnRWVoRTBCa0Rwa2MwQ28rOGdIOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib1diMjAxSU9UZzJrZXZ0NEkwWGNZQSIsInBob25lSWQiOiIxZjE0OGQxYS0zY2QzLTRlYWQtYWUzMS03NjAwZjcyODEzMjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzdiSDBveHhyZnczbVlsVzlxMkNjV1daSzNBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWWprMG1VdFRSYU4vNENTdzMvU2xyRkg0Vm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLRFp5SXdGRU02MDZhb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1PZi9FRTVhZHJ1WDJUc0lUZzNrTy92Rmh3eloyQllCenZpd2daTDQ4bnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9hMVFEb25YSit4anRwR21LdG9ONXliNDg1Qjk0VnpFVkRKTjFteVZRQnNwRGJNZFAzaVV0cUNYRlhiZ01XQTV0V3VmWlp5SmE2WVZsMFI2OTUyckR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0SGJmUmVYN2cxZjBBSGY1VHB2aDNQbW12cWx2d3B0L1FjUDZNV0RyOFNWczl3ck11WEhiR1pyY05wSmRrMGk5Z1lrR0lLYXlOMDlGOHVqY2d5QXRpQT09In0sIm1lIjp7ImlkIjoiOTQ3NjI0NTc5MzM6MjRAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI0NTc5MzM6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVERuL3hCT1duYTdsOWs3Q0U0TjVEdjd4WWNNMmRnV0FjNzRzSUdTK1BKOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMDQyMDE3N30=== undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
