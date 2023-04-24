import { NavLinkStyled, NavLinksContainerStyled } from './NavHeader.styled';
import { ROUTES_NAMES } from '../../helpers/routesName';

function NavHeader({ onModalClose }) {
	const handleClick = () => {
		onModalClose();
	};

	return (
		<>
			<NavLinksContainerStyled>
				<NavLinkStyled
					to={ROUTES_NAMES.HOME}
					onClick={handleClick}>
					Home
				</NavLinkStyled>
				<NavLinkStyled
					to={ROUTES_NAMES.ABOUT}
					onClick={handleClick}>
					About
				</NavLinkStyled>
				<NavLinkStyled
					to={ROUTES_NAMES.FAVORITES}
					onClick={handleClick}>
					Favorites
				</NavLinkStyled>
			</NavLinksContainerStyled>
		</>
	);
}

export default NavHeader;
