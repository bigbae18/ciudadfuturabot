module.exports.run = (client, serverInfo, oldMessage, newMessage, colours) => {

    if (newMessage.author.id === client.user.id || newMessage.author.bot) return;

    client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
        embed: {
            title: ':pencil: Mensaje editado',
            color: colours.naranja,
            fields: [
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Canal afectado',
                    value: '<#' + newMessage.channel.id + '>',
                    inline: true
                },
                {
                    name: 'Autor del mensaje',
                    value: '<' + oldMessage.author.tag + '>',
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                },
                {
                    name: 'Mensaje original',
                    value: oldMessage.content,
                },
                
                {
                    name: 'Mensaje editado',
                    value: newMessage.content
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: oldMessage.author.avatarURL,
                text: '🕵️ ' + newMessage.guild.name
            }
        }
    })
}