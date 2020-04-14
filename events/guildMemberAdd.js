module.exports.run = (client, serverInfo, member, colours) => {
    client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.lobby).send({
                embed: {
                    author: {
                        name: member.user.username,
                        icon_url: member.user.avatarURL
                    },
                    thumbnail: {
                        url:'http://4.bp.blogspot.com/-1vvSL7HeB8M/TkLzQ6b4MDI/AAAAAAAAAAQ/rZ9Og5MmJX8/s1600/uk_party_frontpage_image.gif'
                    },
                    title: `**¡Bienvenido a CiudadFutura, ${member.user.username + '#' + member.user.discriminator}!**`,
                    description: 'Aquí debajo tienes un par de comandos informativos, para saber los enlaces hacia los distintos portales de CiudadFutura.',
                    color: colours.green,
                    fields: [
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true
                        },
                        {
                            name: 'Foro de CiudadFutura',
                            value: '!foro',
                            inline: true
                        },
                        {
                            name: 'Hotel de CiudadFutura',
                            value: '!holo',
                            inline: true
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: member.guild.iconURL,
                        text: member.guild.name
                    }
                }
            })
}