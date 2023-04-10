import Card2 from './Card2';

import styled from 'styled-components';

export default function Cards({ characters, onClose }) {
	return (
		<GridCards>
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
