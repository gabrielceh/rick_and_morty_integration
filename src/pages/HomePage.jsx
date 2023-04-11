import React from 'react';
import { ContainerStyled } from '../styled/container.styled';
import TitleSection from '../components/TitleSection';

function HomePage({ children }) {
	return (
		<ContainerStyled>
			<TitleSection title='WELCOME' />
			{children}
		</ContainerStyled>
	);
}

export default HomePage;
