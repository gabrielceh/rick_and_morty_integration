import genderImg from '../../assets/images/details/gender.png';
import originImg from '../../assets/images/details/origin.png';
import locImg from '../../assets/images/details/location.png';
import speciesImg from '../../assets/images/details/species.png';

import styled from 'styled-components';

export const DetailStyled = styled.div`
	max-width: 850px;
	margin: 1rem auto;
	border-radius: 20px;
	overflow: hidden;
	border: ${({ theme, status }) =>
		`10px solid ${
			status === 'Alive'
				? theme.colors.emerald['500']
				: status === 'Dead'
				? theme.colors.red['500']
				: theme.colors.slate['100']
		}`};
`;

export const DetailsStatusStyled = styled.span`
	font-weight: 800;
	font-size: ${({ theme }) => theme.fontSize.xl};
	display: inline-block;
	width: 40%;
	text-align: center;
	color: ${({ theme, status }) =>
		`${
			status === 'Alive'
				? theme.colors.emerald['500']
				: status === 'Dead'
				? theme.colors.red['600']
				: theme.colors.darkBlue['500']
		}`};

	&::selection {
		color: ${({ theme }) => theme.colors.emerald['600']};
		background-color: ${({ theme }) => theme.colors.yellow['400']};
	}
`;

export const ContainerImageHeroStyled = styled.section`
	position: relative;
	width: 100%;
	max-width: 1980px;
	height: 350px;
	min-height: 320px;
	max-height: 350px;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.body};
	background-image: ${({ url }) => `url(${url})`};
	background-repeat: no-repeat;
	background-size: 100%;
	background-attachment: fixed;

	@media ${({ theme }) => theme.screenSize.tablet} {
		height: 450px;
		min-height: 450px;
		max-height: 450px;
	}
`;

export const NameStyled = styled.h1`
	text-align: center;
	color: ${({ theme }) => theme.colors.slate['50']};
	font-size: ${({ theme }) => theme.fontSize.xl_2};

	&::selection {
		color: ${({ theme }) => theme.colors.emerald['600']};
		background-color: ${({ theme }) => theme.colors.yellow['400']};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		font-size: ${({ theme }) => theme.fontSize.xl_4};
	}
`;

export const BackgroundImageHero = styled.div`
	background-color: ${({ theme }) => `${theme.colors.slate['900']}aa`};
	backdrop-filter: blur(10px);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: grid;
	place-content: center;
`;

export const DetailsMiddleSectionStyled = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	width: 100%;
	background-color: ${({ theme }) => `${theme.body}`};
	transition: background-color 0.5s ease-in-out;
	border-top: ${({ theme, status }) =>
		`2px solid ${
			status === 'Alive'
				? theme.colors.emerald['500']
				: status === 'Dead'
				? theme.colors.red['500']
				: theme.colors.slate['100']
		}`};
	border-bottom: ${({ theme, status }) =>
		`2px solid ${
			status === 'Alive'
				? theme.colors.emerald['500']
				: status === 'Dead'
				? theme.colors.red['500']
				: theme.colors.slate['100']
		}`};
`;

export const DividerSection = styled.div`
	&.vert {
		width: 1px;
		min-height: 75px;
		background-color: ${({ theme }) => theme.colors.slate['300']};
	}
`;

export const InfoContainer = styled.section`
	width: 100%;
	display: grid;
	justify-items: center;

	@media ${({ theme }) => theme.screenSize.tablet} {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
`;

export const InfoCard = styled.div`
	width: 100%;
	height: 120px;
	font-size: ${({ theme }) => theme.fontSize.xl_2};
	font-weight: 900;
	place-content: center;
	text-align: center;
	color: ${({ theme }) => theme.colors.emerald['50']};
	background-color: ${({ theme }) => theme.body};

	&.gender {
		background-image: ${`url(${genderImg})`};
	}
	&.location {
		background-image: ${`url(${locImg})`};
	}
	&.origin {
		background-image: ${`url(${originImg})`};
	}
	&.species {
		background-image: ${`url(${speciesImg})`};
	}

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 2.5rem;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => `${theme.colors.slate['900']}aa`};
		backdrop-filter: blur(2px);
		&::selection {
			color: ${({ theme }) => theme.colors.emerald['600']};
			background-color: ${({ theme }) => theme.colors.yellow['400']};
		}
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		height: 200px;
	}
`;

export const ImageContainer = styled.section`
	width: 100%;
	margin: 2rem auto;
	display: grid;
	place-content: center;

	& img {
		width: 150px;
		height: 150px;
		background-color: ${({ theme }) => theme.boxy};
		border-radius: 50%;
		box-shadow: ${({ theme }) => `10px 10px 10px ${theme.colors.slate['700']}`};
		outline: ${({ theme, status }) =>
			`8px solid ${
				status === 'Alive'
					? theme.colors.emerald['500']
					: status === 'Dead'
					? theme.colors.red['500']
					: theme.colors.slate['100']
			}`};

		@media ${({ theme }) => theme.screenSize.tablet} {
			width: 250px;
			height: 250px;
			min-height: 250px;
			max-height: 250px;
		}
	}
`;
