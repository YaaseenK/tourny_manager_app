const db = require('../config/connection');
const { Player } = require('../models');

const playerSeeds = require('./playerData.json');


db.once('open', async () => {
  try {
    await Player.deleteMany({});
    await Player.create(playerSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});