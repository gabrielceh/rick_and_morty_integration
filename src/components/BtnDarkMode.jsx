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
	position: fixed;
	z-index: 5;
	bottom: 5%;
	right: 1rem;
	background-color: ${({ theme }) => theme.colors.emerald['400']};
	padding: 0.5rem;
	cursor: pointer;
	border: none;
	font-size: 2rem;
	border-radius: 50%;

	&:hover {
		background-color: ${({ theme }) => theme.colors.emerald['500']};

		animation-name: ${breatheAnimation};
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
`;
