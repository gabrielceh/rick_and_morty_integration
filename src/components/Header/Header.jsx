import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';

import logoRickMorty from '../../assets/images/Rick_and_Morty_Logop.png';
import BtnGetRandom from '../BtnGetRandom/BtnGetRandom';
import NavHeader from '../NavHeader/NavHeader';
import SearchBar from '../SearchBar/SearchBar';
import HamburgerIcon from '../icons/Hamburger';
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
import UserBtn from '../UserBtn.jsx/UserBtn';

function Header() {
	const [isOpenMenu, openModalMenu, closeModalMenu] = useModal();

	return (
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
						<SearchBar onModalClose={closeModalMenu} />
						<BtnGetRandom onModalClose={closeModalMenu} />
						<UserBtn />
					</ContainerMenuDesktopStyled>

					{/* Botones mobile */}
					<ContainerButtonsHeaderStyled>
						<SearchBar onModalClose={closeModalMenu} />
						<UserBtn />
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
						<BtnGetRandom onModalClose={closeModalMenu} />
					</ButtonsConatinerNavStyled>
				</ContainerStyled>
			</ContainerMenuMobileStyled>
		</>
	);
}

export default Header;
