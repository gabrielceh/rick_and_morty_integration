import styled from 'styled-components';

import SearchBar from './SearchBar';
import BtnDarkMode from './BtnDarkMode';
import logoRickMorty from '../assets/images/Rick_and_Morty_Logop.png';
import BtnGetRandom from './BtnGetRandom';
import NavHeader from './NavHeader';

function Header({ onSearch, characters }) {
	return (
		<HeaderStyled>
			<HeaderContainerStyled>
				<LogoStyled
					src={logoRickMorty}
					alt='Rick and Morty Logo'
				/>
				<ContainerRigthSideStyled>
					<NavHeader />
					<SearchBar onSearch={onSearch} />
					<BtnGetRandom
						onSearch={onSearch}
						characters={characters}
					/>
					<BtnDarkMode />
				</ContainerRigthSideStyled>
			</HeaderContainerStyled>
		</HeaderStyled>
	);
}

export default Header;

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	padding: 1rem 0;
	/* background: ${({ theme }) =>
		`radial-gradient(circle at left, ${theme.colors.yellow['100']}cc, ${theme.colors.emerald['500']}cc)`}; */
	background: ${({ theme }) => `${theme.body}dd`};
	backdrop-filter: blur(5px);
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.emerald['200']}`};
	transition: background 0.5s ease-in;
`;

const HeaderContainerStyled = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
`;

const LogoStyled = styled.img`
	max-width: 150px;
	filter: ${({ theme }) =>
		`drop-shadow( 2px 2px 0px ${theme.colors.slate['800']})`};
`;

const ContainerRigthSideStyled = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
`;
