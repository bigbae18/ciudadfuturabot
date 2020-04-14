import { Command } from 'discord-akairo'
import colours from '../../utils/colours'
import { msgDeleteTime } from '../../core/config'

export default class AboutCommand extends Command {
  constructor() {
      super('about', {
          aliases: ['about'],
          category: 'util',
          description: 'Envía un poco de información referente al bot',
          cooldown: 1000 * msgDeleteTime,
          ratelimit: 1
      })
  }

  async exec(message) {
      try {
          await message.delete(1)

          const user = message.member ? message.member.user : message.author
          return message.util.send({
              embed: {
                  title: 'CiudadFutura',
                  color: colours.turquesa,
                  url: '',
                  description: 'Este bot ha sido programado con el fin de ayudar y hacer mejor la comunidad de CiudadFutura\n\n' +
                      'Si tienes alguna duda de como funciona, puedes preguntar a cualquier miembro de la Administración.',
                  fields: [{
                          name: 'Desarrollado por',
                          value: '<@258713929159540738> (znk#9541)',
                          inline: true
                      },
                      {
                          name: 'Versión',
                          value: 'v0.0.1 Beta',
                          inline: true
                      },
                      {
                          name: 'Últ. Actualización',
                          value: '13-04-20',
                          inline: true
                      }
                  ],
                  author: {
                      name: user.username,
                      icon_url: user.avatarURL
                  },
                  timestamp: new Date(),
                  footer: {
                    icon_url: message.guild.iconURL,
                    text: message.guild.name
                }
              }
          })
      } catch (e) {
          console.log(`Error sending about message: ${e}`)
          return null
      }
  }
}