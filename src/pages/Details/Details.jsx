import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { urls } from '../../helpers/URL';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import TitleSection from '../../components/Title/TitleSection';
import SkeletonDetails from '../../components/Skeleton/SkeletonDetails';
import { ContainerStyled } from '../../styled/container.styled';
import {
	BackgroundImageHero,
	ContainerImageHeroStyled,
	DetailsStatusStyled,
	ImageContainer,
	InfoCard,
	InfoContainer,
} from './Details.styled';

function Details() {
	const [character, setCharacter] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errorRes, setErrorRes] = useState({
		res: false,
		message: '',
	});
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
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
			})
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<>
			{loading && <SkeletonDetails />}
			{character && !loading ? (
				<>
					<ContainerImageHeroStyled url={character?.image}>
						<BackgroundImageHero>
							{/* <ContainerStyled> */}
							<TitleSection title={character.name} />
							{/* </ContainerStyled> */}
						</BackgroundImageHero>
					</ContainerImageHeroStyled>

					<ContainerStyled>
						<InfoContainer>
							<InfoCard>
								<DetailsStatusStyled status={character?.status}>
									Status: {character?.status}
								</DetailsStatusStyled>
							</InfoCard>
							<InfoCard>Especie: {character?.species}</InfoCard>
							<InfoCard>Gender: {character?.gender}</InfoCard>
							<InfoCard>Origin: {character?.origin.name}</InfoCard>
							<InfoCard>Locattion: {character?.location.name}</InfoCard>
						</InfoContainer>
						<ImageContainer>
							<img
								src={character?.image}
								alt={character?.name}
							/>
						</ImageContainer>
					</ContainerStyled>
				</>
			) : (
				errorRes.res && (
					<ErrorMessage
						message={errorRes.message}
						size='xl_3'
					/>
				)
			)}
		</>
	);
}

export default Details;
