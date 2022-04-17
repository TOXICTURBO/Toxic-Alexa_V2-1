const chalk = require('chalk');
const {WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const Axios = require('axios')

const msgs = '*🚀 Toxic-Alexa , is a WhatsApp helper bot written by [Toxic-Turbo] and edited by 🙂 (Team Toxic.) Does not log into your account 🔎 It is written on WhatsApp Web API. 🔏* \n\n More details below 👇'
const msg1 = '```Toxic-Alexa-Bot - Toxic-Alexa Userbot is Open Source software open to development. \nThe user is responsible for all consequences that may arise from incorrect or misuse. \nSince it is an open source project, anyone can copy the software, add and remove,\nand use it in a way that they customize. In addition, plug-in support enables users to \ninstall their own plugins to the original software and use them as they wish.\nUsing the bot out of purpose will explicitly ban you.\nUsage is entirely the user\'s responsibility, Toxic-Alexa Userbot is an \ninfrastructure only. Just as the operating system is not responsible \nfor the work done with the programs that are installed later, Turbo And Team Toxic \nis not responsible for the usage purpose and method of the users.\nMarketing Toxic-Alexa for money, making it available or having any material value\nıt is strictly forbidden to offer it for sale with anything. All legal investigations that may arise\nthe user is responsible.```'
const warn = '```Due to Toxic-Alexa ; Your WhatsApp account may be banned. \nThis is an open source project, you are responsible for everything you do. \nAbsolutely, Turbo And Team Toxic executives do not accept responsibility.\nBy establishing the Turbo And Team Toxic , you are deemed to have accepted these responsibilities.```'
const msg2 = '```This project is open source so all the codes are clear. Neither less no more ; you can look what you want. We absolutely do not have access to your accounts.```'
const msg3 = '```If you are concerned about security, you can install it on your own computer. If you think someone else has captured your data, simply click on Whatsapp> Three Dots> Whatsapp Web> Logout from all sessions button.```'
const msg4 = '```Of course not. It will never happen. you can pm to Turbo. You can reach me via Whatsapp .```'

async function Alexa () {
    const conn = new WAConnection();
    conn.version = [2, 2147, 16]
    conn.logger.level = 'warn'; 
    
    conn.on('connecting', async () => {
        console.log(`${chalk.blueBright.bold('<>======== ❇ Toxic-Alexa ❇  ')}${chalk.red.bold('BOT QR CODE ========<>')}
${chalk.white.bold('[[ New and speed version of Toxic-Alexa-Bot-QR Code ]]')}

${chalk.green.bold('⚙ Connecting to Whatsapp Please wait...💹')}`);
    });
    
// 'Alexa;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')

    conn.on('open', async () => {
        
        console.log(chalk.blueBright.bold("Creating your session..."))

        const rows = [
         {title: '🔎 ʏᴏᴜʀ ǫʀ sᴇssɪᴏɴ', description: '\n\nAlexa;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64') + '\n\n*⚠ Please Do Not Share This Code With Anyone!* ' + conn.user.name , rowId:"rowid1"},
         {title: '📚 About Toxic-Alexa', description: `\n\n${msg1}`, rowId:"rowid2"},
         {title: '❌ ᴡᴀʀɴɪɴɢs ', description: `\n\n${warn}`, rowId:"rowid3"},
         {title: '🤔 ᴄᴀɴ ʏᴏᴜ ʀᴇᴀᴅ ᴍʏ ᴍᴇssᴀɢᴇs ?', description: `Answer a few frequently asked questions\n\n${msg2}`, rowId:"rowid4"},
         {title: '😐 ᴡʜᴀᴛ ᴀʙᴏᴜᴛ ᴏᴜʀ sᴇᴄᴜʀɪᴛʏ ?', description: `Answer a few frequently asked questions\n\n${msg3}`, rowId:"rowid5"},
         {title: '🤕 ɪs ᴛʜɪs ᴘᴀɪᴅ ?', description: `Answer a few frequently asked questions\n\n${msg4}`, rowId:"rowid6"}
         ]

        const sections = [{title: "⚔️ Toxic-Alexa-Bot-QR-GEN v.2 🌏", rows: rows}]

       const button = {
        buttonText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ 💝',
        description: msgs ,
        sections: sections,
        listType: 1
        }
        
        await conn.sendMessage(conn.user.jid ,button, MessageType.listMessage)
        
        var alpha = await Axios.get(`https://telegra.ph/file/56c7adc490d2797f7efc6.jpg`, { responseType: 'arraybuffer' })
        
          await conn.sendMessage(conn.user.jid,Buffer.from(alpha.data), MessageType.image , {mimetype: Mimetype.png, caption: '*💹 Thanks for using Toxic-Alexa*' , thumbnail: Buffer.from(alpha.data)})

        console.log(
            chalk.red('__________________________ COPY THIS CODE _________________________ \n'), 
            chalk.greenBright.bold('Alexa;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64'))
        );

        console.log(
            chalk.whiteBright.bold('\n⚠  Please Do Not Share This Code With Anyone '),
            chalk.red( conn.user.name ),
            chalk.blueBright.bold('\n\nif you can\'t copy the code, check your whatsapp number, its sent to your own number >>')
        );
//       process.exit(0);
    });

    await conn.connect();
}

Alexa ()