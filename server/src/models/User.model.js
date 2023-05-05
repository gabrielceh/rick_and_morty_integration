const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				unique: true,
			},
			userId: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				isEmail: true,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);

	User.beforeCreate(async (user, opciones) => {
		// Hashear la contraseña antes de guardarla en la base de datos
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
	});

	return User;
};
