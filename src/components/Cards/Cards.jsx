import Card from '../Card/Card';

import { ContainerStyled } from '../../styled/container.styled';
import { GridCards, NoCardsMessageStyle } from './Cards.styled';
import SkeletonCard from '../Skeleton/SkeletonCard';

export default function Cards({ characters, onClose, loading = false }) {
	return (
		<ContainerStyled>
			{!characters.length && !loading ? (
				<NoCardsMessageStyle>No Cards yet 😥</NoCardsMessageStyle>
			) : (
				<GridCards>
					{loading && <SkeletonCard />}
					{characters.map((character) => (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							gender={character.gender}
							origin={character.origin}
							image={character.image}
							location={character.location}
							onClose={onClose}
						/>
					))}
				</GridCards>
			)}
		</ContainerStyled>
	);
}
