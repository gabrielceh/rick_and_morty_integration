import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

import logoRickMorty from '../../assets/images/Rick_and_Morty_Logop.png';
import BtnGetRandom from '../BtnGetRandom/BtnGetRandom';
import NavHeader from '../NavHeader/NavHeader';
import SearchBar from '../SearchBar/SearchBar';
import HamburgerIcon from '../icons/Hamburger';
import { BtnOutlineStyled } from '../../styled/BtnStyles.style';
import { ContainerStyled } from '../../styled/container.styled';
import {
	BtnCloseModalStyled,
	BtnHamburguerStyled,
	ButtonsConatinerNavStyled,
	ContainerButtonsHeaderStyled,
	ContainerMenuDesktopStyled,
	ContainerMenuMobileStyled,
	HeaderStyled,
	LogoStyled,
} from './Header.styled';

function Header({ onSearch, characters, setAccess }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [isOpenMenu, openModalMenu, closeModalMenu] = useModal();

	const handleLogout = () => {
		setAccess(false);
		navigate('/', { replace: true });
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
									onClick={handleLogout}
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
