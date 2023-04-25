const express = require('express');
const cors = require('cors');

const server = express();

// ROUTES
const characterRoute = require('./routes/character.route.js');
const loginRouter = require('./routes/login.route.js');
const favoriteRouter = require('./routes/favorite.route.js');

const whiteList = ['http://localhost:3000'];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whiteList.indexOf(origin) !== -1) {
			return callback(null, true);
		} else {
			return callback(new Error(`${origin} not allowed by CORS`));
		}
	},
	credentials: true,
};

// MIDDLEWARES
server.use(cors(corsOptions));

server.use(express.json());

server.use('/rickandmorty/character', characterRoute);
server.use('/rickandmorty/login', loginRouter);
server.use('/rickandmorty/favorite', favoriteRouter);

module.exports = server;
