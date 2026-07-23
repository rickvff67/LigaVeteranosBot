const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Testa se o bot está online."),

  async execute(interaction) {
    await interaction.reply("🏓 Pong! O bot está funcionando.");
  },
};
