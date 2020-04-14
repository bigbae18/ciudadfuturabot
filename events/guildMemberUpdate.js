module.exports.run = (client, serverInfo, oldMember, newMember, colours) => {
    try {

        // Logs de cambio de nombre

        if (oldMember.nickname != newMember.nickname) {
            if (newMember.nickname == null)
                client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
                    embed: {
                        description: `:spy: **[${newMember.user.tag}]** ha reseteado su nick a **[${newMember.user.username}]**`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: client.user.username
                        }
                    }
                })
            else
                client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
                    embed: {
                        description: `:spy: **[${newMember.user.tag}]** ha cambiado su nick a **[${newMember.nickname}]**`,
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: client.user.username
                        }
                    }
                })
        }

        // Logs de cambio de rol

        if (oldMember.roles.size !== newMember.roles.size) {
            let oldRoles = "";

            oldMember.roles.array().forEach(role => {
                if (role.name != "@everyone") oldRoles += ", " + role.name
            });

            let newRoles = "";

            newMember.roles.array().forEach(role=> {
                if (role.name != "@everyone") newRoles += ', ' + role.name
            })

            client.guilds.get(serverInfo.guildId).channels.get(serverInfo.textchannels.spylog).send({
                embed: {
                        title: `:spy: Los roles de **[${newMember.user.tag}]** han cambiado.`,
                        fields: [{
                            name: 'Anteriores',
                            value: oldRoles === "" ? "''" : oldRoles.substring(2, oldRoles.length)
                        },
                        {
                            name: 'Nuevos',
                            value: newRoles === "" ? "''" : newRoles.substring(2, newRoles.length)
                        }],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: client.user.username
                        }
                    }
            })
        }
    } catch(e) {
        console.error('Error al procesar la actualización de user: ' + e)
    }
}