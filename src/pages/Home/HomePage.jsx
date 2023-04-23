import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';

import { ContainerStyled } from '../../styled/container.styled';
import TitleSection from '../../components/Title/TitleSection';
import Cards from '../../components/Cards/Cards';
import { ToastContext } from '../../context/ToastContext';

function HomePage({ children }) {
	const characters = useSelector((state) => state.characters);
	const loader = useSelector((state) => state.loader);
	const { addToast } = useContext(ToastContext);

	useEffect(() => {
		if (characters.error) {
			addToast({
				title: 'Error',
				description: characters.error,
				type: 'error',
			});
		}
	}, [characters, addToast]);

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
