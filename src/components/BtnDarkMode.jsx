import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styled, { keyframes } from 'styled-components';

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

const breatheAnimation = keyframes`
 0% { scale: 1 }
 30% { scale:1.05 }
 40% { scale: 1.2 }
 40% { scale: 1.25 }
 100% { scale: 1 }
`;

const BtnDarkStyled = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	font-size: 2rem;
	padding: 0;
	line-height: 0;

	&:hover {
		animation-name: ${breatheAnimation};
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
`;
