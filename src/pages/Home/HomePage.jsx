// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeCharacter } from '../../redux/actions/actionCharacters';

import { ContainerStyled } from '../../styled/container.styled';
import TitleSection from '../../components/Title/TitleSection';

function HomePage({ children }) {
	// const characters = useSelector((state) => state.characters);
	// const dispatch = useDispatch();

	// const onClose = (id) => {
	// 	dispatch(removeCharacter(id));
	// };

	// useEffect(() => {
	// 	console.log(characters);
	// }, [characters]);

	return (
		<ContainerStyled>
			<TitleSection title={`¡I'm Pickle Riiiick!`} />
			{children}
		</ContainerStyled>
	);
}

export default HomePage;
