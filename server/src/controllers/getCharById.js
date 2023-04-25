const axios = require('axios');
const { urlBase } = require('../utils/urlBase.js');

const getCharById = async (req, res) => {
	const { id } = req.params;
	try {
		const { data } = await axios(`${urlBase.character}/${id}`);

		if (!data.id) throw new Error(`ID ${id} not found Morty`);

		const character = {
			id: data.id,
			status: data.status,
			name: data.name,
			species: data.species,
			image: data.image,
			gender: data.gender,
			origin: data.origin,
			location: data.location,
		};
		return res.status(200).json(character);
	} catch (error) {
		error.response?.status
			? res.status(500).json({ error: error.response.data.error })
			: res.status(500).json({ error: 'Server error' });
	}
};

module.exports = getCharById;
