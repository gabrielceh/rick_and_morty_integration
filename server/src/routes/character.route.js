const getCharById = require('../controllers/getCharById.js');
const router = require('express').Router();

router.get('/:id', async (req, res) => {
	await getCharById(req, res);
});

module.exports = router;
