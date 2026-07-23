const { SlashCommandBuilder } = require("discord.js");
const db = require("../database/database");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("addtime")
    .setDescription("Adiciona um time à liga")
    .addStringOption(option =>
      option
        .setName("nome")
        .setDescription("Nome do time")
        .setRequired(true)
    ),

  async execute(interaction) {
    const nome = interaction.options.getString("nome");

    try {
      db.prepare("INSERT INTO teams (nome) VALUES (?)").run(nome);

      await interaction.reply(`✅ Time **${nome}** adicionado com sucesso!`);
    } catch (err) {
      await interaction.reply({
        content: "❌ Esse time já existe.",
        ephemeral: true,
      });
    }
  },
};
