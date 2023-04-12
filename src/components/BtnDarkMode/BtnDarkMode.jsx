import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { BtnDarkStyled } from './BtnDarkMode.styled';

function BtnDarkMode() {
	const { darkMode, themeToggler } = useContext(DarkModeContext);

	const handleThemeToggler = () => themeToggler();

	return (
		<>
			<BtnDarkStyled
				onClick={handleThemeToggler}
				title='Dark mode'>
				{darkMode === 'light' ? '🌚' : '🌞'}
			</BtnDarkStyled>
		</>
	);
}

export default BtnDarkMode;
