const server = require('./app');
const { conn } = require('./DB_connection');

const PORT = process.env.PORT || 3001;

conn
	.sync({ force: true })
	.then(() => {
		server.listen(PORT, () => {
			console.log(`🔥🔥Server on port ${PORT}🔥🔥`);
		});
	})
	.catch((error) => console.log(error));
