import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

import ErrorMessage from '../components/ErrorMessage';
import { urls } from '../helpers/URL';

function Details() {
	const [character, setCharacter] = useState(null);
	const [errorRes, setErrorRes] = useState({
		res: false,
		message: '',
	});
	const { id } = useParams();

	useEffect(() => {
		axios(`${urls.baseURL}/${id}?key=${urls.key}`)
			.then((response) => response.data)
			.then((data) => {
				setCharacter(data);
			})
			.catch((error) => {
				setErrorRes({
					res: true,
					message: `Can't found character with id ${id}`,
				});
			});
	}, [id]);

	return (
		<>
			{character ? (
				<DetailsContainerStyled>
					<DetailsSectionStyled>
						<img
							src={character.image}
							alt={character.name}
						/>
					</DetailsSectionStyled>
					<DetailsInfoSectionStyled>
						<h2>{character?.name}</h2>
						<DetailsStatusStyled status={character?.status}>
							Status: {character?.status}
						</DetailsStatusStyled>
						<p>Origin: {character?.origin.name}</p>
						<p>Location: {character?.location.name}</p>
						<p>Specie: {character?.species}</p>
					</DetailsInfoSectionStyled>
				</DetailsContainerStyled>
			) : errorRes.res ? (
				<ErrorMessage
					message={errorRes.message}
					size='xl_3'
				/>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}

export default Details;

const DetailsContainerStyled = styled.div`
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

const DetailsSectionStyled = styled.section`
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

const DetailsInfoSectionStyled = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: auto;
	padding: 3rem 1rem;
	overflow: auto;
	background-color: ${({ theme }) => theme.colors.emerald['300']};
	color: ${({ theme }) => theme.colors.slate['800']};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	animation-name: neon;
	animation-duration: 2s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;

	& h2 {
		color: ${({ theme }) => theme.colors.yellow['50']};
		font-size: ${({ theme }) => theme.fontSize.xl_4};
		text-align: center;
	}

	& p {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: 600;
		text-align: center;
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
			font-size: ${({ theme }) => theme.fontSize.lg};
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
			box-shadow: ${({ theme }) =>
				`0px 0px 20px 2px ${theme.colors.yellow['500']}89`};
			translate: 0 0px;
		}

		25% {
			box-shadow: ${({ theme }) =>
				`0px 0px 15px 2px ${theme.colors.yellow['500']}89`};
		}
		50% {
			translate: 0 -10px;
		}
		75% {
			box-shadow: ${({ theme }) =>
				`0px 0px 0px 0px ${theme.colors.yellow['500']}89`};
		}

		100% {
			box-shadow: ${({ theme }) =>
				`0px 0px 20px 2px ${theme.colors.emerald['500']}89`};
			translate: 0 -0px;
		}
	}
`;

const DetailsStatusStyled = styled.p`
	color: ${({ theme, status }) =>
		`${
			status === 'Alive'
				? theme.colors.lime['200']
				: status === 'Dead'
				? theme.colors.red['600']
				: theme.colors.slate['100']
		}`};
`;
