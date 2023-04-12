import React from 'react';
import styled from 'styled-components';

import { ContainerStyled } from '../../styled/container.styled';
import { TitleStyled } from './Title.styled';

function TitleSection({ title }) {
	return (
		<ContainerStyled>
			<TitleStyled>{title}</TitleStyled>
		</ContainerStyled>
	);
}

export default TitleSection;
