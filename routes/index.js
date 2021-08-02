const router = require('express').Router();
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.home);

const UserRoutes = require('./users');
const GameRoutes = require('./games');
const UserInventoryRoutes = require('./userinventory');
const UserCartRoutes = require('./usercart')

router.use('/users', UserRoutes);
router.use('/games', GameRoutes);
router.use('/carts', UserCartRoutes);
router.use('/inventories', UserInventoryRoutes);

module.exports = router;