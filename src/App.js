import { useContext } from 'react';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { DarkModeContext } from './context/DarkModeContext';
import { GlobalStyles } from './globalStyles';

import Footer from './components/Footer/Footer';
import BtnDarkMode from './components/BtnDarkMode/BtnDarkMode';
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
