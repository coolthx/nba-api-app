const NBA = require("nba");

// Teams Object
const teams = NBA.teams;
// Players Object
const players = NBA.players;

// Selecting all players from a specific team
// Warriors Team ID (teamId): 1610612744
const warriors = players.filter((player) => player.teamId == 1610612744);
console.log(warriors);
