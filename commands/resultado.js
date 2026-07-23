const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("../database/database");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resultado")
    .setDescription("Registra o resultado de uma partida.")
    .addStringOption(option =>
      option.setName("time1")
        .setDescription("Primeiro time")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName("gols1")
        .setDescription("Gols do primeiro time")
        .setRequired(true))
    .addStringOption(option =>
      option.setName("time2")
        .setDescription("Segundo time")
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName("gols2")
        .setDescription("Gols do segundo time")
        .setRequired(true)),

  async execute(interaction) {
    const time1 = interaction.options.getString("time1");
    const gols1 = interaction.options.getInteger("gols1");
    const time2 = interaction.options.getString("time2");
    const gols2 = interaction.options.getInteger("gols2");

    db.prepare(`
      INSERT INTO partidas
      (mandante, visitante, gols_mandante, gols_visitante)
      VALUES (?, ?, ?, ?)
    `).run(time1, time2, gols1, gols2);

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("⚽ Resultado Registrado")
      .setDescription(`**${time1} ${gols1} x ${gols2} ${time2}**`)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
