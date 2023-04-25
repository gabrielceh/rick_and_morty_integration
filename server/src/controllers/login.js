const userLogin = require('../utils/user.js');

const loginController = (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			access: false,
			user: null,
			error: 'Please send all the data, Morty',
		});
	}

	const userFound = userLogin.find(
		(user) => user.email === email && user.password === password
	);

	if (!userFound) {
		return res
			.status(400)
			.json({ access: false, user: null, error: 'Email or password invalid' });
	}

	return res.status(200).json({ access: true, user: { email }, error: null });
};

module.exports = loginController;
