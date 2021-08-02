const router = require('express').Router();
const GameController = require('../controllers/GameController');

router.get('/:UserId/store', GameController.store);
router.get('/:UserId/detail/:GameId', GameController.details);
router.get('/:UserId/add', GameController.addPage);
router.post('/:UserId/add', GameController.add);
router.get('/:UserId/edit/:GameId', GameController.edit);
router.post('/:UserId/update/:GameId', GameController.update);
router.post('/:UserId/remove/:GameId', GameController.remove);

module.exports = router;