const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOM MENU* ]----- 🔰
Hallo, ${pushname} 👋
Have a nice day for users, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
The following are the features of the bot (Bot will be on when abhi is online!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}18+(owner not published)*
┃│➸ *${prefix}anime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}grpanime*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}18+(owner not published)*
┃│➸ *${prefix}animemale*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}cuteanimal*
┃│➸ *${prefix}pokemon*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random
