import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

import ErrorMessage from '../components/ErrorMessage';

function Details() {
	const [character, setCharacter] = useState(null);
	const [errorRes, setErrorRes] = useState({
		res: false,
		message: '',
	});
	const { id } = useParams();

	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`)
			.then(({ data }) => {
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

	@media ${({ theme }) => theme.screenSize.laptop} {
		margin-bottom: 1.5rem;
		flex-direction: row;
		gap: 0;
		max-width: 1080px;
		max-height: 1080px;
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
		height: auto;
		border-radius: 50%;
		box-shadow: ${({ theme }) =>
			`0px 0px 20px 2px ${theme.colors.yellow['500']}89`};
	}

	@media ${({ theme }) => theme.screenSize.tablet} {
		width: 50%;
		& img {
			width: 90%;
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

	@media ${({ theme }) => theme.screenSize.tablet} {
		width: 100%;
		min-height: 100%;

		& h2 {
			font-size: ${({ theme }) => theme.fontSize.xl_5};
		}

		& p {
			font-size: ${({ theme }) => theme.fontSize.lg};
			font-weight: 600;
			text-align: center;
		}
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		width: 50%;
		min-height: 100%;
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
