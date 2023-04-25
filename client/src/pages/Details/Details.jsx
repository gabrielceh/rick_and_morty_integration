import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { urls } from '../../helpers/URL';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SkeletonDetails from '../../components/Skeleton/SkeletonDetails';

import {
	BackgroundImageHero,
	ContainerImageHeroStyled,
	DetailsStatusStyled,
	ImageContainer,
	InfoCard,
	InfoContainer,
	DetailStyled,
	DetailsMiddleSectionStyled,
	DividerSection,
	NameStyled,
} from './Details.styled';
import BtnFavDetail from '../../components/BtnFav/BtnFav';

function Details() {
	const [character, setCharacter] = useState(null);
	const [infoSect, setInfoSect] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorRes, setErrorRes] = useState({
		res: false,
		message: '',
	});
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		axios(`${urls.baseURL}/${id}`)
			.then((response) => response.data)
			.then((data) => {
				setCharacter(data);
				let info = [
					{ id: '1', className: 'species', label: data.species },
					{ id: '2', className: 'gender', label: data.gender },
					{ id: '3', className: 'origin', label: data.origin.name },
					{ id: '4', className: 'location', label: data.location.name },
				];
				setInfoSect([...info]);
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
				<DetailStyled status={character.status}>
					<ContainerImageHeroStyled url={character?.image}>
						<BackgroundImageHero>
							<ImageContainer status={character.status}>
								<img
									src={character?.image}
									alt={character?.name}
								/>
							</ImageContainer>
							<NameStyled>{character.name}</NameStyled>
						</BackgroundImageHero>
					</ContainerImageHeroStyled>

					<DetailsMiddleSectionStyled status={character.status}>
						<BtnFavDetail
							id={character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							gender={character.gender}
							origin={character.origin}
							image={character.image}
							location={character.location}
							className='detail'
						/>
						<DividerSection className='vert'></DividerSection>
						<DetailsStatusStyled status={character?.status}>
							Status: {character?.status}
						</DetailsStatusStyled>
					</DetailsMiddleSectionStyled>

					<InfoContainer>
						{/* <InfoCard></InfoCard> */}
						{infoSect.map((info) => (
							<InfoCard
								key={info.id}
								className={info.className}>
								<div>
									{info.className.toUpperCase()}:<br /> {info.label}
								</div>
							</InfoCard>
						))}
					</InfoContainer>
				</DetailStyled>
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
