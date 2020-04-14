// Importamos los el módulo para coger la información del archivo .env
import dotenv from 'dotenv'

// Hacemos la configuración 
dotenv.config()

// Aquí definimos lo que hará referencia desde el archivo .env
export const botToken = process.env.BOT_TOKEN
export const ownerID = process.env.OWNER_ID
export const prefix = process.env.PREFIX || '!'
export const msgDeleteTime = process.env.MSG_DELETE_TIME || 2500
export const autoBan = process.env.AUTOBAN || false
export const autoBanWarns = process.env.AUTOBAN_WARNS || 3
export const banMsgDelete = process.env.BAN_MSG_DELETE || 0
// export const mysqlHost = process.env.MYSQL_HOST
// export const mysqlUser = process.env.MYSQL_USER
// export const mysqlPass = process.env.MYSQL_PASS
// export const mysqlDbName = process.env.MYSQL_DBNAME