import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { DarkModeContext } from './context/DarkModeContext';
import { GlobalStyles } from './globalStyles';

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
import Toast from './components/Toast/Toast';
import { ToastContext } from './context/ToastContext';
import AppRouter from './router/AppRouter';

function App() {
	const { darkMode } = useContext(DarkModeContext);
	const { toastList, deleteToast } = useContext(ToastContext);

	return (
		<ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<AppContainer>
				<AppRouter />
				<BtnDarkMode />
				{toastList.length > 0 && (
					<Toast
						toastList={toastList}
						deleteToast={deleteToast}
						position='top-center'
					/>
				)}
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
