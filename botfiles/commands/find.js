import { SlashCommandBuilder } from 'discord.js';
import { requestFilm } from '../utils/movies.js';

// export const find = (title) => {
  // requestFilm(title);
// }

// find('Baby Driver')

// TODO: change this back into a slash command using documentation. 

export const find = {
  data: new SlashCommandBuilder()
        .setName('find')
        .setDescription('Finds the film specified by the user.')
        .addStringOption(option => 
          option
            .setName('title')
            .setDescription('The title of the film the user wants.')),
  async execute (interaction) {
    const title = interaction.options.getString('title', true);
    await requestFilm(title)
  },
}

