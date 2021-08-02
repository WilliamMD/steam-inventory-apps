const router = require('express').Router();
const UserInventoryController = require('../controllers/UserInventoryController');

router.post('/buy/:CartId', UserInventoryController.buy);

module.exports = router;