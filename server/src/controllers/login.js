const bcrypt = require('bcrypt');

const { User } = require('../DB_connection.js');
const userLogin = require('../utils/user.js');

const loginController = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			access: false,
			user: null,
			error: 'Please send all the data, Morty',
		});
	}

	const user = await User.findOne({ where: { email } });

	if (!user) {
		return res
			.status(400)
			.json({ access: false, user: null, error: 'Email or password invalid' });
	}

	const comparePass = await bcrypt.compare(password, user.password);

	if (!comparePass) {
		return res
			.status(400)
			.json({ access: false, user: null, error: 'Email or password invalid' });
	}

	const { email: emailDB, userId } = user.dataValues;

	return res.status(200).json({
		access: true,
		user: { email: emailDB, userId },
		error: null,
	});
};

const register = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!password || !email) {
			return res
				.status(400)
				.json({ error: 'Please, send all the data, Morty' });
		}

		const user = await User.create({ email, password });

		res.status(200).json({ message: 'User registered successfully' });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { loginController, register };
