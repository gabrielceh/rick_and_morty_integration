import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavHeader() {
	return (
		<>
			<NavLinksContainerStyled>
				<NavLinkStyled to='/home'>Home</NavLinkStyled>
				<NavLinkStyled to='/about'>About</NavLinkStyled>
				<NavLinkStyled to='/whaterver'>Error</NavLinkStyled>
			</NavLinksContainerStyled>
		</>
	);
}

export default NavHeader;

const NavLinksContainerStyled = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
	color: ${({ theme }) => theme.colors.emerald['500']};
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-family: 'ChakraPetch';
	text-decoration: none;
	font-weight: bold;
	transition: color 0.3s ease-in-out, scale 0.1s ease-in-out,
		translate 0.3s ease-in-out;

	&:hover {
		transform: rotate(-2deg);
		scale: 1.1;
		color: ${({ theme }) => theme.colors.emerald['300']};
	}

	&.active {
		transform: rotate(-5deg);
		color: ${({ theme }) => theme.colors.yellow['500']};
		text-decoration: underline wavy 2px;
		/* transition: color 0.3s ease-in-out, translate 0.3s ease-in-out; */
	}

	&.active:hover {
		transform: rotate(-7deg);
		color: ${({ theme }) => theme.colors.yellow['300']};
	}

	&:active {
		scale: 0.9;
	}
`;
