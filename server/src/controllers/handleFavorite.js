let myFavorites = [];

const getFav = (req, res) => {
	return res.status(200).json(myFavorites);
};

const postFav = (req, res) => {
	const { id, name, status, species, image, gender, origin, location } =
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

	const findId = myFavorites.find((fav) => fav.id === +id);

	if (findId) {
		return res.status(400).json({ error: `Id ${id} in favorites` });
	}

	myFavorites.push({
		id,
		name,
		status,
		species,
		image,
		gender,
		origin,
		location,
	});

	return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
	const { id } = req.params;

	const favFiltered = myFavorites.filter((fav) => fav.id !== +id);

	if (favFiltered.length === myFavorites.length) {
		return res
			.status(404)
			.json({ error: `ID ${id} not found`, data: myFavorites });
	}

	myFavorites = [...favFiltered];

	return res.status(200).json(myFavorites);
};

module.exports = {
	postFav,
	deleteFav,
	getFav,
};
