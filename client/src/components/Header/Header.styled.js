import styled from 'styled-components';

export const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	width: 100%;
	padding: 1rem 0;
	background: ${({ theme }) => `${theme.body}dd`};
	backdrop-filter: blur(5px);
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.emerald['200']}`};
	transition: background 0.5s ease-in-out;

	& .header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
`;

export const LogoStyled = styled.img`
	max-width: 150px;
	filter: ${({ theme }) =>
		`drop-shadow( 2px 2px 0px ${theme.colors.slate['800']})`};
`;

export const ContainerButtonsHeaderStyled = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;

	@media (${({ theme }) => theme.screenSize.laptop}) {
		display: none;
	}
`;

export const BtnHamburguerStyled = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	transition: scale 0.3s ease-in-out;

	& .svg {
		stroke: ${({ theme }) => theme.text};
	}

	&:hover {
		scale: 1.1;
	}

	&:hover .svg {
		stroke: ${({ theme }) => `${theme.text}aa`};
	}

	@media (${({ theme }) => theme.screenSize.laptop}) {
		display: none;
	}
`;

export const ContainerMenuMobileStyled = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: -1000px;
	min-height: 100vh;
	min-width: 100%;
	background-color: ${({ theme }) => `${theme.colors.slate['900']}da`};
	backdrop-filter: blur(5px);
	visibility: hidden;
	opacity: 0;

	transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out,
		visible 0.3s ease-in-out;

	& .menu-mobile-container {
		display: flex;
		justify-content: start;
		flex-direction: column;
		gap: 5rem;
		padding: 1rem 2rem;
	}

	&.active {
		left: 0;
		visibility: visible;
		opacity: 1;
	}

	@media (${({ theme }) => theme.screenSize.laptop}) {
		display: none;
	}
`;

export const BtnCloseModalStyled = styled.button`
	width: ${({ width }) => (width ? width : '50px')};
	height: ${({ height }) => (height ? height : '40px')};
	cursor: pointer;
	padding: 0.4rem 0.7rem;
	background: none;
	border: ${({ theme, color }) => `2px solid ${theme.colors[color]['400']}`};
	color: ${({ theme, color }) => theme.colors[color]['400']};
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.base};
	transition: scale 0.1s ease-in-out, border 0.1s ease-in-out;
	align-self: end;

	&:hover {
		scale: 1.1;
		border: ${({ theme, color }) => `2px solid ${theme.colors[color]['500']}`};
		color: ${({ theme, color }) => theme.colors[color]['500']};
	}
	&:active {
		scale: 0.8;
	}
`;

export const ButtonsConatinerNavStyled = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const ContainerMenuDesktopStyled = styled.div`
	display: none;

	@media (${({ theme }) => theme.screenSize.laptop}) {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
`;
