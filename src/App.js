import { useContext, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { DarkModeContext } from './context/DarkModeContext';
import { GlobalStyles } from './globalStyles';

// import imageBackgroundGradient from './assets/images/fluid-gradient.png';
import waveImage from './assets/images/wave2.svg';

import Cards from './components/Cards.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const [characters, setCharacters] = useState([]);
	const { darkMode } = useContext(DarkModeContext);

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
		<ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<BackgroundBody />
			<AppContainer>
				<Header
					onSearch={onSearch}
					characters={characters}
				/>

				<Cards
					characters={characters}
					onClose={onClose}
				/>
			</AppContainer>
			<Footer />
		</ThemeProvider>
	);
}

export default App;

const BackgroundBody = styled.div`
	position: fixed;
	top: -30px;
	left: -30px;
	bottom: -50px;
	right: -30px;
	z-index: -1;
	min-height: 100vh;
	background-image: url(${waveImage});
	background-size: auto 100%;
	background-repeat: no-repeat;
	background-position: 10% 200px;
	filter: blur(10px) opacity(0.35);
`;

const AppContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
