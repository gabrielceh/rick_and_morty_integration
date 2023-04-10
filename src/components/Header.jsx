import SearchBar from './SearchBar';

import logoRickMorty from '../assets/images/Rick_and_Morty_Logop.png';
import { useLocation } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import { BtnOutlineStyled } from '../styled/BtnStyles.style';
import BtnGetRandom from './BtnGetRandom';
import NavHeader from './NavHeader';
import {
	BtnCloseModalStyled,
	BtnHamburguerStyled,
	ButtonsConatinerNavStyled,
	ContainerMenuDesktopStyled,
	ContainerMenuMobileStyled,
	HeaderContainerStyled,
	HeaderStyled,
	LogoStyled,
} from '../styled/Header.styled';

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
				<HeaderStyled>
					<HeaderContainerStyled>
						<LogoStyled
							src={logoRickMorty}
							alt='Rick and Morty Logo'
						/>
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

						<BtnHamburguerStyled onClick={openModalMenu}>
							Menu
						</BtnHamburguerStyled>
						{/* Menu mobile */}
						{isOpenMenu && (
							<ContainerMenuMobileStyled className='active'>
								<BtnCloseModalStyled
									color='slate'
									onClick={closeModalMenu}>
									✖️
								</BtnCloseModalStyled>
								<NavHeader onModalClose={closeModalMenu} />
								<ButtonsConatinerNavStyled>
									<SearchBar
										onSearch={onSearch}
										onModalClose={closeModalMenu}
									/>
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
							</ContainerMenuMobileStyled>
						)}
					</HeaderContainerStyled>
				</HeaderStyled>
			)}
		</>
	);
}

export default Header;
