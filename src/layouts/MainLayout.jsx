import axios from 'axios';
import styled from 'styled-components';

import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';

function MainLayout() {
	const [characters, setCharacters] = useState([]);

	const onSearch = (id) => {
		let findId = characters.find((character) => character.id === parseInt(id));

		if (findId) return window.alert('El Id ya esta en la lista');

		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
				console.log(data);
				if (data.name) {
					setCharacters((oldChars) => [data, ...oldChars]);
				} else {
					window.alert('Id no encontrado');
				}
			})
			.catch((error) => {
				window.alert(error);
			});
	};

	const onClose = (id) => {
		let newId = parseInt(id);
		const characterFilter = characters.filter(
			(character) => character.id !== newId
		);

		setCharacters(characterFilter);
	};
	return (
		<AppContainer>
			<Header
				onSearch={onSearch}
				characters={characters}
			/>
			<Cards
				characters={characters}
				onClose={onClose}
			/>
			<Footer />
		</AppContainer>
	);
}

export default MainLayout;

const AppContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
