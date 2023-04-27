import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ToastContext } from '../../context/ToastContext';

import TitleSection from '../../components/Title/TitleSection';
import Cards from '../../components/Cards/Cards';

import { ContainerStyled } from '../../styled/container.styled';

function HomePage() {
	const characters = useSelector((state) => state.characters);
	const loader = useSelector((state) => state.loader);
	const { addToast } = useContext(ToastContext);

	// useEffect(() => {
	// 	dispatch(getCharacters());
	// }, []);

	useEffect(() => {
		if (characters.error) {
			addToast({
				title: 'Error',
				description: characters.error,
				type: 'error',
			});
		}
	}, [characters.error]);

	return (
		<ContainerStyled>
			<TitleSection title={`¡I'm Pickle Riiiick!`} />
			<Cards
				characters={characters.data}
				loading={loader}
			/>
		</ContainerStyled>
	);
}

export default HomePage;
