# Discord BOT (Comunidad CiudadFutura)

Desarrollado por [Adrián Pelayo](https://github.com/bigbae18) con ayuda de [Iván 'r0shi' Melero](https://gitlab.com/r0shi) en la adquisición de conocimientos y generación de archivos.

## ¿Qué es?

Consta de un Bot funcional, desarrollado con [DiscordJS](https://www.discord.js.org), que utiliza [NodeJS](https://nodejs.org) y con la ayuda del Framework [Discord-Akairo](https://discord-akairo.github.io). Es un proyecto inacabado que tiene ciertos comandos de publicidad para la comunidad.

## Setup

Primeramente necesitarás tener una Aplicación creada en la web de [Discord Developer Portal](https://discord.com/developers/applications).

Una vez creada una aplicación, dentro de ella podrás crear un BOT y obtener el `token` que necesitarás para hacer la conexión como es debido.

Para preparar el ambiente de trabajo necesitarás escribir en tu consola estos comandos en el siguiente orden.

```
git clone <este-repo>
npm install
```

Dentro del repositorio, para la conexión, necesitarás crear un archivo `.env` de configuración. Deberas añadir las siguientes opciones(Algunas viene un valor por defecto en el config.js):
```
BOT_TOKEN=<token-del-bot-de-Discord>(Sirve para hacer la conexión)
OWNER_ID=<id-propietario-del-bot>(Tu ID en Discord, si vas a hacerlo tuyo)
PREFIX=<prefijo-de-tus-comandos(por defecto "!")> (Prefijo que el bot reconoce para comandos E.j. !ping)
MSG_DELETE_TIME=<tiempo-en-ms(por defecto 2500)>
AUTOBAN=<true|false> (Por defecto false)
AUTOBAN_WARNS=<número-de-advertencias> (Por defecto 3)
BAN_MSG_DELETE=<número-de-mensajes> (Por defecto 0)
```

Una vez creado el archivo de configuración `.env`, el archivo `core/config.js` usará esa configuración para hacer la conexión.

#### serverinfo.js

Este archivo sirve para guardar diferentes ID de canales dentro de la Guild en la que se encuentre tu BOT para poder acceder a ellos desde un `módulo`. 
Les pongo un ejemplo de un comando, para que el bot envíe un mensaje específico a un canal registrado en `serverinfo.js`:

Primero necesitamos que `index.js` nos proporcione el módulo `serverInfo`, además de la conexión (que necesitaremos durante todos los procesos, llamado `client`) declarado en el fichero.

```
client.guilds.get(serverInfo.guildId).channels.get(serverInfo.<textchannels/voicechannels>.<nombre-del-canal-en-serverinfo.js>).send({<tu mensaje aquí>})
```
(Esa línea está sacada de `events/messageDelete.js`)

### Conexión

Una vez hecho el [setup y la configuración](#setup), ya podrías escribir en tu consola

```
npm start
```

En consola debería aparecerte `<> El bot está en línea <>` para confirmar que tu BOT ha realizado la conexión con la Api de Discord, y por ende está conectado como un usuario más.