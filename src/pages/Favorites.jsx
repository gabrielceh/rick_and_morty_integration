import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cards from '../components/Cards';
import { ContainerStyled } from '../styled/container.styled';
import TitleSection from '../components/TitleSection';

function Favorites({ onClose }) {
	const myFavorites = useSelector((state) => state.myFavorites);

	useEffect(() => {
		console.log(myFavorites);
	}, []);

	return (
		<ContainerStyled>
			<TitleSection title='My favorites' />
			<Cards
				characters={myFavorites}
				onClose={onClose}
			/>
		</ContainerStyled>
	);
}

export default Favorites;
