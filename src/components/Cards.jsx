import { ContainerStyled } from '../styled/container.styled';
import Card2 from './Card2';

import styled from 'styled-components';
import SkeletonCard from './SkeletonCard';

export default function Cards({ characters, onClose, loading = false }) {
	return (
		<ContainerStyled>
			{!characters.length && !loading ? (
				<NoCardsMessageStyle>No Cards yet 😥</NoCardsMessageStyle>
			) : (
				<GridCards>
					{loading && <SkeletonCard />}
					{characters.map((character) => (
						<Card2
							key={character.id}
							id={character.id}
							name={character.name}
							status={character.status}
							species={character.species}
							gender={character.gender}
							origin={character.origin}
							image={character.image}
							onClose={onClose}
						/>
					))}
				</GridCards>
			)}
		</ContainerStyled>
	);
}

const GridCards = styled.section`
	width: 100%;
	min-height: 50vh;
	margin: 0 auto;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
	justify-content: center;
	justify-items: center;
	gap: 2rem;
`;

const NoCardsMessageStyle = styled.h2`
	margin: 3rem auto;
	width: 80%;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.xl_2};
	color: ${({ theme }) => theme.colors.slate['500']};

	&::selection {
		color: ${({ theme }) => theme.colors.emerald['600']};
		background-color: ${({ theme }) => theme.colors.yellow['300']};
	}
`;
