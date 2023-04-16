import styled from 'styled-components';

export const DetailsStatusStyled = styled.span`
	font-weight: 800;
	color: ${({ theme, status }) =>
		`${
			status === 'Alive'
				? theme.colors.emerald['500']
				: status === 'Dead'
				? theme.colors.red['600']
				: theme.colors.darkBlue['500']
		}`};
`;

export const ContainerImageHeroStyled = styled.section`
	position: relative;
	width: 100%;
	max-width: 1980px;
	margin: 0 auto;
	height: 200px;
	min-height: 200px;
	max-height: 200px;
	background-color: ${({ theme }) => theme.body};
	background-image: ${({ url }) => `url(${url})`};
	background-repeat: no-repeat;
	background-size: 100%;
	background-attachment: fixed;

	@media ${({ theme }) => theme.screenSize.tablet} {
		height: 320px;
		min-height: 320px;
		max-height: 320px;
	}
`;

export const BackgroundImageHero = styled.div`
	background-color: ${({ theme }) => `${theme.colors.slate['900']}cc`};
	backdrop-filter: blur(10px);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: grid;
	place-content: center;
`;

export const InfoContainer = styled.section`
	margin-top: 2rem;
	margin-bottom: 2rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 2rem;
	justify-items: center;
`;

export const InfoCard = styled.p`
	display: grid;
	place-content: center;
	text-align: center;
	width: 150px;
	height: 100px;
	padding: 0.5rem;
	border-radius: 10px;
	box-shadow: ${({ theme }) => `0px 0px 5px ${theme.colors.emerald['500']}`};
	font-weight: 600;
	color: ${({ theme }) => theme.colors.emerald['600']};
	background-color: ${({ theme }) => theme.body};

	animation-name: neon;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;

	@keyframes neon {
		0% {
			scale: 1;
			box-shadow: ${({ theme }) =>
				`0px 0px 0px ${theme.colors.emerald['500']}`};
		}

		50% {
			scale: 0.98;
			box-shadow: ${({ theme }) =>
				`0px 0px 50px ${theme.colors.emerald['500']}`};
		}

		100% {
			scale: 1;
			box-shadow: ${({ theme }) =>
				`0px 0px 0px ${theme.colors.emerald['500']}`};
		}
	}
`;

export const ImageContainer = styled.section`
	width: 100%;
	margin-bottom: 2rem;
	display: grid;
	place-content: center;

	& img {
		width: 300px;
		height: 300px;
		background-color: ${({ theme }) => theme.boxy};
		border-radius: 20px;
		outline: ${({ theme }) => `5px solid ${theme.colors.yellow['500']}`};
	}
`;
