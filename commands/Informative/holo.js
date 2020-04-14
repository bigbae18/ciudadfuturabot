import { Command } from 'discord-akairo'
import colours from '../../utils/colours'

export default class HoloCommand extends Command {

    constructor() {
        super('holo',{
            aliases: ['holo'],
            category: 'util',
            description: 'Envía el enlace al hotel'
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
                    title: 'Kekos Hotel - Comunidad CiudadFutura',
                    color: colours.orange,
                    url: 'https://keko.cf',
                    thumbnail: {
                        url: 'https://keko.cf/images/lkks.png'
                    },
                    description: '\n¿Quieres pasar un buen rato en nuestro **Habbo Hotel** de **CiudadFutura**? Haz click en el título de este mensaje o en el enlace que te pongo a continuación!\n',
                    image: {
                        url: 'http://keko.cf/images/kekos.gif'
                    },
                    fields: [{
                        name: 'Enlace:',
                        value: 'https://keko.cf'
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