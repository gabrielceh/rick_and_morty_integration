const router = require('express').Router();
const {
	deleteFav,
	postFav,
	getFav,
} = require('../controllers/handleFavorite.js');

router.get('/', getFav);

router.post('/', postFav);

router.delete('/:id', deleteFav);

module.exports = router;
