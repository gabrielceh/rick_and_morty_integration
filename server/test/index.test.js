const app = require('../src/app');
const session = require('supertest');

const agent = session(app);

const user = { email: 'gabriel@gmail.com', password: '123abcd' };
let resLogin = {
	access: true,
	user: { email: user.email },
	error: null,
};

const character = {
	id: 170,
	status: 'Alive',
	name: 'Jacqueline',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/170.jpeg',
	gender: 'Female',
	origin: {
		name: 'Earth (Replacement Dimension)',
		url: 'https://rickandmortyapi.com/api/location/20',
	},
	location: {
		name: 'Earth (Replacement Dimension)',
		url: 'https://rickandmortyapi.com/api/location/20',
	},
};

const character2 = {
	id: 1,
	status: 'Alive',
	name: 'Rick Sanchez',
	species: 'Human',
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	gender: 'Male',
	origin: {
		name: 'Earth (C-137)',
		url: 'https://rickandmortyapi.com/api/location/1',
	},
	location: {
		name: 'Citadel of Ricks',
		url: 'https://rickandmortyapi.com/api/location/3',
	},
};

describe('Test de RUTAS', () => {
	describe('GET /rickandmorty/character/:id', () => {
		it('Responde con status: 200', async () => {
			const res = await agent.get('/rickandmorty/character/1').expect(200);
		});

		it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" "image", "location"', async () => {
			const res = await agent.get('/rickandmorty/character/1');

			for (const prop in character) {
				expect(res.body).toHaveProperty(prop);
			}
		});

		it('Si hay un error responde con status: 404', async () => {
			const res = await agent.get('/rickandmorty/character/1700').expect(404);
		});
	});

	describe('POST /rickandmorty/login', () => {
		it('Deberia devolver un objeto { access: true, user: { email }, error: null }', async () => {
			const res = await agent.post('/rickandmorty/login').send(user);

			expect(res.body).toEqual(resLogin);
		});

		it("Deberia devolver un objeto { access: false, user: null, error: 'Email or password invalid' }", async () => {
			const res = await agent
				.post('/rickandmorty/login')
				.send({ email: 'gabriel@hail.com', password: '123abc' });
			resLogin = {
				access: false,
				user: null,
				error: 'Email or password invalid',
			};
			console.log(resLogin);
			expect(res.body).toEqual(resLogin);
		});
	});

	describe('POST /rickandmorty/favorite', () => {
		it('Debe devolver un arreglo', async () => {
			const res = await agent.post('/rickandmorty/favorite').send(character);
			expect(res.body).toContainEqual(character);
		});

		it('Debe devolver un nuevo arreglo con 2 objetos', async () => {
			const res = await agent.post('/rickandmorty/favorite').send(character2);
			expect(res.body.length).toEqual(2);
		});
	});

	describe('DELETE /rickandmorty/favorite/:id', () => {
		it('Debera devolver un objeto que contenga el array sin modificar', async () => {
			const res = await agent.delete('/rickandmorty/favorite/180');
			expect(res.body.data).toEqual([character, character2]);
		});

		it('Debera eliminar correctamente y devolver status 200', async () => {
			await agent.delete('/rickandmorty/favorite/1').expect(200);
		});
	});
});
