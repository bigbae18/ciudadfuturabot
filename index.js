import { AkairoClient } from 'discord-akairo'
import { botToken, ownerID, prefix } from './core/config'
import { join } from 'path'
import colours from './utils/colours'
import discordIRC from 'discord-irc';
import IRCconfig from './IRCconfig.json';

const chalk = require('chalk');
const serverInfo = require('./serverinfo');

const client = new AkairoClient({
  ownerID,
  prefix,
  allowMention: false,
  handleEdits: true,
  commandUtil: true,
  commandUtilLifetime: 600000,
  commandDirectory: join(__dirname, 'commands')
})


const bot = (client)

// Llamamos al archivo MySQL
let sql = require('./core/mysql');

client.on('ready', () => {
  console.log('<> ' + chalk.yellow.bold.underline('CiudadFutura') + ' - ' + chalk.cyan.bold.underline('Desarrollado por Niniohh') + ' <>')
  console.log('<> ' + chalk.green.bold.underline('El bot está en línea') + ' <>')
  console.log(`\r\n\n-------- Stats --------\r\nServidores: ${client.guilds.size}\r\nCanales: ${client.channels.size}\r\nMiembros: ${client.users.size}\n\n\n`)
})

const run = async () => {
    try {
      await client.login(botToken)

      client.user.setStatus('dnd');
      client.user.setActivity('CiudadFutura || keko.cf || ciudadfutura.vip', { type: 'PLAYING' })

      // Llamamos al archivo de funciones
      require('./core/funcs')(bot)

      client.on('guildMemberAdd', member => {
        require('./events/guildMemberAdd').run(client, serverInfo, member, colours)
      })

      client.on('guildMemberRemove', member => {
        require('./events/guildMemberRemove').run(client, serverInfo, member, colours)
      })

      client.on('guildMemberUpdate', (oldMember, newMember) => {
        require('./events/guildMemberUpdate').run(client, serverInfo, oldMember, newMember, colours)
      })

      client.on('messageDelete', messageDelete => {
        require('./events/messageDelete').run(client, serverInfo, messageDelete, colours)
      })

      client.on('messageUpdate', (oldMessage, newMessage) => {
        require('./events/messageUpdate').run(client, serverInfo, oldMessage, newMessage, colours)
      })

      discordIRC(IRCconfig);

      // Si detecta algún error, lo tira en la consola
    } catch (e) {
      console.log(`Error running bot: ${e}`)
    }
  }
  // Se ejecuta todo
  run()

  
  process.on('uncaughtException', (e, p) => {
    console.log(`Uncaught Exception: ${e} && ${p}`)
    client.destroy()
    process.exit(1)
  })
