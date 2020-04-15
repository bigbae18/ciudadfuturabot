import { Command } from 'discord-akairo'
import colours from '../../utils/colours'

export default class AvatarCommand extends Command {

    constructor() {
        super('avatar',{
            aliases: ['avatar'],
            args: [
                {
                    id: 'miembro',
                    type: 'member'
                }
            ],
            category: 'util',
            description: 'Envía el avatar de un usuario'
        })
    }

    async exec(message, args) {
        try {
            await message.delete(1)
            if (!args.miembro) {
                return message.util.send({
                    embed: {
                        title: 'Avatar de <@' + message.author.nickname + '>',
                        color: colours.black,
                        image: {
                            url: message.author.displayAvatarURL
                        },
                        timestamp: new Date(),
                        footer: {
                            icon_url: message.author.avatarURL,
                            text: 'Foto pedida por: ' + message.author.username
                        }
                    }
                })
            } else {

                const member = args.miembro;

                return message.util.send({
                    embed: {
                        title: 'Avatar de <@' + member.user.tag + '>',
                        color: colours.black,
                        image: {
                            url: member.user.displayAvatarURL
                        },
                        timestamp: new Date(),
                        footer: {
                            icon_url: message.author.avatarURL,
                            text: 'Foto pedida por: ' + message.author.username
                        }
                    }
                })
            }
            
        } catch (e) {
            console.error(`Error sending about message: ${e}`)
            return null
        }
    }
}