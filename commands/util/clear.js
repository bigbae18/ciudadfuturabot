import {
  Command
} from 'discord-akairo'

export default class ClearCommand extends Command {
  constructor() {
      super('clear', {
          aliases: ['clear', 'limpiar', 'prune'],
          category: 'util',
          description: 'Deletes last x messages.',
          args: [{
              id: 'amount',
              type: 'integer',
              default: 5
          }],
          clientPermissions: ['MANAGE_MESSAGES'],
          userPermissions: ['MANAGE_MESSAGES']
      })
  }

  async exec(message, args) {
      try {
          const amount = args.amount > 50 ? 50 : args.amount
          await message.delete(1)
          const messages = await message.channel.fetchMessages({
              limit: amount
          })
          return messages.deleteAll()
      } catch (e) {
          console.log(`Error deleting messages: ${e}`)
          return null
      }
  }
}