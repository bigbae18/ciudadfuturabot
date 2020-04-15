module.exports.run = (client, serverInfo, member, colours) => {
    client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
        embed: {
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            thumbnail: {
                url: 'https://w7.pngwing.com/pngs/848/582/png-transparent-computer-icons-exit-miscellaneous-angle-text-thumbnail.png'
            },
            title: "Un usuario salió del servidor",
            color: colours.red,
            description: `~ **Nombre de usuario**: ${member.user.username + '#' + member.user.discriminator}\n~ **ID del usuario**: ${member.user.id}`,
            timestamp: new Date(),
            footer: {
                icon_url: member.user.avatarURL,
                name: member.user.username
            }
        }
    })
}