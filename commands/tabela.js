const { SlashCommandBuilder } = require("discord.js");
const db = require("../database/database");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tabela")
    .setDescription("Mostra todos os times cadastrados"),

  async execute(interaction) {
    const times = db.prepare("SELECT * FROM teams ORDER BY nome").all();

    if (times.length === 0) {
      return interaction.reply("❌ Nenhum time cadastrado.");
    }

    const lista = times.map((t, i) => `${i + 1}. ${t.nome}`).join("\n");

    await interaction.reply({
      content: `🏆 **TIMES CADASTRADOS**\n\n${lista}`,
    });
  },
};
