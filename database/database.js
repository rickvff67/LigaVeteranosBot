const Database = require("better-sqlite3");

const db = new Database("liga.db");

db.exec(`
CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS partidas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mandante TEXT,
    visitante TEXT,
    gols_mandante INTEGER,
    gols_visitante INTEGER
);

CREATE TABLE IF NOT EXISTS artilharia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jogador TEXT,
    gols INTEGER DEFAULT 0
);
`);

module.exports = db;
