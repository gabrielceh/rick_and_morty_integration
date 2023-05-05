const { Favorite, User } = require('../DB_connection');

let myFavorites = [];

const getFav = async (req, res) => {
	try {
		const { userId } = req.params;
		if (!userId) {
			return res.status(400).json({
				error: `Please, send the user ID`,
			});
		}

		const user = await User.findByPk(userId);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		const all = await user.getFavorites();
		return res.status(200).json(all);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const postFav = async (req, res) => {
	const { id, name, status, species, image, gender, origin, location, userId } =
		req.body;

	if (
		!id ||
		!name ||
		!status ||
		!species ||
		!image ||
		!gender ||
		!origin ||
		!location
	) {
		return res.status(400).json({
			error: `Please, send all the data:id, name, status, species, image, gender, origin, location,`,
		});
	}

	if (!userId) {
		return res.status(400).json({
			error: `Please, send all the userId`,
		});
	}

	const character = {
		id,
		name,
		status,
		species,
		image,
		gender,
		origin,
		location,
	};

	const finded = await Favorite.findByPk(id);
	const user = await User.findByPk(userId);

	if (!user) {
		return res.status(400).json({
			error: `User not found`,
		});
	}

	if (finded) {
		return res.status(400).json({
			error: `Character is already in your favs`,
		});
	}

	const char = await Favorite.create(character);
	// creamos la relacion
	await user.addFavorite(char);

	const favorites = await Favorite.findAll();

	return res.status(200).json(favorites);
};

const deleteFav = async (req, res) => {
	try {
		const { id, userId } = req.params;

		if (!id || !userId) {
			return res.status(400).json({
				error: `Please, send all data`,
			});
		}

		const char = await Favorite.findByPk(id);
		const user = await User.findByPk(userId);

		if (!char) {
			return res.status(400).json({
				error: `Character not found`,
			});
		}
		if (!user) {
			return res.status(400).json({
				error: `User not found`,
			});
		}

		user.removeFavorite(char);
		await Favorite.destroy({ where: { id } });
		const favorites = await Favorite.findAll();

		return res.status(200).json(favorites);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	postFav,
	deleteFav,
	getFav,
};
