import { REST } from '@discordjs/rest'
import { Routes } from 'discord.js'
import { find } from '../commands/find.js';
import * as dotenv from 'dotenv'

dotenv.config({ path: '../../.env' });

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const TOKEN = process.env.TOKEN;

const commands = [];
commands.push(find.data.toJSON());


const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {

  try {
    console.log(`Refreshing ${commands.length} commands...`)

    await rest.put(
      Routes.applicationCommands(clientId, guildId),
      {body: commands},
    )

    console.log(`${commands.length} commands successfully refreshed!`)

  } catch (err) {
    console.log(err)
  }
})();
