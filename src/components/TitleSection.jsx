import React from 'react';
import styled from 'styled-components';

import { ContainerStyled } from '../styled/container.styled';

function TitleSection({ title }) {
	return (
		<ContainerStyled>
			<TitleStyled c>{title}</TitleStyled>
		</ContainerStyled>
	);
}

export default TitleSection;

const TitleStyled = styled.h2`
	text-align: center;
	color: transparent;
	font-size: ${({ theme }) => theme.fontSize.xl_6};
	font-weight: 800;
	letter-spacing: 1px;
	background: ${({ theme }) => theme.colors.emerald['400']};
	background: ${({ theme }) =>
		`radial-gradient(circle 150px at center, ${theme.colors.emerald['700']} 10%, ${theme.colors.emerald['200']} 50%, ${theme.colors.emerald['500']} 100%)`};
	background-size: 200% 100%;
	background-clip: text;
	-webkit-background-clip: text;

	animation-name: gradient;
	animation-duration: 20s;
	animation-timing-function: ease;
	animation-iteration-count: infinite;
	/* animation-direction: reverse; */

	&::selection {
		color: ${({ theme }) => theme.colors.yellow['300']};
		background-color: ${({ theme }) => theme.colors.emerald['500']};
	}

	@media ${({ theme }) => theme.screenSize.laptop} {
		font-size: ${({ theme }) => theme.fontSize.xl_7};
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}
`;
