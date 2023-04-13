import styled, { keyframes } from 'styled-components';

export const moveFrames = keyframes`
0%{
	scale:1;
}
50%{
	scale:0.9
}
100%{
	/* transform: rotate(360deg); */
	scale: 1;
}
`;

export const CardStyled = styled.article`
	cursor: pointer;
	position: relative;
	width: 300px;
	height: 300px;
	transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out,
		scale 0.3s ease-in;
	border-radius: 7px;
	overflow: hidden;

	&:hover {
		animation-name: shadowCardFrames;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	&::after,
	&::before {
		content: '';
		position: absolute;
		border-radius: inherit;
	}

	&::before {
		width: 100%;
		height: 100%;
		background-image: ${({ theme }) =>
			`linear-gradient(0deg, ${theme.colors.emerald['400']} 0%, ${theme.colors.yellow['300']} 100%)`};
		scale: 1;
	}

	&:hover::before {
		animation-name: ${moveFrames};
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	&::after {
		width: 95%;
		height: 95%;
		background-color: ${({ theme }) => theme.body};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	@keyframes shadowCardFrames {
		0% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 25px 5px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}

		50% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 0px 0px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}

		100% {
			box-shadow: ${({ theme, darkMode }) =>
				`0px 0px 25px 5px ${
					darkMode === 'light'
						? theme.colors.emerald['600']
						: theme.colors.emerald['200']
				}`};
		}
	}
`;

export const CardContainerStyled = styled.div`
	width: 96%;
	height: 96%;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 1;
	translate: -50% -50%;
	overflow: hidden;
`;

export const ImgCardStyled = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	width: 100%;
	transition: scale 0.3s ease-in-out;

	${CardStyled}:hover & {
		scale: 1.2;
	}
`;

export const InfoContainerStyled = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 0%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	opacity: 0;
	visibility: hidden;
	transition: background-color 0.3s ease-in-out, height 0.3s ease-in-out,
		opacity 0.3s ease-in;

	${CardStyled}:hover & {
		background-color: ${(props) => `${props.theme.colors.slate['900']}aa`};
		backdrop-filter: blur(5px);
		opacity: 1;
		visibility: visible;
		height: 100%;
	}

	&.mobile {
		background-color: ${(props) => `${props.theme.colors.slate['900']}aa`};
		opacity: 1;
		visibility: visible;
		height: 100%;
	}
`;

export const InfoHeaderStyled = styled.header`
	font-weight: bold;
	color: ${(props) => `${props.theme.colors.slate['50']}`};
	letter-spacing: 0.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& h3 {
		font-size: ${(props) => `${props.theme.fontSize.xl}`};
		text-align: center;
		margin-top: 0.5rem;
	}
`;

export const InfoBodyStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
`;

export const InfoTextStyled = styled.span`
	color: ${({ theme }) => `${theme.colors.slate['50']}`};
	font-size: ${({ theme }) => `${theme.fontSize.lg}`};
	font-weight: medium;
	text-align: center;
`;

export const ButtonsContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export const ButtonCardStyled = styled.button`
	cursor: pointer;
	font-family: 'PTMono';
	border-radius: 50%;
	padding: 0.5rem;
	border: 3px solid white;
	background-color: ${(props) => `${props.theme.colors.yellow['200']}`};
	transition: background-color 0.1s ease-in-out, scale 0.1s ease-in-out,
		translate 0.1s ease-in-out, box-shadow 0.1s ease-in-out;

	&.mobile {
		width: 60px;
		height: 60px;
		font-size: ${({ theme }) => theme.fontSize.xl};
	}

	&:hover {
		translate: -2px -2px;
		box-shadow: ${({ theme }) => `3px 3px 5px ${theme.colors.slate['900']}`};
		background-color: ${(props) => `${props.theme.colors.yellow['500']}`};
	}
	&:active {
		scale: 0.95;
		translate: 0px 0px;
		box-shadow: ${({ theme }) =>
			`3px 3px 5px ${theme.colors.yellow['900']} inset`};
	}
`;
