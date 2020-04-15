module.exports.run = (client, serverInfo, messageDelete, colours) => {

    if (messageDelete.author.id === client.user.id || messageDelete.author.bot) return;

    client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
        embed: {
            title: ':x: Mensaje eliminado',
            color: colours.talkers,
            fields: [
                {
                    name: 'Canal afectado',
                    value: '<#' + messageDelete.channel.id + '>',
                    inline: true
                },
                {
                    name: 'Autor del mensaje',
                    value: '<' + messageDelete.author.tag + '>',
                    inline: true
                },
                {
                    name: 'Contenido del mensaje',
                    value: messageDelete.content,
                    inline: false
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: messageDelete.author.avatarURL,
                text: '🕵️ ' + messageDelete.guild.name
            }
        }
    })

}