const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/register', UserController.registerPage);
router.post('/register', UserController.register);
router.get('/:UserId', UserController.details);
router.get('/edit/:UserId', UserController.EditPage);
router.post('/update/:UserId', UserController.update);
router.post('/delete/:UserId', UserController.delete);
router.post('/:UserId/addFunds', UserController.addFunds);

module.exports = router;