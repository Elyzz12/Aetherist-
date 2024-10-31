//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "+234 814 993 9219";
global.owner = process.env.OWNER_NUMBER || "+234 814 993 9219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0d3NmZXbTF5Q1YwUzMrRFByeUNjd0hMOGV4QXpuQlpiUXRFSzVRTFlrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmJJL3MvWmU0cmdKVXZDWmNPc3VnV0FYeGpDa01vcC9UQzZRUml1RGpFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDk5TTlHU0pwWUtnTFBBZW9FRjQ1OG03Q1NYZ0kwcjZJanBCMy9ROTJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3MEp0TkVub2EzNU8wTDlIZ1BRZC9ITmo5RHBaTjB5OXZjeVJDa2VnTkVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIWngrVEtzTDVxZ2xtSW5KQ3F4SGsvcGZWN3JsYTJobHBiZUg1UngwMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkyZWo4T0dUKzRzSnJLbmJVNExOZEsyTlB4V3k2MTd1eis1M3RseE1yV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NVMG94ZEkvMDQ2Tkt2VW1obmNPSTl5V3B6ZzJFNlJFMUpMa0p3d25rRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieitzZFNObitoSkJTTWl6ZWFuMTRKT3FJZ2dNUmJ0TDNZVm1ldElBb1B6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxJYUJHVjVTdUVub3JESjhVM0FNcEwvZUR5ZG9UY3FDYklFSUx5Ylh0ZCtNTG9Pd0hVcGs4RXQzakRmcjVvaEQ1ZUtGM2lsU25JY2FNWThxc211Z0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImZOelNxRU93WnFvWnlQR085czN6MDZDd3F6UXEzOGRBZkg1OFNWRkJxdFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikp0ZFdRdzNzU2xhR3hUOW1sTURscGciLCJwaG9uZUlkIjoiNzIyNmY0ZjQtZTUwZi00ZDI0LTg0N2YtZmRjMjUwMDE5OWNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk4cEphd1I0MXdDQ1lrT1NZR0lLWnRobkpuST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUG1zcmgxY2xzbHNqTHJtSGpKbGw0Qi9yaVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0w2TDhTUUwiLCJtZSI6eyJpZCI6IjIzNDgxNDk5MzkyMTk6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFA5MHZZRUVLU1lqYmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMnREY3RyOTZFU0VPRlgyZmdYSExuZXl3MEgvTjFUZGsyVzJtNUc5V3dncz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTXBUYjd2M0llMWozSWo2YmtVdFNScEJyakZHRCt1OXNLVXkrZlpYY2g4WWtjRjdUOGcyZnVDT0w2NGFEbzZ1Y1lRTkhxbFA5ZTNWYXRaYTUzR1I0QWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImphRDZzTEIxOTJrQmkxY1M3Q05lbVBRaWFTWXErd2lLSjI3ZVFOTUJmVkNUejdGNFVrdHR0cXhlWGxtcXFuNy9WaG5XSlN2UXNiYm55N1RnL01CaEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0OTkzOTIxOTo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRyUTNMYS9laEVoRGhWOW40Rnh5NTNzc05CL3pkVTNaTmx0cHVSdlZzSUwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAzNjY1MTd9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Aetherist | 🌀þ`",
  author: process.env.PACK_AUTHER || "Aetherist | 🌀",
  packname: process.env.PACK_NAME || "null",
  botname: process.env.BOT_NAME || "QUEEN_NIhttp://wbnv.in/a/c9ibVHJ

*mine*

http://wbnv.in/a/1dibVJ7

*smiffs*",
  ownername: process.env.OWNER_NAME || "Aetherist | 🌀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
