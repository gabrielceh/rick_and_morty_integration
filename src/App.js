import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { DarkModeContext } from './context/DarkModeContext';
import { GlobalStyles } from './globalStyles';

import { urls } from './helpers/URL';

import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import Page404 from './pages/Page404/Page404';
import LoginPage from './pages/Login/LoginPage';
import Favorites from './pages/Favorites/Favorites';
import BtnDarkMode from './components/BtnDarkMode/BtnDarkMode';
import HomePage from './pages/Home/HomePage';
import Prueba from './components/Prueba';

function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const { darkMode } = useContext(DarkModeContext);
	const navigate = useNavigate();

	const EMAIL = 'gabriel@gmail.com';
	const PASSWORD = '123abcd';

	useEffect(() => {
		// !access && navigate('/', { replace: true });
	}, [access]);

	const onSearch = (id) => {
		let findId = characters.find((character) => character.id === id);
		console.log(findId);
		if (findId !== undefined) return window.alert('El Id ya esta en la lista');

		setLoading(true);
		axios(`${urls.baseURL}/${id}?key=${urls.key}`)
			.then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [data, ...oldChars]);
				} else {
					window.alert('Id no encontrado');
				}
			})
			.catch((error) => {
				window.alert(error);
			})
			.finally(() => setLoading(false));
	};

	const onClose = (id) => {
		let newId = id;
		const characterFilter = characters.filter(
			(character) => character.id !== newId
		);

		setCharacters(characterFilter);
	};

	const login = (userData) => {
		if (userData.email === EMAIL && userData.password === PASSWORD) {
			setAccess(true);
			navigate('/home', { replace: true });
		} else {
			window.alert('Email o password no validos');
		}
	};

	return (
		<ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<AppContainer>
				<Header
					onSearch={onSearch}
					characters={characters}
					setAccess={setAccess}
				/>
				<MainContainerStyled>
					<Routes>
						<Route
							path='/'
							element={<LoginPage login={login} />}
						/>

						<Route
							path='/home'
							element={
								<HomePage>
									<Cards
										characters={characters}
										onClose={onClose}
										loading={loading}
									/>
								</HomePage>
							}
						/>
						<Route
							path='/About'
							element={<About />}
						/>
						<Route
							path='/detail/:id'
							element={<Details />}
						/>
						<Route
							path='/favorites'
							element={<Favorites onClose={onClose} />}
						/>
						<Route
							path='/test'
							element={<Prueba />}
						/>

						<Route
							path='*'
							element={<Page404 />}
						/>
					</Routes>
				</MainContainerStyled>
				<BtnDarkMode />
				<Footer />
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;

const AppContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const MainContainerStyled = styled.main`
	margin-top: 120px;
	width: 100%;

	@media ${({ theme }) => theme.screenSize.laptop} {
		& {
			margin: 0 auto;
			margin-top: 120px;
		}
	} ;
`;
