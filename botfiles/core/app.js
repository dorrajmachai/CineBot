import { Client, GatewayIntentBits } from 'discord.js';
import { find } from '../commands/find.js';
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })
console.log(process.env.TOKEN)

const TOKEN = process.env.TOKEN

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on('ready', () => {
  console.log(`${client.user.tag} is logged in!`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  if (interaction.commandName === 'find') {
    await interaction.reply(find.execute())
  }
})

client.login(TOKEN)
