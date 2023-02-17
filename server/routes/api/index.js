const router = require('express').Router();
const playerRoutes = require('./player-routes');
const gameRoutes = require('./game-routes')


router.use('/player', playerRoutes);
router.use('/game', gameRoutes);

module.exports = router;
