import { Command } from 'discord-akairo'
import colours from '../../utils/colours'

export default class ForoCommand extends Command {

    constructor() {
        super('foro',{
            aliases: ['foro'],
            category: 'util',
            description: 'Envía el enlace al foro'
        })
    }

    async exec(message) {
        try {
            await message.delete(1)

            const user = message.member ? message.member.user : message.author

            return message.util.send({
                embed: {
                    author: {
                        name: user.username,
                        icon_url: user.avatarURL
                    },
                    title: 'Foro - Comunidad CiudadFutura',
                    color: colours.turquesa,
                    url: 'https://ciudadfutura.vip',
                    thumbnail: {
                        url: message.guild.iconURL
                    },
                    description: '\n¿Quieres estar al tanto de los últimos **post** hechos por usuarios de la comunidad? Pues *entra y regístrate* en nuestro **foro** y empieza a discutir con los demás usuarios sobre el tópico que quieras!\n\n*Haz click en el título o entra desde el enlace*\n\n',
                    image: {
                        url: 'https://i.servimg.com/u/f47/19/95/19/68/tm/logo10.gif'
                    },
                    fields: [{
                        name: 'Enlace:',
                        value: 'https://ciudadfutura.vip'
                    }],
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