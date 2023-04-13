import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { urls } from '../../helpers/URL';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import TitleSection from '../../components/Title/TitleSection';
import SkeletonDetails from '../../components/Skeleton/SkeletonDetails';
import { ContainerStyled } from '../../styled/container.styled';
import {
	DetailsContainerStyled,
	DetailsInfoSectionStyled,
	DetailsSectionStyled,
	DetailsStatusStyled,
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
		<ContainerStyled>
			<TitleSection title='Details' />
			{loading && <SkeletonDetails />}
			{character && !loading ? (
				<DetailsContainerStyled>
					<DetailsSectionStyled>
						<img
							src={character.image}
							alt={character.name}
						/>
					</DetailsSectionStyled>
					<DetailsInfoSectionStyled>
						<h2>
							{character?.id} - {character?.name}
						</h2>
						<DetailsStatusStyled status={character?.status}>
							Status: {character?.status}
						</DetailsStatusStyled>
						<p>Especie: {character?.species}</p>
						<p>Gender: {character?.gender}</p>
						<p>Origin: {character?.origin.name}</p>
						<p>Locattion: {character?.location.name}</p>
					</DetailsInfoSectionStyled>
				</DetailsContainerStyled>
			) : (
				errorRes.res && (
					<ErrorMessage
						message={errorRes.message}
						size='xl_3'
					/>
				)
			)}
		</ContainerStyled>
	);
}

export default Details;
