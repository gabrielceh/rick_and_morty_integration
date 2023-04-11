import SearchBar from './SearchBar';

import logoRickMorty from '../assets/images/Rick_and_Morty_Logop.png';
import { useLocation, Link } from 'react-router-dom';
import { useModal } from '../hooks/useModal';

import HamburgerIcon from './icons/Hamburger';
import { BtnOutlineStyled } from '../styled/BtnStyles.style';
import BtnGetRandom from './BtnGetRandom';
import NavHeader from './NavHeader';
import {
	BtnCloseModalStyled,
	BtnHamburguerStyled,
	ButtonsConatinerNavStyled,
	ContainerButtonsHeaderStyled,
	ContainerMenuDesktopStyled,
	ContainerMenuMobileStyled,
	HeaderContainerStyled,
	HeaderStyled,
	LogoStyled,
} from '../styled/Header.styled';
import { ContainerStyled } from '../styled/container.styled';

function Header({ onSearch, characters, logout }) {
	const location = useLocation();
	const [isOpenMenu, openModalMenu, closeModalMenu] = useModal();

	const handleLogout = () => {
		logout();
		closeModalMenu();
	};

	return (
		<>
			{location.pathname !== '/' && (
				<>
					<HeaderStyled>
						<ContainerStyled className='header-container'>
							<Link to='/home'>
								<LogoStyled
									src={logoRickMorty}
									alt='Rick and Morty Logo'
								/>
							</Link>
							{/* Menu desktop */}
							<ContainerMenuDesktopStyled>
								<NavHeader onModalClose={closeModalMenu} />
								<SearchBar
									onSearch={onSearch}
									onModalClose={closeModalMenu}
								/>
								<BtnGetRandom
									onSearch={onSearch}
									onModalClose={closeModalMenu}
								/>

								<BtnOutlineStyled
									color='yellow'
									onClick={logout}
									width='5rem'>
									Logout
								</BtnOutlineStyled>
							</ContainerMenuDesktopStyled>

							{/* Botones mobile */}
							<ContainerButtonsHeaderStyled>
								<SearchBar
									onSearch={onSearch}
									onModalClose={closeModalMenu}
								/>

								<BtnHamburguerStyled onClick={openModalMenu}>
									<HamburgerIcon className='svg' />
								</BtnHamburguerStyled>
							</ContainerButtonsHeaderStyled>
						</ContainerStyled>
					</HeaderStyled>

					{/* Menu mobile */}
					<ContainerMenuMobileStyled className={isOpenMenu ? 'active' : ''}>
						<ContainerStyled className='menu-mobile-container'>
							<BtnCloseModalStyled
								color='slate'
								onClick={closeModalMenu}>
								✖️
							</BtnCloseModalStyled>
							<NavHeader onModalClose={closeModalMenu} />
							<ButtonsConatinerNavStyled>
								<BtnGetRandom
									onSearch={onSearch}
									characters={characters}
									onModalClose={closeModalMenu}
								/>

								<BtnOutlineStyled
									color='yellow'
									onClick={handleLogout}
									width='5rem'>
									Logout
								</BtnOutlineStyled>
							</ButtonsConatinerNavStyled>
						</ContainerStyled>
					</ContainerMenuMobileStyled>
				</>
			)}
		</>
	);
}

export default Header;
