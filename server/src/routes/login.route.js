const router = require('express').Router();
const { loginController, register } = require('../controllers/login.js');

router.post('/', loginController);

router.post('/register', register);

module.exports = router;
