import styled from 'styled-components';

export const DetailsContainerStyled = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			margin-bottom: 1.5rem;
			flex-direction: column;
			gap: 0;
			max-width: 1080px;
			max-height: 1080px;
		}
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		& {
			flex-direction: row;
			gap: 0;
		}
	}
`;

export const DetailsSectionStyled = styled.section`
	width: 100%;
	height: auto;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& img {
		width: 70%;
		min-width: 350px;
		height: auto;
		border-radius: 50%;
		box-shadow: ${({ theme }) =>
			`0px 0px 20px 2px ${theme.colors.yellow['500']}89`};

		animation-name: imgRotate;
		animation-duration: 0.75s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			width: 50%;
		}
		& img {
			width: 90%;
		}
	}

	@keyframes imgRotate {
		0% {
			scale: 0;
			rotate: 0deg;
		}

		90% {
			scale: 1.2;
			rotate: 375deg;
		}
		100% {
			scale: 1;
			rotate: 360deg;
		}
	}
`;

export const DetailsInfoSectionStyled = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	padding: 3rem 1rem;
	overflow: auto;
	background: ${({ theme }) => theme.colors.emerald['300']};
	background: ${({ theme }) =>
		`linear-gradient(45deg, ${theme.colors.emerald['400']} 0%, ${theme.colors.emerald['500']} 50%, ${theme.colors.emerald['700']} 100%)`};
	background-size: 200% 100%;
	color: ${({ theme }) => theme.colors.yellow['50']};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	animation-name: neon;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;

	& h2 {
		color: ${({ theme }) => theme.colors.yellow['50']};
		font-size: ${({ theme }) => theme.fontSize.xl_4};
		text-align: center;
	}

	& p {
		font-size: ${({ theme }) => theme.fontSize.sm};
		font-weight: 600;
		text-align: center;
	}

	& h2::selection,
	& p::selection {
		background: ${({ theme }) => theme.colors.yellow['400']};
		color: ${({ theme }) => theme.colors.emerald['600']};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		& {
			/* width: 100%; */
			min-height: 100%;
		}

		& h2 {
			font-size: ${({ theme }) => theme.fontSize.xl_5};
		}

		& p {
			font-size: ${({ theme }) => theme.fontSize.base};
			font-weight: 600;
			text-align: center;
		}

		& h2::selection,
		& p::selection {
			background-color: ${({ theme }) => theme.colors.yellow['300']};
			color: ${({ theme }) => theme.colors.emerald['500']};
		}
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		width: 50%;
		min-height: 100%;
	}

	@keyframes neon {
		0% {
			translate: 0 0px;
			background-position: 0% 50%;
		}

		50% {
			translate: 0 -10px;
			background-position: 100% 100%;
		}

		100% {
			translate: 0 -0px;
			background-position: 0% 50%;
		}
	}
`;

export const DetailsStatusStyled = styled.p`
	font-weight: 800;
	color: ${({ theme, status }) =>
		`${
			status === 'Alive'
				? theme.colors.lime['200']
				: status === 'Dead'
				? theme.colors.red['800']
				: theme.colors.slate['100']
		}`};
`;
