const router = require('express').Router();
const UserCartController = require('../controllers/UserCartController')

router.get('/:UserId', UserCartController.show);
router.post('/:UserId/add/:GameId', UserCartController.add);
router.post('/remove/:CartId', UserCartController.remove);

module.exports = router;