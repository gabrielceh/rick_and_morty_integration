const router = require('express').Router();
const {
	deleteFav,
	postFav,
	getFav,
} = require('../controllers/handleFavorite.js');

router.get('/:userId', getFav);

router.post('/', postFav);

router.delete('/:userId/:id', deleteFav);

module.exports = router;
