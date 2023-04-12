import { NavLinkStyled, NavLinksContainerStyled } from './NavHeader.styled';

function NavHeader({ onModalClose }) {
	const handleClick = () => {
		onModalClose();
	};

	return (
		<>
			<NavLinksContainerStyled>
				<NavLinkStyled
					to='/home'
					onClick={handleClick}>
					Home
				</NavLinkStyled>
				<NavLinkStyled
					to='/about'
					onClick={handleClick}>
					About
				</NavLinkStyled>
				<NavLinkStyled
					to='/favorites'
					onClick={handleClick}>
					Favorites
				</NavLinkStyled>
				<NavLinkStyled
					to='/whaterver'
					onClick={handleClick}>
					Error
				</NavLinkStyled>
			</NavLinksContainerStyled>
		</>
	);
}

export default NavHeader;
